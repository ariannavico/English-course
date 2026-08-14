import type { PhrasalVerb } from "@/types";

/** The TAKE phrasal-verb family — links a single base verb to many meanings. */
export const takePhrasalVerbs: PhrasalVerb[] = [
  {
    id: "take-off",
    baseVerb: "take",
    particle: "off",
    phrase: "take off",
    separable: true,
    cefrLevel: "A2+",
    meanings: [
      { italian: "decollare (aereo)", englishExplanation: "(of a plane) to leave the ground and begin to fly." },
      { italian: "togliersi (un indumento)", englishExplanation: "to remove a piece of clothing." },
    ],
    examples: [
      { id: "take-off-ex1", english: "The plane took off on time.", italian: "L'aereo è decollato in orario.", difficulty: "A2+" },
      { id: "take-off-ex2", english: "Take off your shoes, please.", italian: "Togliti le scarpe, per favore.", difficulty: "A2", highlightedWords: ["Take", "off"] },
    ],
    relatedVerbs: ["take"],
  },
  {
    id: "take-out",
    baseVerb: "take",
    particle: "out",
    phrase: "take out",
    separable: true,
    cefrLevel: "A2+",
    meanings: [
      { italian: "tirare fuori, estrarre", englishExplanation: "to remove something from a place." },
      { italian: "portare fuori (qualcuno)", englishExplanation: "to invite and go out with someone." },
    ],
    examples: [
      { id: "take-out-ex1", english: "He took out his wallet.", italian: "Ha tirato fuori il portafoglio.", difficulty: "A2+" },
    ],
    relatedVerbs: ["take"],
  },
  {
    id: "take-up",
    baseVerb: "take",
    particle: "up",
    phrase: "take up",
    separable: true,
    cefrLevel: "B1",
    meanings: [
      { italian: "iniziare (un'attività/hobby)", englishExplanation: "to start doing a new activity or hobby." },
      { italian: "occupare (spazio/tempo)", englishExplanation: "to fill or use an amount of space or time." },
    ],
    examples: [
      { id: "take-up-ex1", english: "She took up yoga last year.", italian: "Ha iniziato a fare yoga l'anno scorso.", difficulty: "B1" },
    ],
    relatedVerbs: ["take"],
  },
  {
    id: "take-over",
    baseVerb: "take",
    particle: "over",
    phrase: "take over",
    separable: true,
    cefrLevel: "B1",
    meanings: [
      { italian: "assumere il controllo, subentrare", englishExplanation: "to take control of something." },
    ],
    examples: [
      { id: "take-over-ex1", english: "A new manager took over the team.", italian: "Un nuovo manager ha preso in mano la squadra.", difficulty: "B1" },
    ],
    relatedVerbs: ["take"],
  },
  {
    id: "take-back",
    baseVerb: "take",
    particle: "back",
    phrase: "take back",
    separable: true,
    cefrLevel: "B1",
    meanings: [
      { italian: "riportare indietro, ritirare (parole)", englishExplanation: "to return something, or to admit something you said was wrong." },
    ],
    examples: [
      { id: "take-back-ex1", english: "I take back what I said. Sorry.", italian: "Ritiro quello che ho detto. Scusa.", difficulty: "B1" },
    ],
    relatedVerbs: ["take"],
  },
  {
    id: "take-in",
    baseVerb: "take",
    particle: "in",
    phrase: "take in",
    separable: true,
    cefrLevel: "B1",
    meanings: [
      { italian: "capire, assimilare (informazioni)", englishExplanation: "to understand and absorb information." },
    ],
    examples: [
      { id: "take-in-ex1", english: "There was too much to take in.", italian: "C'era troppo da assimilare.", difficulty: "B1" },
    ],
    relatedVerbs: ["take"],
  },
];

/** A GET phrasal used by the GET card. */
export const getPhrasalVerbs: PhrasalVerb[] = [
  {
    id: "get-up",
    baseVerb: "get",
    particle: "up",
    phrase: "get up",
    separable: false,
    cefrLevel: "A2",
    meanings: [{ italian: "alzarsi (dal letto)", englishExplanation: "to rise from bed or from a sitting position." }],
    examples: [
      { id: "get-up-ex1", english: "I get up at seven every day.", italian: "Mi alzo alle sette ogni giorno.", difficulty: "A2", highlightedWords: ["get up"] },
    ],
    relatedVerbs: ["get"],
  },
];
