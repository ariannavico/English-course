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
 * Single source of truth for navigation, shared by sidebar and mobile bar
 * (spec §49). As the B2 environment grew to ~20 trainers, a single "Practice"
 * list became unusable, so the practice modules are grouped by SKILL —
 * Speaking / Words & verbs / Listening / Writing — under a task-first order:
 * the daily loop (Practice) first, skills next, then Explore, Content, Progress
 * and Assess. The mobile bar keeps only the five everyday actions.
 */
export const navItems: NavItem[] = [
  { to: "/", label: "Home", icon: "home", mobile: true },

  // The daily loop.
  { to: "/missions", label: "Missions", icon: "target", group: "Practice", mobile: true },
  { to: "/practice", label: "Quick Practice", icon: "grid", mobile: true },
  { to: "/review", label: "Review", icon: "repeat", mobile: true },
  { to: "/story", label: "Story Mode", icon: "book" },

  // Speaking & interaction.
  { to: "/fluency", label: "Fluency", icon: "flame", group: "Speaking" },
  { to: "/argumentation", label: "Build Your Case", icon: "layers" },
  { to: "/social", label: "Keep It Going", icon: "target" },

  // Words & verbs.
  { to: "/verb-lab", label: "Verb Lab", icon: "grid", group: "Words & verbs" },
  { to: "/collocations", label: "Speak in Chunks", icon: "layers" },
  { to: "/paraphrase", label: "Paraphrase", icon: "repeat" },
  { to: "/natural", label: "Sound Natural", icon: "flame" },

  // Listening.
  { to: "/listening", label: "Train Your Ear", icon: "monitor", group: "Listening" },
  { to: "/real-talk", label: "Real Talk", icon: "list" },

  // Writing & register.
  { to: "/writing", label: "Writing Studio", icon: "list", group: "Writing" },
  { to: "/register", label: "Register Lab", icon: "layers" },

  // Reference content.
  { to: "/verbs", label: "Verbs", icon: "book", group: "Explore" },
  { to: "/phrasal-verbs", label: "Phrasal Verbs", icon: "layers" },
  { to: "/vocabulary", label: "Vocabulary", icon: "list" },
  { to: "/irregular-verbs", label: "Irregular Verbs", icon: "layers" },
  { to: "/chapters", label: "Chapters", icon: "book" },

  // Progress & diagnosis.
  { to: "/progress", label: "My Progress", icon: "monitor", group: "Progress", mobile: true },
  { to: "/weaknesses", label: "Weaknesses", icon: "target" },
  { to: "/micro-lessons", label: "Micro-lessons", icon: "check" },
  { to: "/mistakes", label: "My Mistakes", icon: "alert" },

  // Placement & assessment.
  { to: "/placement", label: "Find Your Level", icon: "target", group: "Assess" },
  { to: "/assessment", label: "B2 Assessment", icon: "check" },

  { to: "/settings", label: "Settings", icon: "settings" },
];
