import type { Verb } from "@/types";

/**
 * Chapter 20 — Communication. Tier-2 thematic cards focused on the speak/talk,
 * say/tell and answer/explain traps that Italian learners hit constantly.
 */

export const speak: Verb = {
  id: "speak",
  infinitive: "speak",
  thirdPerson: "speaks",
  past: "spoke",
  pastParticiple: "spoken",
  ingForm: "speaking",
  pronunciation: { ipa: "/spiːk/", note: "ABC: speak · spoke · spoken" },
  tier: 2,
  cefrLevel: "A2",
  topics: ["communication"],
  meanings: [
    {
      id: "speak-language",
      englishExplanation: "To use a language, or to talk in a fairly formal or one-way way.",
      italianMeaning: "parlare (una lingua)",
      context: "speak + a language (speak English). speak to someone = talk to them.",
      examples: ["Do you speak English?", "Can I speak to the manager?"],
    },
  ],
  collocations: [
    { id: "speak-english", phrase: "speak English", meaning: "parlare inglese", example: "She speaks three languages.", frequency: "high" },
    { id: "speak-to", phrase: "speak to (someone)", meaning: "parlare con qualcuno", example: "I need to speak to you.", frequency: "high" },
  ],
  phrasalVerbs: ["speak-up"],
  verbPatterns: [],
  examples: [
    { id: "speak-ex-1", english: "Could you speak more slowly, please?", italian: "Potresti parlare più lentamente, per favore?", difficulty: "A2", highlightedWords: ["speak"] },
  ],
  commonMistakes: [
    { id: "speak-mistake-lang", incorrect: "I speak the English.", correct: "I speak English.", explanation: "No article before a language: 'speak English'.", category: "vocabulary" },
  ],
  exercises: ["ex-speak-vs-talk-1", "ex-speak-language-1"],
};

export const talk: Verb = {
  id: "talk",
  infinitive: "talk",
  thirdPerson: "talks",
  past: "talked",
  pastParticiple: "talked",
  ingForm: "talking",
  pronunciation: { ipa: "/tɔːk/" },
  tier: 2,
  cefrLevel: "A2",
  topics: ["communication"],
  meanings: [
    {
      id: "talk-converse",
      englishExplanation: "To have a conversation — usually informal and two-way.",
      italianMeaning: "parlare, chiacchierare",
      context: "talk to/with someone; talk about something. Very close to 'speak', but more informal.",
      examples: ["We talked for hours.", "They were talking about football."],
    },
  ],
  collocations: [
    { id: "talk-to", phrase: "talk to (someone)", meaning: "parlare con qualcuno", example: "I talked to my boss today.", frequency: "high" },
    { id: "talk-about", phrase: "talk about (something)", meaning: "parlare di qualcosa", example: "Let's talk about your plans.", frequency: "high" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "talk-ex-1", english: "Can we talk about this later?", italian: "Possiamo parlarne più tardi?", difficulty: "A2", highlightedWords: ["talk about"] },
  ],
  commonMistakes: [
    { id: "talk-mistake-about", incorrect: "We talked of the weather.", correct: "We talked about the weather.", explanation: "In everyday English, 'talk about' is far more common than 'talk of'.", category: "preposition" },
  ],
  exercises: ["ex-talk-about-1", "ex-talk-2"],
};

export const say: Verb = {
  id: "say",
  infinitive: "say",
  thirdPerson: "says",
  past: "said",
  pastParticiple: "said",
  ingForm: "saying",
  pronunciation: { ipa: "/seɪ/", note: "ABB: say · said · said (said = /sed/)" },
  tier: 2,
  cefrLevel: "A2",
  topics: ["communication"],
  meanings: [
    {
      id: "say-words",
      englishExplanation: "To express something in words. Focus on the words, not the listener.",
      italianMeaning: "dire",
      context: "say something (to someone). SAY has no person by default; TELL always needs one.",
      examples: ["She said hello.", "What did you say?"],
    },
  ],
  collocations: [
    { id: "say-sorry", phrase: "say sorry", meaning: "chiedere scusa", example: "You should say sorry.", frequency: "high" },
    { id: "say-yes", phrase: "say yes / no", meaning: "dire di sì / no", example: "She said yes!", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "say-ex-1", english: "He said that he was tired.", italian: "Ha detto che era stanco.", difficulty: "A2", highlightedWords: ["said"] },
  ],
  commonMistakes: [
    { id: "say-mistake-tell", incorrect: "She said me a secret.", correct: "She told me a secret.", explanation: "With a person, use TELL. Use SAY without a person, or 'say to me'.", category: "verb" },
  ],
  exercises: ["ex-say-vs-tell-1", "ex-say-2"],
};

