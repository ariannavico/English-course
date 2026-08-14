import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui";
import { Icon } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { PART_TITLES, courseMap, type CourseEntry } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import styles from "./pages.module.css";

/** The full 30-chapter syllabus, grouped by part (spec §37). */
export function ChaptersPage() {
  const { progress } = useProgress();

  let currentPart = 0;

  return (
    <div className="stack">
      <PageHeader
        title="Chapters"
        description="From A2 foundations to a B1 final exam, in five parts."
      />
      <div className={styles.list}>
        {courseMap.map((entry) => {
          const showHeading = entry.part !== currentPart;
          currentPart = entry.part;
          return (
            <Fragment key={entry.id}>
              {showHeading && (
                <div className={styles.partHeading}>{PART_TITLES[entry.part]}</div>
              )}
              <ChapterTile
                entry={entry}
                completed={progress.completedChapters.includes(entry.id)}
                percent={progress.chapterProgress[entry.id]?.progressPercent ?? 0}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function ChapterTile({
  entry,
  completed,
  percent,
}: {
  entry: CourseEntry;
  completed: boolean;
  percent: number;
}) {
  const label =
    entry.kind === "chapter"
      ? `Chapter ${entry.number}`
      : entry.kind === "review"
        ? "Review"
        : "Exam";

  const inner = (
    <div className={styles.tileRow}>
      <div>
        <div className="subtle">{label}</div>
        <div className={styles.tileTitle}>{entry.title}</div>
      </div>
      <div className="row">
        {completed && <Badge tone="success">Done</Badge>}
        {!completed && percent > 0 && <Badge tone="primary">{percent}%</Badge>}
        {entry.status === "planned" ? (
          <Badge>Soon</Badge>
        ) : (
          <Icon name="arrow-right" size={18} />
        )}
      </div>
    </div>
  );

  if (entry.status !== "available") {
    return (
      <div className={`${styles.tile} ${styles.tileLocked}`} aria-disabled>
        {inner}
      </div>
    );
  }
  return (
    <Link to={`/chapters/${entry.id}`} className={styles.tile}>
      {inner}
    </Link>
  );
}
