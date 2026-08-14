import type { Chapter } from "@/types";

export const chapter14: Chapter = {
  id: "chapter-14",
  number: 14,
  title: "Present Perfect Continuous",
  part: 3,
  cefrLevel: "B1",
  description:
    "have/has been + -ing: duration and ongoing activity, and the result of a recent one.",
  objectives: [
    "Form the present perfect continuous",
    "Emphasise duration with for / since",
    "Explain a present state with a recent activity",
    "Keep stative verbs in the simple form",
  ],
  grammarTopics: ["present-perfect-continuous"],
  verbIds: [],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 24,
  sections: [
    {
      id: "ch14-intro",
      type: "explanation",
      title: "How long, and still going",
      content:
        "This form stresses the activity itself and how long it has lasted, rather than a finished result.",
      references: ["present-perfect-continuous"],
    },
    {
      id: "ch14-compare",
      type: "comparison",
      title: "Simple vs continuous",
      content:
        "Result/completion → present perfect simple ('I've written it'). Activity/duration → continuous ('I've been writing').",
    },
    {
      id: "ch14-practice",
      type: "exercise",
      title: "Practice",
      references: ["ex-ch14-form-1", "ex-ch14-result-1", "ex-ch14-simple-cont-1", "ex-ch14-mixed-1"],
    },
  ],
  exerciseIds: ["ex-ch14-form-1", "ex-ch14-result-1", "ex-ch14-simple-cont-1", "ex-ch14-mixed-1"],
};
