import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { dialogueService } from "@/services";
import { useSpeech } from "@/hooks/useSpeech";
import { dialogueItems } from "@/data/dialogues";
import {
  FEATURE_LABEL,
  sampleSession,
  scoreSession,
  spokenText,
  weakestFeature,
} from "./dialogues";
import type { TalkAnswer, TalkResult } from "./types";
import styles from "./dialogues.module.css";

/**
 * "Real Talk" (spec §30). Follow the meaning through messy, realistic speech —
 * self-corrections, cut-ins, hesitations, false starts. Read the exchange (or
 * hear it), answer what the speaker actually meant, then see the discourse
 * signal to notice. A per-type diagnostic shows which kind of mess loses you.
 */
export function DialogueRunner() {
  const speech = useSpeech();
  const queue = useMemo(() => sampleSession(dialogueItems), []);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [answers, setAnswers] = useState<TalkAnswer[]>([]);
  const [result, setResult] = useState<TalkResult | null>(null);

  const item = queue[index];
  const isLast = index >= queue.length - 1;
  const bestId = item?.options.find((o) => o.best)?.id;

  function pick(id: string) {
    if (chosen) return;
    setChosen(id);
    setAnswers((prev) => [...prev, { feature: item.feature, correct: id === bestId }]);
  }

  function next() {
    if (!chosen) return;
    if (isLast) {
      const res = scoreSession(answers);
      dialogueService.recordSession(res.score);
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
    const weak = weakestFeature(result);
    return (
      <div className={styles.wrap}>
        <Card title="Did you follow the thread?">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{result.score}</span>
              <span className="muted">
                {result.correct}/{result.total} followed
              </span>
            </div>
            <div>
              {result.byFeature.map((f) => (
                <div key={f.feature} className={styles.diagRow}>
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
                ? `“${weak}” tripped you up most — that's the messy bit of real conversation. Listen for the signal word and trust what comes after it.`
                : "Great — you followed the meaning through all the mess. That's real-conversation listening."}
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={restart}>
                Go again
              </Button>
              <Link to="/listening" style={{ marginLeft: "auto" }}>
                Train your ear on speed →
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
        <Badge tone="primary">{FEATURE_LABEL[item.feature]}</Badge>
      </div>

      <Card>
        <div className={styles.wrap}>
          {item.emoji && <span className={styles.featureBadge}>{item.emoji} {FEATURE_LABEL[item.feature]}</span>}

          <div className={styles.dialogue}>
            {item.lines.map((l, i) => (
              <div key={i} className={`${styles.line} ${i % 2 === 1 ? styles.lineAlt : ""}`}>
                <div className={styles.lineSpeaker}>{l.speaker}</div>
                <p className={styles.lineText}>{l.text}</p>
              </div>
            ))}
          </div>

          {speech.canSpeak && (
            <div className={styles.playRow}>
              <Button size="sm" variant="ghost" onClick={() => speech.speak(spokenText(item))}>
                <Icon name="repeat" size={15} /> Hear it
              </Button>
              <span className="subtle">real speech is messy — follow the meaning, not every word</span>
            </div>
          )}

          <p className={styles.question}>{item.question}</p>

          <div className={styles.options} role="radiogroup" aria-label="Choose what they meant">
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
                {item.options
                  .filter((o) => o.feedback)
                  .map((o) => (
                    <div key={o.id} className={`${styles.reason} ${o.best ? styles.reasonBest : ""}`}>
                      <span className={`${styles.reasonMark} ${o.best ? styles.markNat : ""}`}>
                        {o.best ? <Icon name="check" size={15} /> : "·"}
                      </span>
                      <span>{o.feedback}</span>
                    </div>
                  ))}
              </div>

              {item.focus && (
                <div className={styles.focus}>
                  <span className={styles.focusMarker}>“{item.focus.marker}”</span>
                  <span className="muted">= {item.focus.meaning}</span>
                </div>
              )}

              <div className={styles.principle}>
                <span className={styles.principleLabel}>How to follow it</span>
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
