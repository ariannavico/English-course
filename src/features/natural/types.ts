/**
 * Natural English — "possible vs natural" (spec §12, §35). The trap at B2 isn't
 * grammar; it's saying something that's technically correct but that no native
 * would actually say — usually a literal translation from Italian, something too
 * bookish, a redundancy, or an odd word choice. This trains the ear: pick what a
 * native says, and see WHY the correct-but-clunky versions aren't it. The point
 * is precisely that "possible" ≠ "natural".
 */

export type NaturalPattern = "literal-translation" | "too-formal" | "redundancy" | "word-choice";

export interface NaturalOption {
  id: string;
  text: string;
  /** Why this is natural — or grammatical-but-not-natural, or actually wrong. */
  feedback: string;
  /** The version a native would use. Exactly one option is `best`. */
  best?: boolean;
}

export interface NaturalItem {
  id: string;
  pattern: NaturalPattern;
  emoji?: string;
  /** The intent / situation, e.g. "Telling someone how old you are." */
  context: string;
  options: NaturalOption[];
  /** The naturalness principle the item teaches. */
  principle: string;
  level: "B1" | "B1+" | "B2";
}

export interface NaturalAnswer {
  pattern: NaturalPattern;
  correct: boolean;
}

export interface PatternScore {
  pattern: NaturalPattern;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface NaturalResult {
  correct: number;
  total: number;
  score: number;
  byPattern: PatternScore[];
}
