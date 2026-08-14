import type { PhrasalVerb } from "@/types";

/** Phrasal verbs for Part 4 chapters 21–26. */
export const thematicPhrasalVerbs2: PhrasalVerb[] = [
  {
    id: "wash-up",
    baseVerb: "wash",
    particle: "up",
    phrase: "wash up",
    separable: false,
    cefrLevel: "A2+",
    meanings: [{ italian: "lavare i piatti", englishExplanation: "to wash the dishes after a meal (BrE)." }],
    examples: [
      { id: "wash-up-ex1", english: "I'll cook if you wash up.", italian: "Cucino io se tu lavi i piatti.", difficulty: "A2+", highlightedWords: ["wash up"] },
    ],
    relatedVerbs: ["wash"],
  },
];
