import { useCallback, useState } from "react";
import { missionService } from "@/services";
import type { MissionAttempt, MissionProgress } from "./types";

/** React wrapper over MissionService. */
export function useMissions() {
  const [progress, setProgress] = useState<MissionProgress>(() => missionService.load());

  const recordAttempt = useCallback((attempt: MissionAttempt) => {
    setProgress(missionService.recordAttempt(attempt));
  }, []);

  return {
    progress,
    isCompleted: (id: string) => progress.completed.includes(id),
    attempt: (id: string) => progress.attempts[id],
    recordAttempt,
  };
}
