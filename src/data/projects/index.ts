import type { Project } from "@/features/projects/types";
import { weekendTrip } from "./weekendTrip";
import { jobApplication } from "./jobApplication";

/** Registry of B2 projects. Add a project file and list it here — nothing else changes. */
export const projects: Project[] = [weekendTrip, jobApplication];

const byId = new Map(projects.map((p) => [p.id, p]));
export const getProject = (id: string): Project | undefined => byId.get(id);
