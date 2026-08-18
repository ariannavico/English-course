import { PageHeader } from "@/components/layout/PageHeader";
import { WritingRunner } from "@/features/writing/WritingRunner";

/** Writing Studio — structured written production (spec §33). */
export function WritingPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Writing Studio"
        description="Real written tasks — an email, a review, an opinion. Write it for its reader, hit the right tone and length, then compare with a natural model."
      />
      <WritingRunner />
    </div>
  );
}
