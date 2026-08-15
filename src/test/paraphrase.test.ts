import { describe, expect, it } from "vitest";
import { evaluateParaphrase } from "@/features/paraphrase/evaluate";
import { paraphraseItems, getParaphraseItem } from "@/data/paraphrase";
import type { ParaphraseItem } from "@/features/paraphrase/types";

const screwdriver = getParaphraseItem("pp-screwdriver")!;
const fridge = getParaphraseItem("pp-refrigerator")!;

describe("evaluateParaphrase", () => {
  it("flags using the target word", () => {
    const r = evaluateParaphrase("A screwdriver is a tool.", screwdriver);
    expect(r.usedWord).toBe(true);
    expect(r.score).toBeLessThan(30);
  });

  it("flags a forbidden synonym form", () => {
    // "fridge" is forbidden for refrigerator
    expect(evaluateParaphrase("It's the fridge in the kitchen.", fridge).usedWord).toBe(true);
  });

  it("allows clue words that merely resemble the target", () => {
    // 'screws' is a clue, not the banned word 'screwdriver'
    const r = evaluateParaphrase("It's a tool you use to turn screws.", screwdriver);
    expect(r.usedWord).toBe(false);
    expect(r.cluesHit).toEqual(expect.arrayContaining(["tool", "turn", "screws"]));
  });

  it("detects definition frames and scores a good paraphrase highly", () => {
    const r = evaluateParaphrase(
      "It's a tool you use to turn screws when you build furniture.",
      screwdriver,
    );
    expect(r.framesUsed.length).toBeGreaterThan(0);
    expect(r.score).toBeGreaterThan(70);
    expect(r.usedWord).toBe(false);
  });

  it("marks missing clues", () => {
    const r = evaluateParaphrase("It's a small metal object.", screwdriver);
    expect(r.cluesMissing).toContain("turn");
  });
});

describe("paraphrase data integrity", () => {
  it("ids unique and a word never appears in its own clues", () => {
    const ids = paraphraseItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of paraphraseItems as ParaphraseItem[]) {
      const w = item.word.toLowerCase();
      expect(item.clues.map((c) => c.toLowerCase()), item.id).not.toContain(w);
      expect(item.model.length).toBeGreaterThan(0);
    }
  });
});
