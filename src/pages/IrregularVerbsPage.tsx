import { useMemo, useState } from "react";
import { Badge, Button, Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import {
  PATTERN_INFO,
  classifyIrregular,
  irregularVerbs,
  type IrregularEntry,
  type IrregularPattern,
} from "@/data/verbs/irregularMap";
import { matchesAnswer } from "@/utils/normalization";
import { sample } from "@/utils/shuffle";
import styles from "./pages.module.css";

const ORDER: IrregularPattern[] = ["AAA", "ABB", "ABA", "ABC"];

/** Irregular verb map by pattern + a memory-recall quiz (spec §45). */
export function IrregularVerbsPage() {
  const grouped = useMemo(() => {
    const map = new Map<IrregularPattern, IrregularEntry[]>();
    for (const e of irregularVerbs) {
      const p = classifyIrregular(e);
      const list = map.get(p) ?? [];
      list.push(e);
      map.set(p, list);
    }
    return map;
  }, []);

  return (
    <div className="stack">
      <PageHeader
        title="Irregular Verb Map"
        description="Grouped by pattern, not A–Z. Patterns are easier to remember."
      />
      <RecallQuiz />
      {ORDER.map((pattern) => (
        <Card key={pattern} title={PATTERN_INFO[pattern].title}>
          <p className="subtle" style={{ marginTop: 0 }}>
            e.g. {PATTERN_INFO[pattern].example}
          </p>
          <div className={styles.patternGroup}>
            {(grouped.get(pattern) ?? []).map((e) => (
              <div key={e.infinitive} className={styles.patternRow}>
                {e.infinitive} — {e.past} — {e.pastParticiple}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

/** Retrieval practice: given the infinitive, recall past + past participle. */
function RecallQuiz() {
  const [entry, setEntry] = useState<IrregularEntry>(() => sample(irregularVerbs, 1)[0]);
  const [past, setPast] = useState("");
  const [pp, setPp] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  function check() {
    const ok =
      matchesAnswer(past, [entry.past]) && matchesAnswer(pp, [entry.pastParticiple]);
    setResult(ok);
  }
  function next() {
    setEntry(sample(irregularVerbs, 1)[0]);
    setPast("");
    setPp("");
    setResult(null);
  }

  return (
    <Card title="Recall from memory">
      <div className="stack">
        <div className="row" style={{ gap: "0.75rem", flexWrap: "wrap" }}>
          <Badge tone="primary">{classifyIrregular(entry)}</Badge>
          <strong style={{ fontSize: "1.2rem" }}>{entry.infinitive}</strong>
        </div>
        <div className="row" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
          <input
            className={styles.field}
            placeholder="past"
            value={past}
            disabled={result !== null}
            onChange={(e) => setPast(e.target.value)}
            aria-label="Past form"
          />
          <input
            className={styles.field}
            placeholder="past participle"
            value={pp}
            disabled={result !== null}
            onChange={(e) => setPp(e.target.value)}
            aria-label="Past participle form"
          />
          {result === null ? (
            <Button variant="primary" onClick={check} disabled={!past || !pp}>
              Check
            </Button>
          ) : (
            <Button onClick={next}>Next</Button>
          )}
        </div>
        {result !== null && (
          <>
            <AnswerFeedback result={{ correct: result, score: result ? 1 : 0, earnedPoints: 0 }} />
            {!result && (
              <p className="muted">
                Answer: <strong>{entry.past}</strong> — <strong>{entry.pastParticiple}</strong>
              </p>
            )}
          </>
        )}
      </div>
    </Card>
  );
}
