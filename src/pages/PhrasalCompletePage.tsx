import { PageHeader } from "@/components/layout/PageHeader";
import { PhrasalCompleteRunner } from "@/features/phrasalComplete/PhrasalCompleteRunner";

/** The complete phrasal-verb reference, grouped by base verb (A→Z). */
export function PhrasalCompletePage() {
  return (
    <div className="stack">
      <PageHeader
        title="Phrasal Verbs A–Z"
        description="The complete list — every phrasal verb grouped by its base verb. Open “take” to see take after, take off, take up… Search by the phrase or by what it means."
      />
      <PhrasalCompleteRunner />
    </div>
  );
}
