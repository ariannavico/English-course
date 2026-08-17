import { useState } from "react";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { ExerciseRenderer } from "@/components/exercises/ExerciseRenderer";
import { ProduceStageView } from "@/features/missions/ProduceStageView";
import { evaluateParaphrase } from "@/features/paraphrase/evaluate";
import { assessmentService } from "@/services";
import { useSpeech } from "@/hooks/useSpeech";
import { buildReport, type ReadinessReport } from "./report";
import { AssessmentReport } from "./AssessmentReport";
import { COMPETENCE_LABEL, type Assessment, type ParaphraseTask, type TaskResult } from "./types";
import styles from "./assessment.module.css";

export function AssessmentRunner({ assessment }: { assessment: Assessment }) {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<TaskResult[]>([]);
  const [pending, setPending] = useState<TaskResult | null>(null);
  const [report, setReport] = useState<ReadinessReport | null>(null);
  const { canSpeak, speak } = useSpeech();

  const task = assessment.tasks[index];

  function advance(result: TaskResult) {
    const next = [...results, result];
    setResults(next);
    setPending(null);
    if (index >= assessment.tasks.length - 1) {
      const built = buildReport(next);
      assessmentService.save(built);
      setReport(built);
    } else {
      setIndex((i) => i + 1);
    }
  }

  function restart() {
    setIndex(0);
    setResults([]);
    setPending(null);
    setReport(null);
  }

  if (report) return <AssessmentReport report={report} onRetake={restart} />;

  const pct = Math.round((index / assessment.tasks.length) * 100);

  return (
    <div className={styles.wrap}>
      <div className={styles.progress}>
        <span className="subtle">
          Task {index + 1} of {assessment.tasks.length}
        </span>
        <div className={styles.bar}>
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>
        <Badge tone="primary">{COMPETENCE_LABEL[task.competence]}</Badge>
      </div>

      <Card>
        {task.kind === "objective" && (
          <div className="stack">
            {task.context && <p className={styles.passage}>{task.context}</p>}
            {task.audio && (
              <div className={styles.listen}>
                <span className="subtle">🎧 Listen, then answer. You can replay it.</span>
                {canSpeak ? (
                  <Button variant="ghost" onClick={() => speak(task.audio!)}>
                    <Icon name="repeat" size={16} /> Play audio
                  </Button>
                ) : (
                  <p className="muted" style={{ margin: 0 }}>
                    Audio isn't available in this browser — here's the transcript: “{task.audio}”
                  </p>
                )}
              </div>
            )}
            <ExerciseRenderer
              key={task.id}
              exercise={task.exercise}
              onResult={(r) =>
                setPending({
                  competence: task.competence,
                  score: Math.round(r.score * 100),
                  correct: r.correct === true,
                })
              }
            />
            {pending && (
              <div className={styles.actions}>
                <Button variant="primary" onClick={() => advance(pending)}>
                  {index >= assessment.tasks.length - 1 ? "See my report" : "Next"}
                </Button>
              </div>
            )}
          </div>
        )}

        {task.kind === "produce" && (
          <ProduceStageView
            key={task.id}
            stage={task.produce}
            onAdvance={(r) =>
              advance({
                competence: task.competence,
                score: r.evaluation.communication,
                flags: r.evaluation.flags.map((f) => f.hint),
                connectors: r.evaluation.connectorsUsed.length,
                chunks: r.evaluation.chunksUsed.length,
              })
            }
          />
        )}

        {task.kind === "paraphrase" && (
          <ParaphraseTaskView key={task.id} task={task} onDone={(score) => advance({ competence: task.competence, score })} />
        )}
      </Card>
    </div>
  );
}

/** Inline paraphrase task: explain the word without using it (spec §10–11). */
function ParaphraseTaskView({ task, onDone }: { task: ParaphraseTask; onDone: (score: number) => void }) {
  const [input, setInput] = useState("");
  const [signals, setSignals] = useState<ReturnType<typeof evaluateParaphrase> | null>(null);
  const [forceReveal, setForceReveal] = useState(false);
  const show = signals && (!signals.usedWord || forceReveal);

  return (
    <div className="stack">
      <p style={{ margin: 0 }}>{task.prompt}</p>
      <div className={styles.word}>
        {task.item.emoji && <span style={{ fontSize: "1.6rem" }}>{task.item.emoji} </span>}
        <span className={styles.wordText}>{task.item.word}</span>
      </div>

      <textarea
        className={styles.textarea}
        value={input}
        disabled={!!show}
        onChange={(e) => setInput(e.target.value)}
        placeholder="It's a…"
        aria-label="Your explanation"
      />

      {signals?.usedWord && !forceReveal && (
        <>
          <div className={styles.flag}>
            <Icon name="alert" size={16} /> You used the word — try to talk around it.
          </div>
          <div className={styles.actions}>
            <Button variant="primary" onClick={() => setSignals(null)}>
              Try again
            </Button>
            <Button variant="ghost" onClick={() => setForceReveal(true)}>
              Show the answer
            </Button>
          </div>
        </>
      )}

      {signals === null && (
        <div className={styles.actions}>
          <Button variant="primary" disabled={!input.trim()} onClick={() => setSignals(evaluateParaphrase(input, task.item))}>
            Check
          </Button>
        </div>
      )}

      {show && signals && (
        <div className="stack">
          <div className="row" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            {signals.usedWord ? (
              <Badge tone="danger">You used the word</Badge>
            ) : (
              <Badge tone={signals.score >= 70 ? "success" : "primary"}>Got around it · {signals.score}%</Badge>
            )}
          </div>
          <div className="model" style={{ background: "var(--surface-2)", borderRadius: "var(--r-md)", padding: "0.75rem 0.9rem" }}>
            <span className="subtle">A natural version</span>
            <p style={{ margin: "0.25rem 0 0" }}>{task.item.model}</p>
          </div>
          <div className={styles.actions}>
            <Button variant="primary" onClick={() => onDone(signals.score)}>
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
