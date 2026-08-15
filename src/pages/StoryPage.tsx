import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, Icon, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { stories } from "@/data/story";
import { storyService } from "@/services";
import pages from "./pages.module.css";

/** Story Mode hub (spec §31): pick up where you left off, episode by episode. */
export function StoryPage() {
  // One story for now; the layout already supports several.
  const story = stories[0];
  const progress = storyService.load(story.id);
  const done = new Set(progress.completedEpisodes);
  const nextEpisode = story.episodes.find((e) => !done.has(e.id));

  const isAvailable = (index: number) =>
    index === 0 || done.has(story.episodes[index - 1].id) || done.has(story.episodes[index].id);

  return (
    <div className="stack">
      <PageHeader
        title="Story Mode"
        description="Live through a story in English. Each episode brings back the language you've met — in a new situation."
      />

      <Card
        title={
          <span className="row" style={{ gap: "0.5rem" }}>
            <span>{story.emoji}</span> {story.title}
          </span>
        }
        actions={<Badge tone="primary">{story.level}</Badge>}
      >
        <p style={{ marginTop: 0 }}>{story.premise}</p>
        {nextEpisode ? (
          <LinkButton to={`/story/${nextEpisode.id}`} variant="primary">
            {progress.completedEpisodes.length === 0 ? "Start the story" : "Continue"} · Ep{" "}
            {nextEpisode.number}
          </LinkButton>
        ) : (
          <Badge tone="success">Story complete — replay any episode below</Badge>
        )}
      </Card>

      <div className={pages.list}>
        {story.episodes.map((e, i) => {
          const available = isAvailable(i);
          const completed = done.has(e.id);
          const inner = (
            <div className={pages.tileRow}>
              <div>
                <div className="subtle">Episode {e.number}</div>
                <div className={pages.tileTitle}>
                  {e.emoji} {e.title}
                </div>
                <div className="subtle">{e.summary}</div>
              </div>
              <div className="row">
                {completed && <Badge tone="success">Done</Badge>}
                {!available ? <Badge>Locked</Badge> : <Icon name="arrow-right" size={18} />}
              </div>
            </div>
          );
          return (
            <Fragment key={e.id}>
              {available ? (
                <Link to={`/story/${e.id}`} className={pages.tile}>
                  {inner}
                </Link>
              ) : (
                <div className={`${pages.tile} ${pages.tileLocked}`} aria-disabled>
                  {inner}
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
