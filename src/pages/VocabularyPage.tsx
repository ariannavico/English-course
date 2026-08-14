import { useMemo, useState } from "react";
import { Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { VocabularyCard } from "@/components/learning/VocabularyCard";
import { vocabulary } from "@/data";
import styles from "./pages.module.css";

export function VocabularyPage() {
  const [topic, setTopic] = useState("all");

  const topics = useMemo(
    () => ["all", ...Array.from(new Set(vocabulary.map((v) => v.topic))).sort()],
    [],
  );
  const items = vocabulary.filter((v) => topic === "all" || v.topic === topic);

  return (
    <div className="stack">
      <PageHeader title="Vocabulary" description="Words in context, linked to their verbs." />
      <div className={styles.toolbar}>
        <select
          className={styles.field}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          aria-label="Filter by topic"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t === "all" ? "All topics" : t}
            </option>
          ))}
        </select>
      </div>
      <Card>
        <div className="stack">
          {items.map((item) => (
            <VocabularyCard key={item.id} item={item} />
          ))}
        </div>
      </Card>
    </div>
  );
}
