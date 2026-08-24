import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Icon } from "@/components/ui";
import { BriefStageView } from "@/features/missions/BriefStageView";
import { ChoiceStageView } from "@/features/missions/ChoiceStageView";
import { ProduceStageView } from "@/features/missions/ProduceStageView";
import { projectService } from "@/services";
import type { Project } from "./types";
import styles from "./projects.module.css";

/**
 * Runs a project step by step, and RESUMES where you left off: on open it jumps
 * to the first step you haven't completed, and each completed step persists. The
 * steps themselves reuse the mission stage views (brief / choice / produce).
 */
export function ProjectRunner({ project }: { project: Project }) {
  // Resume: start at the first not-yet-completed step.
  const [completed, setCompleted] = useState<Set<string>>(
    () => new Set(projectService.load(project.id).completedSteps),
  );
  const firstIncomplete = project.steps.findIndex((s) => !completed.has(s.id));
  const [index, setIndex] = useState(firstIncomplete === -1 ? project.steps.length : firstIncomplete);

  const allDone = index >= project.steps.length;
  const step = allDone ? null : project.steps[index];

  function advance() {
    if (!step) return;
    projectService.completeStep(project.id, step.id);
    setCompleted((prev) => new Set(prev).add(step.id));
    setIndex((i) => i + 1);
  }

  function restart() {
    projectService.reset(project.id);
    setCompleted(new Set());
    setIndex(0);
  }

  const doneCount = project.steps.filter((s) => completed.has(s.id)).length;

  return (
    <div className={styles.wrap}>
      {/* step checklist / progress */}
      <div className={styles.checklist}>
        {project.steps.map((s, i) => {
          const isDone = completed.has(s.id);
          const isActive = !allDone && i === index;
          return (
            <span
              key={s.id}
              className={`${styles.stepChip} ${isDone ? styles.stepDone : isActive ? styles.stepActive : ""}`}
            >
              {isDone && <Icon name="check" size={12} />}
              {s.label}
            </span>
          );
        })}
      </div>

      {allDone ? (
        <Card title="Project complete">
          <div className="stack">
            <div className={styles.done}>
              <div className={styles.doneEmoji}>{project.emoji}</div>
              <p style={{ margin: "0.3rem 0 0", fontWeight: 650 }}>{project.goal}</p>
              <div className={styles.doneDeliverable}>
                <span className={styles.stepLabel}>What you produced</span>
                <p style={{ margin: "0.25rem 0 0" }}>{project.deliverable}</p>
              </div>
            </div>
            <p className="muted" style={{ margin: 0 }}>
              A project pulls several skills together toward one real outcome — exactly the kind of
              extended task B2 is about.
            </p>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <Button variant="ghost" onClick={restart}>
                Start over
              </Button>
              <Link to="/projects" style={{ marginLeft: "auto" }}>
                Back to projects →
              </Link>
            </div>
          </div>
        </Card>
      ) : (
        <>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <span className="subtle">
              Step {index + 1} of {project.steps.length} · {doneCount} done
            </span>
            <Badge tone="primary">{step!.label}</Badge>
          </div>
          <Card>
            {step!.kind === "brief" && <BriefStageView stage={step!} onAdvance={advance} />}
            {step!.kind === "choice" && <ChoiceStageView stage={step!} onAdvance={() => advance()} />}
            {step!.kind === "produce" && <ProduceStageView stage={step!} onAdvance={() => advance()} />}
          </Card>
        </>
      )}
    </div>
  );
}
