import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { verbs } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { normalize } from "@/utils/normalization";
import styles from "./pages.module.css";

type SortKey = "alpha" | "tier" | "mastery";
type TierFilter = "all" | "1" | "2";

/** Verb Explorer with search, tier filter, and sorting (spec §33). */
export function VerbExplorerPage() {
  const { progress } = useProgress();
  const [query, setQuery] = useState("");
  const [tier, setTier] = useState<TierFilter>("all");
  const [sort, setSort] = useState<SortKey>("alpha");

  const mastery = (id: string) => progress.verbProgress[id]?.masteryScore ?? 0;

  const filtered = useMemo(() => {
    const q = normalize(query);
    let list = verbs.filter((v) => {
      if (tier !== "all" && String(v.tier) !== tier) return false;
      if (q.length < 1) return true;
      return (
        normalize(v.infinitive).includes(q) ||
        v.meanings.some((m) => normalize(m.italianMeaning).includes(q))
      );
    });
    list = [...list].sort((a, b) => {
      if (sort === "alpha") return a.infinitive.localeCompare(b.infinitive);
      if (sort === "tier") return a.tier - b.tier || a.infinitive.localeCompare(b.infinitive);
      return mastery(a.id) - mastery(b.id); // weakest first for review
    });
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, tier, sort, progress]);

  return (
    <div className="stack">
      <PageHeader title="Verb Explorer" description="Search, filter and open any verb card." />

      <div className={styles.toolbar}>
        <input
          className={styles.field}
          placeholder="Search verbs…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search verbs"
          style={{ flex: 1, minWidth: 160 }}
        />
        <select
          className={styles.field}
          value={tier}
          onChange={(e) => setTier(e.target.value as TierFilter)}
          aria-label="Filter by tier"
        >
          <option value="all">All tiers</option>
          <option value="1">Tier 1</option>
          <option value="2">Tier 2</option>
        </select>
        <select
          className={styles.field}
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label="Sort"
        >
          <option value="alpha">A–Z</option>
          <option value="tier">By tier</option>
          <option value="mastery">Needs review</option>
        </select>
      </div>

      <div className={styles.list}>
        {filtered.map((v) => (
          <Link key={v.id} to={`/verbs/${v.id}`} className={styles.tile}>
            <div className={styles.tileRow}>
              <div>
                <span className={styles.tileTitle}>{v.infinitive}</span>{" "}
                <span className="muted">— {v.meanings[0]?.italianMeaning}</span>
              </div>
              <div className="row">
                <Badge tone={v.tier === 1 ? "primary" : "neutral"}>Tier {v.tier}</Badge>
                <Badge>{mastery(v.id)}%</Badge>
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && <p className="muted">No verbs match.</p>}
      </div>
    </div>
  );
}
