/**
 * Mission domain model. A Mission is a realistic situation the learner works
 * through in stages (spec §5–7). It is NOT a grammar lesson: grammar surfaces
 * only diagnostically, in the Reflect step. Stages are a discriminated union on
 * `kind`, mirroring how exercises use `data.kind` — the MissionRunner switches
 * on it, so adding a stage type is a local change.
 */

export type MissionLevel = "B1" | "B1+" | "B2";

/** A piece of the situation to read (and optionally hear): setup, a reply, or a twist. */
export interface BriefStage {
  kind: "brief";
  id: string;
  /** Short label shown as the step name, e.g. "The situation", "Something changes". */
  label: string;
  /** Who is speaking, if it's a line of dialogue (e.g. "Airline agent"). */
  speaker?: string;
  /** The English text of the situation / message. */
  text: string;
  /** Optional Italian hint, shown only if the learner asks or below B2. */
  italianHint?: string;
  /** If true, offer a "listen" button (TTS) for this text. */
  audio?: boolean;
}

/** A decision with no single right answer (spec §8): each option gets feedback. */
export interface ChoiceStage {
  kind: "choice";
  id: string;
  label: string;
  prompt: string;
  options: { id: string; text: string; feedback: string }[];
  /** Free-text follow-up: "Why did you choose this?" (self-reflection, spec §40). */
  followUpWhy?: string;
}

/**
 * Open production (spec §9–12): the learner writes or speaks a response. There
 * is no auto-grading of correctness — the EvaluationService gives heuristic
 * signals, then the learner self-assesses against a natural model answer.
 */
export interface ProduceStage {
  kind: "produce";
  id: string;
  label: string;
  /** What the learner must do, e.g. "Explain what happened and ask for options." */
  prompt: string;
  italianContext?: string;
  /** Communicative skills this targets, e.g. ["narrating", "requesting", "present perfect"]. */
  targetSkills: string[];
  /** Chunks to try to use (spec §18), e.g. ["The thing is...", "I was wondering if..."]. */
  suggestedChunks?: string[];
  /** Ideas the answer should get across (heuristic presence check). */
  keyElements?: string[];
  /** A natural (not "perfect") model answer to compare against. */
  modelAnswer?: string;
  /** Naturalness notes: patterns to prefer/avoid (spec §12, §35). */
  naturalnessNotes?: string[];
  /** Offer "say it aloud" (speech recognition) alongside typing. */
  allowSpeech?: boolean;
}

export type MissionStage = BriefStage | ChoiceStage | ProduceStage;

export interface Mission {
  id: string;
  emoji: string;
  title: string;
  /** One-line hook shown on the card, e.g. "You missed your flight". */
  situation: string;
  level: MissionLevel;
  /** High-level skills, for the card and the skill profile later. */
  skills: string[];
  estimatedMinutes: number;
  stages: MissionStage[];
}

/* ---------------- Progress ---------------- */

export type SelfRating = "struggled" | "ok" | "confident";

/** What we remember about one attempt at a mission (feeds Reflect + weakness detection). */
export interface MissionAttempt {
  missionId: string;
  completedAt: string;
  /** Per produce-stage self-ratings, keyed by stage id. */
  stageRatings: Record<string, SelfRating>;
  /** Average heuristic communication score across produce stages (0..100). */
  communicationScore: number;
  /** Skills the learner flagged as hard this run (self-rated "struggled"). */
  strugglingSkills: string[];
}

export interface MissionProgress {
  completed: string[];
  attempts: Record<string, MissionAttempt>;
}
