import { matchesAnswer } from "@/utils/normalization";
import { shuffle } from "@/utils/shuffle";
import type { PartOfSpeech, WordAnswer, WordFamilyResult, WordItem } from "./types";

export const POS_LABEL: Record<PartOfSpeech, string> = {
  noun: "Noun",
  verb: "Verb",
  adjective: "Adjective",
  adverb: "Adverb",
};

export const POS_ORDER: PartOfSpeech[] = ["noun", "verb", "adjective", "adverb"];

/** Is the typed word an accepted form for this item? */
export function gradeAnswer(input: string, item: WordItem): boolean {
  return matchesAnswer(input, [item.answer, ...(item.accept ?? [])]);
}

/** Build a balanced, shuffled session: `perPOS` items targeting each part of speech. */
export function sampleSession(items: WordItem[], perPOS = 2): WordItem[] {
  const picked: WordItem[] = [];
  for (const pos of POS_ORDER) {
    const pool = shuffle(items.filter((i) => i.targetPOS === pos));
    picked.push(...pool.slice(0, perPOS));
  }
  return shuffle(picked);
}

/** Score a finished session overall and per target part of speech. */
export function scoreSession(answers: WordAnswer[]): WordFamilyResult {
  const byPOS = POS_ORDER.map((pos) => {
    const items = answers.filter((a) => a.targetPOS === pos);
    const correct = items.filter((a) => a.correct).length;
    const total = items.length;
    return { pos, label: POS_LABEL[pos], correct, total, accuracy: total ? correct / total : 0 };
  }).filter((p) => p.total > 0);

  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  return { correct, total, score: total ? Math.round((correct / total) * 100) : 0, byPOS };
}

/** The part of speech the learner produced least well, for a one-line takeaway. */
export function weakestPOS(result: WordFamilyResult): string | null {
  const weakest = [...result.byPOS].sort((a, b) => a.accuracy - b.accuracy)[0];
  if (!weakest) return null;
  return weakest.accuracy < 1 ? weakest.label : null;
}

/** First-letter scaffold for the gap. */
export function firstLetterHint(item: WordItem): string {
  return item.answer.charAt(0).toLowerCase();
}
