import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";
import { chapters } from "@/data";
import { missions as missionList } from "@/data/missions";
import { useProgress } from "@/hooks/useProgress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";
import { useMissions } from "@/features/missions/useMissions";
import styles from "./home.module.css";

interface Tile {
  emoji: string;
  title: string;
  desc: string;
  to: string;
  meta?: string;
  hero?: boolean;
}

/**
 * The task-based Home (spec §3). It answers "What do you want to do today?" —
 * not "which chapter are you on". Chapters still exist, but as content behind
 * these actions, not the organising principle.
 */
export function HomePage() {
  const { progress } = useProgress();
  const { dueItems } = useSpacedRepetition();
  const { isCompleted } = useMissions();

  const todaysMission = missionList.find((m) => !isCompleted(m.id)) ?? missionList[0];
  const continueChapter =
    chapters.find((c) => progress.chapterProgress[c.id]?.started) ?? chapters[0];

  const tiles: Tile[] = [
    {
      emoji: "🎯",
      title: "Today's Mission",
      desc: `${todaysMission.emoji} ${todaysMission.situation}`,
      to: `/missions/${todaysMission.id}`,
      meta: "Handle a real situation",
      hero: true,
    },
    {
      emoji: "⚡",
      title: "Quick Practice",
      desc: "A fast, mixed 5–10 minute set built from your weak spots.",
      to: "/practice",
    },
    {
      emoji: "🗣",
      title: "Speak",
      desc: "Say it out loud in a real conversation and get feedback.",
      to: "/missions/mission-job-interview",
    },
    {
      emoji: "👂",
      title: "Listen",
      desc: "Train your ear on natural English inside a situation.",
      to: "/missions/mission-missed-flight",
    },
    {
      emoji: "🧠",
      title: "Fix Your Weaknesses",
      desc: "Targeted training based on the mistakes you actually make.",
      to: "/review",
    },
    {
      emoji: "🔥",
      title: "Challenge",
      desc: "A harder, mixed run — no hints. Test your fluency.",
      to: "/chapters/chapter-29",
    },
    {
      emoji: "🔄",
      title: "Review",
      desc:
        dueItems.length > 0
          ? `${dueItems.length} item${dueItems.length === 1 ? "" : "s"} due for smart review.`
          : "Smart spaced review of what you've learned.",
      to: "/review",
      meta: dueItems.length > 0 ? `${dueItems.length} due` : undefined,
    },
    {
      emoji: "📈",
      title: "My Progress",
      desc: "See what you've mastered and what's holding you back.",
      to: "/progress",
    },
  ];

  return (
    <div>
      <div className={styles.greeting}>
        <h1>What do you want to do today?</h1>
        <p>Do something in English. Make mistakes. Get better.</p>
      </div>

      <div className={styles.strip}>
        <Link to={`/chapters/${continueChapter.id}`} className={styles.stripItem}>
          <Icon name="book" size={18} />
          <span>
            <span className="subtle">Continue learning</span>
            <br />
            <strong>{continueChapter.title}</strong>
          </span>
        </Link>
        <Link to="/progress" className={styles.stripItem}>
          <Icon name="flame" size={18} />
          <span>
            <strong>{progress.streak}</strong> day streak · {missionList.length} missions available
          </span>
        </Link>
      </div>

      <div className={styles.grid}>
        {tiles.map((t) => (
          <Link
            key={t.title}
            to={t.to}
            className={`${styles.tile} ${t.hero ? styles.hero : ""}`}
          >
            <span className={styles.tileEmoji}>{t.emoji}</span>
            <span className={styles.tileTitle}>{t.title}</span>
            <span className={styles.tileDesc}>{t.desc}</span>
            {t.meta && <span className={styles.tileMeta}>{t.meta} →</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
