import type { ProjectProgress } from "@/features/projects/types";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

/**
 * Persists per-project step completion so a project is RESUMABLE (spec §32):
 * leave it half-done and come back to where you were.
 */
export class ProjectService {
  constructor(private storage: StorageService) {}

  private all(): Record<string, ProjectProgress> {
    return this.storage.get(STORAGE_KEYS.projects) ?? {};
  }

  load(projectId: string): ProjectProgress {
    return this.all()[projectId] ?? { completedSteps: [] };
  }

  /** Mark a step done (idempotent) and persist. Returns the updated progress. */
  completeStep(projectId: string, stepId: string): ProjectProgress {
    const all = this.all();
    const p = all[projectId] ?? { completedSteps: [] };
    if (!p.completedSteps.includes(stepId)) p.completedSteps.push(stepId);
    all[projectId] = p;
    this.storage.set(STORAGE_KEYS.projects, all);
    return p;
  }

  /** Start over. */
  reset(projectId: string): void {
    const all = this.all();
    delete all[projectId];
    this.storage.set(STORAGE_KEYS.projects, all);
  }

  /** {done, total} for a project, from its step ids. */
  progress(projectId: string, stepIds: string[]): { done: number; total: number } {
    const completed = new Set(this.load(projectId).completedSteps);
    return { done: stepIds.filter((id) => completed.has(id)).length, total: stepIds.length };
  }
}
