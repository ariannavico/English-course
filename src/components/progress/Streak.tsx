import { Icon } from "@/components/ui";
import styles from "./progress.module.css";

export function Streak({ days }: { days: number }) {
  return (
    <div className={styles.streak}>
      <Icon name="flame" size={28} className={styles.streakFlame} />
      <div>
        <div className={styles.streakNum}>{days}</div>
        <div className="subtle">day{days === 1 ? "" : "s"} in a row</div>
      </div>
    </div>
  );
}
