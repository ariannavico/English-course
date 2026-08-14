import type { MissionAttempt, MissionProgress } from "@/features/missions/types";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

/**
 * Persists mission outcomes (completed set + last attempt per mission). Kept
 * separate from ProgressService so the mission feature owns its own storage,
 * but it uses the same StorageService abstraction — so it migrates to
 * IndexedDB/backend for free later, and feeds the future Skill Profile.
 */
export class MissionService {
  constructor(private storage: StorageService) {}

  load(): MissionProgress {
    return (
      this.storage.get<MissionProgress>(STORAGE_KEYS.missions) ?? {
        completed: [],
        attempts: {},
      }
    );
  }

  private save(p: MissionProgress): void {
    this.storage.set(STORAGE_KEYS.missions, p);
  }

  isCompleted(missionId: string): boolean {
    return this.load().completed.includes(missionId);
  }

  getAttempt(missionId: string): MissionAttempt | undefined {
    return this.load().attempts[missionId];
  }

  /** Record a finished mission run and mark it completed (idempotent on the set). */
  recordAttempt(attempt: MissionAttempt): MissionProgress {
    const p = this.load();
    p.attempts[attempt.missionId] = attempt;
    if (!p.completed.includes(attempt.missionId)) p.completed.push(attempt.missionId);
    this.save(p);
    return p;
  }
}
