import type { Verb } from "@/types";

/** Chapter 23 — Feelings & Opinions. Tier-2 thematic cards. */

export const enjoy: Verb = {
  id: "enjoy", infinitive: "enjoy", thirdPerson: "enjoys", past: "enjoyed",
  pastParticiple: "enjoyed", ingForm: "enjoying", pronunciation: { ipa: "/ɪnˈdʒɔɪ/" },
  tier: 2, cefrLevel: "A2", topics: ["feelings-opinions"],
  meanings: [{ id: "enjoy-like", englishExplanation: "To get pleasure from something.", italianMeaning: "godersi, divertirsi", context: "enjoy + noun or + -ing — NEVER 'enjoy to do'.", examples: ["I enjoy reading.", "Did you enjoy the film?"] }],
  collocations: [
    { id: "enjoy-yourself", phrase: "enjoy yourself", meaning: "divertirsi", example: "Enjoy yourself at the party!", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "enjoy-ex-1", english: "I really enjoy cooking for friends.", italian: "Mi piace davvero cucinare per gli amici.", difficulty: "A2+", highlightedWords: ["enjoy cooking"] }],
  commonMistakes: [{ id: "enjoy-mistake-to", incorrect: "I enjoy to travel.", correct: "I enjoy travelling.", explanation: "enjoy + -ing (not 'enjoy to').", category: "verb" }],
  exercises: ["ex-enjoy-1"],
};

export const prefer: Verb = {
  id: "prefer", infinitive: "prefer", thirdPerson: "prefers", past: "preferred",
  pastParticiple: "preferred", ingForm: "preferring", pronunciation: { ipa: "/prɪˈfɜː/" },
  tier: 2, cefrLevel: "B1", topics: ["feelings-opinions"],
  meanings: [{ id: "prefer-choose", englishExplanation: "To like one thing more than another.", italianMeaning: "preferire", context: "prefer X TO Y (not 'than'). prefer + -ing / to do.", examples: ["I prefer tea to coffee.", "She prefers walking to driving."] }],
  collocations: [
    { id: "prefer-to", phrase: "prefer X to Y", meaning: "preferire X a Y", example: "I prefer summer to winter.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "prefer-ex-1", english: "Would you prefer to stay in or go out?", italian: "Preferiresti restare a casa o uscire?", difficulty: "B1", highlightedWords: ["prefer"] }],
  commonMistakes: [{ id: "prefer-mistake-than", incorrect: "I prefer the sea than the mountains.", correct: "I prefer the sea to the mountains.", explanation: "prefer X TO Y (not 'than').", category: "preposition" }],
  exercises: ["ex-prefer-1"],
};

export const hate: Verb = {
  id: "hate", infinitive: "hate", thirdPerson: "hates", past: "hated",
  pastParticiple: "hated", ingForm: "hating", pronunciation: { ipa: "/heɪt/" },
  tier: 2, cefrLevel: "A2", topics: ["feelings-opinions"],
  meanings: [{ id: "hate-dislike", englishExplanation: "To dislike something very strongly.", italianMeaning: "odiare, detestare", context: "hate + noun / -ing / to do.", examples: ["I hate getting up early.", "She hates spiders."] }],
  collocations: [
    { id: "hate-it-when", phrase: "hate it when", meaning: "odiare quando", example: "I hate it when people are late.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "hate-ex-1", english: "He hates waiting in queues.", italian: "Odia fare la fila.", difficulty: "A2+", highlightedWords: ["hates waiting"] }],
  exercises: ["ex-hate-1"],
};

export const hope: Verb = {
  id: "hope", infinitive: "hope", thirdPerson: "hopes", past: "hoped",
  pastParticiple: "hoped", ingForm: "hoping", pronunciation: { ipa: "/həʊp/" },
  tier: 2, cefrLevel: "A2+", topics: ["feelings-opinions"],
  meanings: [{ id: "hope-wish", englishExplanation: "To want something to happen and think it is possible.", italianMeaning: "sperare", context: "hope + to do / that clause. 'I hope so' = spero di sì.", examples: ["I hope to see you soon.", "I hope it doesn't rain."] }],
  collocations: [
    { id: "hope-so", phrase: "I hope so / not", meaning: "spero di sì / no", example: "\"Will they win?\" \"I hope so.\"", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "hope-ex-1", english: "I hope you feel better soon.", italian: "Spero che tu ti senta meglio presto.", difficulty: "A2+", highlightedWords: ["hope"] }],
  commonMistakes: [{ id: "hope-mistake-wait", incorrect: "I wait that you come.", correct: "I hope you come.", explanation: "'sperare' = hope; 'aspettare' = wait. Don't confuse them.", category: "vocabulary" }],
  exercises: ["ex-hope-1"],
};

export const believe: Verb = {
  id: "believe", infinitive: "believe", thirdPerson: "believes", past: "believed",
  pastParticiple: "believed", ingForm: "believing", pronunciation: { ipa: "/bɪˈliːv/" },
  tier: 2, cefrLevel: "B1", topics: ["feelings-opinions"],
  meanings: [{ id: "believe-think", englishExplanation: "To think that something is true. A stative verb.", italianMeaning: "credere", context: "believe + that; believe IN something. Not used in the continuous.", examples: ["I believe you.", "Do you believe in luck?"] }],
  collocations: [
    { id: "believe-in", phrase: "believe in", meaning: "credere in", example: "She believes in hard work.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "believe-ex-1", english: "I can't believe it's already December.", italian: "Non posso credere che sia già dicembre.", difficulty: "B1", highlightedWords: ["believe"] }],
  commonMistakes: [{ id: "believe-mistake-continuous", incorrect: "I am believing you.", correct: "I believe you.", explanation: "'believe' is stative — present simple.", category: "verb" }],
  exercises: ["ex-believe-1"],
};

export const agree: Verb = {
  id: "agree", infinitive: "agree", thirdPerson: "agrees", past: "agreed",
  pastParticiple: "agreed", ingForm: "agreeing", pronunciation: { ipa: "/əˈɡriː/" },
  tier: 2, cefrLevel: "A2+", topics: ["feelings-opinions"],
  meanings: [{ id: "agree-same", englishExplanation: "To have the same opinion; or to say yes to a plan.", italianMeaning: "essere d'accordo / accettare", context: "agree WITH someone; agree TO do / ON something. 'Agree' is a VERB, not an adjective.", examples: ["I agree with you.", "They agreed to meet at six."] }],
  collocations: [
    { id: "agree-with", phrase: "agree with (someone)", meaning: "essere d'accordo con", example: "Do you agree with me?", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "agree-ex-1", english: "Everyone agreed that it was a good idea.", italian: "Tutti erano d'accordo che fosse una buona idea.", difficulty: "B1", highlightedWords: ["agreed"] }],
  commonMistakes: [{ id: "agree-mistake-be", incorrect: "I am agree with you.", correct: "I agree with you.", explanation: "'agree' is a verb: 'I agree' (NOT 'I am agree').", category: "verb" }],
  exercises: ["ex-agree-1"],
};

export const chapter23Verbs: Verb[] = [enjoy, prefer, hate, hope, believe, agree];
