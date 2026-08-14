import type { Exercise } from "@/types";
import { choice, err, fill, mc } from "./factories";

/**
 * Review 4 — cumulative across Parts 1–4 (Chapters 1–26). Tenses, essential
 * verbs and thematic verbs, all unlabelled (spec §42).
 */
export const review4Exercises: Exercise[] = [
  choice(
    { id: "ex-rev4-tense-1", instructions: "Choose the natural form.", explanation: "Life experience, no specific time → present perfect.", tags: ["review-4", "present-perfect"], grammar: ["present-perfect"] },
    "tense-choice",
    "I {{blank}} to Japan twice — I love it there.",
    [["have been", true], ["went", false], ["am going", false], ["had been", false]],
  ),
  err(
    { id: "ex-rev4-conditional-1", instructions: "Correct the conditional.", explanation: "No 'will' in the if-clause of a first conditional.", tags: ["review-4", "conditionals"], grammar: ["conditionals"], difficulty: "hard" },
    "If it will be sunny, we will go to the beach.",
    ["If it is sunny, we will go to the beach.", "If it's sunny, we'll go to the beach.", "If it is sunny, we will go to the beach"],
  ),
  choice(
    { id: "ex-rev4-verb-1", instructions: "Choose the right verb.", explanation: "Towards the listener → COME.", tags: ["review-4", "come", "go"], verbs: ["come", "go"] },
    "verb-choice",
    "Your house sounds lovely — can I {{blank}} and see it?",
    [["come", true], ["go", false]],
  ),
  err(
    { id: "ex-rev4-want-1", instructions: "Correct the structure.", explanation: "want + someone + to + infinitive.", tags: ["review-4", "want"], verbs: ["want"], difficulty: "hard" },
    "My parents want that I study more.",
    ["My parents want me to study more.", "My parents want me to study more"],
  ),
  err(
    { id: "ex-rev4-pay-1", instructions: "Correct the preposition.", explanation: "pay FOR the goods you buy.", tags: ["review-4", "pay"], verbs: ["pay"] },
    "I paid the coffees at the bar.",
    ["I paid for the coffees at the bar.", "I paid for the coffees at the bar"],
  ),
  err(
    { id: "ex-rev4-arrive-1", instructions: "Correct the preposition.", explanation: "arrive AT / IN — never 'to'.", tags: ["review-4", "arrive"], verbs: ["arrive"] },
    "We arrived to the hotel very late.",
    ["We arrived at the hotel very late.", "We arrived at the hotel very late"],
  ),
  mc(
    { id: "ex-rev4-modal-1", instructions: "Choose the correct modal.", explanation: "It's not necessary (but allowed) → don't have to.", tags: ["review-4", "modal-verbs"], grammar: ["modal-verbs"], difficulty: "hard" },
    "The museum is free, so you ___ buy a ticket.",
    [["don't have to", true], ["mustn't", false], ["can't", false], ["shouldn't", false]],
  ),
  fill(
    { id: "ex-rev4-past-1", instructions: "Past simple — irregular forms.", explanation: "buy → bought; teach → taught.", tags: ["review-4", "past-simple", "irregular"], verbs: ["buy", "teach"] },
    "She ___ (buy) a piano and ___ (teach) herself to play.",
    ["bought ... taught", "bought taught"],
  ),
  err(
    { id: "ex-rev4-agree-1", instructions: "Correct the mistake.", explanation: "'agree' is a verb: 'I agree'.", tags: ["review-4", "agree"], verbs: ["agree"] },
    "I am agree with what you said.",
    ["I agree with what you said.", "I agree with what you said"],
  ),
  {
    id: "ex-rev4-translation-1",
    type: "translation",
    instructions: "Translate into natural English.",
    difficulty: "hard",
    cefrLevel: "B1",
    points: 20,
    tags: ["review-4", "translation", "miss"],
    relatedVerbIds: ["miss"],
    explanation: "'mi manchi' reverses to 'I miss you'.",
    data: {
      kind: "translation",
      italianSentence: "Mi manchi e non vedo l'ora di rivederti.",
      acceptedAnswers: [
        "I miss you and I can't wait to see you again",
        "I miss you and can't wait to see you again",
        "I miss you and I can't wait to see you again.",
      ],
      keyElements: ["I miss you", "can't wait", "to see you again"],
      explanation: "'mi manchi' → 'I miss you'; 'non vedo l'ora' → 'I can't wait'.",
    },
  },
];
