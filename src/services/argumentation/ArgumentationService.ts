import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface ArgumentationProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
  /** Total number of moves the learner has landed *with* the right marker. */
  markerCount: number;
}

const EMPTY: ArgumentationProgress = { sessions: 0, bestScore: 0, lastScore: 0, markerCount: 0 };

/** Persists "Build Your Case" outcomes via the StorageService abstraction (minimal). */
export class ArgumentationService {
  constructor(private storage: StorageService) {}

  load(): ArgumentationProgress {
    return this.storage.get<ArgumentationProgress>(STORAGE_KEYS.argumentation) ?? EMPTY;
  }

  recordSession(score: number, movesWithMarker: number): ArgumentationProgress {
    const prev = this.load();
    const next: ArgumentationProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
      markerCount: prev.markerCount + movesWithMarker,
    };
    this.storage.set(STORAGE_KEYS.argumentation, next);
    return next;
  }
}
