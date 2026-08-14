import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui";
import { missions } from "@/data/missions";
import { MissionCard } from "@/features/missions/MissionCard";

/** Missions hub — realistic situations to work through (spec §5). */
export function MissionsPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Missions"
        description="Real situations, not exercises. Understand it, react, decide, and keep communicating when things change."
      />
      <Card>
        <div className="stack" style={{ gap: "0.6rem" }}>
          {missions.map((m) => (
            <MissionCard key={m.id} mission={m} />
          ))}
        </div>
      </Card>
    </div>
  );
}
