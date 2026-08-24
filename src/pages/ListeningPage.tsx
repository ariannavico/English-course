import { PageHeader } from "@/components/layout/PageHeader";
import { ListeningRunner } from "@/features/listening/ListeningRunner";

/** Listening at levels — "Train Your Ear" (spec §29). */
export function ListeningPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Train Your Ear"
        description="Real speech speeds up and swallows words. Climb from clear to fast, reduced English (gonna, d'you, lemme) — listen, answer, then see exactly what was said."
      />
      <ListeningRunner />
    </div>
  );
}
