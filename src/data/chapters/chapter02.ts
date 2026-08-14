import type { Chapter } from "@/types";

export const chapter02: Chapter = {
  id: "chapter-02",
  number: 2,
  title: "Present Simple",
  part: 1,
  cefrLevel: "A2",
  description:
    "Habits, routines and facts. The workhorse tense — and the third-person -s that Italians often drop.",
  objectives: [
    "Use the present simple for habits, routines and facts",
    "Add the third-person -s correctly",
    "Form negatives and questions with do / does",
  ],
  grammarTopics: ["present-simple"],
  verbIds: ["take"],
  phrasalVerbIds: ["get-up"],
  vocabularyIds: ["vocab-schedule", "vocab-break"],
  estimatedMinutes: 20,
  sections: [
    {
      id: "ch2-intro",
      type: "explanation",
      title: "When do we use it?",
      content:
        "Use the present simple for things that are generally true: habits, routines, timetables and facts. If you can add 'usually' or 'every day', it is probably present simple.",
      references: ["present-simple"],
    },
    {
      id: "ch2-verb",
      type: "verb",
      title: "TAKE in the present",
      content: "I/you/we/they take · he/she/it takes.",
      references: ["take"],
    },
    {
      id: "ch2-phrasal",
      type: "explanation",
      title: "A routine phrasal verb: get up",
      references: ["get-up"],
    },
    {
      id: "ch2-drill",
      type: "exercise",
      title: "Drill: the third-person -s",
      references: ["ex-ch2-present-1", "ex-ch2-present-2"],
    },
    {
      id: "ch2-produce",
      type: "speaking",
      title: "Produce: your morning routine",
      references: ["ex-ch2-situation-1"],
    },
  ],
  exerciseIds: ["ex-ch2-present-1", "ex-ch2-present-2", "ex-ch2-situation-1"],
};
