import { describe, expect, it } from "vitest";
import { analyzeWeaknesses } from "@/services/learning/WeaknessService";
import { microLessons, getMicroLesson } from "@/data/microLessons";
import { getExercise } from "@/data";
import type { MicroLesson } from "@/features/microLessons/types";

const lessons = microLessons;

describe("analyzeWeaknesses", () => {
  const exerciseTags = {
    "ex-make-vs-do-1": ["make", "do"],
    "ex-do-vs-make-1": ["do", "make"],
    "ex-say-vs-tell-1": ["say", "tell"],
  };

  it("reports no data when nothing has been attempted", () => {
    const r = analyzeWeaknesses({ exerciseProgress: {}, exerciseTags, lessons });
    expect(r.hasData).toBe(false);
    expect(r.top).toBeUndefined();
  });

  it("flags the low-accuracy area as the top weakness", () => {
    const r = analyzeWeaknesses({
      exerciseProgress: {
        "ex-make-vs-do-1": { bestScore: 40 },
        "ex-do-vs-make-1": { bestScore: 50 },
        "ex-say-vs-tell-1": { bestScore: 100 },
      },
      exerciseTags,
      lessons,
    });
    expect(r.hasData).toBe(true);
    expect(r.top?.lessonId).toBe("make-vs-do");
    expect(r.top?.accuracy).toBe(45);
    // A strong area should not appear among weaknesses.
    expect(r.areas.map((a) => a.lessonId)).not.toContain("say-vs-tell");
  });

  it("gives each weakness actionable recommendations", () => {
    const r = analyzeWeaknesses({
      exerciseProgress: { "ex-make-vs-do-1": { bestScore: 30 } },
      exerciseTags,
      lessons,
    });
    const recs = r.top!.recommendations.map((x) => x.to);
    expect(recs).toContain("/micro-lessons/make-vs-do");
    expect(recs.some((x) => x.startsWith("/verb-lab/"))).toBe(true);
  });

  it("surfaces mission struggles as a secondary signal", () => {
    const r = analyzeWeaknesses({
      exerciseProgress: {},
      exerciseTags,
      lessons,
      strugglingSkills: ["requesting", "requesting", "diplomacy"],
    });
    expect(r.fromMissions).toEqual(["requesting", "diplomacy"]);
  });
});

describe("micro-lesson data integrity", () => {
  it("lesson ids are unique", () => {
    const ids = lessons.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every practice exercise id resolves and addresses tags exist", () => {
    for (const l of lessons) {
      expect(l.addressesTags.length, l.id).toBeGreaterThan(0);
      expect(l.practiceExerciseIds.length, l.id).toBeGreaterThan(0);
      for (const id of l.practiceExerciseIds) {
        expect(getExercise(id), `${l.id} → ${id}`).toBeDefined();
      }
    }
  });

  it("getMicroLesson resolves a known id", () => {
    const l: MicroLesson | undefined = getMicroLesson("make-vs-do");
    expect(l?.title).toBe("MAKE vs DO");
  });
});
