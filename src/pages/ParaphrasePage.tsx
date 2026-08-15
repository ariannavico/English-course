import { PageHeader } from "@/components/layout/PageHeader";
import { ParaphraseRunner } from "@/features/paraphrase/ParaphraseRunner";

/** Paraphrase Training — "Get Around The Word" (spec §10–11). */
export function ParaphrasePage() {
  return (
    <div className="stack">
      <PageHeader
        title="Get Around The Word"
        description="Don't know a word — or it just won't come? Explain it another way. This is the skill that keeps you talking when your memory fails."
      />
      <ParaphraseRunner />
    </div>
  );
}
