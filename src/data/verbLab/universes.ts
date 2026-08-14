import type { VerbUniverse } from "@/features/verbLab/types";

/**
 * Verb Universes (spec §16) for the verbs that cause Italians the most trouble.
 * Each starts from ONE core idea so the many uses feel connected, not random.
 */
export const verbUniverses: VerbUniverse[] = [
  {
    id: "get",
    verb: "get",
    coreIdea: "GET = a change of possession or state: something comes to you, or you become different.",
    senses: [
      { sense: "receive", gloss: "ricevere", example: "I got a text from Anna." },
      { sense: "obtain / fetch", gloss: "prendere, procurarsi", example: "Can you get some milk?" },
      { sense: "become", gloss: "diventare", example: "It's getting cold." },
      { sense: "arrive", gloss: "arrivare", example: "What time did you get home?" },
      { sense: "understand", gloss: "capire", example: "Sorry, I don't get it." },
      { sense: "persuade / cause", gloss: "convincere, far fare", example: "I got him to help me." },
    ],
    phrasals: [
      { phrase: "get up", meaning: "alzarsi" },
      { phrase: "get on", meaning: "salire / andare d'accordo" },
      { phrase: "get off", meaning: "scendere" },
      { phrase: "get over", meaning: "superare (un problema/una malattia)" },
      { phrase: "get along", meaning: "andare d'accordo" },
      { phrase: "get away", meaning: "scappare, andare via" },
    ],
    confusedWith: [
      { verb: "take", difference: "GET = obtain/fetch and bring it; TAKE = carry away or accept." },
      { verb: "have", difference: "GET = the action of obtaining; HAVE = the state of possessing. First you get it, then you have it." },
    ],
  },
  {
    id: "take",
    verb: "take",
    coreIdea: "TAKE = move something away from here, or accept/use it.",
    senses: [
      { sense: "carry away", gloss: "portare via", example: "Take your umbrella." },
      { sense: "use transport", gloss: "prendere (un mezzo)", example: "We took a taxi." },
      { sense: "accept", gloss: "accettare, prendere", example: "Do you take cards?" },
      { sense: "need (time)", gloss: "volerci (tempo)", example: "It takes an hour." },
      { sense: "fixed uses", gloss: "espressioni fisse", example: "take a photo, take a break, take a seat" },
    ],
    phrasals: [
      { phrase: "take off", meaning: "decollare / togliersi" },
      { phrase: "take up", meaning: "iniziare (un hobby) / occupare" },
      { phrase: "take over", meaning: "subentrare, prendere il controllo" },
      { phrase: "take in", meaning: "assimilare, capire" },
      { phrase: "take back", meaning: "riportare / ritrattare" },
      { phrase: "take out", meaning: "tirare fuori / portare fuori" },
    ],
    confusedWith: [
      { verb: "bring", difference: "TAKE = away from here; BRING = towards here/the listener." },
      { verb: "get", difference: "TAKE = carry/accept; GET = obtain/fetch." },
      { verb: "make", difference: "You TAKE a photo but MAKE a decision — learn the collocations." },
    ],
  },
  {
    id: "make",
    verb: "make",
    coreIdea: "MAKE = produce or create a result (or cause something to happen).",
    senses: [
      { sense: "create / produce", gloss: "fare, creare", example: "She made a cake." },
      { sense: "cause", gloss: "far fare, rendere", example: "It made me laugh." },
      { sense: "fixed uses", gloss: "espressioni fisse", example: "make a decision, make a mistake, make friends, make money" },
    ],
    phrasals: [{ phrase: "make up", meaning: "inventare / fare pace" }],
    confusedWith: [
      { verb: "do", difference: "MAKE = produce a result; DO = perform an activity." },
      { verb: "take", difference: "MAKE a decision, but TAKE a photo — fixed pairings." },
    ],
  },
  {
    id: "do",
    verb: "do",
    coreIdea: "DO = perform an activity, task or chore (also the auxiliary for questions/negatives).",
    senses: [
      { sense: "perform an activity", gloss: "fare (un'attività)", example: "I do my homework after dinner." },
      { sense: "chores", gloss: "faccende", example: "do the shopping, do the washing-up" },
      { sense: "auxiliary", gloss: "ausiliare", example: "Do you like tea? / I don't know." },
    ],
    phrasals: [{ phrase: "do up", meaning: "allacciare / ristrutturare" }],
    confusedWith: [
      { verb: "make", difference: "DO = perform an activity; MAKE = produce/create something new." },
    ],
  },
  {
    id: "carry",
    verb: "carry",
    coreIdea: "CARRY = hold and support the weight of something while you move.",
    senses: [
      { sense: "bear the weight", gloss: "portare (reggendo)", example: "He carried the suitcase upstairs." },
      { sense: "have on you", gloss: "avere con sé", example: "I don't carry much cash." },
    ],
    phrasals: [
      { phrase: "carry on", meaning: "continuare" },
      { phrase: "carry out", meaning: "eseguire, svolgere" },
    ],
    confusedWith: [
      { verb: "take", difference: "CARRY = bear the weight; TAKE = the act of moving it there." },
      { verb: "bring", difference: "CARRY says nothing about direction; BRING = towards here." },
    ],
  },
];

const byId = new Map(verbUniverses.map((u) => [u.id, u]));
export const getUniverse = (id: string): VerbUniverse | undefined => byId.get(id);
