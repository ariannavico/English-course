import type { Level, SectionKind, Unit } from "@/types";
import { grammarUnits } from "./grammar";
import {
  adjectiveUnits,
  adverbUnits,
  connectorUnits,
  irregularUnits,
  phrasalUnits,
  verbUnits,
  vocabularyUnits,
} from "./lexis";

export { SECTIONS, SECTION_LABEL } from "./sections";
export type { SectionMeta } from "./sections";

/**
 * The complete Second-Release Unit catalog (feat/second-release, Phase 2): the
 * single content backbone that UnitService/ReviewService aggregate over. Order
 * follows the section registry, then level, then declared order.
 */
export const catalog: Unit[] = [
  ...grammarUnits,
  ...irregularUnits,
  ...verbUnits,
  ...phrasalUnits,
  ...vocabularyUnits,
  ...adjectiveUnits,
  ...adverbUnits,
  ...connectorUnits,
];

const byId = new Map(catalog.map((u) => [u.id, u]));

export function getUnit(id: string): Unit | undefined {
  return byId.get(id);
}

export function unitsBySection(section: SectionKind): Unit[] {
  return catalog.filter((u) => u.section === section);
}

export function unitsByLevel(level: Level): Unit[] {
  return catalog.filter((u) => u.level === level);
}

/** Units of a section grouped by their `category`, preserving first-seen order. */
export function unitsByCategory(section: SectionKind): { category: string; units: Unit[] }[] {
  const groups = new Map<string, Unit[]>();
  for (const u of unitsBySection(section)) {
    const key = u.category ?? "—";
    const list = groups.get(key) ?? [];
    list.push(u);
    groups.set(key, list);
  }
  return [...groups.entries()].map(([category, units]) => ({ category, units }));
}

export {
  grammarUnits,
  irregularUnits,
  verbUnits,
  phrasalUnits,
  vocabularyUnits,
  adjectiveUnits,
  adverbUnits,
  connectorUnits,
};
