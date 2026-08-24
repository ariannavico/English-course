/**
 * Word families (spec §37–39). B2 range comes from knowing a word's whole
 * family, not one form: decide → decision → decisive → decisively. This trains
 * transforming a base word into the form the sentence needs — a different part
 * of speech — then shows the full family. Grouped by target part of speech, with
 * a per-type diagnostic (which form you struggle to produce).
 */

export type PartOfSpeech = "noun" | "verb" | "adjective" | "adverb";

export interface WordItem {
  id: string;
  targetPOS: PartOfSpeech;
  emoji?: string;
  /** The given family member, shown as the starting cue (e.g. "STRONG"). */
  base: string;
  /** A sentence with the gap marked by ___ where the target form belongs. */
  prompt: string;
  /** The form to produce. */
  answer: string;
  /** Other spellings/forms that also count. */
  accept?: string[];
  /** The whole family, shown on reveal (e.g. "decide · decision · decisive · decisively"). */
  family: string[];
  /** Italian gloss of the family's meaning (optional hint). */
  gloss?: string;
  level: "B1" | "B1+" | "B2";
}

export interface WordAnswer {
  targetPOS: PartOfSpeech;
  correct: boolean;
}

export interface POSScore {
  pos: PartOfSpeech;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface WordFamilyResult {
  correct: number;
  total: number;
  score: number;
  byPOS: POSScore[];
}
