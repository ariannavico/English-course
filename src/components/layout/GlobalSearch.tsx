import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@/components/ui";
import { useSearch } from "@/hooks/useSearch";
import styles from "./layout.module.css";

/** Header search box with a live dropdown of cross-content results (spec §34). */
export function GlobalSearch() {
  const { query, setQuery, results } = useSearch();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => setActive(0), [query]);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    navigate(href);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active].href);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div className={styles.search} ref={boxRef}>
      <div className={styles.searchInputWrap}>
        <Icon name="search" size={18} />
        <input
          className={styles.searchInput}
          placeholder="Search verbs, chapters, phrasal verbs…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          aria-label="Global search"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls="search-results"
        />
      </div>
      {open && query.length >= 2 && (
        <div className={styles.results} id="search-results" role="listbox">
          {results.length === 0 ? (
            <div className={styles.result}>
              <span className="muted">No results for “{query}”.</span>
            </div>
          ) : (
            results.map((r, i) => (
              <a
                key={`${r.type}-${r.id}`}
                href={r.href}
                role="option"
                aria-selected={i === active}
                className={`${styles.result} ${i === active ? styles.resultActive : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={(e) => {
                  e.preventDefault();
                  go(r.href);
                }}
              >
                <span className={styles.resultTitle}>{r.title}</span>
                <span className="subtle">{r.subtitle}</span>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}
