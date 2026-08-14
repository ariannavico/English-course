import type { Chapter } from "@/types";

export const chapter05: Chapter = {
  id: "chapter-05",
  number: 5,
  title: "Past Continuous",
  part: 1,
  cefrLevel: "A2+",
  description:
    "An action in progress in the past, and background actions interrupted by the past simple.",
  objectives: [
    "Form the past continuous (was/were + -ing)",
    "Combine it with the past simple for interrupted actions",
    "Use while / when correctly",
  ],
  grammarTopics: ["past-continuous"],
  verbIds: [],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 20,
  sections: [
    {
      id: "ch5-intro",
      type: "explanation",
      title: "In progress in the past",
      content:
        "Use the past continuous for something that was already happening at a past moment. It sets the scene; the past simple often interrupts it.",
      references: ["past-continuous"],
    },
    {
      id: "ch5-compare",
      type: "comparison",
      title: "While + continuous, when + simple",
      content:
        "The long background action takes WHILE + past continuous; the short interrupting action takes WHEN + past simple.",
    },
    {
      id: "ch5-drill",
      type: "exercise",
      title: "Practice",
      references: [
        "ex-ch5-form-1",
        "ex-ch5-interrupt-1",
        "ex-ch5-whilewhen-1",
        "ex-ch5-mixed-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-ch5-form-1",
    "ex-ch5-interrupt-1",
    "ex-ch5-whilewhen-1",
    "ex-ch5-mixed-1",
  ],
};
