import { describe, expect, it } from "vitest";
import { assessmentCreditIndex } from "@/features/placement/placement";
import { catalog, unitsBySection } from "@/data/catalog";
import { UnitService } from "@/services/units/UnitService";
import type { StorageService } from "@/services/storage/StorageService";

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

describe("placement → assessment pre-completion (#3)", () => {
  it("maps bands to a conservative credit ceiling (B1 credits A1–A2)", () => {
    expect(assessmentCreditIndex("A2")).toBe(0);
    expect(assessmentCreditIndex("B1")).toBe(1); // A1–A2, matching the brief
    expect(assessmentCreditIndex("B2")).toBe(2); // A1–B1
  });

  it("credits the right grammar units for a B1 placement, tagged assessment", () => {
    const svc = new UnitService(new MemStore());
    svc.completeByAssessmentUpTo(catalog, assessmentCreditIndex("B1"));

    const grammar = unitsBySection("grammar");
    const a1 = grammar.find((u) => u.level === "A1")!;
    const a2 = grammar.find((u) => u.level === "A2")!;
    const b1 = grammar.find((u) => u.level === "B1")!;

    expect(svc.get(a1.id)?.status).toBe("completed");
    expect(svc.get(a1.id)?.completedBy).toBe("assessment");
    expect(svc.get(a2.id)?.status).toBe("completed");
    expect(svc.get(b1.id)).toBeUndefined(); // B1 and above left to actually study
  });

  it("does not overwrite a unit the learner already studied", () => {
    const svc = new UnitService(new MemStore());
    const a1 = unitsBySection("grammar").find((u) => u.level === "A1")!;
    svc.complete(a1, "study");
    svc.completeByAssessmentUpTo(catalog, assessmentCreditIndex("B2"));
    expect(svc.get(a1.id)?.completedBy).toBe("study"); // preserved
  });
});
