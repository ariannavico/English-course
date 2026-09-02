import { describe, expect, it } from "vitest";
import { grammarLessons, getGrammarLesson } from "@/data/grammarLessons";
import { getUnit, unitsBySection } from "@/data/catalog";
import { resolveCard } from "@/features/reviewHub/resolve";
import type { ReviewItem } from "@/types";

function reviewItem(id: string): ReviewItem {
  const t = { ease: 2.3, interval: 0, repetitions: 0, lapses: 0, correct: 0, wrong: 0, due: "2026-09-02T00:00:00.000Z" };
  return { id, kind: "grammar", recognition: { ...t }, recall: { ...t }, addedAt: t.due };
}

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

  it("the ENTIRE A1 and A2 levels are authored", () => {
    for (const level of ["A1", "A2"] as const) {
      const units = unitsBySection("grammar").filter((u) => u.level === level);
      expect(units.length).toBeGreaterThan(15);
      for (const u of units) {
        expect(getGrammarLesson(u.id), `missing ${level} lesson ${u.id}`).toBeDefined();
      }
    }
  });

  it("a grammar ReviewItem resolves to the chapter title + a rule", () => {
    const card = resolveCard(reviewItem("gr-a1-to-be"), "recognition");
    expect(card.prompt).toBe("Verbo to be");
    expect(card.kindLabel).toBe("Grammar");
    expect(card.answer.length).toBeGreaterThan(0);
  });
});
