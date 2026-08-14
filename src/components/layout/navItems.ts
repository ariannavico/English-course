import type { IconName } from "@/components/ui";

export interface NavItem {
  to: string;
  label: string;
  icon: IconName;
  /** Show in the compact mobile bottom bar. */
  mobile?: boolean;
}

/** Single source of truth for navigation, shared by sidebar and mobile bar. */
export const navItems: NavItem[] = [
  { to: "/", label: "Dashboard", icon: "home", mobile: true },
  { to: "/chapters", label: "Chapters", icon: "book", mobile: true },
  { to: "/practice", label: "Daily Practice", icon: "target", mobile: true },
  { to: "/review", label: "Review", icon: "repeat", mobile: true },
  { to: "/verbs", label: "Verb Explorer", icon: "grid" },
  { to: "/phrasal-verbs", label: "Phrasal Verbs", icon: "layers" },
  { to: "/vocabulary", label: "Vocabulary", icon: "list" },
  { to: "/irregular-verbs", label: "Irregular Verbs", icon: "layers" },
  { to: "/mistakes", label: "My Mistakes", icon: "alert" },
  { to: "/settings", label: "Settings", icon: "settings", mobile: true },
];
