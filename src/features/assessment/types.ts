import type { Exercise } from "@/types";
import type { ProduceStage } from "@/features/missions/types";
import type { ParaphraseItem } from "@/features/paraphrase/types";

/**
 * B2 Practical Assessment (spec §48). Not a single "final test" — a multi-part
 * assessment across competences, scored separately, that produces a Readiness
 * Report. It is explicitly an INTERNAL estimate, never a CEFR certification.
 */

export type Competence =
  | "reading"
  | "listening"
  | "grammar"
  | "verb-choice"
  | "vocabulary"
  | "paraphrasing"
  | "writing"
  | "speaking"
  | "interaction";

export const COMPETENCE_LABEL: Record<Competence, string> = {
  reading: "Reading",
  listening: "Listening",
  grammar: "Grammar in context",
  "verb-choice": "Verb choice",
  vocabulary: "Vocabulary",
  paraphrasing: "Paraphrasing",
  writing: "Writing",
  speaking: "Speaking & argumentation",
  interaction: "Interaction",
};

/** Objective task (reused ExerciseRenderer). `context` = a reading passage; `audio` = text to TTS for listening. */
export interface ObjectiveTask {
  kind: "objective";
  id: string;
  competence: Competence;
  context?: string;
  audio?: string;
  exercise: Exercise;
}

/** Open production task (reused ProduceStageView). */
export interface ProduceTask {
  kind: "produce";
  id: string;
  competence: Competence;
  produce: ProduceStage;
}

/** Paraphrase task (explain a word without using it). */
export interface ParaphraseTask {
  kind: "paraphrase";
  id: string;
  competence: Competence;
  prompt: string;
  item: ParaphraseItem;
}

export type AssessmentTask = ObjectiveTask | ProduceTask | ParaphraseTask;

export interface Assessment {
  id: string;
  title: string;
  description: string;
  tasks: AssessmentTask[];
}

/** One graded task, collected by the runner. */
export interface TaskResult {
  competence: Competence;
  /** 0..100. */
  score: number;
  /** Objective tasks: was it right? Used for the Accuracy dimension. */
  correct?: boolean;
  /** Production tasks: detected error patterns + range signals. */
  flags?: string[];
  connectors?: number;
  chunks?: number;
}
