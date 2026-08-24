import { Link } from "react-router-dom";
import { Card } from "@/components/ui";
import {
  argumentationService,
  assessmentService,
  fluencyService,
  writingService,
} from "@/services";
import { computeQualityProfile, type QualityInputs } from "./quality";
import styles from "./quality.module.css";

/**
 * The B2 quality profile panel (spec §20–21): Accuracy / Fluency / Range as
 * three separate axes, blended from what the app already stores. Axes with no
 * signal yet link to the activity that measures them.
 */
export function QualityProfile() {
  const report = assessmentService.loadLast()?.report ?? null;
  const fluency = fluencyService.load();
  const writing = writingService.load();
  const argument = argumentationService.load();

  const inputs: QualityInputs = {
    assessment: report
      ? { accuracy: report.accuracy, communication: report.communication, range: report.range }
      : null,
    fluencyBest: fluency.sessions > 0 ? fluency.bestScore : null,
    writingBest: writing.sessions > 0 ? writing.bestScore : null,
    argumentationBest: argument.sessions > 0 ? argument.bestScore : null,
  };

  const profile = computeQualityProfile(inputs);

  return (
    <Card
      title={
        <span className="row" style={{ gap: "0.5rem", alignItems: "baseline" }}>
          <span>Quality profile</span>
          {profile.overall && (
            <span className="subtle" style={{ fontWeight: 500 }}>
              overall {profile.overall.score} · {profile.overall.band}
            </span>
          )}
        </span>
      }
    >
      <p className={styles.headline}>{profile.headline}</p>
      <div className={styles.dims}>
        {profile.dims.map((d) => (
          <div key={d.key} className={styles.dim}>
            <span className={styles.dimHead}>
              <span className={styles.dimLabel}>{d.label}</span>
              {d.band && <span className={styles.dimBand}>{d.band}</span>}
            </span>
            {d.score != null ? (
              <span className={styles.dimScore}>{d.score}</span>
            ) : (
              <span className={styles.dimScoreNull}>—</span>
            )}
            <div className={styles.bar}>
              <i style={{ width: `${d.score ?? 0}%` }} />
            </div>
            <p className={styles.note}>
              {d.score != null ? (
                d.note
              ) : (
                <>
                  {d.note.replace(/—.*/, "—")} <Link to={d.to}>measure it →</Link>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
