import styles from "./ui.module.css";
import { clamp } from "@/utils/scoring";

interface ProgressBarProps {
  value: number; // 0..100
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const pct = clamp(Math.round(value), 0, 100);
  return (
    <div
      className={styles.progress}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className={styles.progressFill} style={{ width: `${pct}%` }} />
    </div>
  );
}
