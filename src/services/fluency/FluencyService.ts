import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface FluencyProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
  lastWpm: number;
}

const EMPTY: FluencyProgress = { sessions: 0, bestScore: 0, lastScore: 0, lastWpm: 0 };

/**
 * Persists Fluency Mode outcomes via the StorageService abstraction. Minimal on
 * purpose — enough for streak/best display now and for the Fluency dimension of
 * the future B2 Skill Map.
 */
export class FluencyService {
  constructor(private storage: StorageService) {}

  load(): FluencyProgress {
    return this.storage.get<FluencyProgress>(STORAGE_KEYS.fluency) ?? EMPTY;
  }

  recordSession(score: number, avgWpm: number): FluencyProgress {
    const prev = this.load();
    const next: FluencyProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
      lastWpm: avgWpm,
    };
    this.storage.set(STORAGE_KEYS.fluency, next);
    return next;
  }
}
