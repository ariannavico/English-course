import { PageHeader } from "@/components/layout/PageHeader";
import { CollocationRunner } from "@/features/collocations/CollocationRunner";

/** Collocation / chunk training — "Speak in Chunks" (spec §17–18). */
export function CollocationsPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Speak in Chunks"
        description="Fluency isn't single words — it's chunks. Recall the natural partner word (heavy traffic, make a decision, good at) and learn each one with its whole family."
      />
      <CollocationRunner />
    </div>
  );
}
