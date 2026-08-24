/**
 * Active vocabulary at levels (spec §36). Knowing a word isn't yes/no — it lives
 * on a ladder from passive recognition to active production. Each word carries a
 * KNOWLEDGE LEVEL (1–5) stored per learner; the trainer gives a task matched to
 * the word's level (recognise → produce-with-hint → recall), and a correct
 * answer promotes the word up the ladder, a wrong one nudges it down. The goal
 * is to move words from "I've seen it" to "I use it".
 */

export type VocabLevel = 1 | 2 | 3 | 4 | 5;

/** What the learner does with a word, by its current level. */
export type TaskMode = "recognise" | "produce" | "recall";

/** A word in the activation deck (level is stored separately, per learner). */
export interface ActiveVocabItem {
  id: string;
  word: string;
  pos: string;
  /** A plain English definition. */
  definition: string;
  italian: string;
  /** A natural sentence containing the word (used to build a gap for production). */
  example: string;
}

export interface VocabAttempt {
  id: string;
  correct: boolean;
  before: VocabLevel;
  after: VocabLevel;
}

export interface LevelCount {
  level: VocabLevel;
  label: string;
  count: number;
}

export interface ActivateResult {
  total: number;
  correct: number;
  /** How many words moved UP a level this session. */
  activated: number;
  distribution: LevelCount[];
}
