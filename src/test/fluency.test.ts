import { describe, expect, it } from "vitest";
import {
  promptFluencyScore,
  sessionFluency,
  wordsPerMinute,
} from "@/features/fluency/scoring";
import { fluencyPrompts, getFluencyPrompt } from "@/data/fluency";

describe("fluency scoring", () => {
  it("rewards flowing over freezing", () => {
    const base = { words: 30, chunks: 1, connectors: 1 };
    expect(promptFluencyScore({ ...base, selfRating: "flowed" })).toBeGreaterThan(
      promptFluencyScore({ ...base, selfRating: "hesitated" }),
    );
    expect(promptFluencyScore({ ...base, selfRating: "hesitated" })).toBeGreaterThan(
      promptFluencyScore({ ...base, selfRating: "froze" }),
    );
  });

  it("gives more output and range a higher score", () => {
    const low = promptFluencyScore({ words: 3, selfRating: "flowed", chunks: 0, connectors: 0 });
    const high = promptFluencyScore({ words: 40, selfRating: "flowed", chunks: 2, connectors: 2 });
    expect(high).toBeGreaterThan(low);
    expect(high).toBeLessThanOrEqual(100);
  });

  it("computes words per minute", () => {
    expect(wordsPerMinute(60, 60)).toBe(60);
    expect(wordsPerMinute(30, 30)).toBe(60);
    expect(wordsPerMinute(0, 0)).toBe(0);
  });

  it("averages a session", () => {
    expect(sessionFluency([80, 60, 100])).toBe(80);
    expect(sessionFluency([])).toBe(0);
  });
});

describe("fluency prompt data", () => {
  it("prompt ids are unique and resolvable", () => {
    const ids = fluencyPrompts.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(getFluencyPrompt(ids[0])?.prompt.length).toBeGreaterThan(0);
  });
});
