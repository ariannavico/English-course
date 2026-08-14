import type { Verb } from "@/types";

/** Chapter 7 essentials: be / have / do / go. Full Tier-1 cards. */

export const be: Verb = {
  id: "be",
  infinitive: "be",
  thirdPerson: "is",
  past: "was",
  pastParticiple: "been",
  ingForm: "being",
  pronunciation: { ipa: "/biː/", note: "am / is / are · was / were" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "be-identity",
      englishExplanation: "To describe identity, jobs, states and characteristics.",
      italianMeaning: "essere",
      context: "The basic linking verb: subject + be + adjective/noun.",
      examples: ["She is a doctor.", "They are tired."],
    },
    {
      id: "be-there",
      englishExplanation: "'there is / there are' to say something exists.",
      italianMeaning: "c'è / ci sono",
      context: "Use 'there is' + singular, 'there are' + plural.",
      examples: ["There is a problem.", "There are two cafés near here."],
    },
    {
      id: "be-states",
      englishExplanation: "For physical states and age where Italian uses 'avere'.",
      italianMeaning: "avere (fame, freddo, ragione, … anni)",
      context: "English uses BE, not HAVE: be hungry, be cold, be right, be 20.",
      examples: ["I'm hungry.", "He is 25 years old."],
    },
  ],
  collocations: [
    { id: "be-careful", phrase: "be careful", meaning: "stare attento", example: "Be careful on the stairs.", frequency: "high" },
    { id: "be-on-time", phrase: "be on time", meaning: "essere puntuale", example: "Please be on time.", frequency: "high" },
    { id: "be-about-to", phrase: "be about to", meaning: "stare per (fare)", example: "We're about to leave.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "be-adj", pattern: "be + adjective", explanation: "Describe a state or quality.", examples: ["I am ready.", "It was easy."] },
    { id: "be-there", pattern: "there + be + noun", explanation: "Say something exists.", examples: ["There are people waiting."] },
  ],
  examples: [
    { id: "be-ex-1", english: "I'm cold — can you close the window?", italian: "Ho freddo, puoi chiudere la finestra?", difficulty: "A2", highlightedWords: ["'m"], grammarFocus: ["present-simple"] },
    { id: "be-ex-2", english: "There were a lot of people at the party.", italian: "C'era molta gente alla festa.", difficulty: "A2+", highlightedWords: ["were"], grammarFocus: ["past-simple"] },
  ],
  commonMistakes: [
    { id: "be-mistake-hungry", incorrect: "I have hungry.", correct: "I am hungry.", explanation: "English uses BE for hunger/cold/thirst, not HAVE.", category: "verb" },
    { id: "be-mistake-age", incorrect: "I have 20 years.", correct: "I am 20 (years old).", explanation: "Age uses BE in English: I am 20.", category: "verb" },
  ],
  exercises: ["ex-be-states-1", "ex-be-there-1", "ex-be-error-1"],
};

