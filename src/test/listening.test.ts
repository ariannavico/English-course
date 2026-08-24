import { describe, expect, it } from "vitest";
import { LEVEL_ORDER, sampleSession, scoreSession, weakestLevel } from "@/features/listening/listening";
import { listeningItems } from "@/data/listening";
import type { ListeningAnswer } from "@/features/listening/types";

describe("listening session logic", () => {
  it("builds a rising ramp: levels stay in ascending order", () => {
    const session = sampleSession(listeningItems, 2);
    expect(session.length).toBe(LEVEL_ORDER.length * 2);
    const levels = session.map((i) => i.level);
    const sorted = [...levels].sort((a, b) => a - b);
    expect(levels, "session should already be in ascending level order").toEqual(sorted);
    for (const level of LEVEL_ORDER) {
      expect(session.filter((i) => i.level === level).length, `level ${level}`).toBe(2);
    }
  });

  it("scores overall and per level, and names the weakest", () => {
    const answers: ListeningAnswer[] = [
      { level: 1, correct: true },
      { level: 1, correct: true },
      { level: 3, correct: false },
      { level: 3, correct: false },
    ];
    const res = scoreSession(answers);
    expect(res.correct).toBe(2);
    expect(res.score).toBe(50);
    expect(res.byLevel.find((l) => l.level === 1)?.accuracy).toBe(1);
    expect(weakestLevel(res)).toBe("Fast & reduced");
  });

  it("returns null weakest when everything is correct", () => {
    expect(weakestLevel(scoreSession([{ level: 2, correct: true }]))).toBeNull();
  });
});

describe("listening data integrity", () => {
  it("ids unique, three items per level, one best each, focus present above level 1", () => {
    const ids = listeningItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const level of LEVEL_ORDER) {
      expect(listeningItems.filter((i) => i.level === level).length, `level ${level}`).toBe(3);
    }
    for (const item of listeningItems) {
      expect(item.line.length, item.id).toBeGreaterThan(0);
      expect(item.options.filter((o) => o.best).length, item.id).toBe(1);
      expect(item.options.length, item.id).toBeGreaterThanOrEqual(3);
      if (item.level > 1) expect(item.focus, `${item.id} should teach a reduced form`).toBeTruthy();
    }
  });
});
