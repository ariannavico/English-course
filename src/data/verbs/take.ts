import type { Verb } from "@/types";

/**
 * TAKE — the flagship Tier-1 verb card. It exercises every field of the Verb
 * model so the generic <VerbCard> can be validated against a real, full entry.
 */
export const take: Verb = {
  id: "take",
  infinitive: "take",
  thirdPerson: "takes",
  past: "took",
  pastParticiple: "taken",
  ingForm: "taking",
  pronunciation: { ipa: "/teɪk/", note: "Rhymes with 'make'." },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life", "travel", "time"],

  meanings: [
    {
      id: "take-move",
      englishExplanation:
        "To move something or someone from one place to another, going away from the speaker.",
      italianMeaning: "portare (via), prendere con sé",
      context:
        "Direction matters: you TAKE things away from here; you BRING them towards here.",
      examples: [
        "I'll take you to the station.",
        "Don't forget to take your umbrella.",
      ],
    },
    {
      id: "take-time",
      englishExplanation: "To need or use a certain amount of time.",
      italianMeaning: "volerci (tempo), richiedere",
      context:
        "Very common with 'it takes': It takes + (person) + time + to do something.",
      examples: [
        "It takes twenty minutes to get there.",
        "The exam took three hours.",
      ],
    },
    {
      id: "take-transport",
      englishExplanation: "To use a form of transport.",
      italianMeaning: "prendere (un mezzo)",
      context: "Used with buses, trains, taxis, planes — not with 'go by'.",
      examples: ["We took a taxi home.", "She takes the bus to work."],
    },
    {
      id: "take-accept",
      englishExplanation: "To accept or receive something offered.",
      italianMeaning: "prendere, accettare",
      context: "Shops, decisions, and offers: take a card, take an offer.",
      examples: ["Do you take credit cards?", "I'll take the blue one."],
    },
  ],

  collocations: [
    {
      id: "take-a-break",
      phrase: "take a break",
      meaning: "fare una pausa",
      example: "Let's take a break for ten minutes.",
      frequency: "high",
    },
    {
      id: "take-a-photo",
      phrase: "take a photo / picture",
      meaning: "fare una foto",
      example: "Can you take a photo of us?",
      frequency: "high",
    },
    {
      id: "take-care",
      phrase: "take care (of)",
      meaning: "prendersi cura di / stai attento",
      example: "Take care of yourself.",
      frequency: "high",
    },
    {
      id: "take-place",
      phrase: "take place",
      meaning: "avere luogo, svolgersi",
      example: "The meeting takes place on Monday.",
      frequency: "medium",
    },
    {
      id: "take-notes",
      phrase: "take notes",
      meaning: "prendere appunti",
      example: "I always take notes in class.",
      frequency: "medium",
    },
  ],

  phrasalVerbs: [
    "take-off",
    "take-out",
    "take-up",
    "take-over",
    "take-back",
    "take-in",
  ],

  verbPatterns: [
    {
      id: "take-obj",
      pattern: "take + object",
      explanation: "The basic transitive pattern: you take something.",
      examples: ["Take your keys.", "He took my pen."],
    },
    {
      id: "take-sb-place",
      pattern: "take + someone + somewhere",
      explanation: "Move a person to a place.",
      examples: ["I took her to the airport.", "They took us home."],
    },
    {
      id: "take-time-to",
      pattern: "it takes + (someone) + time + to do",
      explanation: "How long an action needs.",
      examples: [
        "It takes me an hour to get ready.",
        "It took them years to finish.",
      ],
    },
  ],

  similarVerbs: [
    {
      verbId: "bring",
      difference:
        "TAKE moves away from the speaker/here; BRING moves towards the speaker/here.",
      examples: [
        {
          correct: "Take these books to the library.",
          explanation: "The library is elsewhere — movement away.",
        },
        {
          correct: "Bring me a glass of water.",
          explanation: "Movement towards the speaker.",
        },
      ],
    },
    {
      verbId: "get",
      difference:
        "GET can mean 'obtain/fetch'; TAKE is 'carry/accept/use'. 'Get the bus' and 'take the bus' both work, but 'get a coffee' = obtain one.",
      examples: [
        {
          correct: "Can you get me a coffee?",
          explanation: "Obtain and bring it — GET, not TAKE.",
        },
      ],
    },
    {
      verbId: "carry",
      difference:
        "CARRY = hold and support the weight while moving; TAKE = the act of moving it there. You can carry a bag without taking it anywhere.",
      examples: [
        {
          correct: "She carried the heavy box upstairs.",
          explanation: "Focus is on bearing the weight.",
        },
      ],
    },
  ],

  examples: [
    {
      id: "take-ex-1",
      english: "It takes me twenty minutes to walk to school.",
      italian: "Ci metto venti minuti ad andare a scuola a piedi.",
      difficulty: "A2",
      highlightedWords: ["takes"],
      grammarFocus: ["present-simple"],
    },
    {
      id: "take-ex-2",
      english: "We took a taxi because we were late.",
      italian: "Abbiamo preso un taxi perché eravamo in ritardo.",
      difficulty: "A2+",
      highlightedWords: ["took"],
      grammarFocus: ["past-simple"],
    },
    {
      id: "take-ex-3",
      english: "The plane takes off at 6 a.m.",
      italian: "L'aereo decolla alle 6 del mattino.",
      difficulty: "B1",
      highlightedWords: ["takes off"],
      grammarFocus: ["phrasal-verbs"],
    },
  ],

  commonMistakes: [
    {
      id: "take-mistake-bring",
      incorrect: "Can you take me a glass of water?",
      correct: "Can you bring me a glass of water?",
      explanation:
        "Movement is towards the speaker, so use BRING, not TAKE.",
      category: "verb",
    },
    {
      id: "take-mistake-took",
      incorrect: "It takes three hours yesterday.",
      correct: "It took three hours yesterday.",
      explanation: "'yesterday' is past — use the past form 'took'.",
      category: "tense",
    },
  ],

  exercises: [
    "ex-take-mc-1",
    "ex-take-verbchoice-1",
    "ex-take-fill-1",
    "ex-take-tense-1",
    "ex-take-translation-1",
    "ex-take-builder-1",
    "ex-take-error-1",
  ],
};
