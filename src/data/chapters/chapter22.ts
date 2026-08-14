import type { Chapter } from "@/types";

export const chapter22: Chapter = {
  id: "chapter-22",
  number: 22,
  title: "Home & Daily Life",
  part: 4,
  cefrLevel: "A2+",
  description: "cook, clean, wash, wear (vs put on), rent and share — the verbs of everyday life at home.",
  objectives: [
    "Use the everyday chores verbs naturally",
    "Separate WEAR (state) from PUT ON (action)",
    "Use 'share something with someone'",
  ],
  grammarTopics: [],
  verbIds: ["cook", "clean", "wash", "wear", "rent", "share"],
  phrasalVerbIds: ["wash-up"],
  vocabularyIds: ["vocab-housework", "vocab-neighbour"],
  estimatedMinutes: 26,
  sections: [
    { id: "ch22-intro", type: "explanation", title: "Around the house", content: "The verbs of daily routines at home. Notice wear vs put on, then practise." },
    { id: "ch22-verbs", type: "verb", title: "The home verbs", references: ["cook", "clean", "wash", "wear", "rent", "share"] },
    { id: "ch22-vocab", type: "vocabulary", title: "Vocabulary", references: ["vocab-housework", "vocab-neighbour"] },
    { id: "ch22-practice", type: "exercise", title: "Mixed practice", references: ["ex-cook-1", "ex-clean-1", "ex-wash-1", "ex-wear-1", "ex-rent-1", "ex-share-1", "ex-ch22-mixed-1"] },
  ],
  exerciseIds: ["ex-cook-1", "ex-clean-1", "ex-wash-1", "ex-wear-1", "ex-rent-1", "ex-share-1", "ex-ch22-mixed-1"],
};
