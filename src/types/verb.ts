import type { CefrLevel } from "./common";
import type { ExampleSentence } from "./example";

/**
 * A single sense of a verb. Meaning is anchored to *context*, not only to an
 * Italian gloss — the core didactic principle of the app.
 */
export interface VerbMeaning {
  id: string;
  englishExplanation: string;
  italianMeaning: string;
  context: string;
  examples: string[];
}

export interface Collocation {
  id: string;
  phrase: string;
  meaning: string;
  example: string;
  frequency?: "high" | "medium";
}

export interface VerbPattern {
  id: string;
  /** e.g. "take + object", "take + someone + somewhere" */
  pattern: string;
  explanation: string;
  examples: string[];
}

export interface SimilarVerb {
  verbId: string;
  /** How this verb differs from the current one (teaches *choice*). */
  difference: string;
  examples: {
    correct: string;
    explanation: string;
  }[];
}

export interface CommonMistake {
  id: string;
  incorrect: string;
  correct: string;
  explanation: string;
  category: "verb" | "tense" | "preposition" | "phrasal-verb" | "vocabulary";
}

/**
 * The central node of the "learning graph". A Verb links out to meanings,
 * collocations, phrasal verbs, patterns, similar verbs, examples and exercises.
 */
export interface Verb {
  id: string;

  // Forms
  infinitive: string;
  thirdPerson: string;
  past: string;
  pastParticiple: string;
  ingForm: string;

  pronunciation?: {
    ipa?: string;
    note?: string;
  };

  /** Tier 1 = the 25 essential verbs (full card). Tier 2 = 47 thematic verbs. */
  tier: 1 | 2;

  meanings: VerbMeaning[];
  collocations: Collocation[];
  /** IDs referencing PhrasalVerb entries. */
  phrasalVerbs: string[];
  verbPatterns: VerbPattern[];
  similarVerbs?: SimilarVerb[];
  examples: ExampleSentence[];
  commonMistakes?: CommonMistake[];
  /** IDs referencing Exercise entries. */
  exercises: string[];
  topics?: string[];

  cefrLevel: CefrLevel;
}
