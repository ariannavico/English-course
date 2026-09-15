import type { LexItem } from "@/features/lexis/types";

/** Phrasal-verb content, keyed to the phr-* catalog Units. */
const p = (unitId: string, word: string, it: string, example: string): LexItem => ({
  id: `lx-phr-${word.replace(/[^a-z]+/gi, "-").toLowerCase()}`,
  unitId,
  word,
  it,
  pos: "phr",
  example,
});

export const phrasalItems: LexItem[] = [
  // phr-essentials — A2, everyday
  p("phr-essentials", "get up", "alzarsi", "I get up at seven on weekdays."),
  p("phr-essentials", "wake up", "svegliarsi", "Try not to wake up the baby."),
  p("phr-essentials", "turn on", "accendere", "Can you turn on the lights?"),
  p("phr-essentials", "turn off", "spegnere", "Turn off the TV before you leave."),
  p("phr-essentials", "put on", "indossare", "Put on your coat, it's cold."),
  p("phr-essentials", "take off", "togliersi", "Take off your shoes at the door."),
  p("phr-essentials", "sit down", "sedersi", "Please sit down and relax."),
  p("phr-essentials", "come back", "tornare", "She came back late last night."),
  p("phr-essentials", "go out", "uscire", "We went out for dinner."),
  p("phr-essentials", "wait for", "aspettare", "I'm waiting for the bus."),

  // phr-common — B1, common
  p("phr-common", "give up", "arrendersi/smettere", "Don't give up so easily."),
  p("phr-common", "find out", "scoprire", "I found out the truth yesterday."),
  p("phr-common", "look for", "cercare", "I'm looking for my keys."),
  p("phr-common", "look after", "prendersi cura", "She looks after her grandparents."),
  p("phr-common", "get on", "andare d'accordo", "I get on well with my colleagues."),
  p("phr-common", "pick up", "raccogliere/passare a prendere", "I'll pick you up at eight."),
  p("phr-common", "set up", "allestire/avviare", "They set up a new business."),
  p("phr-common", "deal with", "occuparsi di", "I'll deal with this problem myself."),
  p("phr-common", "run out of", "rimanere senza", "We've run out of milk."),
  p("phr-common", "go on", "continuare/succedere", "What's going on here?"),
  p("phr-common", "grow up", "crescere", "She grew up in a small town."),
  p("phr-common", "work out", "fare esercizio/risolvere", "I work out at the gym twice a week."),

  // phr-idiomatic — B2, idiomatic
  p("phr-idiomatic", "put up with", "sopportare", "I can't put up with the noise."),
  p("phr-idiomatic", "come across", "imbattersi in", "I came across an old photo."),
  p("phr-idiomatic", "get away with", "farla franca", "He got away with cheating."),
  p("phr-idiomatic", "look forward to", "non vedere l'ora", "I look forward to seeing you."),
  p("phr-idiomatic", "make up", "inventare/riconciliarsi", "They made up after the argument."),
  p("phr-idiomatic", "turn down", "rifiutare", "She turned down the job offer."),
  p("phr-idiomatic", "bring up", "sollevare (un tema)", "He brought up an interesting point."),
  p("phr-idiomatic", "carry on", "proseguire", "Carry on with your work."),
  p("phr-idiomatic", "break down", "guastarsi/crollare", "The car broke down on the motorway."),
  p("phr-idiomatic", "sort out", "sistemare/chiarire", "We need to sort out this mess."),
  p("phr-idiomatic", "back up", "sostenere/fare backup", "Can anyone back up your story?"),
  p("phr-idiomatic", "figure out", "capire/risolvere", "I can't figure out the answer."),

  // phr-advanced — C1, advanced
  p("phr-advanced", "cut back on", "ridurre", "We're cutting back on spending."),
  p("phr-advanced", "come up with", "escogitare", "She came up with a brilliant idea."),
  p("phr-advanced", "look down on", "disprezzare", "Don't look down on people who fail."),
  p("phr-advanced", "get around to", "trovare il tempo di", "I finally got around to it."),
  p("phr-advanced", "own up to", "ammettere", "He owned up to his mistake."),
  p("phr-advanced", "boil down to", "ridursi a", "It all boils down to money."),
  p("phr-advanced", "live up to", "essere all'altezza di", "The film lived up to the hype."),
  p("phr-advanced", "brush up on", "rispolverare", "I need to brush up on my French."),
  p("phr-advanced", "wear off", "svanire (effetto)", "The painkiller soon wore off."),
  p("phr-advanced", "phase out", "eliminare gradualmente", "They're phasing out old models."),
];