export const have: Verb = {
  id: "have",
  infinitive: "have",
  thirdPerson: "has",
  past: "had",
  pastParticiple: "had",
  ingForm: "having",
  pronunciation: { ipa: "/hæv/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "have-possess",
      englishExplanation: "To possess or own something.",
      italianMeaning: "avere, possedere",
      context: "A state verb — not used in the continuous for possession.",
      examples: ["I have two brothers.", "She has a new car."],
    },
    {
      id: "have-experience",
      englishExplanation: "To eat, drink or experience something ('have breakfast', 'have a shower').",
      italianMeaning: "fare / prendere / consumare",
      context: "Very common with meals and activities: here HAVE ≈ 'do/take'.",
      examples: ["We had lunch at one.", "I'm having a shower."],
    },
    {
      id: "have-to",
      englishExplanation: "'have to' expresses obligation or necessity.",
      italianMeaning: "dovere",
      context: "have to + base form. Question/negative use do/does.",
      examples: ["I have to go now.", "Do you have to work on Saturday?"],
    },
  ],
  collocations: [
    { id: "have-breakfast", phrase: "have breakfast / lunch / dinner", meaning: "fare colazione / pranzo / cena", example: "We have dinner at eight.", frequency: "high" },
    { id: "have-shower", phrase: "have a shower", meaning: "fare la doccia", example: "I have a shower every morning.", frequency: "high" },
    { id: "have-look", phrase: "have a look", meaning: "dare un'occhiata", example: "Can I have a look?", frequency: "medium" },
    { id: "have-good-time", phrase: "have a good time", meaning: "divertirsi", example: "Have a good time!", frequency: "high" },
  ],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "have-activity", pattern: "have + meal/activity", explanation: "'do/take' an everyday activity.", examples: ["have a break", "have a rest"] },
    { id: "have-to-do", pattern: "have to + base form", explanation: "Obligation.", examples: ["I have to study."] },
  ],
  similarVerbs: [
    {
      verbId: "get",
      difference: "HAVE = possess (a state); GET = obtain (an action). You GET something and then you HAVE it.",
      examples: [{ correct: "I got a new phone, so now I have two.", explanation: "get = obtain, have = possess." }],
    },
  ],
  examples: [
    { id: "have-ex-1", english: "I have to leave early today.", italian: "Oggi devo andare via presto.", difficulty: "A2+", highlightedWords: ["have to"] },
    { id: "have-ex-2", english: "We had a great time in Spain.", italian: "Ci siamo divertiti molto in Spagna.", difficulty: "A2+", highlightedWords: ["had"] },
  ],
  commonMistakes: [
    { id: "have-mistake-continuous", incorrect: "I am having a car.", correct: "I have a car.", explanation: "Possession is a state — don't use the continuous.", category: "verb" },
  ],
  exercises: ["ex-have-collocation-1", "ex-have-to-1", "ex-have-vs-get-1"],
};

export const doVerb: Verb = {
  id: "do",
  infinitive: "do",
  thirdPerson: "does",
  past: "did",
  pastParticiple: "done",
  ingForm: "doing",
  pronunciation: { ipa: "/duː/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "do-activity",
      englishExplanation: "To perform an action, task or activity.",
      italianMeaning: "fare (un'attività)",
      context: "DO an activity (homework, the shopping); MAKE = produce/create something.",
      examples: ["I do my homework after dinner.", "She's doing the shopping."],
    },
    {
      id: "do-auxiliary",
      englishExplanation: "As an auxiliary to form questions and negatives in the present/past simple.",
      italianMeaning: "(ausiliare per domande e negazioni)",
      context: "do/does/did + base form: Do you…? / I don't… / Did he…?",
      examples: ["Do you like tea?", "They didn't come."],
    },
  ],
  collocations: [
    { id: "do-homework", phrase: "do (your) homework", meaning: "fare i compiti", example: "Have you done your homework?", frequency: "high" },
    { id: "do-shopping", phrase: "do the shopping", meaning: "fare la spesa", example: "I do the shopping on Saturdays.", frequency: "high" },
    { id: "do-best", phrase: "do your best", meaning: "fare del proprio meglio", example: "Just do your best.", frequency: "medium" },
    { id: "do-exercise", phrase: "do exercise", meaning: "fare esercizio fisico", example: "You should do more exercise.", frequency: "medium" },
  ],
  phrasalVerbs: ["do-up"],
  verbPatterns: [
    { id: "do-activity-p", pattern: "do + activity noun", explanation: "Perform a task or chore.", examples: ["do the washing-up", "do a course"] },
  ],
  similarVerbs: [
    {
      verbId: "make",
      difference: "DO = perform an activity/task; MAKE = produce or create a result.",
      examples: [
        { correct: "do your homework", explanation: "an activity you perform." },
        { correct: "make a cake", explanation: "you produce a result." },
      ],
    },
  ],
  examples: [
    { id: "do-ex-1", english: "What do you do at the weekend?", italian: "Cosa fai nel fine settimana?", difficulty: "A2", highlightedWords: ["do"] },
    { id: "do-ex-2", english: "He did the washing-up after dinner.", italian: "Ha lavato i piatti dopo cena.", difficulty: "A2+", highlightedWords: ["did"] },
  ],
  commonMistakes: [
    { id: "do-mistake-make", incorrect: "I must make my homework.", correct: "I must do my homework.", explanation: "Homework is an activity you DO, not MAKE.", category: "verb" },
  ],
  exercises: ["ex-do-vs-make-1", "ex-do-collocation-1", "ex-do-aux-1"],
};

