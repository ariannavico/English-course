/**
 * Collocation / chunk training (spec §17–18). Fluency at B2 comes from storing
 * language in chunks, not single words: you say "heavy traffic", not "strong
 * traffic". This trains recall of the natural partner word — a gap where the
 * collocate belongs — grouped by chunk type, with the whole family shown after.
 */

export type CollocationType = "verb-noun" | "adj-noun" | "preposition";

export interface CollocationItem {
  id: string;
  type: CollocationType;
  emoji?: string;
  /** A natural sentence with the collocate blanked out (use ___ for the gap). */
  prompt: string;
  /** The natural collocate to recall. */
  answer: string;
  /** Other answers that also count. */
  accept?: string[];
  /** The full chunk, shown after, e.g. "heavy traffic". */
  chunk: string;
  /** Italian gloss for the chunk (optional hint). */
  gloss?: string;
  /** Sibling collocations that share the pattern (the "family"). */
  family: string[];
  level: "B1" | "B1+" | "B2";
}

export interface CollocationAnswer {
  type: CollocationType;
  correct: boolean;
}

export interface TypeScore {
  type: CollocationType;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface CollocationResult {
  correct: number;
  total: number;
  score: number;
  byType: TypeScore[];
}
