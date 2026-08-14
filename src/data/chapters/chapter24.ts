import type { Chapter } from "@/types";

export const chapter24: Chapter = {
  id: "chapter-24",
  number: 24,
  title: "Health",
  part: 4,
  cefrLevel: "B1",
  description: "hurt, rest, exercise, recover from, and breathe (not 'breath') — the language of health.",
  objectives: [
    "Use HURT for pain ('my back hurts', 'I hurt my leg')",
    "Use 'recover from' an illness",
    "Spell the verb 'breathe' correctly",
  ],
  grammarTopics: [],
  verbIds: ["hurt", "rest", "exercise", "recover", "breathe"],
  phrasalVerbIds: [],
  vocabularyIds: ["vocab-illness", "vocab-medicine"],
  estimatedMinutes: 24,
  sections: [
    { id: "ch24-intro", type: "explanation", title: "Talking about health", content: "Verbs for pain, rest and recovery. Watch the invariable 'hurt' and the breathe/breath pair. Then practise." },
    { id: "ch24-verbs", type: "verb", title: "The health verbs", references: ["hurt", "rest", "exercise", "recover", "breathe"] },
    { id: "ch24-vocab", type: "vocabulary", title: "Vocabulary", references: ["vocab-illness", "vocab-medicine"] },
    { id: "ch24-practice", type: "exercise", title: "Mixed practice", references: ["ex-hurt-1", "ex-rest-1", "ex-exercise-1", "ex-recover-1", "ex-breathe-1", "ex-ch24-mixed-1"] },
  ],
  exerciseIds: ["ex-hurt-1", "ex-rest-1", "ex-exercise-1", "ex-recover-1", "ex-breathe-1", "ex-ch24-mixed-1"],
};
