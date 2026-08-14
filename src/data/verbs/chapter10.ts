import type { Verb } from "@/types";

/** Chapter 10 essentials: know / think / want / use. Full Tier-1 cards. */

export const know: Verb = {
  id: "know",
  infinitive: "know",
  thirdPerson: "knows",
  past: "knew",
  pastParticiple: "known",
  ingForm: "knowing",
  pronunciation: { ipa: "/nəʊ/", note: "silent k · ABC: know · knew · known" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "know-information",
      englishExplanation: "To have information or knowledge in your mind.",
      italianMeaning: "sapere",
      context: "Italian 'sapere': know a fact, know that…, know how to.",
      examples: ["I know the answer.", "Do you know what time it is?"],
    },
    {
      id: "know-familiar",
      englishExplanation: "To be familiar with a person, place or thing.",
      italianMeaning: "conoscere",
      context: "Italian 'conoscere' — English uses the SAME verb 'know' for both sapere and conoscere.",
      examples: ["I know your sister.", "Do you know Rome well?"],
    },
  ],
  collocations: [
    { id: "know-how-to", phrase: "know how to", meaning: "saper fare", example: "I know how to drive.", frequency: "high" },
    { id: "get-to-know", phrase: "get to know", meaning: "conoscere (col tempo)", example: "I'd like to get to know you better.", frequency: "medium" },
    { id: "you-know", phrase: "you know", meaning: "sai, cioè", example: "It's, you know, complicated.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "know-that", pattern: "know + (that) clause", explanation: "Know a fact.", examples: ["I know (that) it's true."] },
    { id: "know-howto", pattern: "know how to + base form", explanation: "Have a skill.", examples: ["She knows how to swim."] },
  ],
  similarVerbs: [
    {
      verbId: "think",
      difference: "KNOW = you are certain (a fact); THINK = you have an opinion or belief (not certain).",
      examples: [
        { correct: "I know he's Italian (I'm sure). / I think he's Italian (I believe so).", explanation: "know = certainty; think = belief." },
      ],
    },
  ],
  examples: [
    { id: "know-ex-1", english: "I don't know how to say this in English.", italian: "Non so come dirlo in inglese.", difficulty: "A2", highlightedWords: ["know how to"] },
    { id: "know-ex-2", english: "We've known each other for years.", italian: "Ci conosciamo da anni.", difficulty: "B1", highlightedWords: ["known"] },
  ],
  commonMistakes: [
    { id: "know-mistake-continuous", incorrect: "I am knowing the answer.", correct: "I know the answer.", explanation: "'know' is stative — never in the continuous.", category: "verb" },
  ],
  exercises: ["ex-know-stative-1", "ex-know-howto-1", "ex-know-vs-think-1"],
};

export const think: Verb = {
  id: "think",
  infinitive: "think",
  thirdPerson: "thinks",
  past: "thought",
  pastParticiple: "thought",
  ingForm: "thinking",
  pronunciation: { ipa: "/θɪŋk/", note: "ABB: think · thought · thought" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "think-opinion",
      englishExplanation: "To have an opinion or belief. This use is stative.",
      italianMeaning: "pensare, credere",
      context: "For opinions, use the present simple: I think it's good (NOT I'm thinking).",
      examples: ["I think it's a great idea.", "What do you think?"],
    },
    {
      id: "think-process",
      englishExplanation: "To use your mind / consider something. This use CAN be continuous.",
      italianMeaning: "pensare (riflettere)",
      context: "The mental process: I'm thinking about my future.",
      examples: ["I'm thinking about changing jobs.", "Let me think for a moment."],
    },
  ],
  collocations: [
    { id: "think-about", phrase: "think about", meaning: "pensare a, riflettere su", example: "I'm thinking about it.", frequency: "high" },
    { id: "think-of", phrase: "think of", meaning: "pensare a (avere in mente)", example: "I can't think of his name.", frequency: "high" },
    { id: "think-so", phrase: "(I) think so", meaning: "credo di sì", example: "\"Is it open?\" \"I think so.\"", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "think-that", pattern: "think + (that) clause", explanation: "State an opinion.", examples: ["I think (that) you're right."] },
    { id: "think-about-ing", pattern: "think about + -ing", explanation: "Consider doing something.", examples: ["I'm thinking about moving."] },
  ],
  similarVerbs: [
    {
      verbId: "know",
      difference: "THINK = opinion/belief (uncertain); KNOW = certainty (a fact).",
      examples: [{ correct: "I think it's Monday, but I don't know for sure.", explanation: "think = believe; know = be certain." }],
    },
  ],
  examples: [
    { id: "think-ex-1", english: "I think you should tell her the truth.", italian: "Penso che dovresti dirle la verità.", difficulty: "A2+", highlightedWords: ["think"] },
    { id: "think-ex-2", english: "She's thinking about studying abroad.", italian: "Sta pensando di studiare all'estero.", difficulty: "B1", highlightedWords: ["thinking about"] },
  ],
  commonMistakes: [
    { id: "think-mistake-opinion", incorrect: "I am thinking that it's a good idea.", correct: "I think it's a good idea.", explanation: "For an opinion, use the present simple, not the continuous.", category: "verb" },
    { id: "think-mistake-to", incorrect: "I'm thinking to buy a car.", correct: "I'm thinking about buying a car.", explanation: "'think about + -ing', not 'think to + infinitive'.", category: "preposition" },
  ],
  exercises: ["ex-think-opinion-1", "ex-think-about-1", "ex-think-vs-know-1"],
};

