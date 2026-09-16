import { getLexItem } from "@/data/lexis";
import { getConnectorEntry } from "@/data/connectors/items";
import { getGrammarLesson } from "@/data/grammarLessons";
import { getUnit } from "@/data/catalog";
import type { ReviewItem, ReviewKind, ReviewMode } from "@/types";

/** A single review item rendered as a two-sided card for the chosen ability. */
export interface ReviewCard {
  /** What the learner sees first (the prompt). */
  front: string;
  /** The answer, revealed after they try. */
  back: string;
  /** An example sentence, shown with the answer. */
  example?: string;
  /** A short extra note (e.g. a connector's structure). */
  note?: string;
  /** Human label for the kind of item. */
  kindLabel: string;
}

const KIND_LABEL: Record<ReviewKind, string> = {
  word: "Vocabolo",
  verb: "Verbo",
  phrasal: "Phrasal verb",
  adjective: "Aggettivo",
  adverb: "Avverbio",
  connector: "Connettivo",
  grammar: "Grammatica",
};

/**
 * Turn a kind-agnostic ReviewItem into a front/back card for the given ability.
 *  - recognition = see the English → recall its Italian meaning
 *  - recall/production = see the Italian → produce the English
 * Every content kind resolves from the same datasets the study surface uses.
 */
export function resolveCard(item: ReviewItem, mode: ReviewMode): ReviewCard {
  const kindLabel = KIND_LABEL[item.kind] ?? "Elemento";

  // Grammar: a chapter, not a word pair — show the title and a key rule.
  if (item.kind === "grammar") {
    const unit = getUnit(item.id);
    const lesson = getGrammarLesson(item.id);
    const title = unit?.title ?? item.id;
    const rule = lesson?.rules[0];
    const ex = lesson?.examples[0]?.en;
    return {
      front: title,
      back: rule ?? "(regola non trovata)",
      example: ex,
      kindLabel,
    };
  }

  // Connectors have their own dataset.
  if (item.kind === "connector") {
    const found = getConnectorEntry(item.id);
    if (found) {
      const { entry } = found;
      return mode === "recognition"
        ? { front: entry.word, back: entry.it, example: entry.example, note: entry.structure, kindLabel }
        : { front: entry.it, back: entry.word, example: entry.example, note: entry.structure, kindLabel };
    }
    return { front: item.id, back: "(connettivo non trovato)", kindLabel };
  }

  // Everything else is a lexical item (word/verb/phrasal/adjective/adverb).
  const lex = getLexItem(item.id);
  if (lex) {
    return mode === "recognition"
      ? { front: lex.word, back: lex.it, example: lex.example, kindLabel }
      : { front: lex.it, back: lex.word, example: lex.example, kindLabel };
  }

  return { front: item.id, back: "(contenuto non trovato)", kindLabel };
}
