import { useParams } from "react-router-dom";
import { Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { VerbCard } from "@/components/learning/VerbCard";
import { getVerb } from "@/data";

export function VerbDetailPage() {
  const { verbId = "" } = useParams();
  const verb = getVerb(verbId);

  if (!verb) {
    return (
      <div className="stack">
        <PageHeader title="Verb not found" />
        <Card>
          <p className="muted">No verb with id “{verbId}”.</p>
          <LinkButton to="/verbs" variant="primary">
            Back to Verb Explorer
          </LinkButton>
        </Card>
      </div>
    );
  }

  return <VerbCard verb={verb} />;
}
