import { shuffle } from "@/utils/shuffle";
import type { ActiveVocabItem, LevelCount, TaskMode, VocabLevel } from "./types";

export const LEVEL_LABEL: Record<VocabLevel, string> = {
  1: "New",
  2: "Recognise",
  3: "Understand",
  4: "Use",
  5: "Active",
};

export const LEVELS: VocabLevel[] = [1, 2, 3, 4, 5];

/** The task for a word at this level: passive → productive. */
export function taskMode(level: VocabLevel): TaskMode {
  if (level <= 2) return "recognise";
  if (level <= 4) return "produce";
  return "recall";
}

/** Promote on a right answer, nudge down on a wrong one (clamped 1..5). */
export function nextLevel(level: VocabLevel, correct: boolean): VocabLevel {
  const n = correct ? level + 1 : level - 1;
  return Math.max(1, Math.min(5, n)) as VocabLevel;
}

/** Build a session, weakest words first (the ones that most need activating). */
export function pickSession(
  items: ActiveVocabItem[],
  levelOf: (id: string) => VocabLevel,
  size = 8,
): ActiveVocabItem[] {
  // Group by level, shuffle within, then take from the lowest levels up.
  const byLevel = new Map<VocabLevel, ActiveVocabItem[]>();
  for (const it of items) {
    const lvl = levelOf(it.id);
    const list = byLevel.get(lvl) ?? [];
    list.push(it);
    byLevel.set(lvl, list);
  }
  const ordered: ActiveVocabItem[] = [];
  for (const lvl of LEVELS) {
    const list = byLevel.get(lvl);
    if (list) ordered.push(...shuffle(list));
  }
  return ordered.slice(0, size);
}

/** How many words sit at each level (the ladder). */
export function distribution(
  items: ActiveVocabItem[],
  levelOf: (id: string) => VocabLevel,
): LevelCount[] {
  return LEVELS.map((level) => ({
    level,
    label: LEVEL_LABEL[level],
    count: items.filter((it) => levelOf(it.id) === level).length,
  }));
}

/** Blank the target word out of its example sentence, keeping punctuation. */
export function gapSentence(item: ActiveVocabItem): string {
  const re = new RegExp(`\\b${item.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  return item.example.replace(re, "___");
}
