import { useMemo, useState } from "react";
import { Button, Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { ExerciseSession } from "@/components/exercises/ExerciseSession";
import { exercises } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { exerciseService } from "@/services";

/**
 * Daily practice: a fresh, priority-weighted, varied set each time (spec §30).
 * "Regenerate" reshuffles so the same items don't appear in the same order.
 */
export function DailyPracticePage() {
  const { progress, settings } = useProgress();
  const [seed, setSeed] = useState(0);
  const [key, setKey] = useState(0);

  const session = useMemo(
    () =>
      exerciseService.buildDailySession(progress, {
        size: settings.dailyGoal,
        pool: exercises,
        b2Mode: settings.b2Mode,
      }),
    // seed forces a fresh selection; progress keeps priorities current
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed, settings.dailyGoal, settings.b2Mode],
  );

  return (
    <div className="stack">
      <PageHeader
        title="Daily practice"
        description={
          settings.b2Mode
            ? `Your ${settings.dailyGoal}-exercise set — B2 Mode: production first.`
            : `Your ${settings.dailyGoal}-exercise set, built from weak spots and due reviews.`
        }
        actions={
          <Button
            onClick={() => {
              setSeed((s) => s + 1);
              setKey((k) => k + 1);
            }}
          >
            Regenerate
          </Button>
        }
      />
      {session.length === 0 ? (
        <Card>
          <p className="muted">No exercises available.</p>
        </Card>
      ) : (
        <ExerciseSession key={key} exercises={session} title="Daily" />
      )}
    </div>
  );
}
