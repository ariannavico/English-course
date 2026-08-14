import type { CefrLevel } from "./common";
import type { ExampleSentence } from "./example";

export interface VocabularyItem {
  id: string;
  word: string;
  partOfSpeech: string;
  italianMeaning: string;
  englishDefinition?: string;
  examples: ExampleSentence[];
  topic: string;
  cefrLevel: CefrLevel;
  relatedVerbs?: string[];
  collocations?: string[];
}
