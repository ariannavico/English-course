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
import { SkillMap } from "@/features/skillMap/SkillMap";
import styles from "./pages.module.css";

/**
 * My Progress, led by the unified B2 Skill Map — one multi-dimensional read of
 * where the learner stands, backed by the streak, overall stats and weak areas.
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

      <SkillMap />

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

      <Card title="Weak areas (by tag)">
        <SkillProgress skills={weak} />
      </Card>
    </div>
  );
}
