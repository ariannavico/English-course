import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface ParaphraseProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
  /** How many words the learner has "got around" cleanly (without using them). */
  cleanCount: number;
}

const EMPTY: ParaphraseProgress = { sessions: 0, bestScore: 0, lastScore: 0, cleanCount: 0 };

/** Persists paraphrase outcomes via the StorageService abstraction (minimal). */
export class ParaphraseService {
  constructor(private storage: StorageService) {}

  load(): ParaphraseProgress {
    return this.storage.get<ParaphraseProgress>(STORAGE_KEYS.paraphrase) ?? EMPTY;
  }

  recordSession(score: number, cleanInSession: number): ParaphraseProgress {
    const prev = this.load();
    const next: ParaphraseProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
      cleanCount: prev.cleanCount + cleanInSession,
    };
    this.storage.set(STORAGE_KEYS.paraphrase, next);
    return next;
  }
}
