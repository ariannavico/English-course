import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Icon } from "@/components/ui";
import { reviewService } from "@/services";
import type { ReviewGrade, ReviewItem, ReviewMode } from "@/types";
import { resolveCard } from "./resolve";
import styles from "./review.module.css";

const MODE_LABEL: Record<ReviewMode, string> = {
  recognition: "Riconoscimento",
  recall: "Produzione",
};

const GRADES: { grade: ReviewGrade; label: string; tone: string }[] = [
  { grade: "again", label: "Da rivedere", tone: styles.again },
  { grade: "hard", label: "Difficile", tone: styles.hard },
  { grade: "good", label: "Bene", tone: styles.good },
  { grade: "easy", label: "Facile", tone: styles.easy },
];

const QUEUE_LIMIT = 20;

/** Spaced-repetition review session. Pick an ability, then work through the due
 * queue: see the prompt, reveal the answer, grade how well you knew it. */
export function ReviewRunner() {
  const [mode, setMode] = useState<ReviewMode | null>(null);
  const [queue, setQueue] = useState<ReviewItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(0);

  const recognitionDue = reviewService.dueCount(new Date(), "recognition");
  const recallDue = reviewService.dueCount(new Date(), "recall");
  const totalTracked = reviewService.all().length;

  function start(m: ReviewMode) {
    setMode(m);
    setQueue(reviewService.queue({ mode: m, limit: QUEUE_LIMIT }));
    setIdx(0);
    setRevealed(false);
    setDone(0);
  }

  function grade(g: ReviewGrade) {
    const item = queue[idx];
    if (!item || !mode) return;
    reviewService.grade(item.id, mode, g);
    setDone((d) => d + 1);
    setIdx((i) => i + 1);
    setRevealed(false);
  }

  function reset() {
    setMode(null);
    setQueue([]);
    setIdx(0);
    setRevealed(false);
    setDone(0);
  }

  // ---- Mode picker -------------------------------------------------------
  if (!mode) {
    return (
      <div className={styles.wrap}>
        {totalTracked === 0 ? (
          <div className={styles.empty}>
            <Icon name="repeat" size={22} />
            <p>
              Nessun elemento nel ripasso, per ora. Studia una sezione e usa
              <strong> «Aggiungi al ripasso»</strong> per costruire la tua coda.
            </p>
            <Link to="/dashboard" className={styles.link}>
              → Vai alla Dashboard
            </Link>
          </div>
        ) : (
          <>
            <p className={styles.lead}>
              Scegli cosa allenare. Il <strong>riconoscimento</strong> va
              dall'inglese all'italiano; la <strong>produzione</strong> dall'italiano
              all'inglese.
            </p>
            <div className={styles.modes}>
              <button className={styles.mode} onClick={() => start("recognition")}>
                <span className={styles.modeName}>Riconoscimento</span>
                <span className={styles.modeSub}>EN → IT</span>
                <Badge tone={recognitionDue ? "primary" : "neutral"}>
                  {recognitionDue} in scadenza
                </Badge>
              </button>
              <button className={styles.mode} onClick={() => start("recall")}>
                <span className={styles.modeName}>Produzione</span>
                <span className={styles.modeSub}>IT → EN</span>
                <Badge tone={recallDue ? "primary" : "neutral"}>
                  {recallDue} in scadenza
                </Badge>
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  // ---- Empty / finished --------------------------------------------------
  const current = queue[idx];
  if (!current) {
    const nothingDue = queue.length === 0;
    return (
      <div className={styles.wrap}>
        <div className={styles.empty}>
          <Icon name="check" size={22} />
          <p>
            {nothingDue
              ? `Niente da ripassare adesso in modalità ${MODE_LABEL[mode].toLowerCase()}. Torna più tardi.`
              : `Fatto! Hai ripassato ${done} element${done === 1 ? "o" : "i"}.`}
          </p>
          <button className={styles.link} onClick={reset}>
            ← Scegli un'altra modalità
          </button>
        </div>
      </div>
    );
  }

  const card = resolveCard(current, mode);

  return (
    <div className={styles.wrap}>
      <div className={styles.progress}>
        <span>
          {MODE_LABEL[mode]} · {idx + 1}/{queue.length}
        </span>
        <button className={styles.quit} onClick={reset}>
          Esci
        </button>
      </div>

      <div className={styles.card}>
        <Badge tone="neutral">{card.kindLabel}</Badge>
        <div className={styles.front}>{card.front}</div>

        {revealed ? (
          <div className={styles.answer}>
            <div className={styles.back}>{card.back}</div>
            {card.note && <div className={styles.note}>{card.note}</div>}
            {card.example && <div className={styles.example}>{card.example}</div>}
          </div>
        ) : (
          <Button variant="primary" onClick={() => setRevealed(true)}>
            Mostra risposta
          </Button>
        )}
      </div>

      {revealed && (
        <div className={styles.grades}>
          {GRADES.map((g) => (
            <button
              key={g.grade}
              className={`${styles.grade} ${g.tone}`}
              onClick={() => grade(g.grade)}
            >
              {g.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
