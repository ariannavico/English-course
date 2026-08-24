import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { listeningService } from "@/services";
import { useSpeech } from "@/hooks/useSpeech";
import { listeningItems } from "@/data/listening";
import {
  LEVEL_META,
  SLOW_RATE,
  sampleSession,
  scoreSession,
  weakestLevel,
} from "./listening";
import type { ListeningAnswer, ListeningResult } from "./types";
import styles from "./listening.module.css";

/**
 * "Train Your Ear" (spec §29). A listening ramp: Clear → Natural → Fast &
 * reduced. Each line is spoken by the Web Speech voice at a level-appropriate
 * rate (with a "slower" replay), the learner answers a comprehension question,
 * then sees the transcript and the reduced form to notice. When TTS isn't
 * available the transcript is shown so it degrades to reading comprehension.
 */
export function ListeningRunner() {
  const speech = useSpeech();
  const queue = useMemo(() => sampleSession(listeningItems), []);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [answers, setAnswers] = useState<ListeningAnswer[]>([]);
  const [result, setResult] = useState<ListeningResult | null>(null);

  const item = queue[index];
  const isLast = index >= queue.length - 1;
  const bestId = item?.options.find((o) => o.best)?.id;
  const meta = item ? LEVEL_META[item.level] : null;

  // Auto-play the line when a new item appears (if audio is available).
  useEffect(() => {
    if (item && speech.canSpeak) speech.speak(item.line, meta?.rate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.id]);

  function pick(id: string) {
    if (chosen) return;
    setChosen(id);
    setAnswers((prev) => [...prev, { level: item.level, correct: id === bestId }]);
  }

  function next() {
    if (!chosen) return;
    if (isLast) {
      const res = scoreSession(answers);
      listeningService.recordSession(res.score);
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
    const weak = weakestLevel(result);
    return (
      <div className={styles.wrap}>
        <Card title="How well did you hear?">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{result.score}</span>
              <span className="muted">
                {result.correct}/{result.total} caught
              </span>
            </div>
            <div>
              {result.byLevel.map((l) => (
                <div key={l.level} className={styles.diagRow}>
                  <span className={styles.diagLabel}>{l.label}</span>
                  <div className={styles.diagBar}>
                    <i style={{ width: `${Math.round(l.accuracy * 100)}%` }} />
                  </div>
                  <span className={styles.diagVal}>
                    {l.correct}/{l.total}
                  </span>
                </div>
              ))}
            </div>
            <p className="muted" style={{ margin: 0 }}>
              {weak
                ? `“${weak}” speech tripped you up most — that's where reduced forms hide. Replaying slowly then at speed trains the ear.`
                : "Great ear — you followed even the fast, reduced speech. That's real-world listening."}
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={restart}>
                Go again
              </Button>
              <Link to="/social" style={{ marginLeft: "auto" }}>
                Use it in conversation →
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
        <Badge tone="primary">Level {item.level} · {meta?.label}</Badge>
      </div>

      <Card>
        <div className={styles.player}>
          {item.emoji && <div className={styles.playerEmoji}>{item.emoji}</div>}
          {item.speaker && <div className={styles.speaker}>{item.speaker}</div>}

          {speech.canSpeak ? (
            <>
              <div className={styles.playRow}>
                <Button variant="primary" onClick={() => speech.speak(item.line, meta?.rate)}>
                  <Icon name="repeat" size={16} /> Play
                </Button>
                <Button variant="ghost" onClick={() => speech.speak(item.line, SLOW_RATE)}>
                  Slower
                </Button>
              </div>
              <p className={styles.levelHint}>{meta?.hint}</p>
            </>
          ) : (
            <p className={styles.noAudio}>
              Audio isn't available in this browser — read the line instead:
              <br />
              <b>“{item.line}”</b>
            </p>
          )}
        </div>
      </Card>

      <Card>
        <div className={styles.wrap}>
          <span className={styles.levelBadge}>Listen, then answer</span>
          <p className={styles.question}>{item.question}</p>

          <div className={styles.options} role="radiogroup" aria-label="Choose what you heard">
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
              <div className={styles.transcript}>
                <span className={styles.transcriptLabel}>What they said</span>
                <p className={styles.transcriptText}>“{item.line}”</p>
                {item.focus && (
                  <div className={styles.focus}>
                    <span className={styles.focusForm}>{item.focus.form}</span>
                    <span className="muted">= {item.focus.meaning}</span>
                  </div>
                )}
              </div>

              <div className={styles.principle}>
                <span className={styles.principleLabel}>Listen for</span>
                <p style={{ margin: "0.2rem 0 0" }}>{item.principle}</p>
              </div>

              <div className={styles.toolRow}>
                {speech.canSpeak && (
                  <Button variant="ghost" size="sm" onClick={() => speech.speak(item.line, SLOW_RATE)}>
                    <Icon name="repeat" size={15} /> Hear it slowly
                  </Button>
                )}
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
