import { useParams } from "react-router-dom";
import { Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { getProject } from "@/data/projects";
import { ProjectRunner } from "@/features/projects/ProjectRunner";

export function ProjectPage() {
  const { projectId = "" } = useParams();
  const project = getProject(projectId);

  if (!project) {
    return (
      <div className="stack">
        <PageHeader title="Project not found" />
        <Card>
          <p className="muted">No project for “{projectId}”.</p>
          <LinkButton to="/projects" variant="primary">
            Back to projects
          </LinkButton>
        </Card>
      </div>
    );
  }

  return (
    <div className="stack">
      <PageHeader title={`${project.emoji} ${project.title}`} description={project.goal} />
      <ProjectRunner project={project} />
    </div>
  );
}
