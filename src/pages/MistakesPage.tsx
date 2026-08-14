import { useState } from "react";
import type { UserMistake } from "@/types";
import { Badge, Button, Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { useProgress } from "@/hooks/useProgress";
import styles from "./pages.module.css";

type Category = UserMistake["category"];
const CATEGORIES: Category[] = [
  "grammar",
  "verb",
  "phrasal-verb",
  "vocabulary",
  "preposition",
  "other",
];

/** "My English Mistakes" — manual error log the learner builds (spec §43). */
export function MistakesPage() {
  const { mistakes, addMistake, removeMistake } = useProgress();
  const [incorrect, setIncorrect] = useState("");
  const [correct, setCorrect] = useState("");
  const [explanation, setExplanation] = useState("");
  const [category, setCategory] = useState<Category>("grammar");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!incorrect.trim() || !correct.trim()) return;
    addMistake({ incorrect, correct, explanation, category });
    setIncorrect("");
    setCorrect("");
    setExplanation("");
  }

  return (
    <div className="stack">
      <PageHeader
        title="My English Mistakes"
        description="Log the mistakes you make in real life, then review them here."
      />

      <Card title="Add a mistake">
        <form className="stack" onSubmit={submit}>
          <input
            className={styles.field}
            placeholder="What you wrote (incorrect)"
            value={incorrect}
            onChange={(e) => setIncorrect(e.target.value)}
            aria-label="Incorrect sentence"
          />
          <input
            className={styles.field}
            placeholder="The correct version"
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
            aria-label="Correct sentence"
          />
          <input
            className={styles.field}
            placeholder="Why? (optional explanation)"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            aria-label="Explanation"
          />
          <div className="row" style={{ flexWrap: "wrap" }}>
            <select
              className={styles.field}
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              aria-label="Category"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <Button type="submit" variant="primary" disabled={!incorrect.trim() || !correct.trim()}>
              Save mistake
            </Button>
          </div>
        </form>
      </Card>

      <Card title={`Logged mistakes (${mistakes.length})`}>
        {mistakes.length === 0 ? (
          <p className="muted">Nothing logged yet.</p>
        ) : (
          <div className="stack">
            {mistakes.map((m) => (
              <div key={m.id} className={styles.tile}>
                <div className={styles.tileRow}>
                  <div>
                    <div style={{ textDecoration: "line-through", color: "var(--danger)" }}>
                      {m.incorrect}
                    </div>
                    <div style={{ color: "var(--success)", fontWeight: 600 }}>{m.correct}</div>
                    {m.explanation && <div className="subtle">{m.explanation}</div>}
                  </div>
                  <div className="stack" style={{ alignItems: "flex-end", gap: "0.4rem" }}>
                    <Badge>{m.category}</Badge>
                    <Button size="sm" variant="danger" onClick={() => removeMistake(m.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
