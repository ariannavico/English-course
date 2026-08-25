import type { Mission } from "@/features/missions/types";

export const productReturn: Mission = {
  id: "mission-product-return",
  emoji: "🎧",
  title: "It broke already",
  situation: "The headphones you bought last week have stopped working. Take them back to the shop.",
  level: "B1+",
  skills: ["complaining politely", "explaining", "negotiating a solution", "standing your ground"],
  estimatedMinutes: 9,
  stages: [
    {
      kind: "brief",
      id: "pr-s1",
      label: "The situation",
      text: "You bought a pair of headphones a week ago. Yesterday the right side went completely silent. You've still got the receipt, so you head back to the shop to sort it out.",
      italianHint: "Le cuffie comprate una settimana fa si sono rotte. Hai lo scontrino e torni in negozio.",
      audio: true,
    },
    {
      kind: "produce",
      id: "pr-s2",
      label: "Explain at the counter",
      prompt: "Tell the assistant what's wrong, when you bought them, and that you have the receipt.",
      targetSkills: ["explaining", "complaining politely"],
      suggestedChunks: ["I bought these last week…", "The problem is…", "I've got the receipt here."],
      keyElements: ["bought", "receipt", "working"],
      modelAnswer:
        "Hi, I bought these headphones here last week, but the right earpiece has stopped working completely. I've got the receipt right here — I'd like to sort it out, please.",
      allowSpeech: true,
    },
    {
      kind: "brief",
      id: "pr-s3",
      label: "The assistant replies",
      speaker: "Shop assistant",
      text: "“Hmm, they do sometimes have a fault. I can offer you a store credit for the value — would that be alright?”",
      audio: true,
    },
    {
      kind: "choice",
      id: "pr-s4",
      label: "Decide",
      prompt: "You'd rather not have store credit — you want working headphones or your money back. How do you respond?",
      options: [
        { id: "replace", text: "Ask for a replacement pair instead", feedback: "Clear and reasonable: “I'd prefer a replacement, please — they're only a week old.”" },
        { id: "refund", text: "Ask for a refund", feedback: "Within your rights for a faulty item: “Actually, since they're faulty, I'd like a refund.”" },
        { id: "accept", text: "Accept the store credit to keep it easy", feedback: "Fine if you shop there often — but you don't have to settle for less than a working product." },
      ],
      followUpWhy: "Say why you chose that — in one sentence.",
    },
    {
      kind: "brief",
      id: "pr-s5",
      label: "A bit of pushback",
      speaker: "Shop assistant",
      text: "“I'm afraid our policy is store credit only after seven days… and it's been, let's see, eight days now.”",
      audio: true,
    },
    {
      kind: "produce",
      id: "pr-s6",
      label: "Stand your ground — politely",
      prompt:
        "The item is faulty, not just unwanted, so a one-day policy technicality shouldn't apply. Push back calmly and firmly, and ask to resolve it fairly.",
      italianContext: "Il prodotto è difettoso: ribatti con calma e fermezza, senza litigare.",
      targetSkills: ["standing your ground", "being assertive", "staying polite"],
      suggestedChunks: ["I understand, but…", "The thing is, it's faulty…", "Would you be able to…?"],
      keyElements: ["faulty", "understand", "fair"],
      modelAnswer:
        "I understand there's a policy, but the thing is these are faulty, not just unwanted — that's a bit different. It does seem fair to replace or refund a product that broke on its own after a week. Would you be able to check with your manager?",
      allowSpeech: true,
    },
  ],
};
