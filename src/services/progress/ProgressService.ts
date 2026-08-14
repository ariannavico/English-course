import type {
  ChapterProgress,
  Exercise,
  ExerciseProgress,
  ExerciseResult,
  UserMistake,
  UserProgress,
  UserSettings,
  VerbProgress,
  VocabularyProgress,
} from "@/types";
import { dayKey, nowIso } from "@/utils/dates";
import { percentage, updateMastery, weightedAverage } from "@/utils/scoring";
import {
  STORAGE_KEYS,
  type StorageService,
} from "../storage/StorageService";

export const DEFAULT_SETTINGS: UserSettings = {
  theme: "system",
  showItalian: true,
  dailyGoal: 10,
  reducedMotion: false,
};

export function emptyProgress(): UserProgress {
  return {
    completedChapters: [],
    chapterProgress: {},
    exerciseProgress: {},
    verbProgress: {},
    vocabularyProgress: {},
    phrasalVerbProgress: {},
    overallStats: {
      chaptersCompleted: 0,
      exercisesCompleted: 0,
      totalExercises: 0,
      averageScore: 0,
      verbsStudied: 0,
      phrasalVerbsStudied: 0,
      vocabularyStudied: 0,
      currentCEFRProgress: 0,
    },
    streak: 0,
  };
}

/**
 * Owns the UserProgress document: load/save, and all the small state
 * transitions (record an exercise result, mark a verb viewed, update the
 * streak). No React here — hooks wrap this. `totalExercises` is injected so
 * this service stays decoupled from the content registry.
 */
export class ProgressService {
  constructor(
    private storage: StorageService,
    private totalExercises = 0,
  ) {}

  setTotalExercises(n: number): void {
    this.totalExercises = n;
  }

  load(): UserProgress {
    return this.storage.get<UserProgress>(STORAGE_KEYS.progress) ?? emptyProgress();
  }

  save(progress: UserProgress): void {
    this.storage.set(STORAGE_KEYS.progress, progress);
  }

  loadSettings(): UserSettings {
    return {
      ...DEFAULT_SETTINGS,
      ...(this.storage.get<Partial<UserSettings>>(STORAGE_KEYS.settings) ?? {}),
    };
  }

  saveSettings(settings: UserSettings): void {
    this.storage.set(STORAGE_KEYS.settings, settings);
  }

  /* ---------------- Mistakes log (spec §43) ---------------- */

  loadMistakes(): UserMistake[] {
    return this.storage.get<UserMistake[]>(STORAGE_KEYS.mistakes) ?? [];
  }

  saveMistakes(mistakes: UserMistake[]): void {
    this.storage.set(STORAGE_KEYS.mistakes, mistakes);
  }

  /* ---------------- Recording activity ---------------- */

  markVerbViewed(verbId: string): UserProgress {
    const p = this.load();
    const vp = p.verbProgress[verbId] ?? blankVerbProgress(verbId);
    vp.viewed = true;
    p.verbProgress[verbId] = vp;
    this.touch(p);
    this.recompute(p);
    this.save(p);
    return p;
  }

  /**
   * Record a graded attempt. Updates exercise stats, propagates to any related
   * verbs (mastery), bumps the streak, and recomputes overall stats.
   */
  recordExerciseResult(exercise: Exercise, result: ExerciseResult): UserProgress {
    const p = this.load();
    const now = nowIso();

    // Situations that were only self-assessed with no verdict: skip stat writes.
    if (result.correct === null) {
      this.touch(p);
      this.save(p);
      return p;
    }

    const prev: ExerciseProgress = p.exerciseProgress[exercise.id] ?? {
      exerciseId: exercise.id,
      attempts: 0,
      correct: 0,
      incorrect: 0,
      bestScore: 0,
      lastAttempt: now,
      lastResult: "incorrect",
    };

    const scorePct = Math.round(result.score * 100);
    p.exerciseProgress[exercise.id] = {
      ...prev,
      attempts: prev.attempts + 1,
      correct: prev.correct + (result.correct ? 1 : 0),
      incorrect: prev.incorrect + (result.correct ? 0 : 1),
      bestScore: Math.max(prev.bestScore, scorePct),
      lastAttempt: now,
      lastResult: result.correct ? "correct" : "incorrect",
    };

    for (const verbId of exercise.relatedVerbIds ?? []) {
      const vp = p.verbProgress[verbId] ?? blankVerbProgress(verbId);
      vp.viewed = true;
      vp.exercisesCompleted += 1;
      vp.correctAnswers += result.correct ? 1 : 0;
      vp.incorrectAnswers += result.correct ? 0 : 1;
      vp.masteryScore = updateMastery(vp.masteryScore, result.correct);
      vp.lastReviewed = now;
      p.verbProgress[verbId] = vp;
    }

    for (const vocabId of exercise.relatedVocabularyIds ?? []) {
      const wp: VocabularyProgress = p.vocabularyProgress[vocabId] ?? {
        vocabularyId: vocabId,
        exposureCount: 0,
        correctCount: 0,
        incorrectCount: 0,
        masteryScore: 0,
      };
      wp.exposureCount += 1;
      wp.correctCount += result.correct ? 1 : 0;
      wp.incorrectCount += result.correct ? 0 : 1;
      wp.masteryScore = updateMastery(wp.masteryScore, result.correct);
      wp.lastReviewed = now;
      p.vocabularyProgress[vocabId] = wp;
    }

    this.bumpStreak(p);
    this.recompute(p);
    this.save(p);
    return p;
  }

