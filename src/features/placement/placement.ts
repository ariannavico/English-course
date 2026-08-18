import type { Band } from "@/services/skillProfile/SkillProfileService";
import type { PlacementAnswer, PlacementLevel, PlacementResult, RoutingPlan } from "./types";

/** Tier order, low → high. */
export const PLACEMENT_LEVELS: PlacementLevel[] = ["A2", "A2+", "B1", "B1+", "B2"];
const VALUE: Record<PlacementLevel, number> = { A2: 1, "A2+": 2, B1: 3, "B1+": 4, B2: 5 };

/** A tier is "passed" when the learner got at least half its items right. */
const PASS = 0.5;

/**
 * Place a learner from their per-item results. We climb the tiers from the
 * bottom: you place at the highest tier you can still handle, and one hard item
 * you fail doesn't drag you below the level you've clearly mastered. This suits
 * PLACEMENT better than a flat weighted score, which would punish a solid B1 for
 * (correctly) missing the B2 items.
 */
export function computePlacement(answers: PlacementAnswer[]): PlacementResult {
  const tierAccuracy = PLACEMENT_LEVELS.map((level) => {
    const items = answers.filter((a) => a.level === level);
    const answered = items.length;
    const accuracy = answered ? items.filter((a) => a.correct).length / answered : 0;
    return { level, accuracy, answered };
  }).filter((t) => t.answered > 0);

  // Climb from the lowest present tier while each is passed; stop at the first miss.
  let passedValue = 0;
  for (const t of tierAccuracy) {
    if (t.accuracy >= PASS) passedValue = VALUE[t.level];
    else break;
  }

  const band = valueToBand(passedValue);
  const correct = answers.filter((a) => a.correct).length;
  return { band, correct, total: answers.length, tierAccuracy };
}

/** Passed-tier value (0..5) → placement band. 0/1 both floor to A2. */
function valueToBand(value: number): Band {
  if (value >= 5) return "B2";
  if (value >= 4) return "B1+";
  if (value >= 3) return "B1";
  if (value >= 2) return "A2+";
  return "A2";
}

/**
 * Turn a placement band into a concrete starting plan: where to begin, and the
 * two or three next actions that fit that level. This is the "routing" — the
 * point of the whole exercise is that the learner leaves with a first thing to do.
 */
export function buildRoutingPlan(band: PlacementLevel): RoutingPlan {
  return { band, ...PLANS[band] };
}

const PLANS: Record<PlacementLevel, Omit<RoutingPlan, "band">> = {
  A2: {
    headline: "Let's build a solid base.",
    blurb:
      "You've got some English already — now we lock in the everyday foundations before pushing further. Little and often is the way.",
    steps: [
      { emoji: "📖", title: "Start with the basics", desc: "Work through the early chapters at your own pace.", to: "/chapters/chapter-01" },
      { emoji: "⚡", title: "Quick Practice", desc: "Short mixed sets that keep the core fresh.", to: "/practice" },
      { emoji: "🎯", title: "Try an easy mission", desc: "Handle a simple real situation — the wrong dish at a restaurant.", to: "/missions/mission-restaurant" },
    ],
  },
  "A2+": {
    headline: "You're on the way — time to use it.",
    blurb:
      "The basics are mostly there. Now we start turning knowledge into use, with a bit of grammar tidying along the way.",
    steps: [
      { emoji: "🎯", title: "Do a mission", desc: "Put your English to work in a real situation.", to: "/missions" },
      { emoji: "🧩", title: "Verb Choice Lab", desc: "Build the instinct for the right everyday verb.", to: "/verb-lab" },
      { emoji: "⚡", title: "Quick Practice", desc: "Firm up the grammar that's still shaky.", to: "/practice" },
    ],
  },
  B1: {
    headline: "Solid B1 — let's bridge toward B2.",
    blurb:
      "You can handle the basics well. The next jump is producing more, and getting the everyday verb and word choices right.",
    steps: [
      { emoji: "🎯", title: "Missions", desc: "Handle richer situations that change as you go.", to: "/missions" },
      { emoji: "🧩", title: "Verb Choice Lab", desc: "Nail bring/take, make/do, get and the rest.", to: "/verb-lab" },
      { emoji: "🧠", title: "Fix your weaknesses", desc: "Target the mistakes you actually make.", to: "/weaknesses" },
    ],
  },
  "B1+": {
    headline: "Almost B2 — let's close the gap.",
    blurb:
      "You're close. What moves you up now is fluency, arguing a point, and sounding natural under a little pressure.",
    steps: [
      { emoji: "⚖️", title: "Build Your Case", desc: "Defend an opinion the B2 way: claim → reason → rebuttal.", to: "/argumentation" },
      { emoji: "⏱", title: "Fluency Mode", desc: "Beat the clock — train speed and spontaneity.", to: "/fluency" },
      { emoji: "🔤", title: "Get Around The Word", desc: "Never freeze when a word won't come.", to: "/paraphrase" },
    ],
  },
  B2: {
    headline: "You're operating at B2 — let's stretch it.",
    blurb:
      "Strong across the board. Keep the challenge high: argue, speak spontaneously, and check yourself against the readiness report.",
    steps: [
      { emoji: "⚖️", title: "Build Your Case", desc: "Sharpen your argumentation and counter-arguments.", to: "/argumentation" },
      { emoji: "⏱", title: "Fluency Mode", desc: "Push to the 90-second prompts.", to: "/fluency" },
      { emoji: "🎓", title: "B2 Assessment", desc: "Get a full readiness report across all skills.", to: "/assessment" },
    ],
  },
};
