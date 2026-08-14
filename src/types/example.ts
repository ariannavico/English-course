import type { CefrLevel } from "./common";

/** A reusable, taggable example sentence. Referenced by verbs, vocabulary, etc. */
export interface ExampleSentence {
  id: string;
  english: string;
  italian?: string;
  difficulty: CefrLevel;
  context?: string;
  /** Words to visually highlight when rendered. */
  highlightedWords?: string[];
  grammarFocus?: string[];
  vocabularyFocus?: string[];
}
