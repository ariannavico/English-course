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

export const progressService = new ProgressService(storage, exercises.length);
export const spacedRepetitionService = new SpacedRepetitionService(storage);
export const exerciseService = new ExerciseService(spacedRepetitionService);

export { searchService, storage };
export { grade } from "./exercises/ExerciseService";
export type { ExerciseAnswer } from "./exercises/ExerciseService";
