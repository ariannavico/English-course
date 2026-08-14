import type { Chapter } from "@/types";

export const chapter23: Chapter = {
  id: "chapter-23",
  number: 23,
  title: "Feelings & Opinions",
  part: 4,
  cefrLevel: "B1",
  description: "enjoy/hate + -ing, prefer X to Y, hope (not wait), and the stative believe/agree.",
  objectives: [
    "Use enjoy / hate + -ing (never 'to')",
    "Use 'prefer X to Y'",
    "Say 'I agree' and 'I believe' (not 'I am agree/believing')",
  ],
  grammarTopics: [],
  verbIds: ["enjoy", "prefer", "hate", "hope", "believe", "agree"],
  phrasalVerbIds: [],
  vocabularyIds: ["vocab-opinion", "vocab-mood"],
  estimatedMinutes: 28,
  sections: [
    { id: "ch23-intro", type: "explanation", title: "Saying what you feel", content: "These verbs carry structure traps: enjoy + -ing, prefer X to Y, and the 'I am agree' error. Open the cards, then practise." },
    { id: "ch23-verbs", type: "verb", title: "The feelings & opinions verbs", references: ["enjoy", "prefer", "hate", "hope", "believe", "agree"] },
    { id: "ch23-vocab", type: "vocabulary", title: "Vocabulary", references: ["vocab-opinion", "vocab-mood"] },
    { id: "ch23-practice", type: "exercise", title: "Mixed practice", references: ["ex-enjoy-1", "ex-prefer-1", "ex-hate-1", "ex-hope-1", "ex-believe-1", "ex-agree-1", "ex-ch23-mixed-1"] },
  ],
  exerciseIds: ["ex-enjoy-1", "ex-prefer-1", "ex-hate-1", "ex-hope-1", "ex-believe-1", "ex-agree-1", "ex-ch23-mixed-1"],
};
