import type { VocabularyItem } from "@/types";

/** Topic vocabulary linked to the Part 4 thematic verbs. */
export const thematicVocabulary: VocabularyItem[] = [
  // --- Travel ---
  {
    id: "vocab-flight",
    word: "flight",
    partOfSpeech: "noun",
    italianMeaning: "volo",
    englishDefinition: "a journey by plane.",
    topic: "travel",
    cefrLevel: "A2",
    relatedVerbs: ["fly"],
    examples: [
      { id: "flight-ex1", english: "Our flight was delayed by two hours.", italian: "Il nostro volo era in ritardo di due ore.", difficulty: "A2", highlightedWords: ["flight"] },
    ],
  },
  {
    id: "vocab-platform",
    word: "platform",
    partOfSpeech: "noun",
    italianMeaning: "binario (marciapiede)",
    englishDefinition: "the area in a station where you get on a train.",
    topic: "travel",
    cefrLevel: "A2+",
    relatedVerbs: ["catch"],
    examples: [
      { id: "platform-ex1", english: "The train to Milan leaves from platform 4.", italian: "Il treno per Milano parte dal binario 4.", difficulty: "A2+" },
    ],
  },
  {
    id: "vocab-luggage",
    word: "luggage",
    partOfSpeech: "noun",
    italianMeaning: "bagagli",
    englishDefinition: "the bags you take when you travel (uncountable).",
    topic: "travel",
    cefrLevel: "A2+",
    relatedVerbs: ["travel"],
    examples: [
      { id: "luggage-ex1", english: "How much luggage can I take?", italian: "Quanti bagagli posso portare?", difficulty: "A2+", highlightedWords: ["luggage"] },
    ],
  },

  // --- Communication ---
  {
    id: "vocab-conversation",
    word: "conversation",
    partOfSpeech: "noun",
    italianMeaning: "conversazione",
    englishDefinition: "an informal talk between people.",
    topic: "communication",
    cefrLevel: "A2+",
    relatedVerbs: ["talk", "speak"],
    examples: [
      { id: "conversation-ex1", english: "We had a long conversation about the future.", italian: "Abbiamo avuto una lunga conversazione sul futuro.", difficulty: "A2+" },
    ],
  },
  {
    id: "vocab-message",
    word: "message",
    partOfSpeech: "noun",
    italianMeaning: "messaggio",
    englishDefinition: "a piece of written or spoken information you send someone.",
    topic: "communication",
    cefrLevel: "A2",
    relatedVerbs: ["say", "leave"],
    examples: [
      { id: "message-ex1", english: "She left a message on my phone.", italian: "Mi ha lasciato un messaggio sul telefono.", difficulty: "A2", highlightedWords: ["message"] },
    ],
  },
  {
    id: "vocab-language",
    word: "language",
    partOfSpeech: "noun",
    italianMeaning: "lingua",
    englishDefinition: "the system of words people use to communicate.",
    topic: "communication",
    cefrLevel: "A2",
    relatedVerbs: ["speak"],
    examples: [
      { id: "language-ex1", english: "How many languages do you speak?", italian: "Quante lingue parli?", difficulty: "A2", highlightedWords: ["languages"] },
    ],
  },
];
