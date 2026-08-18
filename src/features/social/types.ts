/**
 * Social English & conversation management (spec §27–28). B2 speakers don't just
 * get grammar right — they keep a conversation alive: they react, they do small
 * talk, they take and yield turns, and they close gracefully. This trains that
 * instinct as a choice of the natural social MOVE, with the reasoning for each
 * option, plus a per-function diagnostic so the learner sees which move type
 * they're weakest at. Communication over correctness.
 */

export type SocialFunction = "reacting" | "keeping-going" | "turn-taking" | "wrapping-up";

export interface SocialOption {
  id: string;
  text: string;
  /** Why this reply works — or falls flat — socially. */
  feedback: string;
  /** The most natural move here. Exactly one option is `best`. */
  best?: boolean;
}

export interface SocialItem {
  id: string;
  fn: SocialFunction;
  emoji?: string;
  /** Who speaks the setup line, if it's dialogue (e.g. "Colleague"). */
  speaker?: string;
  /** What the other person says, or the situation you're in. */
  context: string;
  /** The instruction, e.g. "How do you react?" */
  prompt: string;
  options: SocialOption[];
  /** The underlying social principle the item teaches. */
  principle: string;
  level: "B1+" | "B2";
}

export interface SocialAnswer {
  fn: SocialFunction;
  correct: boolean;
}

export interface FunctionScore {
  fn: SocialFunction;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface SocialSessionResult {
  correct: number;
  total: number;
  score: number;
  byFunction: FunctionScore[];
}
