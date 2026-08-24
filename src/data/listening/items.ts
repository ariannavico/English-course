import type { ListeningItem } from "@/features/listening/types";

/**
 * Listening items on a difficulty ramp, three per level. Lines are spelled the
 * way they're said, so the Web Speech voice approximates the reduced forms at
 * the higher levels.
 */
export const listeningItems: ListeningItem[] = [
  /* ---------------- Level 1 — Clear ---------------- */
  {
    id: "lis-cinema",
    level: 1,
    emoji: "🎬",
    speaker: "A friend",
    line: "Do you want to come to the cinema tonight?",
    question: "What are they asking?",
    principle: "In careful speech every word is fully pronounced — a good place to build confidence.",
    options: [
      { id: "invite", best: true, text: "They're inviting you to the cinema.", feedback: "Exactly — a clear, full invitation." },
      { id: "time", text: "They're asking what time it is." },
      { id: "cancel", text: "They're cancelling your plans." },
      { id: "book", text: "They're talking about a book." },
    ],
  },
  {
    id: "lis-station",
    level: 1,
    emoji: "🚉",
    speaker: "A colleague",
    line: "I'll meet you at the station at six.",
    question: "Where and when will you meet?",
    principle: "Catch the key facts: place and time.",
    options: [
      { id: "st6", best: true, text: "At the station, at six.", feedback: "Correct — station, six o'clock." },
      { id: "ci8", text: "At the cinema, at eight." },
      { id: "ho6", text: "At home, at six." },
      { id: "st9", text: "At the station, at nine." },
    ],
  },
  {
    id: "lis-salt",
    level: 1,
    emoji: "🧂",
    speaker: "At dinner",
    line: "Could you pass me the salt, please?",
    question: "What do they want?",
    principle: "Short, polite requests are common — listen for the object.",
    options: [
      { id: "salt", best: true, text: "The salt.", feedback: "Yes — “pass me the salt”." },
      { id: "pepper", text: "The pepper." },
      { id: "menu", text: "The menu." },
      { id: "bill", text: "The bill." },
    ],
  },

  /* ---------------- Level 2 — Natural ---------------- */
  {
    id: "lis-weekend",
    level: 2,
    emoji: "📅",
    speaker: "A colleague",
    line: "What're you up to this weekend?",
    question: "What are they asking?",
    focus: { form: "What're you up to", meaning: "What are you doing / planning" },
    principle: "“What're” blends “what are” into one beat, and “up to” means “doing”.",
    options: [
      { id: "plans", best: true, text: "About your weekend plans.", feedback: "Right — “up to” = doing/planning." },
      { id: "work", text: "About your work targets." },
      { id: "money", text: "How much you spent." },
      { id: "climb", text: "Whether you climbed up something." },
    ],
  },
  {
    id: "lis-gotta-run",
    level: 2,
    emoji: "🏃",
    speaker: "A friend",
    line: "Sorry, I've gotta run — I'm late for work.",
    question: "Why are they leaving?",
    focus: { form: "gotta", meaning: "got to / have to" },
    principle: "“gotta” is “got to” (= have to) squeezed together in fast speech.",
    options: [
      { id: "late", best: true, text: "They're late for work.", feedback: "Yes — “gotta run” = have to hurry off." },
      { id: "exercise", text: "They're going for a run." },
      { id: "angry", text: "They're angry with you." },
      { id: "race", text: "They're in a running race." },
    ],
  },
  {
    id: "lis-cuppa",
    level: 2,
    emoji: "☕",
    speaker: "A host",
    line: "D'you fancy a cuppa?",
    question: "What are they offering?",
    focus: { form: "D'you fancy / cuppa", meaning: "Do you want / a cup of tea" },
    principle: "“D'you fancy…?” = “Do you want…?”, and “cuppa” = “cup of tea” (very British).",
    options: [
      { id: "tea", best: true, text: "A cup of tea.", feedback: "Spot on — “cuppa” is a cup of tea." },
      { id: "meal", text: "A full meal." },
      { id: "lift", text: "A lift home." },
      { id: "walk", text: "A walk outside." },
    ],
  },

  /* ---------------- Level 3 — Fast & reduced ---------------- */
  {
    id: "lis-gonna-coffee",
    level: 3,
    emoji: "🥤",
    speaker: "A colleague",
    line: "I'm gonna grab a coffee — d'ya want one?",
    question: "What are they offering?",
    focus: { form: "gonna / d'ya", meaning: "going to / do you" },
    principle: "“gonna” = “going to”, “d'ya” = “do you”. Both are everyday fast speech.",
    options: [
      { id: "getone", best: true, text: "To get you a coffee too.", feedback: "Yes — they'll grab you one as well." },
      { id: "already", text: "That they already had a coffee." },
      { id: "cantstay", text: "That they can't stay for coffee." },
      { id: "makeyou", text: "That you should make the coffee." },
    ],
  },
  {
    id: "lis-whatcha",
    level: 3,
    emoji: "💬",
    speaker: "An old friend",
    line: "Hey! Whatcha been up to lately?",
    question: "What are they asking?",
    focus: { form: "Whatcha", meaning: "What have you (been)" },
    principle: "“Whatcha” swallows “what have you” into one chunk — very common in casual speech.",
    options: [
      { id: "recent", best: true, text: "What you've been doing recently.", feedback: "Right — “Whatcha been up to” = what have you been doing." },
      { id: "watch", text: "What you're watching." },
      { id: "buy", text: "What you want to buy." },
      { id: "eat", text: "What you had to eat." },
    ],
  },
  {
    id: "lis-lemme-know",
    level: 3,
    emoji: "📍",
    speaker: "A friend",
    line: "Lemme know when ya get there, yeah?",
    question: "What do they want you to do?",
    focus: { form: "Lemme / ya", meaning: "Let me / you" },
    principle: "“Lemme” = “let me”, “ya” = “you”. Fast speech drops and blends sounds.",
    options: [
      { id: "tell", best: true, text: "Tell them once you've arrived.", feedback: "Yes — “lemme know when ya get there”." },
      { id: "leave", text: "Leave before they get there." },
      { id: "meet", text: "Meet them on the way." },
      { id: "wait", text: "Wait for them to arrive first." },
    ],
  },
];

export function getListeningItem(id: string): ListeningItem | undefined {
  return listeningItems.find((i) => i.id === id);
}
