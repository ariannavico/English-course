import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsHub } from "@/features/projects/ProjectsHub";

/** B2 Projects hub (spec §32). */
export function ProjectsPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Projects"
        description="Bigger, real tasks you work toward a finished result — plan a trip, apply for a job. Several steps, several skills, and you can pick up where you left off."
      />
      <ProjectsHub />
    </div>
  );
}
