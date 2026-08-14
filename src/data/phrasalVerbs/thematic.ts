import type { PhrasalVerb } from "@/types";

/** Phrasal verbs for Part 4 thematic chapters (19–20 so far). */
export const thematicPhrasalVerbs: PhrasalVerb[] = [
  // --- catch (Movement & Travel) ---
  {
    id: "catch-up",
    baseVerb: "catch",
    particle: "up",
    phrase: "catch up",
    separable: false,
    cefrLevel: "B1",
    meanings: [
      { italian: "raggiungere (chi è avanti)", englishExplanation: "to reach someone who is ahead of you." },
      { italian: "aggiornarsi, mettersi in pari", englishExplanation: "to do work you missed, or share recent news (catch up with someone)." },
    ],
    examples: [
      { id: "catch-up-ex1", english: "You go ahead — I'll catch up.", italian: "Vai avanti, ti raggiungo.", difficulty: "B1" },
      { id: "catch-up-ex2", english: "Let's meet for a coffee and catch up.", italian: "Vediamoci per un caffè e aggiorniamoci.", difficulty: "B1", highlightedWords: ["catch up"] },
    ],
    relatedVerbs: ["catch"],
  },

  // --- speak (Communication) ---
  {
    id: "speak-up",
    baseVerb: "speak",
    particle: "up",
    phrase: "speak up",
    separable: false,
    cefrLevel: "B1",
    meanings: [
      { italian: "parlare più forte", englishExplanation: "to speak more loudly." },
    ],
    examples: [
      { id: "speak-up-ex1", english: "Could you speak up? I can't hear you.", italian: "Puoi parlare più forte? Non ti sento.", difficulty: "B1", highlightedWords: ["speak up"] },
    ],
    relatedVerbs: ["speak"],
  },
];
