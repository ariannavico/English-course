import type {
  Exercise,
  ExerciseResult,
  MatchingData,
  UserProgress,
} from "@/types";
import { matchesAnswer, normalize } from "@/utils/normalization";
import { shuffle } from "@/utils/shuffle";
import type { SpacedRepetitionService } from "../spacedRepetition/SpacedRepetitionService";

/**
 * Answer shapes accepted by `grade`, keyed loosely to the exercise kind.
 * - choice kinds: the selected option id (string)
 * - fill/translation/error: the typed string
 * - sentence-builder: ordered tokens (string[])
 * - matching: a map of pair-id → chosen right-side value
 * - situation: a self-rating done elsewhere (grade returns null / self)
 */
export type ExerciseAnswer =
  | string
  | string[]
  | Record<string, string>
  | { selfCorrect: boolean };

/**
 * Grades a single exercise attempt. Pure and synchronous — the heart of the
 * feedback loop, and fully unit-tested. `situation` exercises are self-graded:
 * they return `correct: null` unless a self-rating is supplied.
 */
export function grade(exercise: Exercise, answer: ExerciseAnswer): ExerciseResult {
  const { data, points } = exercise;

  switch (data.kind) {
    case "multiple-choice":
    case "verb-choice":
    case "tense-choice": {
      const correct = answer === data.correctOptionId;
      return whole(correct, points);
    }

    case "fill-blank": {
      const correct = matchesAnswer(
        String(answer ?? ""),
        data.acceptedAnswers,
        data.caseSensitive,
      );
      return whole(correct, points);
    }

    case "translation": {
      const correct = matchesAnswer(String(answer ?? ""), data.acceptedAnswers);
      return whole(correct, points);
    }

    case "error-correction": {
      const correct = matchesAnswer(String(answer ?? ""), data.acceptedAnswers);
      return whole(correct, points);
    }

    case "sentence-builder": {
      const got = Array.isArray(answer) ? answer : [];
      const candidates = [data.solution, ...(data.alternativeSolutions ?? [])];
      const correct = candidates.some(
        (sol) => normalize(sol.join(" ")) === normalize(got.join(" ")),
      );
      return whole(correct, points);
    }

    case "matching": {
      return gradeMatching(data, answer, points);
    }

    case "situation": {
      if (answer && typeof answer === "object" && "selfCorrect" in answer) {
        return whole(answer.selfCorrect === true, points);
      }
      return { correct: null, score: 0, earnedPoints: 0, feedback: "Self-assessed." };
    }
  }
}

function whole(correct: boolean, points: number): ExerciseResult {
  return {
    correct,
    score: correct ? 1 : 0,
    earnedPoints: correct ? points : 0,
  };
}

function gradeMatching(
  data: MatchingData,
  answer: ExerciseAnswer,
  points: number,
): ExerciseResult {
  const chosen = (answer ?? {}) as Record<string, string>;
  let hits = 0;
  for (const pair of data.pairs) {
    if (normalize(chosen[pair.id] ?? "") === normalize(pair.right)) hits++;
  }
  const score = data.pairs.length ? hits / data.pairs.length : 0;
  return {
    correct: hits === data.pairs.length,
    score,
    earnedPoints: Math.round(points * score),
    feedback: `${hits}/${data.pairs.length} correct`,
  };
}

/* ------------------------------------------------------------------ */
/* Daily session selection (spec §30–31): priority-ordered, varied.    */
/* ------------------------------------------------------------------ */

export interface SessionOptions {
  size?: number;
  pool: Exercise[];
}

/**
 * Builds a daily practice set. Priority (spec §31):
 *   1 repeatedly-wrong  2 review overdue  3 recently learned
 *   4 studied long ago  5 new content
 * Then de-duplicates and lightly shuffles to avoid the same order each day.
 */
export class ExerciseService {
  constructor(private sr: SpacedRepetitionService) {}

  buildDailySession(progress: UserProgress, opts: SessionOptions): Exercise[] {
    const size = opts.size ?? 10;
    const pool = opts.pool;
    const byId = new Map(pool.map((e) => [e.id, e]));

    const scored = pool.map((ex) => ({ ex, priority: this.priorityOf(ex, progress) }));
    // Group by priority bucket, shuffle within a bucket for variety.
    const buckets = new Map<number, Exercise[]>();
    for (const { ex, priority } of scored) {
      const list = buckets.get(priority) ?? [];
      list.push(ex);
      buckets.set(priority, list);
    }

    const ordered: Exercise[] = [];
    for (const priority of [1, 2, 3, 4, 5]) {
      const list = buckets.get(priority);
      if (list) ordered.push(...shuffle(list));
    }

    // De-dup (defensive) and cap.
    const seen = new Set<string>();
    const result: Exercise[] = [];
    for (const ex of ordered) {
      if (seen.has(ex.id)) continue;
      seen.add(ex.id);
      result.push(byId.get(ex.id)!);
      if (result.length >= size) break;
    }
    return result;
  }

  /** Lower number = higher priority. */
  private priorityOf(ex: Exercise, progress: UserProgress): number {
    const ep = progress.exerciseProgress[ex.id];
    const srItem = this.sr.get(ex.id);

    // 1: repeatedly wrong
    if (ep && ep.incorrect >= 2 && ep.incorrect > ep.correct) return 1;
    // 2: review overdue
    if (srItem && new Date(srItem.nextReview).getTime() <= Date.now()) return 2;
    // 3: recently learned (attempted once or twice)
    if (ep && ep.attempts <= 2) return 3;
    // 5: never attempted → new content
    if (!ep) return 5;
    // 4: studied a while ago
    return 4;
  }
}
