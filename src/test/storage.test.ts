import { beforeEach, describe, expect, it } from "vitest";
import { GUEST_NAMESPACE, LocalStorageService } from "@/services/storage/LocalStorageService";

beforeEach(() => window.localStorage.clear());

describe("LocalStorageService — per-user namespacing", () => {
  it("stores under the guest profile by default", () => {
    const s = new LocalStorageService();
    s.set("progress", { xp: 10 });
    expect(window.localStorage.getItem("eb1.local.progress")).toBe(JSON.stringify({ xp: 10 }));
    expect(s.get("progress")).toEqual({ xp: 10 });
  });

  it("keeps profiles separate and switches between them", () => {
    const s = new LocalStorageService();
    s.set("progress", { xp: 1 }); // guest
    s.setNamespace("user-123");
    expect(s.get("progress")).toBeNull(); // fresh profile
    s.set("progress", { xp: 99 });
    expect(window.localStorage.getItem("eb1.user-123.progress")).toContain("99");
    s.setNamespace(GUEST_NAMESPACE);
    expect(s.get("progress")).toEqual({ xp: 1 }); // guest untouched
  });

  it("migrates legacy (un-namespaced) keys into the guest profile, leaving theme global", () => {
    window.localStorage.setItem("eb1.progress", JSON.stringify({ xp: 5 }));
    window.localStorage.setItem("eb1.theme", JSON.stringify("dark"));
    const s = new LocalStorageService();
    expect(s.get("progress")).toEqual({ xp: 5 }); // now readable under guest
    expect(window.localStorage.getItem("eb1.local.progress")).toContain("5");
    expect(window.localStorage.getItem("eb1.progress")).toBeNull(); // moved
    expect(window.localStorage.getItem("eb1.theme")).toBe(JSON.stringify("dark")); // untouched
  });

  it("keeps global keys (theme) out of the profile and out of the sync hook", () => {
    const s = new LocalStorageService();
    const pushed: string[] = [];
    s.onSet = (k) => pushed.push(k);
    s.setNamespace("user-1");
    s.set("theme", "dark");
    s.set("progress", { xp: 1 });
    expect(window.localStorage.getItem("eb1.theme")).toBe(JSON.stringify("dark"));
    expect(pushed).toEqual(["progress"]); // theme is global, never synced
  });

  it("snapshot + hydrate move a whole profile without firing the sync hook", () => {
    const s = new LocalStorageService();
    s.set("a", 1);
    s.set("b", 2);
    const snap = s.snapshot();
    expect(snap).toEqual({ a: 1, b: 2 });

    s.setNamespace("user-x");
    let hookCalls = 0;
    s.onSet = () => hookCalls++;
    s.hydrate(snap);
    expect(s.get("a")).toBe(1);
    expect(s.get("b")).toBe(2);
    expect(hookCalls).toBe(0); // hydrate is silent (no echo back to cloud)
  });
});
