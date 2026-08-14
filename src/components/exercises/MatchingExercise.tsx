import { useMemo, useState } from "react";
import type { Exercise, ExerciseResult, MatchingData } from "@/types";
import { Button } from "@/components/ui";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { Explanation } from "@/components/feedback/Explanation";
import { shuffle } from "@/utils/shuffle";
import { useGradable } from "./useGradable";
import styles from "./exercises.module.css";

/** Match each left item to a right value via a dropdown. Partial credit. */
export function MatchingExercise({
  exercise,
  onResult,
}: {
  exercise: Exercise;
  onResult: (r: ExerciseResult) => void;
}) {
  const data = exercise.data as MatchingData;
  const rightOptions = useMemo(() => shuffle(data.pairs.map((p) => p.right)), [data.pairs]);
  const [choices, setChoices] = useState<Record<string, string>>({});
  const { result, submitted, submit } = useGradable(exercise, onResult);

  const allChosen = data.pairs.every((p) => choices[p.id]);

  return (
    <div className={styles.wrap}>
      <p className={styles.instructions}>{exercise.instructions}</p>

      <div className={styles.matchGrid}>
        {data.pairs.map((pair) => {
          const chosen = choices[pair.id] ?? "";
          const correct = submitted && chosen === pair.right;
          return (
            <div key={pair.id} className={styles.matchRow}>
              <div className={styles.matchLeft}>{pair.left}</div>
              <select
                className={styles.select}
                value={chosen}
                disabled={submitted}
                aria-label={`Match for ${pair.left}`}
                onChange={(e) =>
                  setChoices((c) => ({ ...c, [pair.id]: e.target.value }))
                }
                style={
                  submitted
                    ? {
                        borderColor: correct ? "var(--success)" : "var(--danger)",
                      }
                    : undefined
                }
              >
                <option value="">— choose —</option>
                {rightOptions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <div className={styles.actions}>
          <Button variant="primary" disabled={!allChosen} onClick={() => submit(choices)}>
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
