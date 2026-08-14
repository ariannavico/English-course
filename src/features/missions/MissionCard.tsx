import { Link } from "react-router-dom";
import type { Mission } from "./types";
import { Badge, Icon } from "@/components/ui";
import { useMissions } from "./useMissions";
import styles from "./missions.module.css";

/** Compact mission tile for the Missions list and the Home hub. */
export function MissionCard({ mission }: { mission: Mission }) {
  const { isCompleted, attempt } = useMissions();
  const done = isCompleted(mission.id);
  const score = attempt(mission.id)?.communicationScore;

  return (
    <Link to={`/missions/${mission.id}`} className={styles.reco} style={{ padding: "0.9rem 1rem" }}>
      <span style={{ fontSize: "1.6rem" }}>{mission.emoji}</span>
      <span style={{ flex: 1 }}>
        <span style={{ fontWeight: 650, display: "block" }}>{mission.title}</span>
        <span className="subtle">{mission.situation}</span>
      </span>
      <span className="row" style={{ gap: "0.4rem" }}>
        <Badge tone="primary">{mission.level}</Badge>
        {done && score != null ? (
          <Badge tone="success">{score}%</Badge>
        ) : (
          <Icon name="arrow-right" size={18} />
        )}
      </span>
    </Link>
  );
}
