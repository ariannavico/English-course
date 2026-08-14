import type { ExampleSentence as ExampleSentenceType } from "@/types";
import { useProgress } from "@/hooks/useProgress";
import styles from "./learning.module.css";

/** Renders one example, highlighting focus words and (optionally) the Italian gloss. */
export function ExampleSentence({ example }: { example: ExampleSentenceType }) {
  const { settings } = useProgress();
  return (
    <div className={styles.example}>
      <div className={styles.exampleEn}>
        {highlight(example.english, example.highlightedWords)}
      </div>
      {settings.showItalian && example.italian && (
        <div className={styles.exampleIt}>{example.italian}</div>
      )}
    </div>
  );
}

/** Wrap any highlighted words in a styled span. Case-insensitive, word-ish. */
function highlight(text: string, words?: string[]) {
  if (!words || words.length === 0) return text;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(re);
  return parts.map((part, i) =>
    words.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className={styles.hl}>
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
