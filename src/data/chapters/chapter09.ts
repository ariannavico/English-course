import type { Chapter } from "@/types";

export const chapter09: Chapter = {
  id: "chapter-09",
  number: 9,
  title: "come / put / see / look",
  part: 2,
  cefrLevel: "A2+",
  description:
    "Direction (come vs go), placing things (put), and the perception pair see vs look — with their prepositions.",
  objectives: [
    "Choose COME vs GO by direction of movement",
    "Use PUT + place, and the word order of 'put it on'",
    "Separate SEE (perceive) from LOOK at (direct your eyes)",
    "Fix the prepositions: look AT, look FOR",
  ],
  grammarTopics: [],
  verbIds: ["come", "put", "see", "look"],
  phrasalVerbIds: [
    "come-on",
    "come-back",
    "put-on",
    "put-off",
    "put-away",
    "look-for",
    "look-after",
    "look-forward-to",
    "look-up",
  ],
  vocabularyIds: [],
  estimatedMinutes: 30,
  sections: [
    {
      id: "ch9-intro",
      type: "explanation",
      title: "Movement and perception",
      content:
        "These four verbs are where prepositions and direction matter most. Open each card, notice the traps (come vs go, look at vs look for), then practise.",
    },
    { id: "ch9-come", type: "verb", title: "COME — towards here", references: ["come"] },
    { id: "ch9-put", type: "verb", title: "PUT — place something", references: ["put"] },
    { id: "ch9-see", type: "verb", title: "SEE — perceive", references: ["see"] },
    { id: "ch9-look", type: "verb", title: "LOOK — direct your eyes", references: ["look"] },
    {
      id: "ch9-practice",
      type: "exercise",
      title: "Mixed practice",
      references: ["ex-come-vs-go-1", "ex-put-on-1", "ex-see-vs-look-1", "ex-look-at-1", "ex-ch9-mixed-1"],
    },
  ],
  exerciseIds: ["ex-come-vs-go-1", "ex-put-on-1", "ex-see-vs-look-1", "ex-look-at-1", "ex-ch9-mixed-1"],
};
