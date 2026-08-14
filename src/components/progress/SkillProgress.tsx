import { ProgressBar } from "@/components/ui";
import styles from "./progress.module.css";

export interface SkillDatum {
  tag: string;
  percent: number;
}

/** Weak-areas list (spec §32). Lowest scores first. */
export function SkillProgress({ skills }: { skills: SkillDatum[] }) {
  if (skills.length === 0)
    return <p className="muted">Do some exercises to see your weak areas.</p>;
  return (
    <div>
      {skills.map((s) => (
        <div key={s.tag} className={styles.skill}>
          <span className={styles.skillName}>{prettify(s.tag)}</span>
          <span className={styles.skillPct}>{s.percent}%</span>
          <div className={styles.skillBarCell}>
            <ProgressBar value={s.percent} label={s.tag} />
          </div>
        </div>
      ))}
    </div>
  );
}

function prettify(tag: string): string {
  return tag.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
