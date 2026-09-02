import type { LexItem } from "@/features/lexis/types";

/** Adverb content, keyed to the adv-* catalog Units. */
const a = (unitId: string, word: string, it: string, example: string): LexItem => ({
  id: `lx-adv-${word.replace(/[^a-z]+/gi, "-").toLowerCase()}`,
  unitId,
  word,
  it,
  pos: "adv",
  example,
});

export const adverbItems: LexItem[] = [
  // frequency
  a("adv-frequency", "always", "sempre", "She always arrives early."),
  a("adv-frequency", "usually", "di solito", "We usually eat at eight."),
  a("adv-frequency", "often", "spesso", "He often works late."),
  a("adv-frequency", "sometimes", "a volte", "Sometimes I walk to work."),
  a("adv-frequency", "rarely", "raramente", "They rarely go out during the week."),
  a("adv-frequency", "never", "mai", "I've never been to Japan."),
  // time
  a("adv-time", "now", "adesso", "We need to leave now."),
  a("adv-time", "already", "già", "She's already finished."),
  a("adv-time", "yet", "ancora (neg./interr.)", "Have you eaten yet?"),
  a("adv-time", "soon", "presto", "The train will arrive soon."),
  a("adv-time", "recently", "di recente", "I've recently changed jobs."),
  a("adv-time", "still", "ancora", "He's still asleep."),
  // place
  a("adv-place", "here", "qui", "Come here, please."),
  a("adv-place", "there", "là", "Put it there."),
  a("adv-place", "everywhere", "dappertutto", "I looked everywhere for my keys."),
  a("adv-place", "nearby", "nelle vicinanze", "There's a café nearby."),
  a("adv-place", "abroad", "all'estero", "They moved abroad last year."),
  a("adv-place", "upstairs", "di sopra", "The bathroom is upstairs."),
  // manner
  a("adv-manner", "quickly", "velocemente", "She answered quickly."),
  a("adv-manner", "slowly", "lentamente", "Please drive slowly."),
  a("adv-manner", "carefully", "con attenzione", "He read the contract carefully."),
  a("adv-manner", "badly", "male", "The team played badly."),
  a("adv-manner", "well", "bene", "She sings very well."),
  a("adv-manner", "hard", "duramente", "They work hard all week."),
  // degree
  a("adv-degree", "very", "molto", "It's very cold today."),
  a("adv-degree", "quite", "piuttosto", "The film was quite good."),
  a("adv-degree", "rather", "piuttosto", "It's rather expensive."),
  a("adv-degree", "extremely", "estremamente", "She was extremely helpful."),
  a("adv-degree", "slightly", "leggermente", "I'm slightly worried."),
  a("adv-degree", "absolutely", "assolutamente", "You're absolutely right."),
  // sentence adverbs
  a("adv-sentence", "honestly", "sinceramente", "Honestly, I don't mind."),
  a("adv-sentence", "obviously", "ovviamente", "Obviously, we were disappointed."),
  a("adv-sentence", "apparently", "a quanto pare", "Apparently, they've split up."),
  a("adv-sentence", "fortunately", "per fortuna", "Fortunately, no one was hurt."),
  a("adv-sentence", "surprisingly", "sorprendentemente", "Surprisingly, it worked first time."),
  a("adv-sentence", "frankly", "francamente", "Frankly, I couldn't care less."),
  // linking adverbs
  a("adv-linking", "however", "tuttavia", "It's late; however, we'll continue."),
  a("adv-linking", "therefore", "perciò", "He lied; therefore, he was fired."),
  a("adv-linking", "meanwhile", "nel frattempo", "Meanwhile, the guests waited."),
  a("adv-linking", "otherwise", "altrimenti", "Hurry, otherwise we'll be late."),
  a("adv-linking", "nevertheless", "ciononostante", "It's risky; nevertheless, we'll try."),
  a("adv-linking", "instead", "invece", "We stayed in instead."),
  // advanced (C1)
  a("adv-advanced", "arguably", "probabilmente (si può sostenere)", "She's arguably the best in the field."),
  a("adv-advanced", "seemingly", "apparentemente", "A seemingly simple question."),
  a("adv-advanced", "inadvertently", "inavvertitamente", "He inadvertently deleted the file."),
  a("adv-advanced", "notwithstanding", "nonostante", "Notwithstanding the delays, we finished."),
  a("adv-advanced", "henceforth", "d'ora in poi", "Henceforth, the office closes at six."),
  a("adv-advanced", "thereby", "così, in tal modo", "He signed, thereby accepting the terms."),
];
