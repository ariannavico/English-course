import type { PlacementLevel } from "@/features/placement/types";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface StoredPlacement {
  band: PlacementLevel;
  correct: number;
  total: number;
  takenAt: string;
}

/** Persists the learner's most recent placement so Home can route them. */
export class PlacementService {
  constructor(private storage: StorageService) {}

  load(): StoredPlacement | null {
    return this.storage.get<StoredPlacement>(STORAGE_KEYS.placement);
  }

  save(band: PlacementLevel, correct: number, total: number): StoredPlacement {
    const stored: StoredPlacement = { band, correct, total, takenAt: new Date().toISOString() };
    this.storage.set(STORAGE_KEYS.placement, stored);
    return stored;
  }
}
