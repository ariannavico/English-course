import { describe, expect, it } from "vitest";
import {
  gradeAnswer,
  sampleSession,
  scoreSession,
  TYPE_ORDER,
  weakestType,
} from "@/features/collocations/collocations";
import { collocationItems, getCollocationItem } from "@/data/collocations";
import type { CollocationAnswer } from "@/features/collocations/types";

const traffic = getCollocationItem("col-heavy-traffic")!;
const future = getCollocationItem("col-bright-future")!;

describe("gradeAnswer", () => {
  it("accepts the natural collocate, case/space-insensitively", () => {
    expect(gradeAnswer("heavy", traffic)).toBe(true);
    expect(gradeAnswer("  Heavy ", traffic)).toBe(true);
  });

  it("rejects a wrong collocate", () => {
    expect(gradeAnswer("strong", traffic)).toBe(false);
    expect(gradeAnswer("big", traffic)).toBe(false);
  });

  it("accepts listed alternatives", () => {
    expect(gradeAnswer("bright", future)).toBe(true);
    expect(gradeAnswer("promising", future)).toBe(true);
  });
});

describe("session logic", () => {
  it("samples a balanced session covering every type", () => {
    const session = sampleSession(collocationItems, 3);
    expect(session.length).toBe(TYPE_ORDER.length * 3);
    for (const type of TYPE_ORDER) {
      expect(session.filter((i) => i.type === type).length, type).toBe(3);
    }
  });

  it("scores overall and per type, and names the weakest", () => {
    const answers: CollocationAnswer[] = [
      { type: "verb-noun", correct: true },
      { type: "verb-noun", correct: true },
      { type: "preposition", correct: false },
      { type: "preposition", correct: false },
    ];
    const res = scoreSession(answers);
    expect(res.correct).toBe(2);
    expect(res.score).toBe(50);
    expect(res.byType.find((t) => t.type === "verb-noun")?.accuracy).toBe(1);
    expect(weakestType(res)).toBe("Prepositions");
  });

  it("returns null weakest when everything is correct", () => {
    const res = scoreSession([{ type: "adj-noun", correct: true }]);
    expect(weakestType(res)).toBeNull();
  });
});

describe("collocation data integrity", () => {
  it("ids unique, four items per type, and the answer is never already in the prompt", () => {
    const ids = collocationItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const type of TYPE_ORDER) {
      expect(collocationItems.filter((i) => i.type === type).length, type).toBe(4);
    }
    for (const item of collocationItems) {
      expect(item.prompt.includes("___"), item.id).toBe(true);
      expect(item.chunk.length, item.id).toBeGreaterThan(0);
      expect(item.family.length, item.id).toBeGreaterThan(0);
    }
  });
});
