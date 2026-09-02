import { describe, expect, it } from "vitest";
import { connectorFunctions, getConnectorFunction } from "@/data/connectors/items";
import { getUnit, unitsBySection } from "@/data/catalog";

describe("connectors content", () => {
  it("every function maps to a real connectors catalog Unit", () => {
    for (const f of connectorFunctions) {
      const unit = getUnit(f.unitId);
      expect(unit, `no catalog unit ${f.unitId}`).toBeDefined();
      expect(unit!.section).toBe("connectors");
    }
  });

  it("every connectors catalog Unit has authored content (full coverage)", () => {
    for (const unit of unitsBySection("connectors")) {
      expect(getConnectorFunction(unit.id), `no content for ${unit.id}`).toBeDefined();
    }
  });

  it("entry ids are unique and every entry is fully filled", () => {
    const ids = connectorFunctions.flatMap((f) => f.connectors.map((c) => c.id));
    expect(new Set(ids).size).toBe(ids.length);
    for (const f of connectorFunctions) {
      expect(f.connectors.length).toBeGreaterThan(0);
      for (const c of f.connectors) {
        expect(c.id.startsWith("cx-")).toBe(true);
        expect(c.word.trim().length).toBeGreaterThan(0);
        expect(c.it.trim().length).toBeGreaterThan(0);
        expect(c.structure.trim().length).toBeGreaterThan(0);
        expect(c.example.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("covers the core writing functions", () => {
    const fns = new Set(connectorFunctions.map((f) => f.fn));
    for (const f of ["Contrast", "Cause", "Effect", "Concession", "Condition"]) {
      expect(fns.has(f), `missing function ${f}`).toBe(true);
    }
  });
});