export const want: Verb = {
  id: "want",
  infinitive: "want",
  thirdPerson: "wants",
  past: "wanted",
  pastParticiple: "wanted",
  ingForm: "wanting",
  pronunciation: { ipa: "/wɒnt/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "want-desire",
      englishExplanation: "To desire or wish for something. A stative verb.",
      italianMeaning: "volere",
      context: "Not used in the continuous: I want (NOT I'm wanting).",
      examples: ["I want a coffee.", "Do you want to come?"],
    },
    {
      id: "want-sb-to",
      englishExplanation: "'want + someone + to do' — to want another person to do something.",
      italianMeaning: "volere che qualcuno faccia",
      context: "English uses want + object + to-infinitive, NOT a 'that' clause. This is a major Italian error ('voglio che tu…').",
      examples: ["I want you to come with me.", "She wants him to call her."],
    },
  ],
  collocations: [
    { id: "want-to", phrase: "want to", meaning: "volere (fare)", example: "I want to learn English.", frequency: "high" },
    { id: "if-you-want", phrase: "if you want", meaning: "se vuoi", example: "We can stay, if you want.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "want-to-inf", pattern: "want + to + infinitive", explanation: "Want to do something yourself.", examples: ["I want to go home."] },
    { id: "want-sb-to-inf", pattern: "want + someone + to + infinitive", explanation: "Want another person to act.", examples: ["I want you to listen."] },
  ],
  examples: [
    { id: "want-ex-1", english: "What do you want to do tonight?", italian: "Cosa vuoi fare stasera?", difficulty: "A2", highlightedWords: ["want to"] },
    { id: "want-ex-2", english: "My parents want me to study medicine.", italian: "I miei genitori vogliono che io studi medicina.", difficulty: "B1", highlightedWords: ["want me to"] },
  ],
  commonMistakes: [
    { id: "want-mistake-that", incorrect: "I want that you come to the party.", correct: "I want you to come to the party.", explanation: "Use 'want + someone + to + infinitive', not a 'that' clause.", category: "verb" },
    { id: "want-mistake-continuous", incorrect: "I am wanting a new phone.", correct: "I want a new phone.", explanation: "'want' is stative — no continuous.", category: "verb" },
  ],
  exercises: ["ex-want-to-1", "ex-want-sb-to-1", "ex-want-stative-1"],
};

export const use: Verb = {
  id: "use",
  infinitive: "use",
  thirdPerson: "uses",
  past: "used",
  pastParticiple: "used",
  ingForm: "using",
  pronunciation: { ipa: "/juːz/", note: "verb /juːz/ vs noun 'use' /juːs/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life", "technology"],
  meanings: [
    {
      id: "use-employ",
      englishExplanation: "To employ something for a purpose.",
      italianMeaning: "usare, utilizzare",
      context: "use + object; use + object + to + verb (for a purpose).",
      examples: ["I use my phone for everything.", "Use a knife to cut it."],
    },
    {
      id: "used-to",
      englishExplanation: "'used to + base form' describes a past habit or state that is no longer true.",
      italianMeaning: "una volta (facevo/ero…)",
      context: "Only about the PAST. 'I used to smoke' = I don't anymore. Not for present habits.",
      examples: ["I used to live in Rome.", "She used to play tennis."],
    },
  ],
  collocations: [
    { id: "use-computer", phrase: "use a computer", meaning: "usare il computer", example: "Can you use a computer?", frequency: "high" },
    { id: "no-use", phrase: "it's no use", meaning: "è inutile", example: "It's no use worrying.", frequency: "medium" },
    { id: "make-use-of", phrase: "make use of", meaning: "sfruttare, servirsi di", example: "Make use of the free time.", frequency: "medium" },
  ],
  phrasalVerbs: ["use-up"],
  verbPatterns: [
    { id: "use-to-purpose", pattern: "use + object + to + verb", explanation: "Use something for a purpose.", examples: ["Use this app to book tickets."] },
    { id: "used-to-p", pattern: "used to + base form", explanation: "Past habit or state (finished).", examples: ["We used to go camping every summer."] },
  ],
  examples: [
    { id: "use-ex-1", english: "I use this app to learn new words.", italian: "Uso questa app per imparare parole nuove.", difficulty: "A2+", highlightedWords: ["use"] },
    { id: "use-ex-2", english: "There used to be a cinema here.", italian: "Una volta qui c'era un cinema.", difficulty: "B1", highlightedWords: ["used to"] },
  ],
  commonMistakes: [
    { id: "use-mistake-present-habit", incorrect: "I use to go to the gym on Mondays.", correct: "I go to the gym on Mondays.", explanation: "For a PRESENT habit use the present simple. 'used to' is only for the past.", category: "verb" },
  ],
  exercises: ["ex-use-purpose-1", "ex-use-usedto-1", "ex-use-collocation-1"],
};

export const chapter10Verbs: Verb[] = [know, think, want, use];
