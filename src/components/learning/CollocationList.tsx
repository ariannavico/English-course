import type { Collocation } from "@/types";
import { Badge } from "@/components/ui";
import styles from "./learning.module.css";

export function CollocationList({ collocations }: { collocations: Collocation[] }) {
  if (collocations.length === 0) return <p className="muted">No collocations yet.</p>;
  return (
    <div>
      {collocations.map((c) => (
        <div key={c.id} className={styles.collocation}>
          <div>
            <span className={styles.collPhrase}>{c.phrase}</span>{" "}
            <span className="muted">— {c.meaning}</span>
            <div className="subtle">“{c.example}”</div>
          </div>
          {c.frequency && (
            <Badge tone={c.frequency === "high" ? "primary" : "neutral"}>
              {c.frequency}
            </Badge>
          )}
        </div>
      ))}
    </div>
  );
}
