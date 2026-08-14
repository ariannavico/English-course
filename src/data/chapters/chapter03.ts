import type { Chapter } from "@/types";

export const chapter03: Chapter = {
  id: "chapter-03",
  number: 3,
  title: "Present Continuous",
  part: 1,
  cefrLevel: "A2",
  description:
    "Actions happening now, temporary situations — and when NOT to use it (stative verbs).",
  objectives: [
    "Form the present continuous (am/is/are + -ing)",
    "Choose between 'now' (continuous) and 'habit' (simple)",
    "Avoid the continuous with stative verbs",
  ],
  grammarTopics: ["present-continuous"],
  verbIds: ["take"],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 20,
  sections: [
    {
      id: "ch3-intro",
      type: "explanation",
      title: "Happening now",
      content:
        "Use the present continuous for what is happening at this moment or around now. Compare it constantly with the present simple you learned in Chapter 2.",
      references: ["present-continuous"],
    },
    {
      id: "ch3-compare",
      type: "comparison",
      title: "Now vs habit — the key contrast",
      content:
        "Present simple = a habit or general truth. Present continuous = happening now or temporarily. This is the single most useful distinction at A2.",
    },
    {
      id: "ch3-drill",
      type: "exercise",
      title: "Practice",
      references: [
        "ex-ch3-form-1",
        "ex-ch3-nowvshabit-1",
        "ex-ch3-stative-1",
        "ex-ch3-mixed-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-ch3-form-1",
    "ex-ch3-nowvshabit-1",
    "ex-ch3-stative-1",
    "ex-ch3-mixed-1",
  ],
};
