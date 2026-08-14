import type { Chapter } from "@/types";

/**
 * Chapter 29 — Mixed Verb Marathon. A cumulative gauntlet curated from
 * exercises across the whole course (spec §41): no new items, just the toughest
 * decision points from Parts 1–4 mixed together and unlabelled.
 */
export const chapter29: Chapter = {
  id: "chapter-29",
  number: 29,
  title: "Mixed Verb Marathon",
  part: 5,
  cefrLevel: "B1",
  description:
    "A long, mixed run of the trickiest verb and tense decisions from the whole course. No hints — just like real English.",
  objectives: [
    "Switch between tenses and verbs with no prompts",
    "Recall the traps: tell/say, do/make, come/go, arrive at, pay for, want someone to",
    "Build stamina for the final exam",
  ],
  grammarTopics: [],
  verbIds: ["take", "make", "do", "tell", "come", "want", "pay", "arrive", "prefer"],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 30,
  sections: [
    {
      id: "ch29-intro",
      type: "review",
      title: "The marathon",
      content:
        "Twelve questions drawn from across the course, in no particular order and with no rule named. Pace yourself — this is your dress rehearsal for the B1 exam.",
    },
    {
      id: "ch29-practice",
      type: "exercise",
      title: "Marathon practice",
      references: [
        "ex-ch13-mixed-1",
        "ex-rev2-domake-1",
        "ex-catch-transport-1",
        "ex-pay-1",
        "ex-ch17-first-1",
        "ex-say-vs-tell-1",
        "ex-take-tense-1",
        "ex-ch16-mustnt-1",
        "ex-prefer-1",
        "ex-arrive-prep-1",
        "ex-ch18-transform-1",
        "ex-want-sb-to-1",
      ],
    },
  ],
  exerciseIds: [
    "ex-ch13-mixed-1",
    "ex-rev2-domake-1",
    "ex-catch-transport-1",
    "ex-pay-1",
    "ex-ch17-first-1",
    "ex-say-vs-tell-1",
    "ex-take-tense-1",
    "ex-ch16-mustnt-1",
    "ex-prefer-1",
    "ex-arrive-prep-1",
    "ex-ch18-transform-1",
    "ex-want-sb-to-1",
  ],
};
