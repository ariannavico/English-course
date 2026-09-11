import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionRunner } from "@/features/sections/SectionRunner";
import { SECTIONS } from "@/data/catalog";
import type { SectionKind } from "@/types";
import { VerbExplorerPage } from "./VerbExplorerPage";
import { PhrasalCompletePage } from "./PhrasalCompletePage";
import { IrregularVerbsPage } from "./IrregularVerbsPage";

const VALID = new Set(SECTIONS.map((s) => s.kind));

/**
 * Consult view for one section (Explore). The five content sections render their
 * material read-only via SectionRunner; verbs/phrasal/irregular reuse their rich
 * existing reference pages.
 */
export function ExploreSectionPage() {
  const { section } = useParams<{ section: string }>();
  const meta = SECTIONS.find((s) => s.kind === section);

  if (!section || !VALID.has(section as SectionKind) || !meta) {
    return (
      <div className="stack">
        <PageHeader title="Sezione non trovata" description="Questa sezione non esiste." />
        <Link to="/explore">← Torna a Explore</Link>
      </div>
    );
  }

  if (section === "verbs") return <VerbExplorerPage />;
  if (section === "phrasal") return <PhrasalCompletePage />;
  if (section === "irregular") return <IrregularVerbsPage />;

  return (
    <div className="stack">
      <PageHeader title={meta.label} description={meta.blurb} />
      <SectionRunner section={meta.kind} readOnly />
    </div>
  );
}
