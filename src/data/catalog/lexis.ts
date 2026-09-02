import type { Level, SectionKind, Unit } from "@/types";

/**
 * Catalog Units for the lexis-style sections (feat/second-release, Phase 2):
 * Verbs, Phrasal, Vocabulary, Adjectives, Adverbs, Connectors. Each Unit is a
 * studiable set; the actual word/connector content is authored behind the Unit
 * in later steps. Adjectives/Adverbs/Vocabulary intentionally share this one
 * builder/engine (proposal §11.2) — they differ only by section and part of speech.
 */
const make = (section: SectionKind, prefix: string) =>
  (level: Level, slug: string, title: string, category?: string): Unit => ({
    id: `${prefix}-${slug}`,
    section,
    title,
    level,
    category,
    tags: [section, level.toLowerCase()],
  });

/* ------------------------------- Verbs ------------------------------- */
const vb = make("verbs", "vb");
export const verbUnits: Unit[] = [
  vb("A1", "everyday", "Common everyday verbs", "Core"),
  vb("A1", "daily", "Daily routine verbs", "Core"),
  vb("A2", "movement", "Verbs of movement", "Concrete"),
  vb("A2", "travel", "Travel verbs", "Concrete"),
  vb("A2", "communication", "Verbs of communication", "Concrete"),
  vb("B1", "thinking", "Verbs of thinking", "Abstract"),
  vb("B1", "feeling", "Verbs of feeling", "Abstract"),
  vb("B1", "work", "Work verbs", "Domains"),
  vb("B1", "study", "Study verbs", "Domains"),
  vb("B1", "relationships", "Relationship verbs", "Domains"),
  vb("B2", "business", "Business verbs", "Domains"),
  vb("B2", "academic", "Academic verbs", "Formal"),
  vb("C1", "advanced", "Advanced & abstract verbs", "Formal"),
];

/* ------------------------------ Phrasal ------------------------------ */
const phr = make("phrasal", "phr");
export const phrasalUnits: Unit[] = [
  phr("A2", "essentials", "Everyday phrasal verbs", "Core"),
  phr("B1", "common", "Common phrasal verbs", "Core"),
  phr("B2", "idiomatic", "Idiomatic phrasal verbs", "Advanced"),
  phr("C1", "advanced", "Advanced phrasal verbs", "Advanced"),
];

/* --------------------------- Irregular verbs ------------------------- */
const irr = make("irregular", "irr");
export const irregularUnits: Unit[] = [
  irr("A2", "same-form", "Same form (cut · put · hit)", "No change"),
  irr("A2", "full-change", "Full change (go · went · gone)", "Common"),
  irr("A2", "vowel-change", "Vowel change (drink · drank · drunk)", "Common"),
  irr("A2", "t-ending", "-t endings (keep · kept)", "Common"),
  irr("B1", "ought-aught", "-ought / -aught (buy · bought)", "Sound groups"),
  irr("B1", "en-participle", "-en participles (break · broke · broken)", "Sound groups"),
  irr("B2", "advanced", "Rare & advanced irregulars", "Advanced"),
];

/* ---------------------------- Vocabulary ----------------------------- */
const voc = make("vocabulary", "voc");
export const vocabularyUnits: Unit[] = [
  // A1 / A2 — concrete, everyday
  voc("A1", "family", "Family", "Everyday"),
  voc("A1", "home", "Home", "Everyday"),
  voc("A1", "food", "Food", "Everyday"),
  voc("A1", "clothes", "Clothes", "Everyday"),
  voc("A1", "body", "Body", "Everyday"),
  voc("A1", "daily-routine", "Daily routine", "Everyday"),
  voc("A1", "time", "Time", "Everyday"),
  voc("A1", "numbers", "Numbers", "Everyday"),
  voc("A2", "shopping", "Shopping", "Everyday"),
  voc("A2", "weather", "Weather", "Everyday"),
  voc("A2", "places", "Places", "Everyday"),
  voc("A2", "transport", "Transport", "Everyday"),
  voc("A2", "travel", "Travel", "Everyday"),
  voc("A2", "hobbies", "Hobbies", "Everyday"),
  // B1 — life & society
  voc("B1", "work", "Work", "Life & society"),
  voc("B1", "education", "Education", "Life & society"),
  voc("B1", "health", "Health", "Life & society"),
  voc("B1", "relationships", "Relationships", "Life & society"),
  voc("B1", "environment", "Environment", "Life & society"),
  voc("B1", "technology", "Technology", "Life & society"),
  voc("B1", "media", "Media", "Life & society"),
  voc("B1", "society", "Society", "Life & society"),
  voc("B1", "money", "Money", "Life & society"),
  voc("B1", "personality", "Personality", "Life & society"),
  voc("B1", "emotions", "Emotions", "Life & society"),
  // B2 / C1 — abstract & formal
  voc("B2", "politics", "Politics", "Abstract & formal"),
  voc("B2", "economics", "Economics", "Abstract & formal"),
  voc("B2", "business", "Business", "Abstract & formal"),
  voc("B2", "science", "Science", "Abstract & formal"),
  voc("B2", "culture", "Culture", "Abstract & formal"),
  voc("B2", "psychology", "Psychology", "Abstract & formal"),
  voc("C1", "academic", "Academic vocabulary", "Abstract & formal"),
  voc("C1", "abstract-concepts", "Abstract concepts", "Abstract & formal"),
  voc("C1", "formal", "Formal vocabulary", "Abstract & formal"),
  voc("C1", "idiomatic", "Idiomatic vocabulary", "Abstract & formal"),
];

/* ----------------------------- Adjectives ---------------------------- */
const adj = make("adjectives", "adj");
export const adjectiveUnits: Unit[] = [
  adj("A2", "appearance", "Appearance"),
  adj("A2", "size-shape", "Size & shape"),
  adj("A2", "describing-things", "Describing things"),
  adj("B1", "personality", "Personality"),
  adj("B1", "feelings", "Feelings"),
  adj("B1", "opinions", "Opinions"),
  adj("B1", "describing-places", "Describing places"),
  adj("B1", "relationships", "Relationships"),
  adj("B2", "work", "Work"),
  adj("B2", "positive-negative", "Positive vs negative"),
  adj("C1", "advanced", "Advanced adjectives"),
];

/* ------------------------------ Adverbs ------------------------------ */
const adv = make("adverbs", "adv");
export const adverbUnits: Unit[] = [
  adv("A2", "frequency", "Adverbs of frequency"),
  adv("A2", "time", "Adverbs of time"),
  adv("A2", "place", "Adverbs of place"),
  adv("A2", "manner", "Adverbs of manner"),
  adv("B1", "degree", "Adverbs of degree"),
  adv("B2", "sentence", "Sentence adverbs"),
  adv("B2", "linking", "Linking adverbs"),
  adv("C1", "advanced", "Advanced adverbs"),
];

/* ----------------------------- Connectors ---------------------------- */
const con = make("connectors", "con");
export const connectorUnits: Unit[] = [
  con("B1", "addition", "Addition", "Building"),
  con("B1", "sequence", "Sequence", "Building"),
  con("B1", "cause", "Cause", "Reasoning"),
  con("B1", "effect", "Effect", "Reasoning"),
  con("B1", "contrast", "Contrast", "Balancing"),
  con("B2", "concession", "Concession", "Balancing"),
  con("B2", "comparison", "Comparison", "Balancing"),
  con("B2", "condition", "Condition", "Reasoning"),
  con("B2", "purpose", "Purpose", "Reasoning"),
  con("B2", "conclusion", "Conclusion", "Building"),
];
