import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface RegisterProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
}

const EMPTY: RegisterProgress = { sessions: 0, bestScore: 0, lastScore: 0 };

/** Persists Register Lab outcomes via the StorageService abstraction. */
export class RegisterService {
  constructor(private storage: StorageService) {}

  load(): RegisterProgress {
    return this.storage.get<RegisterProgress>(STORAGE_KEYS.register) ?? EMPTY;
  }

  recordSession(score: number): RegisterProgress {
    const prev = this.load();
    const next: RegisterProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
    };
    this.storage.set(STORAGE_KEYS.register, next);
    return next;
  }
}
