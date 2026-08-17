import { describe, expect, it } from "vitest";
import { evaluateMove, summariseArgument } from "@/features/argumentation/evaluate";
import { MOVE_META, MOVE_ORDER } from "@/features/argumentation/moves";
import { argumentPrompts, getArgumentPrompt } from "@/data/argumentation";
import type { MoveKind } from "@/features/argumentation/types";

const remote = getArgumentPrompt("arg-remote-work")!;

describe("evaluateMove", () => {
  it("rewards a claim that uses stance language", () => {
    const r = evaluateMove("In my view, remote work is clearly better for most people.", "claim", remote);
    expect(r.markerUsed).toBe(true);
    expect(r.score).toBeGreaterThan(70);
  });

  it("still scores an on-topic answer without a marker, but lower", () => {
    const noMarker = evaluateMove("Remote work is clearly better for most people.", "claim", remote);
    const withMarker = evaluateMove("In my view, remote work is clearly better for most people.", "claim", remote);
    expect(noMarker.markerUsed).toBe(false);
    expect(noMarker.score).toBeLessThan(withMarker.score);
    expect(noMarker.score).toBeGreaterThan(0);
  });

  it("detects a reason marker", () => {
    const r = evaluateMove("This is because it removes the daily commute.", "reason", remote);
    expect(r.markerUsed).toBe(true);
    expect(r.markersUsed).toContain("because");
  });

  it("detects a rebuttal marker distinct from a counter marker", () => {
    const counter = evaluateMove("Admittedly, some teams feel isolated.", "counter", remote);
    const rebuttal = evaluateMove("However, a few calls a week fix that.", "rebuttal", remote);
    expect(counter.markerUsed).toBe(true);
    expect(rebuttal.markerUsed).toBe(true);
  });

  it("tracks content cues for the motion", () => {
    const r = evaluateMove("This is because of the commute and having control of your time.", "reason", remote);
    expect(r.cuesHit).toContain("commute");
    expect(r.cuesHit).toContain("time");
  });

  it("scores empty input as zero", () => {
    const r = evaluateMove("   ", "claim", remote);
    expect(r.score).toBe(0);
    expect(r.markerUsed).toBe(false);
  });

  it("does not confuse a marker substring inside a word", () => {
    // "assist" contains "as", a reason marker — the word boundary must stop it.
    const r = evaluateMove("Robots assist workers in factories.", "reason", remote);
    expect(r.markersUsed).not.toContain("as");
  });
});

describe("summariseArgument", () => {
  it("gives a coherence bonus for signalling all five moves", () => {
    const scores = [80, 80, 80, 80, 80];
    const full = summariseArgument(scores, 5);
    const partial = summariseArgument(scores, 2);
    expect(full.score).toBeGreaterThan(partial.score);
    expect(full.movesWithMarker).toBe(5);
  });

  it("ignores skipped (zero) moves when averaging", () => {
    const r = summariseArgument([90, 90, 0, 0, 0], 2);
    // mean of the two attempted (90) — not dragged down by the three skipped
    expect(r.score).toBeGreaterThanOrEqual(90);
  });
});

describe("argumentation data integrity", () => {
  it("ids are unique", () => {
    const ids = argumentPrompts.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every prompt supplies a non-empty model for all five moves", () => {
    for (const p of argumentPrompts) {
      for (const kind of MOVE_ORDER) {
        const move = p.moves[kind as MoveKind];
        expect(move, `${p.id}/${kind}`).toBeTruthy();
        expect(move.model.length, `${p.id}/${kind}`).toBeGreaterThan(0);
      }
    }
  });

  it("each move model actually uses one of that move's markers", () => {
    for (const p of argumentPrompts) {
      for (const kind of MOVE_ORDER) {
        const r = evaluateMove(p.moves[kind as MoveKind].model, kind as MoveKind, p);
        expect(r.markerUsed, `${p.id}/${kind} model should model a marker`).toBe(true);
      }
    }
  });

  it("has markers and starters defined for every move kind", () => {
    for (const kind of MOVE_ORDER) {
      expect(MOVE_META[kind as MoveKind].markers.length).toBeGreaterThan(0);
      expect(MOVE_META[kind as MoveKind].starters.length).toBeGreaterThan(0);
    }
  });
});
