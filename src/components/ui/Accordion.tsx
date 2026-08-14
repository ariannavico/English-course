import { useState, type ReactNode } from "react";
import styles from "./ui.module.css";
import { Icon } from "./Icon";

export interface AccordionItemData {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

export function Accordion({
  items,
  defaultOpenId,
}: {
  items: AccordionItemData[];
  defaultOpenId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div>
      {items.map((item) => {
        const open = item.id === openId;
        return (
          <div key={item.id} className={styles.accItem}>
            <button
              className={styles.accTrigger}
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span>{item.title}</span>
              <Icon
                name="chevron"
                size={18}
                className={`${styles.accChevron} ${open ? styles.accChevronOpen : ""}`}
              />
            </button>
            {open && <div className={styles.accBody}>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
