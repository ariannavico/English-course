import type { Exercise } from "@/types";

/** Exercises for Part 4 chapters 21–26 (one targeted item per verb + a mixed challenge). */

const mc = (
  id: string,
  chapter: string,
  verbIds: string[],
  instructions: string,
  question: string,
  options: [string, boolean][],
  explanation: string,
  difficulty: Exercise["difficulty"] = "medium",
  cefrLevel: Exercise["cefrLevel"] = "A2+",
): Exercise => ({
  id,
  type: "multiple-choice",
  instructions,
  difficulty,
  cefrLevel,
  points: difficulty === "easy" ? 10 : difficulty === "hard" ? 20 : 15,
  tags: [chapter, ...verbIds],
  relatedVerbIds: verbIds,
  explanation,
  data: {
    kind: "multiple-choice",
    question,
    options: options.map(([text], i) => ({ id: `o${i}`, text })),
    correctOptionId: `o${options.findIndex(([, ok]) => ok)}`,
  },
});

const err = (
  id: string,
  chapter: string,
  verbIds: string[],
  instructions: string,
  incorrect: string,
  accepted: string[],
  explanation: string,
  difficulty: Exercise["difficulty"] = "medium",
  cefrLevel: Exercise["cefrLevel"] = "A2+",
): Exercise => ({
  id,
  type: "error-correction",
  instructions,
  difficulty,
  cefrLevel,
  points: difficulty === "easy" ? 10 : difficulty === "hard" ? 20 : 15,
  tags: [chapter, ...verbIds],
  relatedVerbIds: verbIds,
  explanation,
  data: { kind: "error-correction", incorrectSentence: incorrect, acceptedAnswers: accepted, explanation },
});

const fill = (
  id: string,
  chapter: string,
  verbIds: string[],
  instructions: string,
  sentence: string,
  accepted: string[],
  explanation: string,
  difficulty: Exercise["difficulty"] = "easy",
  cefrLevel: Exercise["cefrLevel"] = "A2+",
): Exercise => ({
  id,
  type: "fill-blank",
  instructions,
  difficulty,
  cefrLevel,
  points: difficulty === "easy" ? 10 : difficulty === "hard" ? 20 : 15,
  tags: [chapter, ...verbIds],
  relatedVerbIds: verbIds,
  explanation,
  data: { kind: "fill-blank", sentence, acceptedAnswers: accepted, explanation },
});

/* ---- Chapter 21 — Work & Study ---- */
const ch21: Exercise[] = [
  err("ex-study-1", "chapter-21", ["study"], "Correct the mistake.", "She studies of biology.", ["She studies biology.", "She studies biology"], "'study' takes the subject directly — no 'of'.", "easy", "A2"),
  err("ex-learn-1", "chapter-21", ["learn", "study"], "STUDY or LEARN?", "I'm studying to swim.", ["I'm learning to swim.", "I'm learning to swim"], "Acquiring a skill = learn (learn to do).", "medium"),
  fill("ex-teach-1", "chapter-21", ["teach"], "Write the past of 'teach'.", "My grandmother ___ (teach) me to knit.", ["taught"], "Irregular: teach · taught · taught.", "easy", "A2"),
  err("ex-earn-1", "chapter-21", ["earn"], "Correct the mistake.", "He wins a good salary.", ["He earns a good salary.", "He earns a good salary"], "Money from work = earn (win is for prizes).", "medium"),
  mc("ex-apply-1", "chapter-21", ["apply"], "Choose the correct preposition.", "She's going to ___ that job.", [["apply for", true], ["apply to", false], ["apply at", false], ["candidate for", false]], "apply FOR a job.", "medium", "B1"),
  err("ex-manage-1", "chapter-21", ["manage"], "Correct the structure.", "We managed finishing on time.", ["We managed to finish on time.", "We managed to finish on time"], "manage TO + infinitive.", "medium", "B1"),
  mc("ex-ch21-mixed-1", "chapter-21", ["study", "learn"], "Choose the right verb. (No hint.)", "You can ___ a lot from your mistakes.", [["learn", true], ["study", false], ["teach", false], ["win", false]], "Gain knowledge from experience = learn.", "hard", "B1"),
];

