import type { IsoDate } from "./common";

/**
 * The unified Review model (feat/second-release, Phase 1). The existing spaced-
 * repetition engine is per-content-type; this makes review kind-agnostic (user
 * requirement #17) and adds two independent tracks — RECOGNITION (see the word →
 * know it) and RECALL/PRODUCTION (see the meaning → produce the word) — because
 * they are different abilities (#16). The SM-2 maths itself is reused from
 * SpacedRepetitionService, not reimplemented.
 */

/** What kind of thing is being reviewed. Not limited to words. */
export type ReviewKind =
  | "word"
  | "verb"
  | "phrasal"
  | "adjective"
  | "adverb"
  | "connector"
  | "grammar";

/** The two abilities tracked separately per item. */
export type ReviewMode = "recognition" | "recall";

/** Learner-facing states (user requirement #16), ordered weak → strong. */
export type ReviewState = "new" | "forgotten" | "learning" | "familiar" | "mastered";

/** Grade after a review — same four buckets the existing scheduler understands. */
export type ReviewGrade = "again" | "hard" | "good" | "easy";

/** One SM-2-compatible schedule for one ability of one item. */
export interface ReviewTrack {
  ease: number;
  /** Interval in days. */
  interval: number;
  repetitions: number;
  lapses: number;
  correct: number;
  wrong: number;
  lastReviewed?: IsoDate;
  /** When this track is next due. */
  due: IsoDate;
}

export interface ReviewItem {
  id: string;
  kind: ReviewKind;
  recognition: ReviewTrack;
  recall: ReviewTrack;
  /** Where the item entered the system (e.g. "vocabulary", "translation"). */
  source?: string;
  tags?: string[];
  addedAt: IsoDate;
  lastSeen?: IsoDate;
}
