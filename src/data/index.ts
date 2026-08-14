/**
 * Content registry. This is the ONLY place that assembles raw data files into
 * lookup maps. Add a verb/exercise/chapter here (or import a new file) and the
 * whole app sees it — no component or service changes required (spec §53).
 */
import type {
  Chapter,
  Exercise,
  PhrasalVerb,
  Verb,
  VocabularyItem,
} from "@/types";

import { take } from "./verbs/take";
import { allNeighbourVerbs } from "./verbs/neighbours";
import { chapter07Verbs } from "./verbs/chapter07";
import { chapter08Verbs } from "./verbs/chapter08";
import { chapter09Verbs } from "./verbs/chapter09";
import { chapter10Verbs } from "./verbs/chapter10";
import { chapter11Verbs } from "./verbs/chapter11";
import { chapter12Verbs } from "./verbs/chapter12";
import { chapter19Verbs } from "./verbs/chapter19";
import { chapter20Verbs } from "./verbs/chapter20";
import { chapter21Verbs } from "./verbs/chapter21";
import { chapter22Verbs } from "./verbs/chapter22";
import { chapter23Verbs } from "./verbs/chapter23";
import { chapter24Verbs } from "./verbs/chapter24";
import { chapter25Verbs } from "./verbs/chapter25";
import { chapter26Verbs } from "./verbs/chapter26";
import { takePhrasalVerbs, getPhrasalVerbs } from "./phrasalVerbs/take";
import { essentialPhrasalVerbs } from "./phrasalVerbs/essentials";
import { essentialPhrasalVerbs2 } from "./phrasalVerbs/essentials2";
import { essentialPhrasalVerbs3 } from "./phrasalVerbs/essentials3";
import { thematicPhrasalVerbs } from "./phrasalVerbs/thematic";
import { thematicPhrasalVerbs2 } from "./phrasalVerbs/thematic2";
import { coreVocabulary } from "./vocabulary/core";
import { thematicVocabulary } from "./vocabulary/thematic";
import { thematicVocabulary2 } from "./vocabulary/thematic2";
import { takeExercises, makeExercises } from "./exercises/take";
import { grammarExercises } from "./exercises/grammar";
import { tenseExercises } from "./exercises/tenses";
import { part3Exercises } from "./exercises/part3";
import { part4Exercises } from "./exercises/part4";
import { part4bExercises } from "./exercises/part4b";
import { part5Exercises } from "./exercises/part5";
import { review1Exercises } from "./exercises/review1";
import { review2Exercises } from "./exercises/review2";
import { review3Exercises } from "./exercises/review3";
import { review4Exercises } from "./exercises/review4";
import { essentialExercises } from "./exercises/essentials";
import { essentialExercises2 } from "./exercises/essentials2";
import { essentialExercises3 } from "./exercises/essentials3";
import { grammarTopics, type GrammarTopic } from "./grammar/topics";
import { chapter01 } from "./chapters/chapter01";
import { chapter02 } from "./chapters/chapter02";
import { chapter03 } from "./chapters/chapter03";
import { chapter04 } from "./chapters/chapter04";
import { chapter05 } from "./chapters/chapter05";
import { chapter06 } from "./chapters/chapter06";
import { chapter07 } from "./chapters/chapter07";
import { chapter08 } from "./chapters/chapter08";
import { chapter09 } from "./chapters/chapter09";
import { chapter10 } from "./chapters/chapter10";
import { chapter11 } from "./chapters/chapter11";
import { chapter12 } from "./chapters/chapter12";
import { chapter13 } from "./chapters/chapter13";
import { chapter14 } from "./chapters/chapter14";
import { chapter15 } from "./chapters/chapter15";
import { chapter16 } from "./chapters/chapter16";
import { chapter17 } from "./chapters/chapter17";
import { chapter18 } from "./chapters/chapter18";
import { chapter19 } from "./chapters/chapter19";
import { chapter20 } from "./chapters/chapter20";
import { chapter21 } from "./chapters/chapter21";
import { chapter22 } from "./chapters/chapter22";
import { chapter23 } from "./chapters/chapter23";
import { chapter24 } from "./chapters/chapter24";
import { chapter25 } from "./chapters/chapter25";
import { chapter26 } from "./chapters/chapter26";
import { chapter27 } from "./chapters/chapter27";
import { chapter28 } from "./chapters/chapter28";
import { chapter29 } from "./chapters/chapter29";
import { review01 } from "./chapters/review01";
import { review02 } from "./chapters/review02";
import { review03 } from "./chapters/review03";
import { review04 } from "./chapters/review04";
import { examFinal } from "./chapters/examFinal";

