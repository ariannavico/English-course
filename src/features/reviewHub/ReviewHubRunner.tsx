import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { reviewService } from "@/services";
import { itemState } from "@/services/review/ReviewService";
import type { ReviewGrade, ReviewItem, ReviewMode, ReviewState } from "@/types";
import { resolveCard } from "./resolve";
import styles from "./reviewHub.module.css";

type Phase = "select" | "review" | "done";
const SESSION = 20;

const STATE_LABEL: Record<ReviewState, string> = {
  new: "New",
  forgotten: "Forgotten",
  learning: "Learning",
  familiar: "Familiar",
  mastered: "Mastered",
};

const GRADES: { grade: ReviewGrade; label: string; variant: "danger" | "ghost" | "primary" }[] = [
  { grade: "again", label: "Da rivedere", variant: "danger" },
  { grade: "hard", label: "Difficile", variant: "ghost" },
  { grade: "good", label: "Bene", variant: "ghost" },
  { grade: "easy", label: "Facile", variant: "primary" },
];

export function ReviewHubRunner() {
  const [phase, setPhase] = useState<Phase>("select");
  const [mode, setMode] = useState<ReviewMode>("recognition");
  const [queue, setQueue] = useState<ReviewItem[]>([]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(0);

  // Pull in any legacy SR history the first time we open this (additive, safe).
  const dueByMode = useMemo(() => {
    reviewService.migrateFromLegacyStore();
    return {
      recognition: reviewService.dueCount(new Date(), "recognition"),
      recall: reviewService.dueCount(new Date(), "recall"),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function start(m: ReviewMode) {
    const q = reviewService.queue({ mode: m, limit: SESSION });
    setMode(m);
    setQueue(q);
    setIndex(0);
    setRevealed(false);
    setDone(0);
    setPhase(q.length ? "review" : "done");
  }

  function grade(g: ReviewGrade) {
    const item = queue[index];
    if (!item) return;
    reviewService.grade(item.id, mode, g);
    setDone((d) => d + 1);
    if (index >= queue.length - 1) {
      setPhase("done");
    } else {
      setIndex(index + 1);
      setRevealed(false);
    }
  }

  /* ------------------------------ select ------------------------------ */
  if (phase === "select") {
    return (
      <div className={styles.wrap}>
        <p className="muted" style={{ margin: 0 }}>
          Il ripasso a ripetizione dilazionata, su ogni tipo di contenuto. Scegli l'abilità: due
          binari separati, perché riconoscere e produrre sono cose diverse.
        </p>
        <div className={styles.modes}>
          <button className={styles.mode} onClick={() => start("recognition")}>
            <Icon name="monitor" size={20} />
            <span className={styles.modeName}>Recognition</span>
            <span className={styles.modeDesc}>Vedi l'inglese → ne sai il significato</span>
            <Badge tone={dueByMode.recognition ? "primary" : "neutral"}>{dueByMode.recognition} da fare</Badge>
          </button>
          <button className={styles.mode} onClick={() => start("recall")}>
            <Icon name="target" size={20} />
            <span className={styles.modeName}>Recall</span>
            <span className={styles.modeDesc}>Vedi il significato → produci l'inglese</span>
            <Badge tone={dueByMode.recall ? "primary" : "neutral"}>{dueByMode.recall} da fare</Badge>
          </button>
        </div>
        {dueByMode.recognition + dueByMode.recall === 0 && (
          <p className={styles.empty}>
            Niente in scadenza adesso. Aggiungi elementi al ripasso dalle sezioni (es.{" "}
            <Link to="/s/connectors">Connectors</Link>) e torna qui.
          </p>
        )}
      </div>
    );
  }

  /* ------------------------------- done ------------------------------- */
  if (phase === "done") {
    return (
      <Card title={done > 0 ? "Sessione completata" : "Niente da ripassare"}>
        <div className="stack">
          {done > 0 ? (
            <p className="muted" style={{ margin: 0 }}>
              Hai ripassato <strong>{done}</strong> element{done === 1 ? "o" : "i"} in modalità{" "}
              {mode === "recognition" ? "Recognition" : "Recall"}. Le scadenze si sono aggiornate da sole.
            </p>
          ) : (
            <p className="muted" style={{ margin: 0 }}>
              Non c'è nulla in scadenza per questa abilità. Aggiungi elementi dalle sezioni e torna.
            </p>
          )}
          <div className="row" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => setPhase("select")}>
              Torna al ripasso
            </Button>
            <Link to="/dashboard" style={{ marginLeft: "auto" }}>
              Dashboard →
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  /* ------------------------------ review ------------------------------ */
  const item = queue[index];
  const card = resolveCard(item, mode);
  const state = itemState(item);

  return (
    <div className={styles.wrap}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <span className="subtle">
          {mode === "recognition" ? "Recognition" : "Recall"} · {index + 1} / {queue.length}
        </span>
        <Badge tone="neutral">{STATE_LABEL[state]}</Badge>
      </div>

      <Card>
        <div className={styles.card}>
          <span className={styles.kind}>{card.kindLabel}</span>
          <p className={styles.prompt}>{card.prompt}</p>

          {revealed ? (
            <>
              <div className={styles.answer}>{card.answer}</div>
              {card.detail && <div className={styles.detail}>{card.detail}</div>}
              <div className={styles.grades}>
                {GRADES.map((g) => (
                  <Button key={g.grade} size="sm" variant={g.variant} onClick={() => grade(g.grade)}>
                    {g.label}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <Button variant="primary" onClick={() => setRevealed(true)}>
              Mostra risposta
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
