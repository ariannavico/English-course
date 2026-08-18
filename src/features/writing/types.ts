import type { RegisterLevel } from "@/features/register/types";

/**
 * Writing tasks (spec §33). Structured written production — emails, reviews,
 * opinion paragraphs, messages — the one B2 skill the app didn't train directly.
 * Evaluation reuses the offline HeuristicEvaluator (key ideas, connectors, error
 * patterns, length) and adds a register check (from the Register Lab detector),
 * so the learner gets a read on both content and tone, then self-rates against a
 * natural model.
 */

export type WritingType = "email" | "review" | "opinion" | "message";

export const WRITING_TYPE_LABEL: Record<WritingType, string> = {
  email: "Email",
  review: "Review",
  opinion: "Opinion",
  message: "Message",
};

export interface WritingTask {
  id: string;
  emoji: string;
  type: WritingType;
  title: string;
  /** The task itself — what to write. */
  brief: string;
  /** Who it's for — this sets the target register. */
  situation: string;
  targetRegister: RegisterLevel;
  /** A realistic minimum length for this task. */
  minWords: number;
  /** Structural things a strong answer includes (guidance + a light self-check). */
  checklist: string[];
  /** Ideas the answer should get across (heuristic presence check). */
  keyElements: string[];
  /** Useful phrases to reach for. */
  usefulPhrases: string[];
  /** A natural (not "perfect") model to compare against. */
  modelAnswer: string;
  /** Register / naturalness notes. */
  notes?: string[];
}

export type WritingRating = "struggled" | "ok" | "confident";

export interface WritingAttempt {
  taskId: string;
  score: number;
  registerMatch: boolean;
  rating: WritingRating;
}
