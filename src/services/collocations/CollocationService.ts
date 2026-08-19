import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface CollocationProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
}

const EMPTY: CollocationProgress = { sessions: 0, bestScore: 0, lastScore: 0 };

/** Persists Collocation Lab outcomes via the StorageService abstraction. */
export class CollocationService {
  constructor(private storage: StorageService) {}

  load(): CollocationProgress {
    return this.storage.get<CollocationProgress>(STORAGE_KEYS.collocations) ?? EMPTY;
  }

  recordSession(score: number): CollocationProgress {
    const prev = this.load();
    const next: CollocationProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
    };
    this.storage.set(STORAGE_KEYS.collocations, next);
    return next;
  }
}
