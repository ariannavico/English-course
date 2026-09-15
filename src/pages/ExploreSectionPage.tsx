import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionRunner } from "@/features/sections/SectionRunner";
import { SECTIONS } from "@/data/catalog";
import type { SectionKind } from "@/types";

const VALID = new Set(SECTIONS.map((s) => s.kind));

/**
 * Consult view for one section (Explore). Every section renders its own content
 * read-only via SectionRunner — the same material you study on the Dashboard, so
 * the two surfaces stay in sync.
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

  return (
    <div className="stack">
      <PageHeader title={meta.label} description={meta.blurb} />
      <SectionRunner section={meta.kind} readOnly />
    </div>
  );
}
