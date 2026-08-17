import { normalize } from "@/utils/normalization";
import { clamp } from "@/utils/scoring";
import { MOVE_META } from "./moves";
import type { ArgumentPrompt, MoveKind } from "./types";

export interface MoveSignals {
  /** Did they reach for a discourse marker that signals this move? */
  markerUsed: boolean;
  markersUsed: string[];
  cuesHit: string[];
  cuesMissing: string[];
  wordCount: number;
  /** 0..100. Rewards the right marker (most), content cues, and enough length. */
  score: number;
}

function boundary(term: string): RegExp {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
  return new RegExp(`\\b${escaped}\\b`, "i");
}

/**
 * Score one move of the argument. The marker is weighted heaviest — using
 * "however" to open a rebuttal *is* the skill we're training — with content
 * cues and length filling out the rest.
 */
export function evaluateMove(
  input: string,
  kind: MoveKind,
  prompt: ArgumentPrompt,
): MoveSignals {
  const norm = normalize(input);
  const wordCount = norm ? norm.split(" ").filter(Boolean).length : 0;

  const markersUsed = MOVE_META[kind].markers.filter((m) => boundary(m).test(norm));
  const markerUsed = markersUsed.length > 0;

  const cues = prompt.moves[kind].cues ?? [];
  const cuesHit: string[] = [];
  const cuesMissing: string[] = [];
  for (const cue of cues) {
    (boundary(normalize(cue)).test(norm) ? cuesHit : cuesMissing).push(cue);
  }

  if (wordCount === 0) {
    return { markerUsed: false, markersUsed: [], cuesHit: [], cuesMissing: cues, wordCount: 0, score: 0 };
  }

  const marker = markerUsed ? 1 : 0;
  const coverage = cues.length > 0 ? cuesHit.length / cues.length : Math.min(1, wordCount / 6);
  const length = Math.min(1, wordCount / 8);
  const score = clamp(Math.round(marker * 45 + coverage * 30 + length * 25), 0, 100);

  return { markerUsed, markersUsed, cuesHit, cuesMissing, wordCount, score };
}

/**
 * Roll five move scores into a session result. A small coherence bonus rewards
 * carrying an argument all the way through — a claim with no rebuttal isn't yet
 * a B2 argument.
 */
export function summariseArgument(
  scores: number[],
  markerHits: number,
): { score: number; movesWithMarker: number } {
  const attempted = scores.filter((s) => s > 0);
  const base = attempted.length > 0 ? attempted.reduce((a, s) => a + s, 0) / attempted.length : 0;
  const coherence = markerHits === 5 ? 6 : markerHits >= 4 ? 3 : 0;
  return { score: clamp(Math.round(base + coherence), 0, 100), movesWithMarker: markerHits };
}
