import { describe, expect, it } from "vitest";
import { echoSimilarity, summarise } from "@/features/shadowing/scoring";
import { shadowingDialogues, getShadowDialogue } from "@/data/shadowing";
import type { LineOutcome } from "@/features/shadowing/types";

describe("echo similarity", () => {
  it("scores an exact repeat as 100 and ignores case/punctuation", () => {
    expect(echoSimilarity("I loved it, honestly!", "I loved it honestly")).toBe(100);
  });

  it("is order-free — a reshuffle still matches", () => {
    expect(echoSimilarity("it honestly loved I", "I loved it honestly")).toBe(100);
  });

  it("scores a partial repeat by fraction of the model's words", () => {
    // 2 of the model's 4 words present.
    expect(echoSimilarity("I loved", "I loved it honestly")).toBe(50);
  });

  it("returns 0 for an empty attempt", () => {
    expect(echoSimilarity("", "anything at all")).toBe(0);
  });
});

describe("session summary", () => {
  it("counts repeats and averages only the scored lines", () => {
    const outcomes: LineOutcome[] = [
      { repeated: true, similarity: 80 },
      { repeated: true, similarity: 60 },
      { repeated: false, similarity: null },
    ];
    const res = summarise("shd-x", outcomes);
    expect(res.totalLines).toBe(3);
    expect(res.repeated).toBe(2);
    expect(res.avgSimilarity).toBe(70);
  });

  it("reports null average when the mic was never used", () => {
    const res = summarise("shd-x", [{ repeated: true, similarity: null }]);
    expect(res.avgSimilarity).toBeNull();
  });
});

describe("shadowing data integrity", () => {
  it("ids are unique and each is retrievable", () => {
    const ids = shadowingDialogues.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const d of shadowingDialogues) expect(getShadowDialogue(d.id)).toBe(d);
  });

  it("every dialogue is long enough to be a real session with valid lines", () => {
    for (const d of shadowingDialogues) {
      expect(d.lines.length, `${d.id} should be a ~5-min session`).toBeGreaterThanOrEqual(15);
      expect(d.speakers.length).toBe(2);
      for (const line of d.lines) {
        expect(line.text.trim().length, d.id).toBeGreaterThan(0);
        expect(line.speaker === 0 || line.speaker === 1, `${d.id}: speaker index`).toBe(true);
      }
    }
  });

  it("covers the concrete→abstract range the feature promises", () => {
    const topics = new Set(shadowingDialogues.map((d) => d.topic));
    expect(topics.has("everyday")).toBe(true);
    expect(topics.has("abstract")).toBe(true);
  });
});
