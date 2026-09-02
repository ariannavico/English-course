import type { ReviewKind, SectionKind } from "@/types";

/**
 * Shared lexical item (feat/second-release, Phase 2). One model for the sections
 * that are really word lists — Vocabulary, Adjectives, Adverbs (and, later,
 * Verbs). They differ only by section and part of speech, so they run on ONE
 * engine (proposal §11.2) rather than three parallel systems. Each LexItem is a
 * ReviewItem whose kind is derived from its section.
 */
export interface LexItem {
  /** Stable id, also the ReviewItem id. */
  id: string;
  /** The catalog Unit this belongs to (e.g. "adj-personality"). */
  unitId: string;
  word: string;
  /** Italian meaning. */
  it: string;
  /** Part of speech label, e.g. "adj", "noun". */
  pos?: string;
  example?: string;
}

/** Which ReviewItem kind a section's words become. */
export const SECTION_REVIEW_KIND: Partial<Record<SectionKind, ReviewKind>> = {
  vocabulary: "word",
  adjectives: "adjective",
  adverbs: "adverb",
  verbs: "verb",
};
