import type { Chapter } from "@/types";

export const chapter21: Chapter = {
  id: "chapter-21",
  number: 21,
  title: "Work & Study",
  part: 4,
  cefrLevel: "B1",
  description: "study vs learn, teach, earn (not win), apply for, and 'manage to'.",
  objectives: [
    "Separate STUDY (the activity) from LEARN (the result)",
    "Use EARN for money from work (not 'win')",
    "Use 'apply for' a job and 'manage to' do something",
  ],
  grammarTopics: [],
  verbIds: ["study", "learn", "teach", "earn", "apply", "manage"],
  phrasalVerbIds: [],
  vocabularyIds: ["vocab-degree", "vocab-salary"],
  estimatedMinutes: 28,
  sections: [
    { id: "ch21-intro", type: "explanation", title: "Learning and working", content: "Six verbs about school and jobs, each with a precise choice or structure. Open the cards, then practise." },
    { id: "ch21-verbs", type: "verb", title: "The work & study verbs", references: ["study", "learn", "teach", "earn", "apply", "manage"] },
    { id: "ch21-vocab", type: "vocabulary", title: "Vocabulary", references: ["vocab-degree", "vocab-salary"] },
    { id: "ch21-practice", type: "exercise", title: "Mixed practice", references: ["ex-study-1", "ex-learn-1", "ex-teach-1", "ex-earn-1", "ex-apply-1", "ex-manage-1", "ex-ch21-mixed-1"] },
  ],
  exerciseIds: ["ex-study-1", "ex-learn-1", "ex-teach-1", "ex-earn-1", "ex-apply-1", "ex-manage-1", "ex-ch21-mixed-1"],
};
