import type { CefrLevel } from "./common";

export type ChapterSectionType =
  | "explanation"
  | "comparison"
  | "verb"
  | "vocabulary"
  | "dialogue"
  | "reading"
  | "speaking"
  | "exercise"
  | "review";

/**
 * A page is built dynamically by walking its sections. `content` holds inline
 * markdown-ish text; `references` point at verbs/vocab/exercises to embed.
 */
export interface ChapterSection {
  id: string;
  type: ChapterSectionType;
  title: string;
  content?: string;
  references?: string[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  /** Which of the 5 parts of the course this chapter belongs to. */
  part: 1 | 2 | 3 | 4 | 5;
  description: string;
  objectives: string[];
  cefrLevel: CefrLevel;
  grammarTopics: string[];
  verbIds: string[];
  phrasalVerbIds: string[];
  vocabularyIds: string[];
  sections: ChapterSection[];
  exerciseIds: string[];
  reviewIds?: string[];
  estimatedMinutes: number;
}
