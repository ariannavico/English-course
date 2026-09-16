import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { unitService, reviewService } from "@/services";
import { catalog, SECTION_LABEL } from "@/data/catalog";
import { summariseLevels, summariseSections } from "@/services/units/UnitService";
import type { SectionKind, Unit } from "@/types";
import styles from "./learningDashboard.module.css";

/** Sections you can currently study & verify (lessons + mini-test). The rest are
 * consult-only for now, so their card sends you to Explore. */
const STUDY_READY = new Set<SectionKind>([
  "grammar",
  "vocabulary",
  "adjectives",
  "adverbs",
  "connectors",
  "verbs",
  "phrasal",
  "irregular",
]);

const linkFor = (section: SectionKind) =>
  STUDY_READY.has(section) ? `/s/${section}` : `/explore/${section}`;

/** Dashboard — progress per section, and where you study & verify each section. */
export function LearningDashboardPage() {
  const progress = unitService.all();
  const sections = summariseSections(catalog, progress);
  const levels = summariseLevels(catalog, progress);

  const totalUnits = catalog.length;
  const completed = Object.values(progress).filter((p) => p.status === "completed").length;
  const overall = totalUnits ? Math.round((completed / totalUnits) * 100) : 0;

  const resume: Unit | undefined = catalog.find((u) => progress[u.id]?.status === "in_progress");

  const reviewDue = reviewService.dueCount();
  const reviewTracked = reviewService.all().length;

  return (
    <div className="stack">
      <PageHeader
        title="Dashboard"
        description="Il tuo avanzamento per sezione. Da qui studi e verifichi di aver appreso; in Explore consulti i contenuti."
      />

      <div className={styles.tiles}>
        <div className={styles.tile}>
          <div className={styles.tileVal}>{overall}%</div>
          <div className={styles.tileLbl}>completato in totale</div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tileVal}>
            {completed}
            <span className={styles.of}>/{totalUnits}</span>
          </div>
          <div className={styles.tileLbl}>unità completate</div>
        </div>
        <Link to="/review" className={`${styles.tile} ${styles.tileLink}`}>
          <div className={styles.tileVal}>
            {reviewDue}
            {reviewTracked > 0 && <span className={styles.of}>/{reviewTracked}</span>}
          </div>
          <div className={styles.tileLbl}>
            {reviewDue > 0 ? "da ripassare ora →" : reviewTracked > 0 ? "nel ripasso →" : "ripasso →"}
          </div>
        </Link>
      </div>

      {resume && (
        <div className={styles.resume}>
          <span className={styles.resumeLbl}>Riprendi da dove eri</span>
          <Link to={linkFor(resume.section)} className={styles.resumeLink}>
            {SECTION_LABEL[resume.section]} · {resume.title} →
          </Link>
        </div>
      )}

      <h2 className={styles.h2}>Progresso per sezione</h2>
      <div className={styles.sections}>
        {sections.map((s) => (
          <Link key={s.section} to={linkFor(s.section)} className={styles.section}>
            <div className={styles.sectionTop}>
              <span className={styles.sectionName}>{SECTION_LABEL[s.section]}</span>
              <span className={styles.sectionPct}>
                {STUDY_READY.has(s.section) ? `${s.percent}%` : "consulta"}
              </span>
            </div>
            <div className={styles.bar}>
              <div className={styles.barFill} style={{ width: `${s.percent}%` }} />
            </div>
            <div className={styles.sectionMeta}>
              {STUDY_READY.has(s.section) ? (
                <>
                  {s.completed}/{s.total} completate
                  {s.inProgress > 0 && <span> · {s.inProgress} in corso</span>}
                </>
              ) : (
                <span>Studio in arrivo — per ora consultabile</span>
              )}
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
