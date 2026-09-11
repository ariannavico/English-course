import { useState } from "react";
import { Badge, Button, Icon } from "@/components/ui";
import { reviewService, unitService } from "@/services";
import { unitsByCategory } from "@/data/catalog";
import { getGrammarLesson } from "@/data/grammarLessons";
import type { Unit, UnitStatus } from "@/types";
import type { GrammarLesson, MiniTestQuestion } from "./types";
import styles from "./grammarLessons.module.css";

const STATUS_LABEL: Record<UnitStatus, string> = {
  not_started: "Da iniziare",
  in_progress: "In corso",
  completed: "Completato",
};

/**
 * Grammar section: chapters by level, each with explanation → rules → examples →
 * common mistakes → mini-test. In `readOnly` mode (Explore/consult) it shows the
 * lesson content only, without status tracking, mini-test or review.
 */
export function GrammarRunner({ readOnly = false }: { readOnly?: boolean }) {
  const groups = unitsByCategory("grammar");
  const [, setV] = useState(0);
  const refresh = () => setV((v) => v + 1);

  return (
    <div className={styles.wrap}>
      {groups.map(({ category, units }) => (
        <section key={category} className={styles.group}>
          <h2 className={styles.groupTitle}>{category}</h2>
          <div className={styles.cards}>
            {units.map((u) => (
              <ChapterCard key={u.id} unit={u} onChange={refresh} readOnly={readOnly} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ChapterCard({ unit, onChange, readOnly }: { unit: Unit; onChange: () => void; readOnly: boolean }) {
  const [open, setOpen] = useState(false);
  const lesson = getGrammarLesson(unit.id);
  const progress = unitService.get(unit.id);
  const status: UnitStatus = progress?.status ?? "not_started";
  const tone = status === "completed" ? "success" : status === "in_progress" ? "primary" : "neutral";

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next && !readOnly && status === "not_started") {
      unitService.start(unit);
      onChange();
    }
  }
  function complete() {
    unitService.complete(unit, "study");
    reviewService.ensure(unit.id, "grammar", "grammar");
    onChange();
  }
  function reopen() {
    unitService.reopen(unit.id);
    onChange();
  }

  return (
    <div className={styles.card}>
      <button className={styles.head} aria-expanded={open} onClick={toggle}>
        <span className={styles.title}>{unit.title}</span>
        <Badge tone="neutral">{unit.level}</Badge>
        {!readOnly && (
          <Badge tone={tone}>
            {STATUS_LABEL[status]}
            {status === "completed" && progress?.completedBy === "assessment" ? " · assessment" : ""}
          </Badge>
        )}
        <Icon name="chevron" size={18} className={`${styles.chev} ${open ? styles.chevOpen : ""}`} />
      </button>

      {open &&
        (lesson ? (
          <Lesson
            lesson={lesson}
            status={status}
            onComplete={complete}
            onReopen={reopen}
            readOnly={readOnly}
          />
        ) : (
          <div className={styles.body}>
            <p className={styles.pending}>
              <Icon name="book" size={15} /> Lezione in arrivo.
            </p>
          </div>
        ))}
    </div>
  );
}

function Lesson({
  lesson,
  status,
  onComplete,
  onReopen,
  readOnly,
}: {
  lesson: GrammarLesson;
  status: UnitStatus;
  onComplete: () => void;
  onReopen: () => void;
  readOnly: boolean;
}) {
  return (
    <div className={styles.body}>
      <p className={styles.explanation}>{lesson.explanation}</p>

      <h3 className={styles.h3}>Regole</h3>
      <ul className={styles.rules}>
        {lesson.rules.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <h3 className={styles.h3}>Esempi</h3>
      <div className={styles.examples}>
        {lesson.examples.map((e, i) => (
          <div key={i} className={styles.example}>
            <span className={styles.en}>{e.en}</span>
            {e.it && <span className={styles.it}>{e.it}</span>}
          </div>
        ))}
      </div>

      <h3 className={styles.h3}>Errori comuni</h3>
      <div className={styles.mistakes}>
        {lesson.mistakes.map((m, i) => (
          <div key={i} className={styles.mistake}>
            <span className={styles.wrong}>✗ {m.wrong}</span>
            <span className={styles.right}>✓ {m.right}</span>
            <span className={styles.why}>{m.why}</span>
          </div>
        ))}
      </div>

      {!readOnly && (
        <>
          <h3 className={styles.h3}>Mini-test</h3>
          <MiniTest
            questions={lesson.miniTest}
            status={status}
            onComplete={onComplete}
            onReopen={onReopen}
          />
        </>
      )}
    </div>
  );
}

function MiniTest({
  questions,
  status,
  onComplete,
  onReopen,
}: {
  questions: MiniTestQuestion[];
  status: UnitStatus;
  onComplete: () => void;
  onReopen: () => void;
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [checked, setChecked] = useState(false);

  const score = answers.filter((a, i) => a === questions[i].answer).length;
  const allAnswered = answers.every((a) => a !== null);

  return (
    <div className={styles.test}>
      {questions.map((q, qi) => (
        <div key={qi} className={styles.q}>
          <div className={styles.qPrompt}>{q.prompt}</div>
          <div className={styles.opts}>
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              const isAnswer = q.answer === oi;
              let cls = styles.opt;
              if (checked) {
                if (isAnswer) cls = `${styles.opt} ${styles.optRight}`;
                else if (selected) cls = `${styles.opt} ${styles.optWrong}`;
              } else if (selected) {
                cls = `${styles.opt} ${styles.optSel}`;
              }
              return (
                <button
                  key={oi}
                  className={cls}
                  disabled={checked}
                  onClick={() => setAnswers((a) => a.map((v, i) => (i === qi ? oi : v)))}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className={styles.actions}>
        {!checked ? (
          <Button size="sm" variant="primary" onClick={() => setChecked(true)} disabled={!allAnswered}>
            Verifica
          </Button>
        ) : (
          <>
            <Badge tone={score === questions.length ? "success" : "primary"}>
              {score}/{questions.length} corrette
            </Badge>
            {status === "completed" ? (
              <Button size="sm" variant="ghost" onClick={onReopen} style={{ marginLeft: "auto" }}>
                Ripassa di nuovo
              </Button>
            ) : (
              <Button size="sm" variant="primary" onClick={onComplete} style={{ marginLeft: "auto" }}>
                <Icon name="check" size={16} /> Completa il capitolo
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
