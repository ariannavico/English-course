import type { GrammarLesson } from "@/features/grammarLessons/types";
import { a1Lessons } from "./a1";
import { a2Lessons } from "./a2";
import { b1Lessons } from "./b1";
import { b2Lessons } from "./b2";
import { c1Lessons } from "./c1";
import { c2Lessons } from "./c2";

/** All authored grammar lessons, keyed by catalog Unit id. */
export const grammarLessons: GrammarLesson[] = [
  ...a1Lessons,
  ...a2Lessons,
  ...b1Lessons,
  ...b2Lessons,
  ...c1Lessons,
  ...c2Lessons,
];

const byUnit = new Map(grammarLessons.map((l) => [l.unitId, l]));

export function getGrammarLesson(unitId: string): GrammarLesson | undefined {
  return byUnit.get(unitId);
}
