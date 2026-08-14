import type { Verb } from "@/types";

/**
 * Tier-2 companion verbs kept lightweight. These exist mainly so cross-references
 * from Tier-1 cards (e.g. TAKE vs BRING vs CARRY) resolve. The 25 essential
 * verbs live in their own full-card files (see verbs/essentials/*).
 */

export const bring: Verb = {
  id: "bring",
  infinitive: "bring",
  thirdPerson: "brings",
  past: "brought",
  pastParticiple: "brought",
  ingForm: "bringing",
  pronunciation: { ipa: "/brɪŋ/" },
  tier: 2,
  cefrLevel: "A2",
  topics: ["daily-life"],
  meanings: [
    {
      id: "bring-towards",
      englishExplanation: "To carry or move something towards the speaker or a place.",
      italianMeaning: "portare (qui)",
      context: "Opposite direction to TAKE. Towards here = BRING.",
      examples: ["Bring your laptop tomorrow.", "She brought a cake."],
    },
  ],
  collocations: [],
  phrasalVerbs: [],
  verbPatterns: [
    { id: "bring-sb-sth", pattern: "bring + someone + something", explanation: "Double object.", examples: ["Bring me the report."] },
  ],
  similarVerbs: [
    { verbId: "take", difference: "BRING = towards here; TAKE = away from here.", examples: [{ correct: "Bring it here.", explanation: "Towards the speaker." }] },
  ],
  examples: [
    { id: "bring-ex-1", english: "Can you bring me the salt?", italian: "Mi puoi portare il sale?", difficulty: "A2", highlightedWords: ["bring"] },
  ],
  exercises: [],
};

export const carry: Verb = {
  id: "carry",
  infinitive: "carry",
  thirdPerson: "carries",
  past: "carried",
  pastParticiple: "carried",
  ingForm: "carrying",
  pronunciation: { ipa: "/ˈkæri/" },
  tier: 2,
  cefrLevel: "A2+",
  topics: ["daily-life"],
  meanings: [
    {
      id: "carry-support",
      englishExplanation: "To hold and support something while moving it.",
      italianMeaning: "portare (reggendo il peso)",
      context: "Focus on bearing weight, not on destination (that's TAKE).",
      examples: ["He carried the suitcase upstairs."],
    },
  ],
  collocations: [],
  phrasalVerbs: [],
  verbPatterns: [],
  similarVerbs: [
    { verbId: "take", difference: "CARRY = bear the weight; TAKE = move it there.", examples: [{ correct: "She carried the box.", explanation: "Weight, not destination." }] },
  ],
  examples: [
    { id: "carry-ex-1", english: "I can't carry all these bags.", italian: "Non riesco a portare tutte queste borse.", difficulty: "A2+", highlightedWords: ["carry"] },
  ],
  exercises: [],
};

export const allNeighbourVerbs: Verb[] = [bring, carry];
