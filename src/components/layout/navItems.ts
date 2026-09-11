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
 * Single source of truth for navigation. The app has two surfaces on the same
 * content sections: the Dashboard (progress + study & verify) and Explore
 * (consult the content). Everything else was removed in the cleanup.
 */
export const navItems: NavItem[] = [
  { to: "/dashboard", label: "Dashboard", icon: "monitor", mobile: true },
  { to: "/explore", label: "Explore", icon: "book", mobile: true },
];
