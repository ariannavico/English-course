import type { MoveKind } from "./types";

export interface MoveMeta {
  kind: MoveKind;
  label: string;
  /** One-line instruction shown to the learner for this step. */
  ask: string;
  /** The discourse markers that signal this move well (heuristic, normalised). */
  markers: string[];
  /** Sentence starters offered as scaffolding chips. */
  starters: string[];
}

/**
 * The canonical B2 argument arc, in order. Marker sets are global (a good "claim"
 * is signalled the same way whatever the motion), while the per-motion model and
 * content cues live in the data. Keeping the arc in one place means every motion
 * trains the *same transferable shape*.
 */
export const MOVE_META: Record<MoveKind, MoveMeta> = {
  claim: {
    kind: "claim",
    label: "Claim",
    ask: "State your position clearly. Where do you stand?",
    markers: [
      "in my view", "in my opinion", "i believe", "i think", "i'd argue",
      "i would argue", "personally", "it seems to me", "to my mind",
      "from my point of view", "i'm convinced", "i am convinced", "surely",
    ],
    starters: ["In my view,…", "I'd argue that…", "Personally, I believe…"],
  },
  reason: {
    kind: "reason",
    label: "Reason",
    ask: "Why? Give the main reason behind your position.",
    markers: [
      "because", "since", "as", "the reason", "this is because", "due to",
      "owing to", "given that", "that's why", "that is why", "the main reason",
    ],
    starters: ["This is because…", "The main reason is that…", "…since…"],
  },
  evidence: {
    kind: "evidence",
    label: "Evidence",
    ask: "Back it up. Give an example or piece of evidence.",
    markers: [
      "for example", "for instance", "such as", "research", "studies",
      "statistics", "in fact", "according to", "a good example", "to illustrate",
      "take", "consider", "evidence", "data shows", "study found",
    ],
    starters: ["For example,…", "Research suggests that…", "Take the case of…"],
  },
  counter: {
    kind: "counter",
    label: "Counter-argument",
    ask: "Be fair — admit what the other side would say.",
    markers: [
      "admittedly", "some might argue", "some may argue", "it's true that",
      "it is true that", "of course", "granted", "i accept that", "on the one hand",
      "critics", "opponents", "it could be argued", "some people believe",
      "some people argue", "one could argue",
    ],
    starters: ["Admittedly,…", "Some might argue that…", "It's true that…"],
  },
  rebuttal: {
    kind: "rebuttal",
    label: "Rebuttal",
    ask: "Now push back. Why does your position still hold?",
    markers: [
      "however", "nevertheless", "nonetheless", "even so", "that said", "but",
      "on the other hand", "still", "despite this", "yet", "in spite of",
      "even though", "the fact remains",
    ],
    starters: ["However,…", "That said,…", "Even so,…"],
  },
};

/** The fixed order the moves are built and assembled in. */
export const MOVE_ORDER: MoveKind[] = ["claim", "reason", "evidence", "counter", "rebuttal"];
