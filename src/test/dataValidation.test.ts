import { describe, expect, it } from "vitest";
import {
  chapters,
  exercises,
  getExercise,
  getPhrasalVerb,
  getVerb,
  getVocabulary,
  grammarTopics,
  phrasalVerbs,
  verbs,
  vocabulary,
} from "@/data";

function duplicates(ids: string[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) dupes.add(id);
    seen.add(id);
  }
  return [...dupes];
}

describe("data integrity (spec §54)", () => {
  it("every verb id is unique", () => {
    expect(duplicates(verbs.map((v) => v.id))).toEqual([]);
  });

  it("every exercise id is unique", () => {
    expect(duplicates(exercises.map((e) => e.id))).toEqual([]);
  });

  it("every phrasal verb / vocabulary id is unique", () => {
    expect(duplicates(phrasalVerbs.map((p) => p.id))).toEqual([]);
    expect(duplicates(vocabulary.map((v) => v.id))).toEqual([]);
  });

  it("verb references resolve (phrasal verbs, exercises, similar verbs)", () => {
    for (const v of verbs) {
      for (const pvId of v.phrasalVerbs) {
        expect(getPhrasalVerb(pvId), `${v.id} → phrasal ${pvId}`).toBeDefined();
      }
      for (const exId of v.exercises) {
        expect(getExercise(exId), `${v.id} → exercise ${exId}`).toBeDefined();
      }
      for (const sv of v.similarVerbs ?? []) {
        expect(getVerb(sv.verbId), `${v.id} → similar ${sv.verbId}`).toBeDefined();
      }
    }
  });

  it("no orphan phrasal verbs (each is reachable from a verb)", () => {
    const referenced = new Set(verbs.flatMap((v) => v.phrasalVerbs));
    for (const pv of phrasalVerbs) {
      expect(referenced.has(pv.id), `orphan phrasal verb: ${pv.id}`).toBe(true);
    }
  });

  it("chapter references resolve to existing content", () => {
    for (const c of chapters) {
      for (const id of c.verbIds) expect(getVerb(id), `${c.id} → verb ${id}`).toBeDefined();
      for (const id of c.phrasalVerbIds)
        expect(getPhrasalVerb(id), `${c.id} → phrasal ${id}`).toBeDefined();
      for (const id of c.vocabularyIds)
        expect(getVocabulary(id), `${c.id} → vocab ${id}`).toBeDefined();
      for (const id of c.exerciseIds)
        expect(getExercise(id), `${c.id} → exercise ${id}`).toBeDefined();
    }
  });

  it("chapter sections reference existing entities", () => {
    for (const c of chapters) {
      for (const s of c.sections) {
        for (const ref of s.references ?? []) {
          const found =
            getVerb(ref) ||
            getPhrasalVerb(ref) ||
            getVocabulary(ref) ||
            getExercise(ref) ||
            grammarTopics.find((g) => g.id === ref);
          expect(found, `${c.id} section ${s.id} → ${ref}`).toBeTruthy();
        }
      }
    }
  });

  it("auto-gradable exercises have a solution", () => {
    for (const e of exercises) {
      const d = e.data;
      switch (d.kind) {
        case "multiple-choice":
        case "verb-choice":
        case "tense-choice":
          expect(d.options.some((o) => o.id === d.correctOptionId), e.id).toBe(true);
          break;
        case "fill-blank":
        case "translation":
        case "error-correction":
          expect(d.acceptedAnswers.length, e.id).toBeGreaterThan(0);
          break;
        case "sentence-builder":
          expect(d.solution.length, e.id).toBeGreaterThan(0);
          break;
        case "matching":
          expect(d.pairs.length, e.id).toBeGreaterThan(0);
          break;
        case "situation":
          // self-graded — no solution required
          break;
      }
    }
  });
});
