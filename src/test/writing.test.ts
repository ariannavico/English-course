import { describe, expect, it } from "vitest";
import { evaluateWriting } from "@/features/writing/evaluate";
import { writingTasks, getWritingTask } from "@/data/writing";

const hotel = getWritingTask("wr-hotel-complaint")!;
const trip = getWritingTask("wr-trip-message")!;

describe("evaluateWriting", () => {
  it("scores a strong model answer highly and matches its register", () => {
    const r = evaluateWriting(hotel.modelAnswer, hotel);
    expect(r.registerMatch).toBe(true);
    expect(r.lengthOk).toBe(true);
    expect(r.score).toBeGreaterThan(75);
  });

  it("penalises the wrong register for the task", () => {
    // A chatty, too-short reply to a formal complaint task.
    const casual = "hey so my room was noisy lol, sort it out thanks!!";
    const r = evaluateWriting(casual, hotel);
    expect(r.registerMatch).toBe(false);
    expect(r.score).toBeLessThan(r.score + 1); // sanity
    expect(evaluateWriting(hotel.modelAnswer, hotel).score).toBeGreaterThan(r.score);
  });

  it("flags a too-short piece as not meeting the length target", () => {
    const r = evaluateWriting("Dear Sir, my room was noisy. Kind regards.", hotel);
    expect(r.lengthOk).toBe(false);
  });

  it("surfaces Italian-learner error patterns via the reused evaluator", () => {
    const r = evaluateWriting("Hey! I have 30 years and I am agree with you, let me know!", trip);
    const hints = r.evaluation.flags.map((f) => f.hint).join(" ");
    expect(hints).toMatch(/I am 30|agree/);
  });
});

describe("writing data integrity", () => {
  it("ids are unique and every model hits its target register and length", () => {
    const ids = writingTasks.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const task of writingTasks) {
      const r = evaluateWriting(task.modelAnswer, task);
      expect(r.registerMatch, `${task.id} register`).toBe(true);
      expect(r.lengthOk, `${task.id} length`).toBe(true);
      expect(r.score, `${task.id} score`).toBeGreaterThan(72);
      expect(task.checklist.length).toBeGreaterThanOrEqual(3);
      expect(task.keyElements.length).toBeGreaterThan(0);
    }
  });
});
