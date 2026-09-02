import type { GrammarLesson } from "@/features/grammarLessons/types";
import { a1Lessons } from "./a1";
import { a2Lessons } from "./a2";

/** All authored grammar lessons, keyed by catalog Unit id. */
export const grammarLessons: GrammarLesson[] = [...a1Lessons, ...a2Lessons];

const byUnit = new Map(grammarLessons.map((l) => [l.unitId, l]));

export function getGrammarLesson(unitId: string): GrammarLesson | undefined {
  return byUnit.get(unitId);
}