export { courseMap, PART_TITLES, type CourseEntry } from "./chapters/courseMap";
export type { GrammarTopic } from "./grammar/topics";

/* --- Raw collections ------------------------------------------------ */

export const verbs: Verb[] = [
  take,
  ...chapter07Verbs,
  ...chapter08Verbs,
  ...chapter09Verbs,
  ...chapter10Verbs,
  ...chapter11Verbs,
  ...chapter12Verbs,
  ...chapter19Verbs,
  ...chapter20Verbs,
  ...chapter21Verbs,
  ...chapter22Verbs,
  ...chapter23Verbs,
  ...chapter24Verbs,
  ...chapter25Verbs,
  ...chapter26Verbs,
  ...allNeighbourVerbs,
];
export const phrasalVerbs: PhrasalVerb[] = [
  ...takePhrasalVerbs,
  ...getPhrasalVerbs,
  ...essentialPhrasalVerbs,
  ...essentialPhrasalVerbs2,
  ...essentialPhrasalVerbs3,
  ...thematicPhrasalVerbs,
  ...thematicPhrasalVerbs2,
];
export const vocabulary: VocabularyItem[] = [
  ...coreVocabulary,
  ...thematicVocabulary,
  ...thematicVocabulary2,
];
export const exercises: Exercise[] = [
  ...takeExercises,
  ...makeExercises,
  ...grammarExercises,
  ...tenseExercises,
  ...part3Exercises,
  ...part4Exercises,
  ...part4bExercises,
  ...part5Exercises,
  ...review1Exercises,
  ...review2Exercises,
  ...review3Exercises,
  ...review4Exercises,
  ...essentialExercises,
  ...essentialExercises2,
  ...essentialExercises3,
];
export const chapters: Chapter[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06,
  chapter07,
  chapter08,
  chapter09,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter15,
  chapter16,
  chapter17,
  chapter18,
  chapter19,
  chapter20,
  chapter21,
  chapter22,
  chapter23,
  chapter24,
  chapter25,
  chapter26,
  chapter27,
  chapter28,
  chapter29,
  review01,
  review02,
  review03,
  review04,
  examFinal,
];
export { grammarTopics };

/* --- Indexed lookups ------------------------------------------------ */

const byId = <T extends { id: string }>(items: T[]): Map<string, T> =>
  new Map(items.map((i) => [i.id, i]));

const verbMap = byId(verbs);
const phrasalMap = byId(phrasalVerbs);
const vocabMap = byId(vocabulary);
const exerciseMap = byId(exercises);
const chapterMap = byId(chapters);
const grammarMap = byId(grammarTopics);

export const getVerb = (id: string): Verb | undefined => verbMap.get(id);
export const getPhrasalVerb = (id: string): PhrasalVerb | undefined =>
  phrasalMap.get(id);
export const getVocabulary = (id: string): VocabularyItem | undefined =>
  vocabMap.get(id);
export const getExercise = (id: string): Exercise | undefined =>
  exerciseMap.get(id);
export const getChapter = (id: string): Chapter | undefined => chapterMap.get(id);
export const getGrammarTopic = (id: string): GrammarTopic | undefined =>
  grammarMap.get(id);

export const getExercises = (ids: readonly string[]): Exercise[] =>
  ids.map((id) => exerciseMap.get(id)).filter((e): e is Exercise => e != null);
