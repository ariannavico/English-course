import { PageHeader } from "@/components/layout/PageHeader";
import { ReviewRunner } from "@/features/review/ReviewRunner";

/** Spaced-repetition review at /review. Works through the items you added to
 * review from any study section, on two independent tracks. */
export function ReviewPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Ripasso"
        description="Rivedi quello che hai aggiunto al ripasso, con ripetizione dilazionata su due abilità: riconoscere e produrre."
      />
      <ReviewRunner />
    </div>
  );
}
