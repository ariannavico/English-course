import { describe, expect, it } from "vitest";
import {
  detectRegister,
  evaluateRegister,
  REGISTER_ORDER,
  scoreAgainstTarget,
  scoreSession,
} from "@/features/register/evaluate";
import { registerItems } from "@/data/register";
import type { RegisterAnswer, RegisterLevel } from "@/features/register/types";

describe("detectRegister", () => {
  it("reads a clearly formal message as formal", () => {
    const r = detectRegister("Dear Ms Rossi, I am writing to request the report. Kind regards.");
    expect(r.level).toBe("formal");
  });

  it("reads a chatty message as informal", () => {
    const r = detectRegister("Hey! Can't wait to see you — thanks a million! 😊");
    expect(r.level).toBe("informal");
  });

  it("reads a plain, marker-light message as neutral", () => {
    const r = detectRegister("Hi, could you send me the report when you get a chance? Thank you.");
    expect(r.level).toBe("neutral");
  });

  it("does not call it formal if there are contractions or emoji", () => {
    // Formal phrases present, but a contraction and an emoji drag it out of formal.
    const r = detectRegister("Dear Sir, I would be grateful, but I can't wait! 😊");
    expect(r.level).not.toBe("formal");
  });
});

describe("scoreAgainstTarget", () => {
  it("rewards an exact match and penalises by distance", () => {
    expect(scoreAgainstTarget("formal", "formal", 10)).toBe(100);
    expect(scoreAgainstTarget("neutral", "formal", 10)).toBe(55);
    expect(scoreAgainstTarget("informal", "formal", 10)).toBe(20);
  });

  it("floors a too-short answer", () => {
    expect(scoreAgainstTarget("formal", "formal", 2)).toBe(35);
  });
});

describe("scoreSession", () => {
  it("counts hits and detects a formal-leaning tendency", () => {
    const answers: RegisterAnswer[] = [
      { target: "informal", detected: "neutral", score: 55 },
      { target: "neutral", detected: "formal", score: 55 },
    ];
    const res = scoreSession(answers);
    expect(res.hits).toBe(0);
    expect(res.total).toBe(2);
    expect(res.lean).toBe("formal");
  });

  it("detects a casual-leaning tendency", () => {
    const answers: RegisterAnswer[] = [
      { target: "formal", detected: "neutral", score: 55 },
      { target: "neutral", detected: "informal", score: 55 },
    ];
    expect(scoreSession(answers).lean).toBe("casual");
  });
});

describe("register data integrity", () => {
  it("ids unique and two items per register level", () => {
    const ids = registerItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const level of REGISTER_ORDER) {
      expect(registerItems.filter((i) => i.target === level).length, level).toBe(2);
    }
  });

  it("each ladder's informal, formal and target rungs detect at their register", () => {
    for (const item of registerItems) {
      expect(detectRegister(item.ladder.informal).level, `${item.id} informal rung`).toBe("informal");
      expect(detectRegister(item.ladder.formal).level, `${item.id} formal rung`).toBe("formal");
      // The model shown as the answer must itself hit the target register.
      expect(detectRegister(item.ladder[item.target]).level, `${item.id} target rung`).toBe(item.target);
    }
  });

  it("evaluateRegister scores the model answer at 100 for its target", () => {
    for (const item of registerItems as { ladder: Record<RegisterLevel, string>; target: RegisterLevel; id: string }[]) {
      const { score } = evaluateRegister(item.ladder[item.target], item as never);
      expect(score, item.id).toBe(100);
    }
  });
});
