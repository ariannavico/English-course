import { clamp } from "@/utils/scoring";
import type { FluencyRating } from "./types";

/**
 * Fluency scoring (spec §21). Rewards output and continuity, not correctness.
 * The self-rating carries most of the signal (did it flow?), with small bonuses
 * for producing a decent amount and for reaching for varied chunks/connectors.
 */
const BASE: Record<FluencyRating, number> = { froze: 25, hesitated: 55, flowed: 80 };

export function promptFluencyScore(input: {
  words: number;
  selfRating: FluencyRating;
  chunks: number;
  connectors: number;
}): number {
  const output = Math.min(12, input.words / 3); // ~36 words earns the full output bonus
  const range = Math.min(8, (input.chunks + input.connectors) * 3);
  return clamp(Math.round(BASE[input.selfRating] + output + range), 0, 100);
}

/** Words per minute over the time actually used. */
export function wordsPerMinute(words: number, seconds: number): number {
  if (seconds <= 0) return 0;
  return Math.round(words / (seconds / 60));
}

export function sessionFluency(scores: number[]): number {
  if (scores.length === 0) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
