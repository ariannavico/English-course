import type { LexItem } from "@/features/lexis/types";
import { adjectiveItems } from "./adjectives";
import { adverbItems } from "./adverbs";
import { vocabularyItems } from "./vocabulary";
import { verbItems } from "./verbs";
import { phrasalItems } from "./phrasalVerbs";
import { phrasalReferenceItems } from "./phrasalReference";
import { irregularItems } from "./irregular";

/** All authored lexical content across sections. */
export const lexItems: LexItem[] = [
  ...adjectiveItems,
  ...adverbItems,
  ...vocabularyItems,
  ...verbItems,
  ...phrasalItems,
  ...phrasalReferenceItems,
  ...irregularItems,
];

const byId = new Map(lexItems.map((i) => [i.id, i]));
const byUnit = new Map<string, LexItem[]>();
for (const i of lexItems) {
  const list = byUnit.get(i.unitId) ?? [];
  list.push(i);
  byUnit.set(i.unitId, list);
}

export function getLexItem(id: string): LexItem | undefined {
  return byId.get(id);
}

/** The authored words for a catalog Unit (empty if not authored yet). */
export function lexItemsForUnit(unitId: string): LexItem[] {
  return byUnit.get(unitId) ?? [];
}

export {
  adjectiveItems,
  adverbItems,
  vocabularyItems,
  verbItems,
  phrasalItems,
  phrasalReferenceItems,
  irregularItems,
};
