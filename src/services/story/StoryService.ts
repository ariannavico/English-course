import type { StoryProgress } from "@/features/story/types";
import { STORAGE_KEYS, type StorageService } from "../storage/StorageService";

/**
 * Persists per-story progress (completed episodes, where you left off, and the
 * choices you made) via the StorageService abstraction — so a story can be
 * resumed and later episodes can reference earlier decisions.
 */
export class StoryService {
  constructor(private storage: StorageService) {}

  private all(): Record<string, StoryProgress> {
    return this.storage.get(STORAGE_KEYS.story) ?? {};
  }

  load(storyId: string): StoryProgress {
    return this.all()[storyId] ?? { completedEpisodes: [], memory: {} };
  }

  private save(storyId: string, progress: StoryProgress): void {
    const all = this.all();
    all[storyId] = progress;
    this.storage.set(STORAGE_KEYS.story, all);
  }

  /** Mark an episode complete and merge in any remembered choices. */
  completeEpisode(
    storyId: string,
    episodeId: string,
    memory: Record<string, string> = {},
  ): StoryProgress {
    const p = this.load(storyId);
    if (!p.completedEpisodes.includes(episodeId)) p.completedEpisodes.push(episodeId);
    p.lastEpisodeId = episodeId;
    p.memory = { ...p.memory, ...memory };
    this.save(storyId, p);
    return p;
  }
}
