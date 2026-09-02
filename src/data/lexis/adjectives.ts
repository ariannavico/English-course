import type { LexItem } from "@/features/lexis/types";

/** Adjective content, keyed to the adj-* catalog Units. */
const a = (unitId: string, word: string, it: string, example: string): LexItem => ({
  id: `lx-adj-${word.replace(/[^a-z]+/gi, "-").toLowerCase()}`,
  unitId,
  word,
  it,
  pos: "adj",
  example,
});

export const adjectiveItems: LexItem[] = [
  // appearance
  a("adj-appearance", "tall", "alto", "He's very tall — almost two metres."),
  a("adj-appearance", "slim", "snello", "She stayed slim without dieting."),
  a("adj-appearance", "good-looking", "di bell'aspetto", "He's a good-looking young man."),
  a("adj-appearance", "bald", "calvo", "My uncle went bald in his thirties."),
  a("adj-appearance", "elegant", "elegante", "She looked elegant in a simple black dress."),
  a("adj-appearance", "scruffy", "trasandato", "He turned up in scruffy old clothes."),
  // size & shape
  a("adj-size-shape", "huge", "enorme", "They live in a huge house by the sea."),
  a("adj-size-shape", "tiny", "minuscolo", "The kitchen is tiny but well designed."),
  a("adj-size-shape", "narrow", "stretto", "The car barely fit down the narrow street."),
  a("adj-size-shape", "round", "rotondo", "She wore round glasses."),
  a("adj-size-shape", "flat", "piatto", "The land here is completely flat."),
  a("adj-size-shape", "deep", "profondo", "Be careful, the water is very deep."),
  // describing things
  a("adj-describing-things", "useful", "utile", "This app is really useful for studying."),
  a("adj-describing-things", "useless", "inutile", "The instructions were useless."),
  a("adj-describing-things", "cheap", "economico", "We found a cheap flight to Rome."),
  a("adj-describing-things", "expensive", "costoso", "That restaurant is too expensive."),
  a("adj-describing-things", "heavy", "pesante", "The suitcase was too heavy to lift."),
  a("adj-describing-things", "fragile", "fragile", "Handle the box carefully — it's fragile."),
  // personality
  a("adj-personality", "kind", "gentile", "She's always kind to strangers."),
  a("adj-personality", "generous", "generoso", "He's very generous with his time."),
  a("adj-personality", "stubborn", "testardo", "My brother is too stubborn to admit it."),
  a("adj-personality", "reliable", "affidabile", "She's the most reliable person on the team."),
  a("adj-personality", "shy", "timido", "He was too shy to ask her name."),
  a("adj-personality", "ambitious", "ambizioso", "They're an ambitious, hard-working couple."),
  // feelings
  a("adj-feelings", "delighted", "felicissimo", "We were delighted with the results."),
  a("adj-feelings", "anxious", "ansioso", "She felt anxious before the interview."),
  a("adj-feelings", "frustrated", "frustrato", "I get frustrated when the wifi drops."),
  a("adj-feelings", "exhausted", "esausto", "After the trip we were completely exhausted."),
  a("adj-feelings", "overwhelmed", "sopraffatto", "He felt overwhelmed by all the emails."),
  a("adj-feelings", "content", "appagato", "They live a quiet, content life."),
  // opinions
  a("adj-opinions", "impressive", "notevole", "Her presentation was really impressive."),
  a("adj-opinions", "disappointing", "deludente", "The ending was a bit disappointing."),
  a("adj-opinions", "controversial", "controverso", "It's a controversial decision."),
  a("adj-opinions", "overrated", "sopravvalutato", "Honestly, that film is overrated."),
  a("adj-opinions", "worthwhile", "che vale la pena", "It's a difficult but worthwhile project."),
  a("adj-opinions", "dull", "noioso, scialbo", "The lecture was rather dull."),
  // describing places
  a("adj-describing-places", "crowded", "affollato", "The beach was too crowded in August."),
  a("adj-describing-places", "peaceful", "tranquillo", "It's a peaceful little village."),
  a("adj-describing-places", "lively", "vivace", "The old town is lively at night."),
  a("adj-describing-places", "remote", "remoto, isolato", "They live in a remote mountain area."),
  a("adj-describing-places", "run-down", "malandato", "The hotel was cheap but run-down."),
  a("adj-describing-places", "picturesque", "pittoresco", "We stayed in a picturesque fishing village."),
  // relationships
  a("adj-relationships", "supportive", "di sostegno", "She has very supportive parents."),
  a("adj-relationships", "close", "stretto (rapporto)", "They're a close family."),
  a("adj-relationships", "distant", "distaccato", "He's become distant lately."),
  a("adj-relationships", "loyal", "leale", "A loyal friend stands by you."),
  a("adj-relationships", "possessive", "possessivo", "He got jealous and possessive."),
  a("adj-relationships", "caring", "premuroso", "She's a warm, caring person."),
  // work
  a("adj-work", "demanding", "impegnativo", "It's a demanding but well-paid job."),
  a("adj-work", "rewarding", "gratificante", "Teaching is hard but rewarding."),
  a("adj-work", "tedious", "tedioso", "Filling in the forms is tedious."),
  a("adj-work", "competent", "competente", "She's a highly competent manager."),
  a("adj-work", "hectic", "frenetico", "Mornings at the office are hectic."),
  a("adj-work", "flexible", "flessibile", "They offer flexible working hours."),
  // positive / negative
  a("adj-positive-negative", "brilliant", "geniale", "That's a brilliant idea."),
  a("adj-positive-negative", "dreadful", "terribile", "The weather was dreadful all week."),
  a("adj-positive-negative", "remarkable", "straordinario", "She made a remarkable recovery."),
  a("adj-positive-negative", "mediocre", "mediocre", "The food was mediocre at best."),
  a("adj-positive-negative", "appalling", "pessimo, spaventoso", "The conditions were appalling."),
  a("adj-positive-negative", "decent", "dignitoso, discreto", "It's a decent enough hotel."),
  // advanced (C1)
  a("adj-advanced", "meticulous", "meticoloso", "He's meticulous about details."),
  a("adj-advanced", "resilient", "resiliente", "Children are surprisingly resilient."),
  a("adj-advanced", "ambiguous", "ambiguo", "The wording is deliberately ambiguous."),
  a("adj-advanced", "profound", "profondo", "The book had a profound effect on me."),
  a("adj-advanced", "versatile", "versatile", "She's a versatile, adaptable worker."),
  a("adj-advanced", "relentless", "incessante", "The relentless pressure wore him down."),
];
