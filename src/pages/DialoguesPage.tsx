import { PageHeader } from "@/components/layout/PageHeader";
import { DialogueRunner } from "@/features/dialogues/DialogueRunner";

/** Realistic dialogues — "Real Talk" (spec §30). */
export function DialoguesPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Real Talk"
        description="Real conversation is messy — people hesitate, hedge, start over and cut in. Follow what they actually mean through the mess, and learn the signal words that guide you."
      />
      <DialogueRunner />
    </div>
  );
}
