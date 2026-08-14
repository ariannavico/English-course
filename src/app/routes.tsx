import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";

/**
 * Pages are code-split with React Router's route-level `lazy`: each page module
 * is its own JS chunk, fetched only when the route is visited. The router
 * resolves the module before rendering the route (no synchronous Suspense),
 * while the eager AppShell (frame + providers) stays on screen throughout.
 * Named exports are mapped to the route's `Component`.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        lazy: () => import("@/pages/DashboardPage").then((m) => ({ Component: m.DashboardPage })),
      },
      {
        path: "chapters",
        lazy: () => import("@/pages/ChaptersPage").then((m) => ({ Component: m.ChaptersPage })),
      },
      {
        path: "chapters/:chapterId",
        lazy: () => import("@/pages/ChapterPage").then((m) => ({ Component: m.ChapterPage })),
      },
      {
        path: "practice",
        lazy: () =>
          import("@/pages/DailyPracticePage").then((m) => ({ Component: m.DailyPracticePage })),
      },
      {
        path: "review",
        lazy: () => import("@/pages/ReviewPage").then((m) => ({ Component: m.ReviewPage })),
      },
      {
        path: "verbs",
        lazy: () =>
          import("@/pages/VerbExplorerPage").then((m) => ({ Component: m.VerbExplorerPage })),
      },
      {
        path: "verbs/:verbId",
        lazy: () => import("@/pages/VerbDetailPage").then((m) => ({ Component: m.VerbDetailPage })),
      },
      {
        path: "phrasal-verbs",
        lazy: () => import("@/pages/PhrasalVerbPage").then((m) => ({ Component: m.PhrasalVerbPage })),
      },
      {
        path: "vocabulary",
        lazy: () => import("@/pages/VocabularyPage").then((m) => ({ Component: m.VocabularyPage })),
      },
      {
        path: "irregular-verbs",
        lazy: () =>
          import("@/pages/IrregularVerbsPage").then((m) => ({ Component: m.IrregularVerbsPage })),
      },
      {
        path: "mistakes",
        lazy: () => import("@/pages/MistakesPage").then((m) => ({ Component: m.MistakesPage })),
      },
      {
        path: "exam",
        lazy: () => import("@/pages/FinalExamPage").then((m) => ({ Component: m.FinalExamPage })),
      },
      {
        path: "settings",
        lazy: () => import("@/pages/SettingsPage").then((m) => ({ Component: m.SettingsPage })),
      },
      {
        path: "*",
        lazy: () => import("@/pages/NotFoundPage").then((m) => ({ Component: m.NotFoundPage })),
      },
    ],
  },
]);
