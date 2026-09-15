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
import { UnitService } from "./units/UnitService";
import { ReviewService } from "./review/ReviewService";
import { speechService } from "./speech/SpeechService";

export const progressService = new ProgressService(storage, exercises.length);
export const spacedRepetitionService = new SpacedRepetitionService(storage);
export const exerciseService = new ExerciseService(spacedRepetitionService);

// Second-release unified model: progress per section (units) + spaced review.
export const unitService = new UnitService(storage);
export const reviewService = new ReviewService(storage);

export { storage, speechService };
export { grade } from "./exercises/ExerciseService";
export type { ExerciseAnswer } from "./exercises/ExerciseService";
