/**
 * Composition root. Instantiates the service singletons with their concrete
 * dependencies (storage impl, content counts). Swap the storage implementation
 * here to migrate the whole app to IndexedDB/backend later.
 */
import { exercises, verbs } from "@/data";
import { storage } from "./storage/LocalStorageService";
import { ProgressService } from "./progress/ProgressService";
import { SpacedRepetitionService } from "./spacedRepetition/SpacedRepetitionService";
import { ExerciseService } from "./exercises/ExerciseService";
import { searchService } from "./search/SearchService";
import { MissionService } from "./missions/MissionService";
import { FluencyService } from "./fluency/FluencyService";
import { ParaphraseService } from "./paraphrase/ParaphraseService";
import { ArgumentationService } from "./argumentation/ArgumentationService";
import { PlacementService } from "./placement/PlacementService";
import { SocialService } from "./social/SocialService";
import { RegisterService } from "./register/RegisterService";
import { WritingService } from "./writing/WritingService";
import { CollocationService } from "./collocations/CollocationService";
import { StoryService } from "./story/StoryService";
import { AssessmentService } from "./assessment/AssessmentService";
import { evaluationService } from "./evaluation/EvaluationService";
import { speechService } from "./speech/SpeechService";
import { WeaknessService } from "./learning/WeaknessService";
import { SkillProfileService, classifyTags } from "./skillProfile/SkillProfileService";
import { microLessons } from "@/data/microLessons";

export const progressService = new ProgressService(storage, exercises.length);
export const spacedRepetitionService = new SpacedRepetitionService(storage);
export const exerciseService = new ExerciseService(spacedRepetitionService);
export const missionService = new MissionService(storage);
export const fluencyService = new FluencyService(storage);
export const paraphraseService = new ParaphraseService(storage);
export const argumentationService = new ArgumentationService(storage);
export const placementService = new PlacementService(storage);
export const socialService = new SocialService(storage);
export const registerService = new RegisterService(storage);
export const writingService = new WritingService(storage);
export const collocationService = new CollocationService(storage);
export const storyService = new StoryService(storage);
export const assessmentService = new AssessmentService(storage);

/** exerciseId -> tags, for weakness detection. Built once from the content registry. */
const exerciseTags: Record<string, string[]> = Object.fromEntries(
  exercises.map((e) => [e.id, e.tags]),
);
export const weaknessService = new WeaknessService(exerciseTags, microLessons);

/** exerciseId -> skill-profile dimension keys, classified from tags once. */
const verbIdSet = new Set(verbs.map((v) => v.id));
const exerciseDims: Record<string, string[]> = Object.fromEntries(
  exercises.map((e) => [e.id, classifyTags(e.tags, verbIdSet)]),
);
export const skillProfileService = new SkillProfileService(exerciseDims);

export { searchService, storage, evaluationService, speechService };
export { grade } from "./exercises/ExerciseService";
export type { ExerciseAnswer } from "./exercises/ExerciseService";
