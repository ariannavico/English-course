import { describe, expect, it } from "vitest";
import {
  chapterVerdict,
  percentage,
  updateMastery,
  weightedAverage,
} from "@/utils/scoring";

describe("scoring", () => {
  it("maps percentages to verdicts (spec §47)", () => {
    expect(chapterVerdict(95)).toBe("ready");
    expect(chapterVerdict(90)).toBe("ready");
    expect(chapterVerdict(80)).toBe("light-review");
    expect(chapterVerdict(74)).toBe("review");
    expect(chapterVerdict(59)).toBe("repeat");
  });

  it("computes clamped percentages", () => {
    expect(percentage(1, 2)).toBe(50);
    expect(percentage(0, 0)).toBe(0);
    expect(percentage(3, 3)).toBe(100);
  });

  it("moves mastery up on correct, down harder on incorrect", () => {
    expect(updateMastery(50, true)).toBe(62);
    expect(updateMastery(50, false)).toBe(32);
    expect(updateMastery(0, false)).toBe(0); // clamped
    expect(updateMastery(100, true)).toBe(100); // clamped
  });

  it("weights averages", () => {
    expect(weightedAverage([{ value: 100, weight: 1 }, { value: 0, weight: 1 }])).toBe(50);
    expect(weightedAverage([{ value: 90, weight: 2 }, { value: 30, weight: 1 }])).toBe(70);
    expect(weightedAverage([])).toBe(0);
  });
});
