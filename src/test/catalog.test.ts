import { describe, expect, it } from "vitest";
import { catalog, getUnit, unitsBySection, unitsByLevel, unitsByCategory, SECTIONS } from "@/data/catalog";
import { summariseSections } from "@/services/units/UnitService";
import { LEVELS, type SectionKind, type UnitProgress } from "@/types";

const PREFIX: Record<SectionKind, string> = {
  grammar: "gr-",
  irregular: "irr-",
  verbs: "vb-",
  phrasal: "phr-",
  vocabulary: "voc-",
  adjectives: "adj-",
  adverbs: "adv-",
  connectors: "con-",
};

describe("Unit catalog integrity", () => {
  it("is a substantial catalog with unique ids", () => {
    expect(catalog.length).toBeGreaterThan(150);
    const ids = catalog.map((u) => u.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every unit has a valid section + level and a section-matching id prefix", () => {
    const sections = new Set(SECTIONS.map((s) => s.kind));
    for (const u of catalog) {
      expect(sections.has(u.section), `unknown section ${u.section}`).toBe(true);
      expect(LEVELS).toContain(u.level);
      expect(u.id.startsWith(PREFIX[u.section]), `${u.id} wrong prefix for ${u.section}`).toBe(true);
      expect(u.title.trim().length).toBeGreaterThan(0);
    }
  });

  it("every registered section owns at least one unit", () => {
    for (const s of SECTIONS) {
      expect(unitsBySection(s.kind).length, `no units in ${s.kind}`).toBeGreaterThan(0);
    }
  });

  it("grammar covers the full A1→C2 range", () => {
    const levels = new Set(unitsBySection("grammar").map((u) => u.level));
    for (const lvl of LEVELS) expect(levels.has(lvl), `grammar missing ${lvl}`).toBe(true);
  });

  it("lookup helpers resolve", () => {
    expect(getUnit("gr-a1-to-be")?.title).toBe("Verbo to be");
    expect(getUnit("nope")).toBeUndefined();
    expect(unitsByLevel("C2").every((u) => u.level === "C2")).toBe(true);
    const grammarCats = unitsByCategory("grammar");
    expect(grammarCats.length).toBeGreaterThan(1);
    expect(grammarCats.every((c) => c.units.length > 0)).toBe(true);
  });
});

describe("catalog + Phase-1 aggregation integration", () => {
  it("with no progress, every section reads 0% and totals match the catalog", () => {
    const summaries = summariseSections(catalog, {});
    for (const s of summaries) {
      expect(s.total).toBe(unitsBySection(s.section).length);
      expect(s.completed).toBe(0);
      expect(s.notStarted).toBe(s.total);
      expect(s.percent).toBe(0);
    }
  });

  it("completing one grammar unit updates only that section's numbers", () => {
    const progress: Record<string, UnitProgress> = {
      "gr-a1-to-be": {
        unitId: "gr-a1-to-be",
        section: "grammar",
        level: "A1",
        status: "completed",
        completedBy: "study",
      },
    };
    const grammar = summariseSections(catalog, progress).find((s) => s.section === "grammar")!;
    expect(grammar.completed).toBe(1);
    expect(grammar.studied).toBe(1);
    expect(grammar.percent).toBe(Math.round((1 / grammar.total) * 100));
  });
});
