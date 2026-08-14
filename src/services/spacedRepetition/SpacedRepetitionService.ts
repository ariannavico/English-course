import type {
  ReviewRating,
  ReviewableType,
  SpacedRepetitionItem,
} from "@/types";
import { addDays, daysBetween, isDue } from "@/utils/dates";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

/**
 * A deliberately simple, performance-based scheduler. The item shape is
 * SM-2-compatible (ease/interval/repetitions/lapses) so the CALCULATION can be
 * replaced with SM-2 or FSRS later without touching persisted data or callers.
 */

const DEFAULT_EASE = 2.3;
const MIN_EASE = 1.3;

/** Multipliers applied to the current interval per rating. */
const RATING = {
  again: { intervalDays: 0, easeDelta: -0.2, lapse: true },
  hard: { multiplier: 1.2, easeDelta: -0.05, lapse: false },
  good: { multiplier: 2.0, easeDelta: 0, lapse: false },
  easy: { multiplier: 3.2, easeDelta: 0.1, lapse: false },
} as const;

export function createItem(
  id: string,
  type: ReviewableType,
  at: Date = new Date(),
): SpacedRepetitionItem {
  return {
    id,
    type,
    ease: DEFAULT_EASE,
    interval: 0,
    repetitions: 0,
    lapses: 0,
    nextReview: at.toISOString(),
  };
}

/**
 * Pure scheduling function. Returns the NEXT state of an item given a rating.
 * "again" resets the interval to (roughly) 10 minutes → due immediately today.
 */
export function calculateNextReview(
  item: SpacedRepetitionItem,
  rating: ReviewRating,
  at: Date = new Date(),
): SpacedRepetitionItem {
  const nowStr = at.toISOString();

  if (rating === "again") {
    const ease = clampEase(item.ease + RATING.again.easeDelta);
    return {
      ...item,
      ease,
      interval: 0,
      repetitions: 0,
      lapses: item.lapses + 1,
      lastReviewed: nowStr,
      // Re-show within the same session/day.
      nextReview: addDays(at, 0),
    };
  }

  const cfg = RATING[rating];
  const ease = clampEase(item.ease + cfg.easeDelta);

  // First successful sighting → 1 day; second → 3-ish; then ease-scaled.
  let interval: number;
  if (item.repetitions === 0) interval = rating === "easy" ? 2 : 1;
  else if (item.repetitions === 1) interval = rating === "hard" ? 2 : 3;
  else interval = Math.max(1, Math.round(item.interval * ease * (cfg.multiplier / 2)));

  return {
    ...item,
    ease,
    interval,
    repetitions: item.repetitions + 1,
    lastReviewed: nowStr,
    nextReview: addDays(at, interval),
  };
}

function clampEase(ease: number): number {
  return Math.max(MIN_EASE, Math.round(ease * 100) / 100);
}

/**
 * Persistence-backed facade over a map of SR items. Callers use this; the pure
 * `calculateNextReview` above is what tests exercise directly.
 */
export class SpacedRepetitionService {
  constructor(private storage: StorageService) {}

  private load(): Record<string, SpacedRepetitionItem> {
    return this.storage.get(STORAGE_KEYS.spacedRepetition) ?? {};
  }

  private save(items: Record<string, SpacedRepetitionItem>): void {
    this.storage.set(STORAGE_KEYS.spacedRepetition, items);
  }

  getAll(): SpacedRepetitionItem[] {
    return Object.values(this.load());
  }

  get(id: string): SpacedRepetitionItem | undefined {
    return this.load()[id];
  }

  /** Ensure an item exists (idempotent); returns it. */
  ensure(id: string, type: ReviewableType): SpacedRepetitionItem {
    const items = this.load();
    if (!items[id]) {
      items[id] = createItem(id, type);
      this.save(items);
    }
    return items[id];
  }

  /** Items whose nextReview is in the past. */
  getDueItems(at: Date = new Date()): SpacedRepetitionItem[] {
    return this.getAll().filter((i) => isDue(i.nextReview, at));
  }

  /** Items the learner keeps failing (lapses / low ease). */
  getWeakItems(): SpacedRepetitionItem[] {
    return this.getAll()
      .filter((i) => i.lapses > 0 || i.ease <= MIN_EASE + 0.2)
      .sort((a, b) => b.lapses - a.lapses || a.ease - b.ease);
  }

  /** Recently introduced items (few repetitions, seen lately). */
  getRecentlyLearned(withinDays = 7, at: Date = new Date()): SpacedRepetitionItem[] {
    return this.getAll()
      .filter(
        (i) =>
          i.repetitions <= 2 &&
          i.lastReviewed != null &&
          daysBetween(i.lastReviewed, at) <= withinDays,
      )
      .sort((a, b) => (a.lastReviewed! < b.lastReviewed! ? 1 : -1));
  }

  /** Record a review outcome and persist the new schedule. */
  recordReview(
    id: string,
    type: ReviewableType,
    rating: ReviewRating,
    at: Date = new Date(),
  ): SpacedRepetitionItem {
    const items = this.load();
    const current = items[id] ?? createItem(id, type, at);
    const next = calculateNextReview(current, rating, at);
    items[id] = next;
    this.save(items);
    return next;
  }
}
