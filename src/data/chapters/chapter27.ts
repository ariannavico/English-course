import type { Chapter } from "@/types";

export const chapter27: Chapter = {
  id: "chapter-27",
  number: 27,
  title: "Phrasal Verb System",
  part: 5,
  cefrLevel: "B1",
  description:
    "How phrasal verbs work: base + particle, literal vs idiomatic, and the separable/inseparable word-order rules.",
  objectives: [
    "Understand base verb + particle and how the particle changes meaning",
    "Apply the word order for separable verbs ('turn it off')",
    "Recognise inseparable verbs ('look after them')",
    "Learn phrasal verbs by family",
  ],
  grammarTopics: ["phrasal-verb-system"],
  verbIds: [],
  phrasalVerbIds: ["take-off", "take-up", "take-over", "get-on", "get-off", "give-up", "look-after", "look-for"],
  vocabularyIds: [],
  estimatedMinutes: 28,
  sections: [
    {
      id: "ch27-intro",
      type: "explanation",
      title: "How phrasal verbs work",
      content:
        "You've met dozens of phrasal verbs across the course. This chapter steps back to the system behind them — so new ones are easier to decode.",
      references: ["phrasal-verb-system"],
    },
    {
      id: "ch27-families",
      type: "explanation",
      title: "Learn them by family",
      content: "A few families you already know — notice how one base verb spawns many meanings:",
      references: ["take-off", "take-up", "take-over", "get-on", "get-off", "give-up", "look-after", "look-for"],
    },
    {
      id: "ch27-practice",
      type: "exercise",
      title: "Practice",
      references: ["ex-ch27-meaning-1", "ex-ch27-separable-1", "ex-ch27-inseparable-1", "ex-ch27-particle-1", "ex-ch27-family-1"],
    },
  ],
  exerciseIds: ["ex-ch27-meaning-1", "ex-ch27-separable-1", "ex-ch27-inseparable-1", "ex-ch27-particle-1", "ex-ch27-family-1"],
};
