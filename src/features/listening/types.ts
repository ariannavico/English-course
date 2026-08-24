/**
 * Listening at levels (spec §29). Real speech isn't the careful classroom voice
 * — it speeds up and swaps in reduced forms ("gonna", "d'you", "whatcha"). This
 * trains the ear on a difficulty ramp: Clear → Natural → Fast & reduced. Each
 * line is spoken with the Web Speech API at a level-appropriate rate; the learner
 * answers a comprehension question, then sees the transcript and the connected-
 * speech form that tripped them up.
 */

export type ListeningLevel = 1 | 2 | 3;

export interface ListeningOption {
  id: string;
  text: string;
  feedback?: string;
  /** The correct answer. Exactly one option is `best`. */
  best?: boolean;
}

export interface ListeningItem {
  id: string;
  level: ListeningLevel;
  emoji?: string;
  /** Who's speaking, for context (e.g. "A colleague"). */
  speaker?: string;
  /** The line spoken by TTS and revealed as the transcript. */
  line: string;
  question: string;
  options: ListeningOption[];
  /** The reduced/connected-speech form featured, taught on reveal. */
  focus?: { form: string; meaning: string };
  /** The listening principle (what to notice). */
  principle: string;
}

export interface ListeningAnswer {
  level: ListeningLevel;
  correct: boolean;
}

export interface LevelScore {
  level: ListeningLevel;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface ListeningResult {
  correct: number;
  total: number;
  score: number;
  byLevel: LevelScore[];
}
