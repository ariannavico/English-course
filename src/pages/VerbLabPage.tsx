import { PageHeader } from "@/components/layout/PageHeader";
import { verbChoiceScenarios } from "@/data/verbLab";
import { VerbChoiceLab } from "@/features/verbLab/VerbChoiceLab";

/** Verb Choice Lab — which verb would you actually use, and why (spec §14). */
export function VerbLabPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Verb Choice Lab"
        description="A situation, a verb decision, and the reasoning behind it. Build an instinct for the verb English reaches for — not a translation."
      />
      <VerbChoiceLab scenarios={verbChoiceScenarios} />
    </div>
  );
}
