import type { Verb } from "@/types";

/** Chapter 12 essentials: seem / feel / try / leave / call. Full Tier-1 cards. */

export const seem: Verb = {
  id: "seem",
  infinitive: "seem",
  thirdPerson: "seems",
  past: "seemed",
  pastParticiple: "seemed",
  ingForm: "seeming",
  pronunciation: { ipa: "/siːm/" },
  tier: 1,
  cefrLevel: "A2+",
  topics: ["feelings-opinions"],
  meanings: [
    {
      id: "seem-appear",
      englishExplanation: "To appear to be a certain way (a general impression). A stative verb.",
      italianMeaning: "sembrare",
      context: "seem + adjective, or 'it seems that…'. Not used in the continuous.",
      examples: ["You seem happy today.", "It seems difficult."],
    },
    {
      id: "seem-to",
      englishExplanation: "'seem + to + infinitive' — appear to do/be something.",
      italianMeaning: "sembrare (di/che)",
      context: "He seems to know everyone.",
      examples: ["She seems to like her new job.", "They seem to be lost."],
    },
  ],
  collocations: [
    { id: "seem-like", phrase: "seem like", meaning: "sembrare (come)", example: "It seems like a good idea.", frequency: "medium" },
    { id: "it-seems-that", phrase: "it seems that", meaning: "sembra che", example: "It seems that we're early.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "seem-adj", pattern: "seem + adjective", explanation: "Give an impression.", examples: ["You seem tired.", "It seems fine."] },
    { id: "seem-to-inf", pattern: "seem + to + infinitive", explanation: "Appear to do/be.", examples: ["He seems to understand."] },
  ],
  similarVerbs: [
    {
      verbId: "look",
      difference: "LOOK + adjective = appears from what you SEE; SEEM = a general impression from any evidence.",
      examples: [{ correct: "She looks tired (from her face) and seems stressed (from everything).", explanation: "look = visual; seem = overall impression." }],
    },
  ],
  examples: [
    { id: "seem-ex-1", english: "This exercise seems easy.", italian: "Questo esercizio sembra facile.", difficulty: "A2+", highlightedWords: ["seems"] },
    { id: "seem-ex-2", english: "He seems to be very busy at the moment.", italian: "Sembra essere molto occupato in questo momento.", difficulty: "B1", highlightedWords: ["seems to"] },
  ],
  commonMistakes: [
    { id: "seem-mistake-continuous", incorrect: "It is seeming a good plan.", correct: "It seems a good plan.", explanation: "'seem' is stative — use the present simple.", category: "verb" },
  ],
  exercises: ["ex-seem-adj-1", "ex-seem-to-1", "ex-seem-vs-look-1"],
};

export const feel: Verb = {
  id: "feel",
  infinitive: "feel",
  thirdPerson: "feels",
  past: "felt",
  pastParticiple: "felt",
  ingForm: "feeling",
  pronunciation: { ipa: "/fiːl/", note: "ABB: feel · felt · felt" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["feelings-opinions", "health"],
  meanings: [
    {
      id: "feel-emotion",
      englishExplanation: "To experience an emotion or physical sensation.",
      italianMeaning: "sentirsi",
      context: "feel + adjective. No reflexive pronoun: 'I feel tired' (NOT 'I feel me tired').",
      examples: ["I feel tired.", "How do you feel today?"],
    },
    {
      id: "feel-like",
      englishExplanation: "'feel like + -ing/noun' to want or fancy something.",
      italianMeaning: "avere voglia di",
      context: "feel like + -ing (do) or + noun (a thing).",
      examples: ["I feel like going for a walk.", "Do you feel like a coffee?"],
    },
  ],
  collocations: [
    { id: "feel-better", phrase: "feel better", meaning: "sentirsi meglio", example: "I hope you feel better soon.", frequency: "high" },
    { id: "feel-like-c", phrase: "feel like", meaning: "avere voglia di", example: "I don't feel like cooking.", frequency: "high" },
    { id: "feel-at-home", phrase: "feel at home", meaning: "sentirsi a casa", example: "Make yourself feel at home.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "feel-adj", pattern: "feel + adjective", explanation: "Describe an emotion/state.", examples: ["I feel nervous."] },
    { id: "feel-like-p", pattern: "feel like + -ing / noun", explanation: "Want something.", examples: ["I feel like dancing.", "I feel like pizza."] },
  ],
  similarVerbs: [
    {
      verbId: "seem",
      difference: "FEEL = the internal experience of the subject; SEEM = the external impression others get.",
      examples: [{ correct: "I feel fine, but I seem pale to everyone.", explanation: "feel = inside; seem = outside." }],
    },
  ],
  examples: [
    { id: "feel-ex-1", english: "I don't feel like going out tonight.", italian: "Non ho voglia di uscire stasera.", difficulty: "A2+", highlightedWords: ["feel like"] },
    { id: "feel-ex-2", english: "She felt nervous before the exam.", italian: "Si sentiva nervosa prima dell'esame.", difficulty: "A2+", highlightedWords: ["felt"] },
  ],
  commonMistakes: [
    { id: "feel-mistake-reflexive", incorrect: "I feel me very happy.", correct: "I feel very happy.", explanation: "No reflexive pronoun in English (Italian 'mi sento' → 'I feel').", category: "verb" },
    { id: "feel-mistake-like", incorrect: "I feel to eat something.", correct: "I feel like eating something.", explanation: "Want → 'feel like + -ing'.", category: "verb" },
  ],
  exercises: ["ex-feel-adj-1", "ex-feel-like-1", "ex-feel-error-1"],
};

export const tryVerb: Verb = {
  id: "try",
  infinitive: "try",
  thirdPerson: "tries",
  past: "tried",
  pastParticiple: "tried",
  ingForm: "trying",
  pronunciation: { ipa: "/traɪ/" },
  tier: 1,
  cefrLevel: "A2+",
  topics: ["daily-life"],
  meanings: [
    {
      id: "try-attempt",
      englishExplanation: "To make an effort to do something.",
      italianMeaning: "provare, cercare di",
      context: "try + to + infinitive = make an effort.",
      examples: ["I'll try to help.", "She tried to open the door."],
    },
    {
      id: "try-experiment",
      englishExplanation: "'try + -ing' means experiment with something to see the result.",
      italianMeaning: "provare a (per vedere l'effetto)",
      context: "try + -ing = test a solution. 'Try restarting the computer.'",
      examples: ["Try adding more salt.", "Have you tried turning it off and on?"],
    },
  ],
  collocations: [
    { id: "try-best", phrase: "try your best", meaning: "fare del proprio meglio", example: "Just try your best.", frequency: "high" },
    { id: "try-hard", phrase: "try hard", meaning: "impegnarsi molto", example: "He tries hard at school.", frequency: "medium" },
  ],
  phrasalVerbs: ["try-on", "try-out"],
  verbPatterns: [
    { id: "try-to-inf", pattern: "try + to + infinitive", explanation: "Make an effort.", examples: ["Try to be on time."] },
    { id: "try-ing", pattern: "try + -ing", explanation: "Experiment with a solution.", examples: ["Try restarting it."] },
  ],
  examples: [
    { id: "try-ex-1", english: "I'm trying to learn the past tenses.", italian: "Sto cercando di imparare i tempi passati.", difficulty: "A2+", highlightedWords: ["trying to"] },
    { id: "try-ex-2", english: "If it doesn't work, try restarting the app.", italian: "Se non funziona, prova a riavviare l'app.", difficulty: "B1", highlightedWords: ["try restarting"] },
  ],
  commonMistakes: [
    { id: "try-mistake-of", incorrect: "I try of speaking English every day.", correct: "I try to speak English every day.", explanation: "Effort → 'try to + infinitive' (no 'of').", category: "preposition" },
  ],
  exercises: ["ex-try-to-1", "ex-try-on-1", "ex-try-mixed-1"],
};

export const leave: Verb = {
  id: "leave",
  infinitive: "leave",
  thirdPerson: "leaves",
  past: "left",
  pastParticiple: "left",
  ingForm: "leaving",
  pronunciation: { ipa: "/liːv/", note: "ABB: leave · left · left" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["travel", "daily-life"],
  meanings: [
    {
      id: "leave-depart",
      englishExplanation: "To go away from a place or person.",
      italianMeaning: "partire, andarsene, lasciare",
      context: "leave + place (leave the office). 'leave home' takes no article.",
      examples: ["The train leaves at nine.", "I left the party early."],
    },
    {
      id: "leave-forget",
      englishExplanation: "To let something stay somewhere (on purpose or by mistake).",
      italianMeaning: "lasciare (dimenticare)",
      context: "leave + object + place. Different from 'forget' (you leave a thing in a place).",
      examples: ["I left my umbrella on the bus.", "Leave the keys on the table."],
    },
  ],
  collocations: [
    { id: "leave-home", phrase: "leave home", meaning: "uscire di casa / andarsene di casa", example: "I leave home at eight.", frequency: "high" },
    { id: "leave-message", phrase: "leave a message", meaning: "lasciare un messaggio", example: "Can I leave a message?", frequency: "medium" },
    { id: "leave-early", phrase: "leave early", meaning: "andarsene presto", example: "We had to leave early.", frequency: "medium" },
  ],
  phrasalVerbs: ["leave-out"],
  verbPatterns: [
    { id: "leave-place", pattern: "leave + place", explanation: "Depart from somewhere.", examples: ["leave the country"] },
    { id: "leave-obj-place", pattern: "leave + object + place", explanation: "Let something stay/forget it.", examples: ["I left my bag at home."] },
  ],
  examples: [
    { id: "leave-ex-1", english: "What time do you leave home in the morning?", italian: "A che ora esci di casa la mattina?", difficulty: "A2", highlightedWords: ["leave home"] },
    { id: "leave-ex-2", english: "Oh no, I've left my phone at the office.", italian: "Oh no, ho lasciato il telefono in ufficio.", difficulty: "A2+", highlightedWords: ["left"] },
  ],
  commonMistakes: [
    { id: "leave-mistake-let", incorrect: "Please leave me explain.", correct: "Please let me explain.", explanation: "Permission = LET (let me do). LEAVE = depart / let stay. Italian 'lasciare' covers both.", category: "verb" },
  ],
  exercises: ["ex-leave-vs-let-1", "ex-leave-object-1", "ex-leave-collocation-1"],
};

export const call: Verb = {
  id: "call",
  infinitive: "call",
  thirdPerson: "calls",
  past: "called",
  pastParticiple: "called",
  ingForm: "calling",
  pronunciation: { ipa: "/kɔːl/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["communication", "technology"],
  meanings: [
    {
      id: "call-phone",
      englishExplanation: "To telephone someone.",
      italianMeaning: "chiamare, telefonare",
      context: "call + someone directly — no 'to'. Not 'telephone to me'.",
      examples: ["Call me tonight.", "I'll call you back."],
    },
    {
      id: "call-name",
      englishExplanation: "To give a name to, or describe, someone or something.",
      italianMeaning: "chiamare (dare un nome)",
      context: "call + someone + name.",
      examples: ["They called the baby Sofia.", "Everyone calls him Bob."],
    },
  ],
  collocations: [
    { id: "call-back", phrase: "call back", meaning: "richiamare", example: "I'll call you back later.", frequency: "high" },
    { id: "give-a-call-c", phrase: "give (someone) a call", meaning: "fare una chiamata", example: "Give me a call tomorrow.", frequency: "high" },
    { id: "call-police", phrase: "call the police", meaning: "chiamare la polizia", example: "Quick, call the police!", frequency: "medium" },
  ],
  phrasalVerbs: ["call-back", "call-off"],
  verbPatterns: [
    { id: "call-sb", pattern: "call + someone", explanation: "Phone or summon them (no 'to').", examples: ["Call the doctor."] },
    { id: "call-sb-name", pattern: "call + someone + name", explanation: "Name or describe.", examples: ["We call our dog Rex."] },
  ],
  examples: [
    { id: "call-ex-1", english: "Call me when you arrive.", italian: "Chiamami quando arrivi.", difficulty: "A2", highlightedWords: ["Call me"] },
    { id: "call-ex-2", english: "The meeting was called off at the last minute.", italian: "La riunione è stata annullata all'ultimo minuto.", difficulty: "B1", highlightedWords: ["called off"] },
  ],
  commonMistakes: [
    { id: "call-mistake-to", incorrect: "I will call to you tonight.", correct: "I will call you tonight.", explanation: "No 'to' after call when you phone someone.", category: "preposition" },
  ],
  exercises: ["ex-call-phone-1", "ex-call-name-1", "ex-call-error-1"],
};

export const chapter12Verbs: Verb[] = [seem, feel, tryVerb, leave, call];
