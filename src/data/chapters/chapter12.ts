import type { Chapter } from "@/types";

export const chapter12: Chapter = {
  id: "chapter-12",
  number: 12,
  title: "seem / feel / try / leave / call",
  part: 2,
  cefrLevel: "B1",
  description:
    "Impressions, emotions, attempts, departures and phoning — closing the 25 essential verbs.",
  objectives: [
    "Use SEEM and FEEL as stative verbs (no reflexive with feel)",
    "Distinguish 'try to do' (effort) from 'try doing' (experiment)",
    "Separate LEAVE (depart / let stay) from LET (permit)",
    "Use CALL for phoning and naming (no 'to')",
  ],
  grammarTopics: [],
  verbIds: ["seem", "feel", "try", "leave", "call"],
  phrasalVerbIds: ["try-on", "try-out", "leave-out", "call-back", "call-off"],
  vocabularyIds: [],
  estimatedMinutes: 34,
  sections: [
    {
      id: "ch12-intro",
      type: "explanation",
      title: "Feelings, attempts and departures",
      content:
        "The last five essential verbs. Several are stative (seem, feel), and each has a precise structure to get right. Open the cards, then take the mixed practice.",
    },
    { id: "ch12-seem", type: "verb", title: "SEEM — appear to be", references: ["seem"] },
    { id: "ch12-feel", type: "verb", title: "FEEL — emotions & 'feel like'", references: ["feel"] },
    { id: "ch12-try", type: "verb", title: "TRY — to do vs doing", references: ["try"] },
    { id: "ch12-leave", type: "verb", title: "LEAVE — depart & let stay", references: ["leave"] },
    { id: "ch12-call", type: "verb", title: "CALL — phone & name", references: ["call"] },
    {
      id: "ch12-practice",
      type: "exercise",
      title: "Mixed practice",
      references: ["ex-seem-vs-look-1", "ex-feel-like-1", "ex-try-to-1", "ex-leave-vs-let-1", "ex-call-error-1", "ex-ch12-mixed-1"],
    },
  ],
  exerciseIds: ["ex-seem-vs-look-1", "ex-feel-like-1", "ex-try-to-1", "ex-leave-vs-let-1", "ex-call-error-1", "ex-ch12-mixed-1"],
};
