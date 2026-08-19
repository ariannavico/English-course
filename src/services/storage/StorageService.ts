/**
 * Persistence abstraction. The rest of the app depends ONLY on this interface,
 * never on localStorage directly. Swap in IndexedDB or a backend later by
 * providing another implementation — no call sites change.
 */
export interface StorageService {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  /** Remove every key owned by the app (namespaced). */
  clearAll(): void;
  /** List app-owned keys (without the namespace prefix). */
  keys(): string[];
}

/** Central registry of storage keys so they never drift apart. */
export const STORAGE_KEYS = {
  progress: "progress",
  settings: "settings",
  spacedRepetition: "spacedRepetition",
  mistakes: "mistakes",
  errorLog: "errorLog",
  missions: "missions",
  fluency: "fluency",
  paraphrase: "paraphrase",
  story: "story",
  assessment: "assessment",
  argumentation: "argumentation",
  placement: "placement",
  social: "social",
  register: "register",
  writing: "writing",
  collocations: "collocations",
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
