import type { MicroLesson } from "@/features/microLessons/types";

/** Seed micro-lessons (spec §42). Each solves one confusion and reuses existing exercises. */
export const microLessons: MicroLesson[] = [
  {
    id: "make-vs-do",
    emoji: "🔨",
    title: "MAKE vs DO",
    problem: "You're unsure whether to use make or do.",
    minutes: 3,
    addressesTags: ["make", "do"],
    relatedUniverse: "make",
    keyRule: "MAKE = produce/create a result. DO = perform an activity or task.",
    explanation: [
      {
        text: "Start from the core idea: MAKE creates something new; DO carries out an activity.",
        examples: ["make a cake (you produce it)", "do your homework (you perform it)"],
      },
      {
        text: "Most tricky cases are fixed collocations — learn them as chunks, not rules.",
        examples: ["make: a decision, a mistake, friends, money, noise", "do: the shopping, the washing-up, your best, exercise, a course"],
      },
      {
        text: "Italian 'fare' covers both, so trust the collocation, not the translation.",
        examples: ["“fare i compiti” → do your homework (NOT make)"],
      },
    ],
    practiceExerciseIds: ["ex-make-vs-do-1", "ex-do-vs-make-1", "ex-rev2-domake-1"],
  },
  {
    id: "say-vs-tell",
    emoji: "💬",
    title: "SAY vs TELL",
    problem: "You mix up say and tell.",
    minutes: 3,
    addressesTags: ["tell", "say"],
    keyRule: "TELL needs a person (tell me). SAY doesn't (say something).",
    explanation: [
      {
        text: "TELL almost always has a person right after it — you tell SOMEONE something.",
        examples: ["Tell me the truth.", "She told us about her trip."],
      },
      {
        text: "SAY focuses on the words, not the listener. If you name the listener, use 'say to'.",
        examples: ["He said hello.", "What did you say (to her)?"],
      },
      {
        text: "So the classic error 'He said me…' becomes 'He told me…'.",
        examples: ["✗ He said me his name.  ✓ He told me his name."],
      },
    ],
    practiceExerciseIds: ["ex-say-vs-tell-1", "ex-tell-vs-say-1", "ex-rev2-tell-say-1"],
  },
  {
    id: "take-vs-bring",
    emoji: "🔄",
    title: "TAKE vs BRING",
    problem: "You can't decide between take and bring.",
    minutes: 2,
    addressesTags: ["take", "bring"],
    relatedUniverse: "take",
    keyRule: "BRING = towards here / the listener. TAKE = away from here.",
    explanation: [
      {
        text: "It's all about direction relative to where you (or the listener) are.",
        examples: ["Bring it here. (towards me)", "Take it there. (away from me)"],
      },
      {
        text: "When you go to someone, you BRING; when you leave with something, you TAKE.",
        examples: ["I'll bring dessert to your party.", "Don't forget to take your umbrella (with you)."],
      },
    ],
    practiceExerciseIds: ["ex-take-verbchoice-1", "ex-rev1-verbchoice-1"],
  },
  {
    id: "present-perfect-vs-past",
    emoji: "⏳",
    title: "HAVE BEEN vs WENT",
    problem: "You confuse the present perfect and the past simple.",
    minutes: 4,
    addressesTags: ["present-perfect", "past-simple"],
    keyRule: "Finished time (yesterday, last week) → past simple. Open/relevant time → present perfect.",
    explanation: [
      {
        text: "Ask one question: is there a finished past time word? If yes, use the past simple.",
        examples: ["I saw him yesterday. (finished time)", "I have seen him. (no time / it still matters)"],
      },
      {
        text: "Italian uses the passato prossimo for both, which is why 'I have seen him yesterday' feels right — but it's wrong in English.",
        examples: ["✗ I have gone to Rome last year.  ✓ I went to Rome last year."],
      },
      {
        text: "Present perfect shines for experience and recent results.",
        examples: ["Have you ever been to Japan?", "I've just finished."],
      },
    ],
    practiceExerciseIds: ["ex-ch13-vs-past-1", "ex-ch13-mixed-1", "ex-rev3-pp-past-1"],
  },
  {
    id: "for-vs-since",
    emoji: "📅",
    title: "FOR vs SINCE",
    problem: "You're unsure when to use for or since.",
    minutes: 2,
    addressesTags: ["for-since"],
    keyRule: "FOR + a period of time. SINCE + a starting point.",
    explanation: [
      {
        text: "FOR measures how long (a length of time).",
        examples: ["for two years", "for ten minutes", "for a long time"],
      },
      {
        text: "SINCE marks when it started (a point in time).",
        examples: ["since 2020", "since Monday", "since I was a child"],
      },
    ],
    practiceExerciseIds: ["ex-ch13-forsince-1", "ex-rev3-forsince-1"],
  },
  {
    id: "used-to",
    emoji: "🕰",
    title: "USED TO (past habits)",
    problem: "You misuse 'used to' for past habits.",
    minutes: 3,
    addressesTags: ["used-to"],
    keyRule: "'used to + base form' = a past habit or state that is no longer true. Past only.",
    explanation: [
      {
        text: "Use 'used to' for things that were true in the past but aren't now.",
        examples: ["I used to smoke. (I don't now)", "There used to be a cinema here."],
      },
      {
        text: "For a PRESENT habit, just use the present simple — 'used to' is only for the past.",
        examples: ["✗ I use to go to the gym on Mondays.  ✓ I go to the gym on Mondays."],
      },
    ],
    practiceExerciseIds: ["ex-use-usedto-1", "ex-rev2-usedto-1"],
  },
  {
    id: "have-vs-get",
    emoji: "🤲",
    title: "HAVE vs GET",
    problem: "You mix up have and get.",
    minutes: 3,
    addressesTags: ["have", "get"],
    relatedUniverse: "have",
    keyRule: "GET = the action of obtaining. HAVE = the state of possessing. First you get it, then you have it.",
    explanation: [
      {
        text: "GET is the moment something comes to you; HAVE is owning it afterwards.",
        examples: ["I got a new phone yesterday. (the action)", "I have a new phone. (the state now)"],
      },
      {
        text: "GET also means 'become' before an adjective — a change of state, never HAVE.",
        examples: ["It's getting cold. (NOT it's having cold)", "I got tired."],
      },
      {
        text: "For food and drink, English uses HAVE, not GET or TAKE.",
        examples: ["I'll have a coffee.", "We had lunch at one."],
      },
    ],
    practiceExerciseIds: ["ex-have-vs-get-1", "ex-get-vs-take-1", "ex-have-collocation-1"],
  },
  {
    id: "come-vs-go",
    emoji: "↔️",
    title: "COME vs GO",
    problem: "You can't decide between come and go.",
    minutes: 3,
    addressesTags: ["come", "go"],
    relatedUniverse: "come",
    keyRule: "COME = towards the speaker or the listener. GO = away from here to somewhere else.",
    explanation: [
      {
        text: "It's about direction. If the movement is towards the person you're talking to, use COME.",
        examples: ["Can I come to your place? (towards you)", "I'm going to the shops. (away from here)"],
      },
      {
        text: "Italian 'venire/andare' don't map one-to-one: when you join the listener, English says COME.",
        examples: ["“Are you coming to the party?” “Yes, I'll come.” (NOT I'll go)"],
      },
      {
        text: "GO often marks a change to a worse state, too.",
        examples: ["The milk has gone off.", "The screen went black."],
      },
    ],
    practiceExerciseIds: ["ex-come-vs-go-1", "ex-go-mixed-1"],
  },
  {
    id: "will-vs-going-to",
    emoji: "🔮",
    title: "WILL vs GOING TO",
    problem: "You're unsure whether to use will or going to for the future.",
    minutes: 4,
    addressesTags: ["will", "going-to", "future"],
    keyRule: "'going to' = a plan already made, or evidence you can see now. 'will' = a decision as you speak, or a prediction.",
    explanation: [
      {
        text: "Use 'going to' when the intention existed before you spoke — the plan is already there.",
        examples: ["We're going to paint the kitchen this weekend. (decided already)"],
      },
      {
        text: "Use 'will' for a decision made at the moment of speaking, offers and promises.",
        examples: ["“The phone's ringing.” “I'll get it.” (decided now)", "I'll help you, I promise."],
      },
      {
        text: "For predictions: 'going to' when there's evidence now; 'will' for a general belief.",
        examples: ["Look at those clouds — it's going to rain. (evidence)", "I think it will rain tomorrow. (belief)"],
      },
    ],
    practiceExerciseIds: ["ex-ch6-willvsgoing-1", "ex-rev2-future-1", "ex-ch6-translation-1"],
  },
];

const byId = new Map(microLessons.map((l) => [l.id, l]));
export const getMicroLesson = (id: string): MicroLesson | undefined => byId.get(id);

/**
 * Loosely match free-text skill labels (e.g. from mission struggles like
 * "present perfect") to the micro-lessons that address them. Used to close the
 * loop in the mission Reflect step (spec §41).
 */
export function microLessonsForSkills(skills: string[]): MicroLesson[] {
  const hay = skills.join(" ").toLowerCase();
  const matched = microLessons.filter((l) =>
    l.addressesTags.some((t) => hay.includes(t.replace(/-/g, " "))),
  );
  return [...new Set(matched)];
}
