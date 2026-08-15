import type { MicroLesson } from "@/features/microLessons/types";

/**
 * Weakness detection (spec §24–25). It looks for PATTERNS across everything the
 * learner has done — not isolated wrong answers — by aggregating accuracy per
 * exercise tag and matching low-accuracy clusters to the micro-lesson that
 * fixes them. The learning loop's "detect" step (§43).
 */

export interface WeakArea {
  lessonId: string;
  title: string;
  emoji: string;
  /** The one-line pattern narrative, e.g. "You confuse the present perfect and the past simple." */
  pattern: string;
  /** 0..100 accuracy over this lesson's tags. */
  accuracy: number;
  attempts: number;
  recommendations: { label: string; to: string }[];
}

export interface WeaknessReport {
  hasData: boolean;
  /** Weak areas (accuracy below threshold), weakest first. */
  areas: WeakArea[];
  /** All matched areas with data, weakest first (for a fuller view). */
  all: WeakArea[];
  /** The single biggest weakness backed by enough evidence. */
  top?: WeakArea;
  /** Skills the learner flagged as hard in missions (secondary signal). */
  fromMissions: string[];
}

export interface WeaknessInput {
  /** exerciseId -> best score 0..100 (only attempted exercises). */
  exerciseProgress: Record<string, { bestScore: number }>;
  /** exerciseId -> tags. */
  exerciseTags: Record<string, string[]>;
  lessons: MicroLesson[];
  strugglingSkills?: string[];
}

const WEAK_THRESHOLD = 80; // below this (with data) counts as a weakness
const EVIDENCE_MIN = 2; // attempts needed before we call it the "top" weakness

export function analyzeWeaknesses(input: WeaknessInput): WeaknessReport {
  // 1) Aggregate accuracy per tag from attempted exercises.
  const tag: Record<string, { earned: number; count: number }> = {};
  for (const [id, prog] of Object.entries(input.exerciseProgress)) {
    const tags = input.exerciseTags[id];
    if (!tags) continue;
    for (const t of tags) {
      const bucket = (tag[t] ??= { earned: 0, count: 0 });
      bucket.earned += prog.bestScore;
      bucket.count += 1;
    }
  }
  const hasData = Object.keys(input.exerciseProgress).length > 0;

  // 2) Score each micro-lesson over the tags it addresses.
  const all: WeakArea[] = [];
  for (const lesson of input.lessons) {
    let earned = 0;
    let count = 0;
    for (const t of lesson.addressesTags) {
      const b = tag[t];
      if (b) {
        earned += b.earned;
        count += b.count;
      }
    }
    if (count === 0) continue; // no evidence for this lesson yet
    const accuracy = Math.round(earned / count);
    all.push({
      lessonId: lesson.id,
      title: lesson.title,
      emoji: lesson.emoji,
      pattern: lesson.problem,
      accuracy,
      attempts: count,
      recommendations: buildRecommendations(lesson),
    });
  }

  all.sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts);
  const areas = all.filter((a) => a.accuracy < WEAK_THRESHOLD);

  const top =
    areas.find((a) => a.attempts >= EVIDENCE_MIN) ?? areas[0] ?? undefined;

  const fromMissions = dedupe(input.strugglingSkills ?? []);

  return { hasData, areas, all, top, fromMissions };
}

function buildRecommendations(lesson: MicroLesson): { label: string; to: string }[] {
  const recs = [{ label: `Micro-lesson: ${lesson.title}`, to: `/micro-lessons/${lesson.id}` }];
  if (lesson.relatedUniverse) {
    recs.push({
      label: `${lesson.relatedUniverse.toUpperCase()} universe`,
      to: `/verb-lab/${lesson.relatedUniverse}`,
    });
  }
  recs.push({ label: "5-minute challenge", to: "/practice" });
  return recs;
}

function dedupe(arr: string[]): string[] {
  return [...new Set(arr)];
}

/** Binds the pure analysis to the app's live content (tags) and micro-lessons. */
export class WeaknessService {
  constructor(
    private exerciseTags: Record<string, string[]>,
    private lessons: MicroLesson[],
  ) {}

  analyze(
    exerciseProgress: Record<string, { bestScore: number }>,
    strugglingSkills: string[] = [],
  ): WeaknessReport {
    return analyzeWeaknesses({
      exerciseProgress,
      exerciseTags: this.exerciseTags,
      lessons: this.lessons,
      strugglingSkills,
    });
  }
}
