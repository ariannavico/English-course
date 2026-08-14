import type { Chapter } from "@/types";

export const chapter10: Chapter = {
  id: "chapter-10",
  number: 10,
  title: "know / think / want / use",
  part: 2,
  cefrLevel: "B1",
  description:
    "Verbs of the mind. Stative uses, sapere vs conoscere, 'want someone to do', and 'used to' for past habits.",
  objectives: [
    "Use KNOW for both 'sapere' and 'conoscere'",
    "Separate THINK (opinion, stative) from THINK about (process)",
    "Build 'want + someone + to + infinitive' correctly",
    "Use 'used to' for finished past habits",
  ],
  grammarTopics: [],
  verbIds: ["know", "think", "want", "use"],
  phrasalVerbIds: ["use-up"],
  vocabularyIds: ["vocab-schedule"],
  estimatedMinutes: 32,
  sections: [
    {
      id: "ch10-intro",
      type: "explanation",
      title: "Verbs of the mind",
      content:
        "Most of these are stative — they resist the continuous — and each carries a specific Italian trap. The cards below make the traps explicit.",
    },
    { id: "ch10-know", type: "verb", title: "KNOW — sapere & conoscere", references: ["know"] },
    { id: "ch10-think", type: "verb", title: "THINK — opinion vs process", references: ["think"] },
    { id: "ch10-want", type: "verb", title: "WANT — want someone to do", references: ["want"] },
    { id: "ch10-use", type: "verb", title: "USE — and 'used to'", references: ["use"] },
    {
      id: "ch10-practice",
      type: "exercise",
      title: "Mixed practice",
      references: ["ex-know-vs-think-1", "ex-think-opinion-1", "ex-want-sb-to-1", "ex-use-usedto-1", "ex-ch10-mixed-1"],
    },
  ],
  exerciseIds: ["ex-know-vs-think-1", "ex-think-opinion-1", "ex-want-sb-to-1", "ex-use-usedto-1", "ex-ch10-mixed-1"],
};
