import { bandFor, type Band } from "@/services/skillProfile/SkillProfileService";
import { COMPETENCE_LABEL, type Competence, type TaskResult } from "./types";

export interface CompetenceScore {
  competence: Competence;
  label: string;
  score: number;
  band: Band;
}

export interface ReadinessReport {
  overall: number;
  band: Band;
  /** Human readiness statement, honestly hedged. */
  readiness: string;
  competences: CompetenceScore[];
  strong: string[];
  weak: { label: string; to: string }[];
  recurringMistakes: string[];
  /** Cross-cutting quality dimensions (spec §21). null when not measurable. */
  accuracy: number | null;
  communication: number | null;
  range: number | null;
}

const TRAINING: Record<Competence, string> = {
  reading: "/story",
  listening: "/story",
  grammar: "/weaknesses",
  "verb-choice": "/verb-lab",
  vocabulary: "/vocabulary",
  paraphrasing: "/paraphrase",
  writing: "/missions",
  speaking: "/fluency",
  interaction: "/missions",
};

function readinessStatement(overall: number, band: Band): string {
  if (overall >= 80) return `${band} — ready for real B2 use. Keep stretching.`;
  if (overall >= 65) return `${band} — approaching B2. A few areas to firm up.`;
  if (overall >= 50) return `${band} — a solid B1, building toward B2.`;
  if (overall >= 35) return `${band} — around B1. Keep practising across the board.`;
  return `${band} — still building your B1 foundations.`;
}

/** Build the Readiness Report from the graded tasks. Pure and tested. */
export function buildReport(results: TaskResult[]): ReadinessReport {
  // Aggregate per competence.
  const byComp = new Map<Competence, number[]>();
  for (const r of results) {
    const list = byComp.get(r.competence) ?? [];
    list.push(r.score);
    byComp.set(r.competence, list);
  }

  const competences: CompetenceScore[] = [...byComp.entries()]
    .map(([competence, scores]) => {
      const score = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
      return { competence, label: COMPETENCE_LABEL[competence], score, band: bandFor(score) };
    })
    .sort((a, b) => a.score - b.score);

  const overall =
    competences.length > 0
      ? Math.round(competences.reduce((a, c) => a + c.score, 0) / competences.length)
      : 0;
  const band = bandFor(overall);

  const weak = competences
    .filter((c) => c.score < 60)
    .slice(0, 3)
    .map((c) => ({ label: c.label, to: TRAINING[c.competence] }));
  const strong = [...competences]
    .filter((c) => c.score >= 70)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((c) => c.label);

  const recurringMistakes = [
    ...new Set(results.flatMap((r) => r.flags ?? [])),
  ].slice(0, 5);

  // Cross-cutting quality dimensions.
  const objectives = results.filter((r) => r.correct != null);
  const accuracy = objectives.length
    ? Math.round((objectives.filter((r) => r.correct).length / objectives.length) * 100)
    : null;
  const produced = results.filter((r) => r.connectors != null || r.chunks != null);
  const communication = produced.length
    ? Math.round(produced.reduce((a, r) => a + r.score, 0) / produced.length)
    : null;
  const range = produced.length
    ? Math.min(
        100,
        Math.round(
          (produced.reduce((a, r) => a + (r.connectors ?? 0) + (r.chunks ?? 0), 0) / produced.length) * 22,
        ),
      )
    : null;

  return {
    overall,
    band,
    readiness: readinessStatement(overall, band),
    competences: [...competences].sort((a, b) => b.score - a.score),
    strong,
    weak,
    recurringMistakes,
    accuracy,
    communication,
    range,
  };
}
