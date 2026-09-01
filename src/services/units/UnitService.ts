import type {
  CompletedBy,
  LevelSummary,
  SectionKind,
  SectionSummary,
  Unit,
  UnitProgress,
} from "@/types";
import { LEVELS } from "@/types";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

type ProgressMap = Record<string, UnitProgress>;

/* ------------------------------ pure logic ------------------------------ */

/** Status of a unit given the progress map — absent means not started. */
export function statusOf(progress: ProgressMap, unitId: string): UnitProgress["status"] {
  return progress[unitId]?.status ?? "not_started";
}

/** Per-section counts. `total` comes from the catalog, so sections with no
 * progress yet still report their real size. */
export function summariseSections(units: Unit[], progress: ProgressMap): SectionSummary[] {
  const bySection = new Map<SectionKind, Unit[]>();
  for (const u of units) {
    const list = bySection.get(u.section) ?? [];
    list.push(u);
    bySection.set(u.section, list);
  }
  return [...bySection.entries()].map(([section, list]) => {
    let completed = 0;
    let studied = 0;
    let assessed = 0;
    let inProgress = 0;
    for (const u of list) {
      const p = progress[u.id];
      if (p?.status === "completed") {
        completed++;
        if (p.completedBy === "assessment") assessed++;
        else studied++;
      } else if (p?.status === "in_progress") {
        inProgress++;
      }
    }
    const total = list.length;
    return {
      section,
      total,
      completed,
      studied,
      assessed,
      inProgress,
      notStarted: total - completed - inProgress,
      percent: total ? Math.round((completed / total) * 100) : 0,
    };
  });
}

/** Per-CEFR-level completion across all sections. */
export function summariseLevels(units: Unit[], progress: ProgressMap): LevelSummary[] {
  return LEVELS.map((level) => {
    const list = units.filter((u) => u.level === level);
    const completed = list.filter((u) => progress[u.id]?.status === "completed").length;
    const total = list.length;
    return { level, total, completed, percent: total ? Math.round((completed / total) * 100) : 0 };
  }).filter((l) => l.total > 0);
}

/* ------------------------------ service ------------------------------ */

/**
 * Owns per-unit progress via the StorageService abstraction. Content-agnostic:
 * it never imports the catalog, so it works before Phase 2 content exists and
 * stays decoupled from it. Aggregation is done by the pure helpers above, which
 * take the catalog as an argument.
 */
export class UnitService {
  constructor(private storage: StorageService) {}

  private load(): ProgressMap {
    return this.storage.get<ProgressMap>(STORAGE_KEYS.units) ?? {};
  }

  private save(map: ProgressMap): void {
    this.storage.set(STORAGE_KEYS.units, map);
  }

  all(): ProgressMap {
    return this.load();
  }

  get(unitId: string): UnitProgress | undefined {
    return this.load()[unitId];
  }

  /** Ensure a progress record exists (idempotent). Needs section/level because
   * the store is self-describing for aggregation. */
  private ensure(unit: Pick<Unit, "id" | "section" | "level">, map: ProgressMap): UnitProgress {
    let p = map[unit.id];
    if (!p) {
      p = { unitId: unit.id, section: unit.section, level: unit.level, status: "not_started" };
      map[unit.id] = p;
    }
    return p;
  }

  /** Mark a unit as being studied → in_progress (unless already completed). */
  start(unit: Pick<Unit, "id" | "section" | "level">, at: Date = new Date()): UnitProgress {
    const map = this.load();
    const p = this.ensure(unit, map);
    if (p.status === "not_started") {
      p.status = "in_progress";
      p.studiedAt = at.toISOString();
    }
    this.save(map);
    return p;
  }

  /** Mark completed, recording WHY (study vs assessment). */
  complete(
    unit: Pick<Unit, "id" | "section" | "level">,
    by: CompletedBy = "study",
    at: Date = new Date(),
  ): UnitProgress {
    const map = this.load();
    const p = this.ensure(unit, map);
    p.status = "completed";
    p.completedBy = by;
    p.completedAt = at.toISOString();
    if (!p.studiedAt && by === "study") p.studiedAt = at.toISOString();
    this.save(map);
    return p;
  }

  /** Reopen a unit for study — e.g. the learner wants to actually study an
   * assessment-credited chapter (requirement #3 / #11.3). */
  reopen(unitId: string): UnitProgress | undefined {
    const map = this.load();
    const p = map[unitId];
    if (!p) return undefined;
    p.status = "in_progress";
    p.completedBy = undefined;
    p.completedAt = undefined;
    this.save(map);
    return p;
  }

  /**
   * Credit every catalog unit at or below `throughLevel` as completed-by-
   * assessment, unless the learner has already touched it. Drives "Find your
   * level" pre-completion (#3). Idempotent and non-destructive.
   */
  completeByAssessmentUpTo(units: Unit[], throughLevel: number, at: Date = new Date()): number {
    const map = this.load();
    const order = new Map(LEVELS.map((l, i) => [l, i]));
    let credited = 0;
    for (const u of units) {
      if ((order.get(u.level) ?? 99) > throughLevel) continue;
      const existing = map[u.id];
      if (existing && existing.status !== "not_started") continue; // never override real work
      map[u.id] = {
        unitId: u.id,
        section: u.section,
        level: u.level,
        status: "completed",
        completedBy: "assessment",
        completedAt: at.toISOString(),
      };
      credited++;
    }
    this.save(map);
    return credited;
  }
}
