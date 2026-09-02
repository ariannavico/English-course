import { describe, expect, it } from "vitest";
import { resolveCard } from "@/features/reviewHub/resolve";
import { getConnectorEntry } from "@/data/connectors/items";
import type { ReviewItem } from "@/types";

function item(id: string, kind: ReviewItem["kind"]): ReviewItem {
  const t = { ease: 2.3, interval: 0, repetitions: 0, lapses: 0, correct: 0, wrong: 0, due: "2026-09-01T00:00:00.000Z" };
  return { id, kind, recognition: { ...t }, recall: { ...t }, addedAt: t.due };
}

describe("review card resolution", () => {
  it("connector: recognition shows the word, recall shows the meaning", () => {
    const recog = resolveCard(item("cx-although", "connector"), "recognition");
    expect(recog.prompt).toBe("although");
    expect(recog.answer.toLowerCase()).toContain("sebbene");
    expect(recog.kindLabel).toBe("Connector");

    const recall = resolveCard(item("cx-although", "connector"), "recall");
    expect(recall.answer).toBe("although");
    expect(recall.prompt.toLowerCase()).toContain("sebbene");
  });

  it("connector detail carries the function and structure", () => {
    const c = getConnectorEntry("cx-because")!;
    const card = resolveCard(item("cx-because", "connector"), "recognition");
    expect(card.detail).toContain(c.fn);
  });

  it("unresolved kinds fall back to the id, still reviewable", () => {
    const card = resolveCard(item("some-verb", "verb"), "recognition");
    expect(card.prompt).toBe("some-verb");
    expect(card.kindLabel).toBe("verb");
  });
});
