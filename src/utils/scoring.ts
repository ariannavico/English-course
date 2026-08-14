/**
 * Pure scoring helpers. No React, no storage — trivially unit-testable.
 */

export type ChapterVerdict = "ready" | "light-review" | "review" | "repeat";

/** Map a 0..100 chapter score to a coarse verdict (spec §47). */
export function chapterVerdict(percent: number): ChapterVerdict {
  if (percent >= 90) return "ready";
  if (percent >= 75) return "light-review";
  if (percent >= 60) return "review";
  return "repeat";
}

export const VERDICT_LABEL: Record<ChapterVerdict, string> = {
  ready: "Ready",
  "light-review": "Light review",
  review: "Review",
  repeat: "Repeat",
};

/** Percentage from earned/total points, clamped and rounded. */
export function percentage(earned: number, total: number): number {
  if (total <= 0) return 0;
  return clamp(Math.round((earned / total) * 100), 0, 100);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Rolling mastery update. A correct answer nudges mastery up, an incorrect one
 * down harder (mistakes matter more). Kept simple and monotonic-ish; the
 * spaced-repetition schedule handles *timing*, this tracks *confidence*.
 */
export function updateMastery(current: number, correct: boolean): number {
  const delta = correct ? 12 : -18;
  return clamp(Math.round(current + delta), 0, 100);
}

/**
 * Weighted average used for the overall CEFR progress indicator. Weights let
 * exercises/mastery count more than mere exposure. Purely internal signal.
 */
export function weightedAverage(
  entries: { value: number; weight: number }[],
): number {
  const totalWeight = entries.reduce((s, e) => s + e.weight, 0);
  if (totalWeight <= 0) return 0;
  const sum = entries.reduce((s, e) => s + e.value * e.weight, 0);
  return clamp(Math.round(sum / totalWeight), 0, 100);
}
