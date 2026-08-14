import type { IsoDate } from "./common";

export interface ChapterProgress {
  chapterId: string;
  started: boolean;
  completed: boolean;
  progressPercent: number;
  bestScore?: number;
  attempts: number;
  lastAttempt?: IsoDate;
}

export interface ExerciseProgress {
  exerciseId: string;
  attempts: number;
  correct: number;
  incorrect: number;
  bestScore: number;
  lastAttempt: IsoDate;
  lastResult: "correct" | "incorrect";
}

export interface VerbProgress {
  verbId: string;
  viewed: boolean;
  exercisesCompleted: number;
  correctAnswers: number;
  incorrectAnswers: number;
  /** 0..100 rolling mastery estimate, independent of chapter completion. */
  masteryScore: number;
  lastReviewed?: IsoDate;
  nextReview?: IsoDate;
}

export interface VocabularyProgress {
  vocabularyId: string;
  exposureCount: number;
  correctCount: number;
  incorrectCount: number;
  masteryScore: number;
  lastReviewed?: IsoDate;
  nextReview?: IsoDate;
}

export interface PhrasalVerbProgress {
  phrasalVerbId: string;
  viewed: boolean;
  correctCount: number;
  incorrectCount: number;
  masteryScore: number;
  lastReviewed?: IsoDate;
  nextReview?: IsoDate;
}

export interface OverallStats {
  chaptersCompleted: number;
  exercisesCompleted: number;
  totalExercises: number;
  averageScore: number;
  verbsStudied: number;
  phrasalVerbsStudied: number;
  vocabularyStudied: number;
  /** Internal indicator, NOT a CEFR certification. 0..100. */
  currentCEFRProgress: number;
}

export interface UserProgress {
  completedChapters: string[];
  chapterProgress: Record<string, ChapterProgress>;
  exerciseProgress: Record<string, ExerciseProgress>;
  verbProgress: Record<string, VerbProgress>;
  vocabularyProgress: Record<string, VocabularyProgress>;
  phrasalVerbProgress: Record<string, PhrasalVerbProgress>;
  overallStats: OverallStats;
  lastActivity?: IsoDate;
  /** Consecutive days of study. */
  streak: number;
  /** ISO date (day granularity) of the last day counted toward the streak. */
  lastStreakDay?: string;
}
