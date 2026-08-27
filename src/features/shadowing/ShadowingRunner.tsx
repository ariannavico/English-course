import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { shadowingService } from "@/services";
import { useSpeech } from "@/hooks/useSpeech";
import { shadowingDialogues } from "@/data/shadowing";
import { echoSimilarity, summarise } from "./scoring";
import type { LineOutcome, ShadowDialogue, ShadowResult, ShadowTopic } from "./types";
import styles from "./shadowing.module.css";

type Phase = "select" | "run" | "done";

const TOPIC_LABEL: Record<ShadowTopic, string> = {
  everyday: "Everyday",
  opinion: "Opinion",
  abstract: "Abstract",
};

export function ShadowingRunner() {
  const [phase, setPhase] = useState<Phase>("select");
  const [dialogue, setDialogue] = useState<ShadowDialogue | null>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [outcomes, setOutcomes] = useState<LineOutcome[]>([]);
  const [showIt, setShowIt] = useState(false);
  const [said, setSaid] = useState("");
  const [similarity, setSimilarity] = useState<number | null>(null);
  const [result, setResult] = useState<ShadowResult | null>(null);

  const speech = useSpeech();
  const current = dialogue?.lines[lineIndex];

  // Speak each line as it appears, and reset the per-line state.
  useEffect(() => {
    if (phase !== "run" || !current) return;
    setShowIt(false);
    setSaid("");
    setSimilarity(null);
    speech.speak(current.text);
    // Intentionally only re-run when the line changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, lineIndex, dialogue]);

  // Mirror back what the mic heard and score the match.
  useEffect(() => {
    if (!speech.listening || !speech.transcript || !current) return;
    setSaid(speech.transcript);
    setSimilarity(echoSimilarity(speech.transcript, current.text));
  }, [speech.listening, speech.transcript, current]);

  function startDialogue(d: ShadowDialogue) {
    setDialogue(d);
    setLineIndex(0);
    setOutcomes([]);
    setResult(null);
    setPhase("run");
  }

  function advance(repeated: boolean) {
    if (!dialogue) return;
    speech.stopListening();
    const outcome: LineOutcome = { repeated, similarity };
    const next = [...outcomes, outcome];
    setOutcomes(next);
    if (lineIndex >= dialogue.lines.length - 1) {
      const summary = summarise(dialogue.id, next);
      shadowingService.recordSession(summary);
      setResult(summary);
      setPhase("done");
    } else {
      setLineIndex(lineIndex + 1);
    }
  }

  /* ------------------------------ select ------------------------------ */

  if (phase === "select") {
    return (
      <div className={styles.wrap}>
        <p className="muted" style={{ margin: 0 }}>
          Pick a conversation. You'll hear it one line at a time — say each line
          straight back out loud, copying the rhythm, before moving on. Don't
          translate in your head; just echo it. Climb from everyday chat to
          genuinely abstract talk.
        </p>
        <div className={styles.picker}>
          {shadowingDialogues.map((d) => (
            <button key={d.id} className={styles.pick} onClick={() => startDialogue(d)}>
              <div className={styles.pickTop}>
                <span className={styles.pickEmoji}>{d.emoji}</span>
                <Badge tone={d.topic === "abstract" ? "primary" : "neutral"}>
                  {TOPIC_LABEL[d.topic]}
                </Badge>
              </div>
              <div className={styles.pickTitle}>{d.title}</div>
              <div className={styles.pickMeta}>
                {d.speakers[0]} &amp; {d.speakers[1]} · {d.level} · {d.lines.length} lines · ~{d.minutes} min
              </div>
            </button>
          ))}
        </div>
        {!speech.canSpeak && (
          <p className={styles.note}>
            Your browser can't play audio for the lines, so you'll read each one
            instead — still say it out loud.
          </p>
        )}
      </div>
    );
  }

  /* ------------------------------- done ------------------------------- */

  if (phase === "done" && result && dialogue) {
    return (
      <Card title="Nicely done">
        <div className="stack">
          <div className={styles.metrics}>
            <Metric value={`${result.repeated}`} label="lines said back" />
            <Metric value={`${result.totalLines}`} label="lines total" />
            {result.avgSimilarity !== null && (
              <Metric value={`${result.avgSimilarity}%`} label="avg match" />
            )}
          </div>
          <p className="muted" style={{ margin: 0 }}>
            Shadowing works by repetition — the more you run this, the more the
            rhythm and the chunks become yours. Come back to the same dialogue a
            few times, then move up a topic.
          </p>
          <div className="row" style={{ flexWrap: "wrap", gap: "0.6rem" }}>
            <Button variant="primary" onClick={() => startDialogue(dialogue)}>
              Run it again
            </Button>
            <Button variant="ghost" onClick={() => setPhase("select")}>
              Pick another
            </Button>
            <Link to="/fluency" style={{ marginLeft: "auto" }}>
              Now speak freely →
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  /* -------------------------------- run ------------------------------- */

  if (!dialogue || !current) return null;
  const speakerName = dialogue.speakers[current.speaker];
  const progress = ((lineIndex + 1) / dialogue.lines.length) * 100;

  return (
    <div className={styles.wrap}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="subtle">
          {dialogue.title} · line {lineIndex + 1} of {dialogue.lines.length}
        </span>
        <Badge tone="neutral">{TOPIC_LABEL[dialogue.topic]}</Badge>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <Card>
        <div className={styles.line}>
          <span className={`${styles.speaker} ${current.speaker === 0 ? styles.spkA : styles.spkB}`}>
            {speakerName}
          </span>
          <p className={styles.text}>{current.text}</p>

          {current.chunk && (
            <div className={styles.chunk}>
              <span className="subtle">Notice:</span> <strong>{current.chunk}</strong>
            </div>
          )}

          {showIt && current.it && <p className={styles.gloss}>{current.it}</p>}

          {said && (
            <div className={styles.mirror}>
              <span className="subtle">You said:</span> “{said}”
              {similarity !== null && (
                <span
                  className={`${styles.match} ${
                    similarity >= 70 ? styles.matchHigh : similarity >= 40 ? styles.matchMid : styles.matchLow
                  }`}
                >
                  {similarity}% match
                </span>
              )}
            </div>
          )}
        </div>

        <div className={styles.tools}>
          {speech.canSpeak && (
            <Button size="sm" variant="ghost" onClick={() => speech.speak(current.text)}>
              <Icon name="repeat" size={16} /> Hear it again
            </Button>
          )}
          {speech.canListen && (
            <Button
              size="sm"
              variant={speech.listening ? "danger" : "ghost"}
              onClick={speech.listening ? speech.stopListening : speech.startListening}
            >
              <Icon name="target" size={16} /> {speech.listening ? "Stop" : "Repeat aloud"}
            </Button>
          )}
          {current.it && (
            <Button size="sm" variant="ghost" onClick={() => setShowIt((s) => !s)}>
              {showIt ? "Hide Italian" : "Show Italian"}
            </Button>
          )}
          {speech.listening && (
            <span className={styles.listening}>
              <span className={styles.pulse} /> Listening…
            </span>
          )}
        </div>

        <div className={styles.advance}>
          <Button variant="ghost" onClick={() => advance(false)}>
            Skip
          </Button>
          <Button variant="primary" style={{ marginLeft: "auto" }} onClick={() => advance(true)}>
            {lineIndex >= dialogue.lines.length - 1 ? "Finish" : "Got it — next →"}
          </Button>
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
