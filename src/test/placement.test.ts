import { describe, expect, it } from "vitest";
import { buildRoutingPlan, computePlacement, PLACEMENT_LEVELS } from "@/features/placement/placement";
import { placementItems } from "@/data/placement";
import type { PlacementAnswer, PlacementLevel } from "@/features/placement/types";

/** Build one answer per placement item, correct up to and including `through`. */
function answersThrough(through: PlacementLevel): PlacementAnswer[] {
  const order = PLACEMENT_LEVELS;
  const cutoff = order.indexOf(through);
  return placementItems.map((it) => ({
    level: it.level,
    correct: order.indexOf(it.level) <= cutoff,
  }));
}

describe("computePlacement", () => {
  it("places at B2 when everything is correct", () => {
    const res = computePlacement(placementItems.map((it) => ({ level: it.level, correct: true })));
    expect(res.band).toBe("B2");
    expect(res.correct).toBe(res.total);
  });

  it("places at A2 when everything is wrong", () => {
    const res = computePlacement(placementItems.map((it) => ({ level: it.level, correct: false })));
    expect(res.band).toBe("A2");
    expect(res.correct).toBe(0);
  });

  it("does not drag a solid B1 down for missing the harder tiers", () => {
    // Correct through B1, wrong on B1+ and B2 — should still place B1.
    const res = computePlacement(answersThrough("B1"));
    expect(res.band).toBe("B1");
  });

  it("stops climbing at the first failed tier", () => {
    // Ace A2 and A2+, then fail everything from B1 up → placed A2+.
    const res = computePlacement(answersThrough("A2+"));
    expect(res.band).toBe("A2+");
  });

  it("floors at A2 when even the easiest tier is failed", () => {
    // Get A2 wrong but (implausibly) B2 right — the climb never starts.
    const answers: PlacementAnswer[] = placementItems.map((it) => ({
      level: it.level,
      correct: it.level === "B2",
    }));
    expect(computePlacement(answers).band).toBe("A2");
  });

  it("reports tier accuracy for each answered tier", () => {
    const res = computePlacement(answersThrough("B1"));
    const b1 = res.tierAccuracy.find((t) => t.level === "B1");
    expect(b1?.accuracy).toBe(1);
    const b2 = res.tierAccuracy.find((t) => t.level === "B2");
    expect(b2?.accuracy).toBe(0);
  });
});

describe("buildRoutingPlan", () => {
  it("returns a plan with steps for every band", () => {
    for (const band of PLACEMENT_LEVELS) {
      const plan = buildRoutingPlan(band);
      expect(plan.band).toBe(band);
      expect(plan.steps.length).toBeGreaterThanOrEqual(2);
      expect(plan.headline.length).toBeGreaterThan(0);
      for (const s of plan.steps) expect(s.to.startsWith("/"), `${band} → ${s.title}`).toBe(true);
    }
  });
});

describe("placement data integrity", () => {
  it("has two items per tier, ids unique, and one correct option each", () => {
    const ids = placementItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const level of PLACEMENT_LEVELS) {
      expect(placementItems.filter((i) => i.level === level).length, level).toBe(2);
    }
    for (const it of placementItems) {
      const d = it.exercise.data;
      if (d.kind === "multiple-choice" || d.kind === "verb-choice" || d.kind === "tense-choice") {
        expect(d.options.some((o) => o.id === d.correctOptionId), it.id).toBe(true);
      }
    }
  });
});
