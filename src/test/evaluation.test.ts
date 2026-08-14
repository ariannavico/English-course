import { describe, expect, it } from "vitest";
import { HeuristicEvaluator } from "@/services/evaluation/EvaluationService";
import type { ProduceStage } from "@/features/missions/types";

const stage: ProduceStage = {
  kind: "produce",
  id: "s",
  label: "",
  prompt: "",
  targetSkills: [],
  suggestedChunks: ["The thing is...", "I was wondering if..."],
  keyElements: ["missed", "flight", "options"],
};

const evaluator = new HeuristicEvaluator();

describe("HeuristicEvaluator", () => {
  it("detects key elements present and missing", () => {
    const r = evaluator.evaluate("I missed my flight, what are my options?", stage);
    expect(r.keyElementsFound).toContain("missed");
    expect(r.keyElementsFound).toContain("flight");
    expect(r.keyElementsFound).toContain("options");
    expect(r.keyElementsMissing).toEqual([]);
  });

  it("recognises used chunks (ignoring trailing dots)", () => {
    const r = evaluator.evaluate("The thing is, I missed my flight.", stage);
    expect(r.chunksUsed).toContain("The thing is...");
  });

  it("counts connectors for range", () => {
    const r = evaluator.evaluate(
      "I missed it because I was late, however I found options.",
      stage,
    );
    expect(r.connectorsUsed).toContain("because");
    expect(r.connectorsUsed).toContain("however");
  });

  it("flags Italian-learner error patterns", () => {
    const r = evaluator.evaluate("I am agree, and I have 30 years.", stage);
    const sources = r.flags.map((f) => f.hint).join(" ");
    expect(sources).toMatch(/agree/i);
    expect(sources).toMatch(/age|years/i);
  });

  it("gives a higher communication score to a fuller, cleaner answer", () => {
    const weak = evaluator.evaluate("flight", stage);
    const strong = evaluator.evaluate(
      "I'm really sorry, but I missed my flight because I got held up, so I was wondering what my options are for the next one.",
      stage,
    );
    expect(strong.communication).toBeGreaterThan(weak.communication);
    expect(strong.communication).toBeGreaterThan(60);
  });

  it("penalises error flags in the score", () => {
    const clean = evaluator.evaluate("I missed my flight and I need options for the next flight.", stage);
    const flagged = evaluator.evaluate(
      "I missed my flight and I need options, but I am agree I have 30 years.",
      stage,
    );
    expect(flagged.communication).toBeLessThan(clean.communication);
  });
});
