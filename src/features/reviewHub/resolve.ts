import type { ReviewItem, ReviewMode } from "@/types";
import { getPhrasalVerb, getVocabulary } from "@/data";
import { getConnectorEntry } from "@/data/connectors/items";
import { getLexItem } from "@/data/lexis";
import { getUnit } from "@/data/catalog";
import { getGrammarLesson } from "@/data/grammarLessons";

export interface ReviewCard {
  /** What the learner sees first. */
  prompt: string;
  /** Revealed after they try. */
  answer: string;
  /** Extra context shown with the answer. */
  detail?: string;
  kindLabel: string;
}

/**
 * Turn a kind-agnostic ReviewItem into a display card for the chosen ability.
 * Recognition = see English → recall meaning; Recall = see meaning → produce
 * English. Content is resolved from each kind's own data; anything unresolved
 * still reviews by self-rating on its id.
 */
export function resolveCard(item: ReviewItem, mode: ReviewMode): ReviewCard {
  const recog = mode === "recognition";

  if (item.kind === "connector") {
    const c = getConnectorEntry(item.id);
    if (c) {
      return recog
        ? { prompt: c.entry.word, answer: c.entry.it, detail: `${c.fn} · ${c.entry.structure}`, kindLabel: "Connector" }
        : { prompt: `${c.entry.it}  (${c.fn})`, answer: c.entry.word, detail: c.entry.structure, kindLabel: "Connector" };
    }
  }

  // New shared lexical items (Vocabulary / Adjectives / Adverbs / Verbs).
  if (item.kind === "word" || item.kind === "adjective" || item.kind === "adverb") {
    const lex = getLexItem(item.id);
    if (lex) {
      const label = item.kind === "word" ? "Vocabulary" : item.kind === "adjective" ? "Adjective" : "Adverb";
      return recog
        ? { prompt: lex.word, answer: lex.it, detail: lex.example, kindLabel: label }
        : { prompt: lex.it, answer: lex.word, detail: lex.example, kindLabel: label };
    }
  }

  if (item.kind === "word") {
    const v = getVocabulary(item.id);
    if (v) {
      return recog
        ? { prompt: v.word, answer: v.italianMeaning, kindLabel: "Vocabulary" }
        : { prompt: v.italianMeaning, answer: v.word, kindLabel: "Vocabulary" };
    }
  }

  if (item.kind === "phrasal") {
    const p = getPhrasalVerb(item.id);
    if (p) {
      const it = p.meanings[0]?.italian ?? "";
      return recog
        ? { prompt: p.phrase, answer: it, kindLabel: "Phrasal" }
        : { prompt: it, answer: p.phrase, kindLabel: "Phrasal" };
    }
  }

  if (item.kind === "grammar") {
    const unit = getUnit(item.id);
    if (unit) {
      const lesson = getGrammarLesson(item.id);
      return { prompt: unit.title, answer: lesson?.rules[0] ?? "Ripassa la regola nel capitolo.", kindLabel: "Grammar" };
    }
  }

  // Fallback (verb / unresolved) — self-rated on the id itself.
  return { prompt: item.id, answer: "—", kindLabel: item.kind };
}
