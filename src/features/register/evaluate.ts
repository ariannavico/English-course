import { normalize } from "@/utils/normalization";
import { shuffle } from "@/utils/shuffle";
import type {
  RegisterAnswer,
  RegisterItem,
  RegisterLevel,
  RegisterSessionResult,
} from "./types";

export const REGISTER_LABEL: Record<RegisterLevel, string> = {
  informal: "Informal",
  neutral: "Neutral",
  formal: "Formal",
};

export const REGISTER_ORDER: RegisterLevel[] = ["informal", "neutral", "formal"];
const VALUE: Record<RegisterLevel, number> = { informal: 1, neutral: 2, formal: 3 };

/** Words/phrases that signal an informal, chatty register. */
const INFORMAL_WORDS = [
  "hi", "hey", "hiya", "thanks", "cheers", "fancy", "wanna", "gonna", "gotta",
  "yeah", "yep", "ok", "okay", "stuff", "guys", "loads", "no worries", "btw",
  "ping", "cool", "awesome", "mate", "a bit", "see ya", "catch up", "chat soon",
];
/** Words/phrases that signal a formal register. */
const FORMAL_WORDS = [
  "dear", "to whom it may concern", "i am writing", "i would be grateful",
  "i would appreciate", "would you be able", "could you please", "please could you",
  "with reference to", "regarding", "further to", "kind regards", "yours sincerely",
  "yours faithfully", "best regards", "i would like to request", "request",
  "require", "apologise", "apologize", "assistance", "furthermore", "therefore",
  "nevertheless", "at your earliest convenience", "please find", "should you",
];

function countPhrases(haystack: string, phrases: string[]): string[] {
  const hits: string[] = [];
  for (const p of phrases) {
    const re = new RegExp(`\\b${p.replace(/\s+/g, "\\s+")}\\b`, "i");
    if (re.test(haystack)) hits.push(p);
  }
  return hits;
}

export interface RegisterSignals {
  level: RegisterLevel;
  informalHits: string[];
  formalHits: string[];
  contractions: number;
  exclamations: number;
  hasEmoji: boolean;
  wordCount: number;
}

/**
 * Read the register of a piece of writing from its markers. Formal writing has
 * formal phrases and no informal tics at all; informal writing piles up
 * contractions, casual words, exclamations and emoji; everything in between
 * reads neutral.
 */
export function detectRegister(input: string): RegisterSignals {
  const norm = normalize(input);
  const wordCount = norm ? norm.split(" ").filter(Boolean).length : 0;

  const informalHits = countPhrases(norm, INFORMAL_WORDS);
  const formalHits = countPhrases(norm, FORMAL_WORDS);
  // Whitelist real contractions so possessives ("a day's leave") don't count.
  const contractions = (
    norm.match(
      /\b(?:i'm|i've|i'll|i'd|you're|you've|you'll|you'd|we're|we've|we'll|we'd|they're|they've|they'll|they'd|he's|she's|it's|that's|there's|what's|who's|here's|isn't|aren't|wasn't|weren't|don't|doesn't|didn't|won't|wouldn't|can't|couldn't|shouldn't|mustn't|haven't|hasn't|hadn't|let's)\b/g,
    ) ?? []
  ).length;
  const exclamations = (input.match(/!/g) ?? []).length;
  const hasEmoji = /\p{Extended_Pictographic}/u.test(input);

  const informalScore =
    informalHits.length + contractions + Math.min(exclamations, 3) + (hasEmoji ? 1 : 0);
  const formalScore = formalHits.length;

  let level: RegisterLevel;
  if (formalScore >= 2 && contractions === 0 && informalHits.length === 0 && exclamations === 0 && !hasEmoji) {
    level = "formal";
  } else if (informalScore >= 3 && formalScore === 0) {
    level = "informal";
  } else {
    level = "neutral";
  }

  return { level, informalHits, formalHits, contractions, exclamations, hasEmoji, wordCount };
}

/** 0..100 for how close the detected register is to the target (with a short-answer floor). */
export function scoreAgainstTarget(detected: RegisterLevel, target: RegisterLevel, wordCount: number): number {
  const distance = Math.abs(VALUE[detected] - VALUE[target]);
  const base = distance === 0 ? 100 : distance === 1 ? 55 : 20;
  return wordCount < 4 ? Math.min(base, 35) : base;
}

/** Evaluate one attempt against an item's target register. */
export function evaluateRegister(input: string, item: RegisterItem): { signals: RegisterSignals; score: number } {
  const signals = detectRegister(input);
  return { signals, score: scoreAgainstTarget(signals.level, item.target, signals.wordCount) };
}

/** A balanced, shuffled session (all items — the set is already 2 per register). */
export function sampleSession(items: RegisterItem[]): RegisterItem[] {
  return shuffle(items);
}

/** Roll up a finished session, including whether the learner leans formal or casual. */
export function scoreSession(answers: RegisterAnswer[]): RegisterSessionResult {
  const total = answers.length;
  const hits = answers.filter((a) => a.detected === a.target).length;
  const score = total ? Math.round(answers.reduce((s, a) => s + a.score, 0) / total) : 0;

  const bias = answers.reduce((s, a) => s + (VALUE[a.detected] - VALUE[a.target]), 0);
  const lean = bias >= 2 ? "formal" : bias <= -2 ? "casual" : "balanced";

  return { score, hits, total, lean };
}
