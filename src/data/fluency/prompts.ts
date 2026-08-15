import type { FluencyPrompt } from "@/features/fluency/types";

/** Seed prompts for Fluency Mode — quick, open, and impossible to over-prepare. */
export const fluencyPrompts: FluencyPrompt[] = [
  {
    id: "fl-weekend",
    emoji: "🌤",
    prompt: "Describe your ideal weekend, from Friday evening to Sunday night.",
    category: "describe",
    level: "B1",
    suggestedChunks: ["I usually...", "the first thing I'd do is...", "after that..."],
  },
  {
    id: "fl-wfh",
    emoji: "💻",
    prompt: "Is working from home better than working in an office? Say what you think and why.",
    category: "opinion",
    level: "B2",
    suggestedChunks: ["from my point of view...", "on the other hand...", "it depends on..."],
  },
  {
    id: "fl-last-trip",
    emoji: "🧳",
    prompt: "Tell the story of the last trip or day out you really enjoyed.",
    category: "narrate",
    level: "B1+",
    suggestedChunks: ["It all started when...", "in the end...", "what I loved most was..."],
  },
  {
    id: "fl-lottery",
    emoji: "🎰",
    prompt: "If you won a large amount of money tomorrow, what would you do with it?",
    category: "hypothetical",
    level: "B1+",
    suggestedChunks: ["the first thing I'd do...", "I probably wouldn't...", "I've always wanted to..."],
  },
  {
    id: "fl-explain-job",
    emoji: "💼",
    prompt: "Explain what you do (job or studies) to someone who knows nothing about it.",
    category: "describe",
    level: "B1+",
    suggestedChunks: ["basically...", "my main job is to...", "a typical day involves..."],
  },
  {
    id: "fl-phone",
    emoji: "📱",
    prompt: "Do you think we spend too much time on our phones? Argue your case.",
    category: "opinion",
    level: "B2",
    suggestedChunks: ["I'd argue that...", "that said...", "the real problem is..."],
  },
  {
    id: "fl-childhood",
    emoji: "🧒",
    prompt: "Describe a place from your childhood that you remember well.",
    category: "describe",
    level: "B1",
    suggestedChunks: ["I remember...", "there used to be...", "it always felt..."],
  },
  {
    id: "fl-advice",
    emoji: "🧭",
    prompt: "A friend wants to learn your language. What advice would you give them?",
    category: "opinion",
    level: "B1+",
    suggestedChunks: ["if I were you...", "the best way to...", "whatever you do, don't..."],
  },
  {
    id: "fl-problem",
    emoji: "🔧",
    prompt: "Tell me about a problem you solved recently and how you did it.",
    category: "narrate",
    level: "B2",
    suggestedChunks: ["what happened was...", "so I decided to...", "it turned out that..."],
  },
  {
    id: "fl-city",
    emoji: "🏙",
    prompt: "Would you rather live in a big city or the countryside? Explain your choice.",
    category: "opinion",
    level: "B1+",
    suggestedChunks: ["personally...", "whereas...", "for me, it comes down to..."],
  },
  {
    id: "fl-perfect-meal",
    emoji: "🍝",
    prompt: "Describe your perfect meal — what it is, where you'd eat it, and who with.",
    category: "describe",
    level: "B1",
    suggestedChunks: ["ideally...", "I'd start with...", "there's nothing better than..."],
  },
  {
    id: "fl-change",
    emoji: "🔮",
    prompt: "If you could change one thing about your daily routine, what would it be and why?",
    category: "hypothetical",
    level: "B2",
    suggestedChunks: ["what I'd really like is...", "the thing is...", "that would mean..."],
  },
];

const byId = new Map(fluencyPrompts.map((p) => [p.id, p]));
export const getFluencyPrompt = (id: string): FluencyPrompt | undefined => byId.get(id);
