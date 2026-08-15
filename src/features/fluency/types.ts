/**
 * Fluency Mode (spec §19–21). Timed, open prompts where the point is to KEEP
 * GOING, not to be perfect. We measure fluency (output + continuity) separately
 * from accuracy — at B2, communicating fluidly beats a frozen "perfect" answer.
 */

export type FluencyLevel = "warmup" | "standard" | "deep" | "ladder";

/** Seconds allowed per prompt for each level. Ladder escalates across the round. */
export const LEVEL_SECONDS: Record<Exclude<FluencyLevel, "ladder">, number> = {
  warmup: 30,
  standard: 60,
  deep: 90,
};

export const LADDER_SECONDS = [30, 45, 60, 75, 90];

export interface FluencyPrompt {
  id: string;
  emoji?: string;
  /** A quick, open prompt, e.g. "Describe your ideal weekend." */
  prompt: string;
  italianHint?: string;
  /** Useful chunks to reach for while talking (spec §18). */
  suggestedChunks?: string[];
  category: "personal" | "opinion" | "narrate" | "describe" | "hypothetical";
  level: "B1" | "B1+" | "B2";
}

export type FluencyRating = "froze" | "hesitated" | "flowed";

export interface FluencyResult {
  promptId: string;
  words: number;
  seconds: number;
  wpm: number;
  selfRating: FluencyRating;
  chunks: number;
  connectors: number;
  /** 0..100 fluency score for this prompt. */
  score: number;
}
