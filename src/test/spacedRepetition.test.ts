import { describe, expect, it } from "vitest";
import {
  calculateNextReview,
  createItem,
} from "@/services/spacedRepetition/SpacedRepetitionService";
import { daysBetween } from "@/utils/dates";

const at = new Date("2026-08-13T09:00:00.000Z");

describe("spaced repetition scheduling", () => {
  it("schedules a first 'good' review one day out", () => {
    const item = createItem("take", "verb", at);
    const next = calculateNextReview(item, "good", at);
    expect(next.repetitions).toBe(1);
    expect(daysBetween(at, next.nextReview)).toBe(1);
  });

  it("'again' resets progress and records a lapse, due same day", () => {
    let item = createItem("take", "verb", at);
    item = calculateNextReview(item, "good", at); // rep 1
    item = calculateNextReview(item, "good", at); // rep 2
    const lapsed = calculateNextReview(item, "again", at);
    expect(lapsed.repetitions).toBe(0);
    expect(lapsed.lapses).toBe(1);
    expect(daysBetween(at, lapsed.nextReview)).toBe(0);
  });

  it("'easy' produces a longer interval than 'good'", () => {
    const base = createItem("take", "verb", at);
    const good = calculateNextReview(base, "good", at);
    const easy = calculateNextReview(base, "easy", at);
    expect(easy.interval).toBeGreaterThanOrEqual(good.interval);
  });

  it("intervals grow across successful repetitions", () => {
    let item = createItem("take", "verb", at);
    const intervals: number[] = [];
    for (let i = 0; i < 4; i++) {
      item = calculateNextReview(item, "good", at);
      intervals.push(item.interval);
    }
    expect(intervals[3]).toBeGreaterThan(intervals[0]);
  });

  it("ease never drops below the floor", () => {
    let item = createItem("take", "verb", at);
    for (let i = 0; i < 10; i++) item = calculateNextReview(item, "again", at);
    expect(item.ease).toBeGreaterThanOrEqual(1.3);
  });
});
