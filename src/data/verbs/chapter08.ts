import type { Verb } from "@/types";

/**
 * Chapter 8 essentials: get / make / take / give. TAKE lives in verbs/take.ts;
 * this file provides the other three as full Tier-1 cards.
 */

export const get: Verb = {
  id: "get",
  infinitive: "get",
  thirdPerson: "gets",
  past: "got",
  pastParticiple: "got",
  ingForm: "getting",
  pronunciation: { ipa: "/ɡet/", note: "past participle 'gotten' in American English" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life", "travel"],
  meanings: [
    {
      id: "get-obtain",
      englishExplanation: "To obtain, receive or fetch something.",
      italianMeaning: "ottenere, prendere, ricevere",
      context: "The most flexible English verb. Often replaces obtain/receive/fetch.",
      examples: ["I got a new phone.", "Can you get some milk?"],
    },
    {
      id: "get-become",
      englishExplanation: "To become — a change of state (get + adjective).",
      italianMeaning: "diventare",
      context: "get tired, get cold, get ready, get better.",
      examples: ["It's getting dark.", "Don't get angry."],
    },
    {
      id: "get-arrive",
      englishExplanation: "'get to' = to arrive at / reach a place.",
      italianMeaning: "arrivare",
      context: "get + to + place. But 'get home' has no 'to'.",
      examples: ["What time did you get home?", "We got to the airport late."],
    },
  ],
  collocations: [
    { id: "get-ready", phrase: "get ready", meaning: "prepararsi", example: "Get ready, we're leaving!", frequency: "high" },
    { id: "get-lost", phrase: "get lost", meaning: "perdersi", example: "We got lost in the old town.", frequency: "medium" },
    { id: "get-married", phrase: "get married", meaning: "sposarsi", example: "They got married in June.", frequency: "medium" },
    { id: "get-job", phrase: "get a job", meaning: "trovare lavoro", example: "She got a job at the bank.", frequency: "high" },
  ],
  phrasalVerbs: ["get-up", "get-on", "get-off"],
  verbPatterns: [
    { id: "get-adj", pattern: "get + adjective", explanation: "Change of state (become).", examples: ["get cold", "get better"] },
    { id: "get-to", pattern: "get + to + place", explanation: "Arrive / reach.", examples: ["get to work", "get to London"] },
  ],
  similarVerbs: [
    {
      verbId: "take",
      difference: "GET = obtain/fetch (bring it to me); TAKE = carry away / accept / use.",
      examples: [{ correct: "Can you get me a coffee?", explanation: "Obtain and bring it — GET." }],
    },
    {
      verbId: "have",
      difference: "GET = obtain (action); HAVE = possess (state). First you get it, then you have it.",
      examples: [{ correct: "I got a bike, so now I have one.", explanation: "get = action, have = state." }],
    },
  ],
  examples: [
    { id: "get-ex-1", english: "It's getting late — we should go.", italian: "Si sta facendo tardi, dovremmo andare.", difficulty: "A2", highlightedWords: ["getting"] },
    { id: "get-ex-2", english: "How do I get to the station?", italian: "Come si arriva alla stazione?", difficulty: "A2+", highlightedWords: ["get to"] },
  ],
  commonMistakes: [
    { id: "get-mistake-home", incorrect: "I got to home late.", correct: "I got home late.", explanation: "'home' takes no 'to'.", category: "preposition" },
  ],
  exercises: ["ex-get-become-1", "ex-get-vs-take-1", "ex-get-to-1"],
};

export const give: Verb = {
  id: "give",
  infinitive: "give",
  thirdPerson: "gives",
  past: "gave",
  pastParticiple: "given",
  ingForm: "giving",
  pronunciation: { ipa: "/ɡɪv/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "give-transfer",
      englishExplanation: "To hand or transfer something to someone.",
      italianMeaning: "dare",
      context: "Two patterns: give + someone + something, OR give + something + to + someone.",
      examples: ["Give me the book.", "She gave the keys to her brother."],
    },
    {
      id: "give-abstract",
      englishExplanation: "With abstract nouns: give advice, give a hand, give a call.",
      italianMeaning: "dare (un consiglio, una mano, …)",
      context: "Many fixed expressions use GIVE + noun.",
      examples: ["Can you give me a hand?", "I'll give you a call tonight."],
    },
  ],
  collocations: [
    { id: "give-hand", phrase: "give (someone) a hand", meaning: "dare una mano", example: "Give me a hand with these bags.", frequency: "high" },
    { id: "give-advice", phrase: "give advice", meaning: "dare un consiglio", example: "She gave me good advice.", frequency: "medium" },
    { id: "give-call", phrase: "give (someone) a call", meaning: "fare una chiamata", example: "I'll give you a call later.", frequency: "high" },
  ],
  phrasalVerbs: ["give-up", "give-back"],
  verbPatterns: [
    { id: "give-double", pattern: "give + someone + something", explanation: "Recipient first, then the thing.", examples: ["Give her the letter."] },
    { id: "give-to", pattern: "give + something + to + someone", explanation: "Thing first, then 'to' + recipient.", examples: ["Give the letter to her."] },
  ],
  similarVerbs: [
    {
      verbId: "take",
      difference: "GIVE = transfer TO someone; TAKE = receive/accept or carry away. Opposite directions of a transfer.",
      examples: [{ correct: "I gave him the pen and he took it.", explanation: "give = hand over, take = accept." }],
    },
  ],
  examples: [
    { id: "give-ex-1", english: "Can you give me a hand?", italian: "Mi puoi dare una mano?", difficulty: "A2", highlightedWords: ["give"] },
    { id: "give-ex-2", english: "He gave his old bike to a friend.", italian: "Ha dato la sua vecchia bici a un amico.", difficulty: "A2+", highlightedWords: ["gave"] },
  ],
  commonMistakes: [
    { id: "give-mistake-order", incorrect: "Give to me the book.", correct: "Give me the book. / Give the book to me.", explanation: "Either 'give + person + thing' or 'give + thing + to + person' — not 'give to me the book'.", category: "verb" },
  ],
  exercises: ["ex-give-order-1", "ex-give-collocation-1", "ex-give-translation-1"],
};

