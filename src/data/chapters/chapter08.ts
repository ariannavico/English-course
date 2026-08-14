import type { Chapter } from "@/types";

export const chapter08: Chapter = {
  id: "chapter-08",
  number: 8,
  title: "get / make / take / give",
  part: 2,
  cefrLevel: "A2+",
  description:
    "Four high-frequency verbs of obtaining, producing, carrying and transferring — and the choices between them.",
  objectives: [
    "Use GET for obtaining, becoming and arriving",
    "Separate MAKE (produce) from DO (activity) and from TAKE (photo, bus)",
    "Choose TAKE vs GIVE vs GET by direction of transfer",
    "Use the two GIVE patterns correctly",
  ],
  grammarTopics: [],
  verbIds: ["get", "make", "take", "give"],
  phrasalVerbIds: ["get-on", "get-off", "give-up", "give-back", "make-up", "take-off"],
  vocabularyIds: ["vocab-break"],
  estimatedMinutes: 32,
  sections: [
    {
      id: "ch8-intro",
      type: "explanation",
      title: "The verbs of exchange",
      content:
        "GET (obtain), MAKE (produce), TAKE (carry/accept) and GIVE (transfer) overlap in Italian but not in English. The full cards below focus on the choice between them.",
    },
    { id: "ch8-get", type: "verb", title: "GET — obtain, become, arrive", references: ["get"] },
    { id: "ch8-make", type: "verb", title: "MAKE — produce and cause", references: ["make"] },
    { id: "ch8-take", type: "verb", title: "TAKE — carry, accept, use", references: ["take"] },
    { id: "ch8-give", type: "verb", title: "GIVE — transfer to someone", references: ["give"] },
    {
      id: "ch8-vocab",
      type: "vocabulary",
      title: "Linked word: break",
      references: ["vocab-break"],
    },
    {
      id: "ch8-practice",
      type: "exercise",
      title: "Mixed practice",
      references: ["ex-get-vs-take-1", "ex-give-collocation-1", "ex-make-cause-1", "ex-take-verbchoice-1", "ex-ch8-mixed-1"],
    },
  ],
  exerciseIds: ["ex-get-vs-take-1", "ex-give-collocation-1", "ex-make-cause-1", "ex-take-verbchoice-1", "ex-ch8-mixed-1"],
};
