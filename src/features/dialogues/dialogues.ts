import { shuffle } from "@/utils/shuffle";
import type { TalkAnswer, TalkFeature, TalkItem, TalkResult } from "./types";

export const FEATURE_LABEL: Record<TalkFeature, string> = {
  "self-correction": "Self-correction",
  interruption: "Interruption",
  hesitation: "Hesitation & hedging",
  "false-start": "False start",
};

export const FEATURE_ORDER: TalkFeature[] = [
  "self-correction",
  "interruption",
  "hesitation",
  "false-start",
];

/** Build a balanced, shuffled session: `perFeature` items from each disfluency type. */
export function sampleSession(items: TalkItem[], perFeature = 2): TalkItem[] {
  const picked: TalkItem[] = [];
  for (const feature of FEATURE_ORDER) {
    const pool = shuffle(items.filter((i) => i.feature === feature));
    picked.push(...pool.slice(0, perFeature));
  }
  return shuffle(picked);
}

/** Score a finished session overall and per disfluency type. */
export function scoreSession(answers: TalkAnswer[]): TalkResult {
  const byFeature = FEATURE_ORDER.map((feature) => {
    const items = answers.filter((a) => a.feature === feature);
    const correct = items.filter((a) => a.correct).length;
    const total = items.length;
    return { feature, label: FEATURE_LABEL[feature], correct, total, accuracy: total ? correct / total : 0 };
  }).filter((f) => f.total > 0);

  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  return { correct, total, score: total ? Math.round((correct / total) * 100) : 0, byFeature };
}

/** The disfluency type the learner followed least well, for a one-line takeaway. */
export function weakestFeature(result: TalkResult): string | null {
  const weakest = [...result.byFeature].sort((a, b) => a.accuracy - b.accuracy)[0];
  if (!weakest) return null;
  return weakest.accuracy < 1 ? weakest.label : null;
}

/** Flatten a dialogue into one string for text-to-speech. */
export function spokenText(item: TalkItem): string {
  return item.lines.map((l) => l.text).join(" … ");
}
