import type { Assessment } from "@/features/assessment/types";
import { mc, choice, fill } from "@/data/exercises/factories";
import { getParaphraseItem } from "@/data/paraphrase";

const READING_PASSAGE =
  "Mark moved to Berlin last year for a new job. At first, he found the language a real barrier — even ordering a coffee felt stressful. But he signed up for evening classes and forced himself to speak, even when he made mistakes. Six months on, he can hold a proper conversation, and he says the key was simply not being afraid to sound silly.";

const LISTENING_TEXT =
  "Hi, this is a message for Sarah. It's Tom from the dentist's. I'm calling to say we need to move your appointment on Thursday — the dentist is off sick. Could you call us back to rebook? Any time before five is fine. Thanks!";

/** The B2 practical assessment. Fresh items, one output: a readiness report. */
export const b2Practical: Assessment = {
  id: "assessment-b2",
  title: "B2 Practical Assessment",
  description:
    "A short, mixed assessment across reading, listening, grammar, verbs, vocabulary, paraphrasing, writing, speaking and interaction. It gives you a readiness estimate — not a certification.",
  tasks: [
    /* Reading */
    {
      kind: "objective",
      id: "as-read-1",
      competence: "reading",
      context: READING_PASSAGE,
      exercise: mc(
        { id: "as-read-1", instructions: "Read the text and answer.", explanation: "The text's point is that practising despite mistakes helped him.", tags: ["reading"], cefr: "B1" },
        "What is the main point of the text?",
        [
          ["Practising despite mistakes helped Mark improve.", true],
          ["Mark regrets moving to Berlin.", false],
          ["Language classes are a waste of time.", false],
          ["Ordering coffee is easy in German.", false],
        ],
      ),
    },
    {
      kind: "objective",
      id: "as-read-2",
      competence: "reading",
      context: READING_PASSAGE,
      exercise: mc(
        { id: "as-read-2", instructions: "Read the text and answer.", explanation: "He took evening classes and made himself speak a lot.", tags: ["reading"], cefr: "B1" },
        "How did Mark improve his language?",
        [
          ["By taking evening classes and forcing himself to speak.", true],
          ["By avoiding conversations until he was fluent.", false],
          ["By only reading books.", false],
          ["By moving back home.", false],
        ],
      ),
    },
    /* Listening (TTS) */
    {
      kind: "objective",
      id: "as-listen-1",
      competence: "listening",
      audio: LISTENING_TEXT,
      exercise: mc(
        { id: "as-listen-1", instructions: "Listen, then answer.", explanation: "Tom is calling to move (change) the appointment.", tags: ["listening"], cefr: "B1" },
        "Why is Tom calling?",
        [
          ["To change Sarah's appointment.", true],
          ["To cancel forever.", false],
          ["To confirm the time is fine.", false],
          ["To sell a new treatment.", false],
        ],
      ),
    },
    {
      kind: "objective",
      id: "as-listen-2",
      competence: "listening",
      audio: LISTENING_TEXT,
      exercise: mc(
        { id: "as-listen-2", instructions: "Listen again if you need to, then answer.", explanation: "She should call back to rebook, before five.", tags: ["listening"], cefr: "B1" },
        "What should Sarah do?",
        [
          ["Call back to rebook, before five.", true],
          ["Come in on Thursday as planned.", false],
          ["Wait for another message.", false],
          ["Email a complaint.", false],
        ],
      ),
    },
    /* Grammar in context */
    {
      kind: "objective",
      id: "as-gram-1",
      competence: "grammar",
      exercise: fill(
        { id: "as-gram-1", instructions: "Complete with the correct form.", explanation: "'since 2019' + still true → present perfect.", tags: ["grammar", "present-perfect"], difficulty: "medium" },
        "I ___ (live) in this city since 2019.",
        ["have lived", "'ve lived"],
      ),
    },
    {
      kind: "objective",
      id: "as-gram-2",
      competence: "grammar",
      exercise: choice(
        { id: "as-gram-2", instructions: "Choose the natural form.", explanation: "First conditional: present in the if-clause.", tags: ["grammar", "conditionals"], difficulty: "medium" },
        "tense-choice",
        "If it {{blank}} tomorrow, we'll cancel the picnic.",
        [["rains", true], ["will rain", false], ["rained", false], ["would rain", false]],
      ),
    },
    /* Verb choice */
    {
      kind: "objective",
      id: "as-verb-1",
      competence: "verb-choice",
      exercise: choice(
        { id: "as-verb-1", instructions: "Choose the right verb.", explanation: "You MAKE a decision.", tags: ["verb-choice", "make", "do"], difficulty: "medium" },
        "verb-choice",
        "It's a big one, but you'll have to {{blank}} a decision soon.",
        [["make", true], ["do", false], ["take", false], ["have", false]],
      ),
    },
    {
      kind: "objective",
      id: "as-verb-2",
      competence: "verb-choice",
      exercise: choice(
        { id: "as-verb-2", instructions: "Choose the right verb.", explanation: "Towards the speaker → BRING.", tags: ["verb-choice", "take", "bring"], difficulty: "medium" },
        "verb-choice",
        "I'm thirsty — could you {{blank}} me a glass of water?",
        [["bring", true], ["take", false], ["carry", false], ["get", false]],
      ),
    },
    /* Vocabulary */
    {
      kind: "objective",
      id: "as-vocab-1",
      competence: "vocabulary",
      exercise: mc(
        { id: "as-vocab-1", instructions: "Choose the natural collocation.", explanation: "'pay attention' is fixed.", tags: ["vocabulary", "collocation"], difficulty: "medium" },
        "Please ___ to the safety instructions.",
        [["pay attention", true], ["make attention", false], ["give attention on", false], ["do attention", false]],
      ),
    },
    {
      kind: "objective",
      id: "as-vocab-2",
      competence: "vocabulary",
      exercise: mc(
        { id: "as-vocab-2", instructions: "Choose the natural adjective.", explanation: "'heavy traffic' is the natural collocation.", tags: ["vocabulary", "collocation"], difficulty: "medium" },
        "We were late because of ___ traffic.",
        [["heavy", true], ["strong", false], ["big", false], ["thick", false]],
      ),
    },
    /* Paraphrasing */
    {
      kind: "paraphrase",
      id: "as-para-1",
      competence: "paraphrasing",
      prompt: "Explain this word to someone who doesn't know it — without using the word itself.",
      item: getParaphraseItem("pp-commute")!,
    },
    /* Writing */
    {
      kind: "produce",
      id: "as-write-1",
      competence: "writing",
      produce: {
        kind: "produce",
        id: "as-write-1",
        label: "Writing",
        prompt:
          "Write a short, polite email to a hotel: your room wasn't cleaned during your stay, and you'd like them to sort it out.",
        targetSkills: ["writing", "complaining politely", "register"],
        suggestedChunks: ["I'm writing to...", "I was disappointed to find...", "I would appreciate it if..."],
        keyElements: ["room", "clean", "sort"],
        modelAnswer:
          "Dear Sir or Madam, I'm writing regarding my recent stay (room 204). I was disappointed to find that my room wasn't cleaned during the two nights I stayed. I would appreciate it if you could look into this and let me know how you intend to resolve it. Kind regards, …",
        naturalnessNotes: ["Formal email openers (“I'm writing regarding…”) set the right register."],
      },
    },
    /* Speaking & argumentation */
    {
      kind: "produce",
      id: "as-speak-1",
      competence: "speaking",
      produce: {
        kind: "produce",
        id: "as-speak-1",
        label: "Speaking & argumentation",
        prompt:
          "Do you think children should learn a second language from a very young age? Give your view with at least two reasons. Speak aloud or type.",
        targetSkills: ["argumentation", "expressing opinions", "giving reasons"],
        suggestedChunks: ["In my view...", "One reason is that...", "On the other hand...", "That's why I think..."],
        keyElements: ["young", "language", "reason"],
        modelAnswer:
          "In my view, yes — the earlier the better. One reason is that young children pick up pronunciation far more easily than adults. On the other hand, it shouldn't feel like pressure; it works best through play. That's why I think early exposure is valuable, as long as it stays fun.",
        allowSpeech: true,
      },
    },
    /* Interaction */
    {
      kind: "produce",
      id: "as-inter-1",
      competence: "interaction",
      produce: {
        kind: "produce",
        id: "as-inter-1",
        label: "Interaction",
        prompt:
          "You're at a friend's dinner and you've just been served a dish with nuts — you're allergic. Respond politely: explain and handle the situation without making it awkward.",
        targetSkills: ["interaction", "being polite", "problem-solving"],
        suggestedChunks: ["I'm so sorry, but...", "the thing is...", "would it be possible to...?"],
        keyElements: ["allergic", "sorry", "nuts"],
        modelAnswer:
          "Oh, this looks amazing — I'm so sorry, but the thing is I'm actually allergic to nuts. Please don't worry about it at all! Would it be possible to have a little of something else? Honestly, anything's fine.",
        allowSpeech: true,
      },
    },
  ],
};
