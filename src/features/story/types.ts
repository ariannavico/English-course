import type { MissionStage } from "@/features/missions/types";

/**
 * Story Mode (spec §31). An interactive story told in episodes. Each episode is
 * a small scene the learner reads, reacts to, chooses in and produces language
 * for — recycling vocabulary and grammar as the story goes. Episodes reuse the
 * mission stage engine (brief / choice / produce), so there's one interaction
 * model across the app; Story adds continuity, resume and cross-episode memory.
 */

export interface StoryEpisode {
  id: string;
  number: number;
  title: string;
  emoji?: string;
  /** One line shown in the hub and as the "previously…" recap. */
  summary: string;
  /** Skills / language this episode deliberately recycles. */
  focus: string[];
  estimatedMinutes: number;
  beats: MissionStage[];
}

export interface Story {
  id: string;
  emoji: string;
  title: string;
  premise: string;
  level: "B1" | "B1+" | "B2";
  episodes: StoryEpisode[];
}

export interface StoryProgress {
  completedEpisodes: string[];
  lastEpisodeId?: string;
  /** Remembered choices (beatId → chosen optionId) for continuity. */
  memory: Record<string, string>;
}
