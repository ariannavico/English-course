import { describe, expect, it } from "vitest";
import { computeQualityProfile, type QualityInputs } from "@/features/quality/quality";

const EMPTY: QualityInputs = { assessment: null, fluencyBest: null, writingBest: null, argumentationBest: null };

describe("computeQualityProfile", () => {
  it("reports no data before anything is measured", () => {
    const p = computeQualityProfile(EMPTY);
    expect(p.hasData).toBe(false);
    expect(p.overall).toBeNull();
    for (const d of p.dims) {
      expect(d.score).toBeNull();
      expect(d.note).toMatch(/Not measured yet/);
      expect(d.to.startsWith("/")).toBe(true);
    }
  });

  it("measures fluency from Fluency Mode alone", () => {
    const p = computeQualityProfile({ ...EMPTY, fluencyBest: 70 });
    const fluency = p.dims.find((d) => d.key === "fluency")!;
    expect(fluency.score).toBe(70);
    expect(fluency.band).toBe("B1+");
    expect(p.dims.find((d) => d.key === "accuracy")!.score).toBeNull();
    expect(p.hasData).toBe(true);
  });

  it("blends range from writing, argumentation and the assessment", () => {
    const p = computeQualityProfile({
      ...EMPTY,
      writingBest: 60,
      argumentationBest: 90,
      assessment: { accuracy: null, communication: null, range: 60 },
    });
    // (60 + 90 + 60) / 3 = 70
    const range = p.dims.find((d) => d.key === "range")!;
    expect(range.score).toBe(70);
    expect(range.sources).toBe(3);
  });

  it("computes an overall from measured axes and flags the weakest", () => {
    const p = computeQualityProfile({
      assessment: { accuracy: 90, communication: null, range: 50 },
      fluencyBest: 90,
      writingBest: null,
      argumentationBest: null,
    });
    // accuracy 90, fluency 90, range 50 → overall ~77
    expect(p.overall?.score).toBe(77);
    expect(p.headline.toLowerCase()).toContain("range");
  });

  it("calls a close spread balanced", () => {
    const p = computeQualityProfile({
      assessment: { accuracy: 72, communication: 70, range: 74 },
      fluencyBest: null,
      writingBest: null,
      argumentationBest: null,
    });
    expect(p.headline.toLowerCase()).toContain("balanced");
  });
});