export const answer: Verb = {
  id: "answer",
  infinitive: "answer",
  thirdPerson: "answers",
  past: "answered",
  pastParticiple: "answered",
  ingForm: "answering",
  pronunciation: { ipa: "/ˈɑːnsə/", note: "silent w" },
  tier: 2,
  cefrLevel: "A2",
  topics: ["communication"],
  meanings: [
    {
      id: "answer-reply",
      englishExplanation: "To reply to a question, letter, phone or door.",
      italianMeaning: "rispondere",
      context: "answer + object directly: answer the question, answer the phone — NO 'to'.",
      examples: ["Please answer the question.", "Can you answer the phone?"],
    },
  ],
  collocations: [
    { id: "answer-phone", phrase: "answer the phone", meaning: "rispondere al telefono", example: "Nobody answered the phone.", frequency: "high" },
    { id: "answer-question", phrase: "answer a question", meaning: "rispondere a una domanda", example: "She answered every question.", frequency: "high" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "answer-ex-1", english: "I couldn't answer the last question.", italian: "Non sono riuscito a rispondere all'ultima domanda.", difficulty: "A2", highlightedWords: ["answer"] },
  ],
  commonMistakes: [
    { id: "answer-mistake-to", incorrect: "Please answer to my question.", correct: "Please answer my question.", explanation: "'answer' takes a direct object — no 'to' (unlike Italian 'rispondere a').", category: "preposition" },
  ],
  exercises: ["ex-answer-prep-1", "ex-answer-2"],
};

export const explain: Verb = {
  id: "explain",
  infinitive: "explain",
  thirdPerson: "explains",
  past: "explained",
  pastParticiple: "explained",
  ingForm: "explaining",
  pronunciation: { ipa: "/ɪkˈspleɪn/" },
  tier: 2,
  cefrLevel: "A2+",
  topics: ["communication", "work-study"],
  meanings: [
    {
      id: "explain-clarify",
      englishExplanation: "To make something clear by describing it in detail.",
      italianMeaning: "spiegare",
      context: "explain something (to someone). The person takes 'to': explain it to me.",
      examples: ["Can you explain this rule?", "She explained the plan to us."],
    },
  ],
  collocations: [
    { id: "explain-to", phrase: "explain (something) to (someone)", meaning: "spiegare qualcosa a qualcuno", example: "Let me explain it to you.", frequency: "high" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "explain-ex-1", english: "Could you explain that again, please?", italian: "Potresti spiegarlo di nuovo, per favore?", difficulty: "A2+", highlightedWords: ["explain"] },
  ],
  commonMistakes: [
    { id: "explain-mistake-me", incorrect: "Can you explain me the grammar?", correct: "Can you explain the grammar to me?", explanation: "'explain' needs 'to' before the person: explain something TO someone.", category: "preposition" },
  ],
  exercises: ["ex-explain-to-1", "ex-explain-2"],
};

export const mean: Verb = {
  id: "mean",
  infinitive: "mean",
  thirdPerson: "means",
  past: "meant",
  pastParticiple: "meant",
  ingForm: "meaning",
  pronunciation: { ipa: "/miːn/", note: "ABB: mean · meant · meant (meant = /ment/)" },
  tier: 2,
  cefrLevel: "A2+",
  topics: ["communication"],
  meanings: [
    {
      id: "mean-signify",
      englishExplanation: "To signify or express a particular idea.",
      italianMeaning: "significare, voler dire",
      context: "What does X mean? A stative verb — not used in the continuous.",
      examples: ["What does 'commute' mean?", "Red means stop."],
    },
    {
      id: "mean-intend",
      englishExplanation: "'mean to' = to intend to do something.",
      italianMeaning: "avere intenzione di",
      context: "I didn't mean to = non volevo (farlo apposta).",
      examples: ["I didn't mean to hurt you.", "I meant to call you back."],
    },
  ],
  collocations: [
    { id: "mean-to", phrase: "mean to (do)", meaning: "avere intenzione di", example: "I didn't mean to be rude.", frequency: "high" },
  ],
  phrasalVerbs: [],
  verbPatterns: [],
  examples: [
    { id: "mean-ex-1", english: "What do you mean?", italian: "Cosa vuoi dire?", difficulty: "A2", highlightedWords: ["mean"] },
  ],
  commonMistakes: [
    { id: "mean-mistake-continuous", incorrect: "What are you meaning?", correct: "What do you mean?", explanation: "'mean' is stative — use the present simple.", category: "verb" },
  ],
  exercises: ["ex-mean-signify-1", "ex-mean-intend-1"],
};

export const chapter20Verbs: Verb[] = [speak, talk, say, answer, explain, mean];
