import { useMemo } from "react";
import { weaknessService } from "@/services";
import { useProgress } from "@/hooks/useProgress";
import { useMissions } from "@/features/missions/useMissions";
import type { WeaknessReport } from "@/services/learning/WeaknessService";

/** Live weakness report from exercise accuracy + mission struggles. */
export function useWeaknesses(): WeaknessReport {
  const { progress } = useProgress();
  const { progress: missionProgress } = useMissions();

  return useMemo(() => {
    const struggling = Object.values(missionProgress.attempts).flatMap(
      (a) => a.strugglingSkills,
    );
    const exProgress: Record<string, { bestScore: number }> = {};
    for (const [id, p] of Object.entries(progress.exerciseProgress)) {
      exProgress[id] = { bestScore: p.bestScore };
    }
    return weaknessService.analyze(exProgress, struggling);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.exerciseProgress, missionProgress.attempts]);
}
