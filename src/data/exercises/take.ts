import type { Exercise } from "@/types";

/** The 7-level practice ladder for the TAKE card — one per exercise type. */
export const takeExercises: Exercise[] = [
  {
    id: "ex-take-mc-1",
    type: "multiple-choice",
    instructions: "Choose the correct meaning in this context.",
    difficulty: "easy",
    cefrLevel: "A2",
    points: 10,
    tags: ["take", "meaning"],
    relatedVerbIds: ["take"],
    explanation:
      "'It takes + time' means something needs that amount of time.",
    data: {
      kind: "multiple-choice",
      question: "\"It takes an hour to get there.\" What does 'takes' mean here?",
      options: [
        { id: "a", text: "needs / requires (time)" },
        { id: "b", text: "carries an object" },
        { id: "c", text: "accepts money" },
        { id: "d", text: "removes clothing" },
      ],
      correctOptionId: "a",
    },
  },
  {
    id: "ex-take-verbchoice-1",
    type: "verb-choice",
    instructions: "Choose TAKE or BRING. Think about direction.",
    difficulty: "medium",
    cefrLevel: "A2+",
    points: 15,
    tags: ["take", "bring", "verb-choice"],
    relatedVerbIds: ["take", "bring"],
    explanation:
      "Movement towards the speaker → BRING. Here you move the books away to the library → TAKE.",
    data: {
      kind: "verb-choice",
      question: "Please {{blank}} these books back to the library on your way out.",
      options: [
        { id: "take", text: "take" },
        { id: "bring", text: "bring" },
      ],
      correctOptionId: "take",
    },
  },
  {
    id: "ex-take-fill-1",
    type: "fill-blank",
    instructions: "Write the correct form of TAKE.",
    difficulty: "medium",
    cefrLevel: "A2+",
    points: 15,
    tags: ["take", "past-simple", "form"],
    relatedVerbIds: ["take"],
    explanation: "'Yesterday' signals past simple → took.",
    data: {
      kind: "fill-blank",
      sentence: "Yesterday we ___ a taxi to the airport.",
      acceptedAnswers: ["took"],
      explanation: "Past simple of 'take' is the irregular form 'took'.",
    },
  },
  {
    id: "ex-take-tense-1",
    type: "tense-choice",
    instructions: "Which form fits? No tense is named — decide from the context.",
    difficulty: "hard",
    cefrLevel: "B1",
    points: 20,
    tags: ["take", "tense-choice", "present-perfect"],
    relatedVerbIds: ["take"],
    explanation:
      "'three times' + unfinished experience → present perfect: have taken.",
    data: {
      kind: "tense-choice",
      question: "I {{blank}} this exam three times, and I still haven't passed.",
      options: [
        { id: "a", text: "have taken" },
        { id: "b", text: "took" },
        { id: "c", text: "take" },
        { id: "d", text: "am taking" },
      ],
      correctOptionId: "a",
    },
  },
  {
    id: "ex-take-translation-1",
    type: "translation",
    instructions: "Translate into natural English.",
    difficulty: "hard",
    cefrLevel: "B1",
    points: 20,
    tags: ["take", "translation", "it-takes"],
    relatedVerbIds: ["take"],
    explanation:
      "Use the 'it takes + person + time + to do' pattern.",
    data: {
      kind: "translation",
      italianSentence: "Ci metto venti minuti ad arrivare al lavoro.",
      acceptedAnswers: [
        "It takes me twenty minutes to get to work.",
        "It takes me 20 minutes to get to work.",
        "It takes me twenty minutes to get to work",
      ],
      keyElements: ["it takes", "twenty minutes", "to get to work"],
      explanation:
        "Italian 'ci metto' becomes 'it takes me' — a fixed English pattern.",
    },
  },
  {
    id: "ex-take-builder-1",
    type: "sentence-builder",
    instructions: "Put the words in the correct order.",
    difficulty: "medium",
    cefrLevel: "A2+",
    points: 15,
    tags: ["take", "word-order"],
    relatedVerbIds: ["take"],
    explanation: "Subject + verb + object + place: 'take + someone + somewhere'.",
    data: {
      kind: "sentence-builder",
      tokens: ["I'll", "take", "you", "to", "the", "station"],
      solution: ["I'll", "take", "you", "to", "the", "station"],
      explanation: "'take + person + to + place' is the standard pattern.",
    },
  },
  {
    id: "ex-take-error-1",
    type: "error-correction",
    instructions: "Correct the mistake in the sentence.",
    difficulty: "hard",
    cefrLevel: "B1",
    points: 20,
    tags: ["take", "bring", "error-correction"],
    relatedVerbIds: ["take", "bring"],
    explanation: "Movement towards the speaker needs BRING, not TAKE.",
    data: {
      kind: "error-correction",
      incorrectSentence: "Can you take me a glass of water, please?",
      acceptedAnswers: [
        "Can you bring me a glass of water, please?",
        "Can you bring me a glass of water?",
      ],
      explanation: "→ BRING (towards the speaker).",
    },
  },
];

export const makeExercises: Exercise[] = [
  {
    id: "ex-make-vs-do-1",
    type: "verb-choice",
    instructions: "Choose MAKE or DO.",
    difficulty: "medium",
    cefrLevel: "A2+",
    points: 15,
    tags: ["make", "do", "verb-choice"],
    relatedVerbIds: ["make"],
    explanation: "Homework is an activity you DO.",
    data: {
      kind: "verb-choice",
      question: "I have to {{blank}} my homework before dinner.",
      options: [
        { id: "make", text: "make" },
        { id: "do", text: "do" },
      ],
      correctOptionId: "do",
    },
  },
];
