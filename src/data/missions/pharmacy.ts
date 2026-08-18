import type { Mission } from "@/features/missions/types";

export const pharmacyVisit: Mission = {
  id: "mission-pharmacy",
  emoji: "💊",
  title: "Under the weather",
  situation: "You're unwell on holiday. Explain your symptoms at the pharmacy and get what you need.",
  level: "B1+",
  skills: ["describing symptoms", "asking for advice", "understanding instructions"],
  estimatedMinutes: 8,
  stages: [
    {
      kind: "brief",
      id: "pha-s1",
      label: "The situation",
      text: "You're away from home and you've felt awful since yesterday: a pounding headache, a sore throat, and you barely slept. There's a pharmacy on the corner, so you go in to ask for something.",
      italianHint: "Sei in vacanza e non stai bene: mal di testa, mal di gola, hai dormito poco. Vai in farmacia.",
      audio: true,
    },
    {
      kind: "produce",
      id: "pha-s2",
      label: "Describe how you feel",
      prompt: "Tell the pharmacist what's wrong. Describe your symptoms and how long you've had them.",
      italianContext: "Descrivi i sintomi e da quanto tempo ce li hai.",
      targetSkills: ["describing symptoms", "present perfect"],
      suggestedChunks: ["I've had... since...", "My throat is really sore", "I can't seem to..."],
      keyElements: ["headache", "throat", "since"],
      modelAnswer:
        "Hi — I haven't been feeling well since yesterday. I've got a bad headache and a really sore throat, and I couldn't sleep last night. Is there anything you'd recommend?",
      naturalnessNotes: [
        "“I've had a headache since yesterday” — present perfect for something that started in the past and is still true.",
        "“I've got a sore throat” is more natural in speech than “I have a pain in my throat”.",
      ],
      allowSpeech: true,
    },
    {
      kind: "brief",
      id: "pha-s3",
      label: "The pharmacist replies",
      speaker: "Pharmacist",
      text: "“Sorry to hear that. It sounds like a bad cold coming on. I can give you something for the headache and a throat spray. Are you allergic to anything, or taking any other medication?”",
      audio: true,
    },
    {
      kind: "choice",
      id: "pha-s4",
      label: "Decide",
      prompt: "You take nothing regularly, but you're not sure about one ingredient. What do you do?",
      options: [
        { id: "ask", text: "Ask what's in it before you agree", feedback: "Sensible: “Before I take it — what's actually in it? I want to be sure.”" },
        { id: "simple", text: "Ask for the mildest option", feedback: "Reasonable: “Could I have the gentlest thing you've got? I don't like strong medicine.”" },
        { id: "trust", text: "Say that's fine and take both", feedback: "Fine if you feel confident — “That sounds good, I'll take both, thanks.”" },
        { id: "doctor", text: "Ask whether you should see a doctor", feedback: "Cautious and clear: “Do you think I need to see a doctor, or will this be enough?”" },
      ],
      followUpWhy: "Say why, in one sentence — the reason you'd actually give.",
    },
    {
      kind: "produce",
      id: "pha-s5",
      label: "Get the instructions right",
      prompt:
        "The pharmacist hands you the medicine. Check how and when to take it — you don't want to get the dose wrong.",
      italianContext: "Chiedi come e quando prendere la medicina (dosaggio).",
      targetSkills: ["asking for clarification", "understanding instructions"],
      suggestedChunks: ["How often should I...?", "Do I take it with...?", "Just to be sure,..."],
      keyElements: ["how", "often", "take"],
      modelAnswer:
        "Thanks. Just to be sure — how often should I take it, and do I need to take it with food? And how many days should I keep going if I don't feel better?",
      naturalnessNotes: [
        "“How often should I take it?” is the standard way to ask about frequency.",
        "“Take it with food” is the fixed phrase — not “take it with the meal”.",
      ],
      allowSpeech: true,
    },
  ],
};
