import type {
  ReviewGrade,
  ReviewItem,
  ReviewKind,
  ReviewMode,
  ReviewState,
  ReviewTrack,
  SpacedRepetitionItem,
} from "@/types";
import { isDue } from "@/utils/dates";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";
import { calculateNextReview } from "../spacedRepetition/SpacedRepetitionService";

type ItemMap = Record<string, ReviewItem>;

/* ------------------------------ pure logic ------------------------------ */

function freshTrack(due: Date = new Date()): ReviewTrack {
  return {
    ease: 2.3,
    interval: 0,
    repetitions: 0,
    lapses: 0,
    correct: 0,
    wrong: 0,
    due: due.toISOString(),
  };
}

export function newItem(id: string, kind: ReviewKind, at: Date = new Date()): ReviewItem {
  return {
    id,
    kind,
    recognition: freshTrack(at),
    recall: freshTrack(at),
    addedAt: at.toISOString(),
  };
}

/**
 * Advance one track by one graded review. The SM-2 arithmetic is delegated to
 * the existing `calculateNextReview` (single source of truth), then mapped back
 * onto the track and the correct/wrong tallies updated.
 */
export function scheduleTrack(track: ReviewTrack, grade: ReviewGrade, at: Date = new Date()): ReviewTrack {
  const synthetic: SpacedRepetitionItem = {
    id: "_",
    type: "grammar",
    ease: track.ease,
    interval: track.interval,
    repetitions: track.repetitions,
    lapses: track.lapses,
    lastReviewed: track.lastReviewed,
    nextReview: track.due,
  };
  const next = calculateNextReview(synthetic, grade, at);
  const ok = grade !== "again";
  return {
    ease: next.ease,
    interval: next.interval,
    repetitions: next.repetitions,
    lapses: next.lapses,
    lastReviewed: next.lastReviewed,
    due: next.nextReview,
    correct: track.correct + (ok ? 1 : 0),
    wrong: track.wrong + (ok ? 0 : 1),
  };
}

/** Learner-facing state of a single track. */
export function trackState(track: ReviewTrack): ReviewState {
  if (!track.lastReviewed) return "new";
  if (track.repetitions === 0) return "forgotten"; // an "again" reset it
  if (track.interval >= 21) return "mastered";
  if (track.interval >= 7) return "familiar";
  return "learning";
}

const RANK: Record<ReviewState, number> = {
  new: 0,
  forgotten: 1,
  learning: 2,
  familiar: 3,
  mastered: 4,
};

/** An item's overall state is that of its WEAKER track — you don't "know" a
 * word until you can both recognise and recall it. */
export function itemState(item: ReviewItem): ReviewState {
  const a = trackState(item.recognition);
  const b = trackState(item.recall);
  return RANK[a] <= RANK[b] ? a : b;
}

/** Is either track (or a specific one) due at `at`? */
export function isItemDue(item: ReviewItem, at: Date = new Date(), mode?: ReviewMode): boolean {
  if (mode) return isDue(item[mode].due, at);
  return isDue(item.recognition.due, at) || isDue(item.recall.due, at);
}

/* --------------------------- legacy migration --------------------------- */

const LEGACY_KIND: Partial<Record<SpacedRepetitionItem["type"], ReviewKind>> = {
  verb: "verb",
  "phrasal-verb": "phrasal",
  vocabulary: "word",
  grammar: "grammar",
  // "exercise" is intentionally dropped — exercises are not review items.
};

/**
 * Seed ReviewItems from the legacy per-type SM-2 store. The legacy schedule is
 * a recognition-style history (see it → know it), so it maps onto the
 * recognition track; recall starts fresh, since it was never separately trained.
 * Pure and idempotent-friendly: returns a fresh map, never mutates input.
 */
