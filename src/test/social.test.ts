import { describe, expect, it } from "vitest";
import { FUNCTION_ORDER, sampleSession, scoreSession, weakestFunction } from "@/features/social/social";
import { socialItems } from "@/data/social";
import type { SocialAnswer } from "@/features/social/types";

describe("social session logic", () => {
  it("samples a balanced session covering every function", () => {
    const session = sampleSession(socialItems, 2);
    expect(session.length).toBe(FUNCTION_ORDER.length * 2);
    for (const fn of FUNCTION_ORDER) {
      expect(session.filter((i) => i.fn === fn).length, fn).toBe(2);
    }
  });

  it("scores overall and per function", () => {
    const answers: SocialAnswer[] = [
      { fn: "reacting", correct: true },
      { fn: "reacting", correct: true },
      { fn: "turn-taking", correct: false },
      { fn: "turn-taking", correct: false },
    ];
    const res = scoreSession(answers);
    expect(res.correct).toBe(2);
    expect(res.total).toBe(4);
    expect(res.score).toBe(50);
    expect(res.byFunction.find((f) => f.fn === "reacting")?.accuracy).toBe(1);
    expect(res.byFunction.find((f) => f.fn === "turn-taking")?.accuracy).toBe(0);
  });

  it("names the weakest function, or null when all perfect", () => {
    const mixed = scoreSession([
      { fn: "reacting", correct: true },
      { fn: "turn-taking", correct: false },
    ]);
    expect(weakestFunction(mixed)).toBe("Managing turns");

    const perfect = scoreSession([
      { fn: "reacting", correct: true },
      { fn: "turn-taking", correct: true },
    ]);
    expect(weakestFunction(perfect)).toBeNull();
  });
});

describe("social data integrity", () => {
  it("ids unique, three items per function, exactly one best each", () => {
    const ids = socialItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const fn of FUNCTION_ORDER) {
      expect(socialItems.filter((i) => i.fn === fn).length, fn).toBe(3);
    }
    for (const item of socialItems) {
      expect(item.options.length, item.id).toBeGreaterThanOrEqual(3);
      expect(item.options.filter((o) => o.best).length, item.id).toBe(1);
      for (const o of item.options) expect(o.feedback.length, `${item.id}/${o.id}`).toBeGreaterThan(0);
      expect(item.principle.length, item.id).toBeGreaterThan(0);
    }
  });
});
