import type { ArgumentPrompt } from "@/features/argumentation/types";

/**
 * Motions for "Build Your Case". Each supplies a natural model for all five
 * moves (claim → reason → evidence → counter → rebuttal) plus content cues a
 * strong answer tends to reach for. Motions are everyday B2 debate topics —
 * opinions the learner can actually hold and defend, not academic abstractions.
 */
export const argumentPrompts: ArgumentPrompt[] = [
  {
    id: "arg-remote-work",
    emoji: "🏠",
    motion: "Working from home is better than working in an office.",
    category: "work",
    level: "B2",
    stance: "Argue FOR",
    moves: {
      claim: { model: "In my view, working from home is clearly the better option for most people.", cues: ["home", "better"] },
      reason: { model: "This is mainly because it removes the daily commute and gives people control over their time.", cues: ["commute", "time"] },
      evidence: { model: "For example, studies have found that remote workers are often more productive and take fewer sick days.", cues: ["productive", "studies"] },
      counter: { model: "Admittedly, some people argue that working from home makes teams feel isolated and harder to manage.", cues: ["isolated", "team"] },
      rebuttal: { model: "However, a few video calls a week easily solve that, so the flexibility is well worth it.", cues: ["flexibility", "calls"] },
    },
  },
  {
    id: "arg-social-media",
    emoji: "📱",
    motion: "Social media does more harm than good.",
    category: "society",
    level: "B2",
    stance: "Argue FOR",
    moves: {
      claim: { model: "I'd argue that, on balance, social media does more harm than good.", cues: ["harm"] },
      reason: { model: "The main reason is that it is designed to be addictive and rewards outrage over honesty.", cues: ["addictive", "attention"] },
      evidence: { model: "For instance, research links heavy use among teenagers to rising anxiety and poor sleep.", cues: ["teenagers", "anxiety"] },
      counter: { model: "Of course, it's true that these platforms help people stay in touch across the world.", cues: ["connect", "friends"] },
      rebuttal: { model: "Nevertheless, staying connected doesn't excuse the damage done to mental health and public debate.", cues: ["mental health"] },
    },
  },
  {
    id: "arg-free-uni",
    emoji: "🎓",
    motion: "University education should be free for everyone.",
    category: "education",
    level: "B2+",
    stance: "Argue FOR",
    moves: {
      claim: { model: "Personally, I'm convinced that university should be free for anyone who qualifies.", cues: ["free", "everyone"] },
      reason: { model: "This is because a person's education should depend on their ability, not their family's income.", cues: ["income", "ability"] },
      evidence: { model: "Take countries like Germany, where tuition is free and universities remain world-class.", cues: ["germany", "tuition"] },
      counter: { model: "Granted, critics point out that free tuition is expensive and someone has to pay for it.", cues: ["expensive", "taxes"] },
      rebuttal: { model: "However, a better-educated population pays for itself through higher wages and stronger economies.", cues: ["economy", "wages"] },
    },
  },
  {
    id: "arg-cars-cities",
    emoji: "🚗",
    motion: "City centres should be closed to private cars.",
    category: "environment",
    level: "B2",
    stance: "Argue FOR",
    moves: {
      claim: { model: "In my opinion, banning private cars from city centres is the right thing to do.", cues: ["ban", "centre"] },
      reason: { model: "This is because cars cause most of the air pollution and noise that make cities unpleasant.", cues: ["pollution", "noise"] },
      evidence: { model: "For example, when Paris limited traffic along the Seine, air quality improved noticeably.", cues: ["paris", "air"] },
      counter: { model: "Admittedly, some might argue that this is unfair to people who rely on their cars to get around.", cues: ["unfair", "rely"] },
      rebuttal: { model: "That said, good public transport and cycle lanes give everyone a workable alternative.", cues: ["transport", "cycling"] },
    },
  },
  {
    id: "arg-english-global",
    emoji: "🌍",
    motion: "Everyone should learn English as a global language.",
    category: "language",
    level: "B1+",
    stance: "Argue FOR",
    moves: {
      claim: { model: "I believe learning English is genuinely worthwhile for almost everyone today.", cues: ["worthwhile"] },
      reason: { model: "The reason is that it has become the common language of business, science and travel.", cues: ["business", "travel"] },
      evidence: { model: "For instance, most international research and airline communication happen in English.", cues: ["research", "international"] },
      counter: { model: "It's true that pushing one language can threaten smaller local languages.", cues: ["local", "threaten"] },
      rebuttal: { model: "However, learning English doesn't mean abandoning your own — most people simply speak both.", cues: ["both", "bilingual"] },
    },
  },
  {
    id: "arg-four-day-week",
    emoji: "📅",
    motion: "Companies should move to a four-day working week.",
    category: "work",
    level: "B2",
    stance: "Argue FOR",
    moves: {
      claim: { model: "I'd argue that a four-day week is an idea whose time has come.", cues: ["four-day"] },
      reason: { model: "This is because people who are well rested get more done in less time.", cues: ["rested", "productive"] },
      evidence: { model: "For example, trials in Iceland kept output steady while workers reported far less stress.", cues: ["iceland", "trial"] },
      counter: { model: "Of course, some businesses argue that they simply can't cover the same hours with less staff.", cues: ["hours", "staff"] },
      rebuttal: { model: "Nevertheless, the trials suggest that smarter working, not longer hours, is what really matters.", cues: ["smarter"] },
    },
  },
  {
    id: "arg-zoos",
    emoji: "🦁",
    motion: "Keeping animals in zoos can no longer be justified.",
    category: "ethics",
    level: "B2+",
    stance: "Argue FOR",
    moves: {
      claim: { model: "To my mind, keeping wild animals in zoos is increasingly hard to justify.", cues: ["wild", "justify"] },
      reason: { model: "This is because even the best enclosures can't reproduce the space and freedom of the wild.", cues: ["enclosure", "freedom"] },
      evidence: { model: "For instance, large animals like elephants often develop health problems in captivity.", cues: ["elephants", "captivity"] },
      counter: { model: "Admittedly, supporters argue that zoos protect endangered species and fund conservation.", cues: ["conservation", "endangered"] },
      rebuttal: { model: "However, that work could be done far better in reserves and protected habitats instead.", cues: ["reserves", "habitat"] },
    },
  },
  {
    id: "arg-homework",
    emoji: "📚",
    motion: "Schools should stop setting homework for young children.",
    category: "education",
    level: "B1+",
    stance: "Argue FOR",
    moves: {
      claim: { model: "In my view, young children shouldn't be given homework at all.", cues: ["children", "homework"] },
      reason: { model: "This is because they learn far more from play, rest and time with their families.", cues: ["play", "family"] },
      evidence: { model: "For example, Finland sets very little homework yet gets excellent results.", cues: ["finland", "results"] },
      counter: { model: "It could be argued that homework teaches discipline and good study habits early on.", cues: ["discipline", "habits"] },
      rebuttal: { model: "That said, those habits can be built at school, without eating into a child's free time.", cues: ["free time"] },
    },
  },
];

export function getArgumentPrompt(id: string): ArgumentPrompt | undefined {
  return argumentPrompts.find((p) => p.id === id);
}
