import { describe, expect, it } from "vitest";
import { keysToSeed, mergeOnLogin } from "@/services/sync/mergeState";

describe("mergeOnLogin", () => {
  it("lets the cloud win for shared keys", () => {
    const local = { progress: { xp: 5 }, streak: 2 };
    const cloud = { progress: { xp: 40 } };
    expect(mergeOnLogin(local, cloud)).toEqual({ progress: { xp: 40 }, streak: 2 });
  });

  it("keeps keys that only exist locally", () => {
    const merged = mergeOnLogin({ onlyLocal: 1 }, { onlyCloud: 2 });
    expect(merged).toEqual({ onlyLocal: 1, onlyCloud: 2 });
  });

  it("handles empty sides", () => {
    expect(mergeOnLogin({}, { a: 1 })).toEqual({ a: 1 });
    expect(mergeOnLogin({ a: 1 }, {})).toEqual({ a: 1 });
  });
});

describe("keysToSeed", () => {
  it("returns local-only keys to push up on first sign-in", () => {
    expect(keysToSeed({ a: 1, b: 2 }, { b: 9 })).toEqual(["a"]);
    expect(keysToSeed({ a: 1 }, { a: 1 })).toEqual([]);
  });
});
