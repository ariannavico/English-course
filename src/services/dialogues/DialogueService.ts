import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface DialogueProgress {
  sessions: number;
  bestScore: number;
  lastScore: number;
}

const EMPTY: DialogueProgress = { sessions: 0, bestScore: 0, lastScore: 0 };

/** Persists "Real Talk" outcomes via the StorageService abstraction. */
export class DialogueService {
  constructor(private storage: StorageService) {}

  load(): DialogueProgress {
    return this.storage.get<DialogueProgress>(STORAGE_KEYS.dialogues) ?? EMPTY;
  }

  recordSession(score: number): DialogueProgress {
    const prev = this.load();
    const next: DialogueProgress = {
      sessions: prev.sessions + 1,
      bestScore: Math.max(prev.bestScore, score),
      lastScore: score,
    };
    this.storage.set(STORAGE_KEYS.dialogues, next);
    return next;
  }
}
