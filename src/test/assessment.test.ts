import { describe, expect, it } from "vitest";
import { buildReport } from "@/features/assessment/report";
import type { TaskResult } from "@/features/assessment/types";
import { b2Practical } from "@/data/assessment";

describe("buildReport", () => {
  it("returns an A2 empty report when nothing was answered", () => {
    const r = buildReport([]);
    expect(r.overall).toBe(0);
    expect(r.competences).toEqual([]);
  });

  it("aggregates per competence and surfaces strong/weak areas", () => {
    const results: TaskResult[] = [
      { competence: "grammar", score: 100, correct: true },
      { competence: "grammar", score: 80, correct: true },
      { competence: "verb-choice", score: 20, correct: false },
      { competence: "writing", score: 55, connectors: 2, chunks: 1, flags: ["Use 'agree', not 'am agree'."] },
    ];
    const r = buildReport(results);
    const grammar = r.competences.find((c) => c.competence === "grammar")!;
    expect(grammar.score).toBe(90);
    expect(grammar.band).toBe("B2");
    expect(r.strong).toContain("Grammar in context");
    expect(r.weak.map((w) => w.label)).toContain("Verb choice");
  });

  it("computes cross-cutting Accuracy from objective tasks", () => {
    const r = buildReport([
      { competence: "grammar", score: 100, correct: true },
      { competence: "verb-choice", score: 0, correct: false },
    ]);
    expect(r.accuracy).toBe(50);
  });

  it("computes Communication + Range from produced tasks and collects mistakes", () => {
    const r = buildReport([
      { competence: "writing", score: 60, connectors: 2, chunks: 2, flags: ["x"] },
      { competence: "speaking", score: 80, connectors: 1, chunks: 1, flags: ["x", "y"] },
    ]);
    expect(r.communication).toBe(70);
    expect(r.range).not.toBeNull();
    expect(r.recurringMistakes.sort()).toEqual(["x", "y"]);
  });
});

describe("assessment data integrity", () => {
  it("task ids are unique and every task is well-formed", () => {
    const ids = b2Practical.tasks.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const t of b2Practical.tasks) {
      if (t.kind === "objective") expect(t.exercise, t.id).toBeTruthy();
      if (t.kind === "produce") expect(t.produce.modelAnswer, t.id).toBeTruthy();
      if (t.kind === "paraphrase") expect(t.item, t.id).toBeTruthy();
    }
  });

  it("covers the core competences", () => {
    const comps = new Set(b2Practical.tasks.map((t) => t.competence));
    for (const c of ["reading", "listening", "grammar", "verb-choice", "vocabulary", "paraphrasing", "writing", "speaking", "interaction"] as const) {
      expect(comps.has(c), c).toBe(true);
    }
  });
});
