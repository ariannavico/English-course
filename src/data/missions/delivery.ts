import type { Mission } from "@/features/missions/types";

export const deliveryComplaint: Mission = {
  id: "mission-delivery",
  emoji: "📦",
  title: "The parcel that never came",
  situation: "Your online order is two weeks late. Contact customer service and sort it out.",
  level: "B2",
  skills: ["explaining a problem", "complaining politely", "being assertive", "negotiating a solution"],
  estimatedMinutes: 10,
  stages: [
    {
      kind: "brief",
      id: "del-s1",
      label: "The situation",
      text: "You ordered a pair of headphones online two weeks ago — they were promised in three days. The tracking has said 'in transit' for ten days and hasn't moved. You've already paid. You open the company's chat to sort it out.",
      italianHint: "Il tuo ordine è in ritardo di due settimane e il tracking è fermo. Hai già pagato. Contatti l'assistenza.",
      audio: true,
    },
    {
      kind: "produce",
      id: "del-s2",
      label: "Explain the problem",
      prompt: "Open the conversation. Explain clearly what you ordered, when, and what's gone wrong — and give your order number.",
      italianContext: "Spiega con chiarezza cosa hai ordinato, quando, e qual è il problema.",
      targetSkills: ["explaining a problem", "being clear and concise"],
      suggestedChunks: ["I'm getting in touch about...", "It was supposed to arrive...", "The tracking hasn't updated..."],
      keyElements: ["ordered", "two weeks", "tracking"],
      modelAnswer:
        "Hi, I'm getting in touch about an order I placed two weeks ago — order number 48812. It was supposed to arrive in three days, but the tracking has said 'in transit' for ten days and hasn't updated. I've already paid, so I'd like to know what's happening.",
      naturalnessNotes: [
        "“I'm getting in touch about…” is a natural, neutral opener for a complaint.",
        "State the facts before the feelings — dates and the order number do the work.",
      ],
      allowSpeech: true,
    },
    {
      kind: "brief",
      id: "del-s3",
      label: "The agent replies",
      speaker: "Support agent",
      text: "“I'm really sorry about this. Looking at it, the parcel may have been lost in transit. I can either send a replacement — though that would take another 7–10 days — or process a full refund. Which would you prefer?”",
      audio: true,
    },
    {
      kind: "choice",
      id: "del-s4",
      label: "Decide",
      prompt: "You still want the headphones, but you're frustrated and don't want to wait another ten days for nothing.",
      options: [
        { id: "replace", text: "Accept the replacement, but ask for faster shipping", feedback: "Firm and fair: “I'll take the replacement, but given the delay, could you send it express at no extra cost?”" },
        { id: "refund", text: "Ask for the refund and walk away", feedback: "Clean exit: “At this point I'd rather just have the refund, please.”" },
        { id: "both", text: "Ask for the replacement AND some compensation", feedback: "Assertive: “I'm happy with a replacement, but I'd also expect something for the two-week wait.”" },
        { id: "escalate", text: "Ask to speak to a manager", feedback: "An option, but usually the agent can fix this — try negotiating first before escalating." },
      ],
      followUpWhy: "Say why you chose that — the reason you'd give the agent.",
    },
    {
      kind: "produce",
      id: "del-s5",
      label: "Hold your ground — politely",
      prompt:
        "The agent agrees to a replacement but says the refund of your delivery fee will take 14 days. Push back politely: you'd like it sorted faster, and a goodwill gesture for the trouble.",
      italianContext: "Ribatti con garbo: chiedi tempi più rapidi e un gesto di cortesia per il disagio.",
      targetSkills: ["being assertive", "negotiating", "conceding then countering"],
      suggestedChunks: ["I do appreciate that, but...", "Would you be able to...?", "Given the circumstances,..."],
      keyElements: ["appreciate", "faster", "goodwill"],
      modelAnswer:
        "I do appreciate you sorting the replacement, but 14 days for the delivery refund feels long given I've already waited two weeks. Would you be able to speed that up? And given the circumstances, I'd really appreciate a small goodwill gesture — a discount or a voucher would go a long way.",
      naturalnessNotes: [
        "“I do appreciate that, but…” concedes first, then pushes back — the B2 move for staying polite while being firm.",
        "“Would you be able to…?” is softer and more effective than “You need to…”.",
      ],
      allowSpeech: true,
    },
  ],
};
