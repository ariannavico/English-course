import type { Mission } from "@/features/missions/types";

export const jobInterview: Mission = {
  id: "mission-job-interview",
  emoji: "💼",
  title: "The job interview",
  situation: "Present yourself, handle a tricky question, and finish strong.",
  level: "B2",
  skills: ["describing experience", "expressing opinions", "diplomacy", "argumentation"],
  estimatedMinutes: 14,
  stages: [
    {
      kind: "brief",
      id: "job-s1",
      label: "The situation",
      speaker: "Interviewer",
      text: "You sit down. The interviewer smiles and says: “Thanks for coming in. So — tell me a little about yourself and your experience.”",
      italianHint: "Un colloquio di lavoro. Presentati e parla della tua esperienza.",
      audio: true,
    },
    {
      kind: "produce",
      id: "job-s2",
      label: "Introduce yourself",
      prompt: "Give a short, confident introduction: your background, experience, and what you're good at.",
      targetSkills: ["describing experience", "present perfect continuous"],
      suggestedChunks: ["I've been working as...", "What I enjoy most is...", "I'd say my strength is..."],
      keyElements: ["experience", "work", "good at"],
      modelAnswer:
        "Sure. I've been working as a project coordinator for about four years, mostly in logistics. What I enjoy most is solving problems under pressure, and I'd say my main strength is keeping a team organised when things get hectic.",
      naturalnessNotes: [
        "“I've been working as...” (present perfect continuous) is the natural way to describe ongoing experience.",
        "Signpost your strength with “I'd say...” — it sounds measured, not boastful.",
      ],
      allowSpeech: true,
    },
    {
      kind: "brief",
      id: "job-s3",
      label: "A harder question",
      speaker: "Interviewer",
      text: "“Interesting. And what would you say is your biggest weakness?”",
      audio: true,
    },
    {
      kind: "produce",
      id: "job-s4",
      label: "Handle the weakness question",
      prompt: "Answer honestly but positively — name a real weakness and how you manage it.",
      targetSkills: ["diplomacy", "self-correction", "hedging"],
      suggestedChunks: ["I tend to...", "Something I'm working on is...", "I've learnt to..."],
      keyElements: ["tend", "working on", "better"],
      modelAnswer:
        "I tend to take on too much myself rather than delegating. It's something I've been working on — lately I've made a real effort to trust my team more and hand things over, and it's made a big difference.",
      allowSpeech: true,
    },
    {
      kind: "brief",
      id: "job-s5",
      label: "Something unexpected",
      speaker: "Interviewer",
      text: "“One more thing — and be honest — why do you want to leave your current job?”",
      audio: true,
    },
    {
      kind: "produce",
      id: "job-s6",
      label: "Answer diplomatically",
      prompt: "Explain why you want to move on WITHOUT criticising your current employer. Stay positive and forward-looking.",
      italianContext: "Domanda delicata: spiega perché vuoi cambiare senza parlare male dell'attuale lavoro.",
      targetSkills: ["diplomacy", "expressing motivation", "argumentation"],
      suggestedChunks: ["It's not that..., it's more that...", "I'm looking for...", "I feel ready to..."],
      keyElements: ["looking for", "grow", "opportunity"],
      modelAnswer:
        "It's not that anything's wrong where I am — I've learnt a lot there. It's more that I feel ready for a new challenge, and this role would let me take on more responsibility and keep growing, which is exactly what I'm looking for.",
      naturalnessNotes: [
        "“It's not that..., it's more that...” lets you reframe diplomatically — a very B2 move.",
      ],
      allowSpeech: true,
    },
    {
      kind: "produce",
      id: "job-s7",
      label: "Turn the tables",
      prompt: "The interviewer asks: “Do you have any questions for us?” Ask one good, genuine question.",
      targetSkills: ["asking questions", "showing interest"],
      suggestedChunks: ["I was wondering...", "Could you tell me a bit about...", "What would...?"],
      keyElements: ["question"],
      modelAnswer:
        "Yes, actually — I was wondering what success would look like in this role in the first six months? And could you tell me a bit about the team I'd be working with?",
    },
  ],
};
