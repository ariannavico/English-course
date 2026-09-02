import { useState } from "react";
import { Badge, Button, Icon } from "@/components/ui";
import { unitService } from "@/services";
import { unitsByCategory } from "@/data/catalog";
import type { SectionKind, Unit, UnitStatus } from "@/types";
import { ConnectorsRunner } from "@/features/connectors/ConnectorsRunner";
import { LexRunner } from "@/features/lexis/LexRunner";
import { GrammarRunner } from "@/features/grammarLessons/GrammarRunner";
import styles from "./sections.module.css";

const LEXICAL: SectionKind[] = ["vocabulary", "adjectives", "adverbs", "verbs"];

const STATUS_LABEL: Record<UnitStatus, string> = {
  not_started: "Da iniziare",
  in_progress: "In corso",
  completed: "Completato",
};

/**
 * Generic, catalog-driven section page (feat/second-release, Phase 2c). Lists a
 * section's Units grouped by category, each with the shared Unit status
 * controls. Sections that already have authored detail (currently Connectors)
 * delegate to their bespoke runner; the rest show status controls now and fill
 * their lesson/word content in later steps.
 */
export function SectionRunner({ section }: { section: SectionKind }) {
  if (section === "connectors") return <ConnectorsRunner />;
  if (section === "grammar") return <GrammarRunner />;
  if (LEXICAL.includes(section)) return <LexRunner section={section} />;
  return <GenericSection section={section} />;
}

function GenericSection({ section }: { section: SectionKind }) {
  const groups = unitsByCategory(section);
  const [, setV] = useState(0);
  const refresh = () => setV((v) => v + 1);

  return (
    <div className={styles.wrap}>
      {groups.map(({ category, units }) => (
        <section key={category} className={styles.group}>
          {category !== "—" && <h2 className={styles.groupTitle}>{category}</h2>}
          <div className={styles.cards}>
            {units.map((u) => (
              <UnitRow key={u.id} unit={u} onChange={refresh} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function UnitRow({ unit, onChange }: { unit: Unit; onChange: () => void }) {
  const [open, setOpen] = useState(false);
  const progress = unitService.get(unit.id);
  const status: UnitStatus = progress?.status ?? "not_started";
  const tone = status === "completed" ? "success" : status === "in_progress" ? "primary" : "neutral";

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

  return (
    <div className={styles.card}>
      <button className={styles.head} aria-expanded={open} onClick={toggle}>
        <span className={styles.title}>{unit.title}</span>
        <Badge tone="neutral">{unit.level}</Badge>
        <Badge tone={tone}>
          {STATUS_LABEL[status]}
          {status === "completed" && progress?.completedBy === "assessment" ? " · assessment" : ""}
        </Badge>
        <Icon name="chevron" size={18} className={`${styles.chev} ${open ? styles.chevOpen : ""}`} />
      </button>
      {open && (
        <div className={styles.body}>
          <p className={styles.pending}>
            <Icon name="book" size={15} /> Contenuto in arrivo. Puoi comunque segnare lo stato
            mentre studi questa unità.
          </p>
          <div className={styles.actions}>
            {status === "completed" ? (
              <Button size="sm" variant="ghost" onClick={reopen}>
                Ripassa di nuovo
              </Button>
            ) : (
              <Button size="sm" variant="primary" onClick={complete}>
                <Icon name="check" size={16} /> Segna come completato
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
