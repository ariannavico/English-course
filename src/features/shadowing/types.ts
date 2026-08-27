/**
 * Say It Back — shadowing practice (B2 evolution). The single most effective
 * drill for speaking fluency is SHADOWING: hear a native-shaped line, then say
 * it straight back out loud, imitating the rhythm and the chunking — not
 * inventing, imitating. It moves the learner from passive listening (which the
 * learner already does a lot) to active production, but with a model to lean on.
 *
 * A session is one longish two-person conversation (~5 minutes). The app speaks
 * each line with the Web Speech API; the learner repeats it aloud. When speech
 * recognition is available we mirror back what was heard and a rough match %
 * (signal, not a grade — speaking is never auto-scored, spec §52). Topics climb
 * from everyday to genuinely ABSTRACT, because holding an abstract conversation
 * is exactly the B1→B2 jump.
 */

export type ShadowLevel = "B1" | "B1+" | "B2" | "B2+";

/** How concrete the conversation is — the axis the learner asked to train. */
export type ShadowTopic = "everyday" | "opinion" | "abstract";

export interface ShadowLine {
  /** Which of the two speakers says this line (index 0 or 1 into `speakers`). */
  speaker: 0 | 1;
  /** The line to hear and repeat. Kept to a shadow-able length (~6–16 words). */
  text: string;
  /** Optional Italian gloss, shown only if the learner asks for it. */
  it?: string;
  /** A B2 chunk worth noticing in this line (highlighted on reveal). */
  chunk?: string;
}

export interface ShadowDialogue {
  id: string;
  emoji?: string;
  title: string;
  topic: ShadowTopic;
  level: ShadowLevel;
  /** Display names of the two voices, e.g. ["Mia", "Tom"]. */
  speakers: [string, string];
  /** Rough minutes to complete, for the picker. */
  minutes: number;
  /** One line of context before the conversation starts. */
  intro?: string;
  lines: ShadowLine[];
}

/** Per-line outcome collected during a run. */
export interface LineOutcome {
  /** Did the learner repeat it (vs skip)? */
  repeated: boolean;
  /** Match % vs the model, or null when the mic wasn't used. */
  similarity: number | null;
}

export interface ShadowResult {
  dialogueId: string;
  totalLines: number;
  repeated: number;
  /** Mean match % over lines where the mic was used, or null. */
  avgSimilarity: number | null;
}
