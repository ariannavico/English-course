import type { Chapter } from "@/types";

/**
 * Review 2 — cumulative across Parts 1 & 2 (Chapters 1–12), modelled as a
 * Chapter so it reuses the page renderer and scoring. It brings back the Part 1
 * tenses together with the 25 essential verbs, unlabelled (spec §42).
 */
export const review02: Chapter = {
  id: "review-2",
  number: 12.5,
  title: "Review 2 — Tenses & essential verbs",
  part: 2,
  cefrLevel: "B1",
  description:
    "A cumulative check across Parts 1 and 2. The tenses from Part 1 return, mixed with the 25 essential verbs.",
  objectives: [
    "Switch tenses without prompts",
    "Choose the right essential verb (tell/say, do/make, come/go)",
    "Apply the tricky structures: want someone to, used to, feel like",
  ],
  grammarTopics: ["present-continuous", "past-simple", "future-forms"],
  verbIds: ["tell", "leave", "do", "make", "come", "go", "want", "use", "feel"],
  phrasalVerbIds: ["work-out", "call-off"],
  vocabularyIds: [],
  estimatedMinutes: 28,
  sections: [
    {
      id: "rev2-intro",
      type: "review",
      title: "How this review works",
      content:
        "Nothing tells you which rule is being tested. If a question feels shaky, follow it back to its chapter and revisit the card.",
    },
    {
      id: "rev2-practice",
      type: "review",
      title: "Cumulative practice",
      references: [
        "ex-rev2-tense-1",
        "ex-rev2-past-1",
        "ex-rev2-tell-say-1",
        "ex-rev2-domake-1",
        "ex-rev2-comego-1",
        "ex-rev2-want-1",
        "ex-rev2-future-1",
        "ex-rev2-usedto-1",
        "ex-rev2-translation-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-rev2-tense-1",
    "ex-rev2-past-1",
    "ex-rev2-tell-say-1",
    "ex-rev2-domake-1",
    "ex-rev2-comego-1",
    "ex-rev2-want-1",
    "ex-rev2-future-1",
    "ex-rev2-usedto-1",
    "ex-rev2-translation-1",
  ],
};
