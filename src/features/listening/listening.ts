import { shuffle } from "@/utils/shuffle";
import type { ListeningAnswer, ListeningItem, ListeningLevel, ListeningResult } from "./types";

export interface LevelMeta {
  label: string;
  /** TTS playback rate for this level. */
  rate: number;
  hint: string;
}

export const LEVEL_META: Record<ListeningLevel, LevelMeta> = {
  1: { label: "Clear", rate: 0.8, hint: "Careful speech — every word fully pronounced." },
  2: { label: "Natural", rate: 1, hint: "Everyday pace, with a bit of linking." },
  3: { label: "Fast & reduced", rate: 1.2, hint: "Quick, with reduced forms (gonna, d'you, lemme)." },
};

export const LEVEL_ORDER: ListeningLevel[] = [1, 2, 3];
/** A slow replay rate offered on every item, for a second listen. */
export const SLOW_RATE = 0.6;

/**
 * Build a session that RAMPS UP: `perLevel` items from each level, kept in level
 * order (shuffled within a level) so the difficulty rises as you go — and the
 * end-of-session diagnostic has a reading on every level.
 */
export function sampleSession(items: ListeningItem[], perLevel = 2): ListeningItem[] {
  const picked: ListeningItem[] = [];
  for (const level of LEVEL_ORDER) {
    const pool = shuffle(items.filter((i) => i.level === level));
    picked.push(...pool.slice(0, perLevel));
  }
  return picked; // deliberately NOT shuffled across levels — the ramp is the point
}

/** Score a finished session overall and per level. */
export function scoreSession(answers: ListeningAnswer[]): ListeningResult {
  const byLevel = LEVEL_ORDER.map((level) => {
    const items = answers.filter((a) => a.level === level);
    const correct = items.filter((a) => a.correct).length;
    const total = items.length;
    return { level, label: LEVEL_META[level].label, correct, total, accuracy: total ? correct / total : 0 };
  }).filter((l) => l.total > 0);

  const correct = answers.filter((a) => a.correct).length;
  const total = answers.length;
  return { correct, total, score: total ? Math.round((correct / total) * 100) : 0, byLevel };
}

/** The level the learner struggled with most, for a one-line takeaway. */
export function weakestLevel(result: ListeningResult): string | null {
  const weakest = [...result.byLevel].sort((a, b) => a.accuracy - b.accuracy)[0];
  if (!weakest) return null;
  return weakest.accuracy < 1 ? weakest.label : null;
}
