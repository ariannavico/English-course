/**
 * The complete 30-chapter + 4-review syllabus (spec §37). Each entry is
 * lightweight navigation metadata. `status: "available"` chapters have a full
 * Chapter object in the registry; "planned" ones are placeholders that unlock
 * as content is authored in Phase 3 — no component changes needed.
 */
export interface CourseEntry {
  /** Chapter id when available, otherwise a stable placeholder id. */
  id: string;
  number: number;
  title: string;
  part: 1 | 2 | 3 | 4 | 5;
  kind: "chapter" | "review" | "exam";
  status: "available" | "planned";
}

export const PART_TITLES: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "Part 1 — Foundations",
  2: "Part 2 — 25 essential verbs",
  3: "Part 3 — Advanced tenses",
  4: "Part 4 — 47 thematic verbs",
  5: "Part 5 — Consolidation",
};

const p = (
  number: number,
  title: string,
  part: 1 | 2 | 3 | 4 | 5,
  kind: CourseEntry["kind"] = "chapter",
  status: CourseEntry["status"] = "planned",
): CourseEntry => ({
  id: kind === "chapter" ? `chapter-${String(number).padStart(2, "0")}` : `${kind}-${number}`,
  number,
  title,
  part,
  kind,
  status,
});

export const courseMap: CourseEntry[] = [
  // Part 1
  p(1, "How the English verb works", 1, "chapter", "available"),
  p(2, "Present Simple", 1, "chapter", "available"),
  p(3, "Present Continuous", 1, "chapter", "available"),
  p(4, "Past Simple", 1, "chapter", "available"),
  p(5, "Past Continuous", 1, "chapter", "available"),
  p(6, "Future", 1, "chapter", "available"),
  { id: "review-1", number: 6.5, title: "Review 1", part: 1, kind: "review", status: "available" },
  // Part 2
  p(7, "be / have / do / go", 2, "chapter", "available"),
  p(8, "get / make / take / give", 2, "chapter", "available"),
  p(9, "come / put / see / look", 2, "chapter", "available"),
  p(10, "know / think / want / use", 2, "chapter", "available"),
  p(11, "find / tell / ask / work", 2, "chapter", "available"),
  p(12, "seem / feel / try / leave / call", 2, "chapter", "available"),
  { id: "review-2", number: 12.5, title: "Review 2", part: 2, kind: "review", status: "available" },
  // Part 3
  p(13, "Present Perfect", 3, "chapter", "available"),
  p(14, "Present Perfect Continuous", 3, "chapter", "available"),
  p(15, "Past Perfect", 3, "chapter", "available"),
  p(16, "Modal Verbs", 3, "chapter", "available"),
  p(17, "Conditionals 0 / 1 / 2", 3, "chapter", "available"),
  p(18, "Passive Voice", 3, "chapter", "available"),
  { id: "review-3", number: 18.5, title: "Review 3", part: 3, kind: "review", status: "available" },
  // Part 4
  p(19, "Movement & Travel", 4, "chapter", "available"),
  p(20, "Communication", 4, "chapter", "available"),
  p(21, "Work & Study", 4, "chapter", "available"),
  p(22, "Home & Daily Life", 4, "chapter", "available"),
  p(23, "Feelings & Opinions", 4, "chapter", "available"),
  p(24, "Health", 4, "chapter", "available"),
  p(25, "Money & Shopping", 4, "chapter", "available"),
  p(26, "Plans, Problems & Technology", 4, "chapter", "available"),
  { id: "review-4", number: 26.5, title: "Review 4", part: 4, kind: "review", status: "available" },
  // Part 5
  p(27, "Phrasal Verb System", 5, "chapter", "available"),
  p(28, "Irregular Verb Map", 5, "chapter", "available"),
  p(29, "Mixed Verb Marathon", 5, "chapter", "available"),
  { id: "exam-final", number: 30, title: "B1 Final Exam", part: 5, kind: "exam", status: "available" },
];
