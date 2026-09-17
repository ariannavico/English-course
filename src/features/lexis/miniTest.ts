import type { LexItem } from "./types";

/** One multiple-choice question: show the English word, pick its Italian meaning. */
export interface LexQuestion {
  prompt: string;
  pos?: string;
  options: string[];
  /** Index of the correct option. */
  answer: number;
}

/** Fisher–Yates shuffle (pure — takes the RNG so tests can make it deterministic). */
function shuffle<T>(arr: readonly T[], rnd: () => number = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build a mini-test for one unit from its words. Each question shows an English
 * word; the options are its Italian meaning plus up to three distractors drawn
 * from the section pool (falling back to the unit itself). Distractors are
 * de-duplicated by meaning so an item never appears twice.
 */
export function buildLexTest(
  unitItems: readonly LexItem[],
  pool: readonly LexItem[],
  count = 5,
  rnd: () => number = Math.random,
): LexQuestion[] {
  const chosen = shuffle(unitItems, rnd).slice(0, Math.min(count, unitItems.length));
  const source = pool.length > unitItems.length ? pool : unitItems;

  return chosen.map((item) => {
    const seenMeanings = new Set([item.it]);
    const distractors: string[] = [];
    for (const cand of shuffle(source, rnd)) {
      if (distractors.length >= 3) break;
      if (seenMeanings.has(cand.it)) continue;
      seenMeanings.add(cand.it);
      distractors.push(cand.it);
    }
    const options = shuffle([item.it, ...distractors], rnd);
    return {
      prompt: item.word,
      pos: item.pos,
      options,
      answer: options.indexOf(item.it),
    };
  });
}
