import type { ActiveVocabItem } from "@/features/vocabLevels/types";

/** B2 vocabulary for the activation ladder. Each example contains the word (used to build a gap). */
export const activeVocabItems: ActiveVocabItem[] = [
  { id: "av-reluctant", word: "reluctant", pos: "adjective", definition: "unwilling to do something", italian: "riluttante", example: "She was reluctant to ask her boss for help." },
  { id: "av-thorough", word: "thorough", pos: "adjective", definition: "done completely and carefully", italian: "accurato, approfondito", example: "The mechanic did a thorough check of the car." },
  { id: "av-cope", word: "cope", pos: "verb", definition: "to deal successfully with a difficult situation", italian: "farcela, gestire", example: "I can't cope with all this stress at once." },
  { id: "av-overwhelming", word: "overwhelming", pos: "adjective", definition: "so great that it's hard to deal with", italian: "travolgente, schiacciante", example: "The support from her friends was overwhelming." },
  { id: "av-blunt", word: "blunt", pos: "adjective", definition: "saying what you think very directly, without softening it", italian: "diretto, brusco", example: "He's a bit blunt, but at least he's honest." },
  { id: "av-awkward", word: "awkward", pos: "adjective", definition: "causing embarrassment or difficulty", italian: "imbarazzante, scomodo", example: "There was an awkward silence after his comment." },
  { id: "av-thrilled", word: "thrilled", pos: "adjective", definition: "extremely pleased and excited", italian: "entusiasta, emozionato", example: "I was absolutely thrilled to get the job." },
  { id: "av-deadline", word: "deadline", pos: "noun", definition: "the latest time by which something must be finished", italian: "scadenza", example: "We're going to miss the deadline at this rate." },
  { id: "av-procrastinate", word: "procrastinate", pos: "verb", definition: "to keep delaying something you should do", italian: "procrastinare", example: "Try not to procrastinate before a big exam." },
  { id: "av-reliable", word: "reliable", pos: "adjective", definition: "able to be trusted to do what you expect", italian: "affidabile", example: "He's the most reliable person on the team." },
  { id: "av-tedious", word: "tedious", pos: "adjective", definition: "boring because it lasts too long or is repetitive", italian: "noioso, tedioso", example: "Filling in the forms was incredibly tedious." },
  { id: "av-straightforward", word: "straightforward", pos: "adjective", definition: "simple and easy to understand or do", italian: "semplice, chiaro", example: "Don't worry — the instructions are pretty straightforward." },
  { id: "av-cautious", word: "cautious", pos: "adjective", definition: "careful to avoid risks or mistakes", italian: "cauto, prudente", example: "Banks are being more cautious about lending money." },
  { id: "av-resent", word: "resent", pos: "verb", definition: "to feel bitter or angry about something unfair", italian: "risentirsi di, mal sopportare", example: "It's normal to resent being treated unfairly." },
  { id: "av-keen", word: "keen", pos: "adjective", definition: "very interested in or eager to do something", italian: "entusiasta, desideroso", example: "He's really keen to learn how it works." },
];

export function getActiveVocabItem(id: string): ActiveVocabItem | undefined {
  return activeVocabItems.find((i) => i.id === id);
}
