import { useMemo } from "react";
import { Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProgressOverview } from "@/components/progress/ProgressOverview";
import { SkillProgress } from "@/components/progress/SkillProgress";
import { Streak } from "@/components/progress/Streak";
import { ReviewDue } from "@/components/progress/ReviewDue";
import { chapters, courseMap, exercises } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";
import { progressService } from "@/services";
import styles from "./pages.module.css";

export function DashboardPage() {
  const { progress } = useProgress();
  const { dueItems } = useSpacedRepetition();

  // "Continue Learning": the last-touched available chapter, else the first.
  const continueChapter = useMemo(() => {
    const started = chapters
      .filter((c) => progress.chapterProgress[c.id]?.started)
      .sort((a, b) => {
        const ta = progress.chapterProgress[a.id]?.lastAttempt ?? "";
        const tb = progress.chapterProgress[b.id]?.lastAttempt ?? "";
        return tb.localeCompare(ta);
      });
    return started[0] ?? chapters[0];
  }, [progress]);

  const weak = useMemo(() => progressService.weakAreas(exercises), [progress]);

  const availableCount = courseMap.filter((c) => c.status === "available").length;

  return (
    <div className="stack">
      <PageHeader
        title="Dashboard"
        description="Where you are, what to learn, and what to review."
      />

      <div className={styles.cardsGrid}>
        <Card title="Continue learning">
          <div className="stack">
            <div>
              <div className="subtle">Chapter {continueChapter.number}</div>
              <div style={{ fontWeight: 650, fontSize: "1.1rem" }}>
                {continueChapter.title}
              </div>
            </div>
            <p className="muted" style={{ margin: 0 }}>
              {continueChapter.description}
            </p>
            <LinkButton to={`/chapters/${continueChapter.id}`} variant="primary">
              {progress.chapterProgress[continueChapter.id]?.started ? "Resume" : "Start"}
            </LinkButton>
          </div>
        </Card>

        <Card title="Today's practice">
          <div className="stack">
            <p className="muted" style={{ margin: 0 }}>
              A mixed set built from your weak spots and items due for review.
            </p>
            <LinkButton to="/practice" variant="primary">
              Start {progress.overallStats.exercisesCompleted > 0 ? "practice" : "10 exercises"}
            </LinkButton>
          </div>
        </Card>

        <Card title="Review due">
          <ReviewDue count={dueItems.length} />
        </Card>

        <Card title="Streak">
          <Streak days={progress.streak} />
        </Card>
      </div>

      <Card title="Your progress">
        <ProgressOverview stats={progress.overallStats} />
      </Card>

      <Card title="Weak areas">
        <SkillProgress skills={weak} />
      </Card>

      <p className="subtle">
        {availableCount} of {courseMap.length} chapters are available in this build.
        More unlock as content is added — the architecture is already in place.
      </p>
    </div>
  );
}
