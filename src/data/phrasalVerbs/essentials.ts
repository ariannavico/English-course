import type { PhrasalVerb } from "@/types";

/** Phrasal-verb families for the Part 2 essential verbs (go, get, give, do, make). */
export const essentialPhrasalVerbs: PhrasalVerb[] = [
  // --- go ---
  {
    id: "go-on",
    baseVerb: "go",
    particle: "on",
    phrase: "go on",
    separable: false,
    cefrLevel: "A2+",
    meanings: [
      { italian: "continuare", englishExplanation: "to continue." },
      { italian: "succedere, accadere", englishExplanation: "to happen (What's going on?)." },
    ],
    examples: [
      { id: "go-on-ex1", english: "Please go on — I'm listening.", italian: "Continua pure, ti ascolto.", difficulty: "A2+" },
      { id: "go-on-ex2", english: "What's going on here?", italian: "Cosa sta succedendo qui?", difficulty: "A2+" },
    ],
    relatedVerbs: ["go"],
  },
  {
    id: "go-out",
    baseVerb: "go",
    particle: "out",
    phrase: "go out",
    separable: false,
    cefrLevel: "A2",
    meanings: [
      { italian: "uscire (per divertirsi)", englishExplanation: "to leave home for a social activity." },
    ],
    examples: [
      { id: "go-out-ex1", english: "We're going out for dinner tonight.", italian: "Stasera usciamo a cena.", difficulty: "A2", highlightedWords: ["going out"] },
    ],
    relatedVerbs: ["go"],
  },
  {
    id: "go-back",
    baseVerb: "go",
    particle: "back",
    phrase: "go back",
    separable: false,
    cefrLevel: "A2",
    meanings: [{ italian: "tornare (indietro)", englishExplanation: "to return to a place." }],
    examples: [
      { id: "go-back-ex1", english: "I need to go back home for my keys.", italian: "Devo tornare a casa a prendere le chiavi.", difficulty: "A2" },
    ],
    relatedVerbs: ["go"],
  },

  // --- get ---
  {
    id: "get-on",
    baseVerb: "get",
    particle: "on",
    phrase: "get on",
    separable: false,
    cefrLevel: "A2+",
    meanings: [
      { italian: "salire (su bus/treno/aereo)", englishExplanation: "to board a bus, train or plane." },
      { italian: "andare d'accordo", englishExplanation: "to have a good relationship (get on with someone)." },
    ],
    examples: [
      { id: "get-on-ex1", english: "Hurry up and get on the bus!", italian: "Sbrigati e sali sul bus!", difficulty: "A2+" },
      { id: "get-on-ex2", english: "I get on well with my colleagues.", italian: "Vado d'accordo con i miei colleghi.", difficulty: "B1" },
    ],
    relatedVerbs: ["get"],
  },
  {
    id: "get-off",
    baseVerb: "get",
    particle: "off",
    phrase: "get off",
    separable: false,
    cefrLevel: "A2+",
    meanings: [{ italian: "scendere (da bus/treno)", englishExplanation: "to leave a bus, train or plane." }],
    examples: [
      { id: "get-off-ex1", english: "We get off at the next stop.", italian: "Scendiamo alla prossima fermata.", difficulty: "A2+", highlightedWords: ["get off"] },
    ],
    relatedVerbs: ["get"],
  },

  // --- give ---
  {
    id: "give-up",
    baseVerb: "give",
    particle: "up",
    phrase: "give up",
    separable: true,
    cefrLevel: "B1",
    meanings: [
      { italian: "arrendersi, rinunciare", englishExplanation: "to stop trying." },
      { italian: "smettere (un'abitudine)", englishExplanation: "to quit a habit (give up smoking)." },
    ],
    examples: [
      { id: "give-up-ex1", english: "Don't give up — you're almost there!", italian: "Non arrenderti, ci sei quasi!", difficulty: "B1" },
      { id: "give-up-ex2", english: "She gave up smoking last year.", italian: "Ha smesso di fumare l'anno scorso.", difficulty: "B1" },
    ],
    relatedVerbs: ["give"],
  },
  {
    id: "give-back",
    baseVerb: "give",
    particle: "back",
    phrase: "give back",
    separable: true,
    cefrLevel: "A2+",
    meanings: [{ italian: "restituire", englishExplanation: "to return something to its owner." }],
    examples: [
      { id: "give-back-ex1", english: "Can you give me back my pen?", italian: "Mi puoi restituire la penna?", difficulty: "A2+" },
    ],
    relatedVerbs: ["give"],
  },

  // --- do ---
  {
    id: "do-up",
    baseVerb: "do",
    particle: "up",
    phrase: "do up",
    separable: true,
    cefrLevel: "B1",
    meanings: [
      { italian: "allacciare, abbottonare", englishExplanation: "to fasten (a coat, buttons, laces)." },
    ],
    examples: [
      { id: "do-up-ex1", english: "Do up your coat, it's cold.", italian: "Abbottonati il cappotto, fa freddo.", difficulty: "B1" },
    ],
    relatedVerbs: ["do"],
  },

  // --- make ---
  {
    id: "make-up",
    baseVerb: "make",
    particle: "up",
    phrase: "make up",
    separable: true,
    cefrLevel: "B1",
    meanings: [
      { italian: "inventare (una storia)", englishExplanation: "to invent something that is not true." },
      { italian: "fare pace", englishExplanation: "to become friends again after an argument." },
    ],
    examples: [
      { id: "make-up-ex1", english: "He made up an excuse.", italian: "Si è inventato una scusa.", difficulty: "B1" },
    ],
    relatedVerbs: ["make"],
  },
];
