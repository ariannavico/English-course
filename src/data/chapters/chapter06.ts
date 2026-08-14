import type { Chapter } from "@/types";

export const chapter06: Chapter = {
  id: "chapter-06",
  number: 6,
  title: "Future",
  part: 1,
  cefrLevel: "B1",
  description:
    "will vs going to vs present continuous — choosing the future form that matches how planned the action is.",
  objectives: [
    "Use 'will' for spontaneous decisions, predictions and offers",
    "Use 'be going to' for plans and evidence-based predictions",
    "Use the present continuous for fixed arrangements",
  ],
  grammarTopics: ["future-forms"],
  verbIds: [],
  phrasalVerbIds: [],
  vocabularyIds: ["vocab-schedule"],
  estimatedMinutes: 24,
  sections: [
    {
      id: "ch6-intro",
      type: "explanation",
      title: "Three ways to talk about the future",
      content:
        "English doesn't have a single future tense. The form you choose signals how decided or arranged the action is.",
      references: ["future-forms"],
    },
    {
      id: "ch6-vocab",
      type: "vocabulary",
      title: "Useful word: schedule",
      references: ["vocab-schedule"],
    },
    {
      id: "ch6-drill",
      type: "exercise",
      title: "Practice",
      references: [
        "ex-ch6-willvsgoing-1",
        "ex-ch6-going-1",
        "ex-ch6-translation-1",
        "ex-ch6-mixed-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-ch6-willvsgoing-1",
    "ex-ch6-going-1",
    "ex-ch6-translation-1",
    "ex-ch6-mixed-1",
  ],
};
