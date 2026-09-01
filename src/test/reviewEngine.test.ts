import { describe, expect, it } from "vitest";
import type { StorageService } from "@/services/storage/StorageService";
import {
  ReviewService,
  itemState,
  migrateFromLegacy,
  newItem,
  scheduleTrack,
  trackState,
} from "@/services/review/ReviewService";
import type { ReviewTrack, SpacedRepetitionItem } from "@/types";

class MemStore implements StorageService {
  private m = new Map<string, unknown>();
  get<T>(k: string): T | null {
    return this.m.has(k) ? (JSON.parse(JSON.stringify(this.m.get(k))) as T) : null;
  }
  set<T>(k: string, v: T): void {
    this.m.set(k, JSON.parse(JSON.stringify(v)));
  }
  remove(k: string): void {
    this.m.delete(k);
  }
  clearAll(): void {
    this.m.clear();
  }
  keys(): string[] {
    return [...this.m.keys()];
  }
  /** test helper to preload the legacy store */
  seedLegacy(items: Record<string, SpacedRepetitionItem>): void {
    this.set("spacedRepetition", items);
  }
}

const at = new Date("2026-09-01T09:00:00.000Z");

describe("review track scheduling & state", () => {
  it("a fresh track is 'new' and both abilities start independent", () => {
    const item = newItem("travel-suitcase", "word", at);
    expect(trackState(item.recognition)).toBe("new");
    expect(trackState(item.recall)).toBe("new");
    expect(itemState(item)).toBe("new");
  });

  it("grading one ability leaves the other untouched; overall = weaker track", () => {
    let t: ReviewTrack = newItem("x", "word", at).recognition;
    t = scheduleTrack(t, "good", at); // recognition now learning
    expect(trackState(t)).toBe("learning");
    // overall of an item recognised-but-not-recalled is still 'new'
    const item = { ...newItem("x", "word", at), recognition: t };
    expect(itemState(item)).toBe("new");
  });

  it("climbs learning → familiar → mastered with repeated 'good'", () => {
    let t: ReviewTrack = newItem("x", "word", at).recognition;
    const states: string[] = [];
    let day = at;
    for (let i = 0; i < 6; i++) {
      t = scheduleTrack(t, "good", day);
      states.push(trackState(t));
      day = new Date(t.due);
    }
    expect(states).toContain("familiar");
    expect(states[states.length - 1]).toBe("mastered");
  });

  it("'again' sends a known track to 'forgotten' and tallies a wrong", () => {
    let t: ReviewTrack = newItem("x", "word", at).recognition;
    t = scheduleTrack(t, "good", at);
    t = scheduleTrack(t, "again", at);
    expect(trackState(t)).toBe("forgotten");
    expect(t.wrong).toBe(1);
    expect(t.correct).toBe(1);
  });
});

describe("ReviewService store", () => {
  it("ensure is idempotent and grade persists", () => {
    const svc = new ReviewService(new MemStore());
    svc.ensure("take", "verb", "vocabulary", at);
    svc.ensure("take", "verb", "vocabulary", at);
    expect(svc.all()).toHaveLength(1);
    svc.grade("take", "recall", "good", at);
    expect(svc.get("take")!.recall.repetitions).toBe(1);
    expect(svc.get("take")!.recognition.repetitions).toBe(0);
  });

  it("due() surfaces new items now and hides freshly-scheduled ones", () => {
    const svc = new ReviewService(new MemStore());
    svc.ensure("a", "word", "vocab", at);
    svc.ensure("b", "word", "vocab", at);
    expect(svc.dueCount(at)).toBe(2); // both new → due now
    svc.grade("a", "recognition", "good", at);
    svc.grade("a", "recall", "good", at);
    expect(svc.dueCount(at)).toBe(1); // a scheduled out on both tracks, b still due
  });

  it("queue filters by kind and caps length", () => {
    const svc = new ReviewService(new MemStore());
    svc.ensure("w1", "word", "v", at);
    svc.ensure("p1", "phrasal", "v", at);
    svc.ensure("w2", "word", "v", at);
    const words = svc.queue({ at, kind: "word", limit: 1 });
    expect(words).toHaveLength(1);
    expect(words[0].kind).toBe("word");
  });
});

describe("legacy migration", () => {
  const legacy: Record<string, SpacedRepetitionItem> = {
    take: { id: "take", type: "verb", ease: 2.5, interval: 10, repetitions: 4, lapses: 1, lastReviewed: at.toISOString(), nextReview: at.toISOString() },
    "give-up": { id: "give-up", type: "phrasal-verb", ease: 2.1, interval: 3, repetitions: 2, lapses: 0, nextReview: at.toISOString() },
    suitcase: { id: "suitcase", type: "vocabulary", ease: 2.3, interval: 1, repetitions: 1, lapses: 0, nextReview: at.toISOString() },
    ex1: { id: "ex1", type: "exercise", ease: 2.3, interval: 1, repetitions: 1, lapses: 0, nextReview: at.toISOString() },
  };

  it("maps types to kinds, drops exercises, and carries the schedule onto recognition", () => {
    const out = migrateFromLegacy(legacy, at);
    expect(Object.keys(out).sort()).toEqual(["give-up", "suitcase", "take"]);
    expect(out.take.kind).toBe("verb");
    expect(out["give-up"].kind).toBe("phrasal");
    expect(out.suitcase.kind).toBe("word");
    expect(out.take.recognition.interval).toBe(10);
    expect(out.take.recognition.ease).toBe(2.5);
    expect(trackState(out.take.recall)).toBe("new"); // recall starts fresh
  });

  it("service seeds from the legacy store only once", () => {
    const store = new MemStore();
    store.seedLegacy(legacy);
    const svc = new ReviewService(store);
    expect(svc.migrateFromLegacyStore(at)).toBe(3); // exercise dropped
    expect(svc.all()).toHaveLength(3);
    expect(svc.migrateFromLegacyStore(at)).toBe(0); // already populated → no clobber
  });
});
