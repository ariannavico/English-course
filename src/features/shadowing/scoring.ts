import { normalize } from "@/utils/normalization";
import type { LineOutcome, ShadowResult } from "./types";

/** Words of a line, lowercased and stripped of punctuation. */
function tokens(text: string): string[] {
  return normalize(text)
    .replace(/[^a-z0-9'\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * How closely the spoken attempt matches the model line, 0..100. It's a MIRROR,
 * not a grade: the fraction of the model's words that also turned up in what was
 * said (order-free, so a small stumble doesn't tank the number). Recognition is
 * imperfect and that's fine — a high number means "you got the shape", a low one
 * means "try that line again".
 */
export function echoSimilarity(said: string, target: string): number {
  const want = tokens(target);
  if (want.length === 0) return 0;
  const got = new Set(tokens(said));
  let hits = 0;
  for (const w of want) if (got.has(w)) hits++;
  return Math.round((hits / want.length) * 100);
}

export function summarise(dialogueId: string, outcomes: LineOutcome[]): ShadowResult {
  const repeated = outcomes.filter((o) => o.repeated).length;
  const scored = outcomes
    .map((o) => o.similarity)
    .filter((s): s is number => s !== null);
  const avgSimilarity =
    scored.length > 0
      ? Math.round(scored.reduce((a, b) => a + b, 0) / scored.length)
      : null;
  return { dialogueId, totalLines: outcomes.length, repeated, avgSimilarity };
}
