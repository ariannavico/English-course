import type { PhrasalVerb } from "@/types";

/** Phrasal-verb families for Chapter 11 & 12 verbs (find, tell, ask, work, try, leave, call). */
export const essentialPhrasalVerbs3: PhrasalVerb[] = [
  // --- find ---
  {
    id: "find-out",
    baseVerb: "find",
    particle: "out",
    phrase: "find out",
    separable: true,
    cefrLevel: "A2+",
    meanings: [{ italian: "scoprire (un'informazione)", englishExplanation: "to discover a fact or piece of information." }],
    examples: [
      { id: "find-out-ex1", english: "I need to find out the truth.", italian: "Devo scoprire la verità.", difficulty: "A2+", highlightedWords: ["find out"] },
    ],
    relatedVerbs: ["find"],
  },

  // --- tell ---
  {
    id: "tell-off",
    baseVerb: "tell",
    particle: "off",
    phrase: "tell off",
    separable: true,
    cefrLevel: "B1",
    meanings: [{ italian: "sgridare, rimproverare", englishExplanation: "to speak angrily to someone because they did something wrong." }],
    examples: [
      { id: "tell-off-ex1", english: "The teacher told him off for being late.", italian: "L'insegnante lo ha sgridato perché era in ritardo.", difficulty: "B1" },
    ],
    relatedVerbs: ["tell"],
  },

  // --- ask ---
  {
    id: "ask-for",
    baseVerb: "ask",
    particle: "for",
    phrase: "ask for",
    separable: false,
    cefrLevel: "A2",
    meanings: [{ italian: "chiedere (qualcosa)", englishExplanation: "to say you want something." }],
    examples: [
      { id: "ask-for-ex1", english: "He asked for a glass of water.", italian: "Ha chiesto un bicchiere d'acqua.", difficulty: "A2", highlightedWords: ["asked for"] },
    ],
    relatedVerbs: ["ask"],
  },
  {
    id: "ask-out",
    baseVerb: "ask",
    particle: "out",
    phrase: "ask out",
    separable: true,
    cefrLevel: "B1",
    meanings: [{ italian: "invitare a uscire (per un appuntamento)", englishExplanation: "to invite someone on a date." }],
    examples: [
      { id: "ask-out-ex1", english: "He finally asked her out.", italian: "Alla fine l'ha invitata a uscire.", difficulty: "B1" },
    ],
    relatedVerbs: ["ask"],
  },

  // --- work ---
  {
    id: "work-out",
    baseVerb: "work",
    particle: "out",
    phrase: "work out",
    separable: true,
    cefrLevel: "A2+",
    meanings: [
      { italian: "allenarsi", englishExplanation: "to do physical exercise." },
      { italian: "risolvere, calcolare", englishExplanation: "to find the answer / solve a problem." },
    ],
    examples: [
      { id: "work-out-ex1", english: "I work out three times a week.", italian: "Mi alleno tre volte a settimana.", difficulty: "A2+", highlightedWords: ["work out"] },
      { id: "work-out-ex2", english: "Let me work out how much it costs.", italian: "Fammi calcolare quanto costa.", difficulty: "B1" },
    ],
    relatedVerbs: ["work"],
  },

  // --- try ---
  {
    id: "try-on",
    baseVerb: "try",
    particle: "on",
    phrase: "try on",
    separable: true,
    cefrLevel: "A2+",
    meanings: [{ italian: "provare (un indumento)", englishExplanation: "to put on clothes to see if they fit or suit you." }],
    examples: [
      { id: "try-on-ex1", english: "Can I try these shoes on?", italian: "Posso provare queste scarpe?", difficulty: "A2+", highlightedWords: ["try", "on"] },
    ],
    relatedVerbs: ["try"],
  },
  {
    id: "try-out",
    baseVerb: "try",
    particle: "out",
    phrase: "try out",
    separable: true,
    cefrLevel: "B1",
    meanings: [{ italian: "provare, mettere alla prova", englishExplanation: "to test something to see if it works or you like it." }],
    examples: [
      { id: "try-out-ex1", english: "Let's try out the new café.", italian: "Proviamo il nuovo bar.", difficulty: "B1" },
    ],
    relatedVerbs: ["try"],
  },

  // --- leave ---
  {
    id: "leave-out",
    baseVerb: "leave",
    particle: "out",
    phrase: "leave out",
    separable: true,
    cefrLevel: "B1",
    meanings: [{ italian: "omettere, tralasciare", englishExplanation: "to not include someone or something." }],
    examples: [
      { id: "leave-out-ex1", english: "You left out an important detail.", italian: "Hai tralasciato un dettaglio importante.", difficulty: "B1" },
    ],
    relatedVerbs: ["leave"],
  },

  // --- call ---
  {
    id: "call-back",
    baseVerb: "call",
    particle: "back",
    phrase: "call back",
    separable: true,
    cefrLevel: "A2",
    meanings: [{ italian: "richiamare (al telefono)", englishExplanation: "to return a phone call." }],
    examples: [
      { id: "call-back-ex1", english: "She's busy — can you call back later?", italian: "È occupata, puoi richiamare più tardi?", difficulty: "A2", highlightedWords: ["call back"] },
    ],
    relatedVerbs: ["call"],
  },
  {
    id: "call-off",
    baseVerb: "call",
    particle: "off",
    phrase: "call off",
    separable: true,
    cefrLevel: "B1",
    meanings: [{ italian: "annullare, disdire", englishExplanation: "to cancel a planned event." }],
    examples: [
      { id: "call-off-ex1", english: "They called off the concert.", italian: "Hanno annullato il concerto.", difficulty: "B1" },
    ],
    relatedVerbs: ["call"],
  },
];
