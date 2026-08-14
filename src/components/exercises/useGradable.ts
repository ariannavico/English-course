import { useState } from "react";
import type { Exercise, ExerciseResult } from "@/types";
import { grade, type ExerciseAnswer } from "@/services";

/**
 * Shared submit/feedback state for exercise components. Grades locally, stores
 * the result, and forwards it to the parent exactly once per attempt.
 */
export function useGradable(
  exercise: Exercise,
  onResult: (result: ExerciseResult) => void,
) {
  const [result, setResult] = useState<ExerciseResult | null>(null);

  function submit(answer: ExerciseAnswer) {
    if (result) return; // already graded this attempt
    const r = grade(exercise, answer);
    setResult(r);
    onResult(r);
  }

  const submitted = result !== null;
  return { result, submitted, submit };
}
