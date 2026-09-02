import { describe, expect, it } from "vitest";
import { lexItems, getLexItem, lexItemsForUnit, adjectiveItems, adverbItems } from "@/data/lexis";
import { getUnit } from "@/data/catalog";
import { resolveCard } from "@/features/reviewHub/resolve";
import type { ReviewItem } from "@/types";

function reviewItem(id: string, kind: ReviewItem["kind"]): ReviewItem {
  const t = { ease: 2.3, interval: 0, repetitions: 0, lapses: 0, correct: 0, wrong: 0, due: "2026-09-02T00:00:00.000Z" };
  return { id, kind, recognition: { ...t }, recall: { ...t }, addedAt: t.due };
}

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
    expect(lexItemsForUnit("voc-politics")).toEqual([]); // not authored yet
  });

  it("adverb ReviewItems resolve on both tracks", () => {
    const w = adverbItems[0];
    const card = resolveCard(reviewItem(w.id, "adverb"), "recognition");
    expect(card.prompt).toBe(w.word);
    expect(card.kindLabel).toBe("Adverb");
  });

  it("adjective ReviewItems resolve to rich cards on both tracks", () => {
    const kind = adjectiveItems[0];
    const recog = resolveCard(reviewItem(kind.id, "adjective"), "recognition");
    expect(recog.prompt).toBe(kind.word);
    expect(recog.answer).toBe(kind.it);
    expect(recog.kindLabel).toBe("Adjective");
    const recall = resolveCard(reviewItem(kind.id, "adjective"), "recall");
    expect(recall.answer).toBe(kind.word);
  });
});
