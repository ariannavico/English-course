import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface SocialProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
}

const EMPTY: SocialProgress = { sessions: 0, bestScore: 0, lastScore: 0 };

/** Persists Social English drill outcomes via the StorageService abstraction. */
export class SocialService {
  constructor(private storage: StorageService) {}

  load(): SocialProgress {
    return this.storage.get<SocialProgress>(STORAGE_KEYS.social) ?? EMPTY;
  }

  recordSession(score: number): SocialProgress {
    const prev = this.load();
    const next: SocialProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
    };
    this.storage.set(STORAGE_KEYS.social, next);
    return next;
  }
}
