import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { naturalService } from "@/services";
import { naturalItems } from "@/data/natural";
import { PATTERN_LABEL, sampleSession, scoreSession, weakestPattern } from "./natural";
import type { NaturalAnswer, NaturalResult } from "./types";
import styles from "./natural.module.css";

/**
 * "Sound Natural" (spec §12, §35). A drill in the gap between correct and
 * natural: pick what a native would actually say, and see why the grammatical-
 * but-clunky versions aren't it. The end screen shows which trap type (literal
 * translation, too formal, redundancy, word choice) catches you most.
 */
export function NaturalRunner() {
  const queue = useMemo(() => sampleSession(naturalItems), []);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [answers, setAnswers] = useState<NaturalAnswer[]>([]);
  const [result, setResult] = useState<NaturalResult | null>(null);

  const item = queue[index];
  const isLast = index >= queue.length - 1;
  const bestId = item?.options.find((o) => o.best)?.id;

  function pick(id: string) {
    if (chosen) return;
    setChosen(id);
    setAnswers((prev) => [...prev, { pattern: item.pattern, correct: id === bestId }]);
  }

  function next() {
    if (!chosen) return;
    if (isLast) {
      const res = scoreSession(answers);
      naturalService.recordSession(res.score);
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
    const weak = weakestPattern(result);
    return (
      <div className={styles.wrap}>
        <Card title="How natural were you?">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{result.score}</span>
              <span className="muted">
                {result.correct}/{result.total} sounded native
              </span>
            </div>
            <div>
              {result.byPattern.map((p) => (
                <div key={p.pattern} className={styles.diagRow}>
                  <span className={styles.diagLabel}>{p.label}</span>
                  <div className={styles.diagBar}>
                    <i style={{ width: `${Math.round(p.accuracy * 100)}%` }} />
                  </div>
                  <span className={styles.diagVal}>
                    {p.correct}/{p.total}
                  </span>
                </div>
              ))}
            </div>
            <p className="muted" style={{ margin: 0 }}>
              {weak
                ? `The trap that caught you most was “${weak}”. Remember: being grammatical isn't the same as sounding natural.`
                : "Great ear — you're picking what natives actually say, not just what's technically correct."}
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={restart}>
                Go again
              </Button>
              <Link to="/register" style={{ marginLeft: "auto" }}>
                Fine-tune tone in Register Lab →
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
        <Badge tone="primary">{PATTERN_LABEL[item.pattern]}</Badge>
      </div>

      <Card>
        <div className={styles.wrap}>
          <span className={styles.patternBadge}>{PATTERN_LABEL[item.pattern]}</span>
          <p className={styles.context}>
            {item.emoji && <span style={{ marginRight: "0.4rem" }}>{item.emoji}</span>}
            {item.context}
          </p>
          <p className={styles.ask}>Which one would a native actually say?</p>

          <div className={styles.options} role="radiogroup" aria-label="Choose the natural version">
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
                    <span className={`${styles.reasonMark} ${o.best ? styles.markNat : ""}`}>
                      {o.best ? <Icon name="check" size={15} /> : "·"}
                    </span>
                    <span>{o.feedback}</span>
                  </div>
                ))}
              </div>

              <div className={styles.principle}>
                <span className={styles.principleLabel}>Possible vs natural</span>
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
