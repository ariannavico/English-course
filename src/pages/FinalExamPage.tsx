import { Badge, Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import styles from "./pages.module.css";

/**
 * Overview for the cumulative B1 exam (spec §46). The exam itself is a playable
 * chapter ("exam-final") reached via the button below; this page explains what
 * it covers. Speaking is intentionally not auto-scored.
 */
const COMPETENCES: { name: string; status: "included" | "planned" | "self" }[] = [
  { name: "Grammar", status: "included" },
  { name: "Verb usage", status: "included" },
  { name: "Tense choice", status: "included" },
  { name: "Irregular verbs", status: "included" },
  { name: "Phrasal verbs", status: "included" },
  { name: "Vocabulary", status: "included" },
  { name: "Reading", status: "planned" },
  { name: "Writing", status: "planned" },
  { name: "Speaking", status: "self" },
];

export function FinalExamPage() {
  return (
    <div className="stack">
      <PageHeader
        title="B1 Final Exam"
        description="A cumulative test scored per competence — an internal indicator, not a CEFR certification."
      />
      <Card title="What it covers">
        <div className={styles.list}>
          {COMPETENCES.map((c) => (
            <div key={c.name} className={styles.tileRow}>
              <span>{c.name}</span>
              {c.status === "included" ? (
                <Badge tone="success">included</Badge>
              ) : c.status === "self" ? (
                <Badge tone="warning">self-assessed</Badge>
              ) : (
                <Badge>planned</Badge>
              )}
            </div>
          ))}
        </div>
        <p className="muted" style={{ marginTop: "1rem" }}>
          Ten fresh questions across grammar, verb usage, tense choice, irregular
          verbs, phrasal verbs and vocabulary. Finish the whole set to get your
          score. Reading and writing sections will follow; speaking is
          self-assessed.
        </p>
        <div className="row" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
          <LinkButton to="/chapters/exam-final" variant="primary">
            Start the exam
          </LinkButton>
          <LinkButton to="/chapters/chapter-29">Warm up with the Marathon</LinkButton>
        </div>
      </Card>
    </div>
  );
}
