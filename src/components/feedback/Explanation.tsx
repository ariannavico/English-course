import type { ReactNode } from "react";
import styles from "./feedback.module.css";

export function Explanation({ children }: { children: ReactNode }) {
  if (!children) return null;
  return (
    <div className={styles.explanation}>
      <span className={styles.explanationLabel}>Why</span>
      <p>{children}</p>
    </div>
  );
}
