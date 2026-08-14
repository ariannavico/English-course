import type { SVGProps } from "react";

/**
 * Minimal inline icon set (stroke style, currentColor). Avoids an external icon
 * dependency and the "random emoji as UI" anti-pattern. Add glyphs as needed.
 */
export type IconName =
  | "home"
  | "book"
  | "repeat"
  | "layers"
  | "grid"
  | "alert"
  | "list"
  | "settings"
  | "search"
  | "close"
  | "chevron"
  | "check"
  | "flame"
  | "sun"
  | "moon"
  | "monitor"
  | "menu"
  | "target"
  | "arrow-right";

const PATHS: Record<IconName, string> = {
  home: "M3 11l9-8 9 8M5 10v10h14V10",
  book: "M4 4h11a3 3 0 013 3v13H7a3 3 0 01-3-3V4zM4 4v13",
  repeat: "M17 2l4 4-4 4M3 11V9a4 4 0 014-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 01-4 4H3",
  layers: "M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  alert: "M12 3l9 16H3l9-16zM12 10v4M12 17h.01",
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  settings:
    "M12 15a3 3 0 100-6 3 3 0 000 6zM19 12a7 7 0 00-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 00-1.7-1l-.3-2.6H9.5l-.3 2.6a7 7 0 00-1.7 1l-2.4-1-2 3.4L3 11a7 7 0 000 2l-2 1.6 2 3.4 2.4-1a7 7 0 001.7 1l.3 2.6h4l.3-2.6a7 7 0 001.7-1l2.4 1 2-3.4-2-1.6a7 7 0 00.1-1z",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
  close: "M6 6l12 12M18 6L6 18",
  chevron: "M9 6l6 6-6 6",
  check: "M20 6L9 17l-5-5",
  flame: "M12 3c1 3-2 4-2 7a2 2 0 004 0c0-1 0-2-.5-3 2 1.5 3.5 3.5 3.5 6a5 5 0 01-10 0c0-4 4-6 5-10z",
  sun: "M12 4V2M12 22v-2M4 12H2M22 12h-2M6 6L4.5 4.5M19.5 19.5L18 18M18 6l1.5-1.5M4.5 19.5L6 18M12 8a4 4 0 100 8 4 4 0 000-8z",
  moon: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z",
  monitor: "M3 4h18v12H3zM8 20h8M12 16v4",
  menu: "M3 6h18M3 12h18M3 18h18",
  target: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 15a3 3 0 100-6 3 3 0 000 6z",
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  title?: string;
}

export function Icon({ name, size = 20, title, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...rest}
    >
      {title && <title>{title}</title>}
      <path d={PATHS[name]} />
    </svg>
  );
}
