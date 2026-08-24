import { shuffle } from "@/utils/shuffle";
import type { NaturalAnswer, NaturalItem, NaturalPattern, NaturalResult } from "./types";

export const PATTERN_LABEL: Record<NaturalPattern, string> = {
  "literal-translation": "Literal translation",
  "too-formal": "Too formal / bookish",
  redundancy: "Redundant",
  "word-choice": "Word choice",
};

export const PATTERN_ORDER: NaturalPattern[] = [
  "literal-translation",
  "too-formal",
  "redundancy",
  "word-choice",
];

/** Build a balanced, shuffled session: `perPattern` items from each trap type. */
export function sampleSession(items: NaturalItem[], perPattern = 2): NaturalItem[] {
  const picked: NaturalItem[] = [];
  for (const pattern of PATTERN_ORDER) {
    const pool = shuffle(items.filter((i) => i.pattern === pattern));
    picked.push(...pool.slice(0, perPattern));
  }
  return shuffle(picked);
}

/** Score a finished session overall and per trap type. */
export function scoreSession(answers: NaturalAnswer[]): NaturalResult {
  const byPattern = PATTERN_ORDER.map((pattern) => {
    const items = answers.filter((a) => a.pattern === pattern);
    const correct = items.filter((a) => a.correct).length;
    const total = items.length;
    return { pattern, label: PATTERN_LABEL[pattern], correct, total, accuracy: total ? correct / total : 0 };
  }).filter((p) => p.total > 0);

  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  return { correct, total, score: total ? Math.round((correct / total) * 100) : 0, byPattern };
}

/** The trap type the learner fell for most, for a one-line takeaway. */
export function weakestPattern(result: NaturalResult): string | null {
  const weakest = [...result.byPattern].sort((a, b) => a.accuracy - b.accuracy)[0];
  if (!weakest) return null;
  return weakest.accuracy < 1 ? weakest.label : null;
}
