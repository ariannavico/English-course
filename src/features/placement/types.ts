import type { Exercise } from "@/types";
import type { Band } from "@/services/skillProfile/SkillProfileService";

/**
 * Initial Assessment + adaptive routing (addendum). A short, purely objective
 * placement quiz spanning A2 → B2. Unlike the B2 Practical Assessment, its job
 * isn't a readiness estimate — it's to PLACE a new learner and ROUTE them to the
 * right starting point, so the first thing they do fits their level. Placement
 * is an internal indicator, never a CEFR certification.
 */

/** The five placement tiers — reuse the app-wide Band set. */
export type PlacementLevel = Band;

/** One objective placement item, tagged with the tier it probes. */
export interface PlacementItem {
  id: string;
  level: PlacementLevel;
  /** Reuses the ExerciseRenderer via the standard Exercise shape (MC / choice). */
  exercise: Exercise;
}

/** What the runner collects per item. */
export interface PlacementAnswer {
  level: PlacementLevel;
  correct: boolean;
}

export interface PlacementResult {
  band: PlacementLevel;
  correct: number;
  total: number;
  /** Accuracy per tier (0..1), for the "how far you got" breakdown. */
  tierAccuracy: { level: PlacementLevel; accuracy: number; answered: number }[];
}

/** One recommended next step in the learner's routed plan. */
export interface PlanStep {
  emoji: string;
  title: string;
  desc: string;
  to: string;
}

export interface RoutingPlan {
  band: PlacementLevel;
  headline: string;
  blurb: string;
  steps: PlanStep[];
}