export const make: Verb = {
  id: "make",
  infinitive: "make",
  thirdPerson: "makes",
  past: "made",
  pastParticiple: "made",
  ingForm: "making",
  pronunciation: { ipa: "/meɪk/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "make-create",
      englishExplanation: "To create, produce or prepare something.",
      italianMeaning: "fare, creare, produrre",
      context: "MAKE = produce a result (make a cake). DO = perform an activity (do homework).",
      examples: ["She made a cake.", "They make cars here."],
    },
    {
      id: "make-cause",
      englishExplanation: "To cause someone to do something, or cause a feeling.",
      italianMeaning: "far fare, rendere",
      context: "make + someone + base form (no 'to'): It made me laugh.",
      examples: ["The film made me cry.", "You make me happy."],
    },
  ],
  collocations: [
    { id: "make-decision", phrase: "make a decision", meaning: "prendere una decisione", example: "I need to make a decision.", frequency: "high" },
    { id: "make-mistake", phrase: "make a mistake", meaning: "fare un errore", example: "Everyone makes mistakes.", frequency: "high" },
    { id: "make-friends", phrase: "make friends", meaning: "fare amicizia", example: "He makes friends easily.", frequency: "medium" },
    { id: "make-noise", phrase: "make (a) noise", meaning: "fare rumore", example: "Don't make so much noise.", frequency: "medium" },
  ],
  phrasalVerbs: ["make-up"],
  verbPatterns: [
    { id: "make-sb-do", pattern: "make + someone + base form", explanation: "Force or cause (no 'to').", examples: ["It made me laugh.", "She made him wait."] },
    { id: "make-noun", pattern: "make + noun", explanation: "Produce a result.", examples: ["make a plan", "make dinner"] },
  ],
  similarVerbs: [
    {
      verbId: "do",
      difference: "MAKE = produce/create a result; DO = perform an activity or task.",
      examples: [
        { correct: "make a cake", explanation: "you produce something new." },
        { correct: "do the housework", explanation: "you perform an activity." },
      ],
    },
    {
      verbId: "take",
      difference: "Fixed collocations differ: you MAKE a decision but you TAKE a photo. Memorise the pairings.",
      examples: [{ correct: "make a decision / take a photo", explanation: "learn them as fixed pairs." }],
    },
  ],
  examples: [
    { id: "make-ex-1", english: "Don't make so much noise.", italian: "Non fare così tanto rumore.", difficulty: "A2", highlightedWords: ["make"] },
    { id: "make-ex-2", english: "That song always makes me happy.", italian: "Quella canzone mi rende sempre felice.", difficulty: "A2+", highlightedWords: ["makes"] },
  ],
  commonMistakes: [
    { id: "make-mistake-do", incorrect: "I must make my homework.", correct: "I must do my homework.", explanation: "Homework is an activity you DO, not MAKE.", category: "verb" },
    { id: "make-mistake-photo", incorrect: "I want to make a photo.", correct: "I want to take a photo.", explanation: "The collocation is 'take a photo'.", category: "verb" },
  ],
  exercises: ["ex-make-vs-do-1", "ex-make-cause-1", "ex-make-collocation-1"],
};

export const chapter08Verbs: Verb[] = [get, give, make];
