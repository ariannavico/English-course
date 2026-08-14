import { useParams } from "react-router-dom";
import { Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { getMission } from "@/data/missions";
import { MissionRunner } from "@/features/missions/MissionRunner";

export function MissionPage() {
  const { missionId = "" } = useParams();
  const mission = getMission(missionId);

  if (!mission) {
    return (
      <div className="stack">
        <PageHeader title="Mission not found" />
        <Card>
          <p className="muted">No mission with id “{missionId}”.</p>
          <LinkButton to="/missions" variant="primary">
            Back to Missions
          </LinkButton>
        </Card>
      </div>
    );
  }

  return <MissionRunner key={mission.id} mission={mission} />;
}
