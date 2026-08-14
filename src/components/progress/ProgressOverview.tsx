import type { OverallStats } from "@/types";
import { ProgressBar } from "@/components/ui";
import styles from "./progress.module.css";

export function ProgressOverview({ stats }: { stats: OverallStats }) {
  const cells: [string, number | string][] = [
    ["Chapters", stats.chaptersCompleted],
    ["Exercises", `${stats.exercisesCompleted}/${stats.totalExercises}`],
    ["Avg score", `${stats.averageScore}%`],
    ["Verbs", stats.verbsStudied],
    ["Phrasals", stats.phrasalVerbsStudied],
    ["Vocab", stats.vocabularyStudied],
  ];
  return (
    <div className="stack">
      <div>
        <div className="row" style={{ justifyContent: "space-between", marginBottom: "0.35rem" }}>
          <span className="subtle">Overall progress (internal indicator)</span>
          <span className="subtle">{stats.currentCEFRProgress}%</span>
        </div>
        <ProgressBar value={stats.currentCEFRProgress} label="Overall progress" />
      </div>
      <div className={styles.statRow}>
        {cells.map(([label, value]) => (
          <div key={label} className={styles.stat}>
            <div className={styles.statValue}>{value}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
