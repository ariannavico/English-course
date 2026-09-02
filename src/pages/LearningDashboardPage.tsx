import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { reviewService, unitService } from "@/services";
import { catalog, SECTION_LABEL } from "@/data/catalog";
import { summariseLevels, summariseSections } from "@/services/units/UnitService";
import type { Unit } from "@/types";
import styles from "./learningDashboard.module.css";

/** Second-Release learning dashboard (feat/second-release, Phase 2c). Read-only
 * overview built from the unified Unit + Review model. Free choice, never a path. */
export function LearningDashboardPage() {
  const progress = unitService.all();
  const sections = summariseSections(catalog, progress);
  const levels = summariseLevels(catalog, progress);
  const due = reviewService.dueCount();

  const totalUnits = catalog.length;
  const completed = Object.values(progress).filter((p) => p.status === "completed").length;
  const overall = totalUnits ? Math.round((completed / totalUnits) * 100) : 0;

  // A gentle, non-obligatory suggestion: resume something in progress.
  const resume: Unit | undefined = catalog.find((u) => progress[u.id]?.status === "in_progress");

  return (
    <div className="stack">
      <PageHeader
        title="Dashboard"
        description="Una panoramica del tuo studio. Scegli liberamente cosa fare — questa è solo la mappa, non un percorso obbligato."
      />

      <div className={styles.tiles}>
        <div className={styles.tile}>
          <div className={styles.tileVal}>{overall}%</div>
          <div className={styles.tileLbl}>completato in totale</div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tileVal}>{completed}<span className={styles.of}>/{totalUnits}</span></div>
          <div className={styles.tileLbl}>unità completate</div>
        </div>
        <Link to="/review-hub" className={`${styles.tile} ${styles.tileLink}`}>
          <div className={styles.tileVal}>{due}</div>
          <div className={styles.tileLbl}>in scadenza nel ripasso</div>
        </Link>
      </div>

      {resume && (
        <div className={styles.resume}>
          <span className={styles.resumeLbl}>Riprendi da dove eri</span>
          <Link to={`/s/${resume.section}`} className={styles.resumeLink}>
            {SECTION_LABEL[resume.section]} · {resume.title} →
          </Link>
        </div>
      )}

      <h2 className={styles.h2}>Progresso per sezione</h2>
      <div className={styles.sections}>
        {sections.map((s) => (
          <Link key={s.section} to={`/s/${s.section}`} className={styles.section}>
            <div className={styles.sectionTop}>
              <span className={styles.sectionName}>{SECTION_LABEL[s.section]}</span>
              <span className={styles.sectionPct}>{s.percent}%</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.barFill} style={{ width: `${s.percent}%` }} />
            </div>
            <div className={styles.sectionMeta}>
              {s.completed}/{s.total} completate
              {s.assessed > 0 && <span className={styles.assessed}> · {s.assessed} da assessment</span>}
              {s.inProgress > 0 && <span> · {s.inProgress} in corso</span>}
            </div>
          </Link>
        ))}
      </div>

      <h2 className={styles.h2}>Progresso per livello</h2>
      <div className={styles.levels}>
        {levels.map((l) => (
          <div key={l.level} className={styles.level}>
            <span className={styles.levelName}>{l.level}</span>
            <div className={styles.bar}>
              <div className={styles.barFill} style={{ width: `${l.percent}%` }} />
            </div>
            <span className={styles.levelPct}>{l.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
