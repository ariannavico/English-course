import { PageHeader } from "@/components/layout/PageHeader";
import { ConversationRunner } from "@/features/social/ConversationRunner";

/** Social English & conversation management (spec §27–28). */
export function SocialPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Keep It Going"
        description="The part of English that isn't grammar: reacting naturally, small talk, taking your turn, and closing gracefully. Pick the move a native would make — and see why."
      />
      <ConversationRunner />
    </div>
  );
}
