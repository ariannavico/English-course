import type { IsoDate } from "./common";

/**
 * The Second-Release content model (feat/second-release, Phase 1). Every section
 * of the app — grammar chapters, verb categories, vocabulary themes, adjective
 * sets… — is a collection of UNITS that share one status/metadata shape, so
 * progress and free-choice study work identically everywhere. This is the
 * catalog + progress side; the Review side lives in ./review.
 *
 * NOTE: this deliberately uses its own full CEFR range `Level` (A1..C2) rather
 * than the legacy `CefrLevel` (A2/A2+/B1), which existing content still depends
 * on. The two coexist until the content migration (Phase 2).
 */

export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

/** The content sections that own studiable units. */
export type SectionKind =
  | "grammar"
  | "verbs"
  | "irregular"
  | "phrasal"
  | "vocabulary"
  | "adjectives"
  | "adverbs"
  | "connectors";

export type UnitStatus = "not_started" | "in_progress" | "completed";

/** WHY a unit is completed — the user's requirement #3. Assessment-completed
 * units stay visible and reviewable; they are just labelled differently and
 * must not inflate the "studied" indicator. */
export type CompletedBy = "study" | "assessment";

/** A catalog entry: the content definition. Populated in Phase 2. */
export interface Unit {
  id: string;
  section: SectionKind;
  title: string;
  level: Level;
  category?: string;
  tags?: string[];
  /** Ids of the ReviewItems this unit introduces. */
  itemIds?: string[];
}

/** The per-unit progress record — the Phase 1 store. Carries `section`/`level`
 * so aggregation never needs to cross-reference the catalog for a known unit. */
export interface UnitProgress {
  unitId: string;
  section: SectionKind;
  level: Level;
  status: UnitStatus;
  completedBy?: CompletedBy;
  studiedAt?: IsoDate;
  completedAt?: IsoDate;
}

export interface SectionSummary {
  section: SectionKind;
  total: number;
  completed: number;
  /** Of `completed`, how many the learner actually studied vs was credited by assessment. */
  studied: number;
  assessed: number;
  inProgress: number;
  notStarted: number;
  /** 0..100, completed / total. */
  percent: number;
}

export interface LevelSummary {
  level: Level;
  total: number;
  completed: number;
  percent: number;
}
