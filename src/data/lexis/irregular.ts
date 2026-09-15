import type { LexItem } from "@/features/lexis/types";

/** Irregular-verb content, keyed to the irr-* catalog Units. The `word` shows the
 * three forms (base – past – past participle); `it` is the Italian meaning. */
const i = (unitId: string, base: string, word: string, it: string, example: string): LexItem => ({
  id: `lx-irr-${base.replace(/[^a-z]+/gi, "-").toLowerCase()}`,
  unitId,
  word,
  it,
  pos: "irr",
  example,
});

export const irregularItems: LexItem[] = [
  // irr-same-form — A2, no change
  i("irr-same-form", "cut", "cut – cut – cut", "tagliare", "I cut my finger yesterday."),
  i("irr-same-form", "put", "put – put – put", "mettere", "She put the keys on the table."),
  i("irr-same-form", "hit", "hit – hit – hit", "colpire", "The ball hit the window."),
  i("irr-same-form", "let", "let – let – let", "lasciare/permettere", "They let us stay for free."),
  i("irr-same-form", "cost", "cost – cost – cost", "costare", "The tickets cost a fortune."),
  i("irr-same-form", "shut", "shut – shut – shut", "chiudere", "He shut the door quietly."),
  i("irr-same-form", "set", "set – set – set", "fissare/impostare", "I set the alarm for six."),
  i("irr-same-form", "hurt", "hurt – hurt – hurt", "far male", "My back hurt all week."),

  // irr-full-change — A2, common
  i("irr-full-change", "go", "go – went – gone", "andare", "She has gone home already."),
  i("irr-full-change", "do", "do – did – done", "fare", "Have you done your homework?"),
  i("irr-full-change", "eat", "eat – ate – eaten", "mangiare", "We had already eaten."),
  i("irr-full-change", "see", "see – saw – seen", "vedere", "I haven't seen that film."),
  i("irr-full-change", "take", "take – took – taken", "prendere", "He has taken my umbrella."),
  i("irr-full-change", "give", "give – gave – given", "dare", "She has given me good advice."),
  i("irr-full-change", "write", "write – wrote – written", "scrivere", "I've written three emails."),
  i("irr-full-change", "fly", "fly – flew – flown", "volare", "They have flown to Madrid."),

  // irr-vowel-change — A2, common
  i("irr-vowel-change", "drink", "drink – drank – drunk", "bere", "He has drunk all the water."),
  i("irr-vowel-change", "sing", "sing – sang – sung", "cantare", "She has sung on stage before."),
  i("irr-vowel-change", "swim", "swim – swam – swum", "nuotare", "We swam across the lake."),
  i("irr-vowel-change", "begin", "begin – began – begun", "cominciare", "The film has just begun."),
  i("irr-vowel-change", "ring", "ring – rang – rung", "suonare", "The phone rang twice."),
  i("irr-vowel-change", "run", "run – ran – run", "correre", "She has run a marathon."),
  i("irr-vowel-change", "come", "come – came – come", "venire", "They have come a long way."),
  i("irr-vowel-change", "become", "become – became – become", "diventare", "He has become famous."),

  // irr-t-ending — A2, common
  i("irr-t-ending", "keep", "keep – kept – kept", "tenere", "I've kept all her letters."),
  i("irr-t-ending", "sleep", "sleep – slept – slept", "dormire", "I slept badly last night."),
  i("irr-t-ending", "feel", "feel – felt – felt", "sentire/sentirsi", "She felt tired all day."),
  i("irr-t-ending", "leave", "leave – left – left", "partire/lasciare", "They left an hour ago."),
  i("irr-t-ending", "mean", "mean – meant – meant", "significare/intendere", "I didn't mean to upset you."),
  i("irr-t-ending", "meet", "meet – met – met", "incontrare", "We met at a conference."),
  i("irr-t-ending", "lose", "lose – lost – lost", "perdere", "I've lost my wallet."),
  i("irr-t-ending", "build", "build – built – built", "costruire", "They built the house in a year."),

  // irr-ought-aught — B1, sound groups
  i("irr-ought-aught", "buy", "buy – bought – bought", "comprare", "I bought a new phone."),
  i("irr-ought-aught", "bring", "bring – brought – brought", "portare", "She brought some snacks."),
  i("irr-ought-aught", "think", "think – thought – thought", "pensare", "I thought about it all night."),
  i("irr-ought-aught", "fight", "fight – fought – fought", "combattere", "They fought for their rights."),
  i("irr-ought-aught", "catch", "catch – caught – caught", "prendere/afferrare", "He caught the last train."),
  i("irr-ought-aught", "teach", "teach – taught – taught", "insegnare", "She taught me to drive."),
  i("irr-ought-aught", "seek", "seek – sought – sought", "cercare", "They sought a better life."),

  // irr-en-participle — B1, sound groups
  i("irr-en-participle", "break", "break – broke – broken", "rompere", "I've broken my glasses."),
  i("irr-en-participle", "speak", "speak – spoke – spoken", "parlare", "Have you spoken to her?"),
  i("irr-en-participle", "choose", "choose – chose – chosen", "scegliere", "She has chosen a good school."),
  i("irr-en-participle", "steal", "steal – stole – stolen", "rubare", "Someone has stolen my bike."),
  i("irr-en-participle", "wake", "wake – woke – woken", "svegliarsi", "I've woken up too early."),
  i("irr-en-participle", "drive", "drive – drove – driven", "guidare", "He has driven all night."),
  i("irr-en-participle", "rise", "rise – rose – risen", "sorgere/salire", "Prices have risen sharply."),
  i("irr-en-participle", "forget", "forget – forgot – forgotten", "dimenticare", "I've forgotten his name."),

  // irr-advanced — B2, rare & advanced
  i("irr-advanced", "arise", "arise – arose – arisen", "sorgere/presentarsi", "A problem has arisen."),
  i("irr-advanced", "bear", "bear – bore – borne", "sopportare/sostenere", "She has borne the cost alone."),
  i("irr-advanced", "flee", "flee – fled – fled", "fuggire", "They fled the country overnight."),
  i("irr-advanced", "swear", "swear – swore – sworn", "giurare", "He swore he was innocent."),
  i("irr-advanced", "tear", "tear – tore – torn", "strappare", "She has torn the letter up."),
  i("irr-advanced", "weave", "weave – wove – woven", "tessere/intrecciare", "The story is finely woven."),
  i("irr-advanced", "strive", "strive – strove – striven", "sforzarsi", "They have striven for years."),
  i("irr-advanced", "forbid", "forbid – forbade – forbidden", "vietare", "Smoking is strictly forbidden."),
];
