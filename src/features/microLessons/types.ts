/**
 * Micro-lessons (spec §42): 2–5 minutes, one problem each. They are the "fix"
 * end of the learning loop (§43): detected weakness → micro-lesson → practice.
 * Practice reuses existing exercises, so a lesson is pure content + references.
 */

export interface MicroLessonBlock {
  text: string;
  examples?: string[];
}

export interface MicroLesson {
  id: string;
  emoji: string;
  title: string;
  /** The single confusion this lesson resolves, in one line. */
  problem: string;
  minutes: number;
  explanation: MicroLessonBlock[];
  /** A memorable rule of thumb. */
  keyRule: string;
  /** Exercise tags this lesson addresses — matched by weakness detection. */
  addressesTags: string[];
  /** Existing exercise ids used for the practice step. */
  practiceExerciseIds: string[];
  /** Optional Verb Universe to explore afterwards. */
  relatedUniverse?: string;
}
