import type { Verb } from "@/types";

/** Chapter 9 essentials: come / put / see / look. Full Tier-1 cards. */

export const come: Verb = {
  id: "come",
  infinitive: "come",
  thirdPerson: "comes",
  past: "came",
  pastParticiple: "come",
  ingForm: "coming",
  pronunciation: { ipa: "/kʌm/", note: "ABA pattern: come · came · come" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["travel", "daily-life"],
  meanings: [
    {
      id: "come-towards",
      englishExplanation: "To move towards the speaker or the place they are in.",
      italianMeaning: "venire",
      context: "COME = towards here/you; GO = away from here. Direction is everything.",
      examples: ["Come here, please.", "Are you coming to the party?"],
    },
    {
      id: "come-origin",
      englishExplanation: "'come from' to say where someone or something originates.",
      italianMeaning: "venire da, essere di",
      context: "Nationality and origin: I come from Italy.",
      examples: ["She comes from Brazil.", "This cheese comes from France."],
    },
    {
      id: "come-become",
      englishExplanation: "In fixed phrases meaning to happen or become (come true).",
      italianMeaning: "diventare, avverarsi",
      context: "Set expressions: come true, come first.",
      examples: ["Her dream came true.", "He came first in the race."],
    },
  ],
  collocations: [
    { id: "come-home", phrase: "come home", meaning: "tornare a casa (verso chi parla)", example: "Dad comes home at six.", frequency: "high" },
    { id: "come-here", phrase: "come here", meaning: "vieni qui", example: "Come here for a second.", frequency: "high" },
    { id: "come-true", phrase: "come true", meaning: "avverarsi", example: "Dreams can come true.", frequency: "medium" },
  ],
  phrasalVerbs: ["come-on", "come-back"],
  verbPatterns: [
    { id: "come-to-place", pattern: "come + to + place", explanation: "Move towards a place (near the speaker).", examples: ["Come to my house.", "Come to the meeting."] },
    { id: "come-and", pattern: "come + and + verb", explanation: "Come in order to do something.", examples: ["Come and see this!"] },
  ],
  similarVerbs: [
    {
      verbId: "go",
      difference: "COME = towards the speaker/listener; GO = away from the speaker. Italian 'venire/andare' map to these but learners often swap them.",
      examples: [
        { correct: "Can I come to your party? (I move towards you)", explanation: "Movement towards the listener → COME." },
        { correct: "I'm going to the cinema. (away from here)", explanation: "Movement away → GO." },
      ],
    },
  ],
  examples: [
    { id: "come-ex-1", english: "What time are you coming home?", italian: "A che ora torni a casa?", difficulty: "A2", highlightedWords: ["coming home"] },
    { id: "come-ex-2", english: "They came to visit us last weekend.", italian: "Sono venuti a trovarci il weekend scorso.", difficulty: "A2+", highlightedWords: ["came"] },
  ],
  commonMistakes: [
    { id: "come-mistake-home", incorrect: "Come to home now.", correct: "Come home now.", explanation: "'home' takes no 'to'.", category: "preposition" },
    { id: "come-mistake-go", incorrect: "I go to your party tonight.", correct: "I'm coming to your party tonight.", explanation: "Movement towards the listener → COME, not GO.", category: "verb" },
  ],
  exercises: ["ex-come-vs-go-1", "ex-come-collocation-1", "ex-come-error-1"],
};

export const put: Verb = {
  id: "put",
  infinitive: "put",
  thirdPerson: "puts",
  past: "put",
  pastParticiple: "put",
  ingForm: "putting",
  pronunciation: { ipa: "/pʊt/", note: "AAA pattern: put · put · put" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "put-place",
      englishExplanation: "To move something into a position or place.",
      italianMeaning: "mettere, posare",
      context: "Almost always followed by where: put + object + place.",
      examples: ["Put the keys on the table.", "I put my phone in my bag."],
    },
    {
      id: "put-clothes",
      englishExplanation: "'put on' to start wearing clothes.",
      italianMeaning: "mettersi (un indumento)",
      context: "put on = the action of dressing; wear = the state of having it on.",
      examples: ["Put on your shoes.", "She put on a warm coat."],
    },
  ],
  collocations: [
    { id: "put-down", phrase: "put down", meaning: "posare, mettere giù", example: "Put down that heavy bag.", frequency: "medium" },
    { id: "put-away", phrase: "put away", meaning: "mettere via, riporre", example: "Put your toys away.", frequency: "medium" },
  ],
  phrasalVerbs: ["put-on", "put-off", "put-away"],
  verbPatterns: [
    { id: "put-obj-place", pattern: "put + object + place", explanation: "Where you put it is required.", examples: ["Put it here.", "He put the book on the shelf."] },
  ],
  examples: [
    { id: "put-ex-1", english: "Where did you put my glasses?", italian: "Dove hai messo i miei occhiali?", difficulty: "A2", highlightedWords: ["put"] },
    { id: "put-ex-2", english: "It's cold — put on a jacket.", italian: "Fa freddo, mettiti una giacca.", difficulty: "A2", highlightedWords: ["put on"] },
  ],
  commonMistakes: [
    { id: "put-mistake-pronoun", incorrect: "It's your coat — put on it.", correct: "It's your coat — put it on.", explanation: "With a pronoun, the object goes between the verb and particle: put it on.", category: "phrasal-verb" },
  ],
  exercises: ["ex-put-place-1", "ex-put-on-1", "ex-put-order-1"],
};

