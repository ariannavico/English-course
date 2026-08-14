import { useMemo } from "react";
import { Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProgressOverview } from "@/components/progress/ProgressOverview";
import { SkillProgress } from "@/components/progress/SkillProgress";
import { Streak } from "@/components/progress/Streak";
import { exercises } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { progressService } from "@/services";
import { useMissions } from "@/features/missions/useMissions";
import styles from "./pages.module.css";

/**
 * My Progress. Today it shows overall stats, weak areas, streak and missions.
 * This is where the multi-dimensional B2 Skill Map will live (next slice).
 */
export function ProgressPage() {
  const { progress } = useProgress();
  const { progress: missionProgress } = useMissions();
  const weak = useMemo(() => progressService.weakAreas(exercises), [progress]);

  return (
    <div className="stack">
      <PageHeader
        title="My Progress"
        description="What you've mastered and what's holding you back — more useful than hours studied."
      />

      <div className={styles.cardsGrid}>
        <Card title="Streak">
          <Streak days={progress.streak} />
        </Card>
        <Card title="Missions completed">
          <div className="row" style={{ gap: "0.6rem" }}>
            <span style={{ fontSize: "2rem", fontWeight: 750 }}>
              {missionProgress.completed.length}
            </span>
            <span className="muted">real situations handled</span>
          </div>
        </Card>
      </div>

      <Card title="Overall">
        <ProgressOverview stats={progress.overallStats} />
      </Card>

      <Card title="Weak areas">
        <SkillProgress skills={weak} />
      </Card>

      <p className="subtle">
        A full B2 Skill Map (Grammar · Vocabulary · Verbs · Listening · Speaking ·
        Fluency · Paraphrasing · Argumentation) is coming — it will read from the
        same signals your missions and exercises already record.
      </p>
    </div>
  );
}
