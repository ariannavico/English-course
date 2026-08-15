import { useParams } from "react-router-dom";
import { Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { getEpisode } from "@/data/story";
import { StoryEpisodeRunner } from "@/features/story/StoryEpisodeRunner";

export function StoryEpisodePage() {
  const { episodeId = "" } = useParams();
  const found = getEpisode(episodeId);

  if (!found) {
    return (
      <div className="stack">
        <PageHeader title="Episode not found" />
        <Card>
          <p className="muted">No episode “{episodeId}”.</p>
          <LinkButton to="/story" variant="primary">
            Back to the story
          </LinkButton>
        </Card>
      </div>
    );
  }

  return <StoryEpisodeRunner key={found.episode.id} story={found.story} episode={found.episode} />;
}
