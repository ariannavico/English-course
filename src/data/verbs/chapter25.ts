import type { Verb } from "@/types";

/** Chapter 25 — Money & Shopping. Tier-2 thematic cards. */

export const buy: Verb = {
  id: "buy", infinitive: "buy", thirdPerson: "buys", past: "bought",
  pastParticiple: "bought", ingForm: "buying", pronunciation: { ipa: "/baɪ/", note: "ABB: buy · bought · bought" },
  tier: 2, cefrLevel: "A2", topics: ["money-shopping"],
  meanings: [{ id: "buy-purchase", englishExplanation: "To get something by paying for it.", italianMeaning: "comprare", context: "buy something (for someone); buy someone something.", examples: ["I bought a new phone.", "He bought her some flowers."] }],
  collocations: [
    { id: "buy-for", phrase: "buy (something) for (someone)", meaning: "comprare qualcosa per", example: "I bought this for you.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "buy-ex-1", english: "Where did you buy those shoes?", italian: "Dove hai comprato quelle scarpe?", difficulty: "A2", highlightedWords: ["buy"] }],
  commonMistakes: [{ id: "buy-mistake-past", incorrect: "I buyed some bread.", correct: "I bought some bread.", explanation: "'buy' is irregular: buy · bought · bought.", category: "verb" }],
  exercises: ["ex-buy-1"],
};

export const sell: Verb = {
  id: "sell", infinitive: "sell", thirdPerson: "sells", past: "sold",
  pastParticiple: "sold", ingForm: "selling", pronunciation: { ipa: "/sel/", note: "ABB: sell · sold · sold" },
  tier: 2, cefrLevel: "A2", topics: ["money-shopping"],
  meanings: [{ id: "sell-give", englishExplanation: "To give something to someone in exchange for money.", italianMeaning: "vendere", context: "sell something (to someone). Opposite of buy.", examples: ["They sell fresh bread here.", "She sold her old car."] }],
  collocations: [
    { id: "sold-out", phrase: "be sold out", meaning: "essere esaurito", example: "The tickets are sold out.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "sell-ex-1", english: "Do you sell stamps here?", italian: "Vendete francobolli qui?", difficulty: "A2", highlightedWords: ["sell"] }],
  exercises: ["ex-sell-1"],
};

export const pay: Verb = {
  id: "pay", infinitive: "pay", thirdPerson: "pays", past: "paid",
  pastParticiple: "paid", ingForm: "paying", pronunciation: { ipa: "/peɪ/", note: "ABB: pay · paid · paid" },
  tier: 2, cefrLevel: "A2", topics: ["money-shopping"],
  meanings: [{ id: "pay-money", englishExplanation: "To give money for something.", italianMeaning: "pagare", context: "pay FOR goods/services; pay someone; pay a bill. You pay FOR the thing you buy.", examples: ["I'll pay for the coffee.", "Have you paid the bill?"] }],
  collocations: [
    { id: "pay-for", phrase: "pay for (something)", meaning: "pagare (qualcosa)", example: "Who's paying for dinner?", frequency: "high" },
    { id: "pay-cash", phrase: "pay by card / in cash", meaning: "pagare con carta / in contanti", example: "Can I pay by card?", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "pay-ex-1", english: "I paid twenty euros for this shirt.", italian: "Ho pagato venti euro per questa camicia.", difficulty: "A2+", highlightedWords: ["paid"] }],
  commonMistakes: [{ id: "pay-mistake-for", incorrect: "I want to pay the tickets.", correct: "I want to pay for the tickets.", explanation: "You pay FOR the goods you buy (pay a bill/fine directly, but pay for things).", category: "preposition" }],
  exercises: ["ex-pay-1"],
};

export const spend: Verb = {
  id: "spend", infinitive: "spend", thirdPerson: "spends", past: "spent",
  pastParticiple: "spent", ingForm: "spending", pronunciation: { ipa: "/spend/", note: "ABB: spend · spent · spent" },
  tier: 2, cefrLevel: "A2+", topics: ["money-shopping"],
  meanings: [{ id: "spend-money-time", englishExplanation: "To use money, or to pass time.", italianMeaning: "spendere / passare (tempo)", context: "spend money ON something; spend time DOING something.", examples: ["I spent €50 on books.", "We spent the weekend relaxing."] }],
  collocations: [
    { id: "spend-on", phrase: "spend (money) on", meaning: "spendere per", example: "Don't spend too much on it.", frequency: "high" },
    { id: "spend-time", phrase: "spend time (doing)", meaning: "passare il tempo (a fare)", example: "I spend time reading.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "spend-ex-1", english: "How much time do you spend online?", italian: "Quanto tempo passi online?", difficulty: "A2+", highlightedWords: ["spend"] }],
  commonMistakes: [{ id: "spend-mistake-for", incorrect: "I spent 30 euros for a book.", correct: "I spent 30 euros on a book.", explanation: "spend money ON something (not 'for').", category: "preposition" }],
  exercises: ["ex-spend-1"],
};

export const cost: Verb = {
  id: "cost", infinitive: "cost", thirdPerson: "costs", past: "cost",
  pastParticiple: "cost", ingForm: "costing", pronunciation: { ipa: "/kɒst/", note: "AAA: cost · cost · cost" },
  tier: 2, cefrLevel: "A2", topics: ["money-shopping"],
  meanings: [{ id: "cost-price", englishExplanation: "To have a particular price.", italianMeaning: "costare", context: "How much does it cost? It costs €10. Note: the thing is the subject.", examples: ["How much does this cost?", "The tickets cost €40 each."] }],
  collocations: [
    { id: "cost-fortune", phrase: "cost a fortune", meaning: "costare una fortuna", example: "That car cost a fortune.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "cost-ex-1", english: "How much did the repair cost?", italian: "Quanto è costata la riparazione?", difficulty: "A2+", highlightedWords: ["cost"] }],
  commonMistakes: [{ id: "cost-mistake-structure", incorrect: "How much do you cost this bag?", correct: "How much does this bag cost?", explanation: "The THING is the subject: 'How much does it cost?'", category: "verb" }],
  exercises: ["ex-cost-1"],
};

export const save: Verb = {
  id: "save", infinitive: "save", thirdPerson: "saves", past: "saved",
  pastParticiple: "saved", ingForm: "saving", pronunciation: { ipa: "/seɪv/" },
  tier: 2, cefrLevel: "A2+", topics: ["money-shopping", "technology"],
  meanings: [{ id: "save-keep", englishExplanation: "To keep money for later; to avoid wasting; or to store a file.", italianMeaning: "risparmiare / salvare", context: "save money/time; save a file. save UP FOR something.", examples: ["I'm saving for a holiday.", "Don't forget to save your work."] }],
  collocations: [
    { id: "save-money", phrase: "save money", meaning: "risparmiare denaro", example: "We're trying to save money.", frequency: "high" },
    { id: "save-time", phrase: "save time", meaning: "risparmiare tempo", example: "This app saves a lot of time.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "save-ex-1", english: "Shopping online can save you money.", italian: "Fare acquisti online può farti risparmiare.", difficulty: "A2+", highlightedWords: ["save"] }],
  exercises: ["ex-save-1"],
};

export const chapter25Verbs: Verb[] = [buy, sell, pay, spend, cost, save];