/* ---- Chapter 22 — Home & Daily Life ---- */
const ch22: Exercise[] = [
  fill("ex-cook-1", "chapter-22", ["cook"], "Complete the sentence.", "Tonight I'm going to ___ (cook) pasta.", ["cook"], "cook + a dish/meal.", "easy", "A2"),
  fill("ex-clean-1", "chapter-22", ["clean"], "Complete the sentence.", "I need to ___ (clean) the bathroom.", ["clean"], "clean the house/room.", "easy", "A2"),
  mc("ex-wash-1", "chapter-22", ["wash"], "Choose the natural expression.", "You cooked, so I'll ___.", [["wash the dishes", true], ["wash the plates up to you", false], ["clean the dishes", false], ["make the dishes", false]], "wash the dishes / wash up.", "easy", "A2"),
  err("ex-wear-1", "chapter-22", ["wear", "put"], "Correct the mistake (state vs action).", "At work I put on a suit every day.", ["At work I wear a suit every day.", "At work I wear a suit every day"], "The ongoing state = wear (put on = the single action).", "medium"),
  fill("ex-rent-1", "chapter-22", ["rent"], "Complete the sentence.", "We're going to ___ (rent) a car for the holiday.", ["rent"], "rent a car/flat.", "easy", "B1"),
  fill("ex-share-1", "chapter-22", ["share"], "Add the correct preposition.", "Can you share your screen ___ me?", ["with"], "share something WITH someone.", "easy", "A2+"),
  mc("ex-ch22-mixed-1", "chapter-22", ["wear", "cook"], "Choose the right verb. (No hint.)", "She's ___ a beautiful blue dress today.", [["wearing", true], ["putting on", false], ["dressing", false], ["carrying on", false]], "The current state → wearing.", "hard", "B1"),
];

/* ---- Chapter 23 — Feelings & Opinions ---- */
const ch23: Exercise[] = [
  err("ex-enjoy-1", "chapter-23", ["enjoy"], "Correct the structure.", "I enjoy to swim in the sea.", ["I enjoy swimming in the sea.", "I enjoy swimming in the sea"], "enjoy + -ing (not 'enjoy to').", "medium", "A2+"),
  err("ex-prefer-1", "chapter-23", ["prefer"], "Correct the mistake.", "I prefer coffee than tea.", ["I prefer coffee to tea.", "I prefer coffee to tea"], "prefer X TO Y (not 'than').", "medium", "B1"),
  fill("ex-hate-1", "chapter-23", ["hate"], "Complete with the -ing form.", "He hates ___ (wait) for the bus.", ["waiting"], "hate + -ing.", "easy", "A2+"),
  err("ex-hope-1", "chapter-23", ["hope"], "Correct the vocabulary mistake.", "I wait that everything goes well.", ["I hope everything goes well.", "I hope everything goes well"], "'sperare' = hope; 'aspettare' = wait.", "medium", "A2+"),
  err("ex-believe-1", "chapter-23", ["believe"], "Correct the mistake.", "I am believing you.", ["I believe you.", "I believe you"], "'believe' is stative — present simple.", "medium", "B1"),
  err("ex-agree-1", "chapter-23", ["agree"], "Correct the mistake.", "I am agree with your idea.", ["I agree with your idea.", "I agree with your idea"], "'agree' is a verb: 'I agree' (not 'I am agree').", "medium", "A2+"),
  mc("ex-ch23-mixed-1", "chapter-23", ["enjoy", "prefer"], "Choose the natural option. (No hint.)", "Do you ___ tea or coffee?", [["prefer", true], ["prefer to", false], ["enjoy to", false], ["are preferring", false]], "prefer + noun for a choice.", "hard", "B1"),
];

/* ---- Chapter 24 — Health ---- */
const ch24: Exercise[] = [
  fill("ex-hurt-1", "chapter-24", ["hurt"], "Complete with the past of 'hurt'.", "I fell and ___ (hurt) my ankle.", ["hurt"], "'hurt' is invariable: hurt · hurt · hurt.", "easy", "A2+"),
  mc("ex-rest-1", "chapter-24", ["rest"], "Choose the natural expression.", "You look exhausted — you should ___.", [["get some rest", true], ["make some rest", false], ["do a rest", false], ["take a relax", false]], "get / have some rest.", "easy", "A2+"),
  fill("ex-exercise-1", "chapter-24", ["exercise"], "Complete the sentence.", "The doctor said I should ___ (exercise) more.", ["exercise"], "exercise = do physical activity.", "easy", "A2+"),
  fill("ex-recover-1", "chapter-24", ["recover"], "Add the correct preposition.", "It took her a month to recover ___ the operation.", ["from"], "recover FROM an illness/operation.", "medium", "B1"),
  err("ex-breathe-1", "chapter-24", ["breathe"], "Correct the spelling/word.", "I couldn't breath after running.", ["I couldn't breathe after running.", "I couldn't breathe after running"], "The verb is 'breathe' (-e); 'breath' is the noun.", "medium", "B1"),
  mc("ex-ch24-mixed-1", "chapter-24", ["hurt"], "Choose the natural sentence. (No hint.)", "My feet ___ after the long walk.", [["hurt", true], ["hurts", false], ["are hurting me", false], ["make me hurt", false]], "'My feet hurt' — the body part is the subject.", "hard", "B1"),
];

