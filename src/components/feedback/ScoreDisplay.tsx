import { Badge } from "@/components/ui";
import { VERDICT_LABEL, chapterVerdict } from "@/utils/scoring";
import styles from "./feedback.module.css";

const toneForVerdict = {
  ready: "success",
  "light-review": "primary",
  review: "warning",
  repeat: "danger",
} as const;

/** Final session/chapter score with a coarse verdict badge (spec §47). */
export function ScoreDisplay({
  earned,
  total,
  percent,
}: {
  earned: number;
  total: number;
  percent: number;
}) {
  const verdict = chapterVerdict(percent);
  return (
    <div className={styles.score}>
      <div className={styles.scoreValue}>{percent}%</div>
      <div className={styles.scoreMeta}>
        <div>
          {earned} / {total} points
        </div>
        <Badge tone={toneForVerdict[verdict]}>{VERDICT_LABEL[verdict]}</Badge>
      </div>
    </div>
  );
}
