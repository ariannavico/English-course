import { Link } from "react-router-dom";
import { Badge, Card, Icon } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { microLessons } from "@/data/microLessons";
import styles from "@/features/weaknesses/weaknesses.module.css";

/** All micro-lessons (spec §42) — quick, single-problem fixes. */
export function MicroLessonsPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Micro-lessons"
        description="Two to five minutes, one problem each. Read the fix, then practise it straight away."
      />
      <Card>
        <div>
          {microLessons.map((l) => (
            <div key={l.id} className={styles.areaRow}>
              <span>{l.emoji}</span>
              <Link to={`/micro-lessons/${l.id}`} style={{ fontWeight: 600 }}>
                {l.title}
                <span className="subtle" style={{ display: "block", fontWeight: 400 }}>
                  {l.problem}
                </span>
              </Link>
              <span className="row" style={{ gap: "0.4rem" }}>
                <Badge>{l.minutes} min</Badge>
                <Icon name="arrow-right" size={18} />
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
