/**
 * Composition root. Instantiates the service singletons with their concrete
 * dependencies (storage impl, content counts). Swap the storage implementation
 * here to migrate the whole app to IndexedDB/backend later.
 */
import { exercises } from "@/data";
import { storage } from "./storage/LocalStorageService";
import { ProgressService } from "./progress/ProgressService";
import { SpacedRepetitionService } from "./spacedRepetition/SpacedRepetitionService";
import { ExerciseService } from "./exercises/ExerciseService";
import { searchService } from "./search/SearchService";
import { MissionService } from "./missions/MissionService";
import { evaluationService } from "./evaluation/EvaluationService";
import { speechService } from "./speech/SpeechService";
import { WeaknessService } from "./learning/WeaknessService";
import { microLessons } from "@/data/microLessons";

export const progressService = new ProgressService(storage, exercises.length);
export const spacedRepetitionService = new SpacedRepetitionService(storage);
export const exerciseService = new ExerciseService(spacedRepetitionService);
export const missionService = new MissionService(storage);

/** exerciseId -> tags, for weakness detection. Built once from the content registry. */
const exerciseTags: Record<string, string[]> = Object.fromEntries(
  exercises.map((e) => [e.id, e.tags]),
);
export const weaknessService = new WeaknessService(exerciseTags, microLessons);

export { searchService, storage, evaluationService, speechService };
export { grade } from "./exercises/ExerciseService";
export type { ExerciseAnswer } from "./exercises/ExerciseService";
