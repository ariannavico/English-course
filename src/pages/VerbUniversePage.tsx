import { useParams } from "react-router-dom";
import { Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { getUniverse } from "@/data/verbLab";
import { VerbUniverseView } from "@/features/verbLab/VerbUniverseView";

export function VerbUniversePage() {
  const { verbId = "" } = useParams();
  const universe = getUniverse(verbId);

  if (!universe) {
    return (
      <div className="stack">
        <PageHeader title="Universe not found" />
        <Card>
          <p className="muted">No verb universe for “{verbId}” yet.</p>
          <LinkButton to="/verb-lab" variant="primary">
            Back to the Verb Choice Lab
          </LinkButton>
        </Card>
      </div>
    );
  }

  return (
    <div className="stack">
      <PageHeader title={`${universe.verb.toUpperCase()} — Verb Universe`} />
      <VerbUniverseView universe={universe} />
    </div>
  );
}
