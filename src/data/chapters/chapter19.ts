import type { Chapter } from "@/types";

export const chapter19: Chapter = {
  id: "chapter-19",
  number: 19,
  title: "Movement & Travel",
  part: 4,
  cefrLevel: "A2+",
  description:
    "Six travel verbs and the prepositions that trip Italians up: arrive at/in, catch vs miss, and the irregular forms.",
  objectives: [
    "Use arrive AT / IN (never 'arrive to')",
    "Choose CATCH vs MISS for transport",
    "Recall the irregular forms: drove, flew, caught",
    "Say 'I miss you' with the reversed structure",
  ],
  grammarTopics: [],
  verbIds: ["travel", "arrive", "drive", "fly", "catch", "miss"],
  phrasalVerbIds: ["catch-up"],
  vocabularyIds: ["vocab-flight", "vocab-platform", "vocab-luggage"],
  estimatedMinutes: 30,
  sections: [
    {
      id: "ch19-intro",
      type: "explanation",
      title: "Getting from A to B",
      content:
        "This topic is full of preposition and irregular-form traps. Open the cards, notice arrive at/in and catch vs miss, then practise.",
    },
    {
      id: "ch19-verbs",
      type: "verb",
      title: "The travel verbs",
      references: ["travel", "arrive", "drive", "fly", "catch", "miss"],
    },
    {
      id: "ch19-vocab",
      type: "vocabulary",
      title: "Travel vocabulary",
      references: ["vocab-flight", "vocab-platform", "vocab-luggage"],
    },
    {
      id: "ch19-practice",
      type: "exercise",
      title: "Mixed practice",
      references: [
        "ex-travel-by-1",
        "ex-arrive-prep-1",
        "ex-drive-past-1",
        "ex-fly-past-1",
        "ex-catch-transport-1",
        "ex-miss-transport-1",
        "ex-ch19-mixed-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-travel-by-1",
    "ex-arrive-prep-1",
    "ex-drive-past-1",
    "ex-fly-past-1",
    "ex-catch-transport-1",
    "ex-miss-transport-1",
    "ex-ch19-mixed-1",
  ],
};
