import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card } from "@/components/ui";
import { ExerciseRenderer } from "@/components/exercises/ExerciseRenderer";
import { placementService } from "@/services";
import { placementItems } from "@/data/placement";
import { buildRoutingPlan, computePlacement } from "./placement";
import type { PlacementAnswer, PlacementResult } from "./types";
import styles from "./placement.module.css";

/**
 * The Initial Assessment (addendum). A short objective quiz that PLACES the
 * learner and hands them a routed plan — the first thing to do next. Reuses the
 * ExerciseRenderer so every item behaves exactly like the rest of the app.
 */
export function PlacementRunner() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<PlacementAnswer[]>([]);
  const [pending, setPending] = useState<PlacementAnswer | null>(null);
  const [result, setResult] = useState<PlacementResult | null>(null);

  const item = placementItems[index];
  const isLast = index >= placementItems.length - 1;

  function advance() {
    if (!pending) return;
    const next = [...answers, pending];
    setAnswers(next);
    setPending(null);
    if (isLast) {
      const res = computePlacement(next);
      placementService.save(res.band, res.correct, res.total);
      setResult(res);
    } else {
      setIndex((i) => i + 1);
    }
  }

  function restart() {
    setIndex(0);
    setAnswers([]);
    setPending(null);
    setResult(null);
  }

  if (result) return <PlacementResultView result={result} onRetake={restart} />;

  const pct = Math.round((index / placementItems.length) * 100);

  return (
    <div className={styles.wrap}>
      <div className={styles.progress}>
        <span className="subtle">
          Question {index + 1} of {placementItems.length}
        </span>
        <div className={styles.bar}>
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>
      </div>

      <Card>
        <div className="stack">
          <ExerciseRenderer
            key={item.id}
            exercise={item.exercise}
            onResult={(r) => setPending({ level: item.level, correct: r.correct === true })}
          />
          {pending && (
            <div className={styles.actions}>
              <Button variant="primary" onClick={advance}>
                {isLast ? "See my level" : "Next"}
              </Button>
            </div>
          )}
        </div>
      </Card>

      <p className="subtle" style={{ margin: 0, textAlign: "center" }}>
        No pressure — this just finds the right starting point. It's an internal estimate, not a certificate.
      </p>
    </div>
  );
}

function PlacementResultView({ result, onRetake }: { result: PlacementResult; onRetake: () => void }) {
  const plan = buildRoutingPlan(result.band);
  return (
    <div className={styles.wrap}>
      <Card>
        <div className={styles.resultHead}>
          <div className="subtle">You place at</div>
          <div className={styles.bandBadge}>{result.band}</div>
          <p className={styles.resultSub}>
            {result.correct} of {result.total} correct · {plan.headline}
          </p>
        </div>
      </Card>

      <Card title="How far you got">
        <div className={styles.tiers}>
          {result.tierAccuracy.map((t) => (
            <div key={t.level} className={styles.tier}>
              <span className={styles.tierName}>{t.level}</span>
              <div className={styles.tierDot}>
                <i style={{ width: `${Math.round(t.accuracy * 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Your plan — start here">
        <div className="stack">
          <p className={styles.blurb}>{plan.blurb}</p>
          <div className={styles.steps}>
            {plan.steps.map((s, i) => (
              <Link key={s.to + s.title} to={s.to} className={`${styles.step} ${i === 0 ? styles.stepFirst : ""}`}>
                <span className={styles.stepEmoji}>{s.emoji}</span>
                <span>
                  <span className={styles.stepTitle}>{s.title}</span>
                  <br />
                  <span className={styles.stepDesc}>{s.desc}</span>
                </span>
                {i === 0 && <span className={styles.stepTag}>Start →</span>}
              </Link>
            ))}
          </div>
          <div className={styles.actions}>
            <Badge tone="primary">Saved to your Home</Badge>
            <Button variant="ghost" onClick={onRetake} style={{ marginLeft: "auto" }}>
              Retake
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
