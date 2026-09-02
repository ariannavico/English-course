import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionRunner } from "@/features/sections/SectionRunner";
import { SECTIONS } from "@/data/catalog";
import type { SectionKind } from "@/types";

const VALID = new Set(SECTIONS.map((s) => s.kind));

/** Generic Second-Release section page at /s/:section (feat/second-release, 2c). */
export function SectionPage() {
  const { section } = useParams<{ section: string }>();
  const meta = SECTIONS.find((s) => s.kind === section);

  if (!section || !VALID.has(section as SectionKind) || !meta) {
    return (
      <div className="stack">
        <PageHeader title="Sezione non trovata" description="Questa sezione non esiste." />
        <Link to="/dashboard">← Torna alla dashboard</Link>
      </div>
    );
  }

  return (
    <div className="stack">
      <PageHeader title={meta.label} description={meta.blurb} />
      <SectionRunner section={meta.kind} />
    </div>
  );
}
