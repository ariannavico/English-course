import type { LexItem } from "@/features/lexis/types";

/** Verb content, keyed to the vb-* catalog Units. Base form + Italian + example. */
const v = (unitId: string, word: string, it: string, example: string): LexItem => ({
  id: `lx-vb-${word.replace(/[^a-z]+/gi, "-").toLowerCase()}`,
  unitId,
  word,
  it,
  pos: "verb",
  example,
});

export const verbItems: LexItem[] = [
  // vb-everyday — A1, Core
  v("vb-everyday", "be", "essere", "I am tired and she is happy."),
  v("vb-everyday", "have", "avere", "We have two cats at home."),
  v("vb-everyday", "do", "fare", "What do you do at the weekend?"),
  v("vb-everyday", "go", "andare", "I go to work by train."),
  v("vb-everyday", "make", "fare/creare", "She makes a great coffee."),
  v("vb-everyday", "get", "ottenere/prendere", "I get up at seven every day."),
  v("vb-everyday", "want", "volere", "They want a bigger house."),
  v("vb-everyday", "need", "avere bisogno di", "You need a warm coat today."),

  // vb-daily — A1, Core
  v("vb-daily", "wake up", "svegliarsi", "I wake up before the alarm rings."),
  v("vb-daily", "eat", "mangiare", "We eat dinner at eight."),
  v("vb-daily", "drink", "bere", "She drinks coffee in the morning."),
  v("vb-daily", "sleep", "dormire", "He sleeps eight hours a night."),
  v("vb-daily", "work", "lavorare", "I work from home on Fridays."),
  v("vb-daily", "study", "studiare", "They study English every evening."),
  v("vb-daily", "cook", "cucinare", "My dad cooks on Sundays."),
  v("vb-daily", "clean", "pulire", "I clean the kitchen after dinner."),

  // vb-movement — A2, Concrete
  v("vb-movement", "walk", "camminare", "We walk to school together."),
  v("vb-movement", "run", "correre", "She runs in the park every morning."),
  v("vb-movement", "jump", "saltare", "The dog jumped over the fence."),
  v("vb-movement", "climb", "arrampicarsi/salire", "They climbed the hill at sunset."),
  v("vb-movement", "fall", "cadere", "Be careful not to fall on the ice."),
  v("vb-movement", "turn", "girare", "Turn left at the next corner."),
  v("vb-movement", "carry", "portare", "He carried the boxes upstairs."),
  v("vb-movement", "push", "spingere", "Push the door, don't pull it."),

  // vb-travel — A2, Concrete
  v("vb-travel", "travel", "viaggiare", "We travel abroad every summer."),
  v("vb-travel", "arrive", "arrivare", "The train arrives at noon."),
  v("vb-travel", "leave", "partire/lasciare", "We leave for Rome tomorrow."),
  v("vb-travel", "book", "prenotare", "I booked a room near the station."),
  v("vb-travel", "pack", "fare i bagagli", "She packed a small suitcase."),
  v("vb-travel", "board", "salire a bordo", "Passengers can now board the plane."),
  v("vb-travel", "land", "atterrare", "The flight lands in two hours."),
  v("vb-travel", "explore", "esplorare", "We explored the old town on foot."),

  // vb-communication — A2, Concrete
  v("vb-communication", "say", "dire", "She said she was sorry."),
  v("vb-communication", "tell", "raccontare/dire a", "Tell me what happened."),
  v("vb-communication", "ask", "chiedere", "He asked for directions."),
  v("vb-communication", "answer", "rispondere", "Please answer my question."),
  v("vb-communication", "explain", "spiegare", "Can you explain this rule again?"),
  v("vb-communication", "describe", "descrivere", "Describe the house you grew up in."),
  v("vb-communication", "discuss", "discutere", "We discussed the plan for an hour."),
  v("vb-communication", "reply", "rispondere", "She replied to my email at once."),

  // vb-thinking — B1, Abstract
  v("vb-thinking", "think", "pensare", "I think you're right."),
  v("vb-thinking", "believe", "credere", "They believe the story is true."),
  v("vb-thinking", "remember", "ricordare", "I can't remember her name."),
  v("vb-thinking", "forget", "dimenticare", "Don't forget to lock the door."),
  v("vb-thinking", "guess", "indovinare/supporre", "I guess we'll find out tomorrow."),
  v("vb-thinking", "realise", "rendersi conto", "She realised she'd made a mistake."),
  v("vb-thinking", "consider", "considerare", "We're considering moving abroad."),
  v("vb-thinking", "assume", "presumere", "I assumed you already knew."),

  // vb-feeling — B1, Abstract
  v("vb-feeling", "feel", "sentire/sentirsi", "I feel much better today."),
  v("vb-feeling", "love", "amare", "They love spending time together."),
  v("vb-feeling", "hate", "odiare", "She hates waiting in queues."),
  v("vb-feeling", "enjoy", "godersi", "We really enjoyed the concert."),
  v("vb-feeling", "worry", "preoccuparsi", "Don't worry about the exam."),
  v("vb-feeling", "hope", "sperare", "I hope you feel better soon."),
  v("vb-feeling", "miss", "sentire la mancanza", "I miss my friends back home."),
  v("vb-feeling", "care", "importarsi/tenere a", "She really cares about her students."),

  // vb-work — B1, Domains
  v("vb-work", "manage", "gestire", "She manages a team of ten."),
  v("vb-work", "hire", "assumere", "They hired three new engineers."),
  v("vb-work", "apply", "candidarsi", "I applied for a marketing job."),
  v("vb-work", "earn", "guadagnare", "He earns a good salary."),
  v("vb-work", "deliver", "consegnare", "We delivered the project on time."),
  v("vb-work", "organise", "organizzare", "She organised the whole event."),
  v("vb-work", "solve", "risolvere", "We need to solve this problem fast."),
  v("vb-work", "attend", "partecipare", "I have to attend a meeting at ten."),

  // vb-study — B1, Domains
  v("vb-study", "learn", "imparare", "I'm learning to play the piano."),
  v("vb-study", "teach", "insegnare", "She teaches English to beginners."),
  v("vb-study", "practise", "esercitarsi", "You should practise a little every day."),
  v("vb-study", "revise", "ripassare", "I revised all weekend for the test."),
  v("vb-study", "improve", "migliorare", "His writing has really improved."),
  v("vb-study", "understand", "capire", "Now I understand the difference."),
  v("vb-study", "memorise", "memorizzare", "Try not to just memorise the rules."),
  v("vb-study", "concentrate", "concentrarsi", "I can't concentrate with the TV on."),

  // vb-relationships — B1, Domains
  v("vb-relationships", "meet", "incontrare/conoscere", "We met at university."),
  v("vb-relationships", "trust", "fidarsi", "I trust her completely."),
  v("vb-relationships", "argue", "litigare/discutere", "They rarely argue about money."),
  v("vb-relationships", "apologise", "scusarsi", "He apologised for being late."),
  v("vb-relationships", "support", "sostenere", "My family always supports me."),
  v("vb-relationships", "share", "condividere", "We share an apartment downtown."),
  v("vb-relationships", "promise", "promettere", "She promised to call tonight."),
  v("vb-relationships", "forgive", "perdonare", "It's hard to forgive a betrayal."),

  // vb-business — B2, Domains
  v("vb-business", "invest", "investire", "They invested heavily in technology."),
  v("vb-business", "negotiate", "negoziare", "We negotiated a better contract."),
  v("vb-business", "launch", "lanciare", "The company launched a new product."),
  v("vb-business", "expand", "espandersi", "They plan to expand into Asia."),
  v("vb-business", "compete", "competere", "Small shops can't compete on price."),
  v("vb-business", "afford", "permettersi", "We can't afford new offices yet."),
  v("vb-business", "purchase", "acquistare", "The firm purchased two rivals."),
  v("vb-business", "outsource", "esternalizzare", "They outsource their support team."),

  // vb-academic — B2, Formal
  v("vb-academic", "analyse", "analizzare", "We analysed the survey results."),
  v("vb-academic", "assert", "affermare/sostenere", "The author asserts that the theory is flawed."),
  v("vb-academic", "demonstrate", "dimostrare", "The study demonstrates a clear link."),
  v("vb-academic", "examine", "esaminare", "Researchers examined the samples closely."),
  v("vb-academic", "evaluate", "valutare", "We evaluate each option carefully."),
  v("vb-academic", "conclude", "concludere", "The report concludes that costs will rise."),
  v("vb-academic", "define", "definire", "First, let's define the key terms."),
  v("vb-academic", "interpret", "interpretare", "The data can be interpreted in two ways."),

  // vb-advanced — C1, Formal
  v("vb-advanced", "undermine", "minare/indebolire", "The scandal undermined public trust."),
  v("vb-advanced", "acknowledge", "riconoscere/ammettere", "She acknowledged the risks involved."),
  v("vb-advanced", "advocate", "sostenere/perorare", "He advocates for stricter laws."),
  v("vb-advanced", "attribute", "attribuire", "They attribute the success to luck."),
  v("vb-advanced", "constitute", "costituire", "These acts constitute a breach of trust."),
  v("vb-advanced", "diminish", "diminuire", "Interest in the topic has diminished."),
  v("vb-advanced", "reinforce", "rafforzare", "The results reinforce earlier findings."),
  v("vb-advanced", "yield", "produrre/cedere", "The talks yielded no agreement."),
];
