import type { Chapter } from "@/types";

export const chapter17: Chapter = {
  id: "chapter-17",
  number: 17,
  title: "Conditionals 0 / 1 / 2",
  part: 3,
  cefrLevel: "B1",
  description:
    "If… then… — general truths, real future possibilities, and hypothetical situations.",
  objectives: [
    "Use the zero conditional for general truths",
    "Use the first conditional for real future situations",
    "Use the second conditional for hypothetical ones",
    "Never put 'will' in the if-clause of a first conditional",
  ],
  grammarTopics: ["conditionals"],
  verbIds: [],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 28,
  sections: [
    {
      id: "ch17-intro",
      type: "explanation",
      title: "How real is the condition?",
      content:
        "The tenses in the two clauses signal whether the situation is always true, a real future possibility, or just imagined.",
      references: ["conditionals"],
    },
    {
      id: "ch17-practice",
      type: "exercise",
      title: "Practice",
      references: ["ex-ch17-zero-1", "ex-ch17-first-1", "ex-ch17-second-1", "ex-ch17-mixed-1"],
    },
  ],
  exerciseIds: ["ex-ch17-zero-1", "ex-ch17-first-1", "ex-ch17-second-1", "ex-ch17-mixed-1"],
};
