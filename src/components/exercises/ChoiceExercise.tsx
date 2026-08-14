import { useState } from "react";
import type { ChoiceData, Exercise, ExerciseResult, MultipleChoiceData } from "@/types";
import { Button, Icon } from "@/components/ui";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { Explanation } from "@/components/feedback/Explanation";
import { useGradable } from "./useGradable";
import styles from "./exercises.module.css";

/**
 * Handles all option-based exercises: multiple-choice, verb-choice, tense-choice.
 * A `{{blank}}` marker in the question is rendered as a styled gap.
 */
export function ChoiceExercise({
  exercise,
  onResult,
}: {
  exercise: Exercise;
  onResult: (r: ExerciseResult) => void;
}) {
  const data = exercise.data as MultipleChoiceData | ChoiceData;
  const [selected, setSelected] = useState<string | null>(null);
  const { result, submitted, submit } = useGradable(exercise, onResult);

  const [before, after] = splitBlank(data.question);

  return (
    <div className={styles.wrap}>
      <p className={styles.instructions}>{exercise.instructions}</p>
      <p className={styles.prompt}>
        {before}
        {after !== null && <span className={styles.blank}>?</span>}
        {after}
      </p>

      <div className={styles.options} role="radiogroup" aria-label="Options">
        {data.options.map((opt) => {
          const isSelected = selected === opt.id;
          const isCorrect = opt.id === data.correctOptionId;
          let cls = styles.option;
          if (submitted && isCorrect) cls += ` ${styles.optionCorrect}`;
          else if (submitted && isSelected && !isCorrect) cls += ` ${styles.optionWrong}`;
          else if (isSelected) cls += ` ${styles.optionSelected}`;
          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={cls}
              disabled={submitted}
              onClick={() => setSelected(opt.id)}
            >
              <span>{opt.text}</span>
              {submitted && isCorrect && (
                <span className={styles.optionMark}>
                  <Icon name="check" size={18} />
                </span>
              )}
              {submitted && isSelected && !isCorrect && (
                <span className={styles.optionMark}>
                  <Icon name="close" size={18} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <div className={styles.actions}>
          <Button
            variant="primary"
            disabled={selected === null}
            onClick={() => selected && submit(selected)}
          >
            Check
          </Button>
        </div>
      ) : (
        <>
          {result && <AnswerFeedback result={result} />}
          <Explanation>{exercise.explanation}</Explanation>
        </>
      )}
    </div>
  );
}

/** Split a prompt on the {{blank}} marker. Returns [before, after|null]. */
function splitBlank(text: string): [string, string | null] {
  const idx = text.indexOf("{{blank}}");
  if (idx === -1) return [text, null];
  return [text.slice(0, idx), text.slice(idx + "{{blank}}".length)];
}
