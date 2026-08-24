import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { wordFamilyService } from "@/services";
import { wordFamilyItems } from "@/data/wordFamilies";
import {
  firstLetterHint,
  gradeAnswer,
  POS_LABEL,
  sampleSession,
  scoreSession,
  weakestPOS,
} from "./wordFamilies";
import type { WordAnswer, WordFamilyResult } from "./types";
import styles from "./wordFamilies.module.css";

/**
 * "Build the Family" (spec §37–39). Turn a base word into the form the sentence
 * needs — a different part of speech — then see the whole family. The end screen
 * shows which form type (noun / verb / adjective / adverb) you produce least well.
 */
export function WordFamilyRunner() {
  const queue = useMemo(() => sampleSession(wordFamilyItems), []);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<WordAnswer[]>([]);
  const [result, setResult] = useState<WordFamilyResult | null>(null);

  const item = queue[index];
  const isLast = index >= queue.length - 1;
  const [before, after] = item ? item.prompt.split("___") : ["", ""];

  function check() {
    if (!input.trim() || checked !== null) return;
    const ok = gradeAnswer(input, item);
    setChecked(ok);
    setAnswers((prev) => [...prev, { targetPOS: item.targetPOS, correct: ok }]);
  }

  function next() {
    if (checked === null) return;
    if (isLast) {
      const res = scoreSession(answers);
      wordFamilyService.recordSession(res.score);
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
    const weak = weakestPOS(result);
    return (
      <div className={styles.wrap}>
        <Card title="How's your word range?">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{result.score}</span>
              <span className="muted">
                {result.correct}/{result.total} forms produced
              </span>
            </div>
            <div>
              {result.byPOS.map((p) => (
                <div key={p.pos} className={styles.diagRow}>
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
                ? `Producing the ${weak.toLowerCase()} form was hardest — knowing a word's whole family is what widens your range.`
                : "Great range — you flexed each word into every form. That's B2 vocabulary depth."}
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={restart}>
                Go again
              </Button>
              <Link to="/writing" style={{ marginLeft: "auto" }}>
                Put them to work in Writing →
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
        <Badge tone="primary">Make the {POS_LABEL[item.targetPOS].toLowerCase()}</Badge>
      </div>

      <Card>
        <div className={styles.wrap}>
          <div className={styles.cue}>
            {item.emoji && <div className={styles.cueEmoji}>{item.emoji}</div>}
            <div className={styles.cueBase}>{item.base}</div>
            <p className={styles.cueInstruction}>
              Turn it into the <b>{POS_LABEL[item.targetPOS].toLowerCase()}</b> that fits.
            </p>
          </div>

          <p className={styles.prompt}>
            {before}
            <span className={styles.gap}>{checked !== null ? item.answer : "?"}</span>
            {after}
          </p>

          {checked === null && (
            <p className={styles.hint}>starts with “{firstLetterHint(item)}”</p>
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
                placeholder={`the ${POS_LABEL[item.targetPOS].toLowerCase()} form…`}
                aria-label="The word form"
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
                {checked ? "That's the right form!" : `Not quite — you wrote “${input.trim()}”.`}
              </div>

              <div className={styles.familyCard}>
                <span className={styles.familyLabel}>The whole family</span>
                <div className={styles.familyRow}>
                  {item.family.map((f) => {
                    const isAnswer = f.toLowerCase().startsWith(item.answer.toLowerCase());
                    return (
                      <span key={f} className={`${styles.chip} ${isAnswer ? styles.chipAnswer : ""}`}>
                        {f}
                      </span>
                    );
                  })}
                </div>
                {item.gloss && <p className={styles.gloss}>🇮🇹 {item.gloss}</p>}
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
