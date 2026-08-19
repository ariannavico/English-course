import { Icon } from "@/components/ui";
import { useTheme } from "@/hooks/useTheme";
import { GlobalSearch } from "./GlobalSearch";
import { AccountMenu } from "./AccountMenu";
import styles from "./layout.module.css";

const themeIcon = { light: "sun", dark: "moon", system: "monitor" } as const;

export function Header({ onToggleMenu }: { onToggleMenu: () => void }) {
  const { theme, cycle } = useTheme();
  return (
    <header className={styles.header}>
      <button
        className={`${styles.menuBtn} ${styles.iconBtn ?? ""}`}
        onClick={onToggleMenu}
        aria-label="Open menu"
        style={{ background: "transparent", border: "none", cursor: "pointer", color: "inherit" }}
      >
        <Icon name="menu" size={22} />
      </button>
      <GlobalSearch />
      <div className={styles.headerActions}>
        <button
          onClick={cycle}
          aria-label={`Theme: ${theme}. Click to change.`}
          title={`Theme: ${theme}`}
          style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: 6, borderRadius: 8 }}
        >
          <Icon name={themeIcon[theme]} size={20} />
        </button>
        <AccountMenu />
      </div>
    </header>
  );
}
