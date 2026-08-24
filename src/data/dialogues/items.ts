import type { TalkItem } from "@/features/dialogues/types";

/**
 * Realistic dialogue items, three per disfluency type. The messiness — repairs,
 * cut-ins, fillers, backtracks — is written into the lines on purpose.
 */
export const dialogueItems: TalkItem[] = [
  /* ---------------- self-correction ---------------- */
  {
    id: "dlg-time",
    feature: "self-correction",
    emoji: "🕖",
    lines: [
      { speaker: "Sam", text: "We're meeting at seven — no wait, half seven." },
      { speaker: "You", text: "OK, got it." },
    ],
    question: "What time is the meeting?",
    focus: { marker: "no wait", meaning: "I'm correcting what I just said" },
    principle: "“No wait” / “I mean” replaces what came before — trust the second version, not the first.",
    options: [
      { id: "730", best: true, text: "7:30", feedback: "Right — Sam corrected “seven” to “half seven” (= 7:30)." },
      { id: "700", text: "7:00", feedback: "That's the version Sam took back with “no wait”." },
      { id: "630", text: "6:30" },
      { id: "800", text: "8:00" },
    ],
  },
  {
    id: "dlg-opinion",
    feature: "self-correction",
    emoji: "🤔",
    lines: [
      { speaker: "Alex", text: "The film? I loved it — well, I mean, it was OK. Watchable." },
    ],
    question: "How did Alex really feel about the film?",
    focus: { marker: "well, I mean", meaning: "walking back a strong statement" },
    principle: "“Well, I mean…” often downgrades what was just said — the honest opinion is the toned-down one.",
    options: [
      { id: "ok", best: true, text: "It was just OK.", feedback: "Yes — “well, I mean, it was OK” walks back “I loved it”." },
      { id: "loved", text: "They absolutely loved it.", feedback: "That's the first version Alex softened straight away." },
      { id: "hated", text: "They hated it." },
      { id: "scared", text: "It frightened them." },
    ],
  },
  {
    id: "dlg-exit",
    feature: "self-correction",
    emoji: "🛣️",
    lines: [
      { speaker: "Driver", text: "Take the second exit — sorry, the third. The third exit." },
    ],
    question: "Which exit should you take?",
    focus: { marker: "sorry, the third", meaning: "correcting a slip" },
    principle: "A quick “sorry, …” fixes a slip of the tongue — the word after it is the right one.",
    options: [
      { id: "3", best: true, text: "The third exit.", feedback: "Correct — “sorry, the third” overrides “second”." },
      { id: "2", text: "The second exit.", feedback: "That's the slip the driver corrected." },
      { id: "1", text: "The first exit." },
      { id: "4", text: "The fourth exit." },
    ],
  },

  /* ---------------- interruption ---------------- */
  {
    id: "dlg-friday",
    feature: "interruption",
    emoji: "🚗",
    lines: [
      { speaker: "Mia", text: "So the plan is we drive down on—" },
      { speaker: "Jo", text: "—Friday, right? That's what you said." },
      { speaker: "Mia", text: "Exactly." },
    ],
    question: "When are they driving down?",
    focus: { marker: "—Friday, right?", meaning: "Jo finishes Mia's sentence to confirm" },
    principle: "Listeners often finish or confirm your sentence. “right? / that's what you said” is agreement, not a new idea.",
    options: [
      { id: "fri", best: true, text: "On Friday.", feedback: "Yes — Jo completed the sentence and Mia confirmed with “Exactly”." },
      { id: "unsure", text: "They haven't decided yet.", feedback: "They have — Jo's cut-in confirmed Friday." },
      { id: "sat", text: "On Saturday." },
      { id: "sun", text: "On Sunday." },
    ],
  },
  {
    id: "dlg-booked",
    feature: "interruption",
    emoji: "✋",
    lines: [
      { speaker: "Ben", text: "I was thinking we could book the hall and then—" },
      { speaker: "Priya", text: "Sorry, can I stop you there? We've already booked it." },
    ],
    question: "What is Priya telling Ben?",
    focus: { marker: "can I stop you there?", meaning: "polite interruption to correct" },
    principle: "“Can I stop you there?” is a polite cut-in — usually because the listener has newer information.",
    options: [
      { id: "done", best: true, text: "The hall is already booked.", feedback: "Right — she interrupts to say it's done." },
      { id: "go", text: "He should keep going with the plan.", feedback: "The opposite — she's stopping him because it's handled." },
      { id: "agree", text: "She fully agrees with his plan." },
      { id: "cancel", text: "She wants to cancel everything." },
    ],
  },
  {
    id: "dlg-reassure",
    feature: "interruption",
    emoji: "😌",
    lines: [
      { speaker: "Tom", text: "I'm so sorry, the report's not quite—" },
      { speaker: "Boss", text: "Hey, don't worry — take your time. There's no rush." },
    ],
    question: "What is the boss saying?",
    focus: { marker: "don't worry — take your time", meaning: "cutting in to reassure" },
    principle: "An interruption isn't always a correction — here the boss cuts in to reassure, not to criticise.",
    options: [
      { id: "norush", best: true, text: "There's no rush — it's fine.", feedback: "Yes — the boss interrupts to put Tom at ease." },
      { id: "hurry", text: "Hurry up and finish it.", feedback: "The opposite of “take your time”." },
      { id: "late", text: "The report is unacceptably late." },
      { id: "redo", text: "Tom must start again." },
    ],
  },

  /* ---------------- hesitation & hedging ---------------- */
  {
    id: "dlg-colour",
    feature: "hesitation",
    emoji: "🎨",
    lines: [
      { speaker: "Nina", text: "It's, um, sort of… blue? Blue-ish green, I guess. Hard to say." },
    ],
    question: "What colour is it?",
    focus: { marker: "sort of / -ish / I guess", meaning: "the speaker isn't sure — it's approximate" },
    principle: "Fillers and hedges (sort of, -ish, I guess) signal uncertainty — take the answer as approximate, not exact.",
    options: [
      { id: "between", best: true, text: "Somewhere between blue and green.", feedback: "Right — all the hedging means she's unsure; it's blue-green-ish." },
      { id: "blue", text: "Definitely blue.", feedback: "The hedges (“sort of”, “-ish”, “I guess”) rule out “definitely”." },
      { id: "red", text: "Red." },
      { id: "clear", text: "She's certain about the colour." },
    ],
  },
  {
    id: "dlg-sevenish",
    feature: "hesitation",
    emoji: "⌛",
    lines: [
      { speaker: "Leo", text: "We'll get there around, you know, sevenish? Give or take." },
    ],
    question: "When will they roughly arrive?",
    focus: { marker: "-ish / around / give or take", meaning: "approximately, not exactly" },
    principle: "“around”, “-ish” and “give or take” all mean roughly — don't expect a precise time.",
    options: [
      { id: "about7", best: true, text: "About seven.", feedback: "Yes — “sevenish, give or take” = roughly seven." },
      { id: "exact7", text: "At exactly seven.", feedback: "“-ish” and “give or take” rule out exactness." },
      { id: "nine", text: "At nine." },
      { id: "six", text: "At six sharp." },
    ],
  },
  {
    id: "dlg-reliable",
    feature: "hesitation",
    emoji: "😬",
    lines: [
      { speaker: "Dana", text: "He's, well… how do I put this… not the most reliable, let's say." },
    ],
    question: "What is Dana hinting about him?",
    focus: { marker: "how do I put this / let's say", meaning: "choosing words carefully to soften criticism" },
    principle: "“How do I put this…” warns that a soft-sounding phrase is really a criticism.",
    options: [
      { id: "unreliable", best: true, text: "He's unreliable.", feedback: "Right — the careful wording softens a real criticism." },
      { id: "great", text: "He's very dependable.", feedback: "The hedging is hiding the opposite." },
      { id: "unsure", text: "She doesn't know him." },
      { id: "praise", text: "She's praising him." },
    ],
  },

  /* ---------------- false start ---------------- */
  {
    id: "dlg-decide",
    feature: "false-start",
    emoji: "🔀",
    lines: [
      { speaker: "Ravi", text: "We should just— actually, you know what, let's not decide this now." },
    ],
    question: "What does Ravi want to do?",
    focus: { marker: "actually, you know what", meaning: "changing direction mid-sentence" },
    principle: "“Actually / you know what” abandons the start of the sentence — the real point is what comes after.",
    options: [
      { id: "later", best: true, text: "Decide it later, not now.", feedback: "Yes — he drops “we should just…” and decides to wait." },
      { id: "now", text: "Decide it right now.", feedback: "That's the false start he abandoned." },
      { id: "vote", text: "Put it to a vote." },
      { id: "him", text: "Let him decide alone." },
    ],
  },
  {
    id: "dlg-contact",
    feature: "false-start",
    emoji: "📱",
    lines: [
      { speaker: "Kim", text: "I'll call— you know what, I'll just text her instead. Quicker." },
    ],
    question: "How will Kim contact her?",
    focus: { marker: "you know what, I'll just…", meaning: "a new decision replacing the first" },
    principle: "A false start plus “I'll just…” means the plan changed — go with the second choice.",
    options: [
      { id: "text", best: true, text: "By text.", feedback: "Right — Kim switches from calling to texting." },
      { id: "call", text: "By phone call.", feedback: "That's the abandoned first plan." },
      { id: "email", text: "By email." },
      { id: "visit", text: "In person." },
    ],
  },
  {
    id: "dlg-door",
    feature: "false-start",
    emoji: "🚪",
    lines: [
      { speaker: "Eve", text: "So first we— oh, hang on, did you lock the front door?" },
    ],
    question: "What is Eve suddenly worried about?",
    focus: { marker: "oh, hang on", meaning: "breaking off to raise a new concern" },
    principle: "“Hang on…” interrupts the speaker's own thought to check something more urgent.",
    options: [
      { id: "door", best: true, text: "Whether the door is locked.", feedback: "Yes — she breaks off her plan to ask about the door." },
      { id: "plan", text: "What to do first.", feedback: "She dropped that thought with “hang on”." },
      { id: "keys", text: "Where the keys are." },
      { id: "time", text: "What time it is." },
    ],
  },
];

export function getDialogueItem(id: string): TalkItem | undefined {
  return dialogueItems.find((i) => i.id === id);
}