export const see: Verb = {
  id: "see",
  infinitive: "see",
  thirdPerson: "sees",
  past: "saw",
  pastParticiple: "seen",
  ingForm: "seeing",
  pronunciation: { ipa: "/siː/", note: "ABC pattern: see · saw · seen" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "see-perceive",
      englishExplanation: "To perceive with your eyes (without trying) — a state, not an action.",
      italianMeaning: "vedere",
      context: "Stative: use 'can see', not the continuous. I can see the sea.",
      examples: ["I can see the mountains from here.", "Did you see that?"],
    },
    {
      id: "see-understand",
      englishExplanation: "To understand ('I see' = I understand).",
      italianMeaning: "capire",
      context: "Common in conversation: Oh, I see.",
      examples: ["Ah, I see what you mean."],
    },
    {
      id: "see-meet",
      englishExplanation: "To meet or visit someone (see a doctor, see friends).",
      italianMeaning: "vedere, incontrare",
      context: "This use CAN be continuous: I'm seeing the doctor tomorrow.",
      examples: ["I'm seeing my friends tonight.", "You should see a doctor."],
    },
  ],
  collocations: [
    { id: "see-doctor", phrase: "see a doctor", meaning: "andare dal medico", example: "You should see a doctor.", frequency: "high" },
    { id: "see-you-later", phrase: "see you later", meaning: "a dopo", example: "OK, see you later!", frequency: "high" },
    { id: "lets-see", phrase: "let's see", meaning: "vediamo", example: "Let's see what happens.", frequency: "medium" },
  ],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "see-can", pattern: "can + see", explanation: "For perception now, English prefers 'can see'.", examples: ["I can see you.", "Can you see the board?"] },
  ],
  similarVerbs: [
    {
      verbId: "look",
      difference: "SEE = perceive passively (it just reaches your eyes); LOOK (at) = direct your eyes deliberately.",
      examples: [
        { correct: "I looked at the photo and saw my old house.", explanation: "look = the deliberate action; see = the result/perception." },
      ],
    },
  ],
  examples: [
    { id: "see-ex-1", english: "I can see the sea from my window.", italian: "Vedo il mare dalla mia finestra.", difficulty: "A2", highlightedWords: ["can see"] },
    { id: "see-ex-2", english: "We saw a great film last night.", italian: "Ieri sera abbiamo visto un bel film.", difficulty: "A2", highlightedWords: ["saw"] },
  ],
  commonMistakes: [
    { id: "see-mistake-continuous", incorrect: "I am seeing a bird in the tree.", correct: "I can see a bird in the tree.", explanation: "Perception is stative — use 'can see', not the continuous.", category: "verb" },
  ],
  exercises: ["ex-see-vs-look-1", "ex-see-stative-1", "ex-see-collocation-1"],
};

export const look: Verb = {
  id: "look",
  infinitive: "look",
  thirdPerson: "looks",
  past: "looked",
  pastParticiple: "looked",
  ingForm: "looking",
  pronunciation: { ipa: "/lʊk/" },
  tier: 1,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "look-direct",
      englishExplanation: "To direct your eyes towards something on purpose.",
      italianMeaning: "guardare",
      context: "Needs 'at' before an object: look at the picture.",
      examples: ["Look at this photo.", "Don't look at me like that."],
    },
    {
      id: "look-seem",
      englishExplanation: "'look + adjective' to describe appearance (seem).",
      italianMeaning: "sembrare, avere l'aria",
      context: "You look tired = you seem tired (from appearance).",
      examples: ["You look tired.", "That cake looks delicious."],
    },
  ],
  collocations: [
    { id: "look-at", phrase: "look at", meaning: "guardare", example: "Look at the board.", frequency: "high" },
    { id: "look-for", phrase: "look for", meaning: "cercare", example: "I'm looking for my keys.", frequency: "high" },
    { id: "look-forward", phrase: "look forward to", meaning: "non vedere l'ora di", example: "I look forward to seeing you.", frequency: "medium" },
  ],
  phrasalVerbs: ["look-for", "look-after", "look-forward-to", "look-up"],
  verbPatterns: [
    { id: "look-at-p", pattern: "look + at + object", explanation: "Deliberately direct your eyes.", examples: ["Look at the screen."] },
    { id: "look-adj", pattern: "look + adjective", explanation: "Describe how someone/something appears.", examples: ["You look happy.", "It looks easy."] },
  ],
  similarVerbs: [
    {
      verbId: "see",
      difference: "LOOK (at) = choose to direct your eyes; SEE = simply perceive. You can look but not see.",
      examples: [{ correct: "I looked everywhere but I didn't see it.", explanation: "look = tried; see = perceived." }],
    },
  ],
  examples: [
    { id: "look-ex-1", english: "Look at those beautiful flowers!", italian: "Guarda quei bei fiori!", difficulty: "A2", highlightedWords: ["Look at"] },
    { id: "look-ex-2", english: "You look really well today.", italian: "Hai un bell'aspetto oggi.", difficulty: "A2+", highlightedWords: ["look"] },
  ],
  commonMistakes: [
    { id: "look-mistake-at", incorrect: "Look this photo.", correct: "Look at this photo.", explanation: "LOOK needs 'at' before an object.", category: "preposition" },
    { id: "look-mistake-for", incorrect: "I'm looking my keys.", correct: "I'm looking for my keys.", explanation: "To search = 'look for'.", category: "phrasal-verb" },
  ],
  exercises: ["ex-look-at-1", "ex-look-seem-1", "ex-look-phrasal-1"],
};

export const chapter09Verbs: Verb[] = [come, put, see, look];
