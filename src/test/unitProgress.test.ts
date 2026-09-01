import { describe, expect, it } from "vitest";
import type { StorageService } from "@/services/storage/StorageService";
import { UnitService, summariseSections, summariseLevels } from "@/services/units/UnitService";
import type { Unit } from "@/types";

/** Minimal in-memory StorageService; clones on set to mimic serialisation. */
class MemStore implements StorageService {
  private m = new Map<string, unknown>();
  get<T>(k: string): T | null {
    return this.m.has(k) ? (JSON.parse(JSON.stringify(this.m.get(k))) as T) : null;
  }
  set<T>(k: string, v: T): void {
    this.m.set(k, JSON.parse(JSON.stringify(v)));
  }
  remove(k: string): void {
    this.m.delete(k);
  }
  clearAll(): void {
    this.m.clear();
  }
  keys(): string[] {
    return [...this.m.keys()];
  }
}

const at = new Date("2026-09-01T09:00:00.000Z");

const catalog: Unit[] = [
  { id: "g-a1-tobe", section: "grammar", title: "to be", level: "A1" },
  { id: "g-a2-past", section: "grammar", title: "Past Simple", level: "A2" },
  { id: "g-b1-pp", section: "grammar", title: "Present Perfect", level: "B1" },
  { id: "v-travel", section: "verbs", title: "Travel verbs", level: "A2" },
  { id: "v-work", section: "verbs", title: "Work verbs", level: "B1" },
];

describe("UnitService — status lifecycle", () => {
  it("absent unit reads as not_started", () => {
    const svc = new UnitService(new MemStore());
    expect(svc.get("g-a1-tobe")).toBeUndefined();
  });

  it("start() moves not_started → in_progress and stamps studiedAt", () => {
    const svc = new UnitService(new MemStore());
    const p = svc.start(catalog[0], at);
    expect(p.status).toBe("in_progress");
    expect(p.studiedAt).toBe(at.toISOString());
  });

  it("start() never downgrades a completed unit", () => {
    const svc = new UnitService(new MemStore());
    svc.complete(catalog[0], "study", at);
    expect(svc.start(catalog[0], at).status).toBe("completed");
  });

  it("complete() records why and when", () => {
    const svc = new UnitService(new MemStore());
    const p = svc.complete(catalog[0], "study", at);
    expect(p.status).toBe("completed");
    expect(p.completedBy).toBe("study");
    expect(p.completedAt).toBe(at.toISOString());
  });

  it("reopen() clears completion back to in_progress", () => {
    const svc = new UnitService(new MemStore());
    svc.complete(catalog[0], "assessment", at);
    const p = svc.reopen("g-a1-tobe");
    expect(p?.status).toBe("in_progress");
    expect(p?.completedBy).toBeUndefined();
  });
});

describe("UnitService — assessment pre-completion (#3)", () => {
  it("credits units up to the placed level, tagged assessment", () => {
    const svc = new UnitService(new MemStore());
    // A1 = index 0, A2 = 1 → credit everything at A2 or below.
    const credited = svc.completeByAssessmentUpTo(catalog, 1, at);
    expect(credited).toBe(3); // g-a1-tobe, g-a2-past, v-travel
    expect(svc.get("g-a2-past")?.completedBy).toBe("assessment");
    expect(svc.get("g-b1-pp")).toBeUndefined(); // B1 left untouched
  });

  it("never overrides work the learner already did", () => {
    const svc = new UnitService(new MemStore());
    svc.complete(catalog[1], "study", at); // studied g-a2-past
    svc.completeByAssessmentUpTo(catalog, 1, at);
    expect(svc.get("g-a2-past")?.completedBy).toBe("study"); // preserved
  });

  it("is idempotent", () => {
    const svc = new UnitService(new MemStore());
    svc.completeByAssessmentUpTo(catalog, 5, at);
    expect(svc.completeByAssessmentUpTo(catalog, 5, at)).toBe(0);
  });
});

describe("UnitService — aggregation", () => {
  it("summarises a section with studied vs assessed split", () => {
    const svc = new UnitService(new MemStore());
    svc.complete(catalog[0], "assessment", at); // grammar A1
    svc.complete(catalog[1], "study", at); // grammar A2
    svc.start(catalog[2], at); // grammar B1 in progress
    const grammar = summariseSections(catalog, svc.all()).find((s) => s.section === "grammar")!;
    expect(grammar.total).toBe(3);
    expect(grammar.completed).toBe(2);
    expect(grammar.studied).toBe(1);
    expect(grammar.assessed).toBe(1);
    expect(grammar.inProgress).toBe(1);
    expect(grammar.notStarted).toBe(0);
    expect(grammar.percent).toBe(67);
  });

  it("summarises completion per CEFR level across sections", () => {
    const svc = new UnitService(new MemStore());
    svc.complete(catalog[1], "study", at); // A2 grammar
    const levels = summariseLevels(catalog, svc.all());
    const a2 = levels.find((l) => l.level === "A2")!;
    expect(a2.total).toBe(2); // g-a2-past + v-travel
    expect(a2.completed).toBe(1);
    expect(a2.percent).toBe(50);
    expect(levels.find((l) => l.level === "C2")).toBeUndefined(); // empty levels omitted
  });
});
