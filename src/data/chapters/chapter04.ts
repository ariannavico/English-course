import type { Chapter } from "@/types";

export const chapter04: Chapter = {
  id: "chapter-04",
  number: 4,
  title: "Past Simple",
  part: 1,
  cefrLevel: "A2",
  description:
    "Finished actions at a definite past time — regular -ed, irregular forms, and did/didn't + base.",
  objectives: [
    "Use the past simple for finished past actions",
    "Recall irregular past forms",
    "Form negatives and questions with did + the base verb",
  ],
  grammarTopics: ["past-simple"],
  verbIds: ["take"],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 22,
  sections: [
    {
      id: "ch4-intro",
      type: "explanation",
      title: "The finished past",
      content:
        "Use the past simple when the action is finished and the time is (or is understood to be) definite: yesterday, last week, in 2019.",
      references: ["past-simple"],
    },
    {
      id: "ch4-verb",
      type: "verb",
      title: "TAKE in the past",
      content: "take → took (past) → taken (past participle). It's irregular.",
      references: ["take"],
    },
    {
      id: "ch4-drill",
      type: "exercise",
      title: "Practice",
      references: [
        "ex-ch4-irregular-1",
        "ex-ch4-did-1",
        "ex-ch4-builder-1",
        "ex-ch4-mixed-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-ch4-irregular-1",
    "ex-ch4-did-1",
    "ex-ch4-builder-1",
    "ex-ch4-mixed-1",
  ],
};
