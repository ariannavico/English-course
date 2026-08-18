import type { WritingTask } from "@/features/writing/types";

/** Writing tasks (spec §33) across types and registers. Models are written to hit their target register and cover the key ideas. */
export const writingTasks: WritingTask[] = [
  {
    id: "wr-hotel-complaint",
    emoji: "🏨",
    type: "email",
    title: "Complaint email",
    brief: "Write a formal email of complaint to a hotel: your room was noisy all night and no one answered reception. Ask them to put it right.",
    situation: "Emailing a hotel manager you don't know.",
    targetRegister: "formal",
    minWords: 55,
    checklist: [
      "A formal opener (Dear…)",
      "Say what went wrong, clearly and calmly",
      "State what you'd like them to do",
      "A formal closing (Kind regards…)",
    ],
    keyElements: ["room", "noise", "reception", "refund"],
    usefulPhrases: ["I am writing to", "I would be grateful if", "I was disappointed to", "Kind regards"],
    modelAnswer:
      "Dear Sir or Madam, I am writing to complain about my stay in room 214 last weekend. There was constant noise from the street all night, and when I called reception nobody answered. As a result, I barely slept. I would be grateful if you could look into this and offer a partial refund. Kind regards, Alex Rossi.",
    notes: ["A complaint stays effective when it's calm and specific — facts first, request second."],
  },
  {
    id: "wr-cafe-review",
    emoji: "☕",
    type: "review",
    title: "Café review",
    brief: "Write a short online review of a café you visited. Mention the good and the not-so-good, and say whether you'd recommend it.",
    situation: "A public review other customers will read.",
    targetRegister: "neutral",
    minWords: 45,
    checklist: [
      "What was good",
      "What could be better",
      "A balanced overall verdict",
      "Whether you'd recommend it",
    ],
    keyElements: ["coffee", "staff", "recommend"],
    usefulPhrases: ["On the plus side", "The only downside", "Overall", "I'd recommend"],
    modelAnswer:
      "I visited last Saturday and had a lovely time. On the plus side, the coffee was excellent and the staff were really friendly. The only downside was that it got very busy, so we waited a while for a table. Overall, though, it's a great little spot and I'd definitely recommend it for a weekend brunch.",
    notes: ["Reviews read best when they're balanced — a downside makes the praise believable."],
  },
  {
    id: "wr-phones-opinion",
    emoji: "📱",
    type: "opinion",
    title: "Opinion paragraph",
    brief: "Write a short paragraph giving your view: should mobile phones be banned in schools? Give reasons and consider the other side.",
    situation: "A short written opinion, as in an exam task.",
    targetRegister: "neutral",
    minWords: 55,
    checklist: [
      "State your opinion clearly",
      "Give at least one reason with an example",
      "Acknowledge the other side",
      "A short conclusion",
    ],
    keyElements: ["phones", "school", "distraction", "however"],
    usefulPhrases: ["In my opinion", "One reason is that", "On the other hand", "To sum up"],
    modelAnswer:
      "In my opinion, phones should mostly be banned in schools. One reason is that they are a huge distraction: students check messages instead of listening, and this affects their results. On the other hand, phones can be useful for research and emergencies. However, I think the downsides outweigh the benefits during lessons. To sum up, a ban during class time, with some exceptions, seems the fairest solution.",
    notes: ["A B2 opinion isn't just your view — it weighs the other side before concluding."],
  },
  {
    id: "wr-trip-message",
    emoji: "🏔️",
    type: "message",
    title: "Invite a friend",
    brief: "Message a close friend inviting them on a weekend trip to the mountains. Say when, roughly what the plan is, and ask them to confirm.",
    situation: "A text to a close friend.",
    targetRegister: "informal",
    minWords: 30,
    checklist: [
      "A warm, casual opener",
      "The when and the plan",
      "Ask them to confirm",
    ],
    keyElements: ["weekend", "mountains", "let me know"],
    usefulPhrases: ["Fancy…?", "We're thinking of", "Let me know", "It'll be"],
    modelAnswer:
      "Hey! Fancy a weekend in the mountains next month? 😊 We're thinking of heading up on the Friday, doing a couple of hikes and just chilling. It'll be so good to get out of the city. Let me know if you're up for it and I'll book somewhere!",
    notes: ["To a close friend, contractions, a casual opener and an emoji all fit — warmth over correctness."],
  },
  {
    id: "wr-extension-email",
    emoji: "🎓",
    type: "email",
    title: "Deadline extension",
    brief: "Email a professor you don't know well to ask for a short extension on an assignment, explaining briefly why.",
    situation: "Emailing a professor — formal, respectful.",
    targetRegister: "formal",
    minWords: 50,
    checklist: [
      "A formal opener and who you are",
      "The request (an extension), stated politely",
      "A brief, honest reason",
      "A formal closing",
    ],
    keyElements: ["extension", "assignment", "deadline"],
    usefulPhrases: ["I am writing to", "I would like to request", "I would be grateful", "Kind regards"],
    modelAnswer:
      "Dear Professor Bianchi, I am writing to request a short extension on the essay due on Friday. I have been unwell this week and, although I have made good progress, I would like a few more days to finish it properly. I would be grateful if you could let me know whether this is possible. Kind regards, Alex Rossi.",
    notes: ["Requests to someone senior go formal: a clear ask, an honest reason, no contractions."],
  },
];

export function getWritingTask(id: string): WritingTask | undefined {
  return writingTasks.find((t) => t.id === id);
}
