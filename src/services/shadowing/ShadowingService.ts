import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";
import type { ShadowResult } from "@/features/shadowing/types";

export interface ShadowingProgress {
  sessions: number;
  /** Cumulative lines the learner has said back — the production counter. */
  linesRepeated: number;
  /** Best average match % from any session that used the mic. */
  bestSimilarity: number;
  /** Dialogue ids completed at least once. */
  completed: string[];
}

const EMPTY: ShadowingProgress = {
  sessions: 0,
  linesRepeated: 0,
  bestSimilarity: 0,
  completed: [],
};

/**
 * Persists "Say It Back" outcomes via the StorageService abstraction. The point
 * of the stored shape is production volume: how many lines the learner has
 * actually spoken back, not a grade.
 */
export class ShadowingService {
  constructor(private storage: StorageService) {}

  load(): ShadowingProgress {
    return this.storage.get<ShadowingProgress>(STORAGE_KEYS.shadowing) ?? EMPTY;
  }

  recordSession(result: ShadowResult): ShadowingProgress {
    const prev = this.load();
    const completed = prev.completed.includes(result.dialogueId)
      ? prev.completed
      : [...prev.completed, result.dialogueId];
    const next: ShadowingProgress = {
      sessions: prev.sessions + 1,
      linesRepeated: prev.linesRepeated + result.repeated,
      bestSimilarity: Math.max(prev.bestSimilarity, result.avgSimilarity ?? 0),
      completed,
    };
    this.storage.set(STORAGE_KEYS.shadowing, next);
    return next;
  }
}
