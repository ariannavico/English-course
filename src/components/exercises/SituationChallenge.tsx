import { useState } from "react";
import type { Exercise, ExerciseResult, SituationData } from "@/types";
import { Badge, Button } from "@/components/ui";
import { Explanation } from "@/components/feedback/Explanation";
import { useGradable } from "./useGradable";
import styles from "./exercises.module.css";

/**
 * Open production task (spec §20). No auto-grading: the learner writes, reveals
 * the model answer + evaluation notes, then self-rates. The self-rating feeds
 * back into progress as a normal correct/incorrect result.
 */
export function SituationChallenge({
  exercise,
  onResult,
}: {
  exercise: Exercise;
  onResult: (r: ExerciseResult) => void;
}) {
  const data = exercise.data as SituationData;
  const [value, setValue] = useState("");
  const [revealed, setRevealed] = useState(false);
  const { submitted, submit } = useGradable(exercise, onResult);

  return (
    <div className={styles.wrap}>
      <p className={styles.instructions}>{exercise.instructions}</p>
      <div className={styles.situation}>
        <strong>Situation.</strong> {data.situation}
      </div>

      <div className={styles.skills}>
        <span className="subtle">Target skills:</span>
        {data.targetSkills.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>

      {data.suggestedElements && (
        <p className="subtle">Try to use: {data.suggestedElements.join(" · ")}</p>
      )}

      <textarea
        className={styles.textArea}
        value={value}
        placeholder="Write your answer…"
        disabled={submitted}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Your answer"
      />

      {!revealed ? (
        <div className={styles.actions}>
          <Button variant="primary" disabled={!value.trim()} onClick={() => setRevealed(true)}>
            Reveal model answer
          </Button>
        </div>
      ) : (
        <div className="stack">
          {data.modelAnswer && (
            <div className={styles.situation}>
              <strong>Model answer.</strong> {data.modelAnswer}
            </div>
          )}
          {data.evaluationNotes && (
            <ul>
              {data.evaluationNotes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          )}
          <Explanation>{exercise.explanation}</Explanation>

          {!submitted && (
            <div className={styles.actions}>
              <span className="subtle">How did you do?</span>
              <Button variant="danger" onClick={() => submit({ selfCorrect: false })}>
                Needs work
              </Button>
              <Button variant="primary" onClick={() => submit({ selfCorrect: true })}>
                Got it right
              </Button>
            </div>
          )}
          {submitted && <p className="muted">Self-assessment recorded.</p>}
        </div>
      )}
    </div>
  );
}
