import type { ReactNode } from "react";
import styles from "@/pages/pages.module.css";

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className={styles.pageHeader}>
      <div className="row" style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <h1 style={{ margin: 0 }}>{title}</h1>
        {actions}
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
