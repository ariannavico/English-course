import { shuffle } from "@/utils/shuffle";
import type { SocialAnswer, SocialFunction, SocialItem, SocialSessionResult } from "./types";

export const FUNCTION_LABEL: Record<SocialFunction, string> = {
  reacting: "Reacting",
  "keeping-going": "Keeping it going",
  "turn-taking": "Managing turns",
  "wrapping-up": "Wrapping up",
};

export const FUNCTION_ORDER: SocialFunction[] = [
  "reacting",
  "keeping-going",
  "turn-taking",
  "wrapping-up",
];

/**
 * Build a balanced session: `perFunction` items from each move type, so the
 * end-of-session diagnostic always has a reading on every function. The picked
 * items (and the whole session) are shuffled for variety.
 */
export function sampleSession(items: SocialItem[], perFunction = 2): SocialItem[] {
  const picked: SocialItem[] = [];
  for (const fn of FUNCTION_ORDER) {
    const pool = shuffle(items.filter((i) => i.fn === fn));
    picked.push(...pool.slice(0, perFunction));
  }
  return shuffle(picked);
}

/** Score a finished session overall and per function (for the diagnostic). */
export function scoreSession(answers: SocialAnswer[]): SocialSessionResult {
  const byFunction = FUNCTION_ORDER.map((fn) => {
    const items = answers.filter((a) => a.fn === fn);
    const correct = items.filter((a) => a.correct).length;
    const total = items.length;
    return {
      fn,
      label: FUNCTION_LABEL[fn],
      correct,
      total,
      accuracy: total ? correct / total : 0,
    };
  }).filter((f) => f.total > 0);

  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  return {
    correct,
    total,
    score: total ? Math.round((correct / total) * 100) : 0,
    byFunction,
  };
}

/** The function the learner did worst at (for a one-line takeaway). null if none measured or all tied high. */
export function weakestFunction(result: SocialSessionResult): string | null {
  const measured = [...result.byFunction].sort((a, b) => a.accuracy - b.accuracy);
  const weakest = measured[0];
  if (!weakest) return null;
  return weakest.accuracy < 1 ? weakest.label : null;
}
