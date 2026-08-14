import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { Verb } from "@/types";
import { Badge, Card, Tabs, type TabItem } from "@/components/ui";
import { getExercises, getPhrasalVerb, getVerb } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { ExerciseSession } from "@/components/exercises/ExerciseSession";
import { CollocationList } from "./CollocationList";
import { ExampleSentence } from "./ExampleSentence";
import { PhrasalVerbCard } from "./PhrasalVerbCard";
import styles from "./learning.module.css";

/**
 * The generic verb view. The SAME component renders TAKE (Tier 1, full tabbed
 * card) and any Tier-2 verb (condensed). Content lives entirely in data — this
 * component never hard-codes a verb (spec §4).
 */
export function VerbCard({ verb }: { verb: Verb }) {
  const { markVerbViewed, progress } = useProgress();

  useEffect(() => {
    markVerbViewed(verb.id);
  }, [verb.id, markVerbViewed]);

  const mastery = progress.verbProgress[verb.id]?.masteryScore ?? 0;

  const header = (
    <div className="stack" style={{ gap: "0.5rem" }}>
      <div className="row" style={{ flexWrap: "wrap" }}>
        <h1 style={{ margin: 0 }}>{verb.infinitive}</h1>
        <Badge tone="primary">Tier {verb.tier}</Badge>
        <Badge>{verb.cefrLevel}</Badge>
        {verb.pronunciation?.ipa && <span className="muted">{verb.pronunciation.ipa}</span>}
        <span className="subtle" style={{ marginLeft: "auto" }}>
          Mastery {mastery}%
        </span>
      </div>
      <Forms verb={verb} />
    </div>
  );

  return verb.tier === 1 ? (
    <div className="stack">
      <Card>{header}</Card>
      <Card padding>
        <Tabs items={tier1Tabs(verb)} />
      </Card>
    </div>
  ) : (
    <div className="stack">
      <Card>{header}</Card>
      <Card title="Meanings">
        <Meanings verb={verb} />
      </Card>
      {verb.collocations.length > 0 && (
        <Card title="Collocations">
          <CollocationList collocations={verb.collocations} />
        </Card>
      )}
      <Card title="Examples">
        <Examples verb={verb} />
      </Card>
      {verb.exercises.length > 0 && (
        <Card title="Practice">
          <ExerciseSession exercises={getExercises(verb.exercises)} />
        </Card>
      )}
    </div>
  );
}

/* ----------------------------- sub-views ----------------------------- */

function Forms({ verb }: { verb: Verb }) {
  const cells: [string, string][] = [
    ["Infinitive", verb.infinitive],
    ["3rd person", verb.thirdPerson],
    ["Past", verb.past],
    ["Past part.", verb.pastParticiple],
    ["-ing", verb.ingForm],
  ];
  return (
    <div className={styles.formsGrid}>
      {cells.map(([label, value]) => (
        <div key={label} className={styles.formCell}>
          <div className={styles.formLabel}>{label}</div>
          <div className={styles.formValue}>{value}</div>
        </div>
      ))}
    </div>
  );
}

function Meanings({ verb }: { verb: Verb }) {
  return (
    <div>
      {verb.meanings.map((m) => (
        <div key={m.id} className={styles.meaning}>
          <div className={styles.meaningHead}>
            <span className={styles.italian}>{m.italianMeaning}</span>
            <span className="muted">{m.englishExplanation}</span>
          </div>
          <div className={styles.context}>{m.context}</div>
          <ul style={{ marginTop: "0.4rem", marginBottom: 0 }}>
            {m.examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Examples({ verb }: { verb: Verb }) {
  return (
    <div className="stack" style={{ gap: "0.5rem" }}>
      {verb.examples.map((ex) => (
        <ExampleSentence key={ex.id} example={ex} />
      ))}
    </div>
  );
}

function Patterns({ verb }: { verb: Verb }) {
  return (
    <div className="stack">
      {verb.verbPatterns.map((p) => (
        <div key={p.id} className={styles.similar}>
          <code>{p.pattern}</code>
          <p className="muted" style={{ margin: "0.35rem 0" }}>
            {p.explanation}
          </p>
          <ul style={{ margin: 0 }}>
            {p.examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SimilarVerbs({ verb }: { verb: Verb }) {
  if (!verb.similarVerbs || verb.similarVerbs.length === 0)
    return <p className="muted">No comparisons yet.</p>;
  return (
    <div>
      {verb.similarVerbs.map((s) => {
        const other = getVerb(s.verbId);
        return (
          <div key={s.verbId} className={styles.similar}>
            <div className="row" style={{ flexWrap: "wrap" }}>
              <strong>
                {verb.infinitive} vs {other?.infinitive ?? s.verbId}
              </strong>
              {other && (
                <Link to={`/verbs/${other.id}`} className="subtle" style={{ marginLeft: "auto" }}>
                  open “{other.infinitive}”
                </Link>
              )}
            </div>
            <p className="muted" style={{ margin: "0.35rem 0" }}>
              {s.difference}
            </p>
            <ul style={{ margin: 0 }}>
              {s.examples.map((ex, i) => (
                <li key={i}>
                  <strong>{ex.correct}</strong> — <span className="muted">{ex.explanation}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function PhrasalVerbs({ verb }: { verb: Verb }) {
  const pvs = verb.phrasalVerbs.map(getPhrasalVerb).filter((p) => p != null);
  if (pvs.length === 0) return <p className="muted">No phrasal verbs yet.</p>;
  return (
    <div className="stack">
      {pvs.map((pv) => (
        <PhrasalVerbCard key={pv!.id} phrasalVerb={pv!} />
      ))}
    </div>
  );
}

/** The 8-section Tier-1 ladder (spec §38). */
function tier1Tabs(verb: Verb): TabItem[] {
  const tabs: TabItem[] = [
    { id: "meanings", label: "Meanings", content: <Meanings verb={verb} /> },
    { id: "examples", label: "Examples", content: <Examples verb={verb} /> },
    {
      id: "collocations",
      label: "Collocations",
      content: <CollocationList collocations={verb.collocations} />,
    },
    { id: "phrasal", label: "Phrasal verbs", content: <PhrasalVerbs verb={verb} /> },
    { id: "patterns", label: "Patterns", content: <Patterns verb={verb} /> },
    { id: "similar", label: "Similar verbs", content: <SimilarVerbs verb={verb} /> },
    {
      id: "practice",
      label: "Practice",
      content: <ExerciseSession exercises={getExercises(verb.exercises)} title={verb.infinitive} />,
    },
  ];
  return tabs;
}
