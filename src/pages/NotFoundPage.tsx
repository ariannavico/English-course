import { Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";

export function NotFoundPage() {
  return (
    <div className="stack">
      <PageHeader title="Page not found" />
      <Card>
        <p className="muted">That page doesn't exist.</p>
        <LinkButton to="/" variant="primary">
          Back to dashboard
        </LinkButton>
      </Card>
    </div>
  );
}
