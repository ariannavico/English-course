import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Badge, Button, Icon } from "@/components/ui";
import { phrasalFamilies, totalPhrasalPhrases } from "@/data/phrasalComplete";
import { phrasalItalian } from "@/data/phrasalComplete/italian";
import { curatedMeta } from "@/data/phrasalComplete/curatedMeta";
import { PhrasalPractice, type PracticeItem } from "./PhrasalPractice";
import type { PhrasalEntry, PhrasalFamily } from "./types";
import styles from "./phrasalComplete.module.css";

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");
const MAX_RESULTS = 120;

type Practice = { items: PracticeItem[]; title: string };

export function PhrasalCompleteRunner() {
  const [params] = useSearchParams();
  const qParam = params.get("q") ?? "";
  const [query, setQuery] = useState(qParam);
  const [letter, setLetter] = useState<string | null>(null);

  // Follow the ?q= param when it changes via navigation (e.g. the global search
  // lands here while the page is already mounted).
  useEffect(() => {
    setQuery(qParam);
  }, [qParam]);
  const [openBases, setOpenBases] = useState<Set<string>>(new Set());
  const [practice, setPractice] = useState<Practice | null>(null);

  const q = query.trim().toLowerCase();

  const activeLetters = useMemo(
    () => new Set(phrasalFamilies.map((f) => f.base[0])),
    [],
  );

  const results = useMemo(() => {
    if (!q) return null;
    const hits: { base: string; entry: PhrasalEntry }[] = [];
    for (const fam of phrasalFamilies) {
      for (const entry of fam.phrases) {
        const inPhrase = entry.phrase.includes(q);
        const inMeaning = entry.senses.some((s) => s.meaning.toLowerCase().includes(q));
        const it = phrasalItalian[entry.phrase];
        const inItalian = it ? it.toLowerCase().includes(q) : false;
        if (inPhrase || inMeaning || inItalian) hits.push({ base: fam.base, entry });
        if (hits.length > MAX_RESULTS) return { hits, capped: true };
      }
    }
    return { hits, capped: false };
  }, [q]);

  const families = useMemo(
    () => (letter ? phrasalFamilies.filter((f) => f.base[0] === letter) : phrasalFamilies),
    [letter],
  );

  function toggle(base: string) {
    setOpenBases((prev) => {
      const next = new Set(prev);
      if (next.has(base)) next.delete(base);
      else next.add(base);
      return next;
    });
  }

  function practiseCore() {
    const items: PracticeItem[] = [];
    for (const fam of phrasalFamilies) {
      for (const entry of fam.phrases) {
        const it = phrasalItalian[entry.phrase];
        if (it) items.push({ base: fam.base, entry, italian: it });
      }
    }
    setPractice({ items, title: "Common core" });
  }

  function practiseFamily(fam: PhrasalFamily) {
    setPractice({
      items: fam.phrases.map((entry) => ({
        base: fam.base,
        entry,
        italian: phrasalItalian[entry.phrase],
      })),
      title: `“${fam.base} …”`,
    });
  }

  if (practice) {
    return (
      <PhrasalPractice
        items={practice.items}
        title={practice.title}
        onExit={() => setPractice(null)}
      />
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.searchRow}>
        <Icon name="search" size={18} />
        <input
          className={styles.search}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a phrasal verb or a meaning (e.g. “give up”, “postpone”, “rimandare”)…"
          aria-label="Search phrasal verbs"
        />
      </div>

      {!q && (
        <div className={styles.toolbar}>
          <Button size="sm" variant="primary" onClick={practiseCore}>
            <Icon name="target" size={16} /> Practise the common set
          </Button>
          <span className={styles.count}>
            {totalPhrasalPhrases.toLocaleString()} phrasal verbs · {phrasalFamilies.length} base verbs
          </span>
        </div>
      )}

      {!q && (
        <div className={styles.azBar} role="navigation" aria-label="Jump to letter">
          <button
            className={`${styles.az} ${letter === null ? styles.azOn : ""}`}
            onClick={() => setLetter(null)}
          >
            All
          </button>
          {LETTERS.map((l) => {
            const has = activeLetters.has(l);
            return (
              <button
                key={l}
                className={`${styles.az} ${letter === l ? styles.azOn : ""}`}
                disabled={!has}
                onClick={() => setLetter(l)}
              >
                {l.toUpperCase()}
              </button>
            );
          })}
        </div>
      )}

      {q ? (
        <SearchResults results={results!} query={q} />
      ) : (
        <div className={styles.families}>
          {families.map((fam) => (
            <Family
              key={fam.base}
              fam={fam}
              open={openBases.has(fam.base)}
              onToggle={() => toggle(fam.base)}
              onPractise={() => practiseFamily(fam)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Family({
  fam,
  open,
  onToggle,
  onPractise,
}: {
  fam: PhrasalFamily;
  open: boolean;
  onToggle: () => void;
  onPractise: () => void;
}) {
  return (
    <div className={styles.family}>
      <button className={styles.familyHead} aria-expanded={open} onClick={onToggle}>
        <span className={styles.base}>{fam.base}</span>
        <Badge tone="neutral">{fam.count}</Badge>
        <Icon
          name="chevron"
          size={18}
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
        />
      </button>
      {open && (
        <div className={styles.familyBody}>
          <Button size="sm" variant="ghost" onClick={onPractise}>
            <Icon name="target" size={14} /> Practise “{fam.base} …”
          </Button>
          {fam.phrases.map((entry) => (
            <EntryView key={entry.phrase} base={fam.base} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}

function EntryView({ base, entry }: { base: string; entry: PhrasalEntry }) {
  const it = phrasalItalian[entry.phrase];
  const meta = curatedMeta[entry.phrase];
  return (
    <div className={styles.entry}>
      <div className={styles.phrase}>
        <span className={styles.base}>{base}</span>
        <span className={styles.particle}>{entry.particle}</span>
        {meta && <Badge tone="primary">{meta.cefr}</Badge>}
        {meta?.separable != null && (
          <Badge>{meta.separable ? "separable" : "inseparable"}</Badge>
        )}
        {entry.senses.length > 1 && (
          <span className={styles.senseCount}>{entry.senses.length} meanings</span>
        )}
      </div>
      {it && <div className={styles.it}>{it}</div>}
      <ol className={styles.senses}>
        {entry.senses.map((s, i) => (
          <li key={i} className={styles.sense}>
            <span className={styles.meaning}>{s.meaning}</span>
            <span className={styles.example}>{s.example}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SearchResults({
  results,
  query,
}: {
  results: { hits: { base: string; entry: PhrasalEntry }[]; capped: boolean };
  query: string;
}) {
  if (results.hits.length === 0) {
    return <p className={styles.count}>No phrasal verb matches “{query}”. Try a shorter word.</p>;
  }
  return (
    <div className={styles.results}>
      <p className={styles.count}>
        {results.capped
          ? `First ${MAX_RESULTS}+ matches`
          : `${results.hits.length} match${results.hits.length === 1 ? "" : "es"}`}{" "}
        for “{query}”
      </p>
      {results.hits.map(({ base, entry }) => (
        <EntryView key={`${base}-${entry.phrase}`} base={base} entry={entry} />
      ))}
    </div>
  );
}
