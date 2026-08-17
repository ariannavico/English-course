import { Link } from "react-router-dom";
import { Badge, Card, LinkButton } from "@/components/ui";
import type { Band, SkillDimension } from "@/services/skillProfile/SkillProfileService";
import { useSkillProfile } from "./useSkillProfile";
import styles from "./skillMap.module.css";

const BAND_TONE: Record<Band, "warning" | "primary" | "success"> = {
  A2: "warning", "A2+": "warning", B1: "primary", "B1+": "primary", B2: "success",
};
const FILL: Record<Band, string> = {
  A2: styles["f-a2"], "A2+": styles["f-a2p"], B1: styles["f-b1"], "B1+": styles["f-b1p"], B2: styles["f-b2"],
};

/** Where to go to improve each dimension. */
const CTA: Record<string, { to: string; label: string }> = {
  grammar: { to: "/weaknesses", label: "Fix weak grammar" },
  verb: { to: "/verb-lab", label: "Verb Choice Lab" },
  vocab: { to: "/vocabulary", label: "Vocabulary" },
  phrasal: { to: "/phrasal-verbs", label: "Phrasal verbs" },
  speaking: { to: "/missions", label: "Do a mission" },
  fluency: { to: "/fluency", label: "Fluency Mode" },
  paraphrase: { to: "/paraphrase", label: "Get around the word" },
  interaction: { to: "/story", label: "Story Mode" },
  listening: { to: "/story", label: "Listen in a story" },
};

/**
 * The B2 Skill Map (spec §22). One picture of the learner across every skill,
 * with the weakest dimension called out — far more useful than "hours studied".
 */
export function SkillMap() {
  const profile = useSkillProfile();

  if (!profile.hasData || !profile.overall) {
    return (
      <Card title="Your Skill Map">
        <p className="muted" style={{ marginTop: 0 }}>{profile.headline}</p>
        <div className="row" style={{ flexWrap: "wrap" }}>
          <LinkButton to="/practice" variant="primary">Quick practice</LinkButton>
          <LinkButton to="/missions">Try a mission</LinkButton>
        </div>
      </Card>
    );
  }

  const weakestKey = profile.dimensions
    .filter((d) => d.score != null)
    .sort((a, b) => (a.score as number) - (b.score as number))[0]?.key;

  return (
    <Card title="Your Skill Map">
      <div className="stack">
        <div className={styles.overall}>
          <span className={styles.overallBand}>{profile.overall.band}</span>
          <div className={styles.overallMeta}>
            <span className={styles.headline}>{profile.headline}</span>
            <span className={styles.disclaimer}>
              Internal indicator ({profile.overall.score}%), not a CEFR certification.
            </span>
          </div>
        </div>

        <div className={styles.rows}>
          {profile.dimensions.map((d) => (
            <Row key={d.key} d={d} weakest={d.key === weakestKey} />
          ))}
        </div>
      </div>
    </Card>
  );
}

function Row({ d, weakest }: { d: SkillDimension; weakest: boolean }) {
  const cta = CTA[d.key];
  return (
    <div className={styles.row}>
      <span className={styles.name}>
        {d.label}
        {weakest && d.score != null && <Badge tone="warning">focus</Badge>}
      </span>
      <span className={styles.right}>
        {d.band ? (
          <Badge tone={BAND_TONE[d.band]}>{d.band}</Badge>
        ) : (
          <span className={styles.attempts}>not measured</span>
        )}
      </span>

      {d.score != null ? (
        <div className={styles.bar}>
          <div className={`${styles.fill} ${d.band ? FILL[d.band] : ""}`} style={{ width: `${d.score}%` }} />
        </div>
      ) : (
        <span className={styles.empty}>
          {d.note} {cta && <Link to={cta.to} className={styles.cta}>Start →</Link>}
        </span>
      )}

      {d.score != null && (
        <>
          <span className={styles.attempts}>
            {d.score}% · {d.attempts} {d.attempts === 1 ? "sample" : "samples"}
          </span>
          {cta && (
            <Link to={cta.to} className={styles.cta} style={{ justifySelf: "end" }}>
              {cta.label} →
            </Link>
          )}
        </>
      )}
    </div>
  );
}
