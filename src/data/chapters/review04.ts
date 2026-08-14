import type { Chapter } from "@/types";

/**
 * Review 4 — cumulative across Parts 1–4 (Chapters 1–26), modelled as a Chapter.
 * Advanced tenses, essential verbs and thematic verbs mixed and unlabelled.
 */
export const review04: Chapter = {
  id: "review-4",
  number: 26.5,
  title: "Review 4 — Everything so far",
  part: 4,
  cefrLevel: "B1",
  description:
    "A cumulative check across Parts 1–4: tenses, the 25 essential verbs and the thematic verbs, all together.",
  objectives: [
    "Choose tenses and verbs with no prompts",
    "Apply the structure traps: want someone to, pay for, arrive at, prefer to",
    "Confirm you're ready for Part 5",
  ],
  grammarTopics: ["present-perfect", "conditionals", "modal-verbs"],
  verbIds: ["come", "go", "want", "pay", "arrive", "buy", "teach", "agree", "miss"],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 28,
  sections: [
    {
      id: "rev4-intro",
      type: "review",
      title: "How this review works",
      content:
        "Nothing tells you the rule. If a question feels shaky, trace it back to its chapter and revisit the card or explanation.",
    },
    {
      id: "rev4-practice",
      type: "review",
      title: "Cumulative practice",
      references: [
        "ex-rev4-tense-1",
        "ex-rev4-conditional-1",
        "ex-rev4-verb-1",
        "ex-rev4-want-1",
        "ex-rev4-pay-1",
        "ex-rev4-arrive-1",
        "ex-rev4-modal-1",
        "ex-rev4-past-1",
        "ex-rev4-agree-1",
        "ex-rev4-translation-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-rev4-tense-1",
    "ex-rev4-conditional-1",
    "ex-rev4-verb-1",
    "ex-rev4-want-1",
    "ex-rev4-pay-1",
    "ex-rev4-arrive-1",
    "ex-rev4-modal-1",
    "ex-rev4-past-1",
    "ex-rev4-agree-1",
    "ex-rev4-translation-1",
  ],
};
