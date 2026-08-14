import { Link } from "react-router-dom";
import type { PhrasalVerb } from "@/types";
import { Badge } from "@/components/ui";
import { ExampleSentence } from "./ExampleSentence";
import styles from "./learning.module.css";

export function PhrasalVerbCard({ phrasalVerb }: { phrasalVerb: PhrasalVerb }) {
  const pv = phrasalVerb;
  return (
    <div className={styles.similar}>
      <div className={styles.pvHeader}>
        <span className={styles.pvPhrase}>{pv.phrase}</span>
        <Badge tone="primary">{pv.cefrLevel}</Badge>
        {pv.separable != null && (
          <Badge>{pv.separable ? "separable" : "inseparable"}</Badge>
        )}
        <Link to={`/verbs/${pv.baseVerb}`} className="subtle" style={{ marginLeft: "auto" }}>
          from “{pv.baseVerb}”
        </Link>
      </div>
      <ul style={{ margin: "0.5rem 0" }}>
        {pv.meanings.map((m, i) => (
          <li key={i}>
            <span className={styles.italian}>{m.italian}</span> — {m.englishExplanation}
          </li>
        ))}
      </ul>
      <div className="stack" style={{ gap: "0.4rem" }}>
        {pv.examples.map((ex) => (
          <ExampleSentence key={ex.id} example={ex} />
        ))}
      </div>
    </div>
  );
}
