import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { paraphraseService } from "@/services";
import { useSpeech } from "@/hooks/useSpeech";
import { useProgress } from "@/hooks/useProgress";
import { sample } from "@/utils/shuffle";
import { paraphraseItems } from "@/data/paraphrase";
import { evaluateParaphrase, type ParaphraseSignals } from "./evaluate";
import type { ParaphraseAttempt, ParaphraseRating } from "./types";
import styles from "./paraphrase.module.css";

const SESSION_SIZE = 6;

/**
 * "Get Around The Word" (spec §11). Explain a word without using it. The check
 * is offline: an exact forbidden-word test, plus heuristic signals on clues and
 * definition frames. Communication over vocabulary recall.
 */
export function ParaphraseRunner() {
  const { settings } = useProgress();
  const queue = useMemo(() => sample(paraphraseItems, SESSION_SIZE), []);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [signals, setSignals] = useState<ParaphraseSignals | null>(null);
  const [forceReveal, setForceReveal] = useState(false);
  const [results, setResults] = useState<ParaphraseAttempt[]>([]);
  const [done, setDone] = useState(false);
  const [hint, setHint] = useState(false);

  const speech = useSpeech();
  useEffect(() => {
    if (speech.listening && speech.transcript) setInput(speech.transcript);
  }, [speech.listening, speech.transcript]);

  const item = queue[index];
  const showFeedback = signals !== null && (!signals.usedWord || forceReveal);

  function check() {
    if (!input.trim()) return;
    setSignals(evaluateParaphrase(input, item));
  }

  function rate(rating: ParaphraseRating) {
    if (!signals) return;
    const attempt: ParaphraseAttempt = {
      itemId: item.id,
      usedWord: signals.usedWord,
      score: signals.score,
      selfRating: rating,
    };
    const next = [...results, attempt];
    setResults(next);
    if (index >= queue.length - 1) {
      const sessionScore = Math.round(next.reduce((a, r) => a + r.score, 0) / next.length);
      const clean = next.filter((r) => !r.usedWord).length;
      paraphraseService.recordSession(sessionScore, clean);
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setInput("");
      setSignals(null);
      setForceReveal(false);
      setHint(false);
    }
  }

  if (done) {
    const score = Math.round(results.reduce((a, r) => a + r.score, 0) / results.length);
    const clean = results.filter((r) => !r.usedWord).length;
    return (
      <Card title="Session complete">
        <div className="stack">
          <div className="row" style={{ gap: "0.6rem" }}>
            <span className={styles.bigScore}>{score}</span>
            <span className="muted">paraphrase score</span>
          </div>
          <div className={styles.metrics}>
            <Metric value={`${clean}/${results.length}`} label="got around cleanly" />
            <Metric value={`${results.filter((r) => r.selfRating === "nailed").length}`} label="felt easy" />
          </div>
          <p className="muted" style={{ margin: 0 }}>
            This is the skill that stops you freezing in a real conversation: when a
            word won't come, you talk around it and keep the message moving.
          </p>
          <div className="row" style={{ flexWrap: "wrap" }}>
            <Button
              variant="primary"
              onClick={() => {
                setResults([]);
                setIndex(0);
                setInput("");
                setSignals(null);
                setForceReveal(false);
                setDone(false);
              }}
            >
              New words
            </Button>
            <Link to="/fluency" style={{ marginLeft: "auto" }}>
              Try Fluency Mode →
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="subtle">
          Word {index + 1} of {queue.length}
        </span>
        <Badge tone="primary">{item.level}</Badge>
      </div>

      <Card>
        <div className={styles.wrap}>
          <div className={styles.word}>
            {item.emoji && <div className={styles.wordEmoji}>{item.emoji}</div>}
            <div className={styles.wordText}>{item.word}</div>
            <div className={styles.wordCat}>{item.category}</div>
          </div>

          <p className={styles.rule}>
            Explain it in English <b>without using the word</b> (or its forms). Talk around it.
          </p>

          {item.italian && (settings.showItalian || hint) ? (
            <p className="subtle" style={{ textAlign: "center", margin: 0 }}>
              🇮🇹 {item.italian}
            </p>
          ) : item.italian ? (
            <div className="row" style={{ justifyContent: "center" }}>
              <Button size="sm" variant="ghost" onClick={() => setHint(true)}>
                What is it? (hint)
              </Button>
            </div>
          ) : null}

          <div className={styles.frames}>
            <span className="subtle">Frames:</span>
            {["It's a thing you use to…", "It's when…", "It's a person who…"].map((f) => (
              <span key={f} className={styles.frame}>
                {f}
              </span>
            ))}
          </div>

          <textarea
            className={styles.textarea}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="It's a…"
            disabled={showFeedback}
            aria-label="Your explanation"
          />

          {/* slip: used the word */}
          {signals?.usedWord && !forceReveal && (
            <>
              <div className={styles.slip}>
                <Icon name="alert" size={18} /> You used the word! The whole point is to avoid it — have another go.
              </div>
              <div className={styles.toolRow}>
                <Button variant="primary" onClick={() => setSignals(null)}>
                  Try again
                </Button>
                <Button variant="ghost" onClick={() => setForceReveal(true)}>
                  Show the answer
                </Button>
              </div>
            </>
          )}

          {/* before checking */}
          {signals === null && (
            <div className={styles.toolRow}>
              {speech.canListen && (
                <Button
                  size="sm"
                  variant={speech.listening ? "danger" : "ghost"}
                  onClick={speech.listening ? speech.stopListening : speech.startListening}
                >
                  <Icon name="target" size={16} /> {speech.listening ? "Stop" : "Speak"}
                </Button>
              )}
              {speech.listening && (
                <span className={styles.listening}>
                  <span className={styles.pulse} /> Listening…
                </span>
              )}
              <Button variant="primary" style={{ marginLeft: "auto" }} disabled={!input.trim()} onClick={check}>
                Check
              </Button>
            </div>
          )}

          {/* feedback + rate */}
          {showFeedback && signals && (
            <div className="stack">
              <div className={styles.signalRow}>
                {!signals.usedWord ? (
                  <Badge tone={signals.score >= 70 ? "success" : "primary"}>Got around it · {signals.score}%</Badge>
                ) : (
                  <Badge tone="danger">You used the word</Badge>
                )}
                <Badge>{signals.wordCount} words</Badge>
                {signals.framesUsed.length > 0 && <Badge tone="primary">used a frame</Badge>}
              </div>

              <div className={styles.signalRow}>
                <span className="subtle">Ideas:</span>
                {item.clues.map((c) => (
                  <span key={c} className={`${styles.clue} ${signals.cluesHit.includes(c) ? styles.clueHit : ""}`}>
                    {c}
                  </span>
                ))}
              </div>

              <div className={styles.model}>
                <span className={styles.modelLabel}>A natural version</span>
                <p style={{ margin: "0.25rem 0 0" }}>{item.model}</p>
                {speech.canSpeak && (
                  <div className={styles.toolRow} style={{ marginTop: "0.5rem" }}>
                    <Button size="sm" variant="ghost" onClick={() => speech.speak(item.model)}>
                      <Icon name="repeat" size={16} /> Listen
                    </Button>
                  </div>
                )}
              </div>

              <span className="subtle">How did that feel?</span>
              <div className={styles.rate}>
                <Button variant="danger" onClick={() => rate("struggled")}>
                  I struggled
                </Button>
                <Button onClick={() => rate("ok")}>OK</Button>
                <Button variant="primary" onClick={() => rate("nailed")}>
                  Nailed it
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.metric}>
      <div className={styles.metricVal}>{value}</div>
      <div className={styles.metricLabel}>{label}</div>
    </div>
  );
}
