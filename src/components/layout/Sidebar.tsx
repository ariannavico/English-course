import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@/components/ui";
import { navItems } from "./navItems";
import styles from "./layout.module.css";

export function Sidebar({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
}) {
  return (
    <nav
      className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}
      aria-label="Main navigation"
    >
      <div className={styles.brand}>
        <img src="/icons/logo.svg" alt="" className={styles.brandLogo} />
        <span>English Trainer</span>
      </div>
      {navItems.map((item) => (
        <Fragment key={item.to}>
          {item.group && <div className={styles.navGroup}>{item.group}</div>}
          <NavLink
            to={item.to}
            end={item.to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            <Icon name={item.icon} size={18} />
            {item.label}
          </NavLink>
        </Fragment>
      ))}
    </nav>
  );
}
