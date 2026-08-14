import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { ReviewRating, SpacedRepetitionItem } from "@/types";
import { Badge, Button, Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { ExerciseSession } from "@/components/exercises/ExerciseSession";
import { exercises, getVerb } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";
import { spacedRepetitionService } from "@/services";
import { relativeLabel } from "@/utils/dates";

const RATINGS: { key: ReviewRating; label: string; tone: "danger" | "warning" | "primary" | "success" }[] = [
  { key: "again", label: "Again", tone: "danger" },
  { key: "hard", label: "Hard", tone: "warning" },
  { key: "good", label: "Good", tone: "primary" },
  { key: "easy", label: "Easy", tone: "success" },
];

/**
 * Review hub. Seeds SR items from studied verbs, lets the learner rate due
 * items (the SR loop, spec §28), and runs a cumulative mixed practice set
 * prioritised by weakness and overdue-ness (spec §31, §42).
 */
export function ReviewPage() {
  const { progress } = useProgress();
  const { dueItems, recordReview } = useSpacedRepetition();
  const [, force] = useState(0);

  // Seed SR items for verbs the learner has viewed but that aren't scheduled yet.
  useMemo(() => {
    for (const vp of Object.values(progress.verbProgress)) {
      if (vp.viewed) spacedRepetitionService.ensure(vp.verbId, "verb");
    }
  }, [progress.verbProgress]);

  const due = dueItems.length > 0 ? dueItems : spacedRepetitionService.getAll();

  // Cumulative review pool: everything attempted so far, weakest surfaced by the
  // session runner. Falls back to all exercises when nothing attempted yet.
  const reviewPool = useMemo(() => {
    const attempted = exercises.filter((e) => progress.exerciseProgress[e.id]);
    return attempted.length > 0 ? attempted : exercises;
  }, [progress.exerciseProgress]);

  function rate(item: SpacedRepetitionItem, rating: ReviewRating) {
    recordReview(item.id, item.type, rating);
    force((n) => n + 1);
  }

  return (
    <div className="stack">
      <PageHeader
        title="Review"
        description="Cumulative review — old material comes back before new material piles up."
      />

      <Card title={`Due for review (${dueItems.length})`}>
        {due.length === 0 ? (
          <p className="muted">Nothing scheduled yet. Study a verb to start the loop.</p>
        ) : (
          <div className="stack">
            {due.slice(0, 8).map((item) => {
              const verb = getVerb(item.id);
              return (
                <div
                  key={item.id}
                  className="row"
                  style={{ justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  <div>
                    <strong>{verb ? verb.infinitive : item.id}</strong>{" "}
                    <Badge>{item.type}</Badge>{" "}
                    <span className="subtle">next: {relativeLabel(item.nextReview)}</span>
                  </div>
                  <div className="row" role="group" aria-label={`Rate ${item.id}`}>
                    {RATINGS.map((r) => (
                      <Button key={r.key} size="sm" onClick={() => rate(item, r.key)}>
                        {r.label}
                      </Button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      <Card title="Mixed review practice">
        <p className="muted" style={{ marginTop: 0 }}>
          A blend across everything you've seen — the exercise doesn't tell you
          which rule it's testing.
        </p>
        <ExerciseSession exercises={reviewPool.slice(0, 8)} title="Review" />
      </Card>

      <p className="subtle">
        Want a fresh set? <Link to="/practice">Daily practice</Link> builds a new
        session each time.
      </p>
    </div>
  );
}
