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
  {
    id: "have",
    verb: "have",
    coreIdea: "HAVE = the state of possessing or experiencing something — not the action of getting it.",
    senses: [
      { sense: "possess", gloss: "possedere, avere", example: "They have a house in Rome." },
      { sense: "experience", gloss: "vivere, fare un'esperienza", example: "We had a great time." },
      { sense: "eat / drink", gloss: "prendere (cibo/bevande)", example: "I'll have a coffee, please." },
      { sense: "must (have to)", gloss: "dovere", example: "I have to go now." },
      { sense: "arrange it done", gloss: "far fare qualcosa", example: "I had my hair cut." },
    ],
    phrasals: [
      { phrase: "have on", meaning: "indossare / avere in programma" },
      { phrase: "have over / round", meaning: "invitare a casa" },
    ],
    confusedWith: [
      { verb: "get", difference: "GET = the action of obtaining; HAVE = the resulting state of possessing. First you get it, then you have it." },
      { verb: "make", difference: "'have something done' = arrange for someone else to do it; MAKE someone do = force them." },
    ],
  },
  {
    id: "go",
    verb: "go",
    coreIdea: "GO = move away from here towards somewhere else — the speaker is NOT at the destination.",
    senses: [
      { sense: "move / travel", gloss: "andare", example: "I go to work by train." },
      { sense: "leave", gloss: "andarsene", example: "It's late — I have to go." },
      { sense: "become (worse)", gloss: "diventare (in peggio)", example: "The milk went off." },
      { sense: "future / intention (going to)", gloss: "stare per, avere intenzione", example: "It's going to rain." },
      { sense: "progress", gloss: "andare, procedere", example: "How's it going?" },
    ],
    phrasals: [
      { phrase: "go on", meaning: "continuare / succedere" },
      { phrase: "go off", meaning: "andare a male / esplodere / suonare (sveglia)" },
      { phrase: "go out", meaning: "uscire / spegnersi" },
      { phrase: "go over", meaning: "ripassare" },
      { phrase: "go through", meaning: "attraversare / esaminare" },
    ],
    confusedWith: [
      { verb: "come", difference: "GO = away from the speaker; COME = towards the speaker or the listener." },
      { verb: "get", difference: "GO = the movement; GET (to a place) = arriving there." },
    ],
  },
  {
    id: "come",
    verb: "come",
    coreIdea: "COME = move towards the speaker or the listener — towards 'here'.",
    senses: [
      { sense: "move towards here", gloss: "venire", example: "Come here for a second." },
      { sense: "arrive", gloss: "arrivare", example: "The train comes at six." },
      { sense: "attend", gloss: "venire (a un evento)", example: "Are you coming to the party?" },
      { sense: "reach a state", gloss: "arrivare a (uno stato)", example: "My shoelace came undone." },
    ],
    phrasals: [
      { phrase: "come across", meaning: "imbattersi in / dare l'impressione" },
      { phrase: "come up", meaning: "presentarsi (problema/argomento)" },
      { phrase: "come up with", meaning: "escogitare, trovare (un'idea)" },
      { phrase: "come back", meaning: "tornare" },
      { phrase: "come round / over", meaning: "passare a trovare" },
    ],
    confusedWith: [
      { verb: "go", difference: "COME = towards here (speaker/listener); GO = away from here." },
      { verb: "get", difference: "COME = the movement towards; GET = arriving or obtaining." },
    ],
  },
  {
    id: "bring",
    verb: "bring",
    coreIdea: "BRING = cause something to move towards here — carry it to the speaker or the listener.",
    senses: [
      { sense: "carry towards here", gloss: "portare (verso qui)", example: "Bring your umbrella." },
      { sense: "cause / result in", gloss: "portare a, causare", example: "Spring brings warmer days." },
      { sense: "fixed uses", gloss: "espressioni fisse", example: "bring an idea to life, bring attention to it" },
    ],
    phrasals: [
      { phrase: "bring up", meaning: "allevare / sollevare (un argomento)" },
      { phrase: "bring back", meaning: "riportare / far tornare in mente" },
      { phrase: "bring about", meaning: "provocare, causare" },
      { phrase: "bring in", meaning: "introdurre / far entrare (guadagni)" },
      { phrase: "bring out", meaning: "far uscire / mettere in risalto" },
    ],
    confusedWith: [
      { verb: "take", difference: "BRING = towards here/the listener; TAKE = away from here." },
      { verb: "come", difference: "BRING = carry something here; COME = you move here yourself." },
      { verb: "get", difference: "BRING = carry it to someone; GET = obtain or fetch it." },
    ],
  },
  {
    id: "put",
    verb: "put",
    coreIdea: "PUT = move something to a position — place it somewhere, literally or figuratively.",
    senses: [
      { sense: "place", gloss: "mettere, posare", example: "Put the keys on the table." },
      { sense: "express / phrase", gloss: "esprimere, dire", example: "How can I put this politely?" },
      { sense: "cause to be in a state", gloss: "mettere (in una condizione)", example: "It put me in a good mood." },
      { sense: "fixed uses", gloss: "espressioni fisse", example: "put pressure on, put an end to, put money aside" },
    ],
    phrasals: [
      { phrase: "put on", meaning: "indossare / accendere / mettere su (peso)" },
      { phrase: "put off", meaning: "rimandare / scoraggiare" },
      { phrase: "put up with", meaning: "sopportare" },
      { phrase: "put out", meaning: "spegnere / dare fastidio" },
      { phrase: "put away", meaning: "mettere via / riordinare" },
    ],
    confusedWith: [
      { verb: "set", difference: "PUT = place anywhere; SET = place carefully/precisely, or make ready." },
      { verb: "lay", difference: "PUT is general; LAY puts something down flat (lay it on the bed)." },
    ],
  },
  {
    id: "set",
    verb: "set",
    coreIdea: "SET = place something carefully and make it ready or fixed in position.",
    senses: [
      { sense: "place carefully", gloss: "collocare, sistemare", example: "She set the vase on the shelf." },
      { sense: "make ready / arrange", gloss: "preparare, predisporre", example: "Set the table for dinner." },
      { sense: "fix / decide", gloss: "fissare, stabilire", example: "Let's set a date." },
      { sense: "become solid", gloss: "solidificarsi", example: "Wait for the jelly to set." },
      { sense: "of the sun", gloss: "tramontare", example: "The sun sets at eight." },
    ],
    phrasals: [
      { phrase: "set up", meaning: "creare, organizzare / installare" },
      { phrase: "set off", meaning: "partire / far scattare (allarme)" },
      { phrase: "set out", meaning: "mettersi in viaggio / esporre (un piano)" },
      { phrase: "set about", meaning: "mettersi a fare" },
      { phrase: "set back", meaning: "ritardare / costare (informale)" },
    ],
    confusedWith: [
      { verb: "put", difference: "SET = place with care or make ready; PUT = simply place somewhere." },
      { verb: "sit", difference: "You SET something down (transitive); a person SITS down (intransitive)." },
    ],
  },
  {
    id: "keep",
    verb: "keep",
    coreIdea: "KEEP = make something continue — hold on to it, or carry on doing it.",
    senses: [
      { sense: "retain / hold on to", gloss: "tenere, conservare", example: "You can keep the change." },
      { sense: "continue (keep + -ing)", gloss: "continuare a", example: "She keeps interrupting me." },
      { sense: "stay / cause to stay", gloss: "mantenere (in uno stato)", example: "Keep calm. / It keeps me warm." },
      { sense: "store", gloss: "tenere (in un posto)", example: "Where do you keep the mugs?" },
      { sense: "fixed uses", gloss: "espressioni fisse", example: "keep a promise, keep a secret, keep in touch" },
    ],
    phrasals: [
      { phrase: "keep on", meaning: "continuare a" },
      { phrase: "keep up (with)", meaning: "stare al passo (con)" },
      { phrase: "keep away / off", meaning: "stare lontano / non toccare" },
      { phrase: "keep out", meaning: "tenere/stare fuori" },
    ],
    confusedWith: [
      { verb: "hold", difference: "KEEP = have it over time / continue; HOLD = grip it right now." },
      { verb: "stay", difference: "KEEP can be transitive (keep it warm); STAY is only intransitive (stay warm)." },
    ],
  },
  {
    id: "hold",
    verb: "hold",
    coreIdea: "HOLD = grip or support something now, and stop it moving or ending.",
    senses: [
      { sense: "grip in your hands", gloss: "tenere in mano", example: "Hold my bag for a second." },
      { sense: "contain / have capacity", gloss: "contenere", example: "This jug holds two litres." },
      { sense: "organise (an event)", gloss: "tenere (un evento)", example: "They held a meeting." },
      { sense: "keep in a state / pause", gloss: "mantenere / mettere in attesa", example: "Hold the door. / Can you hold (the line)?" },
      { sense: "fixed uses", gloss: "espressioni fisse", example: "hold hands, hold your breath, hold a record" },
    ],
    phrasals: [
      { phrase: "hold on", meaning: "aspettare / aggrapparsi" },
      { phrase: "hold up", meaning: "ritardare / rapinare" },
      { phrase: "hold back", meaning: "trattenere / esitare" },
      { phrase: "hold out", meaning: "resistere / porgere" },
    ],
    confusedWith: [
      { verb: "keep", difference: "HOLD = grip it right now; KEEP = have it over time." },
      { verb: "carry", difference: "HOLD = support it in place; CARRY = hold it while moving." },
    ],
  },
  {
    id: "give",
    verb: "give",
    coreIdea: "GIVE = cause something to pass from you to someone else.",
    senses: [
      { sense: "hand over", gloss: "dare, consegnare", example: "Give me your hand." },
      { sense: "provide / cause", gloss: "dare, procurare", example: "It gave me a headache." },
      { sense: "produce an action", gloss: "fare (un'azione)", example: "give a speech, give a smile, give it a try" },
      { sense: "yield / collapse", gloss: "cedere", example: "The shelf gave under the weight." },
    ],
    phrasals: [
      { phrase: "give up", meaning: "arrendersi / smettere" },
      { phrase: "give in", meaning: "cedere, arrendersi" },
      { phrase: "give away", meaning: "regalare / svelare" },
      { phrase: "give back", meaning: "restituire" },
      { phrase: "give out", meaning: "distribuire / esaurirsi" },
    ],
    confusedWith: [
      { verb: "offer", difference: "GIVE completes the transfer; OFFER only proposes it (you can offer without giving)." },
      { verb: "make", difference: "You GIVE a speech but MAKE a decision — learn the collocations." },
    ],
  },
];

const byId = new Map(verbUniverses.map((u) => [u.id, u]));
export const getUniverse = (id: string): VerbUniverse | undefined => byId.get(id);
