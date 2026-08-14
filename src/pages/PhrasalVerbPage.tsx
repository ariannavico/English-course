import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { PhrasalVerbCard } from "@/components/learning/PhrasalVerbCard";
import { phrasalVerbs } from "@/data";

/** Phrasal verbs grouped by base verb — shows the take → take off/out/up map (spec §8). */
export function PhrasalVerbPage() {
  const [params] = useSearchParams();
  const focus = params.get("focus");

  const groups = useMemo(() => {
    const map = new Map<string, typeof phrasalVerbs>();
    for (const pv of phrasalVerbs) {
      const list = map.get(pv.baseVerb) ?? [];
      list.push(pv);
      map.set(pv.baseVerb, list);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  return (
    <div className="stack">
      <PageHeader
        title="Phrasal Verbs"
        description="One base verb, many meanings. Learn them as families."
      />
      {groups.map(([base, list]) => (
        <Card key={base} title={`${base} …`}>
          <div className="stack">
            {list.map((pv) => (
              <div
                key={pv.id}
                id={pv.id}
                style={
                  focus === pv.id
                    ? { outline: "2px solid var(--primary)", borderRadius: "var(--r-md)" }
                    : undefined
                }
              >
                <PhrasalVerbCard phrasalVerb={pv} />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
