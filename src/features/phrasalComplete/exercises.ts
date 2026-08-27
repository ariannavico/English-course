import type { PhrasalEntry } from "./types";

export interface PhrasalQuestion {
  base: string;
  phrase: string;
  /** The example with the particle(s) blanked out. */
  cloze: string;
  /** Accepted answer — the particle, e.g. "off", "up to". */
  answer: string;
  /** The clue shown to the learner (Italian gloss if we have one, else English). */
  clue: string;
}

const norm = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z\s]/g, "").replace(/\s+/g, " ");

/**
 * Blank the particle inside an example. Examples write the phrasal verb in CAPS
 * (e.g. "The plane TOOK OFF on time"); we replace the CAPS word(s) that are the
 * particle, leaving the verb visible — so the learner supplies the particle.
 */
export function blankParticle(example: string, particle: string): string {
  const tokens = new Set(norm(particle).split(" ").filter(Boolean));
  let replaced = false;
  const out = example.replace(/\b[A-Z][A-Z'-]+\b/g, (w) => {
    const lw = w.toLowerCase().replace(/[^a-z]/g, "");
    if (tokens.has(lw)) {
      replaced = true;
      return "____";
    }
    return w;
  });
  return replaced ? out : example; // fall back to the plain sentence
}

export function checkParticle(input: string, particle: string): boolean {
  return norm(input) === norm(particle);
}

export function buildQuestion(base: string, entry: PhrasalEntry, italian?: string): PhrasalQuestion {
  const sense = entry.senses[0];
  return {
    base,
    phrase: entry.phrase,
    cloze: blankParticle(sense.example, entry.particle),
    answer: entry.particle,
    clue: italian ?? sense.meaning,
  };
}

/** Fisher–Yates, returns a new shuffled array. */
export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
