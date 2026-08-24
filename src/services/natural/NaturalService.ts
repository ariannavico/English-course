import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface NaturalProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
}

const EMPTY: NaturalProgress = { sessions: 0, bestScore: 0, lastScore: 0 };

/** Persists "Sound Natural" outcomes via the StorageService abstraction. */
export class NaturalService {
  constructor(private storage: StorageService) {}

  load(): NaturalProgress {
    return this.storage.get<NaturalProgress>(STORAGE_KEYS.natural) ?? EMPTY;
  }

  recordSession(score: number): NaturalProgress {
    const prev = this.load();
    const next: NaturalProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
    };
    this.storage.set(STORAGE_KEYS.natural, next);
    return next;
  }
}
