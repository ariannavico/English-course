/**
 * Irregular verbs organised by vowel-change pattern (spec §45), not
 * alphabetically. The pattern is derived from the three forms so the data stays
 * the single source of truth.
 */
export interface IrregularEntry {
  infinitive: string;
  past: string;
  pastParticiple: string;
}

export type IrregularPattern = "AAA" | "ABB" | "ABA" | "ABC";

export const PATTERN_INFO: Record<IrregularPattern, { title: string; example: string }> = {
  AAA: { title: "AAA — no change", example: "cut – cut – cut" },
  ABB: { title: "ABB — past = participle", example: "buy – bought – bought" },
  ABA: { title: "ABA — infinitive = participle", example: "come – came – come" },
  ABC: { title: "ABC — all different", example: "go – went – gone" },
};

export function classifyIrregular(e: IrregularEntry): IrregularPattern {
  const a = e.infinitive.toLowerCase();
  const b = e.past.toLowerCase();
  const c = e.pastParticiple.toLowerCase();
  if (a === b && b === c) return "AAA";
  if (b === c && a !== b) return "ABB";
  if (a === c && a !== b) return "ABA";
  return "ABC";
}

export const irregularVerbs: IrregularEntry[] = [
  // AAA
  { infinitive: "cut", past: "cut", pastParticiple: "cut" },
  { infinitive: "put", past: "put", pastParticiple: "put" },
  { infinitive: "let", past: "let", pastParticiple: "let" },
  { infinitive: "hit", past: "hit", pastParticiple: "hit" },
  // ABB
  { infinitive: "buy", past: "bought", pastParticiple: "bought" },
  { infinitive: "bring", past: "brought", pastParticiple: "brought" },
  { infinitive: "make", past: "made", pastParticiple: "made" },
  { infinitive: "get", past: "got", pastParticiple: "got" },
  { infinitive: "find", past: "found", pastParticiple: "found" },
  { infinitive: "tell", past: "told", pastParticiple: "told" },
  { infinitive: "have", past: "had", pastParticiple: "had" },
  { infinitive: "leave", past: "left", pastParticiple: "left" },
  // ABA
  { infinitive: "come", past: "came", pastParticiple: "come" },
  { infinitive: "become", past: "became", pastParticiple: "become" },
  { infinitive: "run", past: "ran", pastParticiple: "run" },
  // ABC
  { infinitive: "go", past: "went", pastParticiple: "gone" },
  { infinitive: "take", past: "took", pastParticiple: "taken" },
  { infinitive: "give", past: "gave", pastParticiple: "given" },
  { infinitive: "see", past: "saw", pastParticiple: "seen" },
  { infinitive: "do", past: "did", pastParticiple: "done" },
  { infinitive: "speak", past: "spoke", pastParticiple: "spoken" },
  { infinitive: "write", past: "wrote", pastParticiple: "written" },
];
