import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { SECTIONS } from "@/data/catalog";
import styles from "./explore.module.css";

/**
 * Explore hub — the reference/consult surface. Lists the content sections; each
 * opens a read-only view of that section's material. Studying and tracking
 * progress live in the Dashboard.
 */
export function ExplorePage() {
  return (
    <div className="stack">
      <PageHeader
        title="Explore"
        description="Consulta i contenuti di ogni sezione. Per studiare e verificare i tuoi progressi vai alla Dashboard."
      />
      <div className={styles.grid}>
        {SECTIONS.map((s) => (
          <Link key={s.kind} to={`/explore/${s.kind}`} className={styles.card}>
            <span className={styles.name}>{s.label}</span>
            <span className={styles.blurb}>{s.blurb}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
