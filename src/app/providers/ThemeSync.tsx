import { useTheme } from "@/hooks/useTheme";

/** Headless component: activates the theme effect. Renders nothing. */
export function ThemeSync() {
  useTheme();
  return null;
}