export const go: Verb = {
  id: "go",
  infinitive: "go",
  thirdPerson: "goes",
  past: "went",
  pastParticiple: "gone",
  ingForm: "going",
  pronunciation: { ipa: "/ɡəʊ/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["travel", "daily-life"],
  meanings: [
    {
      id: "go-move",
      englishExplanation: "To move or travel from one place to another.",
      italianMeaning: "andare",
      context: "go + to + place. But 'go home' has NO 'to'.",
      examples: ["I go to work by bus.", "Let's go home."],
    },
    {
      id: "go-activity",
      englishExplanation: "'go + -ing' for leisure activities.",
      italianMeaning: "andare a (fare qualcosa)",
      context: "go swimming / shopping / running — no 'to' before the -ing.",
      examples: ["We went swimming yesterday.", "She goes running every morning."],
    },
    {
      id: "go-become",
      englishExplanation: "To become (a change, often negative).",
      italianMeaning: "diventare, andare a male",
      context: "go + adjective: go bad, go wrong, go grey.",
      examples: ["The milk has gone bad.", "Everything went wrong."],
    },
  ],
  collocations: [
    { id: "go-home", phrase: "go home", meaning: "andare a casa", example: "I want to go home.", frequency: "high" },
    { id: "go-shopping", phrase: "go shopping", meaning: "andare a fare shopping", example: "We go shopping on Fridays.", frequency: "high" },
    { id: "go-for-walk", phrase: "go for a walk", meaning: "andare a fare una passeggiata", example: "Let's go for a walk.", frequency: "high" },
    { id: "go-on-holiday", phrase: "go on holiday", meaning: "andare in vacanza", example: "We're going on holiday in August.", frequency: "high" },
  ],
  phrasalVerbs: ["go-on", "go-out", "go-back"],
  verbPatterns: [
    { id: "go-to-place", pattern: "go + to + place", explanation: "Travel toward a place.", examples: ["go to school", "go to Italy"] },
    { id: "go-ing", pattern: "go + -ing", explanation: "Do a leisure activity.", examples: ["go shopping", "go skiing"] },
    { id: "go-adj", pattern: "go + adjective", explanation: "Become (usually a bad change).", examples: ["go bad", "go wrong"] },
  ],
  similarVerbs: [
    {
      verbId: "get",
      difference: "GO = travel toward; 'GET to' = arrive at / reach. The focus of GET is the arrival.",
      examples: [{ correct: "I went to the station and got there at six.", explanation: "go = the journey, get to = the arrival." }],
    },
  ],
  examples: [
    { id: "go-ex-1", english: "I usually go home at six.", italian: "Di solito vado a casa alle sei.", difficulty: "A2", highlightedWords: ["go home"] },
    { id: "go-ex-2", english: "We went on holiday to Greece last year.", italian: "L'anno scorso siamo andati in vacanza in Grecia.", difficulty: "A2+", highlightedWords: ["went"] },
  ],
  commonMistakes: [
    { id: "go-mistake-home", incorrect: "I go to home after school.", correct: "I go home after school.", explanation: "'home' takes no 'to' after go.", category: "preposition" },
    { id: "go-mistake-holiday", incorrect: "We go in holiday in summer.", correct: "We go on holiday in summer.", explanation: "The fixed expression is 'go on holiday'.", category: "preposition" },
  ],
  exercises: ["ex-go-prep-1", "ex-go-ing-1", "ex-go-mixed-1"],
};

export const chapter07Verbs: Verb[] = [be, have, doVerb, go];
