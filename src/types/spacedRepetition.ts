import type { IsoDate } from "./common";

export type ReviewableType =
  | "verb"
  | "phrasal-verb"
  | "vocabulary"
  | "grammar"
  | "exercise";

/** How the learner rated the recall difficulty after a review. */
export type ReviewRating = "again" | "hard" | "good" | "easy";

/**
 * One scheduled item. The shape is deliberately SM-2-compatible (ease,
 * interval, repetitions, lapses) so the algorithm can be swapped for SM-2/FSRS
 * later without changing the persisted data.
 */
export interface SpacedRepetitionItem {
  id: string;
  type: ReviewableType;
  ease: number;
  /** Current interval in days. */
  interval: number;
  repetitions: number;
  lapses: number;
  lastReviewed?: IsoDate;
  nextReview: IsoDate;
}
