/** Grammar topics referenced by chapters and exercises. Lightweight content model. */
export interface GrammarTopic {
  id: string;
  title: string;
  cefrLevel: "A2" | "A2+" | "B1";
  /** Short markdown-ish explanation blocks rendered by <GrammarExplanation>. */
  blocks: { heading?: string; text: string; examples?: string[] }[];
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: "verb-forms",
    title: "The five verb forms",
    cefrLevel: "A2",
    blocks: [
      {
        text: "Every English verb has five basic forms. Learn them together for each new verb — especially irregular ones.",
      },
      {
        heading: "The forms",
        text: "1) infinitive (take) · 2) third person -s (takes) · 3) past simple (took) · 4) past participle (taken) · 5) -ing form (taking).",
        examples: ["take · takes · took · taken · taking", "work · works · worked · worked · working"],
      },
      {
        heading: "Why it matters",
        text: "Tenses are built from these forms. Present perfect uses the past participle; continuous tenses use the -ing form. If you know the forms, you can build any tense.",
      },
    ],
  },
  {
    id: "present-simple",
    title: "Present Simple",
    cefrLevel: "A2",
    blocks: [
      {
        text: "Use the present simple for habits, routines, facts and timetables — things that are generally or always true.",
        examples: ["I take the bus every day.", "Water boils at 100°C."],
      },
      {
        heading: "Third person -s",
        text: "With he / she / it, add -s (or -es) to the verb: he takes, she watches, it goes.",
        examples: ["She takes notes in every lesson."],
      },
      {
        heading: "Negatives and questions",
        text: "Use do / does + the base form (no -s on the main verb).",
        examples: ["He doesn't take sugar.", "Do you take the train?"],
      },
      {
        heading: "Common signals",
        text: "always, usually, often, sometimes, never, every day, on Mondays.",
      },
    ],
  },
  {
    id: "present-continuous",
    title: "Present Continuous",
    cefrLevel: "A2",
    blocks: [
      {
        text: "Use the present continuous for actions happening now or around now, and for temporary situations. Form: am / is / are + -ing.",
        examples: ["I'm reading a great book at the moment.", "She's studying for an exam this week."],
      },
      {
        heading: "Now vs habit",
        text: "Present continuous = happening now. Present simple = a habit or general truth. This is the contrast Italians most often get wrong.",
        examples: ["I usually take the bus, but today I'm walking.", "He works in Rome, but this month he's working in Milan."],
      },
      {
        heading: "Stative verbs",
        text: "Some verbs describe states, not actions, and are normally NOT used in the continuous: know, like, want, need, believe, understand.",
        examples: ["I know the answer. (NOT I am knowing)", "Do you want a coffee? (NOT Are you wanting)"],
      },
      {
        heading: "Future arrangements",
        text: "Present continuous can express fixed future arrangements, usually with a time expression.",
        examples: ["We're meeting Sara tomorrow at six."],
      },
      {
        heading: "Common signals",
        text: "now, right now, at the moment, currently, today, this week, Look! Listen!",
      },
    ],
  },
  {
    id: "past-simple",
    title: "Past Simple",
    cefrLevel: "A2",
    blocks: [
      {
        text: "Use the past simple for finished actions at a definite time in the past.",
        examples: ["We took a taxi yesterday.", "She lived in London for two years."],
      },
      {
        heading: "Regular vs irregular",
        text: "Regular verbs add -ed (work → worked). Irregular verbs change form and must be learned (take → took, go → went). See the Irregular Verb Map.",
        examples: ["I watched a film last night.", "He wrote three emails this morning."],
      },
      {
        heading: "Negatives and questions",
        text: "Use did / didn't + the BASE form. The past marker is on 'did', not on the main verb — a very common Italian error.",
        examples: ["I didn't go out. (NOT I didn't went)", "Did you take the bus?"],
      },
      {
        heading: "Common signals",
        text: "yesterday, last week / year, in 2019, two days ago, when I was young.",
      },
    ],
  },
  {
    id: "past-continuous",
    title: "Past Continuous",
    cefrLevel: "A2+",
    blocks: [
      {
        text: "Use the past continuous for an action in progress at a moment in the past. Form: was / were + -ing.",
        examples: ["At 8 p.m. yesterday I was having dinner.", "They were waiting when I arrived."],
      },
      {
        heading: "Interrupted actions",
        text: "A long background action (past continuous) is often interrupted by a short action (past simple). Use WHILE + continuous and WHEN + simple.",
        examples: ["I was cooking when the phone rang.", "While we were walking, it started to rain."],
      },
      {
        heading: "Watch out",
        text: "Stative verbs (know, want, like) stay in the past simple even here.",
        examples: ["I knew the answer. (NOT I was knowing)"],
      },
      {
        heading: "Common signals",
        text: "while, when, as, at that moment, at 7 o'clock yesterday, all day.",
      },
    ],
  },
  {
    id: "future-forms",
    title: "Talking about the Future",
    cefrLevel: "B1",
    blocks: [
      {
        text: "English has several ways to talk about the future. Choosing the right one depends on how sure or how planned the action is.",
      },
      {
        heading: "will",
        text: "Decisions made now, predictions, offers and promises.",
        examples: ["It's cold — I'll close the window.", "I think it will rain tomorrow.", "I'll help you."],
      },
      {
        heading: "be going to",
        text: "Plans and intentions decided before now, and predictions based on present evidence.",
        examples: ["We're going to visit Rome next month.", "Look at those clouds — it's going to rain."],
      },
      {
        heading: "present continuous",
        text: "Fixed arrangements with other people, usually with a time.",
        examples: ["I'm meeting the dentist at 4."],
      },
      {
        heading: "The key decision",
        text: "Spontaneous decision → will. Existing plan → going to. Fixed arrangement → present continuous.",
      },
    ],
  },
  {
    id: "present-perfect",
    title: "Present Perfect",
    cefrLevel: "B1",
    blocks: [
      {
        text: "Form: have / has + past participle. It links the past to now — the action is finished, but its time is indefinite or its result matters now.",
        examples: ["I have finished my homework. (it's done now)", "She has lost her keys. (she can't get in now)"],
      },
      {
        heading: "Experience: ever / never",
        text: "Talk about life experience without saying when.",
        examples: ["Have you ever been to London?", "I've never eaten sushi."],
      },
      {
        heading: "just / already / yet",
        text: "just = a short time ago; already = sooner than expected; yet = up to now (questions/negatives).",
        examples: ["I've just arrived.", "She's already left.", "Have you finished yet?"],
      },
      {
        heading: "for / since",
        text: "for + a period (for two years); since + a starting point (since 2020).",
        examples: ["I've lived here for five years.", "We've known each other since school."],
      },
      {
        heading: "The Italian trap",
        text: "With a FINISHED past time (yesterday, last week, in 2019) use the PAST SIMPLE, not the present perfect — even though Italian uses the passato prossimo for both.",
        examples: ["I saw him yesterday. (NOT I have seen him yesterday)"],
      },
    ],
  },
  {
    id: "present-perfect-continuous",
    title: "Present Perfect Continuous",
    cefrLevel: "B1",
    blocks: [
      {
        text: "Form: have / has been + -ing. It emphasises the DURATION or ongoing nature of an activity that started in the past and is still going (or has just stopped).",
        examples: ["I've been studying English for two years.", "It's been raining all day."],
      },
      {
        heading: "Result of a recent activity",
        text: "Use it to explain a present situation with a recent continuous cause.",
        examples: ["I'm tired because I've been running.", "Your eyes are red — have you been crying?"],
      },
      {
        heading: "Simple vs continuous",
        text: "Present perfect SIMPLE focuses on the result/completion; CONTINUOUS focuses on the activity and its duration.",
        examples: ["I've read the report. (it's done) / I've been reading the report. (activity, maybe not finished)"],
      },
      {
        heading: "Watch out",
        text: "Stative verbs (know, be, have) do NOT take the continuous — use the simple: 'I've known her for years'.",
      },
    ],
  },
  {
    id: "past-perfect",
    title: "Past Perfect",
    cefrLevel: "B1",
    blocks: [
      {
        text: "Form: had + past participle. It is the 'earlier past' — an action completed BEFORE another past action.",
        examples: ["When I arrived, the train had already left.", "She had never seen the sea before that trip."],
      },
      {
        heading: "Sequencing the past",
        text: "Use it to make clear which past event happened first. The later event is in the past simple.",
        examples: ["After I had finished dinner, I watched a film.", "They were late because they had missed the bus."],
      },
      {
        heading: "Common signals",
        text: "already, just, never, by the time, before, after, when.",
      },
      {
        heading: "Don't overuse it",
        text: "You only need the past perfect when the order isn't already clear from 'before/after' or the context.",
      },
    ],
  },
  {
    id: "modal-verbs",
    title: "Modal Verbs",
    cefrLevel: "B1",
    blocks: [
      {
        text: "Modals (can, could, must, should, may, might, will, would) add meaning like ability, obligation or possibility. Form: modal + BASE form — no 'to', no -s, no auxiliary 'do'.",
        examples: ["She can swim. (NOT She cans / She can to swim)", "You must go. (NOT You must to go)"],
      },
      {
        heading: "Ability & permission",
        text: "can / could = ability; can / may = permission.",
        examples: ["I can drive.", "Could you help me?", "May I come in?"],
      },
      {
        heading: "Obligation & advice",
        text: "must / have to = obligation; should / ought to = advice; mustn't = prohibition.",
        examples: ["You must wear a seatbelt.", "You should rest.", "You mustn't smoke here."],
      },
      {
        heading: "mustn't vs don't have to",
        text: "mustn't = it's forbidden. don't have to = it's not necessary (but you can). These are NOT the same.",
        examples: ["You mustn't park here. (forbidden) / You don't have to pay. (it's free — no obligation)"],
      },
      {
        heading: "Possibility & certainty",
        text: "may / might / could = possibility; must = logical certainty; can't = impossibility.",
        examples: ["It might rain.", "He must be tired.", "That can't be true."],
      },
    ],
  },
  {
    id: "conditionals",
    title: "Conditionals (0 / 1 / 2)",
    cefrLevel: "B1",
    blocks: [
      {
        text: "A conditional has an 'if' clause (the condition) and a main clause (the result). The tenses you use signal how real the situation is.",
      },
      {
        heading: "Zero conditional — general truths",
        text: "If + present simple, present simple. For things always true.",
        examples: ["If you heat ice, it melts.", "If it rains, the ground gets wet."],
      },
      {
        heading: "First conditional — real future",
        text: "If + present simple, will + base. For likely future situations.",
        examples: ["If it rains tomorrow, I'll stay home.", "If you study, you'll pass."],
      },
      {
        heading: "Second conditional — unreal/hypothetical",
        text: "If + past simple, would + base. For imaginary or unlikely present/future situations.",
        examples: ["If I won the lottery, I would travel the world.", "If I were you, I'd apologise."],
      },
      {
        heading: "The Italian trap",
        text: "Do NOT use 'will' in the if-clause of a first conditional. English keeps the present there.",
        examples: ["If it rains… (NOT If it will rain…)"],
      },
    ],
  },
  {
    id: "passive-voice",
    title: "Passive Voice",
    cefrLevel: "B1",
    blocks: [
      {
        text: "Form: be + past participle. Use the passive when the action matters more than who does it, or when the doer is unknown or obvious.",
        examples: ["English is spoken here.", "The window was broken last night."],
      },
      {
        heading: "Choosing active or passive",
        text: "Active: focus on the doer (Someone stole my bike). Passive: focus on the receiver of the action (My bike was stolen).",
        examples: ["They built the bridge in 1930. → The bridge was built in 1930."],
      },
      {
        heading: "The agent: by",
        text: "Add 'by + doer' only when it's important information.",
        examples: ["The book was written by a famous author."],
      },
      {
        heading: "Tenses",
        text: "The tense lives in 'be': is/are made (present), was/were made (past), has been made (present perfect), will be made (future).",
        examples: ["The rooms are cleaned every day.", "The email will be sent tomorrow."],
      },
    ],
  },
  {
    id: "phrasal-verb-system",
    title: "The Phrasal Verb System",
    cefrLevel: "B1",
    blocks: [
      {
        text: "A phrasal verb = a base verb + a particle (up, off, out, on…). The particle often changes the meaning completely: 'take' vs 'take off' vs 'take up'.",
        examples: ["look (see) → look after (care for) → look for (search)"],
      },
      {
        heading: "Literal vs idiomatic",
        text: "Some are literal (sit down, come back); many are idiomatic — you can't guess the meaning from the words (give up = stop trying).",
        examples: ["put on your coat (literal)", "make up a story = invent it (idiomatic)"],
      },
      {
        heading: "Separable verbs",
        text: "With a separable phrasal verb, a noun object can go before or after the particle — but a PRONOUN must go in the middle.",
        examples: ["turn off the light / turn the light off", "turn it off (NOT turn off it)"],
      },
      {
        heading: "Inseparable verbs",
        text: "Some phrasal verbs never split: the object always follows the whole verb.",
        examples: ["look after the children / look after them (NOT look the children after)"],
      },
      {
        heading: "Learn them by family",
        text: "Group them by base verb (all the TAKE phrasals) or by particle to see the patterns.",
      },
    ],
  },
  {
    id: "irregular-patterns",
    title: "Irregular Verb Patterns",
    cefrLevel: "A2+",
    blocks: [
      {
        text: "Irregular verbs are easier to learn in pattern groups than as an alphabetical list. Compare the three forms: infinitive · past · past participle.",
      },
      {
        heading: "AAA — no change",
        text: "All three forms are the same.",
        examples: ["cut · cut · cut", "put · put · put", "cost · cost · cost"],
      },
      {
        heading: "ABB — past = participle",
        text: "The past and the past participle share one form.",
        examples: ["buy · bought · bought", "make · made · made", "teach · taught · taught"],
      },
      {
        heading: "ABA — infinitive = participle",
        text: "The past participle returns to the infinitive form.",
        examples: ["come · came · come", "become · became · become", "run · ran · run"],
      },
      {
        heading: "ABC — all different",
        text: "Every form is different — these need the most attention.",
        examples: ["go · went · gone", "take · took · taken", "see · saw · seen"],
      },
    ],
  },
];
