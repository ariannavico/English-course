import { useParams } from "react-router-dom";
import { Card, LinkButton } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { getMicroLesson } from "@/data/microLessons";
import { MicroLessonView } from "@/features/microLessons/MicroLessonView";

export function MicroLessonPage() {
  const { lessonId = "" } = useParams();
  const lesson = getMicroLesson(lessonId);

  if (!lesson) {
    return (
      <div className="stack">
        <PageHeader title="Micro-lesson not found" />
        <Card>
          <p className="muted">No micro-lesson “{lessonId}”.</p>
          <LinkButton to="/micro-lessons" variant="primary">
            All micro-lessons
          </LinkButton>
        </Card>
      </div>
    );
  }

  return (
    <div className="stack">
      <PageHeader title={lesson.title} description={lesson.problem} />
      <MicroLessonView lesson={lesson} />
    </div>
  );
}
