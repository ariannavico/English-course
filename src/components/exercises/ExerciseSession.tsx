import { useState } from "react";
import type { Exercise, ExerciseResult } from "@/types";
import { Button, Card, ProgressBar } from "@/components/ui";
import { ScoreDisplay } from "@/components/feedback/ScoreDisplay";
import { useProgress } from "@/hooks/useProgress";
import { ExerciseRenderer } from "./ExerciseRenderer";
import styles from "./exercises.module.css";

interface ExerciseSessionProps {
  exercises: Exercise[];
  title?: string;
  /** Called when the whole session finishes, with the final percentage. */
  onComplete?: (percent: number, earned: number, total: number) => void;
}

/**
 * Runs an ordered set of exercises: one at a time, records each result through
 * ProgressService, tracks the running score, and shows a summary at the end.
 * Shared by Chapter, Review and Daily Practice pages.
 */
export function ExerciseSession({ exercises, title, onComplete }: ExerciseSessionProps) {
  const { recordExerciseResult } = useProgress();
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [earned, setEarned] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = exercises.reduce((s, e) => s + e.points, 0);

  if (exercises.length === 0) {
    return (
      <Card>
        <p className="muted">No exercises here yet.</p>
      </Card>
    );
  }

  const current = exercises[index];
  const isLast = index === exercises.length - 1;

  function handleResult(result: ExerciseResult) {
    recordExerciseResult(current, result);
    setEarned((e) => e + result.earnedPoints);
    setAnswered(true);
  }

  function next() {
    if (isLast) {
      const pct = total > 0 ? Math.round((earned / total) * 100) : 0;
      setFinished(true);
      onComplete?.(pct, earned, total);
    } else {
      setIndex((i) => i + 1);
      setAnswered(false);
    }
  }

  if (finished) {
    const pct = total > 0 ? Math.round((earned / total) * 100) : 0;
    return (
      <Card title="Session complete">
        <div className="stack">
          <ScoreDisplay earned={earned} total={total} percent={pct} />
          <p className="muted">
            You answered {exercises.length} exercise
            {exercises.length === 1 ? "" : "s"}.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="stack">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="subtle">
          {title ? `${title} · ` : ""}Question {index + 1} of {exercises.length}
        </span>
        <span className="subtle">{earned} pts</span>
      </div>
      <ProgressBar value={((index + (answered ? 1 : 0)) / exercises.length) * 100} />

      <Card>
        <ExerciseRenderer key={current.id} exercise={current} onResult={handleResult} />
      </Card>

      {answered && (
        <div className={styles.actions}>
          <Button variant="primary" onClick={next}>
            {isLast ? "Finish" : "Next question"}
          </Button>
        </div>
      )}
    </div>
  );
}
