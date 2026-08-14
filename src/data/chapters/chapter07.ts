import type { Chapter } from "@/types";

export const chapter07: Chapter = {
  id: "chapter-07",
  number: 7,
  title: "be / have / do / go",
  part: 2,
  cefrLevel: "A2",
  description:
    "The four most frequent verbs in English — and the Italian traps hidden inside them (be hungry, do vs make, go home).",
  objectives: [
    "Use BE for states and age where Italian uses 'avere'",
    "Separate DO (activity) from MAKE (result)",
    "Use HAVE for possession, activities and obligation",
    "Get the prepositions right with GO (go home, go on holiday)",
  ],
  grammarTopics: [],
  verbIds: ["be", "have", "do", "go"],
  phrasalVerbIds: ["go-on", "go-out", "go-back", "do-up"],
  vocabularyIds: [],
  estimatedMinutes: 30,
  sections: [
    {
      id: "ch7-intro",
      type: "explanation",
      title: "Four verbs, everywhere",
      content:
        "These four verbs appear in almost every English sentence. Each hides a common Italian-learner mistake — open the full cards below, then practise.",
    },
    { id: "ch7-be", type: "verb", title: "BE — essere (and 'avere' states)", references: ["be"] },
    { id: "ch7-have", type: "verb", title: "HAVE — possess, do activities, obligation", references: ["have"] },
    { id: "ch7-do", type: "verb", title: "DO — perform an activity", references: ["do"] },
    { id: "ch7-go", type: "verb", title: "GO — move, and go + -ing", references: ["go"] },
    {
      id: "ch7-practice",
      type: "exercise",
      title: "Mixed practice",
      references: ["ex-be-states-1", "ex-have-to-1", "ex-do-vs-make-1", "ex-go-prep-1", "ex-ch7-mixed-1"],
    },
  ],
  exerciseIds: ["ex-be-states-1", "ex-have-to-1", "ex-do-vs-make-1", "ex-go-prep-1", "ex-ch7-mixed-1"],
};
