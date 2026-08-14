import type { GrammarTopic } from "@/data";
import { Badge } from "@/components/ui";
import { ExampleSentence } from "./ExampleSentence";
import styles from "./learning.module.css";

/** Renders a grammar topic's explanation blocks with inline examples. */
export function GrammarExplanation({ topic }: { topic: GrammarTopic }) {
  return (
    <div>
      <div className="row" style={{ marginBottom: "0.5rem" }}>
        <h3 style={{ margin: 0 }}>{topic.title}</h3>
        <Badge tone="primary">{topic.cefrLevel}</Badge>
      </div>
      {topic.blocks.map((block, i) => (
        <div key={i} className={styles.grammarBlock}>
          {block.heading && <div className={styles.grammarHeading}>{block.heading}</div>}
          <p style={{ margin: 0 }}>{block.text}</p>
          {block.examples && (
            <div className="stack" style={{ gap: "0.4rem", marginTop: "0.5rem" }}>
              {block.examples.map((ex, j) => (
                <ExampleSentence
                  key={j}
                  example={{ id: `${topic.id}-b${i}-e${j}`, english: ex, difficulty: topic.cefrLevel }}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
