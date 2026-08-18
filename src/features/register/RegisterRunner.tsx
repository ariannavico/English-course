import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card } from "@/components/ui";
import { registerService } from "@/services";
import { useSpeech } from "@/hooks/useSpeech";
import { registerItems } from "@/data/register";
import {
  evaluateRegister,
  REGISTER_LABEL,
  REGISTER_ORDER,
  sampleSession,
  scoreSession,
  type RegisterSignals,
} from "./evaluate";
import type { RegisterAnswer, RegisterSessionResult } from "./types";
import styles from "./register.module.css";

/**
 * "Register Lab — Say it three ways" (spec §34). Write one intent at a target
 * register; an offline heuristic reads the tone you actually struck and shows
 * you the full ladder. The end screen reports whether you tend to over-formalise
 * or come across too casual.
 */
export function RegisterRunner() {
  const queue = useMemo(() => sampleSession(registerItems), []);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [signals, setSignals] = useState<RegisterSignals | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<RegisterAnswer[]>([]);
  const [result, setResult] = useState<RegisterSessionResult | null>(null);

  const speech = useSpeech();
  useEffect(() => {
    if (speech.listening && speech.transcript) setInput(speech.transcript);
  }, [speech.listening, speech.transcript]);

  const item = queue[index];
  const isLast = index >= queue.length - 1;
  const hit = signals?.level === item?.target;

  function check() {
    if (!input.trim()) return;
    const { signals: s, score: sc } = evaluateRegister(input, item);
    setSignals(s);
    setScore(sc);
  }

  function next() {
    if (!signals) return;
    const answer: RegisterAnswer = { target: item.target, detected: signals.level, score };
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    if (speech.listening) speech.stopListening();
    if (isLast) {
      const res = scoreSession(nextAnswers);
      registerService.recordSession(res.score);
      setResult(res);
    } else {
      setIndex((i) => i + 1);
      setInput("");
      setSignals(null);
      setScore(0);
    }
  }

  function restart() {
    setIndex(0);
    setInput("");
    setSignals(null);
    setScore(0);
    setAnswers([]);
    setResult(null);
  }

  if (result) {
    const leanNote =
      result.lean === "formal"
        ? "You lean a little formal — loosening up (contractions, a warmer opener) helps with friends and quick work chats."
        : result.lean === "casual"
          ? "You lean a little casual — for clients and people you don't know, dial up the formality (proper opener, no contractions)."
          : "Nicely balanced — you're adapting your tone to who you're writing to.";
    return (
      <div className={styles.wrap}>
        <Card title="How you did">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{result.score}</span>
              <span className="muted">register score</span>
            </div>
            <div className={styles.metrics}>
              <Metric value={`${result.hits}/${result.total}`} label="tone matched" />
              <Metric value={leanLabel(result.lean)} label="your tendency" />
            </div>
            <p className="muted" style={{ margin: 0 }}>
              {leanNote}
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={restart}>
                Go again
              </Button>
              <Link to="/social" style={{ marginLeft: "auto" }}>
                Try Keep It Going →
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
        <Badge tone="primary">{item.level}</Badge>
      </div>

      <Card>
        <div className={styles.wrap}>
          <div className={styles.intent}>
            <div className={styles.intentEmoji}>{item.emoji}</div>
            <div className={styles.intentText}>{item.intent}</div>
            <p className={styles.situation}>{item.situation}</p>
            <span className={styles.targetChip}>Write it: {REGISTER_LABEL[item.target]}</span>
          </div>

          <textarea
            className={styles.textarea}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your message…"
            disabled={signals !== null}
            aria-label="Your message"
          />

          {signals === null && (
            <div className={styles.toolRow}>
              {speech.canListen && (
                <Button
                  size="sm"
                  variant={speech.listening ? "danger" : "ghost"}
                  onClick={speech.listening ? speech.stopListening : speech.startListening}
                >
                  {speech.listening ? "Stop" : "Speak"}
                </Button>
              )}
              <Button variant="primary" style={{ marginLeft: "auto" }} disabled={!input.trim()} onClick={check}>
                Check the tone
              </Button>
            </div>
          )}

          {signals && (
            <div className="stack">
              <div className={styles.signalRow}>
                <Badge tone={hit ? "success" : "primary"}>
                  {hit ? "Tone matched" : `You wrote ${REGISTER_LABEL[signals.level]}`} · {score}%
                </Badge>
                {!hit && <Badge>target: {REGISTER_LABEL[item.target]}</Badge>}
              </div>

              {(signals.formalHits.length > 0 || signals.informalHits.length > 0 || signals.contractions > 0) && (
                <div className={styles.signalRow}>
                  <span className="subtle">Markers:</span>
                  {signals.formalHits.map((m) => (
                    <span key={`f-${m}`} className={`${styles.marker} ${styles.markerFormal}`}>{m}</span>
                  ))}
                  {signals.contractions > 0 && (
                    <span className={`${styles.marker} ${styles.markerInformal}`}>
                      {signals.contractions} contraction{signals.contractions === 1 ? "" : "s"}
                    </span>
                  )}
                  {signals.informalHits.map((m) => (
                    <span key={`i-${m}`} className={`${styles.marker} ${styles.markerInformal}`}>{m}</span>
                  ))}
                </div>
              )}

              <div>
                <span className={styles.rungLabel} style={{ display: "block", marginBottom: "0.35rem" }}>
                  The same message, three ways
                </span>
                <div className={styles.ladder}>
                  {REGISTER_ORDER.map((lvl) => (
                    <div key={lvl} className={`${styles.rung} ${lvl === item.target ? styles.rungTarget : ""}`}>
                      <span className={styles.rungLabel}>
                        {REGISTER_LABEL[lvl]}
                        {lvl === item.target ? " · target" : ""}
                      </span>
                      <p className={styles.rungText}>{item.ladder[lvl]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.principle}>
                <span className={styles.principleLabel}>The point</span>
                <p style={{ margin: "0.2rem 0 0" }}>{item.principle}</p>
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

function leanLabel(lean: RegisterSessionResult["lean"]): string {
  return lean === "formal" ? "Formal" : lean === "casual" ? "Casual" : "Balanced";
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.metric}>
      <div className={styles.metricVal}>{value}</div>
      <div className={styles.metricLabel}>{label}</div>
    </div>
  );
}
