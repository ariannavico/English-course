import type { SectionKind } from "@/types";

/**
 * The Second-Release section registry (feat/second-release, Phase 2). The eight
 * content sections that own studiable Units, in navigation order. Display-only
 * metadata; the Units themselves live in the per-section catalog files.
 */
export interface SectionMeta {
  kind: SectionKind;
  label: string;
  blurb: string;
}

export const SECTIONS: SectionMeta[] = [
  { kind: "grammar", label: "Chapters / Grammar", blurb: "Grammatica per livello, A1 → C2." },
  { kind: "irregular", label: "Irregular Verbs", blurb: "Verbi irregolari organizzati per pattern." },
  { kind: "verbs", label: "Verbs", blurb: "Verbi per categoria semantica, progressivi." },
  { kind: "phrasal", label: "Phrasal Verbs", blurb: "Phrasal verbs per livello e famiglia." },
  { kind: "vocabulary", label: "Vocabulary", blurb: "Lessico per unità tematiche." },
  { kind: "adjectives", label: "Adjectives", blurb: "Aggettivi per tema e funzione." },
  { kind: "adverbs", label: "Adverbs", blurb: "Avverbi per tipo." },
  { kind: "connectors", label: "Connectors", blurb: "Connettivi per funzione, per la scrittura." },
];

export const SECTION_LABEL: Record<SectionKind, string> = Object.fromEntries(
  SECTIONS.map((s) => [s.kind, s.label]),
) as Record<SectionKind, string>;
