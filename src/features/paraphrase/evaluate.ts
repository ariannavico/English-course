import { normalize } from "@/utils/normalization";
import { clamp } from "@/utils/scoring";
import type { ParaphraseItem } from "./types";

/**
 * Definition frames — the transferable paraphrase moves (spec §10). Reaching for
 * one of these is exactly the skill: "it's a tool you use to…", "it's when…".
 */
const FRAMES = [
  "it's a kind of", "it's a type of", "a kind of", "a type of",
  "it's a thing", "the thing you", "it's a tool", "it's a machine",
  "it's a device", "it's the machine", "it's a person", "it's someone",
  "someone who", "a person who", "it's a place", "a place where",
  "it's used to", "it's used for", "used to", "used for", "you use it",
  "you use to", "it's when", "it's like", "kind of like", "it's what you",
];

export interface ParaphraseSignals {
  /** The cardinal sin: they used the target word (or a forbidden form). */
  usedWord: boolean;
  framesUsed: string[];
  cluesHit: string[];
  cluesMissing: string[];
  wordCount: number;
  /** 0..100. Low if the word was used; otherwise rewards clues + a frame + length. */
  score: number;
}

function boundary(term: string): RegExp {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
  return new RegExp(`\\b${escaped}\\b`, "i");
}

export function evaluateParaphrase(input: string, item: ParaphraseItem): ParaphraseSignals {
  const norm = normalize(input);
  const wordCount = norm ? norm.split(" ").filter(Boolean).length : 0;

  const banned = [item.word, ...(item.forbidden ?? [])].map((t) => normalize(t)).filter(Boolean);
  const usedWord = banned.some((t) => boundary(t).test(norm));

  const framesUsed = FRAMES.filter((f) => norm.includes(f));

  const cluesHit: string[] = [];
  const cluesMissing: string[] = [];
  for (const clue of item.clues) {
    (boundary(normalize(clue)).test(norm) ? cluesHit : cluesMissing).push(clue);
  }

  let score: number;
  if (usedWord) {
    score = 20;
  } else {
    const coverage = item.clues.length > 0 ? cluesHit.length / item.clues.length : wordCount >= 8 ? 1 : wordCount / 8;
    const frame = framesUsed.length > 0 ? 1 : 0;
    const length = Math.min(1, wordCount / 12);
    score = clamp(Math.round(35 + coverage * 40 + frame * 15 + length * 10), 0, 100);
  }

  return { usedWord, framesUsed, cluesHit, cluesMissing, wordCount, score };
}
