import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";
import type { WeakArea } from "@/services/learning/WeaknessService";
import styles from "./weaknesses.module.css";

/** The Weakness Hunter card (spec §24): the single biggest weakness + what to do. */
export function WeaknessHunter({ area }: { area: WeakArea }) {
  const tone =
    area.accuracy < 60 ? "var(--danger)" : area.accuracy < 75 ? "var(--warning)" : "var(--primary)";

  return (
    <div className={styles.hunter}>
      <div className={styles.hunterLabel}>Your biggest weakness</div>
      <div className={styles.hunterTitle}>
        {area.emoji} {area.title}
      </div>
      <p className={styles.hunterPattern}>{area.pattern}</p>

      <div className={styles.accuracy}>
        <span className={styles.accuracyBig} style={{ color: tone }}>
          {area.accuracy}%
        </span>
        <span className="muted">accuracy · {area.attempts} attempts</span>
      </div>

      <div className={styles.recos}>
        {area.recommendations.map((r) => (
          <Link key={r.to + r.label} to={r.to} className={styles.reco}>
            <Icon name="arrow-right" size={16} /> {r.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
