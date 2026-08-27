import { useMemo, useState } from "react";
import { Badge, Button } from "@/components/ui";
import { buildQuestion, checkParticle, shuffle, type PhrasalQuestion } from "./exercises";
import type { PhrasalEntry } from "./types";
import styles from "./phrasalComplete.module.css";

export interface PracticeItem {
  base: string;
  entry: PhrasalEntry;
  italian?: string;
}

const ROUND = 10;

/** A short particle-fill quiz over a set of phrasal verbs. */
export function PhrasalPractice({
  items,
  title,
  onExit,
}: {
  items: PracticeItem[];
  title: string;
  onExit: () => void;
}) {
  const questions = useMemo<PhrasalQuestion[]>(
    () => shuffle(items).slice(0, ROUND).map((it) => buildQuestion(it.base, it.entry, it.italian)),
    [items],
  );

  const [i, setI] = useState(0);
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[i];

  function submit() {
    if (revealed || !input.trim()) return;
    if (checkParticle(input, q.answer)) setCorrect((c) => c + 1);
    setRevealed(true);
  }

  function next() {
    if (i >= questions.length - 1) {
      setDone(true);
      return;
    }
    setI(i + 1);
    setInput("");
    setRevealed(false);
  }

  if (questions.length === 0) {
    return (
      <div className={styles.practice}>
        <p className={styles.count}>Nothing to practise here.</p>
        <Button variant="ghost" onClick={onExit}>Back to the list</Button>
      </div>
    );
  }

  if (done) {
    const score = Math.round((correct / questions.length) * 100);
    return (
      <div className={styles.practice}>
        <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
          <span className={styles.bigScore}>{score}%</span>
          <span className="muted">{correct} / {questions.length} correct</span>
        </div>
        <p className="muted" style={{ margin: 0 }}>
          The particle is the hard part of a phrasal verb — the more you drill it, the more it sticks.
        </p>
        <div className="row" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
          <Button variant="primary" onClick={() => { setI(0); setInput(""); setRevealed(false); setCorrect(0); setDone(false); }}>
            Practise again
          </Button>
          <Button variant="ghost" onClick={onExit}>Back to the list</Button>
        </div>
      </div>
    );
  }

  const isRight = revealed && checkParticle(input, q.answer);

  return (
    <div className={styles.practice}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <span className="subtle">{title} · {i + 1} of {questions.length}</span>
        <Button size="sm" variant="ghost" onClick={onExit}>Exit</Button>
      </div>

      <div className={styles.qClue}>
        <Badge tone="primary">{q.clue}</Badge>
      </div>
      <p className={styles.qCloze}>{q.cloze}</p>
      <p className={styles.qHint}>
        Complete the phrasal verb: <strong>{q.base}</strong> + ?
      </p>

      <div className={styles.qRow}>
        <input
          className={styles.qInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") (revealed ? next() : submit()); }}
          placeholder="the particle, e.g. off"
          aria-label="Your answer"
          disabled={revealed}
          autoFocus
        />
        {!revealed ? (
          <Button variant="primary" onClick={submit} disabled={!input.trim()}>Check</Button>
        ) : (
          <Button variant="primary" onClick={next}>
            {i >= questions.length - 1 ? "Finish" : "Next →"}
          </Button>
        )}
      </div>

      {revealed && (
        <div className={`${styles.feedback} ${isRight ? styles.fbRight : styles.fbWrong}`}>
          {isRight ? "Correct — " : "Answer: "}
          <strong>{q.base} {q.answer}</strong>
        </div>
      )}
    </div>
  );
}
