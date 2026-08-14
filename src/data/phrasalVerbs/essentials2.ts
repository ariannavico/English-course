import type { PhrasalVerb } from "@/types";

/** Phrasal-verb families for Chapter 9 & 10 verbs (come, put, look, use). */
export const essentialPhrasalVerbs2: PhrasalVerb[] = [
  // --- come ---
  {
    id: "come-on",
    baseVerb: "come",
    particle: "on",
    phrase: "come on",
    separable: false,
    cefrLevel: "A2",
    meanings: [
      { italian: "dai!, forza!", englishExplanation: "used to encourage or hurry someone." },
    ],
    examples: [
      { id: "come-on-ex1", english: "Come on, we're going to be late!", italian: "Dai, faremo tardi!", difficulty: "A2" },
    ],
    relatedVerbs: ["come"],
  },
  {
    id: "come-back",
    baseVerb: "come",
    particle: "back",
    phrase: "come back",
    separable: false,
    cefrLevel: "A2",
    meanings: [{ italian: "tornare (verso chi parla)", englishExplanation: "to return to this place." }],
    examples: [
      { id: "come-back-ex1", english: "Come back soon!", italian: "Torna presto!", difficulty: "A2", highlightedWords: ["Come back"] },
    ],
    relatedVerbs: ["come"],
  },

  // --- put ---
  {
    id: "put-on",
    baseVerb: "put",
    particle: "on",
    phrase: "put on",
    separable: true,
    cefrLevel: "A2",
    meanings: [
      { italian: "mettersi (un indumento)", englishExplanation: "to start wearing clothes." },
      { italian: "accendere (luce/musica)", englishExplanation: "to switch on / start playing." },
    ],
    examples: [
      { id: "put-on-ex1", english: "Put on your gloves — it's freezing.", italian: "Mettiti i guanti, si gela.", difficulty: "A2" },
      { id: "put-on-ex2", english: "Can you put some music on?", italian: "Puoi mettere un po' di musica?", difficulty: "A2+" },
    ],
    relatedVerbs: ["put"],
  },
  {
    id: "put-off",
    baseVerb: "put",
    particle: "off",
    phrase: "put off",
    separable: true,
    cefrLevel: "B1",
    meanings: [
      { italian: "rimandare, rinviare", englishExplanation: "to postpone something to a later time." },
    ],
    examples: [
      { id: "put-off-ex1", english: "Don't put off your homework until Sunday.", italian: "Non rimandare i compiti a domenica.", difficulty: "B1" },
    ],
    relatedVerbs: ["put"],
  },
  {
    id: "put-away",
    baseVerb: "put",
    particle: "away",
    phrase: "put away",
    separable: true,
    cefrLevel: "A2+",
    meanings: [{ italian: "mettere via, riporre", englishExplanation: "to put something in its usual place." }],
    examples: [
      { id: "put-away-ex1", english: "Please put your clothes away.", italian: "Per favore riponi i tuoi vestiti.", difficulty: "A2+" },
    ],
    relatedVerbs: ["put"],
  },

  // --- look ---
  {
    id: "look-for",
    baseVerb: "look",
    particle: "for",
    phrase: "look for",
    separable: false,
    cefrLevel: "A2",
    meanings: [{ italian: "cercare", englishExplanation: "to try to find something or someone." }],
    examples: [
      { id: "look-for-ex1", english: "I'm looking for my phone. Have you seen it?", italian: "Sto cercando il telefono. L'hai visto?", difficulty: "A2", highlightedWords: ["looking for"] },
    ],
    relatedVerbs: ["look"],
  },
  {
    id: "look-after",
    baseVerb: "look",
    particle: "after",
    phrase: "look after",
    separable: false,
    cefrLevel: "A2+",
    meanings: [{ italian: "prendersi cura di, badare a", englishExplanation: "to take care of someone or something." }],
    examples: [
      { id: "look-after-ex1", english: "Can you look after the kids tonight?", italian: "Puoi badare ai bambini stasera?", difficulty: "A2+" },
    ],
    relatedVerbs: ["look"],
  },
  {
    id: "look-forward-to",
    baseVerb: "look",
    particle: "forward to",
    phrase: "look forward to",
    separable: false,
    cefrLevel: "B1",
    meanings: [{ italian: "non vedere l'ora di", englishExplanation: "to feel excited about a future event (+ noun / -ing)." }],
    examples: [
      { id: "look-forward-ex1", english: "I'm looking forward to the weekend.", italian: "Non vedo l'ora che arrivi il weekend.", difficulty: "B1", highlightedWords: ["looking forward to"] },
    ],
    relatedVerbs: ["look"],
  },
  {
    id: "look-up",
    baseVerb: "look",
    particle: "up",
    phrase: "look up",
    separable: true,
    cefrLevel: "B1",
    meanings: [{ italian: "cercare (un'informazione)", englishExplanation: "to search for information in a book or online." }],
    examples: [
      { id: "look-up-ex1", english: "Look up the word in a dictionary.", italian: "Cerca la parola sul dizionario.", difficulty: "B1" },
    ],
    relatedVerbs: ["look"],
  },

  // --- use ---
  {
    id: "use-up",
    baseVerb: "use",
    particle: "up",
    phrase: "use up",
    separable: true,
    cefrLevel: "B1",
    meanings: [{ italian: "esaurire, consumare del tutto", englishExplanation: "to finish a supply of something completely." }],
    examples: [
      { id: "use-up-ex1", english: "We've used up all the milk.", italian: "Abbiamo finito tutto il latte.", difficulty: "B1" },
    ],
    relatedVerbs: ["use"],
  },
];
