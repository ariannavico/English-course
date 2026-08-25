import type { UserSettings } from "@/types";

/**
 * Whether to show Italian (L1) scaffolding by default — the progressive
 * no-translation policy (spec §46). L1 support fades as the learner moves toward
 * B2: it's hidden when the learner turns off "Show Italian", switches on the
 * explicit no-translation mode, OR turns on B2 Mode (which §47 says reduces
 * translations). On-demand "show hint" buttons still work regardless.
 */
export function showItalianL1(
  settings: Pick<UserSettings, "showItalian" | "hideTranslations" | "b2Mode">,
): boolean {
  return settings.showItalian && !settings.hideTranslations && !settings.b2Mode;
}
