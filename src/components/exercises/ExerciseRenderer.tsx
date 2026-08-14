import type { Exercise, ExerciseResult } from "@/types";
import { ChoiceExercise } from "./ChoiceExercise";
import { FillBlank } from "./FillBlank";
import { TranslationExercise } from "./TranslationExercise";
import { SentenceBuilder } from "./SentenceBuilder";
import { MatchingExercise } from "./MatchingExercise";
import { SituationChallenge } from "./SituationChallenge";

/**
 * Single entry point that maps an exercise's discriminated `data.kind` to the
 * right input component. Adding a new exercise type = add a case here; nothing
 * else in the app needs to know about it (spec §17, §53).
 */
export function ExerciseRenderer({
  exercise,
  onResult,
}: {
  exercise: Exercise;
  onResult: (r: ExerciseResult) => void;
}) {
  switch (exercise.data.kind) {
    case "multiple-choice":
    case "verb-choice":
    case "tense-choice":
      return <ChoiceExercise exercise={exercise} onResult={onResult} />;
    case "fill-blank":
    case "error-correction":
      return <FillBlank exercise={exercise} onResult={onResult} />;
    case "translation":
      return <TranslationExercise exercise={exercise} onResult={onResult} />;
    case "sentence-builder":
      return <SentenceBuilder exercise={exercise} onResult={onResult} />;
    case "matching":
      return <MatchingExercise exercise={exercise} onResult={onResult} />;
    case "situation":
      return <SituationChallenge exercise={exercise} onResult={onResult} />;
  }
}
