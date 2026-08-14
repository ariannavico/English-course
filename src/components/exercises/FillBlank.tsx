import { useState } from "react";
import type {
  ErrorCorrectionData,
  Exercise,
  ExerciseResult,
  FillBlankData,
} from "@/types";
import { Button } from "@/components/ui";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { Explanation } from "@/components/feedback/Explanation";
import { useGradable } from "./useGradable";
import styles from "./exercises.module.css";

/**
 * Text-answer exercises: fill-blank and error-correction. Both ask the learner
 * to type a string that is matched (normalised) against accepted answers.
 */
export function FillBlank({
  exercise,
  onResult,
}: {
  exercise: Exercise;
  onResult: (r: ExerciseResult) => void;
}) {
  const data = exercise.data as FillBlankData | ErrorCorrectionData;
  const [value, setValue] = useState("");
  const { result, submitted, submit } = useGradable(exercise, onResult);

  const prompt =
    data.kind === "fill-blank" ? data.sentence : data.incorrectSentence;
  const label =
    data.kind === "fill-blank" ? "Fill the gap" : "Rewrite it correctly";

  return (
    <form
      className={styles.wrap}
      onSubmit={(e) => {
        e.preventDefault();
        if (!submitted && value.trim()) submit(value);
      }}
    >
      <p className={styles.instructions}>{exercise.instructions}</p>
      <p className={styles.prompt}>{prompt}</p>

      <label className="visually-hidden" htmlFor={`fb-${exercise.id}`}>
        {label}
      </label>
      <input
        id={`fb-${exercise.id}`}
        className={styles.textInput}
        value={value}
        placeholder="Type your answer…"
        autoComplete="off"
        disabled={submitted}
        onChange={(e) => setValue(e.target.value)}
      />

      {!submitted ? (
        <div className={styles.actions}>
          <Button type="submit" variant="primary" disabled={!value.trim()}>
            Check
          </Button>
        </div>
      ) : (
        <>
          {result && <AnswerFeedback result={result} />}
          {result && !result.correct && (
            <p className="muted">
              Suggested: <strong>{data.acceptedAnswers[0]}</strong>
            </p>
          )}
          <Explanation>{data.explanation || exercise.explanation}</Explanation>
        </>
      )}
    </form>
  );
}
