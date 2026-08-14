import type { Chapter } from "@/types";

/**
 * The B1 Final Exam (spec §46), modelled as a Chapter with id "exam-final" so it
 * is playable from the course map through the standard ChapterPage. The items
 * are fresh (not reused from practice) and each is tagged with the competence it
 * measures — grammar, verb-usage, tense-choice, irregular, phrasal-verbs,
 * vocabulary. Speaking is intentionally not auto-scored.
 */
export const examFinal: Chapter = {
  id: "exam-final",
  number: 30,
  title: "B1 Final Exam",
  part: 5,
  cefrLevel: "B1",
  description:
    "A cumulative, mixed test across the whole course. Scored as a percentage — an internal indicator, not a CEFR certification.",
  objectives: [
    "Demonstrate control of the core tenses",
    "Choose the right verb, form and construction under pressure",
    "Handle irregular forms, phrasal verbs and vocabulary",
  ],
  grammarTopics: [],
  verbIds: ["take", "give", "make", "do", "tell"],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 30,
  sections: [
    {
      id: "exam-intro",
      type: "explanation",
      title: "Before you start",
      content:
        "Ten fresh questions across grammar, verb usage, tense choice, irregular verbs, phrasal verbs and vocabulary. Take your time and finish the whole set to get your score. Remember: this is a personal indicator, not an official CEFR result.",
    },
    {
      id: "exam-practice",
      type: "exercise",
      title: "The exam",
      references: [
        "ex-exam-grammar-1",
        "ex-exam-tense-1",
        "ex-exam-verb-1",
        "ex-exam-irregular-1",
        "ex-exam-phrasal-1",
        "ex-exam-vocab-1",
        "ex-exam-grammar-2",
        "ex-exam-tense-2",
        "ex-exam-verb-2",
        "ex-exam-irregular-2",
      ],
    },
  ],
  exerciseIds: [
    "ex-exam-grammar-1",
    "ex-exam-tense-1",
    "ex-exam-verb-1",
    "ex-exam-irregular-1",
    "ex-exam-phrasal-1",
    "ex-exam-vocab-1",
    "ex-exam-grammar-2",
    "ex-exam-tense-2",
    "ex-exam-verb-2",
    "ex-exam-irregular-2",
  ],
};
