import type { ExerciseResult } from "@/types";
import { Icon } from "@/components/ui";
import styles from "./feedback.module.css";

/**
 * Correct/incorrect banner. Never relies on colour alone (spec §50): it always
 * pairs an icon + text label with the colour.
 */
export function AnswerFeedback({ result }: { result: ExerciseResult }) {
  if (result.correct === null) {
    return (
      <div className={`${styles.banner} ${styles.neutral}`} role="status">
        <Icon name="check" size={18} />
        <span>Answer recorded — self-assess below.</span>
      </div>
    );
  }
  const ok = result.correct;
  return (
    <div
      className={`${styles.banner} ${ok ? styles.correct : styles.wrong}`}
      role="status"
    >
      <Icon name={ok ? "check" : "close"} size={18} />
      <span>
        {ok ? "Correct" : "Not quite"}
        {result.feedback ? ` — ${result.feedback}` : ""}
      </span>
    </div>
  );
}
