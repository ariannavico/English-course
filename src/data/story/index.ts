import type { Story, StoryEpisode } from "@/features/story/types";
import { newInLondon } from "./newInLondon";

/** Registry of stories. Add a story file and list it here. */
export const stories: Story[] = [newInLondon];

const storyById = new Map(stories.map((s) => [s.id, s]));
export const getStory = (id: string): Story | undefined => storyById.get(id);

const episodeIndex = new Map<string, { story: Story; episode: StoryEpisode }>();
for (const story of stories) {
  for (const episode of story.episodes) {
    episodeIndex.set(episode.id, { story, episode });
  }
}
export const getEpisode = (episodeId: string) => episodeIndex.get(episodeId);
