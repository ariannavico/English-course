import { useState } from "react";
import type { ChoiceStage } from "./types";
import { Button } from "@/components/ui";
import styles from "./missions.module.css";

export interface ChoiceResult {
  optionId: string;
  why: string;
}

/**
 * A decision with no single right answer (spec §8). After choosing, the learner
 * sees tailored feedback and explains their reasoning — opinion + motivation.
 */
export function ChoiceStageView({
  stage,
  onAdvance,
}: {
  stage: ChoiceStage;
  onAdvance: (result: ChoiceResult) => void;
}) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [why, setWhy] = useState("");

  const option = stage.options.find((o) => o.id === chosen);

  return (
    <div className={styles.brief}>
      <p className={styles.prompt}>{stage.prompt}</p>

      <div className={styles.options}>
        {stage.options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`${styles.option} ${chosen === o.id ? styles.optionChosen : ""}`}
            onClick={() => setChosen(o.id)}
            disabled={chosen !== null}
          >
            {o.text}
          </button>
        ))}
      </div>

      {option && (
        <>
          <div className={styles.model}>
            <span className={styles.modelLabel}>Feedback</span>
            <p style={{ margin: "0.25rem 0 0" }}>{option.feedback}</p>
          </div>

          {stage.followUpWhy && (
            <div className={styles.brief}>
              <label className={styles.prompt} htmlFor={`why-${stage.id}`}>
                {stage.followUpWhy}
              </label>
              <textarea
                id={`why-${stage.id}`}
                className={styles.textarea}
                value={why}
                onChange={(e) => setWhy(e.target.value)}
                placeholder="Because…"
              />
            </div>
          )}

          <div className={styles.toolRow}>
            <Button variant="primary" onClick={() => onAdvance({ optionId: option.id, why })}>
              Continue
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
