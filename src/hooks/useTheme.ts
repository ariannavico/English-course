import { useEffect } from "react";
import type { ThemePreference } from "@/types";
import { useProgress } from "./useProgress";

const STORAGE_KEY = "eb1.theme";

function systemPrefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function apply(pref: ThemePreference): void {
  const dark = pref === "dark" || (pref === "system" && systemPrefersDark());
  document.documentElement.dataset.theme = dark ? "dark" : "light";
}

/**
 * Reads the theme preference from settings and keeps the <html data-theme>
 * attribute in sync. Mirrors the value to a dedicated key so the inline script
 * in index.html can avoid a flash before React mounts.
 */
export function useTheme() {
  const { settings, updateSettings } = useProgress();
  const theme = settings.theme;

  useEffect(() => {
    apply(theme);
    // Mirror for the pre-paint script.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));

    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = (next: ThemePreference) => updateSettings({ theme: next });
  const cycle = () => {
    const order: ThemePreference[] = ["light", "dark", "system"];
    setTheme(order[(order.indexOf(theme) + 1) % order.length]);
  };

  return { theme, setTheme, cycle };
}
