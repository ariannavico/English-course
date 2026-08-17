import type { IconName } from "@/components/ui";

export interface NavItem {
  to: string;
  label: string;
  icon: IconName;
  /** Optional group heading shown above this item in the sidebar. */
  group?: string;
  /** Show in the compact mobile bottom bar. */
  mobile?: boolean;
}

/**
 * Single source of truth for navigation, shared by sidebar and mobile bar.
 * Task-first (spec §49): Practice actions on top, Explore/Content below, Progress
 * apart. The old chapters live under "Content" — present, but not the headline.
 */
export const navItems: NavItem[] = [
  { to: "/", label: "Home", icon: "home", mobile: true },

  { to: "/missions", label: "Missions", icon: "target", group: "Practice", mobile: true },
  { to: "/fluency", label: "Fluency", icon: "flame" },
  { to: "/paraphrase", label: "Paraphrase", icon: "repeat" },
  { to: "/argumentation", label: "Build Your Case", icon: "layers" },
  { to: "/story", label: "Story Mode", icon: "book" },
  { to: "/verb-lab", label: "Verb Lab", icon: "grid" },
  { to: "/practice", label: "Quick Practice", icon: "grid", mobile: true },
  { to: "/review", label: "Review", icon: "repeat", mobile: true },

  { to: "/verbs", label: "Verbs", icon: "book", group: "Explore" },
  { to: "/phrasal-verbs", label: "Phrasal Verbs", icon: "layers" },
  { to: "/vocabulary", label: "Vocabulary", icon: "list" },
  { to: "/irregular-verbs", label: "Irregular Verbs", icon: "layers" },

  { to: "/chapters", label: "Chapters", icon: "book", group: "Content" },

  { to: "/progress", label: "My Progress", icon: "monitor", group: "Progress", mobile: true },
  { to: "/weaknesses", label: "Weaknesses", icon: "target" },
  { to: "/micro-lessons", label: "Micro-lessons", icon: "check" },
  { to: "/mistakes", label: "My Mistakes", icon: "alert" },

  { to: "/assessment", label: "B2 Assessment", icon: "check", group: "Assess" },

  { to: "/settings", label: "Settings", icon: "settings" },
];
