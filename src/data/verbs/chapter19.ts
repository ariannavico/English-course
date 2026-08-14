import type { Verb } from "@/types";

/**
 * Chapter 19 — Movement & Travel. Tier-2 thematic cards: forms, core meanings,
 * key collocations, examples and targeted exercises (spec §39).
 */

export const travel: Verb = {
  id: "travel",
  infinitive: "travel",
  thirdPerson: "travels",
  past: "travelled",
  pastParticiple: "travelled",
  ingForm: "travelling",
  pronunciation: { ipa: "/ˈtrævl/", note: "BrE doubles the l: travelled" },
  tier: 2,
  cefrLevel: "A2+",
  topics: ["travel"],
  meanings: [
    {
      id: "travel-move",
      englishExplanation: "To go from one place to another, especially over a distance.",
      italianMeaning: "viaggiare",
      context: "'travel' is usually intransitive: travel to a place, travel by train.",
      examples: ["I love travelling by train.", "They travelled across Europe."],
    },
  ],
  collocations: [
    { id: "travel-by", phrase: "travel by (train/plane)", meaning: "viaggiare in (treno/aereo)", example: "We travelled by plane.", frequency: "high" },
    { id: "travel-abroad", phrase: "travel abroad", meaning: "viaggiare all'estero", example: "She often travels abroad for work.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "travel-ex-1", english: "I'd love to travel around Asia one day.", italian: "Mi piacerebbe viaggiare per l'Asia un giorno.", difficulty: "A2+", highlightedWords: ["travel"] },
  ],
  commonMistakes: [
    { id: "travel-mistake-noun", incorrect: "I made a nice travel to Spain.", correct: "I had a nice trip to Spain.", explanation: "For a single journey use the noun 'trip', not 'travel'. 'Travel' is usually the verb or an uncountable idea.", category: "vocabulary" },
  ],
  exercises: ["ex-travel-by-1", "ex-travel-trip-1"],
};

export const arrive: Verb = {
  id: "arrive",
  infinitive: "arrive",
  thirdPerson: "arrives",
  past: "arrived",
  pastParticiple: "arrived",
  ingForm: "arriving",
  pronunciation: { ipa: "/əˈraɪv/" },
  tier: 2,
  cefrLevel: "A2",
  topics: ["travel"],
  meanings: [
    {
      id: "arrive-reach",
      englishExplanation: "To reach a place at the end of a journey.",
      italianMeaning: "arrivare",
      context: "arrive IN a town/country; arrive AT a building/event. Never 'arrive to'.",
      examples: ["We arrived in London at noon.", "They arrived at the airport late."],
    },
  ],
  collocations: [
    { id: "arrive-on-time", phrase: "arrive on time", meaning: "arrivare in orario", example: "The train arrived on time.", frequency: "high" },
    { id: "arrive-late", phrase: "arrive late", meaning: "arrivare in ritardo", example: "Sorry I arrived late.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "arrive-ex-1", english: "What time do we arrive in Rome?", italian: "A che ora arriviamo a Roma?", difficulty: "A2", highlightedWords: ["arrive in"] },
  ],
  commonMistakes: [
    { id: "arrive-mistake-to", incorrect: "We arrived to the hotel at nine.", correct: "We arrived at the hotel at nine.", explanation: "Use arrive AT (a place) or arrive IN (a city) — never 'arrive to'.", category: "preposition" },
  ],
  exercises: ["ex-arrive-prep-1", "ex-arrive-2"],
};

export const drive: Verb = {
  id: "drive",
  infinitive: "drive",
  thirdPerson: "drives",
  past: "drove",
  pastParticiple: "driven",
  ingForm: "driving",
  pronunciation: { ipa: "/draɪv/", note: "ABC: drive · drove · driven" },
  tier: 2,
  cefrLevel: "A2",
  topics: ["travel"],
  meanings: [
    {
      id: "drive-operate",
      englishExplanation: "To operate and control a car or other vehicle.",
      italianMeaning: "guidare",
      context: "drive a car; drive to a place; give someone a lift.",
      examples: ["Can you drive?", "She drove me to the station."],
    },
  ],
  collocations: [
    { id: "drive-to", phrase: "drive to (a place)", meaning: "andare in macchina a", example: "We drove to the coast.", frequency: "high" },
    { id: "go-for-drive", phrase: "go for a drive", meaning: "fare un giro in macchina", example: "Let's go for a drive.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "drive-ex-1", english: "He drove for six hours without stopping.", italian: "Ha guidato per sei ore senza fermarsi.", difficulty: "A2+", highlightedWords: ["drove"] },
  ],
  commonMistakes: [
    { id: "drive-mistake-past", incorrect: "Yesterday I drived to work.", correct: "Yesterday I drove to work.", explanation: "'drive' is irregular: drive · drove · driven.", category: "verb" },
  ],
  exercises: ["ex-drive-past-1", "ex-drive-2"],
};

export const fly: Verb = {
  id: "fly",
  infinitive: "fly",
  thirdPerson: "flies",
  past: "flew",
  pastParticiple: "flown",
  ingForm: "flying",
  pronunciation: { ipa: "/flaɪ/", note: "ABC: fly · flew · flown" },
  tier: 2,
  cefrLevel: "A2+",
  topics: ["travel"],
  meanings: [
    {
      id: "fly-travel",
      englishExplanation: "To travel by plane, or (of a bird/plane) to move through the air.",
      italianMeaning: "volare, andare in aereo",
      context: "fly to a place; fly with an airline.",
      examples: ["We flew to Paris for the weekend.", "Birds fly south in winter."],
    },
  ],
  collocations: [
    { id: "fly-to", phrase: "fly to (a place)", meaning: "andare in aereo a", example: "I'm flying to Berlin on Monday.", frequency: "high" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "fly-ex-1", english: "Have you ever flown business class?", italian: "Hai mai volato in business class?", difficulty: "B1", highlightedWords: ["flown"] },
  ],
  commonMistakes: [
    { id: "fly-mistake-past", incorrect: "We flied to Spain last year.", correct: "We flew to Spain last year.", explanation: "'fly' is irregular: fly · flew · flown.", category: "verb" },
  ],
  exercises: ["ex-fly-past-1", "ex-fly-2"],
};

export const catchVerb: Verb = {
  id: "catch",
  infinitive: "catch",
  thirdPerson: "catches",
  past: "caught",
  pastParticiple: "caught",
  ingForm: "catching",
  pronunciation: { ipa: "/kætʃ/", note: "ABB: catch · caught · caught" },
  tier: 2,
  cefrLevel: "A2+",
  topics: ["travel", "daily-life"],
  meanings: [
    {
      id: "catch-transport",
      englishExplanation: "To be in time for and get on a bus, train or plane.",
      italianMeaning: "prendere (un mezzo in tempo)",
      context: "catch the bus/train = get it (opposite of miss it).",
      examples: ["I need to catch the 8:15 train.", "We just caught the last bus."],
    },
    {
      id: "catch-grab",
      englishExplanation: "To take hold of something moving through the air.",
      italianMeaning: "afferrare, prendere al volo",
      context: "catch a ball.",
      examples: ["Catch!", "The dog caught the stick."],
    },
  ],
  collocations: [
    { id: "catch-train", phrase: "catch the train / bus", meaning: "prendere il treno/bus", example: "Hurry, or we'll miss the train — run and catch it!", frequency: "high" },
    { id: "catch-cold", phrase: "catch a cold", meaning: "prendere un raffreddore", example: "Wear a coat or you'll catch a cold.", frequency: "medium" },
  ],
  phrasalVerbs: ["catch-up"],
  verbPatterns: [],
  examples: [
    { id: "catch-ex-1", english: "We ran to catch the train and just made it.", italian: "Abbiamo corso per prendere il treno e ce l'abbiamo fatta.", difficulty: "A2+", highlightedWords: ["catch"] },
  ],
  commonMistakes: [
    { id: "catch-mistake-take", incorrect: "I must take the train quickly or I lose it.", correct: "I must catch the train or I'll miss it.", explanation: "Being in time for a train → 'catch it' (and 'miss it' if not).", category: "verb" },
  ],
  exercises: ["ex-catch-transport-1", "ex-catch-2"],
};

export const miss: Verb = {
  id: "miss",
  infinitive: "miss",
  thirdPerson: "misses",
  past: "missed",
  pastParticiple: "missed",
  ingForm: "missing",
  pronunciation: { ipa: "/mɪs/" },
  tier: 2,
  cefrLevel: "A2+",
  topics: ["travel", "feelings-opinions"],
  meanings: [
    {
      id: "miss-transport",
      englishExplanation: "To be too late for a bus, train or plane.",
      italianMeaning: "perdere (un mezzo)",
      context: "Opposite of 'catch'. miss the train.",
      examples: ["I missed the last bus home.", "Hurry or we'll miss our flight."],
    },
    {
      id: "miss-someone",
      englishExplanation: "To feel sad because someone or something is not with you.",
      italianMeaning: "mancare (sentire la mancanza)",
      context: "Note the structure: 'I miss you' = mi manchi (subject/object are reversed vs Italian).",
      examples: ["I miss my family.", "We'll miss you!"],
    },
  ],
  collocations: [
    { id: "miss-train", phrase: "miss the train / bus", meaning: "perdere il treno/bus", example: "We missed the train by two minutes.", frequency: "high" },
    { id: "miss-chance", phrase: "miss a chance", meaning: "perdere un'occasione", example: "Don't miss this chance.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "miss-ex-1", english: "I really miss my old friends.", italian: "Mi mancano davvero i miei vecchi amici.", difficulty: "A2+", highlightedWords: ["miss"] },
  ],
  commonMistakes: [
    { id: "miss-mistake-structure", incorrect: "You miss to me.", correct: "I miss you.", explanation: "English reverses Italian: 'mi manchi' = 'I miss you' (you are the object).", category: "verb" },
  ],
  exercises: ["ex-miss-transport-1", "ex-miss-you-1"],
};

export const chapter19Verbs: Verb[] = [travel, arrive, drive, fly, catchVerb, miss];
