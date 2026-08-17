import { useState } from "react";
import { Badge, Button, Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { b2Practical } from "@/data/assessment";
import { assessmentService } from "@/services";
import { AssessmentRunner } from "@/features/assessment/AssessmentRunner";
import { COMPETENCE_LABEL } from "@/features/assessment/types";

/** B2 Practical Assessment (spec §48). */
export function AssessmentPage() {
  const [started, setStarted] = useState(false);
  const last = assessmentService.loadLast();

  if (started) {
    return (
      <div className="stack">
        <PageHeader title={b2Practical.title} />
        <AssessmentRunner assessment={b2Practical} />
      </div>
    );
  }

  const covered = [...new Set(b2Practical.tasks.map((t) => COMPETENCE_LABEL[t.competence]))];

  return (
    <div className="stack">
      <PageHeader title="B2 Practical Assessment" description={b2Practical.description} />

      {last && (
        <Card title="Your last result">
          <div className="row" style={{ gap: "0.6rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.8rem", fontWeight: 750, color: "var(--primary)" }}>
              {last.report.band}
            </span>
            <span className="muted">
              {last.report.overall}% · {new Date(last.takenAt).toLocaleDateString()}
            </span>
          </div>
          <p className="muted" style={{ marginBottom: 0 }}>{last.report.readiness}</p>
        </Card>
      )}

      <Card title="What it covers">
        <div className="row" style={{ flexWrap: "wrap", gap: "0.35rem" }}>
          {covered.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>
        <p className="muted" style={{ marginTop: "1rem" }}>
          {b2Practical.tasks.length} short tasks, ~15 minutes. You'll get a readiness
          report scored per competence — an internal estimate, <strong>not a CEFR
          certification</strong>. Speaking is self-assessed against a model answer.
        </p>
        <Button variant="primary" onClick={() => setStarted(true)}>
          {last ? "Take it again" : "Start the assessment"}
        </Button>
      </Card>
    </div>
  );
}
