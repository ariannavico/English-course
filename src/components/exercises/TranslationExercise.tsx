import { useState } from "react";
import type { Exercise, ExerciseResult, TranslationData } from "@/types";
import { Badge, Button } from "@/components/ui";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { Explanation } from "@/components/feedback/Explanation";
import { useGradable } from "./useGradable";
import styles from "./exercises.module.css";

/**
 * Italian → English translation. Multiple answers may be valid; on an
 * unrecognised answer we surface the model answer and the key elements so the
 * learner can self-verify (spec §19: don't require a single translation).
 */
export function TranslationExercise({
  exercise,
  onResult,
}: {
  exercise: Exercise;
  onResult: (r: ExerciseResult) => void;
}) {
  const data = exercise.data as TranslationData;
  const [value, setValue] = useState("");
  const { result, submitted, submit } = useGradable(exercise, onResult);

  return (
    <form
      className={styles.wrap}
      onSubmit={(e) => {
        e.preventDefault();
        if (!submitted && value.trim()) submit(value);
      }}
    >
      <p className={styles.instructions}>{exercise.instructions}</p>
      <p className={styles.prompt}>“{data.italianSentence}”</p>

      <textarea
        className={styles.textArea}
        value={value}
        placeholder="Write it in English…"
        disabled={submitted}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Your English translation"
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
            <div className="stack">
              <p className="muted">
                A natural version: <strong>{data.acceptedAnswers[0]}</strong>
              </p>
              <div className={styles.skills}>
                <span className="subtle">Should include:</span>
                {data.keyElements.map((k) => (
                  <Badge key={k}>{k}</Badge>
                ))}
              </div>
            </div>
          )}
          <Explanation>{data.explanation}</Explanation>
        </>
      )}
    </form>
  );
}
