/**
 * Paraphrase Training — "Get Around The Word" (spec §10–11). The learner is
 * shown a word and must explain it WITHOUT using it. This trains the single most
 * useful survival skill for real conversation: not freezing when a word won't
 * come. Evaluation is offline + heuristic (the forbidden-word check is exact;
 * quality is signalled, not graded).
 */

export interface ParaphraseItem {
  id: string;
  emoji?: string;
  /** The target word to explain — and the one thing you're not allowed to say. */
  word: string;
  category: string;
  /** Italian gloss, shown only as an optional hint. */
  italian?: string;
  /** Other forms/synonyms that also count as "using the word" (fridge for refrigerator). */
  forbidden?: string[];
  /** Concept words a good explanation tends to include (heuristic signal). */
  clues: string[];
  /** A natural model paraphrase. */
  model: string;
  level: "B1" | "B1+" | "B2";
}

export type ParaphraseRating = "struggled" | "ok" | "nailed";

export interface ParaphraseAttempt {
  itemId: string;
  usedWord: boolean;
  score: number;
  selfRating: ParaphraseRating;
}
