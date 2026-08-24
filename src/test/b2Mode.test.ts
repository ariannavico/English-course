import { describe, expect, it } from "vitest";
import { ExerciseService, productionRank } from "@/services/exercises/ExerciseService";
import { mc, fill } from "@/data/exercises/factories";
import type { UserProgress } from "@/types";
import type { SpacedRepetitionService } from "@/services/spacedRepetition/SpacedRepetitionService";

const noSr = { get: () => null } as unknown as SpacedRepetitionService;
const service = new ExerciseService(noSr);
const progress = { exerciseProgress: {} } as unknown as UserProgress;

const meta = (id: string) => ({ id, instructions: "", explanation: "", tags: ["grammar"] });

// A pool split evenly between recognition (MC) and production (fill), all "new".
const pool = [
  mc(meta("mc1"), "q", [["a", true], ["b", false]]),
  mc(meta("mc2"), "q", [["a", true], ["b", false]]),
  mc(meta("mc3"), "q", [["a", true], ["b", false]]),
  fill(meta("f1"), "___ here", ["x"]),
  fill(meta("f2"), "___ here", ["x"]),
  fill(meta("f3"), "___ here", ["x"]),
];

describe("productionRank", () => {
  it("ranks open-output above recognition above translation", () => {
    expect(productionRank("fill-blank")).toBeLessThan(productionRank("multiple-choice"));
    expect(productionRank("situation")).toBe(0);
    expect(productionRank("multiple-choice")).toBe(1);
    expect(productionRank("translation")).toBe(2);
  });
});

describe("B2 Mode session selection", () => {
  it("front-loads production exercises when B2 Mode is on", () => {
    const session = service.buildDailySession(progress, { size: 3, pool, b2Mode: true });
    expect(session.length).toBe(3);
    // With production floated to the front of the (single, all-new) priority
    // bucket, a 3-item set should be all fill-blank.
    expect(session.every((e) => e.data.kind === "fill-blank")).toBe(true);
  });

  it("does not force production when B2 Mode is off (mixed set possible)", () => {
    // Run several times; without the preference, MC should appear at least once
    // in the first three across runs.
    const sawMc = Array.from({ length: 8 }).some(() =>
      service
        .buildDailySession(progress, { size: 3, pool, b2Mode: false })
        .some((e) => e.data.kind === "multiple-choice"),
    );
    expect(sawMc).toBe(true);
  });
});
