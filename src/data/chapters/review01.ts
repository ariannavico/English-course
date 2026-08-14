import type { Chapter } from "@/types";

/**
 * Review 1 — modelled as a Chapter so it reuses the ChapterPage renderer and
 * scoring. It is cumulative across Part 1 (Chapters 1–6): forms, present
 * simple/continuous, past simple/continuous, future, plus TAKE and its phrasal
 * verbs from the essential-verbs work (spec §42).
 */
export const review01: Chapter = {
  id: "review-1",
  number: 6.5,
  title: "Review 1 — Foundations",
  part: 1,
  cefrLevel: "A2+",
  description:
    "A cumulative check across everything in Part 1. Old material comes back on purpose.",
  objectives: [
    "Mix all Part 1 tenses without prompts",
    "Recover irregular past forms from memory",
    "Choose the right verb, form and construction under time pressure",
  ],
  grammarTopics: ["verb-forms", "present-simple", "past-simple", "future-forms"],
  verbIds: ["take", "make"],
  phrasalVerbIds: ["take-off"],
  vocabularyIds: [],
  estimatedMinutes: 25,
  sections: [
    {
      id: "rev1-intro",
      type: "review",
      title: "How this review works",
      content:
        "The exercises below don't tell you which rule they're testing — that's the point. If something feels shaky, open the chapter it came from and try again.",
    },
    {
      id: "rev1-practice",
      type: "review",
      title: "Cumulative practice",
      references: [
        "ex-rev1-forms-1",
        "ex-rev1-tense-1",
        "ex-rev1-past-1",
        "ex-rev1-interrupt-1",
        "ex-rev1-verbchoice-1",
        "ex-rev1-phrasal-1",
        "ex-rev1-future-1",
        "ex-rev1-translation-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-rev1-forms-1",
    "ex-rev1-tense-1",
    "ex-rev1-past-1",
    "ex-rev1-interrupt-1",
    "ex-rev1-verbchoice-1",
    "ex-rev1-phrasal-1",
    "ex-rev1-future-1",
    "ex-rev1-translation-1",
  ],
};
