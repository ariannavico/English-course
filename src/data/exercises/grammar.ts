import type { Exercise } from "@/types";

/** Grammar exercises for Chapter 1 (how verbs work) and Chapter 2 (present simple). */
export const grammarExercises: Exercise[] = [
  {
    id: "ex-ch1-forms-1",
    type: "matching",
    instructions: "Match each verb form with its name.",
    difficulty: "easy",
    cefrLevel: "A2",
    points: 20,
    tags: ["forms", "chapter-1"],
    relatedGrammarIds: ["verb-forms"],
    explanation: "English verbs have five basic forms.",
    data: {
      kind: "matching",
      pairs: [
        { id: "p1", left: "take", right: "infinitive" },
        { id: "p2", left: "takes", right: "third person -s" },
        { id: "p3", left: "took", right: "past simple" },
        { id: "p4", left: "taken", right: "past participle" },
        { id: "p5", left: "taking", right: "-ing form" },
      ],
    },
  },
  {
    id: "ex-ch2-present-1",
    type: "fill-blank",
    instructions: "Present simple. Add the third-person -s if needed.",
    difficulty: "easy",
    cefrLevel: "A2",
    points: 10,
    tags: ["present-simple", "chapter-2"],
    relatedGrammarIds: ["present-simple"],
    explanation: "With he/she/it, the present simple adds -s.",
    data: {
      kind: "fill-blank",
      sentence: "She ___ (take) the bus to work every morning.",
      acceptedAnswers: ["takes"],
      explanation: "Third person singular → takes.",
    },
  },
  {
    id: "ex-ch2-present-2",
    type: "multiple-choice",
    instructions: "Choose the correct present simple negative.",
    difficulty: "easy",
    cefrLevel: "A2",
    points: 10,
    tags: ["present-simple", "negative", "chapter-2"],
    relatedGrammarIds: ["present-simple"],
    explanation: "Negatives use don't/doesn't + base form (no -s on the main verb).",
    data: {
      kind: "multiple-choice",
      question: "Which sentence is correct?",
      options: [
        { id: "a", text: "He doesn't take the car." },
        { id: "b", text: "He doesn't takes the car." },
        { id: "c", text: "He don't take the car." },
        { id: "d", text: "He not take the car." },
      ],
      correctOptionId: "a",
    },
  },
  {
    id: "ex-ch2-situation-1",
    type: "situation",
    instructions:
      "Write 2–3 sentences. Then compare with the model answer and rate yourself.",
    difficulty: "medium",
    cefrLevel: "A2+",
    points: 20,
    tags: ["present-simple", "production", "chapter-2"],
    relatedGrammarIds: ["present-simple"],
    explanation:
      "Self-graded. Aim for present simple, correct third-person -s, and a time expression.",
    data: {
      kind: "situation",
      situation:
        "Describe your typical morning routine (getting up, breakfast, going to work/school).",
      targetSkills: ["present-simple", "daily-routine-vocabulary", "adverbs-of-frequency"],
      suggestedElements: ["I usually...", "I always...", "at 7 o'clock", "then"],
      modelAnswer:
        "I usually get up at seven. I have breakfast and then I take the bus to work. I always start at nine.",
      evaluationNotes: [
        "Did you use the present simple throughout?",
        "Did you add -s only where needed?",
        "Did you include a time or frequency word?",
      ],
    },
  },
];
