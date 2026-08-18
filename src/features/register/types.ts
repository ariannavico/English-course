/**
 * Register training (spec §34). B2 learners can say the words but often miss the
 * TONE — texting a friend like a lawyer, or emailing a client like a mate. This
 * trains register directly: write the same intent at a target level (informal /
 * neutral / formal), and an offline heuristic reads the register markers you
 * actually used and tells you whether you hit the tone. A three-rung "ladder"
 * shows the same message across all three registers as the takeaway.
 */

export type RegisterLevel = "informal" | "neutral" | "formal";

export interface RegisterItem {
  id: string;
  emoji: string;
  /** What you need to communicate, e.g. "Ask a colleague to send you a file." */
  intent: string;
  /** Who you're writing to — this fixes the target register. */
  situation: string;
  target: RegisterLevel;
  /** The same message written at each register (model = ladder[target]). */
  ladder: Record<RegisterLevel, string>;
  /** The register insight the item teaches. */
  principle: string;
  level: "B1+" | "B2";
}

export interface RegisterAnswer {
  target: RegisterLevel;
  detected: RegisterLevel;
  score: number;
}

export interface RegisterSessionResult {
  score: number;
  hits: number;
  total: number;
  /** Overall tendency across the session, for a one-line takeaway. */
  lean: "formal" | "casual" | "balanced";
}
