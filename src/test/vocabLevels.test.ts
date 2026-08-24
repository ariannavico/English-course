import { describe, expect, it } from "vitest";
import {
  distribution,
  gapSentence,
  LEVELS,
  nextLevel,
  pickSession,
  taskMode,
} from "@/features/vocabLevels/vocabLevels";
import { activeVocabItems, getActiveVocabItem } from "@/data/activeVocab";
import type { VocabLevel } from "@/features/vocabLevels/types";

describe("level progression", () => {
  it("promotes on correct and nudges down on wrong, clamped 1..5", () => {
    expect(nextLevel(1, true)).toBe(2);
    expect(nextLevel(4, true)).toBe(5);
    expect(nextLevel(5, true)).toBe(5); // can't go above 5
    expect(nextLevel(3, false)).toBe(2);
    expect(nextLevel(1, false)).toBe(1); // can't go below 1
  });

  it("maps levels to progressively productive tasks", () => {
    expect(taskMode(1)).toBe("recognise");
    expect(taskMode(2)).toBe("recognise");
    expect(taskMode(3)).toBe("produce");
    expect(taskMode(4)).toBe("produce");
    expect(taskMode(5)).toBe("recall");
  });
});

describe("session selection", () => {
  it("takes the weakest (lowest-level) words first", () => {
    const levels: Record<string, VocabLevel> = { "av-cope": 5, "av-blunt": 5 };
    const levelOf = (id: string) => levels[id] ?? 1;
    const session = pickSession(activeVocabItems, levelOf, 8);
    expect(session.length).toBe(8);
    // Mastered (level-5) words shouldn't crowd out the level-1 ones.
    expect(session.some((i) => i.id === "av-cope")).toBe(false);
  });

  it("distribution counts words at each level", () => {
    const levels: Record<string, VocabLevel> = { "av-cope": 3, "av-blunt": 3 };
    const dist = distribution(activeVocabItems, (id) => levels[id] ?? 1);
    expect(dist.map((d) => d.level)).toEqual(LEVELS);
    expect(dist.find((d) => d.level === 3)?.count).toBe(2);
    expect(dist.find((d) => d.level === 1)?.count).toBe(activeVocabItems.length - 2);
  });
});

describe("gapSentence", () => {
  it("blanks the target word out of its example", () => {
    const item = getActiveVocabItem("av-reluctant")!;
    const gapped = gapSentence(item);
    expect(gapped).toContain("___");
    expect(gapped.toLowerCase()).not.toContain("reluctant");
  });
});

describe("active vocab data integrity", () => {
  it("ids unique, and every example actually contains its word", () => {
    const ids = activeVocabItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of activeVocabItems) {
      expect(item.definition.length, item.id).toBeGreaterThan(0);
      expect(item.example.toLowerCase(), item.id).toContain(item.word.toLowerCase());
    }
  });
});
