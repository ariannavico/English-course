import type { Verb } from "@/types";

/** Chapter 11 essentials: find / tell / ask / work. Full Tier-1 cards. */

export const find: Verb = {
  id: "find",
  infinitive: "find",
  thirdPerson: "finds",
  past: "found",
  pastParticiple: "found",
  ingForm: "finding",
  pronunciation: { ipa: "/faɪnd/", note: "ABB: find · found · found" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "find-locate",
      englishExplanation: "To discover or locate something, often after searching.",
      italianMeaning: "trovare",
      context: "FIND = the result; LOOK FOR = the search. You look for something until you find it.",
      examples: ["I can't find my keys.", "She found a great flat."],
    },
    {
      id: "find-opinion",
      englishExplanation: "'find + object + adjective' to give a personal impression.",
      italianMeaning: "trovare (che sia), reputare",
      context: "I find it difficult = in my experience it is difficult.",
      examples: ["I find English grammar hard.", "We found the film boring."],
    },
  ],
  collocations: [
    { id: "find-out", phrase: "find out", meaning: "scoprire (un'informazione)", example: "I found out the truth.", frequency: "high" },
    { id: "find-job", phrase: "find a job", meaning: "trovare lavoro", example: "He found a job quickly.", frequency: "medium" },
    { id: "find-time", phrase: "find time", meaning: "trovare il tempo", example: "I can't find time to relax.", frequency: "medium" },
  ],
  phrasalVerbs: ["find-out"],
  verbPatterns: [
    { id: "find-obj", pattern: "find + object", explanation: "Locate/discover something.", examples: ["I found my phone."] },
    { id: "find-obj-adj", pattern: "find + object + adjective", explanation: "Give a personal impression.", examples: ["I find it easy.", "She finds him annoying."] },
  ],
  similarVerbs: [
    {
      verbId: "look",
      difference: "LOOK FOR = the action of searching; FIND = the successful result. You can look for something without finding it.",
      examples: [{ correct: "I looked for it everywhere and finally found it.", explanation: "look for = search, find = result." }],
    },
  ],
  examples: [
    { id: "find-ex-1", english: "I found a €20 note on the street.", italian: "Ho trovato una banconota da 20 € per strada.", difficulty: "A2", highlightedWords: ["found"] },
    { id: "find-ex-2", english: "Many Italians find English pronunciation tricky.", italian: "Molti italiani trovano difficile la pronuncia inglese.", difficulty: "B1", highlightedWords: ["find"] },
  ],
  commonMistakes: [
    { id: "find-mistake-lookfor", incorrect: "I'm finding my glasses — have you seen them?", correct: "I'm looking for my glasses — have you seen them?", explanation: "The act of searching is 'look for'; 'find' is the result.", category: "verb" },
  ],
  exercises: ["ex-find-vs-lookfor-1", "ex-find-out-1", "ex-find-object-adj-1"],
};

