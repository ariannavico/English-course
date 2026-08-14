import type { Chapter } from "@/types";

export const chapter11: Chapter = {
  id: "chapter-11",
  number: 11,
  title: "find / tell / ask / work",
  part: 2,
  cefrLevel: "A2+",
  description:
    "Discovering, informing, requesting and working — with the tell-vs-say and ask-a-question traps.",
  objectives: [
    "Separate FIND (result) from LOOK FOR (search)",
    "Use TELL + person, and distinguish it from SAY",
    "ASK a question (not 'make' one) and use 'ask for'",
    "Use WORK as / for, and 'work' for machines that (don't) function",
  ],
  grammarTopics: [],
  verbIds: ["find", "tell", "ask", "work"],
  phrasalVerbIds: ["find-out", "tell-off", "ask-for", "ask-out", "work-out"],
  vocabularyIds: [],
  estimatedMinutes: 30,
  sections: [
    {
      id: "ch11-intro",
      type: "explanation",
      title: "Information verbs",
      content:
        "This group is full of Italian-learner traps: find vs look for, tell vs say, and 'ask a question' (never 'make a question'). Open each card, then practise.",
    },
    { id: "ch11-find", type: "verb", title: "FIND — locate & discover", references: ["find"] },
    { id: "ch11-tell", type: "verb", title: "TELL — inform a person", references: ["tell"] },
    { id: "ch11-ask", type: "verb", title: "ASK — request", references: ["ask"] },
    { id: "ch11-work", type: "verb", title: "WORK — job & function", references: ["work"] },
    {
      id: "ch11-practice",
      type: "exercise",
      title: "Mixed practice",
      references: ["ex-find-vs-lookfor-1", "ex-tell-vs-say-1", "ex-ask-question-1", "ex-work-as-1", "ex-ch11-mixed-1"],
    },
  ],
  exerciseIds: ["ex-find-vs-lookfor-1", "ex-tell-vs-say-1", "ex-ask-question-1", "ex-work-as-1", "ex-ch11-mixed-1"],
};
