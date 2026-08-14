import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { VerbChoiceScenario } from "./types";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { shuffle } from "@/utils/shuffle";
import styles from "./verbLab.module.css";

/**
 * The Verb Choice Lab (spec §14): a situation, a verb decision, and the reasoning
 * for every option. It trains the *choice* — why a native would pick this verb —
 * not a translation.
 */
export function VerbChoiceLab({ scenarios }: { scenarios: VerbChoiceScenario[] }) {
  const order = useMemo(() => shuffle(scenarios), [scenarios]);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const scenario = order[index];
  const isLast = index === order.length - 1;
  const bestVerb = scenario.options.find((o) => o.best)?.verb;

  function pick(verb: string) {
    if (chosen) return;
    setChosen(verb);
    if (verb === bestVerb) setCorrect((c) => c + 1);
  }

  function next() {
    if (isLast) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setChosen(null);
    }
  }

  if (done) {
    const pct = Math.round((correct / order.length) * 100);
    return (
      <Card title="Lab complete">
        <div className="stack">
          <div className="row" style={{ gap: "0.5rem" }}>
            <span style={{ fontSize: "2.4rem", fontWeight: 750, color: "var(--primary)" }}>
              {correct}/{order.length}
            </span>
            <span className="muted">natural choices ({pct}%)</span>
          </div>
          <p className="muted" style={{ margin: 0 }}>
            The reasoning matters more than the score — you're building an instinct
            for which verb English reaches for.
          </p>
          <div className="row" style={{ flexWrap: "wrap" }}>
            <Button
              variant="primary"
              onClick={() => {
                setIndex(0);
                setChosen(null);
                setCorrect(0);
                setDone(false);
              }}
            >
              Go again
            </Button>
            <Link to="/missions" className="row" style={{ marginLeft: "auto" }}>
              Use it in a mission →
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className={styles.lab}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="subtle">
          Scenario {index + 1} of {order.length}
        </span>
        <span className="subtle">{correct} natural so far</span>
      </div>

      <Card>
        <div className={styles.lab}>
          <p className={styles.situation}>
            {scenario.emoji && <span style={{ marginRight: "0.4rem" }}>{scenario.emoji}</span>}
            {scenario.situation}
          </p>
          <p className={styles.question}>{scenario.question}</p>

          <div className={styles.verbs} role="radiogroup" aria-label="Choose a verb">
            {scenario.options.map((o) => {
              let cls = styles.verb;
              if (chosen) {
                if (o.verb === bestVerb) cls += ` ${styles.verbBest}`;
                else if (o.verb === chosen) cls += ` ${styles.verbWrong}`;
              } else if (o.verb === chosen) cls += ` ${styles.verbChosen}`;
              return (
                <button key={o.verb} className={cls} disabled={chosen !== null} onClick={() => pick(o.verb)}>
                  {o.verb}
                </button>
              );
            })}
          </div>

          {chosen && (
            <>
              <div className={styles.reasonList}>
                {scenario.options.map((o) => (
                  <div key={o.verb} className={`${styles.reason} ${o.best ? styles.reasonBest : ""}`}>
                    <span className={styles.reasonVerb}>
                      {o.best ? <Icon name="check" size={16} /> : null} {o.verb}
                    </span>
                    <span>{o.reasoning}</span>
                  </div>
                ))}
              </div>

              <div className={styles.principle}>
                <span className={styles.principleLabel}>The principle</span>
                <p style={{ margin: "0.2rem 0 0" }}>{scenario.principle}</p>
              </div>

              <div className="row" style={{ flexWrap: "wrap" }}>
                {scenario.relatedUniverse && (
                  <Link to={`/verb-lab/${scenario.relatedUniverse}`} className="row">
                    <Icon name="grid" size={16} /> Explore the {scenario.relatedUniverse.toUpperCase()} universe
                  </Link>
                )}
                <Button variant="primary" onClick={next} style={{ marginLeft: "auto" }}>
                  {isLast ? "Finish" : "Next scenario"}
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>

      <div className="row">
        <Badge tone="primary">{scenario.level}</Badge>
        {scenario.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
  );
}
