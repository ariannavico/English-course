import type { CefrLevel, Difficulty } from "./common";

export type ExerciseType =
  | "multiple-choice"
  | "fill-blank"
  | "verb-choice"
  | "tense-choice"
  | "translation"
  | "sentence-builder"
  | "matching"
  | "situation"
  | "error-correction";

/* ------------------------------------------------------------------ */
/* Discriminated union of exercise payloads.                          */
/* The `kind` field is the discriminant used by the ExerciseRenderer. */
/* ------------------------------------------------------------------ */

export interface MultipleChoiceData {
  kind: "multiple-choice";
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
}

/** Also used by verb-choice / tense-choice, which are semantic MC variants. */
export interface ChoiceData {
  kind: "verb-choice" | "tense-choice";
  /** Sentence with a {{blank}} marker showing where the choice goes. */
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
}

export interface FillBlankData {
  kind: "fill-blank";
  /** Sentence containing a "___" placeholder for the gap. */
  sentence: string;
  acceptedAnswers: string[];
  caseSensitive?: boolean;
  explanation: string;
}

export interface TranslationData {
  kind: "translation";
  italianSentence: string;
  acceptedAnswers: string[];
  /** Elements the answer must contain (used for hints / self-check). */
  keyElements: string[];
  explanation: string;
}

export interface SentenceBuilderData {
  kind: "sentence-builder";
  /** Tokens presented shuffled; the correct order is `solution`. */
  tokens: string[];
  solution: string[];
  /** Alternative valid orderings, if any. */
  alternativeSolutions?: string[][];
  explanation: string;
}

export interface MatchingData {
  kind: "matching";
  pairs: { id: string; left: string; right: string }[];
}

export interface ErrorCorrectionData {
  kind: "error-correction";
  incorrectSentence: string;
  acceptedAnswers: string[];
  explanation: string;
}

export interface SituationData {
  kind: "situation";
  situation: string;
  targetSkills: string[];
  suggestedElements?: string[];
  modelAnswer?: string;
  evaluationNotes?: string[];
}

export type ExerciseData =
  | MultipleChoiceData
  | ChoiceData
  | FillBlankData
  | TranslationData
  | SentenceBuilderData
  | MatchingData
  | ErrorCorrectionData
  | SituationData;

export interface Exercise {
  id: string;
  type: ExerciseType;
  title?: string;
  instructions: string;
  difficulty: Difficulty;
  cefrLevel: CefrLevel;
  points: number;
  tags: string[];
  relatedVerbIds?: string[];
  relatedGrammarIds?: string[];
  relatedVocabularyIds?: string[];
  data: ExerciseData;
  explanation: string;
}

/** Result of grading one attempt. Self-graded types (situation) return `null`. */
export interface ExerciseResult {
  correct: boolean | null;
  /** 0..1 fraction of `points` earned (partial credit for matching etc.). */
  score: number;
  earnedPoints: number;
  feedback?: string;
}
