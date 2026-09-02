import { useState } from "react";
import { Badge, Button, Icon } from "@/components/ui";
import { reviewService, unitService } from "@/services";
import { unitsByCategory } from "@/data/catalog";
import { lexItemsForUnit } from "@/data/lexis";
import type { ReviewKind, SectionKind, Unit, UnitStatus } from "@/types";
import { SECTION_REVIEW_KIND } from "./types";
import styles from "./lexis.module.css";

const STATUS_LABEL: Record<UnitStatus, string> = {
  not_started: "Da iniziare",
  in_progress: "In corso",
  completed: "Completato",
};

/** Generic word-list section (Vocabulary / Adjectives / Adverbs / Verbs). One
 * engine for all of them (proposal §11.2); words feed the unified Review. */
export function LexRunner({ section }: { section: SectionKind }) {
  const groups = unitsByCategory(section);
  const kind: ReviewKind = SECTION_REVIEW_KIND[section] ?? "word";
  const [, setV] = useState(0);
  const refresh = () => setV((v) => v + 1);

  return (
    <div className={styles.wrap}>
      {groups.map(({ category, units }) => (
        <section key={category} className={styles.group}>
          {category !== "—" && <h2 className={styles.groupTitle}>{category}</h2>}
          <div className={styles.cards}>
            {units.map((u) => (
              <UnitCard key={u.id} unit={u} kind={kind} onChange={refresh} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function UnitCard({ unit, kind, onChange }: { unit: Unit; kind: ReviewKind; onChange: () => void }) {
  const [open, setOpen] = useState(false);
  const items = lexItemsForUnit(unit.id);
  const progress = unitService.get(unit.id);
  const status: UnitStatus = progress?.status ?? "not_started";
  const tone = status === "completed" ? "success" : status === "in_progress" ? "primary" : "neutral";
  const inReview = items.length > 0 && items.every((i) => reviewService.get(i.id) != null);

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next && status === "not_started") {
      unitService.start(unit);
      onChange();
    }
  }
  function complete() {
    unitService.complete(unit, "study");
    onChange();
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
      <button className={styles.head} aria-expanded={open} onClick={toggle}>
        <span className={styles.title}>{unit.title}</span>
        {items.length > 0 && <span className={styles.count}>{items.length}</span>}
        <Badge tone="neutral">{unit.level}</Badge>
        <Badge tone={tone}>
          {STATUS_LABEL[status]}
          {status === "completed" && progress?.completedBy === "assessment" ? " · assessment" : ""}
        </Badge>
        <Icon name="chevron" size={18} className={`${styles.chev} ${open ? styles.chevOpen : ""}`} />
      </button>

      {open && (
        <div className={styles.body}>
          {items.length === 0 ? (
            <p className={styles.pending}>
              <Icon name="book" size={15} /> Parole in arrivo. Puoi comunque segnare lo stato.
            </p>
          ) : (
            <div className={styles.list}>
              {items.map((i) => (
                <div key={i.id} className={styles.entry}>
                  <div className={styles.entryTop}>
                    <span className={styles.word}>{i.word}</span>
                    {i.pos && <span className={styles.pos}>{i.pos}</span>}
                    <span className={styles.it}>{i.it}</span>
                  </div>
                  {i.example && <div className={styles.example}>{i.example}</div>}
                </div>
              ))}
            </div>
          )}

          <div className={styles.actions}>
            {items.length > 0 && (
              <Button size="sm" variant={inReview ? "ghost" : "primary"} onClick={addToReview} disabled={inReview}>
                <Icon name="repeat" size={16} /> {inReview ? "Nel ripasso ✓" : `Aggiungi al ripasso (${items.length})`}
              </Button>
            )}
            {status === "completed" ? (
              <Button size="sm" variant="ghost" onClick={reopen} style={{ marginLeft: "auto" }}>
                Ripassa di nuovo
              </Button>
            ) : (
              <Button size="sm" variant="primary" onClick={complete} style={{ marginLeft: "auto" }}>
                <Icon name="check" size={16} /> Segna come completato
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
