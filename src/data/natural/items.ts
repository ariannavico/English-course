import type { NaturalItem } from "@/features/natural/types";

/**
 * "Possible vs natural" items, three per trap type. The distractors are usually
 * grammatical (or near-grammatical) but not what a native says — the feedback
 * names exactly why.
 */
export const naturalItems: NaturalItem[] = [
  /* ---------------- literal translation from Italian ---------------- */
  {
    id: "nat-age",
    pattern: "literal-translation",
    emoji: "🎂",
    context: "Telling someone how old you are.",
    level: "B1",
    principle: "Age uses BE, not HAVE: “I'm 25.” Italian “ho 25 anni” leads you astray.",
    options: [
      { id: "be", best: true, text: "I'm 25.", feedback: "Exactly how a native says it — age takes BE." },
      { id: "have", text: "I have 25 years.", feedback: "A direct calque of “ho 25 anni”. Grammatical words, but wrong in English." },
      { id: "years", text: "I am 25 years.", feedback: "Half-way there — with a number you just say “I'm 25”, no “years”." },
      { id: "old", text: "I have 25 years old.", feedback: "Mixes both patterns; natives never use HAVE for age." },
    ],
  },
  {
    id: "nat-cold",
    pattern: "literal-translation",
    emoji: "🥶",
    context: "Saying you feel cold.",
    level: "B1",
    principle: "Feelings like cold/hot/hungry use BE: “I'm cold” — not HAVE (“ho freddo”).",
    options: [
      { id: "be", best: true, text: "I'm cold.", feedback: "The natural form — states of feeling take BE." },
      { id: "have", text: "I have cold.", feedback: "A calque of “ho freddo”; in English “have a cold” means you're ill." },
      { id: "make", text: "It makes me cold.", feedback: "Changes the meaning to something causing cold — not what you mean." },
      { id: "feel", text: "I feel me cold.", feedback: "“feel” doesn't take a reflexive here — just “I feel cold” or “I'm cold”." },
    ],
  },
  {
    id: "nat-price",
    pattern: "literal-translation",
    emoji: "🏷️",
    context: "Asking how much something costs.",
    level: "B1",
    principle: "The thing is the subject: “How much is it?” / “How much does it cost?” — not “how much do you cost?”.",
    options: [
      { id: "isit", best: true, text: "How much is it?", feedback: "The everyday natural question." },
      { id: "youcost", text: "How much do you cost?", feedback: "You're asking the shopkeeper their personal price! The thing costs, not the person." },
      { id: "price", text: "What price does it have?", feedback: "A calque of “che prezzo ha?”; understandable but no native says it." },
      { id: "costme", text: "How much does it cost to me?", feedback: "Drop “to me” — “How much does it cost?” is enough." },
    ],
  },

  /* ---------------- too formal / bookish ---------------- */
  {
    id: "nat-greet",
    pattern: "too-formal",
    emoji: "👋",
    context: "Greeting a friend you bump into.",
    level: "B1+",
    principle: "Everyday greetings are light. “How do you do?” is a formal introduction formula, not a casual hello.",
    options: [
      { id: "hows", best: true, text: "Hey, how's it going?", feedback: "Warm and natural between friends." },
      { id: "howdo", text: "Good day, how do you do?", feedback: "Grammatically fine but very formal/old-fashioned — odd with a friend." },
      { id: "health", text: "Greetings, how is your health?", feedback: "Sounds like a translation exercise, not a real greeting." },
      { id: "salut", text: "Salutations!", feedback: "Bookish to the point of sounding like a joke in casual speech." },
    ],
  },
  {
    id: "nat-repeat-what",
    pattern: "too-formal",
    emoji: "❓",
    context: "You didn't catch what a friend said and want them to repeat it.",
    level: "B1+",
    principle: "Casual clarification is short: “Sorry, what was that?” — not a formal request.",
    options: [
      { id: "what", best: true, text: "Sorry, what was that?", feedback: "Exactly what natives say to catch something they missed." },
      { id: "reiterate", text: "Could you kindly reiterate your previous statement?", feedback: "Wildly over-formal for a chat — it would sound sarcastic." },
      { id: "comprehend", text: "I did not comprehend. Please repeat.", feedback: "Stiff and translated-sounding; “I didn't catch that” is natural." },
      { id: "repeatme", text: "Repeat me, please.", feedback: "A calque — you don't “repeat someone”. Say “Could you say that again?”." },
    ],
  },
  {
    id: "nat-liked-film",
    pattern: "too-formal",
    emoji: "🎬",
    context: "Telling a friend you enjoyed a film.",
    level: "B2",
    principle: "Natural enthusiasm is plain: “I really liked it.” Ornate vocabulary sounds unnatural in speech.",
    options: [
      { id: "liked", best: true, text: "I really liked it.", feedback: "Simple and natural — how people actually talk." },
      { id: "agreeable", text: "I found it most agreeable.", feedback: "Grammatical but bookish; nobody says this about a film." },
      { id: "liking", text: "It was much to my liking.", feedback: "Very literary/dated for casual conversation." },
      { id: "enormously", text: "I appreciated it enormously.", feedback: "“appreciate” + “enormously” is overblown; “I really enjoyed it” fits." },
    ],
  },

  /* ---------------- redundancy ---------------- */
  {
    id: "nat-return-back",
    pattern: "redundancy",
    emoji: "↩️",
    context: "Telling someone you'll come back soon.",
    level: "B1+",
    principle: "“Return” already means “come back”, so “return back” doubles up. Natives just say one.",
    options: [
      { id: "back", best: true, text: "I'll be back soon.", feedback: "Clean and natural." },
      { id: "returnback", text: "I'll return back soon.", feedback: "“return” already includes “back” — the “back” is redundant." },
      { id: "returning", text: "I'll be returning back soon.", feedback: "Same redundancy, just longer." },
      { id: "again", text: "I'll come back again returning.", feedback: "Piles up three ways of saying the same thing." },
    ],
  },
  {
    id: "nat-repeat-again",
    pattern: "redundancy",
    emoji: "🔁",
    context: "Asking to hear something once more.",
    level: "B1+",
    principle: "“Repeat” = “say again”, so “repeat again” is redundant. Pick one.",
    options: [
      { id: "sayagain", best: true, text: "Could you say it again?", feedback: "Natural — “say again” is the everyday phrase." },
      { id: "repeatagain", text: "Could you repeat it again?", feedback: "“repeat” already means “again” — drop one of them." },
      { id: "rerepeat", text: "Could you re-repeat it?", feedback: "Not a word; the “re-” doubles the “repeat”." },
      { id: "onemore", text: "Could you repeat it one more again?", feedback: "Two redundancies stacked together." },
    ],
  },
  {
    id: "nat-advance-plan",
    pattern: "redundancy",
    emoji: "🗓️",
    context: "Saying you organised something ahead of time.",
    level: "B2",
    principle: "“In advance” and “beforehand” mean the same as “ahead” — don't stack them.",
    options: [
      { id: "advance", best: true, text: "We planned it in advance.", feedback: "Natural and complete." },
      { id: "ahead", text: "We planned ahead in advance.", feedback: "“ahead” and “in advance” say the same thing — pick one." },
      { id: "pre", text: "We pre-planned it beforehand.", feedback: "“pre-”, “planned”, and “beforehand” all repeat the idea." },
      { id: "before", text: "We planned it before in advance.", feedback: "“before” and “in advance” are redundant together." },
    ],
  },

  /* ---------------- word choice ---------------- */
  {
    id: "nat-watch-tv",
    pattern: "word-choice",
    emoji: "📺",
    context: "Saying what you did last night at home.",
    level: "B1",
    principle: "You WATCH TV (an activity over time), you don't “see” or “look at” it.",
    options: [
      { id: "watch", best: true, text: "I watched TV.", feedback: "The natural collocation — you watch TV." },
      { id: "see", text: "I saw the TV.", feedback: "“see the TV” = notice the object; for the activity it's “watch TV”." },
      { id: "lookat", text: "I looked at the television.", feedback: "“look at” is a quick glance, not watching programmes." },
      { id: "view", text: "I viewed television.", feedback: "“view” is formal/technical; nobody says it casually." },
    ],
  },
  {
    id: "nat-study-for",
    pattern: "word-choice",
    emoji: "📖",
    context: "Saying you have to prepare for an exam.",
    level: "B1+",
    principle: "You study FOR an exam. Dropping “for” (as in Italian “studiare l'esame”) changes the meaning.",
    options: [
      { id: "for", best: true, text: "I need to study for the exam.", feedback: "Natural — you study FOR the test you'll sit." },
      { id: "nofor", text: "I need to study the exam.", feedback: "This means studying the exam paper itself, not preparing for it." },
      { id: "dostudy", text: "I need to do study for the exam.", feedback: "“do study” isn't a phrase — just “study”." },
      { id: "mustto", text: "I must to study for the exam.", feedback: "“must” takes no “to”: “I must study” / “I need to study”." },
    ],
  },
  {
    id: "nat-worth-it",
    pattern: "word-choice",
    emoji: "💎",
    context: "Saying an effort was worthwhile.",
    level: "B2",
    principle: "The fixed phrase is “it's worth it.” The Italian “vale la pena” doesn't translate word-for-word.",
    options: [
      { id: "worthit", best: true, text: "It's worth it.", feedback: "The natural, idiomatic phrase." },
      { id: "vales", text: "It vales the pain.", feedback: "A word-for-word calque of “vale la pena” — not English at all." },
      { id: "worthpain", text: "It's worth the pain.", feedback: "Close, but “worth it” is the set phrase; “the pain” changes the meaning." },
      { id: "merits", text: "It merits it.", feedback: "“merit” is too formal here; “worth it” is what people say." },
    ],
  },
];

export function getNaturalItem(id: string): NaturalItem | undefined {
  return naturalItems.find((i) => i.id === id);
}
