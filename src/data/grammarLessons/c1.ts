import type { GrammarLesson } from "@/features/grammarLessons/types";

/** C1 grammar lessons. */
export const c1Lessons: GrammarLesson[] = [
  {
    unitId: "gr-c1-inversion-advanced",
    explanation:
      "L'inversione avanzata (registro formale/enfatico) segue espressioni negative o restrittive a inizio frase: not only, seldom, hardly, under no circumstances, only then, no sooner…",
    rules: [
      "Not only did he apologise, but he also paid.",
      "Under no circumstances should you open it.",
      "No sooner had I arrived than it started; Hardly had I sat down when…",
      "Only + espressione → inversione (Only later did I understand).",
    ],
    examples: [
      { en: "Never before had we seen such chaos.", it: "Mai prima avevamo visto un tale caos." },
      { en: "No sooner had she left than he called.", it: "Non appena se n'è andata, lui ha chiamato." },
      { en: "Only after the meeting did I realise the mistake.", it: "Solo dopo la riunione mi sono accorto dell'errore." },
    ],
    mistakes: [
      { wrong: "Under no circumstances you should go.", right: "Under no circumstances should you go.", why: "Serve l'inversione ausiliare+soggetto." },
      { wrong: "No sooner I had arrived than…", right: "No sooner had I arrived than…", why: "Inversione con had." },
      { wrong: "Not only he sings but also dances.", right: "Not only does he sing but he also dances.", why: "Inversione con l'ausiliare." },
    ],
    miniTest: [
      { prompt: "Under no circumstances ___ you leave.", options: ["should", "you should", "must", "do"], answer: 0 },
      { prompt: "No sooner ___ I arrived than it began.", options: ["have", "had", "did", "was"], answer: 1 },
      { prompt: "Only then ___ I understand.", options: ["did", "I did", "do", "had"], answer: 0 },
      { prompt: "Seldom ___ we see this.", options: ["we do", "do", "did we", "are"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-cleft",
    explanation:
      "Le cleft sentences dividono la frase per mettere in risalto un elemento: It-cleft (It was John who…) e Wh-cleft (What I need is…).",
    rules: [
      "It-cleft: It + be + elemento + that/who… (It was in 2010 that we met).",
      "Wh-cleft: What + frase + be + elemento (What I want is peace).",
      "Servono per enfasi, contrasto o correzione.",
      "All + frase + be…: All I did was help.",
    ],
    examples: [
      { en: "It was Anna who called.", it: "È stata Anna a chiamare." },
      { en: "What surprised me was his honesty.", it: "Ciò che mi ha sorpreso è stata la sua onestà." },
      { en: "It's your help that I need.", it: "È il tuo aiuto che mi serve." },
    ],
    mistakes: [
      { wrong: "It was Anna which called.", right: "It was Anna who called.", why: "Persona → who/that." },
      { wrong: "What I need is to relaxing.", right: "What I need is to relax.", why: "Forma corretta dopo be." },
      { wrong: "Is John who did it.", right: "It was John who did it.", why: "Serve 'It' introduttivo." },
    ],
    miniTest: [
      { prompt: "___ was John who won.", options: ["That", "It", "What", "There"], answer: 1 },
      { prompt: "___ I love is the sea.", options: ["That", "It", "What", "Who"], answer: 2 },
      { prompt: "It was in Rome ___ we met.", options: ["who", "that", "what", "which"], answer: 1 },
      { prompt: "What I need ___ time.", options: ["are", "is", "were", "be"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-subjunctive",
    explanation:
      "Il congiuntivo (subjunctive) si usa dopo verbi ed espressioni di suggerimento, richiesta o necessità (suggest, recommend, insist; It's essential that…), con la forma base per tutte le persone.",
    rules: [
      "verb + that + soggetto + BASE (senza -s): I suggest that he go.",
      "Espressioni: It's essential/important/vital that + base.",
      "Anche con should: I suggest that he should go (BrE).",
      "Negativo: that he not go (senza do).",
    ],
    examples: [
      { en: "The doctor recommended that she rest.", it: "Il medico ha raccomandato che si riposi." },
      { en: "It's essential that everyone be present.", it: "È essenziale che tutti siano presenti." },
      { en: "They insisted that he leave.", it: "Hanno insistito che se ne andasse." },
    ],
    mistakes: [
      { wrong: "I suggest that he goes.", right: "I suggest that he go.", why: "Subjunctive: forma base senza -s." },
      { wrong: "It's vital that she is here.", right: "It's vital that she be here.", why: "Congiuntivo con be." },
      { wrong: "They demanded that he doesn't leave.", right: "They demanded that he not leave.", why: "Negativo senza do." },
    ],
    miniTest: [
      { prompt: "I suggest that he ___.", options: ["goes", "go", "went", "going"], answer: 1 },
      { prompt: "It's essential that she ___ present.", options: ["is", "be", "was", "been"], answer: 1 },
      { prompt: "They insisted that he ___.", options: ["stays", "stay", "stayed", "to stay"], answer: 1 },
      { prompt: "Negativo: I recommend that he ___ go.", options: ["doesn't", "not", "don't", "isn't"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-participial",
    explanation:
      "Le participial clauses usano il present participle (-ing) o il past participle per accorciare frasi e collegare azioni, tipiche dello scritto formale.",
    rules: [
      "-ing (attivo, simultaneo o causa): Feeling tired, she left early.",
      "past participle (passivo): Built in 1900, the house needs work.",
      "Having + participio (azione precedente): Having finished, he left.",
      "Il soggetto della participial deve coincidere con quello della principale.",
    ],
    examples: [
      { en: "Walking home, I saw an accident.", it: "Tornando a casa, ho visto un incidente." },
      { en: "Shocked by the news, she sat down.", it: "Scioccata dalla notizia, si è seduta." },
      { en: "Having eaten, we went out.", it: "Dopo aver mangiato, siamo usciti." },
    ],
    mistakes: [
      { wrong: "Walking home, the rain started.", right: "Walking home, I got caught in the rain.", why: "Il soggetto deve coincidere (dangling participle)." },
      { wrong: "Build in 1900…", right: "Built in 1900…", why: "Passivo → past participle." },
      { wrong: "Having finish, he left.", right: "Having finished, he left.", why: "Having + participio." },
    ],
    miniTest: [
      { prompt: "___ tired, she went to bed.", options: ["Feel", "Feeling", "Felt", "To feel"], answer: 1 },
      { prompt: "___ in 1900, it's very old.", options: ["Building", "Built", "Build", "To build"], answer: 1 },
      { prompt: "___ finished, they left.", options: ["Have", "Having", "Had", "To have"], answer: 1 },
      { prompt: "Il soggetto della participial…", options: ["è sempre 'it'", "coincide con la principale", "è libero", "è omesso"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-report-structures",
    explanation:
      "Le report structures impersonali (It is said that…, He is believed to…) riferiscono opinioni comuni in modo formale, tipiche di notizie e testi accademici.",
    rules: [
      "It + be + participio + that: It is said that he is rich.",
      "Soggetto + be + participio + to-infinito: He is said to be rich.",
      "Per il passato: He is said to have left.",
      "Verbi: say, believe, think, know, report, expect, consider.",
    ],
    examples: [
      { en: "It is believed that the painting is fake.", it: "Si ritiene che il quadro sia falso." },
      { en: "She is thought to be abroad.", it: "Si pensa che sia all'estero." },
      { en: "He is reported to have escaped.", it: "Si dice che sia scappato." },
    ],
    mistakes: [
      { wrong: "It is said he to be rich.", right: "He is said to be rich.", why: "Due strutture, non mischiate." },
      { wrong: "He is said to be left (passato).", right: "He is said to have left.", why: "Passato → to have + participio." },
      { wrong: "Is said that…", right: "It is said that…", why: "Serve 'It'." },
    ],
    miniTest: [
      { prompt: "It is ___ that he's guilty.", options: ["say", "said", "saying", "says"], answer: 1 },
      { prompt: "She is thought ___ rich.", options: ["is", "to be", "being", "be"], answer: 1 },
      { prompt: "Passato: He is said ___ left.", options: ["to", "to have", "having", "to be"], answer: 1 },
      { prompt: "___ is believed that it's true.", options: ["That", "It", "What", "He"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-past-modals",
    explanation:
      "Revisione dei modali del passato e delle loro sfumature: should/ought to have (rimpianto), must have (deduzione), needn't have vs didn't need to, could have (possibilità mancata).",
    rules: [
      "should/ought to have + participio = rimpianto/critica.",
      "must/can't have + participio = deduzione su un fatto passato.",
      "needn't have done = l'hai fatto ma non serviva; didn't need to = non serviva.",
      "could have + participio = possibilità non realizzata / rimprovero.",
    ],
    examples: [
      { en: "You could have warned me!", it: "Avresti potuto avvisarmi!" },
      { en: "You needn't have paid — it was free.", it: "Non dovevi pagare — era gratis." },
      { en: "She must have missed the train.", it: "Deve aver perso il treno." },
    ],
    mistakes: [
      { wrong: "You should warned me.", right: "You should have warned me.", why: "Modale passato: have + participio." },
      { wrong: "It can't happened.", right: "It can't have happened.", why: "can't have + participio." },
      { wrong: "I didn't needn't have gone.", right: "I needn't have gone.", why: "Forma corretta." },
    ],
    miniTest: [
      { prompt: "Rimpianto: You ___ told me.", options: ["should", "should have", "must", "can't have"], answer: 1 },
      { prompt: "Deduzione: She ___ left already.", options: ["should have", "must have", "needn't have", "could"], answer: 1 },
      { prompt: "L'hai fatto inutilmente: You ___ come.", options: ["mustn't have", "needn't have", "can't have", "shouldn't"], answer: 1 },
      { prompt: "Possibilità mancata: I ___ won.", options: ["must have", "could have", "needn't have", "should"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-reporting-verbs",
    explanation:
      "Nel discorso indiretto avanzato, verbi introduttivi specifici (suggest, deny, admit, refuse, promise, warn, accuse…) sostituiscono say/tell e reggono strutture diverse.",
    rules: [
      "suggest/deny/admit + -ing o that (He admitted stealing).",
      "refuse/promise/offer/agree + to + base (She refused to help).",
      "accuse sb of + -ing; blame sb for + -ing; congratulate sb on + -ing.",
      "warn sb (not) to + base; advise sb to + base.",
    ],
    examples: [
      { en: "He admitted breaking the vase.", it: "Ha ammesso di aver rotto il vaso." },
      { en: "She refused to answer.", it: "Si è rifiutata di rispondere." },
      { en: "They accused him of cheating.", it: "Lo hanno accusato di aver imbrogliato." },
    ],
    mistakes: [
      { wrong: "He suggested to go.", right: "He suggested going / that we go.", why: "suggest + -ing o that, non to." },
      { wrong: "She refused helping.", right: "She refused to help.", why: "refuse + to." },
      { wrong: "He admitted to stole it.", right: "He admitted stealing it.", why: "admit + -ing." },
    ],
    miniTest: [
      { prompt: "He admitted ___ it.", options: ["to break", "breaking", "break", "broke"], answer: 1 },
      { prompt: "She refused ___.", options: ["helping", "to help", "help", "helped"], answer: 1 },
      { prompt: "They accused him ___ lying.", options: ["to", "of", "for", "on"], answer: 1 },
      { prompt: "He suggested ___ a break.", options: ["to take", "taking", "take", "took"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-ellipsis",
    explanation:
      "L'ellissi omette parole ricavabili dal contesto per evitare ripetizioni; la sostituzione le rimpiazza con so/do/one, per uno stile fluido.",
    rules: [
      "Si omette il verbo/complemento ripetuto: She can sing and (she can) dance.",
      "Sostituzione con 'so'/'not': I think so; I'm afraid not.",
      "'one/ones' sostituisce un nome: the red one, the big ones.",
      "'do so' sostituisce un intero predicato.",
    ],
    examples: [
      { en: "I'd like to help but I can't.", it: "Vorrei aiutare ma non posso." },
      { en: "Which one do you want — the blue or the green?", it: "Quale vuoi — il blu o il verde?" },
      { en: "Is it raining? — I think so.", it: "Piove? — Credo di sì." },
    ],
    mistakes: [
      { wrong: "I want the red.", right: "I want the red one.", why: "Serve 'one' come sostituto del nome." },
      { wrong: "Are you coming? — I think it.", right: "…— I think so.", why: "Sostituzione con 'so'." },
      { wrong: "She can sing and can dance too.", right: "She can sing and dance.", why: "Ellissi del ripetuto." },
    ],
    miniTest: [
      { prompt: "the blue ___", options: ["-", "one", "that", "it"], answer: 1 },
      { prompt: "Is he here? — I hope ___.", options: ["it", "that", "so", "yes"], answer: 2 },
      { prompt: "I can help but she ___.", options: ["can't", "can't help too", "not can", "cannot to"], answer: 0 },
      { prompt: "Which ___ do you prefer?", options: ["one", "ones", "that", "-"], answer: 0 },
    ],
  },
  {
    unitId: "gr-c1-complex-connectors",
    explanation:
      "Connettivi complessi per la scrittura formale: nevertheless, furthermore, consequently, whereas, hence, thereby… Ognuno ha registro e struttura precisi.",
    rules: [
      "Contrasto: nevertheless, nonetheless, whereas, conversely.",
      "Aggiunta: furthermore, moreover, in addition.",
      "Conseguenza: consequently, hence, thus, thereby (+ -ing).",
      "Sono avverbiali (frase separata) tranne whereas (congiunzione).",
    ],
    examples: [
      { en: "The costs were high; nevertheless, we proceeded.", it: "I costi erano alti; ciononostante, siamo andati avanti." },
      { en: "Sales fell; consequently, staff were cut.", it: "Le vendite sono calate; di conseguenza, il personale è stato ridotto." },
      { en: "He signed, thereby accepting the terms.", it: "Ha firmato, accettando così i termini." },
    ],
    mistakes: [
      { wrong: "Whereas, we proceeded.", right: "Nevertheless, we proceeded.", why: "whereas è congiunzione, non avverbio a sé." },
      { wrong: "…, consequently we cut costs.", right: "…; consequently, we cut costs.", why: "Avverbio → frase separata." },
      { wrong: "thereby to accept", right: "thereby accepting", why: "thereby + -ing." },
    ],
    miniTest: [
      { prompt: "Contrasto formale (frase a sé):", options: ["whereas", "nevertheless", "because", "so"], answer: 1 },
      { prompt: "Conseguenza formale:", options: ["furthermore", "consequently", "although", "whereas"], answer: 1 },
      { prompt: "…, thereby ___ the deal.", options: ["accept", "to accept", "accepting", "accepted"], answer: 2 },
      { prompt: "Congiunzione di contrasto:", options: ["nevertheless", "however", "whereas", "moreover"], answer: 2 },
    ],
  },
  {
    unitId: "gr-c1-word-formation",
    explanation:
      "La formazione delle parole (prefissi e suffissi produttivi) espande il lessico: un-, im-, dis-, re-, -less, -ful, -ness, -tion, -ise/-ize, -able.",
    rules: [
      "Prefissi negativi: un- (unhappy), in-/im-/il-/ir- (impossible), dis- (disagree).",
      "Nomi: -ness (happiness), -tion (creation), -ment (movement), -ity (ability).",
      "Aggettivi: -ful (useful), -less (useless), -able (readable), -ive (creative).",
      "Verbi: -ise/-ize (modernise), -en (widen).",
    ],
    examples: [
      { en: "happy → happiness; unhappy", it: "felice → felicità; infelice" },
      { en: "care → careful / careless", it: "cura → attento / distratto" },
      { en: "modern → modernise", it: "moderno → modernizzare" },
    ],
    mistakes: [
      { wrong: "unpossible", right: "impossible", why: "Prefisso corretto: im-." },
      { wrong: "carefull", right: "careful", why: "Suffisso -ful con una sola L." },
      { wrong: "happyness", right: "happiness", why: "y → i prima di -ness." },
    ],
    miniTest: [
      { prompt: "possible → (negativo)", options: ["unpossible", "impossible", "dispossible", "nonpossible"], answer: 1 },
      { prompt: "use → (senza)", options: ["useless", "uselessful", "unuse", "useness"], answer: 0 },
      { prompt: "happy → (nome)", options: ["happyness", "happiness", "happyment", "happness"], answer: 1 },
      { prompt: "modern → (verbo)", options: ["modernful", "modernise", "modernness", "unmodern"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-articles-abstract",
    explanation:
      "In contesti astratti e generali l'uso dell'articolo cambia: molti nomi astratti/incontabili vanno senza the quando sono generici, ma con the quando sono specifici.",
    rules: [
      "Generico (senza the): Love is important; Money can't buy happiness.",
      "Specifico (con the): The love between them; The money you lent me.",
      "Materie/lingue/pasti senza the: I study history; before lunch.",
      "Malattie e trasporti hanno regole proprie (by car, in hospital).",
    ],
    examples: [
      { en: "Happiness is a choice.", it: "La felicità è una scelta." },
      { en: "The happiness I felt was real.", it: "La felicità che provavo era vera." },
      { en: "Life is short.", it: "La vita è breve." },
    ],
    mistakes: [
      { wrong: "The life is short (generale).", right: "Life is short.", why: "Concetto generale → senza the." },
      { wrong: "I love the nature.", right: "I love nature.", why: "Generico → senza the." },
      { wrong: "Money you gave me (specifico).", right: "The money you gave me.", why: "Specifico → the." },
    ],
    miniTest: [
      { prompt: "Generale: ___ is important.", options: ["The love", "Love", "A love", "Loves"], answer: 1 },
      { prompt: "Specifico: ___ he gave me.", options: ["Money", "A money", "The money", "Moneys"], answer: 2 },
      { prompt: "I study ___ history.", options: ["the", "a", "-", "an"], answer: 2 },
      { prompt: "___ life is short (generale).", options: ["The", "A", "-", "An"], answer: 2 },
    ],
  },
  {
    unitId: "gr-c1-the-generic",
    explanation:
      "the con nomi generici e istituzioni: 'the + singolare' per una specie/invenzione; scuola/prigione/ospedale con o senza the a seconda del significato.",
    rules: [
      "the + nome singolare = la categoria/specie (The tiger is endangered).",
      "school/prison/hospital senza the = per lo scopo (go to school = studiare); con the = l'edificio.",
      "the + aggettivo = un gruppo (the rich, the elderly).",
      "the + cognome plurale = la famiglia (the Smiths).",
    ],
    examples: [
      { en: "The computer transformed work.", it: "Il computer ha trasformato il lavoro." },
      { en: "He's in hospital (malato) vs at the hospital (visita).", it: "È ricoverato vs è all'ospedale." },
      { en: "The poor need support.", it: "I poveri hanno bisogno di sostegno." },
    ],
    mistakes: [
      { wrong: "Tiger is endangered (specie).", right: "The tiger is endangered.", why: "Specie → the + singolare." },
      { wrong: "He's in the prison (detenuto).", right: "He's in prison.", why: "Scopo → senza the." },
      { wrong: "The poors", right: "The poor", why: "the + aggettivo, invariabile." },
    ],
    miniTest: [
      { prompt: "Specie: ___ whale is huge.", options: ["A", "The", "-", "An"], answer: 1 },
      { prompt: "È detenuto: He's in ___ prison.", options: ["the", "a", "-", "an"], answer: 2 },
      { prompt: "I poveri: ___ poor.", options: ["A", "The", "-", "Poors"], answer: 1 },
      { prompt: "La famiglia Smith:", options: ["Smiths", "The Smiths", "The Smith", "A Smiths"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c1-articles-proper",
    explanation:
      "Gli articoli con nomi propri e geografici seguono regole fisse: niente the con la maggior parte, ma the con catene montuose, fiumi, mari, gruppi di isole e stati plurali/composti.",
    rules: [
      "Senza the: paesi (Italy), città (Rome), monti singoli (Mount Everest), laghi (Lake Como).",
      "Con the: fiumi (the Nile), mari/oceani (the Atlantic), catene (the Alps), deserti (the Sahara).",
      "Con the: stati plurali/composti (the USA, the UK, the Netherlands).",
      "Con the: gruppi di isole (the Canaries).",
    ],
    examples: [
      { en: "the Alps, the Thames, the Pacific", it: "le Alpi, il Tamigi, il Pacifico" },
      { en: "Italy, Rome, Mount Etna (senza the)", it: "Italia, Roma, l'Etna" },
      { en: "the United Kingdom", it: "il Regno Unito" },
    ],
    mistakes: [
      { wrong: "the Italy", right: "Italy", why: "Paesi senza the." },
      { wrong: "Nile is long.", right: "The Nile is long.", why: "Fiumi → the." },
      { wrong: "United States are big.", right: "The United States is big.", why: "Stati composti → the." },
    ],
    miniTest: [
      { prompt: "___ Everest is high.", options: ["The", "A", "-", "An"], answer: 2 },
      { prompt: "___ Nile is long.", options: ["A", "The", "-", "An"], answer: 1 },
      { prompt: "___ Netherlands", options: ["A", "The", "-", "An"], answer: 1 },
      { prompt: "___ Rome", options: ["The", "A", "-", "An"], answer: 2 },
    ],
  },
  {
    unitId: "gr-c1-punctuation",
    explanation:
      "La punteggiatura avanzata dello scritto formale: punto e virgola, due punti e trattino, ognuno con una funzione precisa; da evitare il comma splice.",
    rules: [
      "Punto e virgola (;) unisce due frasi indipendenti collegate.",
      "Due punti (:) introduce una lista o una spiegazione.",
      "Trattino (—) segnala un inciso o una pausa enfatica.",
      "La virgola da sola non unisce due frasi indipendenti (comma splice).",
    ],
    examples: [
      { en: "I have a plan: we leave at dawn.", it: "Ho un piano: partiamo all'alba." },
      { en: "She was tired; nevertheless, she continued.", it: "Era stanca; ciononostante ha continuato." },
      { en: "There is one problem — money.", it: "C'è un problema — i soldi." },
    ],
    mistakes: [
      { wrong: "It was late, we left.", right: "It was late; we left.", why: "La virgola non unisce due frasi indipendenti." },
      { wrong: "We need: time.", right: "We need time.", why: "Il due punti non separa verbo e complemento." },
      { wrong: "Lista breve con punti e virgola.", right: "Lista: elemento, elemento.", why: "Lista → due punti + virgole." },
    ],
    miniTest: [
      { prompt: "Unisce due frasi collegate:", options: [", ", ";", ":", "—"], answer: 1 },
      { prompt: "Introduce una lista:", options: [";", ":", ",", "—"], answer: 1 },
      { prompt: "It was cold ___ we stayed in.", options: [",", ";", ":", "…"], answer: 1 },
      { prompt: "'Comma splice' = due frasi unite da…", options: ["un punto e virgola", "una virgola sola", "un due punti", "and"], answer: 1 },
    ],
  },
];