  /**
   * Update a chapter's progress after a practice run through it.
   * `percentComplete` and `score` are 0..100.
   */
  recordChapterAttempt(
    chapterId: string,
    percentComplete: number,
    score: number,
  ): UserProgress {
    const p = this.load();
    const prev: ChapterProgress = p.chapterProgress[chapterId] ?? {
      chapterId,
      started: false,
      completed: false,
      progressPercent: 0,
      attempts: 0,
    };
    const completed = percentComplete >= 100;
    p.chapterProgress[chapterId] = {
      ...prev,
      started: true,
      completed: prev.completed || completed,
      progressPercent: Math.max(prev.progressPercent, Math.round(percentComplete)),
      bestScore: Math.max(prev.bestScore ?? 0, Math.round(score)),
      attempts: prev.attempts + 1,
      lastAttempt: nowIso(),
    };
    if (completed && !p.completedChapters.includes(chapterId)) {
      p.completedChapters.push(chapterId);
    }
    this.bumpStreak(p);
    this.recompute(p);
    this.save(p);
    return p;
  }

  /* ---------------- Derived state ---------------- */

  private bumpStreak(p: UserProgress): void {
    const today = dayKey();
    if (p.lastStreakDay === today) return; // already counted today
    const yesterday = dayKey(new Date(Date.now() - 86_400_000));
    p.streak = p.lastStreakDay === yesterday ? p.streak + 1 : 1;
    p.lastStreakDay = today;
    this.touch(p);
  }

  private touch(p: UserProgress): void {
    p.lastActivity = nowIso();
  }

  /** Recompute the OverallStats block from the per-item maps. */
  private recompute(p: UserProgress): void {
    const exStats = Object.values(p.exerciseProgress);
    const attempted = exStats.length;
    const avg =
      attempted === 0
        ? 0
        : Math.round(exStats.reduce((s, e) => s + e.bestScore, 0) / attempted);

    const verbsStudied = Object.values(p.verbProgress).filter((v) => v.viewed).length;
    const vocabStudied = Object.values(p.vocabularyProgress).filter(
      (v) => v.exposureCount > 0,
    ).length;
    const phrasalStudied = Object.values(p.phrasalVerbProgress).filter(
      (v) => v.viewed,
    ).length;

    p.overallStats = {
      chaptersCompleted: p.completedChapters.length,
      exercisesCompleted: attempted,
      totalExercises: this.totalExercises,
      averageScore: avg,
      verbsStudied,
      phrasalVerbsStudied: phrasalStudied,
      vocabularyStudied: vocabStudied,
      currentCEFRProgress: this.cefrIndicator(p, avg),
    };
  }

  /** Internal 0..100 blend of coverage + accuracy + mastery. NOT a CEFR score. */
  private cefrIndicator(p: UserProgress, avgScore: number): number {
    const coverage =
      this.totalExercises > 0
        ? percentage(Object.keys(p.exerciseProgress).length, this.totalExercises)
        : 0;
    const masteries = Object.values(p.verbProgress).map((v) => v.masteryScore);
    const avgMastery =
      masteries.length === 0
        ? 0
        : Math.round(masteries.reduce((s, m) => s + m, 0) / masteries.length);
    return weightedAverage([
      { value: coverage, weight: 1 },
      { value: avgScore, weight: 2 },
      { value: avgMastery, weight: 2 },
    ]);
  }

  /** Weakest skill areas by tag (spec §32 "Weak Areas"). */
  weakAreas(exercises: Exercise[]): { tag: string; percent: number }[] {
    const p = this.load();
    const buckets = new Map<string, { earned: number; total: number }>();
    for (const ex of exercises) {
      const ep = p.exerciseProgress[ex.id];
      if (!ep) continue;
      for (const tag of ex.tags) {
        const b = buckets.get(tag) ?? { earned: 0, total: 0 };
        b.earned += ep.bestScore;
        b.total += 100;
        buckets.set(tag, b);
      }
    }
    return [...buckets.entries()]
      .map(([tag, b]) => ({ tag, percent: percentage(b.earned, b.total) }))
      .sort((a, b) => a.percent - b.percent)
      .slice(0, 6);
  }

  reset(): void {
    this.storage.remove(STORAGE_KEYS.progress);
  }
}

function blankVerbProgress(verbId: string): VerbProgress {
  return {
    verbId,
    viewed: false,
    exercisesCompleted: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    masteryScore: 0,
  };
}
