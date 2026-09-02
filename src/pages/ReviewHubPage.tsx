import { PageHeader } from "@/components/layout/PageHeader";
import { ReviewHubRunner } from "@/features/reviewHub/ReviewHubRunner";

/** Unified Review (feat/second-release, Phase 2). One spaced-repetition engine
 * over every kind of item, with separate recognition and recall tracks. */
export function ReviewHubPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Review"
        description="Ripasso a ripetizione dilazionata su tutto ciò che stai imparando — parole, verbi, phrasal, connettivi… Due binari: riconoscere e produrre."
      />
      <ReviewHubRunner />
    </div>
  );
}
