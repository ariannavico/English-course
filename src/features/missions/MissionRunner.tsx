import { useMemo, useState } from "react";
import type { Mission, MissionAttempt, SelfRating } from "./types";
import { Badge, Card } from "@/components/ui";
import { nowIso } from "@/utils/dates";
import { useMissions } from "./useMissions";
import { BriefStageView } from "./BriefStageView";
import { ChoiceStageView } from "./ChoiceStageView";
import { ProduceStageView, type ProduceResult } from "./ProduceStageView";
import { MissionReflect } from "./MissionReflect";
import styles from "./missions.module.css";

/**
 * Plays a mission stage by stage (spec §6). Collects the open-production results,
 * then computes a single MissionAttempt and shows the Reflect screen. Switches on
 * `stage.kind` — the same discriminated-union pattern as the ExerciseRenderer.
 */
export function MissionRunner({ mission }: { mission: Mission }) {
  const { recordAttempt } = useMissions();
  const [index, setIndex] = useState(0);
  const [produceResults, setProduceResults] = useState<ProduceResult[]>([]);
  const [finished, setFinished] = useState(false);
  const [attempt, setAttempt] = useState<MissionAttempt | null>(null);

  const stage = mission.stages[index];

  function advance(next: ProduceResult[]) {
    if (index >= mission.stages.length - 1) finish(next);
    else setIndex((i) => i + 1);
  }

  function finish(results: ProduceResult[]) {
    const stageRatings: Record<string, SelfRating> = {};
    const struggling = new Set<string>();
    for (const r of results) {
      stageRatings[r.stageId] = r.selfRating;
      if (r.selfRating === "struggled") r.targetSkills.forEach((s) => struggling.add(s));
    }
    const scores = results.map((r) => r.evaluation.communication);
    const communicationScore =
      scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

    const built: MissionAttempt = {
      missionId: mission.id,
      completedAt: nowIso(),
      stageRatings,
      communicationScore,
      strugglingSkills: [...struggling],
    };
    setAttempt(built);
    recordAttempt(built);
    setFinished(true);
  }

  const produceCount = useMemo(
    () => mission.stages.filter((s) => s.kind === "produce").length,
    [mission.stages],
  );

  if (finished && attempt) {
    return <MissionReflect mission={mission} attempt={attempt} results={produceResults} />;
  }

  return (
    <div className={styles.runner}>
      <div className={styles.steps} aria-label={`Step ${index + 1} of ${mission.stages.length}`}>
        {mission.stages.map((s, i) => (
          <span
            key={s.id}
            className={`${styles.step} ${
              i < index ? styles.stepDone : i === index ? styles.stepCurrent : ""
            }`}
          />
        ))}
        <span className={styles.stepLabel}>{stage.label}</span>
      </div>

      <Card
        title={
          <span className="row" style={{ gap: "0.5rem" }}>
            <span>{mission.emoji}</span> {mission.title}
          </span>
        }
        actions={<Badge tone="primary">{mission.level}</Badge>}
      >
        {stage.kind === "brief" && <BriefStageView stage={stage} onAdvance={() => advance(produceResults)} />}
        {stage.kind === "choice" && (
          <ChoiceStageView stage={stage} onAdvance={() => advance(produceResults)} />
        )}
        {stage.kind === "produce" && (
          <ProduceStageView
            stage={stage}
            onAdvance={(r) => {
              const next = [...produceResults, r];
              setProduceResults(next);
              advance(next);
            }}
          />
        )}
      </Card>

      <p className="subtle" style={{ textAlign: "center" }}>
        {produceResults.length}/{produceCount} responses given · situations can change — stay flexible
      </p>
    </div>
  );
}
