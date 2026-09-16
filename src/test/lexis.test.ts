import { describe, expect, it } from "vitest";
import {
  lexItems,
  getLexItem,
  lexItemsForUnit,
  adjectiveItems,
  adverbItems,
  verbItems,
  phrasalItems,
  phrasalReferenceItems,
  irregularItems,
} from "@/data/lexis";
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

  it("verb / phrasal / irregular items link to the right section", () => {
    const check = (items: typeof lexItems, section: string) => {
      expect(items.length).toBeGreaterThan(0);
      for (const i of items) expect(getUnit(i.unitId)?.section, i.id).toBe(section);
    };
    check(verbItems, "verbs");
    check(phrasalItems, "phrasal");
    check(phrasalReferenceItems, "phrasal");
    check(irregularItems, "irregular");
  });

  it("authored units resolve their words; unauthored ones are empty", () => {
    expect(lexItemsForUnit("adj-personality").length).toBeGreaterThan(3);
    expect(lexItemsForUnit("adj-personality").every((i) => getLexItem(i.id))).toBe(true);
    expect(lexItemsForUnit("adv-frequency").length).toBeGreaterThan(3);
    expect(lexItemsForUnit("voc-food").length).toBeGreaterThan(3);
    expect(lexItemsForUnit("vb-movement").length).toBeGreaterThan(3); // Verbs now authored
    expect(lexItemsForUnit("phr-common").length).toBeGreaterThan(3);
    expect(lexItemsForUnit("irr-full-change").length).toBeGreaterThan(3);
    expect(lexItemsForUnit("does-not-exist")).toEqual([]);
  });
});
