/**
 * Grammar lesson content (feat/second-release, Phase 2). Each lesson sits behind
 * a gr-* catalog Unit and keeps the shape the brief asks for: explanation →
 * rules → examples → common mistakes → mini-test. Authored per level in batches.
 */
export interface GrammarExample {
  en: string;
  it?: string;
}

export interface GrammarMistake {
  wrong: string;
  right: string;
  why: string;
}

export interface MiniTestQuestion {
  prompt: string;
  options: string[];
  /** Index into `options`. */
  answer: number;
}

export interface GrammarLesson {
  /** The catalog Unit id, e.g. "gr-a1-to-be". */
  unitId: string;
  explanation: string;
  rules: string[];
  examples: GrammarExample[];
  mistakes: GrammarMistake[];
  miniTest: MiniTestQuestion[];
}
