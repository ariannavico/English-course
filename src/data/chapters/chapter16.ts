import type { Chapter } from "@/types";

export const chapter16: Chapter = {
  id: "chapter-16",
  number: 16,
  title: "Modal Verbs",
  part: 3,
  cefrLevel: "B1",
  description:
    "can, must, should, may, might and friends: ability, obligation, advice, possibility — all with the base form.",
  objectives: [
    "Use modal + base form (no 'to', no -s)",
    "Express ability, permission, obligation and advice",
    "Distinguish mustn't (forbidden) from don't have to (not necessary)",
    "Use may / might / must for possibility and certainty",
  ],
  grammarTopics: ["modal-verbs"],
  verbIds: [],
  phrasalVerbIds: [],
  vocabularyIds: [],
  estimatedMinutes: 28,
  sections: [
    {
      id: "ch16-intro",
      type: "explanation",
      title: "Adding meaning to verbs",
      content:
        "Modals colour a verb with ability, obligation or likelihood. The grammar is easy — base form always — but the meanings need care.",
      references: ["modal-verbs"],
    },
    {
      id: "ch16-compare",
      type: "comparison",
      title: "mustn't vs don't have to",
      content:
        "mustn't = it is forbidden. don't have to = there is no obligation (but you may). A classic false friend.",
    },
    {
      id: "ch16-practice",
      type: "exercise",
      title: "Practice",
      references: ["ex-ch16-form-1", "ex-ch16-obligation-1", "ex-ch16-mustnt-1", "ex-ch16-mixed-1"],
    },
  ],
  exerciseIds: ["ex-ch16-form-1", "ex-ch16-obligation-1", "ex-ch16-mustnt-1", "ex-ch16-mixed-1"],
};
