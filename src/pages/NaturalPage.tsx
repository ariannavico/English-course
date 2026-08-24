import { PageHeader } from "@/components/layout/PageHeader";
import { NaturalRunner } from "@/features/natural/NaturalRunner";

/** Natural English — "possible vs natural" (spec §12, §35). */
export function NaturalPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Sound Natural"
        description="Correct isn't the same as natural. Spot what a native would actually say — and why the grammatical-but-clunky versions (often literal translations) aren't it."
      />
      <NaturalRunner />
    </div>
  );
}
