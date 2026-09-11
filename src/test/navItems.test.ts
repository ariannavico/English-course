import { describe, expect, it } from "vitest";
import { navItems } from "@/components/layout/navItems";

describe("navigation structure", () => {
  it("is the two-surface nav: Dashboard + Explore", () => {
    expect(navItems.map((i) => i.to)).toEqual(["/dashboard", "/explore"]);
  });

  it("routes are unique and absolute", () => {
    const routes = navItems.map((i) => i.to);
    expect(new Set(routes).size, "duplicate route in nav").toBe(routes.length);
    for (const r of routes) expect(r.startsWith("/"), r).toBe(true);
  });

  it("labels are unique and non-empty", () => {
    const labels = navItems.map((i) => i.label);
    expect(new Set(labels).size).toBe(labels.length);
    for (const l of labels) expect(l.length).toBeGreaterThan(0);
  });
});
