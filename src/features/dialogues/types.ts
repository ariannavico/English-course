/**
 * Realistic dialogues (spec §30). Real conversation is messy: people hesitate,
 * hedge, start over, correct themselves, and cut in on each other. The B2 skill
 * is following the MEANING through the mess — trusting the self-correction,
 * reading a hedge as uncertainty, catching who interrupted and why. This trains
 * exactly that, grouped by the disfluency at work, with a per-type diagnostic.
 */

export type TalkFeature = "self-correction" | "interruption" | "hesitation" | "false-start";

export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface TalkOption {
  id: string;
  text: string;
  feedback?: string;
  /** The correct reading. Exactly one option is `best`. */
  best?: boolean;
}

export interface TalkItem {
  id: string;
  feature: TalkFeature;
  emoji?: string;
  /** The short exchange, with the disfluency written in. */
  lines: DialogueLine[];
  question: string;
  options: TalkOption[];
  /** The discourse signal to notice, taught on reveal. */
  focus?: { marker: string; meaning: string };
  /** The principle for decoding this kind of messy speech. */
  principle: string;
}

export interface TalkAnswer {
  feature: TalkFeature;
  correct: boolean;
}

export interface FeatureScore {
  feature: TalkFeature;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface TalkResult {
  correct: number;
  total: number;
  score: number;
  byFeature: FeatureScore[];
}
