import { clamp } from "@/utils/scoring";
import { evaluationService } from "@/services";
import type { EvaluationResult } from "@/services/evaluation/EvaluationService";
import type { ProduceStage } from "@/features/missions/types";
import { detectRegister, REGISTER_LABEL, type RegisterSignals } from "@/features/register/evaluate";
import type { WritingTask } from "./types";

export interface WritingSignals {
  evaluation: EvaluationResult;
  register: RegisterSignals;
  registerMatch: boolean;
  registerLabel: string;
  wordCount: number;
  minWords: number;
  lengthOk: boolean;
  /** 0..100 blended: communication (content) + register match + length target. */
  score: number;
}

/** Adapt a writing task to the ProduceStage the HeuristicEvaluator expects. */
function toStage(task: WritingTask): ProduceStage {
  return {
    kind: "produce",
    id: task.id,
    label: task.title,
    prompt: task.brief,
    targetSkills: ["writing"],
    suggestedChunks: task.usefulPhrases,
    keyElements: task.keyElements,
    modelAnswer: task.modelAnswer,
  };
}

/**
 * Evaluate a piece of writing: reuse the offline content evaluator, add a
 * register match, and weight in whether it reached a realistic length.
 */
export function evaluateWriting(input: string, task: WritingTask): WritingSignals {
  const evaluation = evaluationService.evaluate(input, toStage(task));
  const register = detectRegister(input);
  const registerMatch = register.level === task.targetRegister;
  const wordCount = evaluation.wordCount;
  const lengthOk = wordCount >= task.minWords;
  const lengthFactor = task.minWords > 0 ? Math.min(1, wordCount / task.minWords) : 1;

  const score = clamp(
    Math.round(evaluation.communication * 0.55 + (registerMatch ? 100 : 55) * 0.25 + lengthFactor * 100 * 0.2),
    0,
    100,
  );

  return {
    evaluation,
    register,
    registerMatch,
    registerLabel: REGISTER_LABEL[register.level],
    wordCount,
    minWords: task.minWords,
    lengthOk,
    score,
  };
}
