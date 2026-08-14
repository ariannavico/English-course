import type { VocabularyItem } from "@/types";

export const coreVocabulary: VocabularyItem[] = [
  {
    id: "vocab-journey",
    word: "journey",
    partOfSpeech: "noun",
    italianMeaning: "viaggio (tragitto)",
    englishDefinition: "an act of travelling from one place to another.",
    topic: "travel",
    cefrLevel: "A2+",
    relatedVerbs: ["take"],
    examples: [
      { id: "journey-ex1", english: "The journey takes two hours by train.", italian: "Il viaggio dura due ore in treno.", difficulty: "A2+", highlightedWords: ["journey", "takes"] },
    ],
  },
  {
    id: "vocab-schedule",
    word: "schedule",
    partOfSpeech: "noun",
    italianMeaning: "orario, programma",
    englishDefinition: "a plan of things to do and the times they will happen.",
    topic: "daily-life",
    cefrLevel: "B1",
    examples: [
      { id: "schedule-ex1", english: "My schedule is very busy this week.", italian: "Ho un programma molto fitto questa settimana.", difficulty: "B1" },
    ],
  },
  {
    id: "vocab-break",
    word: "break",
    partOfSpeech: "noun",
    italianMeaning: "pausa",
    englishDefinition: "a short rest from work or activity.",
    topic: "daily-life",
    cefrLevel: "A2",
    relatedVerbs: ["take"],
    collocations: ["take-a-break"],
    examples: [
      { id: "break-ex1", english: "Let's take a short break.", italian: "Facciamo una breve pausa.", difficulty: "A2", highlightedWords: ["break"] },
    ],
  },
  {
    id: "vocab-decision",
    word: "decision",
    partOfSpeech: "noun",
    italianMeaning: "decisione",
    englishDefinition: "a choice you make after thinking.",
    topic: "daily-life",
    cefrLevel: "A2+",
    relatedVerbs: ["make"],
    collocations: ["make-decision"],
    examples: [
      { id: "decision-ex1", english: "It was a difficult decision to make.", italian: "È stata una decisione difficile da prendere.", difficulty: "A2+", highlightedWords: ["decision"] },
    ],
  },
];
