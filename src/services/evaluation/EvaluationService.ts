import { normalize } from "@/utils/normalization";
import type { ProduceStage } from "@/features/missions/types";

/**
 * Multi-dimensional feedback on a free (open) response. These are signals, not a
 * grade — B2 is about communicating, not passing (spec §20–21). `communication`
 * is a blended heuristic 0..100; the rest are raw signals the UI surfaces.
 */
export interface EvaluationResult {
  wordCount: number;
  keyElementsFound: string[];
  keyElementsMissing: string[];
  chunksUsed: string[];
  connectorsUsed: string[];
  /** Detected Italian-learner error/unnaturalness patterns (spec §25, §35). */
  flags: { pattern: string; hint: string }[];
  /** Blended heuristic 0..100 for "did the message get across?". */
  communication: number;
}

/**
 * The evaluation contract. The app depends only on this. Today a heuristic
 * implementation runs fully offline; an AI-backed `Evaluator` can be dropped in
 * later without touching call sites (spec §53, and the user's AI-ready choice).
 */
export interface Evaluator {
  evaluate(input: string, stage: ProduceStage): EvaluationResult;
}

/** Common linking words — variety of these signals B2-level development (spec §9). */
const CONNECTORS = [
  "because", "so", "but", "however", "although", "though", "while", "whereas",
  "therefore", "on the other hand", "for example", "for instance", "in addition",
  "also", "besides", "moreover", "as a result", "even though", "in fact",
  "that said", "on the whole", "in other words", "which means", "since",
];

/** Recurring Italian-learner error / literal-translation patterns (spec §25). */
const ERROR_PATTERNS: { re: RegExp; hint: string }[] = [
  { re: /\bi have \d+ years?\b/, hint: "Age uses BE: “I am 30”, not “I have 30 years”." },
  { re: /\bi am agree\b/, hint: "“agree” is a verb: say “I agree”, not “I am agree”." },
  { re: /\bexplain me\b/, hint: "Use “explain (something) to me”." },
  { re: /\bi very \w+/, hint: "Use “really” before a verb: “I really like it”, not “I very like it”." },
  { re: /\bhow much do you cost\b/, hint: "The thing is the subject: “How much does it cost?”." },
  { re: /\bmake a (photo|picture)\b/, hint: "Collocation is “take a photo”." },
  { re: /\bmake a question\b/, hint: "Collocation is “ask a question”." },
  { re: /\bi have went\b/, hint: "Present perfect needs the participle: “I have gone”." },
  { re: /\bpeoples\b/, hint: "“people” is already plural." },
  { re: /\binformations\b/, hint: "“information” is uncountable — no “-s”." },
  { re: /\bin the same time\b/, hint: "Say “at the same time”." },
  { re: /\bdepend of\b/, hint: "Say “depends on”." },
];

function countWords(text: string): number {
  const t = text.trim();
  return t.length === 0 ? 0 : t.split(/\s+/).length;
}

/** Fully-offline heuristic evaluator. Deterministic and unit-testable. */
export class HeuristicEvaluator implements Evaluator {
  evaluate(input: string, stage: ProduceStage): EvaluationResult {
    const norm = normalize(input);
    const wordCount = countWords(input);

    const keyElementsFound: string[] = [];
    const keyElementsMissing: string[] = [];
    for (const el of stage.keyElements ?? []) {
      (norm.includes(normalize(el)) ? keyElementsFound : keyElementsMissing).push(el);
    }

    const chunksUsed = (stage.suggestedChunks ?? []).filter((c) =>
      norm.includes(normalize(c.replace(/\.\.\.$/, "").trim())),
    );

    const connectorsUsed = CONNECTORS.filter((c) => norm.includes(c));

    const flags = ERROR_PATTERNS.filter((p) => p.re.test(norm)).map((p) => ({
      pattern: p.re.source,
      hint: p.hint,
    }));

    const communication = this.score({
      wordCount,
      keyTotal: stage.keyElements?.length ?? 0,
      keyFound: keyElementsFound.length,
      connectors: connectorsUsed.length,
      flags: flags.length,
    });

    return {
      wordCount,
      keyElementsFound,
      keyElementsMissing,
      chunksUsed,
      connectorsUsed,
      flags,
      communication,
    };
  }

  /** Blend coverage of key ideas, adequate length, connector variety, minus error flags. */
  private score(s: {
    wordCount: number;
    keyTotal: number;
    keyFound: number;
    connectors: number;
    flags: number;
  }): number {
    const coverage = s.keyTotal > 0 ? s.keyFound / s.keyTotal : s.wordCount >= 12 ? 1 : s.wordCount / 12;
    const length = Math.min(1, s.wordCount / 25); // ~25 words = full marks on length
    const variety = Math.min(1, s.connectors / 2); // 2+ connectors = full
    const raw = coverage * 55 + length * 25 + variety * 20;
    const penalty = s.flags * 12;
    return Math.max(0, Math.min(100, Math.round(raw - penalty)));
  }
}

/**
 * Facade. Holds the active Evaluator; swap it (e.g. for an AIEvaluator) in one
 * place. Kept as a class so future evaluators can be async without call-site
 * churn (the method stays sync for the heuristic one).
 */
export class EvaluationService {
  constructor(private evaluator: Evaluator = new HeuristicEvaluator()) {}
  evaluate(input: string, stage: ProduceStage): EvaluationResult {
    return this.evaluator.evaluate(input, stage);
  }
}

export const evaluationService = new EvaluationService();
