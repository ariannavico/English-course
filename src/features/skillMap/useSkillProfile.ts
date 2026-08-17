import { useMemo } from "react";
import { fluencyService, paraphraseService, skillProfileService, storyService } from "@/services";
import { stories } from "@/data/story";
import { useProgress } from "@/hooks/useProgress";
import { useMissions } from "@/features/missions/useMissions";
import type { SkillProfile } from "@/services/skillProfile/SkillProfileService";

/** Live, unified Skill Profile assembled from every signal the app records. */
export function useSkillProfile(): SkillProfile {
  const { progress } = useProgress();
  const { progress: missions } = useMissions();

  return useMemo(() => {
    const exerciseProgress: Record<string, { bestScore: number }> = {};
    for (const [id, p] of Object.entries(progress.exerciseProgress)) {
      exerciseProgress[id] = { bestScore: p.bestScore };
    }

    const storyEpisodes = stories.reduce(
      (sum, s) => sum + storyService.load(s.id).completedEpisodes.length,
      0,
    );
    const fl = fluencyService.load();
    const pp = paraphraseService.load();

    return skillProfileService.analyze({
      exerciseProgress,
      verbMastery: Object.values(progress.verbProgress)
        .filter((v) => v.viewed)
        .map((v) => v.masteryScore),
      vocabMastery: Object.values(progress.vocabularyProgress).map((v) => v.masteryScore),
      phrasalMastery: Object.values(progress.phrasalVerbProgress).map((v) => v.masteryScore),
      missionCommunication: Object.values(missions.attempts).map((a) => a.communicationScore),
      situationsCompleted: missions.completed.length + storyEpisodes,
      fluency: { best: fl.bestScore, sessions: fl.sessions },
      paraphrase: { best: pp.bestScore, sessions: pp.sessions },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, missions]);
}
