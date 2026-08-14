import type { Exercise } from "@/types";
import { choice, err, fill, mc } from "./factories";

/* ---------------- Chapter 27 — Phrasal Verb System ---------------- */
export const phrasalSystemExercises: Exercise[] = [
  mc(
    { id: "ex-ch27-meaning-1", instructions: "Choose the phrasal verb that fits.", explanation: "'give up' = stop trying.", tags: ["chapter-27", "phrasal-verbs"], difficulty: "medium" },
    "It was hard, but she never ___ and finally passed.",
    [["gave up", true], ["gave back", false], ["took up", false], ["put off", false]],
  ),
  err(
    { id: "ex-ch27-separable-1", instructions: "Correct the word order (pronoun).", explanation: "A pronoun goes between the verb and particle: turn it off.", tags: ["chapter-27", "phrasal-verbs", "separable"], difficulty: "hard" },
    "The TV is too loud. Can you turn off it?",
    ["The TV is too loud. Can you turn it off?", "Can you turn it off?"],
  ),
  mc(
    { id: "ex-ch27-inseparable-1", instructions: "Choose the correct form.", explanation: "'look after' is inseparable — the object follows the whole verb.", tags: ["chapter-27", "phrasal-verbs", "inseparable"], difficulty: "hard" },
    "Who's going to ___ while you're away?",
    [["look after the dog", true], ["look the dog after", false], ["after look the dog", false], ["look for the dog after", false]],
  ),
  fill(
    { id: "ex-ch27-particle-1", instructions: "Add the correct particle.", explanation: "A plane leaves the ground → take off.", tags: ["chapter-27", "phrasal-verbs", "take"], verbs: ["take"] },
    "The plane took ___ exactly on time.",
    ["off"],
  ),
  choice(
    { id: "ex-ch27-family-1", instructions: "Choose the right GET phrasal verb.", explanation: "board a bus/train → get on.", tags: ["chapter-27", "phrasal-verbs", "get"], verbs: ["get"], difficulty: "medium" },
    "verb-choice",
    "Hurry — we need to {{blank}} the train before it leaves.",
    [["get on", true], ["get off", false], ["get up", false], ["get over", false]],
  ),
];

/* ---------------- Chapter 28 — Irregular Verb Map ---------------- */
export const irregularMapExercises: Exercise[] = [
  fill(
    { id: "ex-ch28-abc-1", instructions: "Past participle (ABC pattern).", explanation: "go · went · gone.", tags: ["chapter-28", "irregular", "abc"], verbs: ["go"], difficulty: "easy", cefr: "A2" },
    "Where has everyone ___ (go)? The room is empty.",
    ["gone"],
  ),
  fill(
    { id: "ex-ch28-abb-1", instructions: "Past simple (ABB pattern).", explanation: "buy · bought · bought.", tags: ["chapter-28", "irregular", "abb"], verbs: ["buy"], difficulty: "easy", cefr: "A2" },
    "I ___ (buy) these shoes yesterday.",
    ["bought"],
  ),
  fill(
    { id: "ex-ch28-aaa-1", instructions: "Past simple (AAA pattern).", explanation: "cut · cut · cut — no change.", tags: ["chapter-28", "irregular", "aaa"], difficulty: "easy", cefr: "A2+" },
    "He ___ (cut) his finger while cooking.",
    ["cut"],
  ),
  err(
    { id: "ex-ch28-error-1", instructions: "Correct the irregular form.", explanation: "fly · flew · flown.", tags: ["chapter-28", "irregular"], verbs: ["fly"], difficulty: "medium" },
    "Last month we flied to Portugal.",
    ["Last month we flew to Portugal.", "Last month we flew to Portugal"],
  ),
  mc(
    { id: "ex-ch28-pattern-1", instructions: "Which verb follows the ABA pattern (infinitive = participle)?", explanation: "come · came · come — the participle matches the infinitive.", tags: ["chapter-28", "irregular", "aba"], difficulty: "hard" },
    "Which one is ABA (like come · came · come)?",
    [["run · ran · run", true], ["go · went · gone", false], ["buy · bought · bought", false], ["cut · cut · cut", false]],
  ),
];

