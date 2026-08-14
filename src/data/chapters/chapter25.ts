import type { Chapter } from "@/types";

export const chapter25: Chapter = {
  id: "chapter-25",
  number: 25,
  title: "Money & Shopping",
  part: 4,
  cefrLevel: "A2+",
  description: "buy, sell, pay for, spend on, cost and save — money verbs and their prepositions.",
  objectives: [
    "Recall irregular forms: bought, sold, paid, spent",
    "Use 'pay for' goods and 'spend on' things",
    "Build 'How much does it cost?' correctly",
  ],
  grammarTopics: [],
  verbIds: ["buy", "sell", "pay", "spend", "cost", "save"],
  phrasalVerbIds: [],
  vocabularyIds: ["vocab-bill", "vocab-discount"],
  estimatedMinutes: 26,
  sections: [
    { id: "ch25-intro", type: "explanation", title: "Money matters", content: "Six money verbs, several irregular, each with a preposition or structure to get right. Open the cards, then practise." },
    { id: "ch25-verbs", type: "verb", title: "The money verbs", references: ["buy", "sell", "pay", "spend", "cost", "save"] },
    { id: "ch25-vocab", type: "vocabulary", title: "Vocabulary", references: ["vocab-bill", "vocab-discount"] },
    { id: "ch25-practice", type: "exercise", title: "Mixed practice", references: ["ex-buy-1", "ex-sell-1", "ex-pay-1", "ex-spend-1", "ex-cost-1", "ex-save-1", "ex-ch25-mixed-1"] },
  ],
  exerciseIds: ["ex-buy-1", "ex-sell-1", "ex-pay-1", "ex-spend-1", "ex-cost-1", "ex-save-1", "ex-ch25-mixed-1"],
};
