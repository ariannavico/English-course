import { useEffect, useMemo, useState } from "react";
import { Badge, Button, Icon } from "@/components/ui";
import { reviewService, unitService } from "@/services";
import { unitsByCategory } from "@/data/catalog";
import { getConnectorFunction } from "@/data/connectors/items";
import type { Unit, UnitStatus } from "@/types";
import { SpeakButton } from "@/components/learning/SpeakButton";
import styles from "./connectors.module.css";

const STATUS_LABEL: Record<UnitStatus, string> = {
  not_started: "Da iniziare",
  in_progress: "In corso",
  completed: "Completato",
};

/** Connectors by function — the first Second-Release vertical slice: catalog
 * Units drive the page, status is UnitService, review entries are ReviewService. */
export function ConnectorsRunner({ readOnly = false }: { readOnly?: boolean }) {
  const groups = useMemo(() => unitsByCategory("connectors"), []);
  // A version counter to re-read the services after a mutation.
  const [, setV] = useState(0);
  const refresh = () => setV((v) => v + 1);

  // Which function is open (lifted so completing one opens the next).
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
          <h2 className={styles.groupTitle}>{category}</h2>
          <div className={styles.cards}>
            {units.map((unit) => (
              <FunctionCard
                key={unit.id}
                unit={unit}
                open={openId === unit.id}
                onToggle={() => toggle(unit.id)}
                onCompleted={() => openNext(unit.id)}
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

function FunctionCard({
  unit,
  open,
  onToggle,
  onCompleted,
  onChange,
  readOnly,
}: {
  unit: Unit;
  open: boolean;
  onToggle: () => void;
  onCompleted: () => void;
  onChange: () => void;
  readOnly: boolean;
}) {
  const content = getConnectorFunction(unit.id);
  const progress = unitService.get(unit.id);
  const status: UnitStatus = progress?.status ?? "not_started";

  const inReview = content
    ? content.connectors.every((c) => reviewService.get(c.id) != null)
    : false;

  // Start the function the first time it's opened.
  useEffect(() => {
    if (open && !readOnly && status === "not_started") {
      unitService.start(unit);
      onChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function complete() {
    unitService.complete(unit, "study");
    onChange();
    onCompleted(); // close this card and open the next
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
      <button className={styles.head} aria-expanded={open} onClick={onToggle}>
        <span className={styles.fn}>{content?.fn ?? unit.title}</span>
        <Badge tone="neutral">{unit.level}</Badge>
        {!readOnly && (
          <Badge tone={tone}>
            {STATUS_LABEL[status]}
            {status === "completed" && progress?.completedBy === "assessment" ? " · assessment" : ""}
          </Badge>
        )}
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
                  <SpeakButton text={c.word} />
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

          {!readOnly && (
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
          )}
        </div>
      )}
    </div>
  );
}
