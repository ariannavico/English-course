import { PageHeader } from "@/components/layout/PageHeader";
import { WordFamilyRunner } from "@/features/wordFamilies/WordFamilyRunner";

/** Word families — "Build the Family" (spec §37–39). */
export function WordFamiliesPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Build the Family"
        description="One word, many forms: decide → decision → decisive → decisively. Flex a base word into the noun, verb, adjective or adverb a sentence needs — that's what widens your range."
      />
      <WordFamilyRunner />
    </div>
  );
}