export const tell: Verb = {
  id: "tell",
  infinitive: "tell",
  thirdPerson: "tells",
  past: "told",
  pastParticiple: "told",
  ingForm: "telling",
  pronunciation: { ipa: "/tel/", note: "ABB: tell · told · told" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["communication"],
  meanings: [
    {
      id: "tell-inform",
      englishExplanation: "To give information to a specific person.",
      italianMeaning: "dire (a qualcuno), raccontare",
      context: "TELL always needs a person: tell someone something. (SAY doesn't.)",
      examples: ["Tell me the truth.", "She told us about her trip."],
    },
    {
      id: "tell-instruct",
      englishExplanation: "'tell + someone + to do' to give an instruction.",
      italianMeaning: "dire di fare",
      context: "tell + person + to + infinitive.",
      examples: ["The teacher told us to be quiet.", "He told me to wait."],
    },
  ],
  collocations: [
    { id: "tell-truth", phrase: "tell the truth", meaning: "dire la verità", example: "Always tell the truth.", frequency: "high" },
    { id: "tell-lie", phrase: "tell a lie", meaning: "dire una bugia", example: "Don't tell lies.", frequency: "medium" },
    { id: "tell-story", phrase: "tell a story", meaning: "raccontare una storia", example: "Grandpa told us a story.", frequency: "medium" },
    { id: "tell-time", phrase: "tell the time", meaning: "leggere l'ora", example: "Can your son tell the time yet?", frequency: "medium" },
  ],
  phrasalVerbs: ["tell-off"],
  verbPatterns: [
    { id: "tell-sb-sth", pattern: "tell + someone + something", explanation: "A person is required.", examples: ["Tell me your name."] },
    { id: "tell-sb-to", pattern: "tell + someone + to + infinitive", explanation: "Give an instruction.", examples: ["Tell him to stop."] },
  ],
  similarVerbs: [
    {
      verbId: "ask",
      difference: "TELL = give information or an instruction; ASK = request information or an action.",
      examples: [{ correct: "She asked me a question and I told her the answer.", explanation: "ask = request, tell = give." }],
    },
  ],
  examples: [
    { id: "tell-ex-1", english: "Can you tell me where the station is?", italian: "Mi puoi dire dov'è la stazione?", difficulty: "A2", highlightedWords: ["tell me"] },
    { id: "tell-ex-2", english: "My boss told me to finish the report.", italian: "Il mio capo mi ha detto di finire il rapporto.", difficulty: "B1", highlightedWords: ["told me to"] },
  ],
  commonMistakes: [
    { id: "tell-mistake-say", incorrect: "He said me his name.", correct: "He told me his name.", explanation: "With a person, use TELL (tell me); SAY has no person, or uses 'say to me'.", category: "verb" },
  ],
  exercises: ["ex-tell-vs-say-1", "ex-tell-sb-to-1", "ex-tell-collocation-1"],
};

export const ask: Verb = {
  id: "ask",
  infinitive: "ask",
  thirdPerson: "asks",
  past: "asked",
  pastParticiple: "asked",
  ingForm: "asking",
  pronunciation: { ipa: "/ɑːsk/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["communication"],
  meanings: [
    {
      id: "ask-question",
      englishExplanation: "To request information from someone.",
      italianMeaning: "chiedere, domandare",
      context: "ask + someone + (question). You ASK a question — you don't 'make' one.",
      examples: ["Can I ask you something?", "She asked where I lived."],
    },
    {
      id: "ask-for",
      englishExplanation: "'ask for' to request a thing; 'ask someone to do' to request an action.",
      italianMeaning: "chiedere (qualcosa / di fare)",
      context: "ask for + noun; ask + someone + to + infinitive.",
      examples: ["He asked for help.", "I asked her to call me."],
    },
  ],
  collocations: [
    { id: "ask-question", phrase: "ask a question", meaning: "fare una domanda", example: "May I ask a question?", frequency: "high" },
    { id: "ask-for-help", phrase: "ask for help", meaning: "chiedere aiuto", example: "Don't be afraid to ask for help.", frequency: "high" },
    { id: "ask-the-way", phrase: "ask the way", meaning: "chiedere la strada", example: "We asked the way to the museum.", frequency: "medium" },
  ],
  phrasalVerbs: ["ask-for", "ask-out"],
  verbPatterns: [
    { id: "ask-sb", pattern: "ask + someone + (something)", explanation: "Request information — no 'to' before the person.", examples: ["Ask the teacher.", "Ask me anything."] },
    { id: "ask-sb-to", pattern: "ask + someone + to + infinitive", explanation: "Request an action.", examples: ["I asked him to help."] },
  ],
  similarVerbs: [
    {
      verbId: "tell",
      difference: "ASK = request; TELL = give. Opposite roles in a conversation.",
      examples: [{ correct: "I asked for directions and a local told me the way.", explanation: "ask = request, tell = give." }],
    },
  ],
  examples: [
    { id: "ask-ex-1", english: "Can I ask you a quick question?", italian: "Posso farti una domanda veloce?", difficulty: "A2", highlightedWords: ["ask", "question"] },
    { id: "ask-ex-2", english: "She asked me to wait outside.", italian: "Mi ha chiesto di aspettare fuori.", difficulty: "B1", highlightedWords: ["asked me to"] },
  ],
  commonMistakes: [
    { id: "ask-mistake-make", incorrect: "Can I make you a question?", correct: "Can I ask you a question?", explanation: "In English you ASK a question, not 'make' one (Italian 'fare una domanda').", category: "verb" },
    { id: "ask-mistake-to", incorrect: "I asked to the waiter for the bill.", correct: "I asked the waiter for the bill.", explanation: "No 'to' between ask and the person.", category: "preposition" },
  ],
  exercises: ["ex-ask-question-1", "ex-ask-for-1", "ex-ask-error-1"],
};

export const work: Verb = {
  id: "work",
  infinitive: "work",
  thirdPerson: "works",
  past: "worked",
  pastParticiple: "worked",
  ingForm: "working",
  pronunciation: { ipa: "/wɜːk/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["work-study"],
  meanings: [
    {
      id: "work-job",
      englishExplanation: "To do a job for money.",
      italianMeaning: "lavorare",
      context: "work as + job; work for + company; work at/in + place.",
      examples: ["She works as a nurse.", "I work for a small company."],
    },
    {
      id: "work-function",
      englishExplanation: "(of a machine or plan) to function or operate correctly.",
      italianMeaning: "funzionare",
      context: "The lift isn't working = it's broken. Also 'the plan worked'.",
      examples: ["The printer isn't working.", "Your idea worked perfectly."],
    },
  ],
  collocations: [
    { id: "work-hard", phrase: "work hard", meaning: "lavorare sodo", example: "They work hard every day.", frequency: "high" },
    { id: "at-work", phrase: "at work", meaning: "al lavoro", example: "He's at work until six.", frequency: "high" },
    { id: "work-out-c", phrase: "work out", meaning: "allenarsi / risolversi", example: "I work out at the gym.", frequency: "medium" },
  ],
  phrasalVerbs: ["work-out"],
  verbPatterns: [
    { id: "work-as", pattern: "work + as + job", explanation: "State your profession.", examples: ["I work as a teacher."] },
    { id: "work-for", pattern: "work + for + company", explanation: "Say your employer.", examples: ["She works for Google."] },
  ],
  examples: [
    { id: "work-ex-1", english: "My sister works as an engineer.", italian: "Mia sorella lavora come ingegnere.", difficulty: "A2", highlightedWords: ["works as"] },
    { id: "work-ex-2", english: "Sorry, the app isn't working today.", italian: "Scusa, l'app oggi non funziona.", difficulty: "A2+", highlightedWords: ["working"] },
  ],
  commonMistakes: [
    { id: "work-mistake-like", incorrect: "I work like a waiter.", correct: "I work as a waiter.", explanation: "Use 'as' (not 'like') for a job.", category: "preposition" },
  ],
  exercises: ["ex-work-as-1", "ex-work-function-1", "ex-work-out-1"],
};

export const chapter11Verbs: Verb[] = [find, tell, ask, work];
