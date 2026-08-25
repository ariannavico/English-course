import type { Mission } from "@/features/missions/types";

export const bankCard: Mission = {
  id: "mission-bank-card",
  emoji: "💳",
  title: "The lost card",
  situation: "You've lost your bank card. Call the bank, get it blocked, and sort out a new one.",
  level: "B2",
  skills: ["explaining a problem", "handling a phone call", "confirming details", "being clear under pressure"],
  estimatedMinutes: 9,
  stages: [
    {
      kind: "brief",
      id: "bc-s1",
      label: "The situation",
      text: "You get home and realise your bank card is gone — probably dropped somewhere in town. You need to block it before someone uses it, so you call the bank's 24-hour line.",
      italianHint: "Hai perso la carta. Devi chiamare la banca per bloccarla e averne una nuova.",
      audio: true,
    },
    {
      kind: "brief",
      id: "bc-s2",
      label: "The bank answers",
      speaker: "Bank agent",
      text: "“Good evening, you're through to the 24-hour helpline. How can I help you today?”",
      audio: true,
    },
    {
      kind: "produce",
      id: "bc-s3",
      label: "Explain the problem",
      prompt: "Tell the agent what's happened and what you need — clearly and calmly.",
      targetSkills: ["explaining a problem", "requesting"],
      suggestedChunks: ["I'm calling because…", "I think I've lost…", "Could you block…?"],
      keyElements: ["lost", "card", "block"],
      modelAnswer:
        "Hi, I'm calling because I've lost my debit card — I think I dropped it in town this afternoon. Could you block it straight away, before anyone can use it?",
      allowSpeech: true,
    },
    {
      kind: "brief",
      id: "bc-s4",
      label: "A security check",
      speaker: "Bank agent",
      text: "“Of course — I can block it right now. First I just need to confirm your identity. Can you give me your date of birth and the first line of your address?”",
      audio: true,
    },
    {
      kind: "choice",
      id: "bc-s5",
      label: "Decide",
      prompt: "It's a normal security check, but you want to be sure the call is genuine. What do you do?",
      options: [
        { id: "give", text: "Give the details — it's the bank's official line", feedback: "Reasonable, since you rang them: “Sure — it's the 3rd of May, 1994, and 12 Oak Road.”" },
        { id: "verify", text: "Ask how you can be sure the line is genuine first", feedback: "Cautious and fair: “Before I share that — how do I know this is really the bank?” A good instinct." },
        { id: "partial", text: "Offer only part of the info to start", feedback: "Careful: “I'd rather confirm a bit at a time, if that's OK.” Sensible with sensitive data." },
      ],
      followUpWhy: "Say why, in one sentence.",
    },
    {
      kind: "produce",
      id: "bc-s6",
      label: "Sort out the new card",
      prompt:
        "The card is blocked. Now ask about a replacement: how long it'll take and what you should do in the meantime.",
      italianContext: "La carta è bloccata: chiedi tempi per la nuova e cosa fare nel frattempo.",
      targetSkills: ["requesting information", "planning ahead"],
      suggestedChunks: ["How long will it take…?", "In the meantime, should I…?", "Is there any way to…?"],
      keyElements: ["new card", "how long", "meantime"],
      modelAnswer:
        "Thanks for sorting that. How long will the new card take to arrive? And in the meantime, is there any way I can still access my money — an emergency withdrawal, or using the app?",
      allowSpeech: true,
    },
  ],
};
