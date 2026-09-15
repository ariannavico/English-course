import { describe, expect, it } from "vitest";
import { lexItems, getLexItem, lexItemsForUnit, adjectiveItems, adverbItems } from "@/data/lexis";
import { getUnit } from "@/data/catalog";

describe("lexical content", () => {
  it("ids are unique and every item links to a real catalog Unit", () => {
    const ids = lexItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const i of lexItems) {
      const unit = getUnit(i.unitId);
      expect(unit, `no unit ${i.unitId}`).toBeDefined();
      expect(i.word.trim().length).toBeGreaterThan(0);
      expect(i.it.trim().length).toBeGreaterThan(0);
    }
  });

  it("every adjective belongs to an adjectives-section unit", () => {
    for (const i of adjectiveItems) {
      expect(getUnit(i.unitId)?.section).toBe("adjectives");
    }
  });

  it("every adverb belongs to an adverbs-section unit", () => {
    for (const i of adverbItems) {
      expect(getUnit(i.unitId)?.section).toBe("adverbs");
    }
  });

  it("authored units resolve their words; unauthored ones are empty", () => {
    expect(lexItemsForUnit("adj-personality").length).toBeGreaterThan(3);
    expect(lexItemsForUnit("adj-personality").every((i) => getLexItem(i.id))).toBe(true);
    expect(lexItemsForUnit("adv-frequency").length).toBeGreaterThan(3);
    expect(lexItemsForUnit("voc-food").length).toBeGreaterThan(3);
    expect(lexItemsForUnit("vb-movement")).toEqual([]); // Verbs section not authored yet
  });
});
