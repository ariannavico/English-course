import type { Chapter } from "@/types";

export const chapter18: Chapter = {
  id: "chapter-18",
  number: 18,
  title: "Passive Voice",
  part: 3,
  cefrLevel: "B1",
  description:
    "be + past participle: focus on the action or the receiver when the doer is unknown or unimportant.",
  objectives: [
    "Form the passive (be + past participle)",
    "Decide when the passive is better than the active",
    "Add the agent with 'by' only when it matters",
    "Put the tense on 'be' across present, past and perfect",
  ],
  grammarTopics: ["passive-voice"],
  verbIds: [],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 26,
  sections: [
    {
      id: "ch18-intro",
      type: "explanation",
      title: "When the doer doesn't matter",
      content:
        "The passive moves the receiver of the action to the front. Use it when who did it is unknown, obvious or unimportant.",
      references: ["passive-voice"],
    },
    {
      id: "ch18-practice",
      type: "exercise",
      title: "Practice",
      references: ["ex-ch18-form-1", "ex-ch18-transform-1", "ex-ch18-by-1", "ex-ch18-mixed-1"],
    },
  ],
  exerciseIds: ["ex-ch18-form-1", "ex-ch18-transform-1", "ex-ch18-by-1", "ex-ch18-mixed-1"],
};
