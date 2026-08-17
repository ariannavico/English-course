import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { argumentationService } from "@/services";
import { useSpeech } from "@/hooks/useSpeech";
import { sample } from "@/utils/shuffle";
import { argumentPrompts } from "@/data/argumentation";
import { MOVE_META, MOVE_ORDER } from "./moves";
import { evaluateMove, summariseArgument, type MoveSignals } from "./evaluate";
import type { ArgumentPrompt, MoveAttempt, MoveKind } from "./types";
import styles from "./argumentation.module.css";

function emptyInputs(): Record<MoveKind, string> {
  return { claim: "", reason: "", evidence: "", counter: "", rebuttal: "" };
}

/**
 * "Build Your Case" (B2 evolution, slice 9). One motion, five moves. The learner
 * writes each move in turn — claim, reason, evidence, counter, rebuttal — gets an
 * offline heuristic read on whether they reached for the right discourse marker,
 * then sees the five stitched into a single argument. Discourse over grammar.
 */
export function ArgumentationRunner() {
  const [prompt, setPrompt] = useState<ArgumentPrompt>(() => sample(argumentPrompts, 1)[0]);
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState<Record<MoveKind, string>>(emptyInputs);
  const [signals, setSignals] = useState<MoveSignals | null>(null);
  const [attempts, setAttempts] = useState<MoveAttempt[]>([]);
  const [done, setDone] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const speech = useSpeech();
  const kind = MOVE_ORDER[step];
  const meta = MOVE_META[kind];
  const value = inputs[kind];

  // Feed dictation into the current move's textarea.
  useEffect(() => {
    if (speech.listening && speech.transcript) {
      setInputs((prev) => ({ ...prev, [kind]: speech.transcript }));
    }
  }, [speech.listening, speech.transcript, kind]);

  function setValue(v: string) {
    setInputs((prev) => ({ ...prev, [kind]: v }));
  }

  function addStarter(starter: string) {
    // Drop the trailing ellipsis and hand the learner a running start.
    const seed = starter.replace(/…$/, " ").replace(/\s+$/, " ");
    setValue(value ? value : seed);
    taRef.current?.focus();
  }

  function check() {
    if (!value.trim()) return;
    setSignals(evaluateMove(value, kind, prompt));
  }

  function next() {
    if (!signals) return;
    const attempt: MoveAttempt = {
      kind,
      markerUsed: signals.markerUsed,
      score: signals.score,
      wordCount: signals.wordCount,
    };
    const nextAttempts = [...attempts, attempt];
    setAttempts(nextAttempts);
    setSignals(null);
    if (speech.listening) speech.stopListening();

    if (step >= MOVE_ORDER.length - 1) {
      const summary = summariseArgument(
        nextAttempts.map((a) => a.score),
        nextAttempts.filter((a) => a.markerUsed).length,
      );
      argumentationService.recordSession(summary.score, summary.movesWithMarker);
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  }

  function restart(newMotion: boolean) {
    setPrompt((prev) => (newMotion ? sample(argumentPrompts, 1)[0] : prev));
    setStep(0);
    setInputs(emptyInputs());
    setSignals(null);
    setAttempts([]);
    setDone(false);
  }

  if (done) {
    const summary = summariseArgument(
      attempts.map((a) => a.score),
      attempts.filter((a) => a.markerUsed).length,
    );
    return (
      <div className={styles.wrap}>
        <Card title="Your case">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{summary.score}</span>
              <span className="muted">argument score</span>
            </div>
            <div className={styles.metrics}>
              <Metric value={`${summary.movesWithMarker}/5`} label="moves signalled clearly" />
              <Metric
                value={`${attempts.reduce((a, m) => a + m.wordCount, 0)}`}
                label="words argued"
              />
            </div>

            <div className={styles.essay}>
              {MOVE_ORDER.map((k) => (
                <p key={k} className={styles.essayLine}>
                  <span className={styles.essayKind}>{MOVE_META[k].label}</span>
                  {inputs[k].trim() || <em className="muted">(skipped)</em>}
                </p>
              ))}
            </div>

            <p className="muted" style={{ margin: 0 }}>
              That's the B2 move: not just an opinion, but a claim you back up, a fair
              nod to the other side, and a reason it still holds. Same five steps, any topic.
            </p>

            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={() => restart(true)}>
                New motion
              </Button>
              <Button variant="ghost" onClick={() => restart(false)}>
                Redo this one
              </Button>
              <Link to="/fluency" style={{ marginLeft: "auto" }}>
                Say it out loud in Fluency →
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
        <div className={styles.motion}>
          <div className={styles.motionEmoji}>{prompt.emoji}</div>
          <div className={styles.motionText}>“{prompt.motion}”</div>
          <span className={styles.motionStance}>{prompt.stance}</span>
        </div>
      </Card>

      <div className={styles.rail}>
        {MOVE_ORDER.map((k, i) => (
          <span
            key={k}
            className={`${styles.railStep} ${
              i === step ? styles.railActive : i < step ? styles.railDone : ""
            }`}
          >
            {i < step && <Icon name="check" size={13} />}
            {MOVE_META[k].label}
          </span>
        ))}
      </div>

      <Card>
        <div className={styles.wrap}>
          <div>
            <div className={styles.moveHead}>
              <span className={styles.moveLabel}>
                {step + 1}. {meta.label}
              </span>
              <Badge tone="primary">{prompt.level}</Badge>
            </div>
            <p className={styles.moveAsk}>{meta.ask}</p>
          </div>

          <div className={styles.starters}>
            <span className="subtle">Try:</span>
            {meta.starters.map((s) => (
              <button
                key={s}
                type="button"
                className={styles.starter}
                onClick={() => addStarter(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <textarea
            ref={taRef}
            className={styles.textarea}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={meta.starters[0]}
            disabled={signals !== null}
            aria-label={`Your ${meta.label.toLowerCase()}`}
          />

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
              <Button
                variant="primary"
                style={{ marginLeft: "auto" }}
                disabled={!value.trim()}
                onClick={check}
              >
                Check
              </Button>
            </div>
          )}

          {signals && (
            <div className="stack">
              <div className={styles.signalRow}>
                <Badge tone={signals.markerUsed ? "success" : "primary"}>
                  {signals.markerUsed ? "Clearly signalled" : "Fair try"} · {signals.score}%
                </Badge>
                <Badge>{signals.wordCount} words</Badge>
                {signals.markerUsed && <Badge tone="success">used a marker</Badge>}
              </div>

              {!signals.markerUsed && (
                <div className={styles.nudge}>
                  <Icon name="alert" size={18} />
                  <span>
                    Signal the move — open with something like{" "}
                    <b>{meta.starters[0]}</b> so your reader hears where you're going.
                  </span>
                </div>
              )}

              {(prompt.moves[kind].cues?.length ?? 0) > 0 && (
                <div className={styles.signalRow}>
                  <span className="subtle">Ideas:</span>
                  {prompt.moves[kind].cues!.map((c) => (
                    <span
                      key={c}
                      className={`${styles.cue} ${
                        signals.cuesHit.includes(c) ? styles.cueHit : ""
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}

              <div className={styles.model}>
                <span className={styles.modelLabel}>A natural {meta.label.toLowerCase()}</span>
                <p style={{ margin: "0.25rem 0 0" }}>{prompt.moves[kind].model}</p>
                {speech.canSpeak && (
                  <div className={styles.toolRow} style={{ marginTop: "0.5rem" }}>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => speech.speak(prompt.moves[kind].model)}
                    >
                      <Icon name="repeat" size={16} /> Listen
                    </Button>
                  </div>
                )}
              </div>

              <div className="row">
                <Button variant="ghost" size="sm" onClick={() => setSignals(null)}>
                  Edit
                </Button>
                <Button variant="primary" style={{ marginLeft: "auto" }} onClick={next}>
                  {step >= MOVE_ORDER.length - 1 ? "See your argument" : "Next move →"}
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
