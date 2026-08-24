import type { IsoDate } from "./common";

export type ThemePreference = "light" | "dark" | "system";

export interface UserSettings {
  theme: ThemePreference;
  /** Show Italian glosses alongside English by default. */
  showItalian: boolean;
  /** Number of exercises in a daily practice session. */
  dailyGoal: number;
  /** Reduce animation / motion. */
  reducedMotion: boolean;
  /**
   * B2 Mode (spec §47): shift practice toward PRODUCTION — daily sessions prefer
   * open-output exercises (fill, correction, sentence-building, situations) and
   * push recognition (multiple-choice) and translation to the back.
   */
  b2Mode: boolean;
}

/** A mistake the learner manually logs to revisit later. */
export interface UserMistake {
  id: string;
  incorrect: string;
  correct: string;
  explanation: string;
  category:
    | "grammar"
    | "verb"
    | "phrasal-verb"
    | "vocabulary"
    | "preposition"
    | "other";
  createdAt: IsoDate;
  reviewCount: number;
  lastReviewed?: IsoDate;
}
