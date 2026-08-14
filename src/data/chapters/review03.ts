import type { Chapter } from "@/types";

/**
 * Review 3 — cumulative across Parts 1–3 (Chapters 1–18), modelled as a Chapter.
 * The advanced tenses return mixed with earlier tenses and essential verbs,
 * with no label on which rule is tested (spec §42).
 */
export const review03: Chapter = {
  id: "review-3",
  number: 18.5,
  title: "Review 3 — Advanced tenses",
  part: 3,
  cefrLevel: "B1",
  description:
    "A cumulative check across Parts 1–3. Present perfect, past perfect, modals, conditionals and the passive, mixed with everything before.",
  objectives: [
    "Choose between present perfect and past simple under pressure",
    "Sequence the past correctly with the past perfect",
    "Apply modals, conditionals and the passive without prompts",
  ],
  grammarTopics: ["present-perfect", "past-perfect", "modal-verbs", "conditionals", "passive-voice"],
  verbIds: ["make", "do", "see"],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 30,
  sections: [
    {
      id: "rev3-intro",
      type: "review",
      title: "How this review works",
      content:
        "No question tells you its rule. When one feels shaky, trace it back to its chapter and revisit the explanation.",
    },
    {
      id: "rev3-practice",
      type: "review",
      title: "Cumulative practice",
      references: [
        "ex-rev3-pp-past-1",
        "ex-rev3-forsince-1",
        "ex-rev3-pastperfect-1",
        "ex-rev3-modal-1",
        "ex-rev3-conditional-1",
        "ex-rev3-passive-1",
        "ex-rev3-ppc-1",
        "ex-rev3-verbchoice-1",
        "ex-rev3-translation-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-rev3-pp-past-1",
    "ex-rev3-forsince-1",
    "ex-rev3-pastperfect-1",
    "ex-rev3-modal-1",
    "ex-rev3-conditional-1",
    "ex-rev3-passive-1",
    "ex-rev3-ppc-1",
    "ex-rev3-verbchoice-1",
    "ex-rev3-translation-1",
  ],
};
