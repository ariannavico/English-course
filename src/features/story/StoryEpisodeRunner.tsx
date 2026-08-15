import { useState } from "react";
import { Badge, Card, Icon, LinkButton } from "@/components/ui";
import { storyService } from "@/services";
import { BriefStageView } from "@/features/missions/BriefStageView";
import { ChoiceStageView } from "@/features/missions/ChoiceStageView";
import { ProduceStageView } from "@/features/missions/ProduceStageView";
import missionStyles from "@/features/missions/missions.module.css";
import type { Story, StoryEpisode } from "./types";

/**
 * Plays one story episode. Beats are mission stages, so the same brief/choice/
 * produce views are reused. On completion it records the episode (and the
 * choices made) and offers the next one — the continuity that makes it a story,
 * not a set of unrelated scenes.
 */
export function StoryEpisodeRunner({ story, episode }: { story: Story; episode: StoryEpisode }) {
  const [index, setIndex] = useState(0);
  const [memory, setMemory] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const beat = episode.beats[index];
  const next = story.episodes.find((e) => e.number === episode.number + 1);

  function advance() {
    if (index >= episode.beats.length - 1) {
      storyService.completeEpisode(story.id, episode.id, memory);
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
    }
  }

  if (finished) {
    return (
      <Card title="Episode complete">
        <div className="stack">
          <p style={{ margin: 0, fontSize: "1.05rem" }}>
            {episode.emoji} <strong>{episode.title}</strong> — done. {episode.summary}
          </p>
          <p className="muted" style={{ margin: 0 }}>
            Notice how the same language keeps coming back in new situations — that's
            how it sticks.
          </p>
          <div className="row" style={{ flexWrap: "wrap" }}>
            {next ? (
              <LinkButton to={`/story/${next.id}`} variant="primary">
                Next: {next.emoji} {next.title} →
              </LinkButton>
            ) : (
              <LinkButton to="/story" variant="primary">
                🎉 You finished the story — back to the start
              </LinkButton>
            )}
            <LinkButton to="/story">Story overview</LinkButton>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="stack">
      <div className={missionStyles.steps} aria-label={`Beat ${index + 1} of ${episode.beats.length}`}>
        {episode.beats.map((b, i) => (
          <span
            key={b.id}
            className={`${missionStyles.step} ${
              i < index ? missionStyles.stepDone : i === index ? missionStyles.stepCurrent : ""
            }`}
          />
        ))}
        <span className={missionStyles.stepLabel}>{beat.label}</span>
      </div>

      <Card
        title={
          <span className="row" style={{ gap: "0.5rem" }}>
            <span>{story.emoji}</span> Ep {episode.number} — {episode.title}
          </span>
        }
        actions={<Badge tone="primary">{story.level}</Badge>}
      >
        {beat.kind === "brief" && <BriefStageView stage={beat} onAdvance={advance} />}
        {beat.kind === "choice" && (
          <ChoiceStageView
            stage={beat}
            onAdvance={(r) => {
              setMemory((m) => ({ ...m, [beat.id]: r.optionId }));
              advance();
            }}
          />
        )}
        {beat.kind === "produce" && <ProduceStageView stage={beat} onAdvance={advance} />}
      </Card>

      <p className="subtle" style={{ textAlign: "center" }}>
        <Icon name="book" size={14} /> {story.title} · recycling: {episode.focus.join(" · ")}
      </p>
    </div>
  );
}
