/**
 * Verb Choice Lab (spec §14–16). The goal is teaching CHOICE, not translation:
 * a situation is shown, the learner picks the verb they'd use, and the app
 * explains the reasoning for every option — why the natural one fits and why the
 * others don't. Verb Universes map the many jobs a key English verb does.
 */

export type VerbLevel = "B1" | "B1+" | "B2";

export interface VerbChoiceOption {
  verb: string;
  /** Why this verb is (or isn't) the natural choice here. */
  reasoning: string;
  /** The most natural choice in this situation. Exactly one option is `best`. */
  best?: boolean;
}

export interface VerbChoiceScenario {
  id: string;
  emoji?: string;
  /** The real situation, e.g. "Someone is carrying a box toward you." */
  situation: string;
  question: string;
  options: VerbChoiceOption[];
  /** The underlying insight, e.g. "BRING = towards here; TAKE = away from here." */
  principle: string;
  /** Verb id whose Universe to offer as a follow-up. */
  relatedUniverse?: string;
  level: VerbLevel;
  tags: string[];
}

/* ---------------- Verb Universe ---------------- */

export interface VerbSense {
  /** A short label for this job, e.g. "become", "arrive", "understand". */
  sense: string;
  gloss: string;
  example: string;
}

export interface VerbUniverse {
  id: string;
  verb: string;
  /** The single mental image that ties the senses together. */
  coreIdea: string;
  senses: VerbSense[];
  phrasals: { phrase: string; meaning: string }[];
  confusedWith?: { verb: string; difference: string }[];
}
