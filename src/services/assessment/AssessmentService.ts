import type { ReadinessReport } from "@/features/assessment/report";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

export interface StoredReport {
  takenAt: string;
  report: ReadinessReport;
}

/** Persists the most recent readiness report (for "last taken" + trend later). */
export class AssessmentService {
  constructor(private storage: StorageService) {}

  loadLast(): StoredReport | null {
    return this.storage.get<StoredReport>(STORAGE_KEYS.assessment);
  }

  save(report: ReadinessReport): StoredReport {
    const stored: StoredReport = { takenAt: new Date().toISOString(), report };
    this.storage.set(STORAGE_KEYS.assessment, stored);
    return stored;
  }
}
