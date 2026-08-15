import { PageHeader } from "@/components/layout/PageHeader";
import { FluencyRunner } from "@/features/fluency/FluencyRunner";

/** Fluency Mode (spec §19): timed prompts that train speed and spontaneity. */
export function FluencyPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Fluency Mode"
        description="Beat the clock. Say what you can, keep going, and don't stop to search for the perfect word."
      />
      <FluencyRunner />
    </div>
  );
}
