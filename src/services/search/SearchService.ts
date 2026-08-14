import {
  chapters,
  exercises,
  grammarTopics,
  phrasalVerbs,
  verbs,
  vocabulary,
} from "@/data";
import { normalize } from "@/utils/normalization";

export type SearchResultType =
  | "chapter"
  | "verb"
  | "phrasal-verb"
  | "vocabulary"
  | "grammar"
  | "example"
  | "exercise";

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  /** Route to navigate to when the result is chosen. */
  href: string;
  /** Lower is better. */
  score: number;
}

interface IndexEntry extends Omit<SearchResult, "score"> {
  /** Pre-normalised searchable text. */
  haystack: string;
}

/**
 * A tiny in-memory search index built once from the content registry. Indexes
 * every content type (spec §34) so "take" surfaces the verb card, its phrasal
 * verbs, the chapters it appears in, examples and exercises together.
 */
export class SearchService {
  private index: IndexEntry[] | null = null;

  /** Build the index lazily on first search to keep app startup light. */
  private build(): void {
    if (this.index !== null) return;
    const entries: IndexEntry[] = [];

    for (const v of verbs) {
      entries.push({
        id: v.id,
        type: "verb",
        title: v.infinitive,
        subtitle: `Verb · ${v.meanings[0]?.italianMeaning ?? ""}`,
        href: `/verbs/${v.id}`,
        haystack: normalize(
          [
            v.infinitive,
            v.past,
            v.pastParticiple,
            ...v.meanings.map((m) => `${m.italianMeaning} ${m.englishExplanation}`),
            ...v.collocations.map((c) => c.phrase),
          ].join(" "),
        ),
      });
    }

    for (const pv of phrasalVerbs) {
      entries.push({
        id: pv.id,
        type: "phrasal-verb",
        title: pv.phrase,
        subtitle: `Phrasal verb · ${pv.meanings[0]?.italian ?? ""}`,
        href: `/phrasal-verbs?focus=${pv.id}`,
        haystack: normalize(
          [pv.phrase, pv.baseVerb, pv.particle, ...pv.meanings.map((m) => m.italian)].join(" "),
        ),
      });
    }

    for (const w of vocabulary) {
      entries.push({
        id: w.id,
        type: "vocabulary",
        title: w.word,
        subtitle: `Vocabulary · ${w.italianMeaning}`,
        href: `/vocabulary?focus=${w.id}`,
        haystack: normalize([w.word, w.italianMeaning, w.englishDefinition ?? "", w.topic].join(" ")),
      });
    }

    for (const c of chapters) {
      entries.push({
        id: c.id,
        type: "chapter",
        title: `Ch. ${c.number} — ${c.title}`,
        subtitle: `Chapter · ${c.cefrLevel}`,
        href: `/chapters/${c.id}`,
        haystack: normalize([c.title, c.description, ...c.grammarTopics, ...c.objectives].join(" ")),
      });
    }

    for (const g of grammarTopics) {
      entries.push({
        id: g.id,
        type: "grammar",
        title: g.title,
        subtitle: `Grammar · ${g.cefrLevel}`,
        href: `/verbs?grammar=${g.id}`,
        haystack: normalize([g.title, ...g.blocks.map((b) => `${b.heading ?? ""} ${b.text}`)].join(" ")),
      });
    }

    for (const v of verbs) {
      for (const ex of v.examples) {
        entries.push({
          id: ex.id,
          type: "example",
          title: ex.english,
          subtitle: `Example · ${v.infinitive}`,
          href: `/verbs/${v.id}`,
          haystack: normalize(`${ex.english} ${ex.italian ?? ""}`),
        });
      }
    }

    for (const ex of exercises) {
      entries.push({
        id: ex.id,
        type: "exercise",
        title: ex.title ?? ex.instructions,
        subtitle: `Exercise · ${ex.type}`,
        href: `/review?exercise=${ex.id}`,
        haystack: normalize([ex.instructions, ...ex.tags].join(" ")),
      });
    }

    this.index = entries;
  }

  search(query: string, limit = 20): SearchResult[] {
    const q = normalize(query);
    if (q.length < 2) return [];
    this.build(); // no-op after the first call
    const terms = q.split(" ").filter(Boolean);

    const results: SearchResult[] = [];
    for (const entry of this.index!) {
      let score = 0;
      let matchedAll = true;
      for (const term of terms) {
        const idx = entry.haystack.indexOf(term);
        if (idx === -1) {
          matchedAll = false;
          break;
        }
        // Earlier matches and title matches rank higher (lower score).
        score += idx;
        if (normalize(entry.title).includes(term)) score -= 50;
      }
      if (matchedAll) results.push({ ...entry, score });
    }

    return results.sort((a, b) => a.score - b.score).slice(0, limit);
  }
}

export const searchService = new SearchService();
