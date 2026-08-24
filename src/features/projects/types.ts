import type { MissionStage } from "@/features/missions/types";

/**
 * B2 Projects (spec §32). Bigger than a mission: a multi-step, multi-skill task
 * you work toward a concrete deliverable — plan a trip, apply for a job — reading
 * a resource, deciding, and producing several pieces along the way. Unlike a
 * mission it's RESUMABLE: your completed steps persist, so a project can be a
 * task you come back to. Steps reuse the mission stage engine (brief / choice /
 * produce), so there's one interaction model across the app.
 */
export interface Project {
  id: string;
  emoji: string;
  title: string;
  /** The goal, in one line — what you'll have achieved. */
  goal: string;
  level: "B1+" | "B2";
  skills: string[];
  /** The concrete thing you produce by the end. */
  deliverable: string;
  estimatedMinutes: number;
  steps: MissionStage[];
}

export interface ProjectProgress {
  /** Ids of the steps completed so far. */
  completedSteps: string[];
}
