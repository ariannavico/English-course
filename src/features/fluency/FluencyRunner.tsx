import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { evaluationService, fluencyService } from "@/services";
import { useCountdown } from "@/hooks/useCountdown";
import { useSpeech } from "@/hooks/useSpeech";
import { sample } from "@/utils/shuffle";
import { fluencyPrompts } from "@/data/fluency";
import {
  LADDER_SECONDS,
  LEVEL_SECONDS,
  type FluencyLevel,
  type FluencyPrompt,
  type FluencyRating,
  type FluencyResult,
} from "./types";
import { promptFluencyScore, sessionFluency, wordsPerMinute } from "./scoring";
import styles from "./fluency.module.css";

type Phase = "select" | "prompt" | "reflect" | "done";
const SESSION_SIZE = 5;

interface LastEval {
  words: number;
  chunks: number;
  connectors: number;
  seconds: number;
  wpm: number;
  chunksUsed: string[];
}

export function FluencyRunner() {
  const [phase, setPhase] = useState<Phase>("select");
  const [level, setLevel] = useState<FluencyLevel>("standard");
  const [queue, setQueue] = useState<FluencyPrompt[]>([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [allotted, setAllotted] = useState(0);
  const [results, setResults] = useState<FluencyResult[]>([]);
  const [lastEval, setLastEval] = useState<LastEval | null>(null);

  const { remaining, start, stop } = useCountdown(() => endPrompt(true));
  const speech = useSpeech();

  // Stream live speech into the answer while recording.
  useEffect(() => {
    if (speech.listening && speech.transcript) setInput(speech.transcript);
  }, [speech.listening, speech.transcript]);

  const current = queue[index];

  function secondsForIndex(i: number): number {
    if (level === "ladder") return LADDER_SECONDS[Math.min(i, LADDER_SECONDS.length - 1)];
    return LEVEL_SECONDS[level];
  }

  function goToPrompt(i: number) {
    const secs = secondsForIndex(i);
    setIndex(i);
    setInput("");
    setLastEval(null);
    setAllotted(secs);
    setPhase("prompt");
    start(secs);
  }

  function startSession(chosen: FluencyLevel) {
    setLevel(chosen);
    setQueue(sample(fluencyPrompts, SESSION_SIZE));
    setResults([]);
    // goToPrompt needs the fresh level; set state then start with computed secs.
    const secs = chosen === "ladder" ? LADDER_SECONDS[0] : LEVEL_SECONDS[chosen];
    setIndex(0);
    setInput("");
    setLastEval(null);
    setAllotted(secs);
    setPhase("prompt");
    start(secs);
  }

  function endPrompt(timedOut: boolean) {
    stop();
    speech.stopListening();
    const usedRemaining = timedOut ? 0 : remaining;
    const seconds = Math.max(1, allotted - usedRemaining);
    const evalRes = evaluationService.evaluate(input, {
      kind: "produce",
      id: "fluency",
      label: "",
      prompt: "",
      targetSkills: [],
      suggestedChunks: current?.suggestedChunks ?? [],
      keyElements: [],
    });
    setLastEval({
      words: evalRes.wordCount,
      chunks: evalRes.chunksUsed.length,
      connectors: evalRes.connectorsUsed.length,
      chunksUsed: evalRes.chunksUsed,
      seconds,
      wpm: wordsPerMinute(evalRes.wordCount, seconds),
    });
    setPhase("reflect");
  }

  function rate(rating: FluencyRating) {
    if (!lastEval || !current) return;
    const score = promptFluencyScore({
      words: lastEval.words,
      selfRating: rating,
      chunks: lastEval.chunks,
      connectors: lastEval.connectors,
    });
    const result: FluencyResult = {
      promptId: current.id,
      words: lastEval.words,
      seconds: lastEval.seconds,
      wpm: lastEval.wpm,
      selfRating: rating,
      chunks: lastEval.chunks,
      connectors: lastEval.connectors,
      score,
    };
    const next = [...results, result];
    setResults(next);
    if (index >= queue.length - 1) {
      const sessionScore = sessionFluency(next.map((r) => r.score));
      const avgWpm = Math.round(next.reduce((a, r) => a + r.wpm, 0) / next.length);
      fluencyService.recordSession(sessionScore, avgWpm);
      setPhase("done");
    } else {
      goToPrompt(index + 1);
    }
  }

  /* ------------------------------ render ------------------------------ */

  if (phase === "select") return <LevelSelect onStart={startSession} />;

  if (phase === "done") {
    const score = sessionFluency(results.map((r) => r.score));
    const avgWpm = Math.round(results.reduce((a, r) => a + r.wpm, 0) / results.length);
    const totalWords = results.reduce((a, r) => a + r.words, 0);
    const froze = results.filter((r) => r.selfRating === "froze").length;
    return (
      <Card title="Fluency session complete">
        <div className="stack">
          <div className="row" style={{ gap: "0.6rem" }}>
            <span className={styles.bigScore}>{score}</span>
            <span className="muted">fluency score</span>
          </div>
          <div className={styles.metrics}>
            <Metric value={`${avgWpm}`} label="avg words/min" />
            <Metric value={`${totalWords}`} label="words produced" />
            <Metric value={`${results.length - froze}/${results.length}`} label="kept flowing" />
          </div>
          <p className="muted" style={{ margin: 0 }}>
            Fluency isn't about being perfect — it's about not stopping. A few errors
            while you keep the ideas coming is exactly right for B2.
          </p>
          <div className="row" style={{ flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => setPhase("select")}>
              Another round
            </Button>
            <Link to="/weaknesses" style={{ marginLeft: "auto" }}>
              Fix a weakness →
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  const lowTime = phase === "prompt" && remaining <= 5;
  const words = input.trim() ? input.trim().split(/\s+/).length : 0;

  return (
    <div className={styles.wrap}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="subtle">
          Prompt {index + 1} of {queue.length}
        </span>
        <Badge tone="primary">{level === "ladder" ? "Ladder" : `${allotted}s`}</Badge>
      </div>

      <Card>
        {phase === "prompt" ? (
          <div className={styles.wrap}>
            <div className={styles.timerRow}>
              <span className={`${styles.timer} ${lowTime ? styles.timerLow : ""}`}>{remaining}</span>
              <div className={styles.timerBar}>
                <div
                  className={`${styles.timerFill} ${lowTime ? styles.timerFillLow : ""}`}
                  style={{ width: `${(remaining / allotted) * 100}%` }}
                />
              </div>
            </div>

            <p className={styles.prompt}>
              {current.emoji && <span style={{ marginRight: "0.4rem" }}>{current.emoji}</span>}
              {current.prompt}
            </p>

            {current.suggestedChunks && (
              <div className={styles.chips}>
                <span className="subtle">Reach for:</span>
                {current.suggestedChunks.map((c) => (
                  <span key={c} className={styles.chip}>
                    {c}
                  </span>
                ))}
              </div>
            )}

            <textarea
              className={styles.textarea}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Keep going — don't stop to find the perfect word…"
              aria-label="Your response"
            />

            <div className={styles.toolRow}>
              <span className={styles.count}>{words} words</span>
              {speech.canListen && (
                <Button
                  size="sm"
                  variant={speech.listening ? "danger" : "ghost"}
                  onClick={speech.listening ? speech.stopListening : speech.startListening}
                >
                  <Icon name="target" size={16} /> {speech.listening ? "Stop mic" : "Speak"}
                </Button>
              )}
              {speech.listening && (
                <span className={styles.listening}>
                  <span className={styles.pulse} /> Listening…
                </span>
              )}
              <Button variant="primary" style={{ marginLeft: "auto" }} onClick={() => endPrompt(false)}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          lastEval &&
          current && (
            <div className={styles.wrap}>
              <p className="subtle" style={{ margin: 0 }}>
                You answered: “{current.prompt}”
              </p>
              <div className={styles.metrics}>
                <Metric value={`${lastEval.words}`} label="words" />
                <Metric value={`${lastEval.wpm}`} label="words/min" />
                <Metric value={`${lastEval.seconds}s`} label="time used" />
              </div>

              {current.suggestedChunks && (
                <div className={styles.chips}>
                  <span className="subtle">Chunks:</span>
                  {current.suggestedChunks.map((c) => (
                    <span
                      key={c}
                      className={`${styles.chip} ${lastEval.chunksUsed.includes(c) ? styles.chipUsed : ""}`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}

              <span className="subtle">How did that feel?</span>
              <div className={styles.rate}>
                <Button variant="danger" onClick={() => rate("froze")}>
                  I froze
                </Button>
                <Button onClick={() => rate("hesitated")}>Hesitated a lot</Button>
                <Button variant="primary" onClick={() => rate("flowed")}>
                  It flowed
                </Button>
              </div>
            </div>
          )
        )}
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

function LevelSelect({ onStart }: { onStart: (level: FluencyLevel) => void }) {
  const options: { level: FluencyLevel; time: string; name: string; desc: string }[] = [
    { level: "warmup", time: "30s", name: "Warm-up", desc: "Short bursts. Just start talking." },
    { level: "standard", time: "60s", name: "Standard", desc: "The B2 sweet spot — develop an idea." },
    { level: "deep", time: "90s", name: "Deep", desc: "Sustain it. Argue, compare, elaborate." },
    { level: "ladder", time: "30→90s", name: "Ladder", desc: "Escalating time across five prompts." },
  ];
  return (
    <div className={styles.wrap}>
      <p className="muted" style={{ margin: 0 }}>
        Five open prompts. When the timer starts, don't stop to look for the perfect
        word — keep the ideas coming. Speak aloud or type.
      </p>
      <div className={styles.levels}>
        {options.map((o) => (
          <button key={o.level} className={styles.level} onClick={() => onStart(o.level)}>
            <div className={styles.levelTime}>{o.time}</div>
            <div className={styles.levelName}>{o.name}</div>
            <div className={styles.levelDesc}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
