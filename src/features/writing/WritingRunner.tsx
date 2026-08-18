import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { writingService } from "@/services";
import { sample } from "@/utils/shuffle";
import { writingTasks } from "@/data/writing";
import { REGISTER_LABEL } from "@/features/register/evaluate";
import { WRITING_TYPE_LABEL, type WritingRating } from "./types";
import { evaluateWriting, type WritingSignals } from "./evaluate";
import styles from "./writing.module.css";

/**
 * Writing Studio (spec §33). One structured task at a time: brief, a target
 * register, a length target and a checklist. The learner writes, gets offline
 * feedback on content + tone (reusing the content evaluator and the register
 * detector), compares against a model, and self-rates.
 */
export function WritingRunner() {
  const [task, setTask] = useState(() => sample(writingTasks, 1)[0]);
  const [input, setInput] = useState("");
  const [signals, setSignals] = useState<WritingSignals | null>(null);
  const [done, setDone] = useState(false);

  const wordCount = useMemo(() => (input.trim() ? input.trim().split(/\s+/).length : 0), [input]);

  function check() {
    if (!input.trim()) return;
    setSignals(evaluateWriting(input, task));
  }

  function finish(rating: WritingRating) {
    if (!signals) return;
    writingService.recordPiece(signals.score, signals.registerMatch);
    void rating;
    setDone(true);
  }

  function reset(newTask: boolean) {
    setTask((prev) => (newTask ? sample(writingTasks, 1)[0] : prev));
    setInput("");
    setSignals(null);
    setDone(false);
  }

  if (done && signals) {
    return (
      <div className={styles.wrap}>
        <Card title="Piece complete">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{signals.score}</span>
              <span className="muted">writing score</span>
            </div>
            <div className={styles.signalRow}>
              <Badge tone={signals.registerMatch ? "success" : "primary"}>
                {signals.registerMatch ? "Register on target" : `Register: ${signals.registerLabel}`}
              </Badge>
              <Badge tone={signals.lengthOk ? "success" : "primary"}>
                {signals.wordCount} words
              </Badge>
              <Badge>{signals.evaluation.connectorsUsed.length} linkers</Badge>
            </div>
            <p className="muted" style={{ margin: 0 }}>
              Writing is where accuracy, range and register all show at once — the more you
              draft, the more natural your instinct for tone becomes.
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={() => reset(true)}>
                Another task
              </Button>
              <Button variant="ghost" onClick={() => reset(false)}>
                Redo this one
              </Button>
              <Link to="/register" style={{ marginLeft: "auto" }}>
                Drill register →
              </Link>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <Card>
        <div className={styles.brief}>
          <div className={styles.briefHead}>
            <span className={styles.briefEmoji}>{task.emoji}</span>
            <span className={styles.briefTitle}>{task.title}</span>
          </div>
          <p className={styles.briefText}>{task.brief}</p>
          <div className={styles.meta}>
            <span className={styles.metaChip}>{WRITING_TYPE_LABEL[task.type]}</span>
            <span className={`${styles.metaChip} ${styles.register}`}>
              Tone: {REGISTER_LABEL[task.targetRegister]}
            </span>
            <span className={styles.metaChip}>{task.situation}</span>
            <span className={styles.metaChip}>≥ {task.minWords} words</span>
          </div>
        </div>
      </Card>

      {!signals && (
        <Card title="Before you write">
          <ul className={styles.checklist}>
            {task.checklist.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className={styles.phrases} style={{ marginTop: "0.7rem" }}>
            <span className="subtle">Useful:</span>
            {task.usefulPhrases.map((p) => (
              <span key={p} className={styles.phrase}>
                {p}
              </span>
            ))}
          </div>
        </Card>
      )}

      <Card>
        <div className="stack">
          <textarea
            className={styles.textarea}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your piece here…"
            disabled={signals !== null}
            aria-label="Your writing"
          />
          <div className={styles.toolRow}>
            <span className={`${styles.count} ${wordCount >= task.minWords ? styles.countOk : ""}`}>
              {wordCount} / {task.minWords} words
            </span>
            {!signals && (
              <Button variant="primary" style={{ marginLeft: "auto" }} disabled={!input.trim()} onClick={check}>
                Check my writing
              </Button>
            )}
          </div>

          {signals && (
            <div className="stack">
              <div className={styles.signalRow}>
                <Badge tone={signals.score >= 70 ? "success" : "primary"}>Score {signals.score}%</Badge>
                <Badge tone={signals.registerMatch ? "success" : "danger"}>
                  {signals.registerMatch ? "Tone on target" : `You wrote ${signals.registerLabel}, aim ${REGISTER_LABEL[task.targetRegister]}`}
                </Badge>
                <Badge tone={signals.lengthOk ? "success" : "primary"}>
                  {signals.wordCount}/{signals.minWords} words
                </Badge>
                <Badge>{signals.evaluation.connectorsUsed.length} linkers</Badge>
              </div>

              <div className={styles.signalRow}>
                <span className="subtle">Ideas covered:</span>
                {task.keyElements.map((el) => (
                  <span
                    key={el}
                    className={`${styles.chip} ${signals.evaluation.keyElementsFound.includes(el) ? styles.chipHit : ""}`}
                  >
                    {el}
                  </span>
                ))}
              </div>

              {signals.evaluation.flags.length > 0 && (
                <div className="stack" style={{ gap: "0.4rem" }}>
                  {signals.evaluation.flags.map((f) => (
                    <div key={f.pattern} className={styles.flag}>
                      <Icon name="alert" size={16} /> <span>{f.hint}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.model}>
                <span className={styles.modelLabel}>A natural model</span>
                <p className={styles.modelText}>{task.modelAnswer}</p>
              </div>

              {task.notes?.map((n) => (
                <p key={n} className="subtle" style={{ margin: 0 }}>
                  💡 {n}
                </p>
              ))}

              <span className="subtle">Compared with the model, how did yours do?</span>
              <div className={styles.rate}>
                <Button variant="danger" onClick={() => finish("struggled")}>
                  Needs work
                </Button>
                <Button onClick={() => finish("ok")}>OK</Button>
                <Button variant="primary" onClick={() => finish("confident")}>
                  Happy with it
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
