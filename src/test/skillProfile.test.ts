import { describe, expect, it } from "vitest";
import {
  bandFor,
  classifyTags,
  computeProfile,
  type SkillInput,
} from "@/services/skillProfile/SkillProfileService";

const empty: Omit<SkillInput, "exerciseProgress" | "exerciseDims"> = {
  verbMastery: [],
  vocabMastery: [],
  phrasalMastery: [],
  missionCommunication: [],
  situationsCompleted: 0,
  fluency: { best: 0, sessions: 0 },
  paraphrase: { best: 0, sessions: 0 },
};

describe("bandFor", () => {
  it("maps scores to CEFR-ish bands", () => {
    expect(bandFor(90)).toBe("B2");
    expect(bandFor(70)).toBe("B1+");
    expect(bandFor(50)).toBe("B1");
    expect(bandFor(35)).toBe("A2+");
    expect(bandFor(10)).toBe("A2");
  });
});

describe("classifyTags", () => {
  const verbIds = new Set(["take", "make", "do"]);
  it("routes tags to dimensions", () => {
    expect(classifyTags(["present-perfect", "chapter-13"], verbIds)).toEqual(["grammar"]);
    expect(classifyTags(["make", "do", "verb-choice"], verbIds)).toContain("verb");
    expect(classifyTags(["phrasal-verbs", "take"], verbIds).sort()).toEqual(["phrasal", "verb"]);
    expect(classifyTags(["vocabulary"], verbIds)).toEqual(["vocab"]);
  });
});

describe("computeProfile", () => {
  it("has no data when nothing has been done", () => {
    const p = computeProfile({ exerciseProgress: {}, exerciseDims: {}, ...empty });
    expect(p.hasData).toBe(false);
    expect(p.overall).toBeNull();
  });

  it("always reports Listening as not measured yet", () => {
    const p = computeProfile({ exerciseProgress: {}, exerciseDims: {}, ...empty });
    const listening = p.dimensions.find((d) => d.key === "listening");
    expect(listening?.score).toBeNull();
  });

  it("computes an overall band and calls out the weakest dimension", () => {
    const p = computeProfile({
      exerciseProgress: {
        g1: { bestScore: 90 }, // grammar strong
        v1: { bestScore: 40 }, // verb weak
      },
      exerciseDims: { g1: ["grammar"], v1: ["verb"] },
      ...empty,
      fluency: { best: 55, sessions: 2 },
    });
    expect(p.hasData).toBe(true);
    expect(p.overall).not.toBeNull();
    const grammar = p.dimensions.find((d) => d.key === "grammar")!;
    const verb = p.dimensions.find((d) => d.key === "verb")!;
    expect(grammar.band).toBe("B2");
    expect(verb.score).toBe(40);
    expect(p.headline.toLowerCase()).toContain("verb");
  });

  it("blends exercise accuracy with mastery for the verb dimension", () => {
    const p = computeProfile({
      exerciseProgress: { v1: { bestScore: 80 } },
      exerciseDims: { v1: ["verb"] },
      ...empty,
      verbMastery: [40, 40],
    });
    const verb = p.dimensions.find((d) => d.key === "verb")!;
    // (80*1 + 40*2)/3 = 53
    expect(verb.score).toBe(53);
    expect(verb.attempts).toBe(3);
  });
});
