import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface ListeningProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
}

const EMPTY: ListeningProgress = { sessions: 0, bestScore: 0, lastScore: 0 };

/** Persists "Train Your Ear" outcomes via the StorageService abstraction. */
export class ListeningService {
  constructor(private storage: StorageService) {}

  load(): ListeningProgress {
    return this.storage.get<ListeningProgress>(STORAGE_KEYS.listening) ?? EMPTY;
  }

  recordSession(score: number): ListeningProgress {
    const prev = this.load();
    const next: ListeningProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
    };
    this.storage.set(STORAGE_KEYS.listening, next);
    return next;
  }
}
