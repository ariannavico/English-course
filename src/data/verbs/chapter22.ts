import type { Verb } from "@/types";

/** Chapter 22 — Home & Daily Life. Tier-2 thematic cards. */

export const cook: Verb = {
  id: "cook", infinitive: "cook", thirdPerson: "cooks", past: "cooked",
  pastParticiple: "cooked", ingForm: "cooking", pronunciation: { ipa: "/kʊk/" },
  tier: 2, cefrLevel: "A2", topics: ["home-daily"],
  meanings: [{ id: "cook-prepare", englishExplanation: "To prepare food using heat.", italianMeaning: "cucinare", context: "cook + a meal/dish. Note: 'cook' can also be the person (a cook).", examples: ["I'm cooking dinner.", "He cooked a delicious curry."] }],
  collocations: [
    { id: "cook-dinner", phrase: "cook dinner", meaning: "preparare la cena", example: "Whose turn is it to cook dinner?", frequency: "high" },
    { id: "cook-meal", phrase: "cook a meal", meaning: "cucinare un pasto", example: "She cooked us a lovely meal.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "cook-ex-1", english: "I don't feel like cooking tonight.", italian: "Non ho voglia di cucinare stasera.", difficulty: "A2+", highlightedWords: ["cooking"] }],
  exercises: ["ex-cook-1"],
};

export const clean: Verb = {
  id: "clean", infinitive: "clean", thirdPerson: "cleans", past: "cleaned",
  pastParticiple: "cleaned", ingForm: "cleaning", pronunciation: { ipa: "/kliːn/" },
  tier: 2, cefrLevel: "A2", topics: ["home-daily"],
  meanings: [{ id: "clean-tidy", englishExplanation: "To remove dirt from something.", italianMeaning: "pulire", context: "clean the house/room. Also an adjective (a clean shirt).", examples: ["I clean the kitchen every day.", "Have you cleaned your room?"] }],
  collocations: [
    { id: "clean-house", phrase: "clean the house", meaning: "pulire casa", example: "We clean the house on Saturdays.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "clean-ex-1", english: "It took hours to clean the whole flat.", italian: "Ci sono volute ore per pulire tutto l'appartamento.", difficulty: "A2+", highlightedWords: ["clean"] }],
  exercises: ["ex-clean-1"],
};

export const wash: Verb = {
  id: "wash", infinitive: "wash", thirdPerson: "washes", past: "washed",
  pastParticiple: "washed", ingForm: "washing", pronunciation: { ipa: "/wɒʃ/" },
  tier: 2, cefrLevel: "A2", topics: ["home-daily"],
  meanings: [{ id: "wash-clean", englishExplanation: "To clean something (or yourself) with water.", italianMeaning: "lavare", context: "wash the dishes/your hands/the car. 'do the washing-up' = wash the dishes.", examples: ["Wash your hands before dinner.", "I need to wash the car."] }],
  collocations: [
    { id: "wash-dishes", phrase: "wash the dishes", meaning: "lavare i piatti", example: "You cook, I'll wash the dishes.", frequency: "high" },
  ],
  phrasalVerbs: ["wash-up"], verbPatterns: [],
  examples: [{ id: "wash-ex-1", english: "These clothes need washing.", italian: "Questi vestiti vanno lavati.", difficulty: "A2+", highlightedWords: ["washing"] }],
  exercises: ["ex-wash-1"],
};

export const wear: Verb = {
  id: "wear", infinitive: "wear", thirdPerson: "wears", past: "wore",
  pastParticiple: "worn", ingForm: "wearing", pronunciation: { ipa: "/weə/", note: "ABC: wear · wore · worn" },
  tier: 2, cefrLevel: "A2", topics: ["home-daily"],
  meanings: [{ id: "wear-clothes", englishExplanation: "To have clothes, glasses, etc. on your body — a state.", italianMeaning: "indossare, portare", context: "wear = the STATE of having it on; put on = the ACTION of dressing.", examples: ["She's wearing a red dress.", "I always wear glasses."] }],
  collocations: [
    { id: "wear-uniform", phrase: "wear a uniform", meaning: "indossare una divisa", example: "Do you have to wear a uniform?", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "wear-ex-1", english: "What are you going to wear to the party?", italian: "Cosa ti metterai per la festa?", difficulty: "A2+", highlightedWords: ["wear"] }],
  commonMistakes: [{ id: "wear-mistake-puton", incorrect: "Every day I put on a suit at work.", correct: "Every day I wear a suit at work.", explanation: "The ongoing state = wear; the single action of dressing = put on.", category: "verb" }],
  exercises: ["ex-wear-1"],
};

export const rent: Verb = {
  id: "rent", infinitive: "rent", thirdPerson: "rents", past: "rented",
  pastParticiple: "rented", ingForm: "renting", pronunciation: { ipa: "/rent/" },
  tier: 2, cefrLevel: "B1", topics: ["home-daily", "money-shopping"],
  meanings: [{ id: "rent-pay", englishExplanation: "To pay to use something (a flat, a car) that belongs to someone else.", italianMeaning: "affittare, noleggiare", context: "rent a flat/car. The owner 'rents it out'.", examples: ["We rent a flat in the city.", "Let's rent a car for the trip."] }],
  collocations: [
    { id: "rent-flat", phrase: "rent a flat / apartment", meaning: "affittare un appartamento", example: "They rent a flat near the park.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "rent-ex-1", english: "How much does it cost to rent a car here?", italian: "Quanto costa noleggiare un'auto qui?", difficulty: "B1", highlightedWords: ["rent"] }],
  exercises: ["ex-rent-1"],
};

export const share: Verb = {
  id: "share", infinitive: "share", thirdPerson: "shares", past: "shared",
  pastParticiple: "shared", ingForm: "sharing", pronunciation: { ipa: "/ʃeə/" },
  tier: 2, cefrLevel: "A2+", topics: ["home-daily", "technology"],
  meanings: [{ id: "share-divide", englishExplanation: "To use or have something together with others.", italianMeaning: "condividere", context: "share something with someone. Also digital: share a photo/link.", examples: ["We share a flat.", "She shared the photos with me."] }],
  collocations: [
    { id: "share-with", phrase: "share (something) with (someone)", meaning: "condividere con", example: "Can you share your notes with me?", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "share-ex-1", english: "I share a room with my brother.", italian: "Condivido la stanza con mio fratello.", difficulty: "A2+", highlightedWords: ["share"] }],
  exercises: ["ex-share-1"],
};

export const chapter22Verbs: Verb[] = [cook, clean, wash, wear, rent, share];
