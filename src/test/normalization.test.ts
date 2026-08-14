import { describe, expect, it } from "vitest";
import { matchesAnswer, normalize } from "@/utils/normalization";

describe("normalization", () => {
  it("normalises casing, whitespace, quotes and trailing punctuation", () => {
    expect(normalize("  The  Cat’s  here!! ")).toBe("the cat's here");
  });

  it("matches case-insensitively by default", () => {
    expect(matchesAnswer("Took", ["took"])).toBe(true);
    expect(matchesAnswer("it takes me 20 minutes.", ["It takes me 20 minutes"])).toBe(true);
  });

  it("respects case sensitivity when asked", () => {
    expect(matchesAnswer("took", ["Took"], true)).toBe(false);
    expect(matchesAnswer("Took", ["Took"], true)).toBe(true);
  });

  it("accepts any of several valid answers", () => {
    expect(matchesAnswer("gone", ["been", "gone"])).toBe(true);
  });
});
