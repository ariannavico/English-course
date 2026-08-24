import { describe, expect, it } from "vitest";
import { ProjectService } from "@/services/projects/ProjectService";
import type { StorageService } from "@/services/storage/StorageService";
import { projects, getProject } from "@/data/projects";

/** Minimal in-memory StorageService for testing. */
function memoryStorage(): StorageService {
  const map = new Map<string, unknown>();
  return {
    get: <T>(k: string) => (map.has(k) ? (map.get(k) as T) : null),
    set: (k, v) => void map.set(k, v),
    remove: (k) => void map.delete(k),
    clearAll: () => map.clear(),
    keys: () => [...map.keys()],
  };
}

describe("ProjectService — resumable progress", () => {
  it("records step completion idempotently and reports progress", () => {
    const svc = new ProjectService(memoryStorage());
    const steps = ["s1", "s2", "s3"];
    expect(svc.progress("p", steps)).toEqual({ done: 0, total: 3 });

    svc.completeStep("p", "s1");
    svc.completeStep("p", "s1"); // idempotent
    svc.completeStep("p", "s2");
    expect(svc.progress("p", steps)).toEqual({ done: 2, total: 3 });
    expect(svc.load("p").completedSteps).toEqual(["s1", "s2"]);
  });

  it("resets a project back to zero", () => {
    const svc = new ProjectService(memoryStorage());
    svc.completeStep("p", "s1");
    svc.reset("p");
    expect(svc.load("p").completedSteps).toEqual([]);
  });

  it("keeps projects separate", () => {
    const svc = new ProjectService(memoryStorage());
    svc.completeStep("a", "s1");
    expect(svc.load("b").completedSteps).toEqual([]);
  });
});

describe("project data integrity", () => {
  it("project ids unique; each has steps, a produce step, and unique step ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const project of projects) {
      expect(project.steps.length, project.id).toBeGreaterThanOrEqual(4);
      const stepIds = project.steps.map((s) => s.id);
      expect(new Set(stepIds).size, `${project.id} step ids`).toBe(stepIds.length);
      expect(project.steps.some((s) => s.kind === "produce"), `${project.id} needs production`).toBe(true);
      expect(project.deliverable.length, project.id).toBeGreaterThan(0);
    }
  });

  it("produce steps carry a prompt and model; choices carry feedback", () => {
    for (const project of projects) {
      for (const step of project.steps) {
        if (step.kind === "produce") {
          expect(step.prompt.length, `${project.id}/${step.id}`).toBeGreaterThan(0);
          expect(step.modelAnswer, `${project.id}/${step.id}`).toBeTruthy();
        }
        if (step.kind === "choice") {
          for (const o of step.options) expect(o.feedback.length, `${project.id}/${step.id}/${o.id}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it("lookups resolve", () => {
    expect(getProject(projects[0].id)?.title).toBe(projects[0].title);
    expect(getProject("nope")).toBeUndefined();
  });
});
