import type { Chapter } from "@/types";

export const chapter13: Chapter = {
  id: "chapter-13",
  number: 13,
  title: "Present Perfect",
  part: 3,
  cefrLevel: "B1",
  description:
    "The bridge between past and now: experience, unfinished time, and the past-simple boundary Italians cross too often.",
  objectives: [
    "Form the present perfect (have/has + past participle)",
    "Use it for experience (ever/never) and recent results (just/already/yet)",
    "Use for / since correctly",
    "Choose past simple for finished past times",
  ],
  grammarTopics: ["present-perfect"],
  verbIds: ["see"],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 26,
  sections: [
    {
      id: "ch13-intro",
      type: "explanation",
      title: "Past action, present relevance",
      content:
        "The present perfect connects a past action to now. The time is indefinite or the result still matters — otherwise you need the past simple.",
      references: ["present-perfect"],
    },
    {
      id: "ch13-compare",
      type: "comparison",
      title: "Present perfect vs past simple",
      content:
        "Ask: is there a finished past time (yesterday, last week)? If yes → past simple. If the time is open or unstated → present perfect.",
    },
    {
      id: "ch13-practice",
      type: "exercise",
      title: "Practice",
      references: ["ex-ch13-experience-1", "ex-ch13-forsince-1", "ex-ch13-vs-past-1", "ex-ch13-mixed-1"],
    },
  ],
  exerciseIds: ["ex-ch13-experience-1", "ex-ch13-forsince-1", "ex-ch13-vs-past-1", "ex-ch13-mixed-1"],
};
