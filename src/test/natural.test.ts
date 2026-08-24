import { describe, expect, it } from "vitest";
import { PATTERN_ORDER, sampleSession, scoreSession, weakestPattern } from "@/features/natural/natural";
import { naturalItems } from "@/data/natural";
import type { NaturalAnswer } from "@/features/natural/types";

describe("natural session logic", () => {
  it("samples a balanced session covering every trap type", () => {
    const session = sampleSession(naturalItems, 2);
    expect(session.length).toBe(PATTERN_ORDER.length * 2);
    for (const pattern of PATTERN_ORDER) {
      expect(session.filter((i) => i.pattern === pattern).length, pattern).toBe(2);
    }
  });

  it("scores overall and per pattern, and names the weakest", () => {
    const answers: NaturalAnswer[] = [
      { pattern: "literal-translation", correct: true },
      { pattern: "literal-translation", correct: true },
      { pattern: "redundancy", correct: false },
      { pattern: "redundancy", correct: false },
    ];
    const res = scoreSession(answers);
    expect(res.correct).toBe(2);
    expect(res.score).toBe(50);
    expect(res.byPattern.find((p) => p.pattern === "literal-translation")?.accuracy).toBe(1);
    expect(weakestPattern(res)).toBe("Redundant");
  });

  it("returns null weakest when everything is correct", () => {
    const res = scoreSession([{ pattern: "word-choice", correct: true }]);
    expect(weakestPattern(res)).toBeNull();
  });
});

describe("natural data integrity", () => {
  it("ids unique, three items per pattern, exactly one best each", () => {
    const ids = naturalItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const pattern of PATTERN_ORDER) {
      expect(naturalItems.filter((i) => i.pattern === pattern).length, pattern).toBe(3);
    }
    for (const item of naturalItems) {
      expect(item.options.length, item.id).toBeGreaterThanOrEqual(3);
      expect(item.options.filter((o) => o.best).length, item.id).toBe(1);
      for (const o of item.options) expect(o.feedback.length, `${item.id}/${o.id}`).toBeGreaterThan(0);
      expect(item.principle.length, item.id).toBeGreaterThan(0);
    }
  });
});
