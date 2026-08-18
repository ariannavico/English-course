import { PageHeader } from "@/components/layout/PageHeader";
import { RegisterRunner } from "@/features/register/RegisterRunner";

/** Register training — "Say it three ways" (spec §34). */
export function RegisterPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Register Lab"
        description="Same message, different tone. Write it the way it should sound for who you're writing to — texting a friend isn't emailing a client — and see the full informal → neutral → formal ladder."
      />
      <RegisterRunner />
    </div>
  );
}
