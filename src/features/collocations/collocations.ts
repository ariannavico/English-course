import { matchesAnswer } from "@/utils/normalization";
import { shuffle } from "@/utils/shuffle";
import type {
  CollocationAnswer,
  CollocationItem,
  CollocationResult,
  CollocationType,
} from "./types";

export const TYPE_LABEL: Record<CollocationType, string> = {
  "verb-noun": "Verb + noun",
  "adj-noun": "Adjective + noun",
  preposition: "Prepositions",
};

export const TYPE_ORDER: CollocationType[] = ["verb-noun", "adj-noun", "preposition"];

/** Is the typed word an accepted collocate for this item? */
export function gradeAnswer(input: string, item: CollocationItem): boolean {
  return matchesAnswer(input, [item.answer, ...(item.accept ?? [])]);
}

/**
 * Build a balanced, shuffled session: `perType` items from each chunk type, so
 * the end-of-session diagnostic always has a reading on every pattern.
 */
export function sampleSession(items: CollocationItem[], perType = 3): CollocationItem[] {
  const picked: CollocationItem[] = [];
  for (const type of TYPE_ORDER) {
    const pool = shuffle(items.filter((i) => i.type === type));
    picked.push(...pool.slice(0, perType));
  }
  return shuffle(picked);
}

/** Score a finished session overall and per chunk type. */
export function scoreSession(answers: CollocationAnswer[]): CollocationResult {
  const byType = TYPE_ORDER.map((type) => {
    const items = answers.filter((a) => a.type === type);
    const correct = items.filter((a) => a.correct).length;
    const total = items.length;
    return { type, label: TYPE_LABEL[type], correct, total, accuracy: total ? correct / total : 0 };
  }).filter((t) => t.total > 0);

  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  return { correct, total, score: total ? Math.round((correct / total) * 100) : 0, byType };
}

/** The chunk type the learner did worst at, for a one-line takeaway. */
export function weakestType(result: CollocationResult): string | null {
  const weakest = [...result.byType].sort((a, b) => a.accuracy - b.accuracy)[0];
  if (!weakest) return null;
  return weakest.accuracy < 1 ? weakest.label : null;
}

/** First-letter scaffold for the gap, e.g. "h ___". */
export function firstLetterHint(item: CollocationItem): string {
  return item.answer.charAt(0).toLowerCase();
}
