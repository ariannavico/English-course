import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Chapter, ChapterSection } from "@/types";
import { Badge, Button, Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { GrammarExplanation } from "@/components/learning/GrammarExplanation";
import { VocabularyCard } from "@/components/learning/VocabularyCard";
import { PhrasalVerbCard } from "@/components/learning/PhrasalVerbCard";
import { ExerciseSession } from "@/components/exercises/ExerciseSession";
import {
  getChapter,
  getExercises,
  getGrammarTopic,
  getPhrasalVerb,
  getVerb,
  getVocabulary,
} from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { ScoreDisplay } from "@/components/feedback/ScoreDisplay";

export function ChapterPage() {
  const { chapterId = "" } = useParams();
  const chapter = getChapter(chapterId);
  const { progress, recordChapterAttempt } = useProgress();
  const [completed, setCompleted] = useState(false);

  // Score = average of the best scores across this chapter's exercises.
  const score = useMemo(
    () => (chapter ? chapterScore(chapter, progress.exerciseProgress) : 0),
    [chapter, progress],
  );

  if (!chapter) {
    return (
      <div className="stack">
        <PageHeader title="Chapter not available" />
        <Card>
          <p className="muted">
            This chapter is planned but not built yet in this vertical slice.
          </p>
          <LinkButton to="/chapters" variant="primary">
            Back to chapters
          </LinkButton>
        </Card>
      </div>
    );
  }

  function finish() {
    recordChapterAttempt(chapter!.id, 100, score);
    setCompleted(true);
  }

  return (
    <div className="stack">
      <PageHeader
        title={`Ch. ${chapter.number} — ${chapter.title}`}
        description={chapter.description}
        actions={<Badge tone="primary">{chapter.cefrLevel}</Badge>}
      />

      <Card title="Objectives">
        <ul style={{ margin: 0 }}>
          {chapter.objectives.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
        <p className="subtle" style={{ marginTop: "0.75rem", marginBottom: 0 }}>
          Estimated {chapter.estimatedMinutes} min
        </p>
      </Card>

      {chapter.sections.map((section) => (
        <SectionView key={section.id} section={section} />
      ))}

      <Card title="Finish this chapter">
        {completed ? (
          <div className="stack">
            <ScoreDisplay
              earned={Math.round(score)}
              total={100}
              percent={Math.round(score)}
            />
            <LinkButton to="/chapters" variant="primary">
              Back to chapters
            </LinkButton>
          </div>
        ) : (
          <div className="stack">
            <p className="muted" style={{ margin: 0 }}>
              When you've worked through the practice above, mark the chapter
              complete to record your score and update your progress.
            </p>
            <Button variant="primary" onClick={finish}>
              Mark chapter complete
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

/** Renders a single chapter section according to its type + references. */
function SectionView({ section }: { section: ChapterSection }) {
  const refs = section.references ?? [];

  switch (section.type) {
    case "explanation":
    case "comparison": {
      const topics = refs.map(getGrammarTopic).filter((t) => t != null);
      const phrasals = refs.map(getPhrasalVerb).filter((p) => p != null);
      return (
        <Card title={section.title}>
          {section.content && <p>{section.content}</p>}
          {topics.map((t) => (
            <GrammarExplanation key={t!.id} topic={t!} />
          ))}
          {phrasals.map((p) => (
            <PhrasalVerbCard key={p!.id} phrasalVerb={p!} />
          ))}
        </Card>
      );
    }

    case "verb": {
      const verbs = refs.map(getVerb).filter((v) => v != null);
      return (
        <Card title={section.title}>
          {section.content && <p>{section.content}</p>}
          {verbs.map((v) => (
            <p key={v!.id}>
              <strong>{v!.infinitive}</strong> · {v!.past} · {v!.pastParticiple}{" "}
              — <Link to={`/verbs/${v!.id}`}>open full card</Link>
            </p>
          ))}
        </Card>
      );
    }

    case "vocabulary": {
      const items = refs.map(getVocabulary).filter((v) => v != null);
      return (
        <Card title={section.title}>
          <div className="stack">
            {items.map((v) => (
              <VocabularyCard key={v!.id} item={v!} />
            ))}
          </div>
        </Card>
      );
    }

    case "exercise":
    case "speaking":
    case "review":
    case "dialogue":
    case "reading": {
      const exercises = getExercises(refs);
      return (
        <Card title={section.title}>
          {exercises.length > 0 ? (
            <ExerciseSession exercises={exercises} />
          ) : (
            section.content && <p>{section.content}</p>
          )}
        </Card>
      );
    }
  }
}

function chapterScore(
  chapter: Chapter,
  exerciseProgress: Record<string, { bestScore: number }>,
): number {
  const scores = chapter.exerciseIds.map((id) => exerciseProgress[id]?.bestScore ?? 0);
  if (scores.length === 0) return 0;
  return scores.reduce((s, v) => s + v, 0) / scores.length;
}
