import type { ComponentType } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";

/**
 * Two surfaces on the same content sections:
 *  - Dashboard (/dashboard): progress per section + study & verify (/s/:section).
 *  - Explore (/explore): consult each section's content (/explore/:section).
 * Pages are code-split with route-level `lazy`.
 */

/**
 * Loads a lazy route module resiliently. After a new deploy, a tab that still has
 * the old index cached points at chunk hashes that no longer exist, so the dynamic
 * import fails ("Failed to fetch dynamically imported module"). We retry once for a
 * transient network blip, then force a single hard reload to pick up the fresh
 * index. The sessionStorage flag stops it from looping if the failure is real.
 */
function lazyRoute<T extends Record<string, unknown>>(
  load: () => Promise<T>,
  pick: (m: T) => ComponentType,
) {
  return async () => {
    const RELOAD_KEY = "chunk-reload-at";
    try {
      const mod = await load().catch(() => load()); // one silent retry
      sessionStorage.removeItem(RELOAD_KEY);
      return { Component: pick(mod) };
    } catch (err) {
      const last = Number(sessionStorage.getItem(RELOAD_KEY) ?? 0);
      // Only auto-reload once per 10s window, so a genuinely broken chunk can't loop.
      if (Date.now() - last > 10_000) {
        sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
        window.location.reload();
        return new Promise<never>(() => {}); // hang until the reload takes over
      }
      throw err;
    }
  };
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: "dashboard",
        lazy: lazyRoute(
          () => import("@/pages/LearningDashboardPage"),
          (m) => m.LearningDashboardPage,
        ),
      },
      {
        path: "s/:section",
        lazy: lazyRoute(() => import("@/pages/SectionPage"), (m) => m.SectionPage),
      },
      {
        path: "explore",
        lazy: lazyRoute(() => import("@/pages/ExplorePage"), (m) => m.ExplorePage),
      },
      {
        path: "review",
        lazy: lazyRoute(() => import("@/pages/ReviewPage"), (m) => m.ReviewPage),
      },
      {
        path: "explore/:section",
        lazy: lazyRoute(
          () => import("@/pages/ExploreSectionPage"),
          (m) => m.ExploreSectionPage,
        ),
      },
      {
        path: "*",
        lazy: lazyRoute(() => import("@/pages/NotFoundPage"), (m) => m.NotFoundPage),
      },
    ],
  },
]);
