import { describe, expect, it } from "vitest";
import { navItems } from "@/components/layout/navItems";

describe("navigation structure", () => {
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

  it("keeps the mobile bar small and focused", () => {
    const mobile = navItems.filter((i) => i.mobile);
    expect(mobile.length).toBeGreaterThanOrEqual(3);
    expect(mobile.length, "mobile bar should stay compact").toBeLessThanOrEqual(5);
    expect(mobile.some((i) => i.to === "/"), "Home should be on the mobile bar").toBe(true);
  });

  it("every group heading actually heads at least one item", () => {
    // A group is declared on the first item of a section; that item exists, so
    // every distinct group label is backed by ≥1 item by construction.
    const groups = navItems.filter((i) => i.group).map((i) => i.group!);
    expect(new Set(groups).size, "duplicate group heading (would split a section)").toBe(groups.length);
    expect(groups.length).toBeGreaterThanOrEqual(4);
  });
});
