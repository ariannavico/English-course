import { describe, expect, it } from "vitest";
import { grammarLessons, getGrammarLesson } from "@/data/grammarLessons";
import { getUnit, unitsBySection } from "@/data/catalog";

describe("grammar lessons", () => {
  it("each lesson links to a real grammar Unit and is well-formed", () => {
    for (const l of grammarLessons) {
      const unit = getUnit(l.unitId);
      expect(unit, `no unit ${l.unitId}`).toBeDefined();
      expect(unit!.section).toBe("grammar");
      expect(l.explanation.trim().length).toBeGreaterThan(20);
      expect(l.rules.length).toBeGreaterThanOrEqual(2);
      expect(l.examples.length).toBeGreaterThanOrEqual(2);
      expect(l.miniTest.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("every mini-test answer index is valid", () => {
    for (const l of grammarLessons) {
      for (const q of l.miniTest) {
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
        expect(new Set(q.options).size).toBe(q.options.length); // no duplicate options
      }
    }
  });

  it("EVERY grammar chapter A1→C2 is authored", () => {
    for (const u of unitsBySection("grammar")) {
      expect(getGrammarLesson(u.id), `missing lesson ${u.id} (${u.level})`).toBeDefined();
    }
  });
});
