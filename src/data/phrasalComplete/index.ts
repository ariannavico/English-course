import families from "./phrasalComplete.json";

/** Shapes of the complete phrasal-verb reference (A–Z), grouped by base verb.
 * The study content in the lexis engine is generated from this dataset. */
export interface PhrasalSense {
  /** English definition. */
  meaning: string;
  /** English example sentence, with the phrasal verb shown in CAPS. */
  example: string;
}
export interface PhrasalEntry {
  /** Full phrase, lowercased, e.g. "take off". */
  phrase: string;
  /** The part after the base verb, e.g. "off", "up to". */
  particle: string;
  senses: PhrasalSense[];
}
export interface PhrasalFamily {
  /** The base verb, e.g. "take". */
  base: string;
  /** Number of distinct phrases in this family. */
  count: number;
  phrases: PhrasalEntry[];
}

/**
 * The complete phrasal-verb reference, grouped by base verb and sorted A→Z.
 * Generated from the source "Complete Phrasal Verbs List" (see the phrasal-verbs
 * PDF). Shipped as JSON because it is large (~2,200 phrases / ~3,200 senses) and
 * purely data — no logic lives here.
 */
export const phrasalFamilies = families as PhrasalFamily[];

export const totalPhrasalPhrases = phrasalFamilies.reduce((n, f) => n + f.count, 0);

export const totalPhrasalSenses = phrasalFamilies.reduce(
  (n, f) => n + f.phrases.reduce((m, p) => m + p.senses.length, 0),
  0,
);
