import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { collocationService } from "@/services";
import { collocationItems } from "@/data/collocations";
import {
  firstLetterHint,
  gradeAnswer,
  sampleSession,
  scoreSession,
  TYPE_LABEL,
  weakestType,
} from "./collocations";
import type { CollocationAnswer, CollocationResult } from "./types";
import styles from "./collocations.module.css";

/**
 * "Speak in Chunks" (spec §17–18). Recall the natural collocate that fills the
 * gap — heavy traffic, make a decision, good at — then see the whole chunk
 * family. The end screen shows which chunk type needs the most work.
 */
export function CollocationRunner() {
  const queue = useMemo(() => sampleSession(collocationItems), []);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<CollocationAnswer[]>([]);
  const [result, setResult] = useState<CollocationResult | null>(null);

  const item = queue[index];
  const isLast = index >= queue.length - 1;
  const [before, after] = item ? item.prompt.split("___") : ["", ""];

  function check() {
    if (!input.trim() || checked !== null) return;
    const ok = gradeAnswer(input, item);
    setChecked(ok);
    setAnswers((prev) => [...prev, { type: item.type, correct: ok }]);
  }

  function next() {
    if (checked === null) return;
    if (isLast) {
      const res = scoreSession(answers);
      collocationService.recordSession(res.score);
      setResult(res);
    } else {
      setIndex((i) => i + 1);
      setInput("");
      setChecked(null);
    }
  }

  function restart() {
    setIndex(0);
    setInput("");
    setChecked(null);
    setAnswers([]);
    setResult(null);
  }

  if (result) {
    const weak = weakestType(result);
    return (
      <div className={styles.wrap}>
        <Card title="How you did">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{result.score}</span>
              <span className="muted">
                {result.correct}/{result.total} chunks recalled
              </span>
            </div>
            <div>
              {result.byType.map((t) => (
                <div key={t.type} className={styles.diagRow}>
                  <span className={styles.diagLabel}>{t.label}</span>
                  <div className={styles.diagBar}>
                    <i style={{ width: `${Math.round(t.accuracy * 100)}%` }} />
                  </div>
                  <span className={styles.diagVal}>
                    {t.correct}/{t.total}
                  </span>
                </div>
              ))}
            </div>
            <p className="muted" style={{ margin: 0 }}>
              {weak
                ? `Your weakest pattern this round was “${weak}”. Learn these as whole chunks, not single words — that's what makes you sound natural.`
                : "Great recall — storing language in chunks like this is exactly what builds fluency."}
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={restart}>
                Go again
              </Button>
              <Link to="/writing" style={{ marginLeft: "auto" }}>
                Use them in Writing →
              </Link>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="subtle">
          {index + 1} of {queue.length}
        </span>
        <Badge tone="primary">{TYPE_LABEL[item.type]}</Badge>
      </div>

      <Card>
        <div className={styles.wrap}>
          <span className={styles.typeBadge}>{TYPE_LABEL[item.type]}</span>

          <p className={styles.prompt}>
            {item.emoji && <span style={{ marginRight: "0.4rem" }}>{item.emoji}</span>}
            {before}
            <span className={styles.gap}>{checked !== null ? item.answer : "?"}</span>
            {after}
          </p>

          {checked === null && (
            <p className={styles.hint}>
              Starts with “{firstLetterHint(item)}” · {TYPE_LABEL[item.type].toLowerCase()}
            </p>
          )}

          {checked === null ? (
            <form
              className={styles.inputRow}
              onSubmit={(e) => {
                e.preventDefault();
                check();
              }}
            >
              <input
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="the missing word…"
                aria-label="The missing collocate"
                autoFocus
              />
              <Button type="submit" variant="primary" disabled={!input.trim()}>
                Check
              </Button>
            </form>
          ) : (
            <div className="stack">
              <div className={`${styles.verdict} ${checked ? styles.verdictOk : styles.verdictNo}`}>
                <Icon name={checked ? "check" : "close"} size={18} />
                {checked ? "That's the natural chunk!" : `Not quite — you wrote “${input.trim()}”.`}
              </div>

              <div className={styles.chunkCard}>
                <div className={styles.chunkText}>{item.chunk}</div>
                {item.gloss && <div className={styles.chunkGloss}>🇮🇹 {item.gloss}</div>}
                <div className={styles.family}>
                  <span className={styles.familyLabel}>Same pattern</span>
                  {item.family.map((f) => (
                    <span key={f} className={styles.chip}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.toolRow}>
                <Button variant="primary" style={{ marginLeft: "auto" }} onClick={next}>
                  {isLast ? "See how you did" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
