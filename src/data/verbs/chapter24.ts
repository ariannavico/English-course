import type { Verb } from "@/types";

/** Chapter 24 — Health. Tier-2 thematic cards. */

export const hurt: Verb = {
  id: "hurt", infinitive: "hurt", thirdPerson: "hurts", past: "hurt",
  pastParticiple: "hurt", ingForm: "hurting", pronunciation: { ipa: "/hɜːt/", note: "AAA: hurt · hurt · hurt" },
  tier: 2, cefrLevel: "A2+", topics: ["health"],
  meanings: [{ id: "hurt-pain", englishExplanation: "To feel pain, or to cause pain/injury.", italianMeaning: "fare male / farsi male", context: "My leg hurts (it feels pain). I hurt my leg (I injured it).", examples: ["My back hurts.", "I hurt my knee playing football."] }],
  collocations: [
    { id: "hurt-yourself", phrase: "hurt yourself", meaning: "farsi male", example: "Be careful you don't hurt yourself.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "hurt-ex-1", english: "Ouch! That hurts.", italian: "Ahi! Fa male.", difficulty: "A2", highlightedWords: ["hurts"] }],
  commonMistakes: [{ id: "hurt-mistake-past", incorrect: "Yesterday I hurted my hand.", correct: "Yesterday I hurt my hand.", explanation: "'hurt' is invariable: hurt · hurt · hurt.", category: "verb" }],
  exercises: ["ex-hurt-1"],
};

export const rest: Verb = {
  id: "rest", infinitive: "rest", thirdPerson: "rests", past: "rested",
  pastParticiple: "rested", ingForm: "resting", pronunciation: { ipa: "/rest/" },
  tier: 2, cefrLevel: "A2+", topics: ["health"],
  meanings: [{ id: "rest-relax", englishExplanation: "To stop activity in order to relax or recover.", italianMeaning: "riposare, riposarsi", context: "Also a noun: 'get some rest', 'have a rest'.", examples: ["You need to rest.", "Let's rest for a few minutes."] }],
  collocations: [
    { id: "get-rest", phrase: "get some rest", meaning: "riposarsi un po'", example: "Try to get some rest.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "rest-ex-1", english: "The doctor told me to rest for a week.", italian: "Il medico mi ha detto di riposare per una settimana.", difficulty: "A2+", highlightedWords: ["rest"] }],
  exercises: ["ex-rest-1"],
};

export const exercise: Verb = {
  id: "exercise", infinitive: "exercise", thirdPerson: "exercises", past: "exercised",
  pastParticiple: "exercised", ingForm: "exercising", pronunciation: { ipa: "/ˈeksəsaɪz/" },
  tier: 2, cefrLevel: "A2+", topics: ["health"],
  meanings: [{ id: "exercise-train", englishExplanation: "To do physical activity to stay healthy.", italianMeaning: "fare esercizio, allenarsi", context: "Also a noun: 'do exercise', 'get some exercise'. Similar to 'work out'.", examples: ["You should exercise more.", "She exercises every morning."] }],
  collocations: [
    { id: "do-exercise", phrase: "get / do exercise", meaning: "fare movimento", example: "Walking is a good way to get exercise.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "exercise-ex-1", english: "Exercising regularly keeps you healthy.", italian: "Allenarsi regolarmente ti mantiene in salute.", difficulty: "B1", highlightedWords: ["Exercising"] }],
  exercises: ["ex-exercise-1"],
};

export const recover: Verb = {
  id: "recover", infinitive: "recover", thirdPerson: "recovers", past: "recovered",
  pastParticiple: "recovered", ingForm: "recovering", pronunciation: { ipa: "/rɪˈkʌvə/" },
  tier: 2, cefrLevel: "B1", topics: ["health"],
  meanings: [{ id: "recover-get-better", englishExplanation: "To get better after being ill or hurt.", italianMeaning: "riprendersi, guarire", context: "recover FROM an illness/operation.", examples: ["She's recovering from the flu.", "It took him weeks to recover."] }],
  collocations: [
    { id: "recover-from", phrase: "recover from (an illness)", meaning: "riprendersi da", example: "He's recovering from surgery.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "recover-ex-1", english: "I hope you recover quickly.", italian: "Spero che tu guarisca in fretta.", difficulty: "B1", highlightedWords: ["recover"] }],
  exercises: ["ex-recover-1"],
};

export const breathe: Verb = {
  id: "breathe", infinitive: "breathe", thirdPerson: "breathes", past: "breathed",
  pastParticiple: "breathed", ingForm: "breathing", pronunciation: { ipa: "/briːð/", note: "verb 'breathe' /briːð/ vs noun 'breath' /breθ/" },
  tier: 2, cefrLevel: "B1", topics: ["health"],
  meanings: [{ id: "breathe-air", englishExplanation: "To take air into your lungs and let it out.", italianMeaning: "respirare", context: "breathe in / out. The verb is 'breathe'; the noun is 'breath'.", examples: ["Breathe in slowly.", "It was hard to breathe in the heat."] }],
  collocations: [
    { id: "breathe-in-out", phrase: "breathe in / out", meaning: "inspirare / espirare", example: "Breathe in, then breathe out.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "breathe-ex-1", english: "Take a deep breath and breathe out slowly.", italian: "Fai un respiro profondo ed espira lentamente.", difficulty: "B1", highlightedWords: ["breathe"] }],
  commonMistakes: [{ id: "breathe-mistake-noun", incorrect: "I can't breath.", correct: "I can't breathe.", explanation: "The verb is 'breathe' (with -e); 'breath' is the noun.", category: "vocabulary" }],
  exercises: ["ex-breathe-1"],
};

export const chapter24Verbs: Verb[] = [hurt, rest, exercise, recover, breathe];
