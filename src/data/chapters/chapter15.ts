import type { Chapter } from "@/types";

export const chapter15: Chapter = {
  id: "chapter-15",
  number: 15,
  title: "Past Perfect",
  part: 3,
  cefrLevel: "B1",
  description:
    "The 'earlier past': an action finished before another past action, for clear sequencing.",
  objectives: [
    "Form the past perfect (had + past participle)",
    "Show which of two past events happened first",
    "Combine it with the past simple in narrative",
    "Avoid overusing it when order is already clear",
  ],
  grammarTopics: ["past-perfect"],
  verbIds: [],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 24,
  sections: [
    {
      id: "ch15-intro",
      type: "explanation",
      title: "A step further back",
      content:
        "When you're already talking about the past and need to refer to something even earlier, use the past perfect.",
      references: ["past-perfect"],
    },
    {
      id: "ch15-practice",
      type: "exercise",
      title: "Practice",
      references: ["ex-ch15-form-1", "ex-ch15-sequence-1", "ex-ch15-vs-past-1", "ex-ch15-mixed-1"],
    },
  ],
  exerciseIds: ["ex-ch15-form-1", "ex-ch15-sequence-1", "ex-ch15-vs-past-1", "ex-ch15-mixed-1"],
};
