import { useMemo, useState } from "react";
import { Badge, Button, Icon } from "@/components/ui";
import { reviewService, unitService } from "@/services";
import { unitsByCategory } from "@/data/catalog";
import { getConnectorFunction } from "@/data/connectors/items";
import type { Unit, UnitStatus } from "@/types";
import styles from "./connectors.module.css";

const STATUS_LABEL: Record<UnitStatus, string> = {
  not_started: "Da iniziare",
  in_progress: "In corso",
  completed: "Completato",
};

/** Connectors by function — the first Second-Release vertical slice: catalog
 * Units drive the page, status is UnitService, review entries are ReviewService. */
export function ConnectorsRunner() {
  const groups = useMemo(() => unitsByCategory("connectors"), []);
  // A version counter to re-read the services after a mutation.
  const [, setV] = useState(0);
  const refresh = () => setV((v) => v + 1);

  return (
    <div className={styles.wrap}>
      {groups.map(({ category, units }) => (
        <section key={category} className={styles.group}>
          <h2 className={styles.groupTitle}>{category}</h2>
          <div className={styles.cards}>
            {units.map((unit) => (
              <FunctionCard key={unit.id} unit={unit} onChange={refresh} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function FunctionCard({ unit, onChange }: { unit: Unit; onChange: () => void }) {
  const content = getConnectorFunction(unit.id);
  const [open, setOpen] = useState(false);
  const progress = unitService.get(unit.id);
  const status: UnitStatus = progress?.status ?? "not_started";

  const inReview = content
    ? content.connectors.every((c) => reviewService.get(c.id) != null)
    : false;

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
    if (!content) return;
    for (const c of content.connectors) reviewService.ensure(c.id, "connector", "connectors");
    onChange();
  }

  const tone = status === "completed" ? "success" : status === "in_progress" ? "primary" : "neutral";

  return (
    <div className={styles.card}>
      <button className={styles.head} aria-expanded={open} onClick={toggle}>
        <span className={styles.fn}>{content?.fn ?? unit.title}</span>
        <Badge tone="neutral">{unit.level}</Badge>
        <Badge tone={tone}>
          {STATUS_LABEL[status]}
          {status === "completed" && progress?.completedBy === "assessment" ? " · assessment" : ""}
        </Badge>
        <Icon name="chevron" size={18} className={`${styles.chev} ${open ? styles.chevOpen : ""}`} />
      </button>

      {open && content && (
        <div className={styles.body}>
          <p className={styles.intro}>{content.intro}</p>
          <div className={styles.list}>
            {content.connectors.map((c) => (
              <div key={c.id} className={styles.entry}>
                <div className={styles.entryTop}>
                  <span className={styles.word}>{c.word}</span>
                  <span className={styles.it}>{c.it}</span>
                </div>
                <div className={styles.struct}>{c.structure}</div>
                <div className={styles.example}>{c.example}</div>
                {c.note && (
                  <div className={styles.note}>
                    <Icon name="alert" size={14} /> {c.note}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Button size="sm" variant={inReview ? "ghost" : "primary"} onClick={addToReview} disabled={inReview}>
              <Icon name="repeat" size={16} /> {inReview ? "Nel ripasso ✓" : `Aggiungi al ripasso (${content.connectors.length})`}
            </Button>
            {status === "completed" ? (
              <Button size="sm" variant="ghost" onClick={reopen}>
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
