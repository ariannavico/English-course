import type { VocabLevel } from "@/features/vocabLevels/types";
import { nextLevel } from "@/features/vocabLevels/vocabLevels";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

/** Per-word knowledge levels. Words absent from the map are level 1 (new). */
export type VocabLevelMap = Record<string, VocabLevel>;

export class VocabLevelsService {
  constructor(private storage: StorageService) {}

  loadAll(): VocabLevelMap {
    return this.storage.get<VocabLevelMap>(STORAGE_KEYS.vocabLevels) ?? {};
  }

  levelOf(id: string): VocabLevel {
    return this.loadAll()[id] ?? 1;
  }

  /** Apply a result: promote/demote the word, persist, return the new level. */
  record(id: string, correct: boolean): VocabLevel {
    const all = this.loadAll();
    const before = all[id] ?? 1;
    const after = nextLevel(before, correct);
    all[id] = after;
    this.storage.set(STORAGE_KEYS.vocabLevels, all);
    return after;
  }
}
