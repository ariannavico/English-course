import { describe, expect, it } from "vitest";
import {
  gradeAnswer,
  POS_ORDER,
  sampleSession,
  scoreSession,
  weakestPOS,
} from "@/features/wordFamilies/wordFamilies";
import { wordFamilyItems, getWordFamilyItem } from "@/data/wordFamilies";
import type { WordAnswer } from "@/features/wordFamilies/types";

const decision = getWordFamilyItem("wf-decision")!;

describe("gradeAnswer", () => {
  it("accepts the right form, case/space-insensitively", () => {
    expect(gradeAnswer("decision", decision)).toBe(true);
    expect(gradeAnswer("  Decision ", decision)).toBe(true);
  });
  it("rejects a wrong form", () => {
    expect(gradeAnswer("decide", decision)).toBe(false);
    expect(gradeAnswer("decisive", decision)).toBe(false);
  });
});

describe("session logic", () => {
  it("samples a balanced session across the four parts of speech", () => {
    const session = sampleSession(wordFamilyItems, 2);
    expect(session.length).toBe(POS_ORDER.length * 2);
    for (const pos of POS_ORDER) {
      expect(session.filter((i) => i.targetPOS === pos).length, pos).toBe(2);
    }
  });

  it("scores overall and per part of speech, naming the weakest", () => {
    const answers: WordAnswer[] = [
      { targetPOS: "noun", correct: true },
      { targetPOS: "noun", correct: true },
      { targetPOS: "adverb", correct: false },
      { targetPOS: "adverb", correct: false },
    ];
    const res = scoreSession(answers);
    expect(res.score).toBe(50);
    expect(res.byPOS.find((p) => p.pos === "noun")?.accuracy).toBe(1);
    expect(weakestPOS(res)).toBe("Adverb");
  });

  it("returns null weakest when everything is correct", () => {
    expect(weakestPOS(scoreSession([{ targetPOS: "verb", correct: true }]))).toBeNull();
  });
});

describe("word family data integrity", () => {
  it("ids unique, three per POS, and the answer isn't already the base", () => {
    const ids = wordFamilyItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const pos of POS_ORDER) {
      expect(wordFamilyItems.filter((i) => i.targetPOS === pos).length, pos).toBe(3);
    }
    for (const item of wordFamilyItems) {
      expect(item.prompt.includes("___"), item.id).toBe(true);
      expect(item.answer.toLowerCase(), item.id).not.toBe(item.base.toLowerCase());
      expect(item.family.length, item.id).toBeGreaterThanOrEqual(2);
    }
  });
});
