import { PageHeader } from "@/components/layout/PageHeader";
import { ShadowingRunner } from "@/features/shadowing/ShadowingRunner";

/** Say It Back — shadowing practice for speaking fluency (B2 evolution). */
export function ShadowingPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Say It Back"
        description="The fastest way to sound fluent: hear a line, then say it straight back out loud — copy the rhythm, don't translate. One long conversation at a time, climbing from everyday chat to abstract talk."
      />
      <ShadowingRunner />
    </div>
  );
}
