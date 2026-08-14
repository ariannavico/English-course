import type { VocabularyItem } from "@/types";
import { Badge } from "@/components/ui";
import { ExampleSentence } from "./ExampleSentence";
import styles from "./learning.module.css";

export function VocabularyCard({ item }: { item: VocabularyItem }) {
  return (
    <div className={styles.similar}>
      <div className={styles.pvHeader}>
        <span className={styles.pvPhrase}>{item.word}</span>
        <span className="subtle">{item.partOfSpeech}</span>
        <Badge tone="primary">{item.cefrLevel}</Badge>
        <Badge>{item.topic}</Badge>
      </div>
      <p style={{ margin: "0.4rem 0" }}>
        <span className={styles.italian}>{item.italianMeaning}</span>
        {item.englishDefinition && <span className="muted"> — {item.englishDefinition}</span>}
      </p>
      <div className="stack" style={{ gap: "0.4rem" }}>
        {item.examples.map((ex) => (
          <ExampleSentence key={ex.id} example={ex} />
        ))}
      </div>
    </div>
  );
}
