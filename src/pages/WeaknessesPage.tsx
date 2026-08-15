import { Link } from "react-router-dom";
import { Badge, Card, LinkButton } from "@/components/ui";
import { ProgressBar } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { WeaknessHunter } from "@/features/weaknesses/WeaknessHunter";
import { useWeaknesses } from "@/features/weaknesses/useWeaknesses";
import styles from "@/features/weaknesses/weaknesses.module.css";

/** "Fix Your Weaknesses" (spec §24). Finds patterns and points to the fix. */
export function WeaknessesPage() {
  const report = useWeaknesses();

  return (
    <div className="stack">
      <PageHeader
        title="Fix Your Weaknesses"
        description="Not isolated mistakes — the patterns behind them, and the fastest way to fix each one."
      />

      {!report.hasData ? (
        <Card>
          <p className="muted" style={{ marginTop: 0 }}>
            Do a bit of practice or a mission first — then this page finds the
            patterns in your mistakes and hands you targeted fixes.
          </p>
          <div className="row" style={{ flexWrap: "wrap" }}>
            <LinkButton to="/practice" variant="primary">
              Quick practice
            </LinkButton>
            <LinkButton to="/missions">Try a mission</LinkButton>
          </div>
        </Card>
      ) : report.areas.length === 0 ? (
        <Card>
          <p className="muted" style={{ margin: 0 }}>
            Nothing stands out as a clear weakness right now — nice work. Keep
            mixing in practice and missions and check back.
          </p>
        </Card>
      ) : (
        <>
          {report.top && <WeaknessHunter area={report.top} />}

          {report.all.length > 1 && (
            <Card title="All your weak spots">
              <div>
                {report.all.map((a) => (
                  <div key={a.lessonId} className={styles.areaRow}>
                    <span>{a.emoji}</span>
                    <Link to={`/micro-lessons/${a.lessonId}`} style={{ fontWeight: 600 }}>
                      {a.title}
                    </Link>
                    <Badge tone={a.accuracy < 75 ? "warning" : "primary"}>{a.accuracy}%</Badge>
                    <div className={styles.areaBar}>
                      <ProgressBar value={a.accuracy} label={a.title} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </>
      )}

      {report.fromMissions.length > 0 && (
        <Card title="From your missions">
          <p className="muted" style={{ marginTop: 0 }}>
            Skills you flagged as tricky while handling real situations:
          </p>
          <div className="row" style={{ flexWrap: "wrap", gap: "0.35rem" }}>
            {report.fromMissions.map((s) => (
              <Badge key={s} tone="warning">
                {s}
              </Badge>
            ))}
          </div>
        </Card>
      )}

      <p className="subtle">
        Browse all <Link to="/micro-lessons">micro-lessons</Link> — 2–5 minutes
        each, one problem at a time.
      </p>
    </div>
  );
}
