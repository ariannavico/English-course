import { useEffect, useMemo, useState } from "react";
import { Badge, Button, Icon } from "@/components/ui";
import { reviewService, unitService } from "@/services";
import { unitsByCategory } from "@/data/catalog";
import { lexItemsForUnit } from "@/data/lexis";
import type { ReviewKind, SectionKind, Unit, UnitStatus } from "@/types";
import { SECTION_REVIEW_KIND, type LexItem } from "./types";
import { buildLexTest, type LexQuestion } from "./miniTest";
import { SpeakButton } from "@/components/learning/SpeakButton";
import styles from "./lexis.module.css";

const STATUS_LABEL: Record<UnitStatus, string> = {
  not_started: "Da iniziare",
  in_progress: "In corso",
  completed: "Completato",
};

/**
 * Word-list section (Vocabulary / Adjectives / Adverbs / Verbs). One engine for
 * all. In `readOnly` mode (Explore/consult) it shows only the words, without
 * status tracking or review controls.
 */
export function LexRunner({ section, readOnly = false }: { section: SectionKind; readOnly?: boolean }) {
  const groups = unitsByCategory(section);
  const kind: ReviewKind = SECTION_REVIEW_KIND[section] ?? "word";
  const [, setV] = useState(0);
  const refresh = () => setV((v) => v + 1);

  // All the section's words, used as the distractor pool for mini-test options.
  const sectionPool = useMemo<LexItem[]>(
    () => unitsByCategory(section).flatMap((g) => g.units).flatMap((u) => lexItemsForUnit(u.id)),
    [section],
  );

  // Which unit's accordion is open (lifted so completing one can open the next).
  const orderedIds = useMemo(() => groups.flatMap((g) => g.units.map((u) => u.id)), [groups]);
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));
  const openNext = (id: string) => {
    const i = orderedIds.indexOf(id);
    setOpenId(orderedIds[i + 1] ?? null);
  };

  return (
    <div className={styles.wrap}>
      {groups.map(({ category, units }) => (
        <section key={category} className={styles.group}>
          {category !== "—" && <h2 className={styles.groupTitle}>{category}</h2>}
          <div className={styles.cards}>
            {units.map((u) => (
              <UnitCard
                key={u.id}
                unit={u}
                kind={kind}
                pool={sectionPool}
                open={openId === u.id}
                onToggle={() => toggle(u.id)}
                onCompleted={() => openNext(u.id)}
                onChange={refresh}
                readOnly={readOnly}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function UnitCard({
  unit,
  kind,
  pool,
  open,
  onToggle,
  onCompleted,
  onChange,
  readOnly,
}: {
  unit: Unit;
  kind: ReviewKind;
  pool: LexItem[];
  open: boolean;
  onToggle: () => void;
  onCompleted: () => void;
  onChange: () => void;
  readOnly: boolean;
}) {
  const items = lexItemsForUnit(unit.id);
  const progress = unitService.get(unit.id);
  const status: UnitStatus = progress?.status ?? "not_started";
  const tone = status === "completed" ? "success" : status === "in_progress" ? "primary" : "neutral";
  const inReview = items.length > 0 && items.every((i) => reviewService.get(i.id) != null);
  const hasTest = items.length >= 3; // need enough words for a meaningful quiz

  // Start the unit the first time it's opened.
  useEffect(() => {
    if (open && !readOnly && status === "not_started") {
      unitService.start(unit);
      onChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function complete(by: "study" | "assessment" = "study") {
    unitService.complete(unit, by);
    onChange();
    onCompleted(); // close this card and open the next
  }
  function reopen() {
    unitService.reopen(unit.id);
    onChange();
  }
  function addToReview() {
    for (const i of items) reviewService.ensure(i.id, kind, unit.section);
    onChange();
  }

  return (
    <div className={styles.card}>
      <button className={styles.head} aria-expanded={open} onClick={onToggle}>
        <span className={styles.title}>{unit.title}</span>
        {items.length > 0 && <span className={styles.count}>{items.length}</span>}
        <Badge tone="neutral">{unit.level}</Badge>
        {!readOnly && (
          <Badge tone={tone}>
            {STATUS_LABEL[status]}
            {status === "completed" && progress?.completedBy === "assessment" ? " · assessment" : ""}
          </Badge>
        )}
        <Icon name="chevron" size={18} className={`${styles.chev} ${open ? styles.chevOpen : ""}`} />
      </button>

      {open && (
        <div className={styles.body}>
          {items.length === 0 ? (
            <p className={styles.pending}>
              <Icon name="book" size={15} /> Parole in arrivo.
            </p>
          ) : (
            <div className={styles.list}>
              {items.map((i) => (
                <div key={i.id} className={styles.entry}>
                  <div className={styles.entryTop}>
                    <span className={styles.word}>{i.word}</span>
                    <SpeakButton text={i.word} />
                    {i.pos && <span className={styles.pos}>{i.pos}</span>}
                    <span className={styles.it}>{i.it}</span>
                  </div>
                  {i.example && <div className={styles.example}>{i.example}</div>}
                </div>
              ))}
            </div>
          )}

          {!readOnly && (
            <>
              {hasTest && (
                <LexMiniTest
                  items={items}
                  pool={pool}
                  status={status}
                  onComplete={() => complete("assessment")}
                  onReopen={reopen}
                />
              )}
              <div className={styles.actions}>
                {items.length > 0 && (
                  <Button
                    size="sm"
                    variant={inReview ? "ghost" : "primary"}
                    onClick={addToReview}
                    disabled={inReview}
                  >
                    <Icon name="repeat" size={16} />{" "}
                    {inReview ? "Nel ripasso ✓" : `Aggiungi al ripasso (${items.length})`}
                  </Button>
                )}
                {status === "completed" ? (
                  <Button size="sm" variant="ghost" onClick={reopen} style={{ marginLeft: "auto" }}>
                    Ripassa di nuovo
                  </Button>
                ) : (
                  !hasTest && (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => complete("study")}
                      style={{ marginLeft: "auto" }}
                    >
                      <Icon name="check" size={16} /> Segna come completato
                    </Button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Word-list mini-test: for each of up to five words, pick the right Italian
 * meaning. Completing it (any score) marks the unit as verified (assessment);
 * "Riprova" reshuffles a fresh set of words and options.
 */
function LexMiniTest({
  items,
  pool,
  status,
  onComplete,
  onReopen,
}: {
  items: LexItem[];
  pool: LexItem[];
  status: UnitStatus;
  onComplete: () => void;
  onReopen: () => void;
}) {
  const [nonce, setNonce] = useState(0);
  const questions: LexQuestion[] = useMemo(
    () => buildLexTest(items, pool, 5),
    [items, pool, nonce],
  );
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [checked, setChecked] = useState(false);

  const score = answers.filter((a, i) => a === questions[i]?.answer).length;
  const allAnswered = answers.length === questions.length && answers.every((a) => a !== null);

  function regenerate() {
    setNonce((n) => n + 1);
    setAnswers(questions.map(() => null));
    setChecked(false);
  }

  return (
    <div className={styles.test}>
      <p className={styles.testTitle}>Mini-test</p>
      {questions.map((q, qi) => (
        <div key={qi} className={styles.q}>
          <div className={styles.qPrompt}>
            {q.prompt}
            {q.pos && <span className={styles.qPos}>{q.pos}</span>}
          </div>
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
            <Button size="sm" variant="ghost" onClick={regenerate}>
              <Icon name="repeat" size={16} /> Riprova
            </Button>
            {status === "completed" ? (
              <Button size="sm" variant="ghost" onClick={onReopen} style={{ marginLeft: "auto" }}>
                Riapri
              </Button>
            ) : (
              <Button size="sm" variant="primary" onClick={onComplete} style={{ marginLeft: "auto" }}>
                <Icon name="check" size={16} /> Completa
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
