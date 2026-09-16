import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";

/**
 * Two surfaces on the same content sections:
 *  - Dashboard (/dashboard): progress per section + study & verify (/s/:section).
 *  - Explore (/explore): consult each section's content (/explore/:section).
 * Pages are code-split with route-level `lazy`.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: "dashboard",
        lazy: () =>
          import("@/pages/LearningDashboardPage").then((m) => ({ Component: m.LearningDashboardPage })),
      },
      {
        path: "s/:section",
        lazy: () => import("@/pages/SectionPage").then((m) => ({ Component: m.SectionPage })),
      },
      {
        path: "explore",
        lazy: () => import("@/pages/ExplorePage").then((m) => ({ Component: m.ExplorePage })),
      },
      {
        path: "explore/:section",
        lazy: () =>
          import("@/pages/ExploreSectionPage").then((m) => ({ Component: m.ExploreSectionPage })),
      },
      {
        path: "*",
        lazy: () => import("@/pages/NotFoundPage").then((m) => ({ Component: m.NotFoundPage })),
      },
    ],
  },
]);
