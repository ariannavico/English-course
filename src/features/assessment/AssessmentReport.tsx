import { Link } from "react-router-dom";
import { Badge, Card, Icon, LinkButton } from "@/components/ui";
import type { Band } from "@/services/skillProfile/SkillProfileService";
import type { ReadinessReport } from "./report";
import styles from "./assessment.module.css";

const FILL: Record<Band, string> = {
  A2: styles["f-A2"], "A2+": styles["f-A2p"], B1: styles["f-B1"], "B1+": styles["f-B1p"], B2: styles["f-B2"],
};
const TONE: Record<Band, "warning" | "primary" | "success"> = {
  A2: "warning", "A2+": "warning", B1: "primary", "B1+": "primary", B2: "success",
};

/** The B2 Readiness Report (spec §48). Strong/weak areas, recurring mistakes, recommended training. */
export function AssessmentReport({ report, onRetake }: { report: ReadinessReport; onRetake: () => void }) {
  return (
    <div className="stack">
      <Card title="B2 Readiness Report">
        <div className={styles.readiness}>
          <span className={styles.readinessBand}>{report.band}</span>
          <div>
            <div className={styles.statement}>{report.readiness}</div>
            <div className="subtle">
              Overall {report.overall}% · an internal estimate, not a certification.
            </div>
          </div>
        </div>

        {(report.accuracy != null || report.communication != null || report.range != null) && (
          <div className={styles.dims} style={{ marginTop: "1rem" }}>
            {report.accuracy != null && <Dim value={`${report.accuracy}%`} label="Accuracy" />}
            {report.communication != null && <Dim value={`${report.communication}%`} label="Communication" />}
            {report.range != null && <Dim value={`${report.range}%`} label="Range" />}
          </div>
        )}
      </Card>

      <Card title="By competence">
        <div className="stack" style={{ gap: "0.9rem" }}>
          {report.competences.map((c) => (
            <div key={c.competence} className={styles.compRow}>
              <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{c.label}</span>
              <Badge tone={TONE[c.band]}>
                {c.band} · {c.score}%
              </Badge>
              <div className={styles.compBar}>
                <div className={`${styles.compFill} ${FILL[c.band]}`} style={{ width: `${c.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className={styles.wrap} style={{ flexDirection: "row", flexWrap: "wrap", gap: "1rem" }}>
        {report.strong.length > 0 && (
          <Card title="Strong areas" className="grow">
            <div className="row" style={{ flexWrap: "wrap", gap: "0.35rem" }}>
              {report.strong.map((s) => (
                <Badge key={s} tone="success">
                  {s}
                </Badge>
              ))}
            </div>
          </Card>
        )}
        {report.weak.length > 0 && (
          <Card title="Focus next" className="grow">
            <div className="row" style={{ flexWrap: "wrap", gap: "0.35rem" }}>
              {report.weak.map((w) => (
                <Badge key={w.label} tone="warning">
                  {w.label}
                </Badge>
              ))}
            </div>
          </Card>
        )}
      </div>

      {report.recurringMistakes.length > 0 && (
        <Card title="Recurring mistakes">
          <div className="stack" style={{ gap: "0.5rem" }}>
            {report.recurringMistakes.map((m, i) => (
              <div key={i} className={styles.flag}>
                <Icon name="alert" size={16} /> <span>{m}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card title="Recommended training">
        <div className={styles.recos}>
          {report.weak.length > 0 ? (
            report.weak.map((w) => (
              <Link key={w.to + w.label} to={w.to} className={styles.reco}>
                <Icon name="arrow-right" size={16} /> {w.label}
              </Link>
            ))
          ) : (
            <Link to="/fluency" className={styles.reco}>
              <Icon name="arrow-right" size={16} /> Keep stretching in Fluency Mode
            </Link>
          )}
          <Link to="/progress" className={styles.reco}>
            <Icon name="monitor" size={16} /> See your full Skill Map
          </Link>
        </div>
        <div className="row" style={{ marginTop: "1rem", flexWrap: "wrap" }}>
          <LinkButton to="/" variant="primary">
            Back to Home
          </LinkButton>
          <button
            onClick={onRetake}
            style={{ marginLeft: "auto", background: "none", border: "none", color: "var(--primary)", cursor: "pointer", font: "inherit" }}
          >
            Retake the assessment
          </button>
        </div>
      </Card>
    </div>
  );
}

function Dim({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.dim}>
      <div className={styles.dimVal}>{value}</div>
      <div className={styles.dimLabel}>{label}</div>
    </div>
  );
}
