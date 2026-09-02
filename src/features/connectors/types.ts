/**
 * Connectors / Linking words (feat/second-release, Phase 2 — first vertical
 * slice). Organised BY FUNCTION (Contrast, Cause, Effect…), each function being
 * one catalog Unit. Every connector carries what the brief (#10) asks for:
 * meaning, grammatical structure, an example, and a note on the common error or
 * the difference from a similar word — the things that actually improve B1+
 * writing. Each connector is also a `ReviewItem` of kind "connector".
 */
export interface ConnectorEntry {
  /** Stable id, used as the ReviewItem id (kind "connector"). */
  id: string;
  word: string;
  /** Italian meaning. */
  it: string;
  /** How it behaves grammatically (part of speech + sentence pattern). */
  structure: string;
  example: string;
  /** Common mistake, or the difference from a look-alike connector. */
  note?: string;
}

export interface ConnectorFunction {
  /** Matches the catalog Unit id, e.g. "con-contrast". */
  unitId: string;
  /** Function label, e.g. "Contrast". */
  fn: string;
  intro: string;
  connectors: ConnectorEntry[];
}
