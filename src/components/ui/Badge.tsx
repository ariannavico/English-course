import type { ReactNode } from "react";
import styles from "./ui.module.css";

type Tone = "neutral" | "primary" | "success" | "danger" | "warning";

const toneClass: Record<Tone, string> = {
  neutral: "",
  primary: styles.badgePrimary,
  success: styles.badgeSuccess,
  danger: styles.badgeDanger,
  warning: styles.badgeWarning,
};

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return <span className={`${styles.badge} ${toneClass[tone]}`}>{children}</span>;
}
