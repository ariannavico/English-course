import type { ReactNode } from "react";
import styles from "./ui.module.css";

interface CardProps {
  children: ReactNode;
  title?: ReactNode;
  actions?: ReactNode;
  padding?: boolean;
  className?: string;
}

export function Card({
  children,
  title,
  actions,
  padding = true,
  className = "",
}: CardProps) {
  return (
    <section
      className={`${styles.card} ${padding ? "" : styles.cardPad0} ${className}`}
    >
      {(title || actions) && (
        <header className={styles.cardHeader}>
          {title && <h2 className={styles.cardTitle}>{title}</h2>}
          {actions}
        </header>
      )}
      {children}
    </section>
  );
}
