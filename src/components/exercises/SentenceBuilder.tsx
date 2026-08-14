import { useMemo, useState } from "react";
import type { Exercise, ExerciseResult, SentenceBuilderData } from "@/types";
import { Button } from "@/components/ui";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { Explanation } from "@/components/feedback/Explanation";
import { shuffle } from "@/utils/shuffle";
import { useGradable } from "./useGradable";
import styles from "./exercises.module.css";

interface Tok {
  key: string;
  text: string;
}

/** Tap tokens to build a sentence; tap a placed token to send it back. */
export function SentenceBuilder({
  exercise,
  onResult,
}: {
  exercise: Exercise;
  onResult: (r: ExerciseResult) => void;
}) {
  const data = exercise.data as SentenceBuilderData;
  const initial = useMemo<Tok[]>(
    () => shuffle(data.tokens.map((text, i) => ({ key: `${i}-${text}`, text }))),
    [data.tokens],
  );
  const [pool, setPool] = useState<Tok[]>(initial);
  const [line, setLine] = useState<Tok[]>([]);
  const { result, submitted, submit } = useGradable(exercise, onResult);

  function place(tok: Tok) {
    if (submitted) return;
    setPool((p) => p.filter((t) => t.key !== tok.key));
    setLine((l) => [...l, tok]);
  }
  function unplace(tok: Tok) {
    if (submitted) return;
    setLine((l) => l.filter((t) => t.key !== tok.key));
    setPool((p) => [...p, tok]);
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.instructions}>{exercise.instructions}</p>

      <div className={styles.tokenLine} aria-label="Your sentence">
        {line.length === 0 && <span className="subtle">Tap words to add them here…</span>}
        {line.map((t) => (
          <button key={t.key} type="button" className={styles.token} onClick={() => unplace(t)}>
            {t.text}
          </button>
        ))}
      </div>

      <div className={styles.tokenPool} aria-label="Available words">
        {pool.map((t) => (
          <button key={t.key} type="button" className={styles.token} onClick={() => place(t)}>
            {t.text}
          </button>
        ))}
      </div>

      {!submitted ? (
        <div className={styles.actions}>
          <Button
            variant="primary"
            disabled={pool.length > 0}
            onClick={() => submit(line.map((t) => t.text))}
          >
            Check
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setPool(initial);
              setLine([]);
            }}
          >
            Reset
          </Button>
        </div>
      ) : (
        <>
          {result && <AnswerFeedback result={result} />}
          {result && !result.correct && (
            <p className="muted">
              Correct order: <strong>{data.solution.join(" ")}</strong>
            </p>
          )}
          <Explanation>{data.explanation}</Explanation>
        </>
      )}
    </div>
  );
}
