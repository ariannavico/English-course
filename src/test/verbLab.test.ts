import { describe, expect, it } from "vitest";
import { verbChoiceScenarios, getUniverse } from "@/data/verbLab";

describe("verb lab data integrity", () => {
  it("every scenario has exactly one 'best' option", () => {
    for (const s of verbChoiceScenarios) {
      const best = s.options.filter((o) => o.best);
      expect(best.length, s.id).toBe(1);
    }
  });

  it("every option has reasoning and at least two options exist", () => {
    for (const s of verbChoiceScenarios) {
      expect(s.options.length, s.id).toBeGreaterThanOrEqual(2);
      for (const o of s.options) expect(o.reasoning.length, `${s.id}/${o.verb}`).toBeGreaterThan(0);
    }
  });

  it("relatedUniverse references resolve", () => {
    for (const s of verbChoiceScenarios) {
      if (s.relatedUniverse) {
        expect(getUniverse(s.relatedUniverse), `${s.id} → ${s.relatedUniverse}`).toBeDefined();
      }
    }
  });

  it("scenario ids are unique", () => {
    const ids = verbChoiceScenarios.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
