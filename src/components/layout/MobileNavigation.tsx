import { NavLink } from "react-router-dom";
import { Icon } from "@/components/ui";
import { navItems } from "./navItems";
import styles from "./layout.module.css";

/** Bottom tab bar shown on small screens (spec §48). */
export function MobileNavigation() {
  const items = navItems.filter((i) => i.mobile);
  return (
    <nav className={styles.mobileNav} aria-label="Primary">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`
          }
        >
          <Icon name={item.icon} size={20} />
          {item.label.split(" ")[0]}
        </NavLink>
      ))}
    </nav>
  );
}
