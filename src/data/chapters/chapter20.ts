import type { Chapter } from "@/types";

export const chapter20: Chapter = {
  id: "chapter-20",
  number: 20,
  title: "Communication",
  part: 4,
  cefrLevel: "A2+",
  description:
    "Speak, talk, say, answer, explain and mean — the verbs of talking, and the prepositions they don't take.",
  objectives: [
    "Choose SPEAK vs TALK vs SAY vs TELL",
    "Use ANSWER with a direct object (no 'to')",
    "Use 'explain something TO someone'",
    "Keep MEAN in the present simple (stative)",
  ],
  grammarTopics: [],
  verbIds: ["speak", "talk", "say", "answer", "explain", "mean"],
  phrasalVerbIds: ["speak-up"],
  vocabularyIds: ["vocab-conversation", "vocab-message", "vocab-language"],
  estimatedMinutes: 30,
  sections: [
    {
      id: "ch20-intro",
      type: "explanation",
      title: "The verbs of talking",
      content:
        "English splits 'parlare' and 'dire' across several verbs, each with its own preposition rules. The cards below make the differences explicit.",
    },
    {
      id: "ch20-verbs",
      type: "verb",
      title: "The communication verbs",
      references: ["speak", "talk", "say", "answer", "explain", "mean"],
    },
    {
      id: "ch20-vocab",
      type: "vocabulary",
      title: "Communication vocabulary",
      references: ["vocab-conversation", "vocab-message", "vocab-language"],
    },
    {
      id: "ch20-practice",
      type: "exercise",
      title: "Mixed practice",
      references: [
        "ex-speak-vs-talk-1",
        "ex-talk-about-1",
        "ex-say-vs-tell-1",
        "ex-answer-prep-1",
        "ex-explain-to-1",
        "ex-mean-signify-1",
        "ex-ch20-mixed-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-speak-vs-talk-1",
    "ex-talk-about-1",
    "ex-say-vs-tell-1",
    "ex-answer-prep-1",
    "ex-explain-to-1",
    "ex-mean-signify-1",
    "ex-ch20-mixed-1",
  ],
};
