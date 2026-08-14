import { useEffect, useState } from "react";
import type { ProduceStage, SelfRating } from "./types";
import { Badge, Button, Icon } from "@/components/ui";
import { evaluationService } from "@/services";
import type { EvaluationResult } from "@/services/evaluation/EvaluationService";
import { useSpeech } from "@/hooks/useSpeech";
import styles from "./missions.module.css";

export interface ProduceResult {
  stageId: string;
  input: string;
  evaluation: EvaluationResult;
  selfRating: SelfRating;
  targetSkills: string[];
}

/**
 * Open production (spec §9–12, §20–21). The learner writes or speaks, gets
 * heuristic SIGNALS (not a grade), compares against a natural model, then
 * self-assesses. Communication over correctness.
 */
export function ProduceStageView({
  stage,
  onAdvance,
}: {
  stage: ProduceStage;
  onAdvance: (result: ProduceResult) => void;
}) {
  const [input, setInput] = useState("");
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const { canSpeak, canListen, speak, listening, transcript, startListening, stopListening } =
    useSpeech();

  // Stream live speech into the textarea while recording.
  useEffect(() => {
    if (listening && transcript) setInput(transcript);
  }, [transcript, listening]);

  function check() {
    setEvaluation(evaluationService.evaluate(input, stage));
  }

  return (
    <div className={styles.brief}>
      <p className={styles.prompt}>{stage.prompt}</p>
      {stage.italianContext && <span className={styles.hint}>🇮🇹 {stage.italianContext}</span>}

      <div className={styles.chips}>
        {stage.targetSkills.map((s) => (
          <span key={s} className={styles.chip}>
            {s}
          </span>
        ))}
      </div>

      {stage.suggestedChunks && stage.suggestedChunks.length > 0 && (
        <div className={styles.chips}>
          <span className="subtle">Try using:</span>
          {stage.suggestedChunks.map((c) => (
            <span
              key={c}
              className={`${styles.chip} ${
                evaluation?.chunksUsed.includes(c) ? styles.chipUsed : ""
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      )}

      <textarea
        className={styles.textarea}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your response in English…"
        disabled={evaluation !== null}
        aria-label="Your response"
      />

      {evaluation === null && (
        <div className={styles.toolRow}>
          {stage.allowSpeech && canListen && (
            <Button
              size="sm"
              variant={listening ? "danger" : "ghost"}
              onClick={listening ? stopListening : startListening}
            >
              <Icon name="target" size={16} /> {listening ? "Stop" : "Speak"}
            </Button>
          )}
          {listening && (
            <span className={styles.listening}>
              <span className={styles.pulse} /> Listening…
            </span>
          )}
          <Button variant="primary" disabled={!input.trim()} onClick={check}>
            Check my answer
          </Button>
        </div>
      )}

      {evaluation && (
        <Feedback stage={stage} evaluation={evaluation} onAdvance={onAdvance} input={input} canSpeak={canSpeak} speak={speak} />
      )}
    </div>
  );
}

function Feedback({
  stage,
  evaluation,
  input,
  onAdvance,
  canSpeak,
  speak,
}: {
  stage: ProduceStage;
  evaluation: EvaluationResult;
  input: string;
  onAdvance: (r: ProduceResult) => void;
  canSpeak: boolean;
  speak: (t: string) => void;
}) {
  const [revealed, setRevealed] = useState(false);
  const commTone = evaluation.communication >= 75 ? "success" : evaluation.communication >= 50 ? "primary" : "warning";

  return (
    <div className={styles.signals}>
      <div className={styles.signalRow}>
        <Badge tone={commTone}>Communication {evaluation.communication}%</Badge>
        <Badge>{evaluation.wordCount} words</Badge>
        {evaluation.connectorsUsed.length > 0 && (
          <Badge tone="primary">{evaluation.connectorsUsed.length} linker(s)</Badge>
        )}
      </div>

      {evaluation.keyElementsMissing.length > 0 && (
        <div className={styles.signalRow}>
          <span className="subtle">Consider mentioning:</span>
          {evaluation.keyElementsMissing.map((k) => (
            <Badge key={k}>{k}</Badge>
          ))}
        </div>
      )}

      {evaluation.flags.map((f, i) => (
        <div key={i} className={styles.flag}>
          <Icon name="alert" size={16} /> <span>{f.hint}</span>
        </div>
      ))}

      {!revealed ? (
        <div className={styles.toolRow}>
          <Button variant="ghost" onClick={() => setRevealed(true)}>
            Show a natural version
          </Button>
        </div>
      ) : (
        <>
          {stage.modelAnswer && (
            <div className={styles.model}>
              <span className={styles.modelLabel}>A natural version</span>
              <p style={{ margin: "0.25rem 0 0" }}>{stage.modelAnswer}</p>
              <div className={styles.toolRow} style={{ marginTop: "0.5rem" }}>
                {canSpeak && (
                  <Button size="sm" variant="ghost" onClick={() => speak(stage.modelAnswer!)}>
                    <Icon name="repeat" size={16} /> Listen
                  </Button>
                )}
              </div>
            </div>
          )}
          {stage.naturalnessNotes?.map((n, i) => (
            <p key={i} className="subtle" style={{ margin: 0 }}>
              💡 {n}
            </p>
          ))}

          <div className={styles.brief}>
            <span className="subtle">How did that feel?</span>
            <div className={styles.selfRate}>
              {(
                [
                  ["struggled", "I struggled", "danger"],
                  ["ok", "OK-ish", "default"],
                  ["confident", "Felt natural", "primary"],
                ] as const
              ).map(([rating, label, variant]) => (
                <Button
                  key={rating}
                  variant={variant}
                  onClick={() =>
                    onAdvance({
                      stageId: stage.id,
                      input,
                      evaluation,
                      selfRating: rating,
                      targetSkills: stage.targetSkills,
                    })
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
