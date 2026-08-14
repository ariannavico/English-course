import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { MobileNavigation } from "./MobileNavigation";
import { PageLoading } from "./PageLoading";
import styles from "./layout.module.css";

/** App frame: sidebar + header + routed content + mobile bottom nav. */
export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.shell}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {menuOpen && (
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} aria-hidden />
      )}
      <Sidebar open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      <div className={styles.main}>
        <Header onToggleMenu={() => setMenuOpen((v) => !v)} />
        <main id="main-content" className={styles.content}>
          <Suspense fallback={<PageLoading />}>
            <Outlet />
          </Suspense>
        </main>
        <MobileNavigation />
      </div>
    </div>
  );
}
