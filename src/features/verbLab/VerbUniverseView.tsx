import { Link } from "react-router-dom";
import type { VerbUniverse } from "./types";
import { Card } from "@/components/ui";
import { getVerb } from "@/data";
import styles from "./verbLab.module.css";

/**
 * Verb Universe (spec §16): the many jobs one key verb does, tied to a single
 * core idea, plus its phrasal family and the verbs it's confused with.
 */
export function VerbUniverseView({ universe }: { universe: VerbUniverse }) {
  const hasCard = getVerb(universe.id) != null;

  return (
    <div className="stack">
      <Card
        title={
          <span className="row" style={{ gap: "0.5rem" }}>
            <span style={{ fontSize: "1.4rem" }}>🌐</span> The {universe.verb.toUpperCase()} universe
          </span>
        }
      >
        <p className={styles.core}>{universe.coreIdea}</p>
      </Card>

      <Card title="What it does">
        <div className={styles.senses}>
          {universe.senses.map((s) => (
            <div key={s.sense} className={styles.sense}>
              <div className={styles.senseHead}>
                <span className={styles.senseLabel}>{universe.verb} = {s.sense}</span>
                <span className={styles.senseGloss}>{s.gloss}</span>
              </div>
              <div className={styles.senseEx}>“{s.example}”</div>
            </div>
          ))}
        </div>
      </Card>

      {universe.phrasals.length > 0 && (
        <Card title="Phrasal family">
          <div className={styles.phrasalRow}>
            {universe.phrasals.map((p) => (
              <span key={p.phrase} className={styles.phrasal}>
                <b>{p.phrase}</b> — {p.meaning}
              </span>
            ))}
          </div>
        </Card>
      )}

      {universe.confusedWith && universe.confusedWith.length > 0 && (
        <Card title="Often confused with">
          {universe.confusedWith.map((c) => (
            <div key={c.verb} className={styles.confused}>
              <strong>
                {universe.verb} vs {c.verb}
              </strong>
              <p style={{ margin: "0.25rem 0 0" }} className="muted">
                {c.difference}
              </p>
            </div>
          ))}
        </Card>
      )}

      <div className="row" style={{ flexWrap: "wrap" }}>
        <Link to="/verb-lab" className="row">
          ← Back to the Verb Choice Lab
        </Link>
        {hasCard && (
          <Link to={`/verbs/${universe.id}`} style={{ marginLeft: "auto" }}>
            Open the full {universe.verb.toUpperCase()} card →
          </Link>
        )}
      </div>
    </div>
  );
}
