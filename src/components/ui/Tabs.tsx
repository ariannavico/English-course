import { useId, useState, type ReactNode } from "react";
import styles from "./ui.module.css";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

/** Accessible tab set (roving with arrow keys handled by native buttons + roles). */
export function Tabs({ items, initialId }: { items: TabItem[]; initialId?: string }) {
  const [active, setActive] = useState(initialId ?? items[0]?.id);
  const baseId = useId();

  return (
    <div>
      <div className={styles.tabList} role="tablist">
        {items.map((t) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              id={`${baseId}-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      {items.map((t) =>
        t.id === active ? (
          <div
            key={t.id}
            role="tabpanel"
            id={`${baseId}-panel-${t.id}`}
            aria-labelledby={`${baseId}-tab-${t.id}`}
            className={styles.tabPanel}
          >
            {t.content}
          </div>
        ) : null,
      )}
    </div>
  );
}
