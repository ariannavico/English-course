import type { PlacementItem } from "@/features/placement/types";
import { mc, choice } from "@/data/exercises/factories";

/**
 * Placement items, two per tier (A2 → B2). Objective only, so the quiz is fast
 * and unambiguous. The `level` drives the tier-climb placement; the exercise's
 * own difficulty is cosmetic here.
 */
export const placementItems: PlacementItem[] = [
  /* A2 — everyday basics */
  {
    id: "pl-a2-1",
    level: "A2",
    exercise: mc(
      { id: "pl-a2-1", instructions: "Choose the correct word.", explanation: "Third person singular present simple: she goes.", tags: ["grammar", "present-simple"], difficulty: "easy" },
      "She ___ to school every day.",
      [["goes", true], ["go", false], ["going", false], ["gone", false]],
    ),
  },
  {
    id: "pl-a2-2",
    level: "A2",
    exercise: mc(
      { id: "pl-a2-2", instructions: "Choose the correct article.", explanation: "Before a vowel sound we use 'an': an apple.", tags: ["grammar", "article"], difficulty: "easy" },
      "I'd like ___ apple, please.",
      [["an", true], ["a", false], ["the", false], ["some", false]],
    ),
  },

  /* A2+ — past simple, prepositions */
  {
    id: "pl-a2p-1",
    level: "A2+",
    exercise: choice(
      { id: "pl-a2p-1", instructions: "Choose the natural form.", explanation: "A finished past time (yesterday) → past simple: went.", tags: ["grammar", "past-simple"], difficulty: "easy" },
      "tense-choice",
      "Yesterday we {{blank}} to the beach.",
      [["went", true], ["go", false], ["have gone", false], ["going", false]],
    ),
  },
  {
    id: "pl-a2p-2",
    level: "A2+",
    exercise: mc(
      { id: "pl-a2p-2", instructions: "Choose the correct preposition.", explanation: "The fixed phrase is 'good at (doing) something'.", tags: ["vocabulary", "preposition"], difficulty: "medium" },
      "My sister is really good ___ cooking.",
      [["at", true], ["in", false], ["on", false], ["of", false]],
    ),
  },

  /* B1 — present perfect, comparatives */
  {
    id: "pl-b1-1",
    level: "B1",
    exercise: choice(
      { id: "pl-b1-1", instructions: "Complete the sentence.", explanation: "Present perfect with 'never': have never been.", tags: ["grammar", "present-perfect"], difficulty: "medium" },
      "tense-choice",
      "I {{blank}} never been to Japan.",
      [["have", true], ["am", false], ["did", false], ["was", false]],
    ),
  },
  {
    id: "pl-b1-2",
    level: "B1",
    exercise: mc(
      { id: "pl-b1-2", instructions: "Choose the correct comparative.", explanation: "Long adjectives form the comparative with 'more': more interesting.", tags: ["grammar", "comparatives"], difficulty: "medium" },
      "This film is ___ than the book.",
      [["more interesting", true], ["interestinger", false], ["most interesting", false], ["as interesting", false]],
    ),
  },

  /* B1+ — conditionals, verb collocations */
  {
    id: "pl-b1p-1",
    level: "B1+",
    exercise: choice(
      { id: "pl-b1p-1", instructions: "Choose the natural form.", explanation: "First conditional: present simple in the if-clause.", tags: ["grammar", "conditionals"], difficulty: "medium" },
      "tense-choice",
      "If it {{blank}} tomorrow, we'll stay in.",
      [["rains", true], ["will rain", false], ["rained", false], ["would rain", false]],
    ),
  },
  {
    id: "pl-b1p-2",
    level: "B1+",
    exercise: choice(
      { id: "pl-b1p-2", instructions: "Choose the right verb.", explanation: "English fixes this as 'make a decision'.", tags: ["verb-choice", "make"], difficulty: "medium" },
      "verb-choice",
      "It's important — you need to {{blank}} a decision today.",
      [["make", true], ["do", false], ["take", false], ["have", false]],
    ),
  },

  /* B2 — perfect aspect, discourse markers */
  {
    id: "pl-b2-1",
    level: "B2",
    exercise: choice(
      { id: "pl-b2-1", instructions: "Choose the natural form.", explanation: "An ongoing action explaining a present result → present perfect continuous.", tags: ["grammar", "present-perfect-continuous"], difficulty: "hard" },
      "tense-choice",
      "I'm exhausted — I {{blank}} all day.",
      [["have been working", true], ["work", false], ["am working", false], ["worked", false]],
    ),
  },
  {
    id: "pl-b2-2",
    level: "B2",
    exercise: mc(
      { id: "pl-b2-2", instructions: "Choose the correct linker.", explanation: "'Despite' + noun introduces a contrast: despite the rain.", tags: ["grammar", "linkers"], difficulty: "hard" },
      "___ the heavy rain, we still went for a walk.",
      [["Despite", true], ["Although", false], ["Because", false], ["However", false]],
    ),
  },
];
