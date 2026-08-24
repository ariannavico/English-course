import { bandFor, type Band } from "@/services/skillProfile/SkillProfileService";

/**
 * B2 quality profile (spec §20–21). At B2 a single score hides the real picture:
 * you can be accurate but slow, or fluent but narrow. This splits production
 * quality into three cross-cutting axes — ACCURACY (are you correct?), FLUENCY
 * (are you quick and spontaneous?) and RANGE (how varied is your language?) —
 * each blended from the activities that actually measure it. It's an internal
 * indicator, never a CEFR certification.
 */

export type QualityDim = "accuracy" | "fluency" | "range";

/** The signals we can read from what the app already stores. Any may be null. */
export interface QualityInputs {
  /** From the most recent B2 Assessment report, if taken. */
  assessment: { accuracy: number | null; communication: number | null; range: number | null } | null;
  /** Best Fluency Mode score, or null with no sessions. */
  fluencyBest: number | null;
  writingBest: number | null;
  argumentationBest: number | null;
}

export interface QualityDimScore {
  key: QualityDim;
  label: string;
  /** 0..100, or null when nothing has measured it yet. */
  score: number | null;
  band: Band | null;
  /** How many independent activities fed this axis. */
  sources: number;
  note: string;
  /** Where to go to measure/improve this axis. */
  to: string;
}

export interface QualityProfile {
  hasData: boolean;
  dims: QualityDimScore[];
  overall: { score: number; band: Band } | null;
  headline: string;
}

function avg(nums: (number | null | undefined)[]): { score: number; n: number } | null {
  const vals = nums.filter((n): n is number => typeof n === "number");
  if (vals.length === 0) return null;
  return { score: Math.round(vals.reduce((a, b) => a + b, 0) / vals.length), n: vals.length };
}

const MEASURED_NOTE: Record<QualityDim, string> = {
  accuracy: "How correct your English is under the microscope.",
  fluency: "How quick and spontaneous you are when you produce.",
  range: "How varied your structures, connectors and chunks are.",
};
const TODO_NOTE: Record<QualityDim, string> = {
  accuracy: "Not measured yet — take the B2 Assessment.",
  fluency: "Not measured yet — try Fluency Mode.",
  range: "Not measured yet — do some Writing or Build Your Case.",
};
const DIM_TO: Record<QualityDim, string> = {
  accuracy: "/assessment",
  fluency: "/fluency",
  range: "/writing",
};
const DIM_LABEL: Record<QualityDim, string> = {
  accuracy: "Accuracy",
  fluency: "Fluency",
  range: "Range",
};

export function computeQualityProfile(input: QualityInputs): QualityProfile {
  const a = input.assessment;
  const parts: Record<QualityDim, (number | null | undefined)[]> = {
    accuracy: [a?.accuracy],
    fluency: [input.fluencyBest, a?.communication],
    range: [input.writingBest, input.argumentationBest, a?.range],
  };

  const dims: QualityDimScore[] = (["accuracy", "fluency", "range"] as QualityDim[]).map((key) => {
    const blended = avg(parts[key]);
    return {
      key,
      label: DIM_LABEL[key],
      score: blended ? blended.score : null,
      band: blended ? bandFor(blended.score) : null,
      sources: blended ? blended.n : 0,
      note: blended ? MEASURED_NOTE[key] : TODO_NOTE[key],
      to: DIM_TO[key],
    };
  });

  const measured = dims.filter((d) => d.score != null);
  let overall: QualityProfile["overall"] = null;
  let headline = "Do a few production activities and your quality profile fills in here.";

  if (measured.length > 0) {
    const overallScore = Math.round(
      measured.reduce((s, d) => s + (d.score as number), 0) / measured.length,
    );
    overall = { score: overallScore, band: bandFor(overallScore) };

    if (measured.length >= 2) {
      const sorted = [...measured].sort((x, y) => (y.score as number) - (x.score as number));
      const strong = sorted[0];
      const weak = sorted[sorted.length - 1];
      headline =
        (strong.score as number) - (weak.score as number) >= 8
          ? `Your ${strong.label.toLowerCase()} is ahead — ${weak.label.toLowerCase()} is where to push next.`
          : `Nicely balanced so far — keep all three axes moving up together.`;
    } else {
      headline = `${measured[0].label} measured — round it out with the other two.`;
    }
  }

  return { hasData: measured.length > 0, dims, overall, headline };
}
