import type { Chapter } from "@/types";

export const chapter28: Chapter = {
  id: "chapter-28",
  number: 28,
  title: "Irregular Verb Map",
  part: 5,
  cefrLevel: "A2+",
  description:
    "Irregular verbs organised by pattern — AAA, ABB, ABA, ABC — not as an alphabetical list.",
  objectives: [
    "Recognise the four irregular patterns",
    "Recall past and past-participle forms from memory",
    "Group new irregular verbs by pattern",
  ],
  grammarTopics: ["irregular-patterns"],
  verbIds: [],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 24,
  sections: [
    {
      id: "ch28-intro",
      type: "explanation",
      title: "Patterns, not a list",
      content:
        "Learning irregular verbs by their vowel-change pattern is far more efficient than memorising an A–Z list. The full interactive map — with a memory-recall quiz — lives in the ‘Irregular Verbs’ section of the app.",
      references: ["irregular-patterns"],
    },
    {
      id: "ch28-practice",
      type: "exercise",
      title: "Practice",
      references: ["ex-ch28-abc-1", "ex-ch28-abb-1", "ex-ch28-aaa-1", "ex-ch28-error-1", "ex-ch28-pattern-1"],
    },
  ],
  exerciseIds: ["ex-ch28-abc-1", "ex-ch28-abb-1", "ex-ch28-aaa-1", "ex-ch28-error-1", "ex-ch28-pattern-1"],
};
