import type { Mission } from "@/features/missions/types";

export const missedFlight: Mission = {
  id: "mission-missed-flight",
  emoji: "✈️",
  title: "You missed your flight",
  situation: "Sort it out at the airport — then explain it to a friend.",
  level: "B1+",
  skills: ["narrating past events", "requesting", "negotiating", "present perfect"],
  estimatedMinutes: 12,
  stages: [
    {
      kind: "brief",
      id: "flight-s1",
      label: "The situation",
      text: "You get to the gate out of breath. The screen says CLOSED. The plane is still there, but the agent shakes her head — boarding finished two minutes ago. Your flight has left without you.",
      italianHint: "Hai perso l'aereo per pochissimo. Devi parlare con l'addetta.",
      audio: true,
    },
    {
      kind: "produce",
      id: "flight-s2",
      label: "Talk to the agent",
      prompt: "Explain what happened and ask what your options are. Stay calm and polite.",
      targetSkills: ["narrating past events", "requesting", "present perfect"],
      suggestedChunks: ["I was supposed to...", "Is there any way...", "Would it be possible to..."],
      keyElements: ["missed", "flight", "next"],
      modelAnswer:
        "Hi, I'm so sorry — I was supposed to be on the 9:40 flight but I got held up at security and missed it. Is there any way I can get on the next one?",
      naturalnessNotes: [
        "“I got held up” sounds far more natural than “I had a delay”.",
        "Soften requests with “Is there any way...” or “Would it be possible to...”.",
      ],
      allowSpeech: true,
    },
    {
      kind: "brief",
      id: "flight-s3",
      label: "The agent replies",
      speaker: "Airline agent",
      text: "“Let me see… The next flight is tomorrow morning at 7. There are two seats left, but I'm afraid they're on a different fare — it would be €120 more.”",
      audio: true,
    },
    {
      kind: "choice",
      id: "flight-s4",
      label: "Decide",
      prompt: "What do you do?",
      options: [
        { id: "pay", text: "Pay the €120 and take tomorrow's flight", feedback: "Reasonable if you need to arrive. In English you'd confirm: “OK, let's do that. Can I pay by card?”" },
        { id: "standby", text: "Ask to go on standby for an earlier flight", feedback: "Smart — “Is there any chance of an earlier standby?” shows flexibility and good vocabulary." },
        { id: "other", text: "Check another airline yourself", feedback: "Independent, but say it politely: “Thanks — I think I'll check other options first.”" },
        { id: "home", text: "Give up and go home", feedback: "Sometimes the right call. You'd still explain: “I think I'll head home and rebook online.”" },
      ],
      followUpWhy: "In one or two sentences, explain WHY you chose that — give a reason.",
    },
    {
      kind: "produce",
      id: "flight-s5",
      label: "Something changes",
      prompt:
        "The agent adds: “Just so you know, that €120 is non-refundable.” Respond — either accept, or ask whether there's any cheaper alternative.",
      italianContext: "La situazione cambia: il supplemento non è rimborsabile.",
      targetSkills: ["negotiating", "expressing uncertainty", "requesting"],
      suggestedChunks: ["The thing is...", "I was wondering if...", "In that case..."],
      keyElements: ["cheaper", "alternative", "understand"],
      modelAnswer:
        "I see. The thing is, that's quite a lot on top of the ticket — I was wondering if there's any cheaper alternative, maybe a later flight? If not, I understand, and I'll take the 7 a.m. one.",
      allowSpeech: true,
    },
    {
      kind: "produce",
      id: "flight-s6",
      label: "Explain to a friend",
      prompt: "Message a friend: tell them what happened at the airport and what you decided to do.",
      targetSkills: ["narrating past events", "present perfect vs past simple"],
      suggestedChunks: ["It turned out that...", "In the end...", "I ended up..."],
      keyElements: ["missed", "flight", "decided"],
      modelAnswer:
        "You won't believe it — I missed my flight this morning! I got stuck at security and by the time I reached the gate it had already closed. In the end I ended up paying extra for the 7 a.m. one tomorrow. Not the best start to the trip!",
      naturalnessNotes: ["“You won't believe it” is a natural way to open a story."],
    },
  ],
};
