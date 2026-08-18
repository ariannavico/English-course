import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { socialService } from "@/services";
import { socialItems } from "@/data/social";
import { FUNCTION_LABEL, sampleSession, scoreSession, weakestFunction } from "./social";
import type { SocialAnswer, SocialSessionResult } from "./types";
import styles from "./social.module.css";

/**
 * "Keep It Going" (spec §27–28). A drill in the social moves that keep a real
 * conversation alive — reacting, small talk, taking turns, closing. Pick the
 * natural move, see why the others fall flat, and get a per-function read at the
 * end so you know which move type to work on.
 */
export function ConversationRunner() {
  const queue = useMemo(() => sampleSession(socialItems), []);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [answers, setAnswers] = useState<SocialAnswer[]>([]);
  const [result, setResult] = useState<SocialSessionResult | null>(null);

  const item = queue[index];
  const isLast = index >= queue.length - 1;
  const bestId = item?.options.find((o) => o.best)?.id;

  function pick(id: string) {
    if (chosen) return;
    setChosen(id);
    setAnswers((prev) => [...prev, { fn: item.fn, correct: id === bestId }]);
  }

  function next() {
    if (isLast) {
      const res = scoreSession(answers);
      socialService.recordSession(res.score);
      setResult(res);
    } else {
      setIndex((i) => i + 1);
      setChosen(null);
    }
  }

  function restart() {
    setIndex(0);
    setChosen(null);
    setAnswers([]);
    setResult(null);
  }

  if (result) {
    const weak = weakestFunction(result);
    return (
      <div className={styles.wrap}>
        <Card title="How you did">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{result.score}</span>
              <span className="muted">
                {result.correct}/{result.total} natural choices
              </span>
            </div>

            <div>
              {result.byFunction.map((f) => (
                <div key={f.fn} className={styles.diagRow}>
                  <span className={styles.diagLabel}>{f.label}</span>
                  <div className={styles.diagBar}>
                    <i style={{ width: `${Math.round(f.accuracy * 100)}%` }} />
                  </div>
                  <span className={styles.diagVal}>
                    {f.correct}/{f.total}
                  </span>
                </div>
              ))}
            </div>

            <p className="muted" style={{ margin: 0 }}>
              {weak
                ? `Your weakest move this round was “${weak}”. It's the hardest thing to fake — worth a few more rounds.`
                : "Great instincts across the board — this is exactly what keeps a real conversation flowing."}
            </p>

            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={restart}>
                Go again
              </Button>
              <Link to="/fluency" style={{ marginLeft: "auto" }}>
                Now say it out loud in Fluency →
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
        <Badge tone="primary">{FUNCTION_LABEL[item.fn]}</Badge>
      </div>

      <Card>
        <div className={styles.wrap}>
          <span className={styles.fnBadge}>{FUNCTION_LABEL[item.fn]}</span>
          <p className={styles.context}>
            {item.speaker && <span className={styles.speaker}>{item.speaker}</span>}
            {item.emoji && <span style={{ marginRight: "0.4rem" }}>{item.emoji}</span>}
            {item.context}
          </p>
          <p className={styles.prompt}>{item.prompt}</p>

          <div className={styles.options} role="radiogroup" aria-label="Choose a reply">
            {item.options.map((o) => {
              let cls = styles.option;
              if (chosen) {
                if (o.best) cls += ` ${styles.optionBest}`;
                else if (o.id === chosen) cls += ` ${styles.optionWrong}`;
              } else if (o.id === chosen) cls += ` ${styles.optionChosen}`;
              return (
                <button key={o.id} className={cls} disabled={chosen !== null} onClick={() => pick(o.id)}>
                  {o.text}
                </button>
              );
            })}
          </div>

          {chosen && (
            <>
              <div className={styles.reasonList}>
                {item.options.map((o) => (
                  <div key={o.id} className={`${styles.reason} ${o.best ? styles.reasonBest : ""}`}>
                    <span className={styles.reasonMark}>{o.best ? <Icon name="check" size={15} /> : "·"}</span>
                    <span>{o.feedback}</span>
                  </div>
                ))}
              </div>

              <div className={styles.principle}>
                <span className={styles.principleLabel}>The move</span>
                <p style={{ margin: "0.2rem 0 0" }}>{item.principle}</p>
              </div>

              <div className={styles.toolRow}>
                <Button variant="primary" style={{ marginLeft: "auto" }} onClick={next}>
                  {isLast ? "See how you did" : "Next"}
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
