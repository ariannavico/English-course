import { useState } from "react";
import { Link } from "react-router-dom";
import type { MicroLesson } from "./types";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { getExercises } from "@/data";
import { ExerciseSession } from "@/components/exercises/ExerciseSession";
import styles from "@/features/weaknesses/weaknesses.module.css";

/**
 * A 2–5 minute micro-lesson (spec §42): read the fix, then practise it right
 * away with real exercises — the loop's "micro-lesson → practice" steps (§43).
 */
export function MicroLessonView({ lesson }: { lesson: MicroLesson }) {
  const [practising, setPractising] = useState(false);
  const exercises = getExercises(lesson.practiceExerciseIds);

  return (
    <div className="stack">
      <Card
        title={
          <span className="row" style={{ gap: "0.5rem" }}>
            <span>{lesson.emoji}</span> {lesson.title}
          </span>
        }
        actions={<Badge tone="primary">{lesson.minutes} min</Badge>}
      >
        <p className="muted" style={{ marginTop: 0 }}>
          {lesson.problem}
        </p>

        {lesson.explanation.map((block, i) => (
          <div key={i} className={styles.lessonBlock}>
            <p style={{ margin: 0 }}>{block.text}</p>
            {block.examples?.map((ex, j) => (
              <div key={j} className={styles.ex}>
                {ex}
              </div>
            ))}
          </div>
        ))}

        <div className={styles.rule} style={{ marginTop: "1rem" }}>
          <Icon name="check" size={16} /> {lesson.keyRule}
        </div>

        {lesson.relatedUniverse && (
          <p style={{ marginTop: "0.85rem", marginBottom: 0 }}>
            <Link to={`/verb-lab/${lesson.relatedUniverse}`}>
              Explore the {lesson.relatedUniverse.toUpperCase()} universe →
            </Link>
          </p>
        )}
      </Card>

      {!practising ? (
        <Card title="Now practise it">
          <div className="stack">
            <p className="muted" style={{ margin: 0 }}>
              {exercises.length} quick question{exercises.length === 1 ? "" : "s"} to lock it in
              while it's fresh.
            </p>
            <div>
              <Button variant="primary" onClick={() => setPractising(true)}>
                Start practice
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <ExerciseSession exercises={exercises} title={lesson.title} />
      )}
    </div>
  );
}
