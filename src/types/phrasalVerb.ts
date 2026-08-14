import type { CefrLevel } from "./common";
import type { CommonMistake } from "./verb";
import type { ExampleSentence } from "./example";

export interface PhrasalVerb {
  id: string;
  baseVerb: string;
  particle: string;
  /** Full lexical form, e.g. "take off". */
  phrase: string;

  meanings: {
    italian: string;
    englishExplanation: string;
  }[];

  examples: ExampleSentence[];

  /** Whether the object can split the verb and particle (take it off). */
  separable?: boolean;

  cefrLevel: CefrLevel;
  commonMistakes?: CommonMistake[];
  /** IDs of related verbs / phrasal verbs. */
  relatedVerbs?: string[];
}
