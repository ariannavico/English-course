import type { PhrasalFamily } from "@/features/phrasalComplete/types";
import families from "./phrasalComplete.json";

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
