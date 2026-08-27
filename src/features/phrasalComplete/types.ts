/**
 * Complete Phrasal Verbs reference (from the "Complete Phrasal Verbs List").
 * This is a broad, browse-and-search glossary of ~2,200 phrasal verbs grouped by
 * base verb — open "take" and you get take after / take off / take up / … — kept
 * deliberately separate from the small, Italian-annotated curated set used in the
 * lessons. Each phrase can carry several senses (meaning + example).
 */

export interface PhrasalSense {
  /** English definition. */
  meaning: string;
  /** English example sentence, with the phrasal verb shown in CAPS. */
  example: string;
}

export interface PhrasalEntry {
  /** Full phrase, lowercased, e.g. "take off". */
  phrase: string;
  /** The part after the base verb, e.g. "off", "up to", "on about". */
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
