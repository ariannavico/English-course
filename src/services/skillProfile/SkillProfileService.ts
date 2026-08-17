/**
 * The unified English Skill Profile (spec §22 + addendum). It reads the signals
 * the whole app records — exercise accuracy by area, verb/vocab/phrasal mastery,
 * mission communication, fluency, paraphrase, story — and turns them into one
 * multi-dimensional picture: "you're B1 overall, but listening is holding you
 * back". Bands are an INTERNAL indicator, never a CEFR certification.
 */

export type Band = "A2" | "A2+" | "B1" | "B1+" | "B2";

export function bandFor(score: number): Band {
  if (score >= 80) return "B2";
  if (score >= 65) return "B1+";
  if (score >= 45) return "B1";
  if (score >= 30) return "A2+";
  return "A2";
}

export interface SkillDimension {
  key: string;
  label: string;
  /** 0..100, or null when there's no signal to measure this yet. */
  score: number | null;
  band: Band | null;
  /** Amount of evidence behind the score (data volume / confidence). */
  attempts: number;
  note: string;
}

export interface SkillProfile {
  hasData: boolean;
  dimensions: SkillDimension[];
  overall: { score: number; band: Band } | null;
  headline: string;
}

/* Which exercise tags feed which dimension. */
const GRAMMAR_TAGS = new Set([
  "present-simple", "present-continuous", "past-simple", "past-continuous",
  "future", "future-forms", "present-perfect", "present-perfect-continuous",
  "past-perfect", "modal-verbs", "conditionals", "passive-voice", "verb-forms",
  "for-since", "used-to", "tense-choice", "form", "negative", "question",
  "word-order", "article", "causative", "stative-verbs", "obligation",
]);

/** Classify an exercise's tags into skill dimensions (an exercise can feed several). */
export function classifyTags(tags: string[], verbIds: Set<string>): string[] {
  const dims = new Set<string>();
  for (const t of tags) {
    if (GRAMMAR_TAGS.has(t)) dims.add("grammar");
    if (t === "verb-choice" || t === "verb-usage" || verbIds.has(t)) dims.add("verb");
    if (t.includes("phrasal")) dims.add("phrasal");
    if (t === "vocabulary" || t === "collocation" || t === "vocab") dims.add("vocab");
  }
  return [...dims];
}

interface Part {
  score: number;
  n: number;
}
function blend(...parts: (Part | null | undefined)[]): Part | null {
  const p = parts.filter((x): x is Part => x != null && x.n > 0);
  if (p.length === 0) return null;
  const n = p.reduce((s, x) => s + x.n, 0);
  return { score: Math.round(p.reduce((s, x) => s + x.score * x.n, 0) / n), n };
}
function avg(nums: number[]): Part | null {
  return nums.length ? { score: Math.round(nums.reduce((a, b) => a + b, 0) / nums.length), n: nums.length } : null;
}

export interface SkillInput {
  exerciseProgress: Record<string, { bestScore: number }>;
  /** exerciseId → dimension keys (precomputed from tags). */
  exerciseDims: Record<string, string[]>;
  verbMastery: number[];
  vocabMastery: number[];
  phrasalMastery: number[];
  missionCommunication: number[];
  situationsCompleted: number;
  fluency: { best: number; sessions: number };
  paraphrase: { best: number; sessions: number };
}

const WEIGHT: Record<string, number> = {
  grammar: 1, verb: 1.2, vocab: 1, phrasal: 0.8,
  speaking: 1.5, fluency: 1.2, paraphrase: 1, interaction: 1,
};

export function computeProfile(input: SkillInput): SkillProfile {
  // Aggregate exercise accuracy by dimension.
  const agg: Record<string, { earned: number; count: number }> = {};
  for (const [id, prog] of Object.entries(input.exerciseProgress)) {
    for (const dim of input.exerciseDims[id] ?? []) {
      const b = (agg[dim] ??= { earned: 0, count: 0 });
      b.earned += prog.bestScore;
      b.count += 1;
    }
  }
  const ex = (dim: string): Part | null =>
    agg[dim] ? { score: Math.round(agg[dim].earned / agg[dim].count), n: agg[dim].count } : null;

  const grammar = ex("grammar");
  const verb = blend(ex("verb"), avg(input.verbMastery));
  const vocab = blend(ex("vocab"), avg(input.vocabMastery));
  const phrasal = blend(ex("phrasal"), avg(input.phrasalMastery));
  const speaking = avg(input.missionCommunication);
  const fluency = input.fluency.sessions > 0 ? { score: input.fluency.best, n: input.fluency.sessions } : null;
  const paraphrase = input.paraphrase.sessions > 0 ? { score: input.paraphrase.best, n: input.paraphrase.sessions } : null;
  const interaction =
    input.situationsCompleted > 0
      ? { score: Math.min(100, input.situationsCompleted * 18), n: input.situationsCompleted }
      : null;

  const dims: SkillDimension[] = [
    dim("grammar", "Grammar", grammar, "From your accuracy on grammar exercises."),
    dim("verb", "Verb Usage", verb, "Exercises on verb choice + your verb mastery."),
    dim("vocab", "Vocabulary", vocab, "Vocabulary exercises and word mastery."),
    dim("phrasal", "Phrasal Verbs", phrasal, "Phrasal-verb exercises and mastery."),
    dim("speaking", "Speaking / Production", speaking, "How well your message got across in missions."),
    dim("fluency", "Fluency", fluency, "Your best Fluency Mode session."),
    dim("paraphrase", "Paraphrasing", paraphrase, "Getting around words without using them."),
    dim("interaction", "Interaction", interaction, "Real situations handled in missions & story."),
    { key: "listening", label: "Listening", score: null, band: null, attempts: 0, note: "No listening activities yet — coming with dedicated listening tasks." },
  ];

  const measured = dims.filter((d) => d.score != null);
  let overall: SkillProfile["overall"] = null;
  let headline = "Do a few activities and your skill profile will take shape here.";

  if (measured.length > 0) {
    let wSum = 0;
    let sSum = 0;
    for (const d of measured) {
      const w = WEIGHT[d.key] ?? 1;
      wSum += w;
      sSum += (d.score as number) * w;
    }
    const overallScore = Math.round(sSum / wSum);
    overall = { score: overallScore, band: bandFor(overallScore) };

    const weakest = [...measured]
      .filter((d) => d.attempts >= 1)
      .sort((a, b) => (a.score as number) - (b.score as number))[0];
    headline =
      weakest && (weakest.score as number) < overallScore
        ? `You're around ${overall.band} overall — ${weakest.label} is holding you back.`
        : `You're around ${overall.band} overall. Keep the mix broad to move up.`;
  }

  return { hasData: measured.length > 0, dimensions: dims, overall, headline };
}

function dim(key: string, label: string, part: Part | null, note: string): SkillDimension {
  return {
    key,
    label,
    score: part ? part.score : null,
    band: part ? bandFor(part.score) : null,
    attempts: part ? part.n : 0,
    note,
  };
}

/** Binds classification config; analyze() takes the live signals. */
export class SkillProfileService {
  constructor(private exerciseDims: Record<string, string[]>) {}

  analyze(input: Omit<SkillInput, "exerciseDims">): SkillProfile {
    return computeProfile({ ...input, exerciseDims: this.exerciseDims });
  }
}
