import { PageHeader } from "@/components/layout/PageHeader";
import { ArgumentationRunner } from "@/features/argumentation/ArgumentationRunner";

/** Argumentation Training — "Build Your Case" (B2 evolution, slice 9). */
export function ArgumentationPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Build Your Case"
        description="Anyone can give an opinion. At B2 you defend it: claim → reason → evidence → the other side → why you still hold. Build the argument one move at a time."
      />
      <ArgumentationRunner />
    </div>
  );
}