/* ---- Chapter 25 — Money & Shopping ---- */
const ch25: Exercise[] = [
  fill("ex-buy-1", "chapter-25", ["buy"], "Write the past of 'buy'.", "Yesterday I ___ (buy) a new laptop.", ["bought"], "Irregular: buy · bought · bought.", "easy", "A2"),
  fill("ex-sell-1", "chapter-25", ["sell"], "Write the past of 'sell'.", "They ___ (sell) their house last year.", ["sold"], "Irregular: sell · sold · sold.", "easy", "A2"),
  err("ex-pay-1", "chapter-25", ["pay"], "Correct the preposition.", "I paid the tickets online.", ["I paid for the tickets online.", "I paid for the tickets online"], "pay FOR the goods you buy.", "medium", "A2+"),
  err("ex-spend-1", "chapter-25", ["spend"], "Correct the preposition.", "I spent too much money for clothes.", ["I spent too much money on clothes.", "I spent too much money on clothes"], "spend money ON something.", "medium", "A2+"),
  err("ex-cost-1", "chapter-25", ["cost"], "Correct the structure.", "How much do you cost this jacket?", ["How much does this jacket cost?", "How much does this jacket cost"], "The thing is the subject: 'How much does it cost?'", "medium", "A2+"),
  mc("ex-save-1", "chapter-25", ["save"], "Choose the natural expression.", "Buying in bulk helps you ___.", [["save money", true], ["win money", false], ["spare money", false], ["economise money", false]], "save money / save time.", "easy", "A2+"),
  mc("ex-ch25-mixed-1", "chapter-25", ["pay", "buy"], "Choose the right verb. (No hint.)", "Can I ___ by card?", [["pay", true], ["buy", false], ["cost", false], ["spend", false]], "pay by card / in cash.", "hard", "A2+"),
];

/* ---- Chapter 26 — Plans, Problems & Technology ---- */
const ch26: Exercise[] = [
  err("ex-plan-1", "chapter-26", ["plan"], "Correct the structure.", "We plan visiting Japan next year.", ["We plan to visit Japan next year.", "We plan to visit Japan next year"], "plan TO + infinitive.", "medium", "A2+"),
  fill("ex-book-1", "chapter-26", ["book"], "Complete the sentence.", "Shall I ___ (book) a table for two?", ["book"], "book a table/flight/room.", "easy", "A2+"),
  fill("ex-cancel-1", "chapter-26", ["cancel"], "Complete with the past (BrE spelling).", "They ___ (cancel) the meeting at the last minute.", ["cancelled", "canceled"], "BrE: cancelled; AmE: canceled.", "medium", "B1"),
  mc("ex-solve-1", "chapter-26", ["solve"], "Choose the natural collocation.", "Working together, we can ___ this problem.", [["solve", true], ["resolve of", false], ["fix a problem to", false], ["answer", false]], "solve a problem.", "medium", "B1"),
  fill("ex-download-1", "chapter-26", ["download"], "Complete the sentence.", "You need to ___ (download) the app first.", ["download"], "download an app/file.", "easy", "A2+"),
  fill("ex-update-1", "chapter-26", ["update"], "Complete the sentence.", "Don't forget to ___ (update) your password.", ["update"], "update an app / your details.", "easy", "B1"),
  mc("ex-ch26-mixed-1", "chapter-26", ["book", "cancel"], "Choose the right verb. (No hint.)", "The flight was ___ because of the storm, so we lost our money.", [["cancelled", true], ["booked", false], ["solved", false], ["downloaded", false]], "A planned event that won't happen → cancelled.", "hard", "B1"),
];

export const part4bExercises: Exercise[] = [...ch21, ...ch22, ...ch23, ...ch24, ...ch25, ...ch26];
