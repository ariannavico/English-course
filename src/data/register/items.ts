import type { RegisterItem } from "@/features/register/types";

/**
 * Register items, two per target level. Each carries the full ladder — the same
 * message written informally, neutrally and formally — so the learner sees the
 * whole spectrum after answering. Models (ladder[target]) are written to hit
 * their register under the offline detector.
 */
export const registerItems: RegisterItem[] = [
  /* ---------------- informal target ---------------- */
  {
    id: "reg-dinner",
    emoji: "🍝",
    intent: "Invite someone to dinner at yours on Saturday.",
    situation: "You're texting a close friend.",
    target: "informal",
    level: "B1+",
    principle: "To a close friend, warmth beats correctness: contractions, a casual opener and an emoji all fit.",
    ladder: {
      informal: "Hey! Fancy coming round for dinner on Saturday? 😊 Let me know!",
      neutral: "Hi, would you like to come over for dinner on Saturday? Let me know if you're free.",
      formal: "Dear friend, I would like to invite you to dinner on Saturday. Kind regards.",
    },
  },
  {
    id: "reg-plants",
    emoji: "🪴",
    intent: "Ask someone to water your plants while you're away.",
    situation: "You're messaging a good friend.",
    target: "informal",
    level: "B1+",
    principle: "Small favours between friends stay light — a quick ask, a warm thank-you, no ceremony.",
    ladder: {
      informal: "Hey, could you water my plants while I'm away? Thanks a million! You're a star 😊",
      neutral: "Hi, would you be able to water my plants while I'm away next week? Thanks so much.",
      formal: "Dear neighbour, I would be grateful if you could water my plants during my absence. Kind regards.",
    },
  },

  /* ---------------- neutral target ---------------- */
  {
    id: "reg-file",
    emoji: "📎",
    intent: "Ask a colleague to send you the latest report.",
    situation: "You're emailing a colleague you know reasonably well at work.",
    target: "neutral",
    level: "B2",
    principle: "Everyday work messages sit in the middle: friendly but efficient, polite but not stiff.",
    ladder: {
      informal: "Hey, can you ping me that report when you get a sec? Cheers!",
      neutral: "Hi, could you send me the latest report when you get a chance? Thank you in advance.",
      formal: "Dear colleague, I would be grateful if you could forward the latest report at your earliest convenience. Kind regards.",
    },
  },
  {
    id: "reg-decline",
    emoji: "🙅",
    intent: "Turn down an invitation politely.",
    situation: "You're replying to an acquaintance who invited you to an event.",
    target: "neutral",
    level: "B2",
    principle: "A neutral 'no' softens the refusal and keeps the relationship warm, without over-formal distance.",
    ladder: {
      informal: "Ah, can't make it this time — but thanks loads for the invite! Next time 😊",
      neutral: "Thank you very much for the invitation. Unfortunately I won't be able to make it this time, but I hope it goes really well.",
      formal: "Dear Sir or Madam, I regret to inform you that I am unable to attend. I would like to thank you for the kind invitation. Yours sincerely.",
    },
  },

  /* ---------------- formal target ---------------- */
  {
    id: "reg-apology",
    emoji: "🏢",
    intent: "Apologise for a delay and reassure them it will be fixed.",
    situation: "You're emailing an important client you don't know well.",
    target: "formal",
    level: "B2",
    principle: "With a client you don't know, formality signals respect: a proper opener, no contractions, a formal close.",
    ladder: {
      informal: "So sorry it's late! Bear with me, I'll sort it out asap 🙏",
      neutral: "Apologies for the delay — I'll have it sorted for you by Friday. Thanks for your patience.",
      formal: "Dear Ms Rossi, I am writing to apologise for the delay with your order. I would be grateful for your patience and can assure you it will be resolved shortly. Kind regards.",
    },
  },
  {
    id: "reg-leave",
    emoji: "🗓️",
    intent: "Request a day off.",
    situation: "You're emailing a senior manager you don't know well.",
    target: "formal",
    level: "B2",
    principle: "Requests up the hierarchy go formal: state it clearly, hedge politely, and close properly.",
    ladder: {
      informal: "Hi, any chance I could grab next Friday off? Cheers!",
      neutral: "Hi, I'd like to take next Friday off if that's OK. Let me know whether it works.",
      formal: "Dear Mr Bianchi, I would like to request a day's leave on 12 June, should this be convenient. Please let me know whether this is possible. Kind regards.",
    },
  },
];
