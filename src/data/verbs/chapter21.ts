import type { Verb } from "@/types";

/** Chapter 21 — Work & Study. Tier-2 thematic cards. */

export const study: Verb = {
  id: "study", infinitive: "study", thirdPerson: "studies", past: "studied",
  pastParticiple: "studied", ingForm: "studying", pronunciation: { ipa: "/ˈstʌdi/" },
  tier: 2, cefrLevel: "A2", topics: ["work-study"],
  meanings: [{ id: "study-learn", englishExplanation: "To spend time learning about a subject.", italianMeaning: "studiare", context: "study + subject; study for an exam. The activity of learning.", examples: ["I'm studying medicine.", "She studied all night for the test."] }],
  collocations: [
    { id: "study-for", phrase: "study for (an exam)", meaning: "studiare per (un esame)", example: "He's studying for his finals.", frequency: "high" },
    { id: "study-abroad", phrase: "study abroad", meaning: "studiare all'estero", example: "I'd love to study abroad.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "study-ex-1", english: "She studies economics at university.", italian: "Studia economia all'università.", difficulty: "A2", highlightedWords: ["studies"] }],
  commonMistakes: [{ id: "study-mistake-of", incorrect: "I study of engineering.", correct: "I study engineering.", explanation: "'study' takes the subject directly — no 'of'.", category: "preposition" }],
  exercises: ["ex-study-1"],
};

export const learn: Verb = {
  id: "learn", infinitive: "learn", thirdPerson: "learns", past: "learned",
  pastParticiple: "learned", ingForm: "learning", pronunciation: { ipa: "/lɜːn/", note: "BrE also 'learnt'" },
  tier: 2, cefrLevel: "A2", topics: ["work-study"],
  meanings: [{ id: "learn-acquire", englishExplanation: "To gain knowledge or a skill.", italianMeaning: "imparare", context: "learn to do; learn about. The RESULT — you study in order to learn.", examples: ["I'm learning to drive.", "We learned about Roman history."] }],
  collocations: [
    { id: "learn-to", phrase: "learn to (do)", meaning: "imparare a fare", example: "She learned to swim last summer.", frequency: "high" },
    { id: "learn-by-heart", phrase: "learn by heart", meaning: "imparare a memoria", example: "We had to learn the poem by heart.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "learn-ex-1", english: "You learn a lot by making mistakes.", italian: "Si impara molto sbagliando.", difficulty: "A2+", highlightedWords: ["learn"] }],
  commonMistakes: [{ id: "learn-mistake-study", incorrect: "I'm studying English words by heart.", correct: "I'm learning English words by heart.", explanation: "Memorising = learn (the result), not study (the activity).", category: "vocabulary" }],
  exercises: ["ex-learn-1"],
};

export const teach: Verb = {
  id: "teach", infinitive: "teach", thirdPerson: "teaches", past: "taught",
  pastParticiple: "taught", ingForm: "teaching", pronunciation: { ipa: "/tiːtʃ/", note: "ABB: teach · taught · taught" },
  tier: 2, cefrLevel: "A2", topics: ["work-study"],
  meanings: [{ id: "teach-instruct", englishExplanation: "To give someone knowledge or skills.", italianMeaning: "insegnare", context: "teach someone something; teach someone to do.", examples: ["She teaches maths.", "My dad taught me to ride a bike."] }],
  collocations: [
    { id: "teach-lesson", phrase: "teach a lesson", meaning: "dare una lezione", example: "That taught him a lesson.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "teach-ex-1", english: "Can you teach me how to cook this?", italian: "Mi insegni a cucinare questo?", difficulty: "A2+", highlightedWords: ["teach me"] }],
  commonMistakes: [{ id: "teach-mistake-past", incorrect: "She teached us English.", correct: "She taught us English.", explanation: "'teach' is irregular: teach · taught · taught.", category: "verb" }],
  exercises: ["ex-teach-1"],
};

export const earn: Verb = {
  id: "earn", infinitive: "earn", thirdPerson: "earns", past: "earned",
  pastParticiple: "earned", ingForm: "earning", pronunciation: { ipa: "/ɜːn/" },
  tier: 2, cefrLevel: "A2+", topics: ["work-study", "money-shopping"],
  meanings: [{ id: "earn-money", englishExplanation: "To get money by working.", italianMeaning: "guadagnare", context: "earn money (from work). Compare 'win' (a prize/game).", examples: ["She earns a good salary.", "How much do you earn?"] }],
  collocations: [
    { id: "earn-living", phrase: "earn a living", meaning: "guadagnarsi da vivere", example: "He earns a living as a writer.", frequency: "medium" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "earn-ex-1", english: "You earn money by working; you win money in a lottery.", italian: "Si guadagnano soldi lavorando; si vincono alla lotteria.", difficulty: "B1", highlightedWords: ["earn", "win"] }],
  commonMistakes: [{ id: "earn-mistake-win", incorrect: "I win 2,000 euros a month.", correct: "I earn 2,000 euros a month.", explanation: "Money from work = earn; win is for prizes/competitions.", category: "vocabulary" }],
  exercises: ["ex-earn-1"],
};

export const apply: Verb = {
  id: "apply", infinitive: "apply", thirdPerson: "applies", past: "applied",
  pastParticiple: "applied", ingForm: "applying", pronunciation: { ipa: "/əˈplaɪ/" },
  tier: 2, cefrLevel: "B1", topics: ["work-study"],
  meanings: [{ id: "apply-request", englishExplanation: "To make a formal request, e.g. for a job or a course.", italianMeaning: "fare domanda, candidarsi", context: "apply FOR a job; apply TO a university/company.", examples: ["I applied for the manager position.", "She applied to three universities."] }],
  collocations: [
    { id: "apply-for", phrase: "apply for (a job)", meaning: "candidarsi per (un lavoro)", example: "He applied for a scholarship.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "apply-ex-1", english: "You should apply for that job.", italian: "Dovresti candidarti per quel lavoro.", difficulty: "B1", highlightedWords: ["apply for"] }],
  commonMistakes: [{ id: "apply-mistake-to", incorrect: "I want to apply to a new job.", correct: "I want to apply for a new job.", explanation: "apply FOR a job/position; apply TO an institution.", category: "preposition" }],
  exercises: ["ex-apply-1"],
};

export const manage: Verb = {
  id: "manage", infinitive: "manage", thirdPerson: "manages", past: "managed",
  pastParticiple: "managed", ingForm: "managing", pronunciation: { ipa: "/ˈmænɪdʒ/" },
  tier: 2, cefrLevel: "B1", topics: ["work-study"],
  meanings: [{ id: "manage-succeed", englishExplanation: "To succeed in doing something difficult; or to be in charge of.", italianMeaning: "riuscire (a) / gestire", context: "manage TO do = succeed in doing. manage a team = be in charge.", examples: ["I managed to finish on time.", "She manages a small team."] }],
  collocations: [
    { id: "manage-to", phrase: "manage to (do)", meaning: "riuscire a fare", example: "Did you manage to fix it?", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "manage-ex-1", english: "We managed to catch the last train.", italian: "Siamo riusciti a prendere l'ultimo treno.", difficulty: "B1", highlightedWords: ["managed to"] }],
  commonMistakes: [{ id: "manage-mistake-ing", incorrect: "I managed finishing the report.", correct: "I managed to finish the report.", explanation: "manage TO + infinitive (not -ing).", category: "verb" }],
  exercises: ["ex-manage-1"],
};

export const chapter21Verbs: Verb[] = [study, learn, teach, earn, apply, manage];
