import { Link } from "react-router-dom";
import { Badge, Card, Icon, LinkButton } from "@/components/ui";
import { microLessonsForSkills } from "@/data/microLessons";
import type { Mission, MissionAttempt } from "./types";
import type { ProduceResult } from "./ProduceStageView";
import styles from "./missions.module.css";

/**
 * Stage 7 — Reflect (spec §6, §41). Grammar surfaces here diagnostically: the
 * app names the skills the learner found hard and the recurring error patterns,
 * then points to targeted training — it does NOT drop them into "Chapter 13".
 */
export function MissionReflect({
  mission,
  attempt,
  results,
}: {
  mission: Mission;
  attempt: MissionAttempt;
  results: ProduceResult[];
}) {
  const flags = dedupe(results.flatMap((r) => r.evaluation.flags.map((f) => f.hint)));
  const chunksUsed = dedupe(results.flatMap((r) => r.evaluation.chunksUsed));
  const struggled = attempt.strugglingSkills;
  const suggestedLessons = microLessonsForSkills(struggled);

  return (
    <div className="stack">
      <Card title="Mission complete">
        <div className={styles.reflectScore}>
          <span className={styles.reflectBig}>{attempt.communicationScore}%</span>
          <span className="muted">communication across the mission</span>
        </div>
        <p className="muted" style={{ marginTop: "0.75rem", marginBottom: 0 }}>
          Remember: at B2 the goal is getting your message across naturally — not a
          perfect answer. You handled a situation that changed on you.
        </p>
      </Card>

      {struggled.length > 0 && (
        <Card title="What felt hard">
          <p className="muted" style={{ marginTop: 0 }}>
            You flagged these as tricky. A few focused minutes here will pay off:
          </p>
          <div className={styles.chips}>
            {struggled.map((s) => (
              <Badge key={s} tone="warning">
                {s}
              </Badge>
            ))}
          </div>
          {suggestedLessons.length > 0 && (
            <div className={styles.recos} style={{ marginTop: "0.85rem" }}>
              {suggestedLessons.map((l) => (
                <Link key={l.id} to={`/micro-lessons/${l.id}`} className={styles.reco}>
                  <Icon name="check" size={18} /> Fix it now: {l.title} ({l.minutes} min)
                </Link>
              ))}
            </div>
          )}
        </Card>
      )}

      {flags.length > 0 && (
        <Card title="Patterns to watch">
          <div className="stack" style={{ gap: "0.5rem" }}>
            {flags.map((f, i) => (
              <div key={i} className={styles.flag}>
                <Icon name="alert" size={16} /> <span>{f}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {chunksUsed.length > 0 && (
        <Card title="Nice — you used these naturally">
          <div className={styles.chips}>
            {chunksUsed.map((c) => (
              <Badge key={c} tone="success">
                {c}
              </Badge>
            ))}
          </div>
        </Card>
      )}

      <Card title="Keep the momentum">
        <div className={styles.recos}>
          <Link to="/missions" className={styles.reco}>
            <Icon name="target" size={18} /> Try another mission
          </Link>
          <Link to="/practice" className={styles.reco}>
            <Icon name="grid" size={18} /> Quick practice (5 min)
          </Link>
          <Link to="/review" className={styles.reco}>
            <Icon name="repeat" size={18} /> Review what you've learned
          </Link>
        </div>
        <div className="row" style={{ marginTop: "1rem", flexWrap: "wrap" }}>
          <LinkButton to="/" variant="primary">
            Back to Home
          </LinkButton>
          <span className="subtle" style={{ marginLeft: "auto" }}>
            {mission.emoji} {mission.title}
          </span>
        </div>
      </Card>
    </div>
  );
}

function dedupe(arr: string[]): string[] {
  return [...new Set(arr)];
}
