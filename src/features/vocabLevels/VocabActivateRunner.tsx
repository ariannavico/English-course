import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { vocabLevelsService } from "@/services";
import { useProgress } from "@/hooks/useProgress";
import { showItalianL1 } from "@/utils/prefs";
import { matchesAnswer } from "@/utils/normalization";
import { shuffle, sample } from "@/utils/shuffle";
import { activeVocabItems } from "@/data/activeVocab";
import {
  distribution,
  gapSentence,
  LEVEL_LABEL,
  pickSession,
  taskMode,
} from "./vocabLevels";
import type { VocabAttempt, VocabLevel } from "./types";
import styles from "./vocabLevels.module.css";

function LevelDots({ level }: { level: VocabLevel }) {
  return (
    <span className={styles.dots}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`${styles.dot} ${n <= level ? styles.dotOn : ""}`} />
      ))}
    </span>
  );
}

/**
 * "Activate Your Vocabulary" (spec §36). Each word is met at a task suited to its
 * level — recognise the meaning, produce it with a hint, or recall it cold — and
 * a right answer moves it up the 1→5 ladder from passive to active. The end
 * screen shows the whole deck's ladder and how many words you activated.
 */
export function VocabActivateRunner() {
  const { settings } = useProgress();
  const startLevels = useMemo(
    () => Object.fromEntries(activeVocabItems.map((i) => [i.id, vocabLevelsService.levelOf(i.id)])) as Record<string, VocabLevel>,
    [],
  );
  const queue = useMemo(() => pickSession(activeVocabItems, (id) => startLevels[id], 8), [startLevels]);

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [chosen, setChosen] = useState<string | null>(null);
  const [checked, setChecked] = useState<{ correct: boolean; after: VocabLevel } | null>(null);
  const [answers, setAnswers] = useState<VocabAttempt[]>([]);
  const [done, setDone] = useState(false);

  const item = queue[index];
  const isLast = index >= queue.length - 1;
  const level = item ? startLevels[item.id] : 1;
  const mode = item ? taskMode(level) : "recognise";

  // For recognise mode: 4 definitions (correct + 3 distractors), stable per item.
  const options = useMemo(() => {
    if (!item || mode !== "recognise") return [];
    const distractors = sample(
      activeVocabItems.filter((i) => i.id !== item.id),
      3,
    ).map((i) => ({ id: i.id, text: i.definition }));
    return shuffle([{ id: item.id, text: item.definition }, ...distractors]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.id]);

  function commit(correct: boolean) {
    if (checked) return;
    const after = vocabLevelsService.record(item.id, correct);
    setChecked({ correct, after });
    setAnswers((prev) => [...prev, { id: item.id, correct, before: level, after }]);
  }

  function pickOption(id: string) {
    if (checked) return;
    setChosen(id);
    commit(id === item.id);
  }

  function checkTyped() {
    if (!input.trim() || checked) return;
    commit(matchesAnswer(input, [item.word]));
  }

  function next() {
    if (!checked) return;
    if (isLast) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setInput("");
      setChosen(null);
      setChecked(null);
    }
  }

  function restart() {
    setIndex(0);
    setInput("");
    setChosen(null);
    setChecked(null);
    setAnswers([]);
    setDone(false);
  }

  if (done) {
    const correct = answers.filter((a) => a.correct).length;
    const activated = answers.filter((a) => a.after > a.before).length;
    const dist = distribution(activeVocabItems, (id) => vocabLevelsService.levelOf(id));
    const max = Math.max(1, ...dist.map((d) => d.count));
    return (
      <div className={styles.wrap}>
        <Card title="Your vocabulary ladder">
          <div className="stack">
            <div className="row" style={{ gap: "0.6rem", alignItems: "baseline" }}>
              <span className={styles.bigScore}>{activated}</span>
              <span className="muted">word{activated === 1 ? "" : "s"} moved up · {correct}/{answers.length} right</span>
            </div>
            <div className={styles.ladder}>
              {dist.map((d) => (
                <div key={d.level} className={styles.rung}>
                  <span className={styles.rungLabel}>
                    {d.level}. {d.label}
                  </span>
                  <div className={`${styles.rungBar} ${d.level === 5 ? styles.rungActive : ""}`}>
                    <i style={{ width: `${Math.round((d.count / max) * 100)}%` }} />
                  </div>
                  <span className={styles.rungVal}>{d.count}</span>
                </div>
              ))}
            </div>
            <p className="muted" style={{ margin: 0 }}>
              Words climb from “New” to “Active” as you recognise, then produce, then recall them —
              that's how passive vocabulary becomes language you actually use.
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="primary" onClick={restart}>
                Keep activating
              </Button>
              <Link to="/writing" style={{ marginLeft: "auto" }}>
                Use them in Writing →
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
        <span className={styles.levelPill}>
          Lvl {level} · {LEVEL_LABEL[level]} <LevelDots level={level} />
        </span>
      </div>

      <Card>
        <div className={styles.wrap}>
          {mode === "recognise" && (
            <>
              <div className={styles.taskHead}>
                <div className={styles.word}>{item.word}</div>
                <div className={styles.pos}>{item.pos}</div>
              </div>
              <p className={styles.hint}>What does it mean?</p>
              <div className={styles.options} role="radiogroup" aria-label="Choose the meaning">
                {options.map((o) => {
                  let cls = styles.option;
                  if (checked) {
                    if (o.id === item.id) cls += ` ${styles.optionBest}`;
                    else if (o.id === chosen) cls += ` ${styles.optionWrong}`;
                  }
                  return (
                    <button key={o.id} className={cls} disabled={checked !== null} onClick={() => pickOption(o.id)}>
                      {o.text}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {mode === "produce" && (
            <>
              <p className={styles.definition}>“{item.definition}”</p>
              <p className={styles.sentence}>
                {(() => {
                  const [b, a] = gapSentence(item).split("___");
                  return (
                    <>
                      {b}
                      <span className={styles.gap}>{checked ? item.word : "?"}</span>
                      {a}
                    </>
                  );
                })()}
              </p>
              {!checked && <p className={styles.hint}>starts with “{item.word[0].toLowerCase()}”</p>}
            </>
          )}

          {mode === "recall" && (
            <>
              <p className={styles.hint}>Recall the word (no hints — you know this one):</p>
              <p className={styles.definition}>“{item.definition}”</p>
              {showItalianL1(settings) && (
                <p className="subtle" style={{ textAlign: "center", margin: 0 }}>
                  🇮🇹 {item.italian}
                </p>
              )}
            </>
          )}

          {mode !== "recognise" && !checked && (
            <form
              className={styles.inputRow}
              onSubmit={(e) => {
                e.preventDefault();
                checkTyped();
              }}
            >
              <input
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="the word…"
                aria-label="The word"
                autoFocus
              />
              <Button type="submit" variant="primary" disabled={!input.trim()}>
                Check
              </Button>
            </form>
          )}

          {checked && (
            <div className="stack">
              <div className={`${styles.verdict} ${checked.correct ? styles.verdictOk : styles.verdictNo}`}>
                <Icon name={checked.correct ? "check" : "close"} size={18} />
                {checked.correct ? "Correct!" : mode === "recognise" ? "Not quite." : `Not quite — you wrote “${input.trim()}”.`}
                <span className={styles.promo} style={{ marginLeft: "auto", color: checked.after > level ? "var(--success)" : "var(--text-muted)" }}>
                  {checked.after > level ? `↑ Lvl ${checked.after}` : checked.after < level ? `↓ Lvl ${checked.after}` : `Lvl ${checked.after}`}
                </span>
              </div>

              <div className={styles.reveal}>
                <span className={styles.revealWord}>{item.word}</span>{" "}
                <Badge tone="primary">{item.pos}</Badge>
                <p className={styles.revealDef}>{item.definition}</p>
                <p className={styles.revealEx}>“{item.example}”</p>
                {showItalianL1(settings) && <p className={styles.gloss}>🇮🇹 {item.italian}</p>}
              </div>

              <div className={styles.toolRow}>
                <Button variant="primary" style={{ marginLeft: "auto" }} onClick={next}>
                  {isLast ? "See your ladder" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
