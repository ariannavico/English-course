import { describe, expect, it } from "vitest";
import type { Exercise } from "@/types";
import { grade } from "@/services/exercises/ExerciseService";

function ex(partial: Partial<Exercise> & Pick<Exercise, "data">): Exercise {
  return {
    id: "x",
    type: "multiple-choice",
    instructions: "",
    difficulty: "easy",
    cefrLevel: "A2",
    points: 10,
    tags: [],
    explanation: "",
    ...partial,
  };
}

describe("exercise grading", () => {
  it("grades multiple choice", () => {
    const e = ex({
      data: {
        kind: "multiple-choice",
        question: "q",
        options: [{ id: "a", text: "A" }, { id: "b", text: "B" }],
        correctOptionId: "a",
      },
    });
    expect(grade(e, "a").correct).toBe(true);
    expect(grade(e, "b").correct).toBe(false);
    expect(grade(e, "a").earnedPoints).toBe(10);
  });

  it("grades fill-blank with normalisation", () => {
    const e = ex({
      type: "fill-blank",
      data: { kind: "fill-blank", sentence: "we ___ a taxi", acceptedAnswers: ["took"], explanation: "" },
    });
    expect(grade(e, "Took").correct).toBe(true);
    expect(grade(e, "take").correct).toBe(false);
  });

  it("accepts multiple valid translations", () => {
    const e = ex({
      type: "translation",
      data: {
        kind: "translation",
        italianSentence: "…",
        acceptedAnswers: ["It takes me 20 minutes to get to work", "It takes me twenty minutes to get to work"],
        keyElements: [],
        explanation: "",
      },
    });
    expect(grade(e, "it takes me twenty minutes to get to work.").correct).toBe(true);
  });

  it("gives partial credit on matching", () => {
    const e = ex({
      type: "matching",
      data: {
        kind: "matching",
        pairs: [
          { id: "1", left: "take", right: "infinitive" },
          { id: "2", left: "took", right: "past" },
        ],
      },
    });
    const r = grade(e, { "1": "infinitive", "2": "infinitive" });
    expect(r.score).toBe(0.5);
    expect(r.earnedPoints).toBe(5);
    expect(r.correct).toBe(false);
  });

  it("grades sentence-builder by order", () => {
    const e = ex({
      type: "sentence-builder",
      data: {
        kind: "sentence-builder",
        tokens: ["take", "a", "break"],
        solution: ["take", "a", "break"],
        explanation: "",
      },
    });
    expect(grade(e, ["take", "a", "break"]).correct).toBe(true);
    expect(grade(e, ["a", "take", "break"]).correct).toBe(false);
  });

  it("leaves situation unscored until self-assessed", () => {
    const e = ex({
      type: "situation",
      data: { kind: "situation", situation: "…", targetSkills: [] },
    });
    expect(grade(e, "my answer").correct).toBeNull();
    expect(grade(e, { selfCorrect: true }).correct).toBe(true);
  });
});
