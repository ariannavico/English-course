import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  Exercise,
  ExerciseResult,
  UserMistake,
  UserProgress,
  UserSettings,
} from "@/types";
import { progressService } from "@/services";
import { nowIso } from "@/utils/dates";

interface ProgressContextValue {
  progress: UserProgress;
  settings: UserSettings;
  mistakes: UserMistake[];
  markVerbViewed: (verbId: string) => void;
  recordExerciseResult: (exercise: Exercise, result: ExerciseResult) => void;
  recordChapterAttempt: (
    chapterId: string,
    percentComplete: number,
    score: number,
  ) => void;
  updateSettings: (patch: Partial<UserSettings>) => void;
  addMistake: (mistake: Omit<UserMistake, "id" | "createdAt" | "reviewCount">) => void;
  removeMistake: (id: string) => void;
  resetAll: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => progressService.load());
  const [settings, setSettings] = useState<UserSettings>(() =>
    progressService.loadSettings(),
  );
  const [mistakes, setMistakes] = useState<UserMistake[]>(() =>
    progressService.loadMistakes(),
  );

  const markVerbViewed = useCallback((verbId: string) => {
    setProgress(progressService.markVerbViewed(verbId));
  }, []);

  const recordExerciseResult = useCallback(
    (exercise: Exercise, result: ExerciseResult) => {
      setProgress(progressService.recordExerciseResult(exercise, result));
    },
    [],
  );

  const recordChapterAttempt = useCallback(
    (chapterId: string, percentComplete: number, score: number) => {
      setProgress(progressService.recordChapterAttempt(chapterId, percentComplete, score));
    },
    [],
  );

  const updateSettings = useCallback(
    (patch: Partial<UserSettings>) => {
      setSettings((prev) => {
        const next = { ...prev, ...patch };
        progressService.saveSettings(next);
        return next;
      });
    },
    [],
  );

  const addMistake = useCallback(
    (mistake: Omit<UserMistake, "id" | "createdAt" | "reviewCount">) => {
      setMistakes((prev) => {
        const next: UserMistake[] = [
          {
            ...mistake,
            id: `mistake-${Date.now()}`,
            createdAt: nowIso(),
            reviewCount: 0,
          },
          ...prev,
        ];
        progressService.saveMistakes(next);
        return next;
      });
    },
    [],
  );

  const removeMistake = useCallback((id: string) => {
    setMistakes((prev) => {
      const next = prev.filter((m) => m.id !== id);
      progressService.saveMistakes(next);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    progressService.reset();
    setProgress(progressService.load());
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      settings,
      mistakes,
      markVerbViewed,
      recordExerciseResult,
      recordChapterAttempt,
      updateSettings,
      addMistake,
      removeMistake,
      resetAll,
    }),
    [
      progress,
      settings,
      mistakes,
      markVerbViewed,
      recordExerciseResult,
      recordChapterAttempt,
      updateSettings,
      addMistake,
      removeMistake,
      resetAll,
    ],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgressContext(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgressContext must be used within ProgressProvider");
  return ctx;
}
