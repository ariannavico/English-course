import type { CefrLevel, Difficulty, Exercise } from "@/types";

/**
 * Small, typed factories for the common exercise shapes. They keep the big
 * cumulative sets (reviews, marathon, exam) compact and consistent without
 * touching the ExerciseRenderer — data only.
 */

interface Meta {
  id: string;
  instructions: string;
  explanation: string;
  tags: string[];
  difficulty?: Difficulty;
  cefr?: CefrLevel;
  verbs?: string[];
  grammar?: string[];
}

const points = (d: Difficulty): number => (d === "easy" ? 10 : d === "hard" ? 20 : 15);

function base(m: Meta, type: Exercise["type"]) {
  const difficulty = m.difficulty ?? "medium";
  return {
    id: m.id,
    type,
    instructions: m.instructions,
    explanation: m.explanation,
    tags: m.tags,
    difficulty,
    cefrLevel: m.cefr ?? "B1",
    points: points(difficulty),
    ...(m.verbs ? { relatedVerbIds: m.verbs } : {}),
    ...(m.grammar ? { relatedGrammarIds: m.grammar } : {}),
  } as const;
}

type Opt = [text: string, correct: boolean];

/** Multiple-choice. First option marked `true` is the answer. */
export function mc(m: Meta, question: string, options: Opt[]): Exercise {
  return {
    ...base(m, "multiple-choice"),
    data: {
      kind: "multiple-choice",
      question,
      options: options.map(([text], i) => ({ id: `o${i}`, text })),
      correctOptionId: `o${options.findIndex(([, ok]) => ok)}`,
    },
  };
}

/** verb-choice / tense-choice (a `{{blank}}` marks the gap). */
export function choice(
  m: Meta,
  kind: "verb-choice" | "tense-choice",
  question: string,
  options: Opt[],
): Exercise {
  return {
    ...base(m, kind),
    data: {
      kind,
      question,
      options: options.map(([text], i) => ({ id: `o${i}`, text })),
      correctOptionId: `o${options.findIndex(([, ok]) => ok)}`,
    },
  };
}

export function err(m: Meta, incorrect: string, accepted: string[]): Exercise {
  return {
    ...base(m, "error-correction"),
    data: { kind: "error-correction", incorrectSentence: incorrect, acceptedAnswers: accepted, explanation: m.explanation },
  };
}

export function fill(m: Meta, sentence: string, accepted: string[]): Exercise {
  return {
    ...base(m, "fill-blank"),
    data: { kind: "fill-blank", sentence, acceptedAnswers: accepted, explanation: m.explanation },
  };
}
