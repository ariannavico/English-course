import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";
import { chapters } from "@/data";
import { missions as missionList } from "@/data/missions";
import { useProgress } from "@/hooks/useProgress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";
import { useMissions } from "@/features/missions/useMissions";
import {
  fluencyService,
  paraphraseService,
  argumentationService,
  assessmentService,
  placementService,
  socialService,
  registerService,
  writingService,
} from "@/services";
import { buildRoutingPlan } from "@/features/placement/placement";
import styles from "./home.module.css";

/** "Best 82% · 3 sessions" once a practice mode has been used, else nothing. */
function bestMeta(p: { sessions: number; bestScore: number }): string | undefined {
  if (p.sessions <= 0) return undefined;
  return `Best ${p.bestScore}% · ${p.sessions} session${p.sessions === 1 ? "" : "s"}`;
}

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

  // Surface stored practice progress so the Home tiles reflect real activity.
  const fluency = fluencyService.load();
  const paraphrase = paraphraseService.load();
  const argument = argumentationService.load();
  const social = socialService.load();
  const register = registerService.load();
  const writing = writingService.load();
  const lastReport = assessmentService.loadLast();
  const placement = placementService.load();
  const plan = placement ? buildRoutingPlan(placement.band) : null;
  const firstStep = plan?.steps[0];

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
      desc: "Say it out loud in a real conversation (job interview mission).",
      to: "/missions/mission-job-interview",
    },
    {
      emoji: "⏱",
      title: "Fluency Mode",
      desc: "Beat the clock — 30/60/90s prompts that train speed and spontaneity.",
      to: "/fluency",
      meta: bestMeta(fluency),
    },
    {
      emoji: "👂",
      title: "Listen",
      desc: "Train your ear on natural English inside a situation.",
      to: "/missions/mission-missed-flight",
    },
    {
      emoji: "🧩",
      title: "Verb Choice Lab",
      desc: "bring / take / carry / get? Train the instinct for the right verb.",
      to: "/verb-lab",
    },
    {
      emoji: "🔤",
      title: "Get Around The Word",
      desc: "Can't find the word? Explain it another way — never freeze again.",
      to: "/paraphrase",
      meta: bestMeta(paraphrase),
    },
    {
      emoji: "⚖️",
      title: "Build Your Case",
      desc: "Defend an opinion the B2 way — claim, reason, evidence, counter, rebuttal.",
      to: "/argumentation",
      meta: bestMeta(argument),
    },
    {
      emoji: "💬",
      title: "Keep It Going",
      desc: "React, make small talk, take your turn, close gracefully — real conversation moves.",
      to: "/social",
      meta: bestMeta(social),
    },
    {
      emoji: "🎚️",
      title: "Register Lab",
      desc: "Say it three ways — nail the tone for a friend, a colleague, or a formal email.",
      to: "/register",
      meta: bestMeta(register),
    },
    {
      emoji: "✍️",
      title: "Writing Studio",
      desc: "Emails, reviews, opinions — write for the reader, hit the right tone and length.",
      to: "/writing",
      meta: writing.sessions > 0 ? `Best ${writing.bestScore}% · ${writing.sessions} piece${writing.sessions === 1 ? "" : "s"}` : undefined,
    },
    {
      emoji: "📖",
      title: "Story Mode",
      desc: "Live through 'New in London' — a story that recycles what you learn.",
      to: "/story",
    },
    {
      emoji: "🧠",
      title: "Fix Your Weaknesses",
      desc: "Targeted training based on the mistakes you actually make.",
      to: "/weaknesses",
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
    {
      emoji: "🎓",
      title: "B2 Assessment",
      desc: "A mixed check across all skills → your B2 readiness report.",
      to: "/assessment",
      meta: lastReport ? `Last: ${lastReport.report.band} · ${lastReport.report.overall}%` : undefined,
    },
  ];

  return (
    <div>
      <div className={styles.greeting}>
        <h1>What do you want to do today?</h1>
        <p>Do something in English. Make mistakes. Get better.</p>
      </div>

      {plan && firstStep ? (
        <Link to={firstStep.to} className={styles.plan}>
          <span className={styles.planIcon}>🧭</span>
          <span className={styles.planBody}>
            <span className={styles.planKicker}>
              Your plan · you placed <strong>{placement!.band}</strong>
            </span>
            <span className={styles.planText}>
              {plan.headline} Start with <strong>{firstStep.title}</strong>.
            </span>
          </span>
          <span className={styles.planGo}>Start →</span>
        </Link>
      ) : (
        <Link to="/placement" className={styles.plan}>
          <span className={styles.planIcon}>🧭</span>
          <span className={styles.planBody}>
            <span className={styles.planKicker}>New here?</span>
            <span className={styles.planText}>
              Take a 2-minute placement and get a plan built around your level.
            </span>
          </span>
          <span className={styles.planGo}>Find my level →</span>
        </Link>
      )}

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
