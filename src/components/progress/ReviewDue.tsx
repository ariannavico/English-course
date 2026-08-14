import { Icon, LinkButton } from "@/components/ui";
import styles from "./progress.module.css";

/** "Review due" summary card content (spec §32). */
export function ReviewDue({ count }: { count: number }) {
  return (
    <div className={styles.streak}>
      <Icon name="repeat" size={26} />
      <div style={{ flex: 1 }}>
        <div className={styles.streakNum}>{count}</div>
        <div className="subtle">item{count === 1 ? "" : "s"} to review</div>
      </div>
      <LinkButton to="/review" variant={count > 0 ? "primary" : "ghost"}>
        {count > 0 ? "Review now" : "All clear"}
      </LinkButton>
    </div>
  );
}
