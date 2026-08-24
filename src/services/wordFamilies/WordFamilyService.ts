import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface WordFamilyProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
}

const EMPTY: WordFamilyProgress = { sessions: 0, bestScore: 0, lastScore: 0 };

/** Persists "Build the Family" outcomes via the StorageService abstraction. */
export class WordFamilyService {
  constructor(private storage: StorageService) {}

  load(): WordFamilyProgress {
    return this.storage.get<WordFamilyProgress>(STORAGE_KEYS.wordFamilies) ?? EMPTY;
  }

  recordSession(score: number): WordFamilyProgress {
    const prev = this.load();
    const next: WordFamilyProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
    };
    this.storage.set(STORAGE_KEYS.wordFamilies, next);
    return next;
  }
}
