import type { ReactNode } from "react";
import { ProgressProvider } from "./ProgressProvider";
import { ThemeSync } from "./ThemeSync";

/** Wraps the app in all top-level providers. Add new providers here. */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider>
      <ThemeSync />
      {children}
    </ProgressProvider>
  );
}
