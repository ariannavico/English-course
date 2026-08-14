import type { Mission } from "@/features/missions/types";

export const restaurantProblem: Mission = {
  id: "mission-restaurant",
  emoji: "🍽",
  title: "The wrong dish",
  situation: "The waiter brought the wrong meal. Sort it out — politely.",
  level: "B1",
  skills: ["complaining politely", "requesting", "reacting", "being polite"],
  estimatedMinutes: 8,
  stages: [
    {
      kind: "brief",
      id: "rest-s1",
      label: "The situation",
      text: "You ordered the grilled chicken. Ten minutes later the waiter puts down a plate of seafood pasta in front of you. It's not what you asked for — and you don't even like seafood.",
      italianHint: "Ti hanno portato il piatto sbagliato. Devi farlo notare con gentilezza.",
      audio: true,
    },
    {
      kind: "produce",
      id: "rest-s2",
      label: "Get the waiter's attention",
      prompt: "Politely tell the waiter there's a mistake and say what you actually ordered.",
      targetSkills: ["complaining politely", "requesting"],
      suggestedChunks: ["Excuse me,...", "I think there's been a mix-up", "I actually ordered..."],
      keyElements: ["mistake", "ordered", "chicken"],
      modelAnswer:
        "Excuse me — sorry, I think there's been a mix-up. I actually ordered the grilled chicken, not the seafood pasta.",
      naturalnessNotes: [
        "“There's been a mix-up / a mistake” is softer than “This is wrong”.",
        "Starting with “Sorry” or “Excuse me” keeps a complaint polite in English.",
      ],
      allowSpeech: true,
    },
    {
      kind: "brief",
      id: "rest-s3",
      label: "The waiter replies",
      speaker: "Waiter",
      text: "“Oh, I do apologise! We're really busy tonight — the kitchen will need about 20 minutes to make the chicken. Is that alright?”",
      audio: true,
    },
    {
      kind: "choice",
      id: "rest-s4",
      label: "Decide",
      prompt: "It's already late and you're hungry. What do you do?",
      options: [
        { id: "wait", text: "Say it's fine and wait", feedback: "Gracious. “No problem, I can wait” keeps things friendly." },
        { id: "quick", text: "Ask for something quicker instead", feedback: "Practical: “Actually, is there anything quicker? I'm in a bit of a rush.”" },
        { id: "discount", text: "Accept, but ask for a small discount", feedback: "Fair to ask: “I don't mind waiting, but would it be possible to take something off the bill?”" },
        { id: "leave", text: "Say you'd rather just leave", feedback: "Your right — but be polite: “I'm sorry, I think I'll leave it tonight.”" },
      ],
      followUpWhy: "Say why, in one sentence — give a reason a native speaker would.",
    },
    {
      kind: "produce",
      id: "rest-s5",
      label: "Something changes",
      prompt:
        "The bill arrives — and it still lists the seafood pasta, not the chicken. Point this out politely and ask them to correct it.",
      italianContext: "Il conto riporta ancora il piatto sbagliato.",
      targetSkills: ["complaining politely", "requesting a correction"],
      suggestedChunks: ["Sorry to bother you again,...", "I think this isn't quite right", "Could you check...?"],
      keyElements: ["bill", "wrong", "correct"],
      modelAnswer:
        "Sorry to bother you again — I think there's a small problem with the bill. It still shows the seafood pasta, but I had the chicken in the end. Could you check it for me?",
      allowSpeech: true,
    },
  ],
};
