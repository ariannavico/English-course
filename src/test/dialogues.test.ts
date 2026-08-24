import { describe, expect, it } from "vitest";
import {
  FEATURE_ORDER,
  sampleSession,
  scoreSession,
  spokenText,
  weakestFeature,
} from "@/features/dialogues/dialogues";
import { dialogueItems } from "@/data/dialogues";
import type { TalkAnswer } from "@/features/dialogues/types";

describe("dialogue session logic", () => {
  it("samples a balanced session covering every disfluency type", () => {
    const session = sampleSession(dialogueItems, 2);
    expect(session.length).toBe(FEATURE_ORDER.length * 2);
    for (const feature of FEATURE_ORDER) {
      expect(session.filter((i) => i.feature === feature).length, feature).toBe(2);
    }
  });

  it("scores overall and per feature, and names the weakest", () => {
    const answers: TalkAnswer[] = [
      { feature: "self-correction", correct: true },
      { feature: "self-correction", correct: true },
      { feature: "hesitation", correct: false },
      { feature: "hesitation", correct: false },
    ];
    const res = scoreSession(answers);
    expect(res.correct).toBe(2);
    expect(res.score).toBe(50);
    expect(res.byFeature.find((f) => f.feature === "self-correction")?.accuracy).toBe(1);
    expect(weakestFeature(res)).toBe("Hesitation & hedging");
  });

  it("returns null weakest when everything is correct", () => {
    expect(weakestFeature(scoreSession([{ feature: "interruption", correct: true }]))).toBeNull();
  });

  it("flattens a dialogue to spoken text", () => {
    const item = dialogueItems.find((i) => i.lines.length > 1)!;
    const text = spokenText(item);
    for (const line of item.lines) expect(text).toContain(line.text);
  });
});

describe("dialogue data integrity", () => {
  it("ids unique, three per feature, one best each, focus + lines present", () => {
    const ids = dialogueItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const feature of FEATURE_ORDER) {
      expect(dialogueItems.filter((i) => i.feature === feature).length, feature).toBe(3);
    }
    for (const item of dialogueItems) {
      expect(item.lines.length, item.id).toBeGreaterThan(0);
      expect(item.options.filter((o) => o.best).length, item.id).toBe(1);
      expect(item.options.length, item.id).toBeGreaterThanOrEqual(3);
      expect(item.focus, `${item.id} should teach a discourse marker`).toBeTruthy();
      expect(item.principle.length, item.id).toBeGreaterThan(0);
    }
  });
});