/* ---------------- Chapter 30 — B1 Final Exam (fresh, competence-tagged) ---------------- */
export const finalExamExercises: Exercise[] = [
  choice(
    { id: "ex-exam-grammar-1", instructions: "Choose the correct form.", explanation: "Third person singular present simple → adds -s.", tags: ["exam", "grammar", "present-simple"], grammar: ["present-simple"], difficulty: "easy", cefr: "A2" },
    "tense-choice",
    "My brother {{blank}} to work by bike every day.",
    [["goes", true], ["go", false], ["going", false], ["gone", false]],
  ),
  mc(
    { id: "ex-exam-grammar-2", instructions: "Choose the passive form.", explanation: "Past passive → was/were + past participle.", tags: ["exam", "grammar", "passive-voice"], grammar: ["passive-voice"], difficulty: "hard" },
    "This song ___ by a famous band in 1985.",
    [["was written", true], ["wrote", false], ["is writing", false], ["has wrote", false]],
  ),
  choice(
    { id: "ex-exam-tense-1", instructions: "Choose the natural form.", explanation: "Finished time (last night) → past simple.", tags: ["exam", "tense-choice", "past-simple"], grammar: ["past-simple", "present-perfect"], difficulty: "medium" },
    "tense-choice",
    "We {{blank}} a great film last night.",
    [["watched", true], ["have watched", false], ["watch", false], ["had watched", false]],
  ),
  mc(
    { id: "ex-exam-tense-2", instructions: "Which happened first?", explanation: "The earlier past action → past perfect.", tags: ["exam", "tense-choice", "past-perfect"], grammar: ["past-perfect"], difficulty: "hard" },
    "When we arrived, the film ___ already ___.",
    [["had / started", true], ["has / started", false], ["did / start", false], ["was / starting", false]],
  ),
  choice(
    { id: "ex-exam-verb-1", instructions: "Choose the right verb.", explanation: "You MAKE a decision.", tags: ["exam", "verb-usage", "make", "do"], verbs: ["make", "do"], difficulty: "medium" },
    "verb-choice",
    "It's a hard choice, but you have to {{blank}} a decision.",
    [["make", true], ["do", false], ["take", false], ["have", false]],
  ),
  err(
    { id: "ex-exam-verb-2", instructions: "Correct the mistake.", explanation: "With a person → TELL.", tags: ["exam", "verb-usage", "tell", "say"], verbs: ["tell"], difficulty: "medium" },
    "Can you say me the time, please?",
    ["Can you tell me the time, please?", "Can you tell me the time please?", "Can you tell me the time, please"],
  ),
  fill(
    { id: "ex-exam-irregular-1", instructions: "Past simple of the verb.", explanation: "take → took.", tags: ["exam", "irregular", "take"], verbs: ["take"], difficulty: "easy", cefr: "A2" },
    "She ___ (take) the early train to be on time.",
    ["took"],
  ),
  fill(
    { id: "ex-exam-irregular-2", instructions: "Past participle of the verb.", explanation: "give → gave → given.", tags: ["exam", "irregular", "give"], verbs: ["give"], difficulty: "medium" },
    "Have they ___ (give) you an answer yet?",
    ["given"],
  ),
  mc(
    { id: "ex-exam-phrasal-1", instructions: "Choose the phrasal verb.", explanation: "cancel → call off.", tags: ["exam", "phrasal-verbs"], difficulty: "medium" },
    "Because of the storm, they had to ___ the concert.",
    [["call off", true], ["call back", false], ["take off", false], ["put on", false]],
  ),
  mc(
    { id: "ex-exam-vocab-1", instructions: "Choose the correct word.", explanation: "A single journey is a 'trip'.", tags: ["exam", "vocabulary", "travel"], difficulty: "medium" },
    "We had a wonderful ___ to the mountains last weekend.",
    [["trip", true], ["travel", false], ["voyage", false], ["journey abroad", false]],
  ),
];

export const part5Exercises: Exercise[] = [
  ...phrasalSystemExercises,
  ...irregularMapExercises,
  ...finalExamExercises,
];
