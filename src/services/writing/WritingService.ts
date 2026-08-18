import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface WritingProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
  /** How many pieces landed the target register. */
  registerHits: number;
}

const EMPTY: WritingProgress = { sessions: 0, bestScore: 0, lastScore: 0, registerHits: 0 };

/** Persists Writing Studio outcomes via the StorageService abstraction. */
export class WritingService {
  constructor(private storage: StorageService) {}

  load(): WritingProgress {
    return this.storage.get<WritingProgress>(STORAGE_KEYS.writing) ?? EMPTY;
  }

  recordPiece(score: number, registerMatch: boolean): WritingProgress {
    const prev = this.load();
    const next: WritingProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
      registerHits: prev.registerHits + (registerMatch ? 1 : 0),
    };
    this.storage.set(STORAGE_KEYS.writing, next);
    return next;
  }
}
