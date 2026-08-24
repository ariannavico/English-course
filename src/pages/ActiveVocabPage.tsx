import { PageHeader } from "@/components/layout/PageHeader";
import { VocabActivateRunner } from "@/features/vocabLevels/VocabActivateRunner";

/** Active vocabulary at levels — "Activate Your Vocabulary" (spec §36). */
export function ActiveVocabPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Activate Your Vocabulary"
        description="Knowing a word isn't yes-or-no. Climb each word from recognising it, to producing it with a hint, to recalling it cold — moving your vocabulary from passive to active."
      />
      <VocabActivateRunner />
    </div>
  );
}
