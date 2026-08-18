import { PageHeader } from "@/components/layout/PageHeader";
import { PlacementRunner } from "@/features/placement/PlacementRunner";

/** Initial Assessment + adaptive routing (addendum). */
export function PlacementPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Find your level"
        description="A quick, 10-question placement across A2 → B2. In two minutes you'll get your starting level and a plan built around it — the right first thing to do."
      />
      <PlacementRunner />
    </div>
  );
}
