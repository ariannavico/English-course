import type { Chapter } from "@/types";

export const chapter01: Chapter = {
  id: "chapter-01",
  number: 1,
  title: "How the English verb works",
  part: 1,
  cefrLevel: "A2",
  description:
    "The foundation: the five verb forms and how every tense is built from them.",
  objectives: [
    "Recognise the five forms of any verb",
    "Understand the difference between regular and irregular verbs",
    "See how forms combine to make tenses",
  ],
  grammarTopics: ["verb-forms"],
  verbIds: ["take", "make"],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 15,
  sections: [
    {
      id: "ch1-intro",
      type: "explanation",
      title: "One verb, five forms",
      content:
        "Before learning tenses, learn the building blocks. Every English verb has five forms. Master these and tenses become assembly, not memorisation.",
      references: ["verb-forms"],
    },
    {
      id: "ch1-forms",
      type: "explanation",
      title: "The five forms in detail",
      references: ["verb-forms"],
    },
    {
      id: "ch1-verb-take",
      type: "verb",
      title: "See it in action: TAKE",
      content: "TAKE is irregular. Notice past (took) and past participle (taken) differ.",
      references: ["take"],
    },
    {
      id: "ch1-practice",
      type: "exercise",
      title: "Practice: match the forms",
      references: ["ex-ch1-forms-1"],
    },
  ],
  exerciseIds: ["ex-ch1-forms-1"],
};