export function migrateFromLegacy(
  legacy: Record<string, SpacedRepetitionItem>,
  at: Date = new Date(),
): ItemMap {
  const out: ItemMap = {};
  for (const sr of Object.values(legacy)) {
    const kind = LEGACY_KIND[sr.type];
    if (!kind) continue;
    out[sr.id] = {
      id: sr.id,
      kind,
      source: "legacy",
      addedAt: at.toISOString(),
      lastSeen: sr.lastReviewed,
      recognition: {
        ease: sr.ease,
        interval: sr.interval,
        repetitions: sr.repetitions,
        lapses: sr.lapses,
        correct: sr.repetitions,
        wrong: sr.lapses,
        lastReviewed: sr.lastReviewed,
        due: sr.nextReview,
      },
      recall: freshTrack(at),
    };
  }
  return out;
}

/* ------------------------------ service ------------------------------ */

/**
 * The unified review store. Kind-agnostic and mode-aware. Reuses the SM-2
 * scheduler for the maths and the StorageService for persistence.
 */
export class ReviewService {
  constructor(private storage: StorageService) {}

  private load(): ItemMap {
    return this.storage.get<ItemMap>(STORAGE_KEYS.reviewItems) ?? {};
  }

  private save(map: ItemMap): void {
    this.storage.set(STORAGE_KEYS.reviewItems, map);
  }

  all(): ReviewItem[] {
    return Object.values(this.load());
  }

  get(id: string): ReviewItem | undefined {
    return this.load()[id];
  }

  /** Ensure an item exists (idempotent); returns it. */
  ensure(id: string, kind: ReviewKind, source?: string, at: Date = new Date()): ReviewItem {
    const map = this.load();
    if (!map[id]) {
      const item = newItem(id, kind, at);
      if (source) item.source = source;
      map[id] = item;
      this.save(map);
    }
    return map[id];
  }

  /** Record a graded review on one ability of one item. */
  grade(id: string, mode: ReviewMode, grade: ReviewGrade, at: Date = new Date()): ReviewItem {
    const map = this.load();
    const item = map[id] ?? newItem(id, "word", at);
    item[mode] = scheduleTrack(item[mode], grade, at);
    item.lastSeen = at.toISOString();
    map[id] = item;
    this.save(map);
    return item;
  }

  /** Items with at least one track due (optionally for a specific ability). */
  due(at: Date = new Date(), mode?: ReviewMode): ReviewItem[] {
    return this.all().filter((i) => isItemDue(i, at, mode));
  }

  dueCount(at: Date = new Date(), mode?: ReviewMode): number {
    return this.due(at, mode).length;
  }

  /** A capped review queue, most-overdue first, optionally filtered by kind/mode. */
  queue(opts: { at?: Date; mode?: ReviewMode; kind?: ReviewKind; limit?: number } = {}): ReviewItem[] {
    const at = opts.at ?? new Date();
    let items = this.due(at, opts.mode);
    if (opts.kind) items = items.filter((i) => i.kind === opts.kind);
    items.sort((a, b) => {
      const da = Math.min(dueMs(a, opts.mode), dueMs(a));
      const db = Math.min(dueMs(b, opts.mode), dueMs(b));
      return da - db; // earliest due first
    });
    return opts.limit ? items.slice(0, opts.limit) : items;
  }

  /**
   * One-time seed of the store from the legacy SM-2 data. Only runs when the
   * store is empty, so it never clobbers real review history. Returns how many
   * items were imported (0 if it was already populated).
   */
  migrateFromLegacyStore(at: Date = new Date()): number {
    const existing = this.load();
    if (Object.keys(existing).length > 0) return 0;
    const legacy =
      this.storage.get<Record<string, SpacedRepetitionItem>>(STORAGE_KEYS.spacedRepetition) ?? {};
    const seeded = migrateFromLegacy(legacy, at);
    const count = Object.keys(seeded).length;
    if (count > 0) this.save(seeded);
    return count;
  }
}

function dueMs(item: ReviewItem, mode?: ReviewMode): number {
  if (mode) return new Date(item[mode].due).getTime();
  return Math.min(new Date(item.recognition.due).getTime(), new Date(item.recall.due).getTime());
}
