import { Link } from "react-router-dom";
import { Badge } from "@/components/ui";
import { projectService } from "@/services";
import { projects } from "@/data/projects";
import styles from "./projects.module.css";

/** The projects hub: each project card shows its goal, deliverable and progress. */
export function ProjectsHub() {
  return (
    <div className={styles.hub}>
      {projects.map((p) => {
        const { done, total } = projectService.progress(
          p.id,
          p.steps.map((s) => s.id),
        );
        const pct = total ? Math.round((done / total) * 100) : 0;
        const started = done > 0;
        const complete = done >= total;
        return (
          <Link key={p.id} to={`/projects/${p.id}`} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardEmoji}>{p.emoji}</span>
              <span className={styles.cardTitle}>{p.title}</span>
              <Badge tone="primary">{p.level}</Badge>
            </div>
            <span className={styles.cardGoal}>{p.goal}</span>
            <span className={styles.deliverable}>
              <b>You'll produce:</b> {p.deliverable}
            </span>
            <div className={styles.progress}>
              <div className={styles.progressBar}>
                <i style={{ width: `${pct}%` }} />
              </div>
              <span>
                {done}/{total}
              </span>
            </div>
            <span className={styles.cta}>
              {complete ? "Completed · review →" : started ? "Resume project →" : "Start project →"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
