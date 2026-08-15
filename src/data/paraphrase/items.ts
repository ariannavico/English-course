import type { ParaphraseItem } from "@/features/paraphrase/types";

/** Seed words for "Get Around The Word". Clues are single words a good explanation tends to hit. */
export const paraphraseItems: ParaphraseItem[] = [
  {
    id: "pp-screwdriver", emoji: "🪛", word: "screwdriver", category: "tools", italian: "cacciavite", level: "B1",
    forbidden: ["screwdrivers", "screw driver"], clues: ["tool", "turn", "screws"],
    model: "It's a tool you use to turn screws.",
  },
  {
    id: "pp-refrigerator", emoji: "🧊", word: "refrigerator", category: "home", italian: "frigorifero", level: "B1",
    forbidden: ["fridge", "refrigerators"], clues: ["kitchen", "keep", "cold", "food"],
    model: "It's the big machine in the kitchen where you keep food cold.",
  },
  {
    id: "pp-umbrella", emoji: "☂️", word: "umbrella", category: "objects", italian: "ombrello", level: "B1",
    forbidden: ["umbrellas"], clues: ["rain", "hold", "dry"],
    model: "It's the thing you hold over your head to stay dry in the rain.",
  },
  {
    id: "pp-commute", emoji: "🚆", word: "commute", category: "work", italian: "tragitto casa-lavoro", level: "B1+",
    forbidden: ["commuting", "commuter", "commutes"], clues: ["travel", "work", "home"],
    model: "It's the journey you make to work and back home every day.",
  },
  {
    id: "pp-procrastinate", emoji: "⏳", word: "procrastinate", category: "abstract", italian: "procrastinare", level: "B2",
    forbidden: ["procrastinating", "procrastination"], clues: ["put", "off", "later", "avoid"],
    model: "It's when you keep putting off something you should be doing.",
  },
  {
    id: "pp-neighbour", emoji: "🏘", word: "neighbour", category: "people", italian: "vicino di casa", level: "B1",
    forbidden: ["neighbor", "neighbours", "neighbors"], clues: ["person", "lives", "near", "next"],
    model: "It's a person who lives near you, usually right next door.",
  },
  {
    id: "pp-souvenir", emoji: "🗿", word: "souvenir", category: "travel", italian: "souvenir/ricordo", level: "B1+",
    forbidden: ["souvenirs"], clues: ["buy", "trip", "remember"],
    model: "It's a small thing you buy on a trip to remember the place.",
  },
  {
    id: "pp-microwave", emoji: "🍲", word: "microwave", category: "home", italian: "microonde", level: "B1",
    forbidden: ["microwaves"], clues: ["heat", "food", "quickly"],
    model: "It's the machine you use to heat food quickly.",
  },
  {
    id: "pp-landlord", emoji: "🔑", word: "landlord", category: "people", italian: "padrone di casa", level: "B1+",
    forbidden: ["landlords", "landlady"], clues: ["owns", "rent", "pay"],
    model: "It's the person who owns the flat you rent and who you pay.",
  },
  {
    id: "pp-exhausted", emoji: "😴", word: "exhausted", category: "feelings", italian: "esausto/sfinito", level: "B1+",
    forbidden: ["exhaustion", "exhausting"], clues: ["tired", "energy", "sleep"],
    model: "It's when you feel extremely tired and have no energy left.",
  },
  {
    id: "pp-recipe", emoji: "📖", word: "recipe", category: "kitchen", italian: "ricetta", level: "B1",
    forbidden: ["recipes"], clues: ["instructions", "cook", "dish"],
    model: "It's the set of instructions you follow to cook a dish.",
  },
  {
    id: "pp-deadline", emoji: "📅", word: "deadline", category: "work", italian: "scadenza", level: "B2",
    forbidden: ["deadlines"], clues: ["time", "finish", "must"],
    model: "It's the latest time by which you must finish something.",
  },
  {
    id: "pp-charger", emoji: "🔌", word: "charger", category: "technology", italian: "caricabatterie", level: "B1",
    forbidden: ["chargers"], clues: ["phone", "battery", "plug"],
    model: "It's the thing you plug in to fill your phone's battery.",
  },
  {
    id: "pp-stapler", emoji: "📎", word: "stapler", category: "office", italian: "cucitrice/spillatrice", level: "B2",
    forbidden: ["staplers"], clues: ["holds", "paper", "together"],
    model: "It's a small tool that holds sheets of paper together with little metal pins.",
  },
];

const byId = new Map(paraphraseItems.map((i) => [i.id, i]));
export const getParaphraseItem = (id: string): ParaphraseItem | undefined => byId.get(id);
