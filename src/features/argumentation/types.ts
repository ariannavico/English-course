/**
 * Argumentation Training — "Build Your Case" (B2 evolution, slice 9). The single
 * hardest thing at B2 is not vocabulary but *discourse*: stating a position and
 * defending it in a reasoned chain. The CEFR B2 descriptor is explicit — "can
 * develop a clear argument, expanding and supporting points of view at some
 * length with subsidiary points and relevant examples" and "can construct a
 * chain of reasoned argument".
 *
 * We train that chain as five assembled MOVES: claim → reason → evidence →
 * counter-argument → rebuttal. Each move is written separately (so the learner
 * feels the shape), then the five are stitched into one argument. Evaluation is
 * offline + heuristic: we detect the discourse markers that signal each move and
 * the content cues a strong answer for this motion tends to reach for. Signal,
 * not grade — communication over correctness.
 */

/** The five moves of the canonical B2 argument arc, in order. */
export type MoveKind = "claim" | "reason" | "evidence" | "counter" | "rebuttal";

export interface MotionMove {
  /** A natural model sentence for this move of THIS motion. */
  model: string;
  /** Content words a strong answer for this motion tends to include (heuristic). */
  cues?: string[];
}

export interface ArgumentPrompt {
  id: string;
  emoji: string;
  /** The debatable statement the learner argues about. */
  motion: string;
  category: string;
  level: "B1+" | "B2" | "B2+";
  /** Which side the learner is asked to take, e.g. "Argue FOR" / "Argue AGAINST". */
  stance: string;
  /** Per-move model + optional content cues, keyed by move kind. */
  moves: Record<MoveKind, MotionMove>;
}

export interface MoveAttempt {
  kind: MoveKind;
  markerUsed: boolean;
  score: number;
  wordCount: number;
}

export interface ArgumentAttempt {
  promptId: string;
  /** Mean of the five move scores, 0..100. */
  score: number;
  /** How many of the five moves used an appropriate discourse marker. */
  movesWithMarker: number;
  moves: MoveAttempt[];
}
