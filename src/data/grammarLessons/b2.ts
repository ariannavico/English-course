import type { GrammarLesson } from "@/features/grammarLessons/types";

/** B2 grammar lessons. */
export const b2Lessons: GrammarLesson[] = [
  {
    unitId: "gr-b2-third-conditional",
    explanation:
      "Il Third Conditional parla di situazioni passate irreali: qualcosa non è successo e ne immaginiamo l'effetto. Forma: If + past perfect, would have + participio.",
    rules: [
      "If + past perfect, would have + participio: If I had known, I would have called.",
      "Rimpianti/critiche sul passato: If you had studied, you would have passed.",
      "Contratte: I'd have; negativa wouldn't have.",
      "Nella if-clause niente would have: no «If I would have known».",
    ],
    examples: [
      { en: "If I had left earlier, I would have caught the train.", it: "Se fossi partito prima, avrei preso il treno." },
      { en: "She wouldn't have failed if she had studied.", it: "Non sarebbe stata bocciata se avesse studiato." },
      { en: "If we had booked, we'd have got a table.", it: "Se avessimo prenotato, avremmo avuto un tavolo." },
    ],
    mistakes: [
      { wrong: "If I would have known, I'd have helped.", right: "If I had known, I'd have helped.", why: "if-clause → past perfect, non would have." },
      { wrong: "If she studied, she would have passed.", right: "If she had studied, she would have passed.", why: "Passato irreale → past perfect." },
      { wrong: "I would have came.", right: "I would have come.", why: "Participio di come = come." },
    ],
    miniTest: [
      { prompt: "If I ___ known, I'd have gone.", options: ["would have", "had", "have", "did"], answer: 1 },
      { prompt: "She ___ passed if she'd tried.", options: ["would have", "had", "will have", "would"], answer: 0 },
      { prompt: "If we had left, we ___ it.", options: ["catch", "would catch", "would have caught", "had caught"], answer: 2 },
      { prompt: "if-clause corretta:", options: ["If I would have", "If I had", "If I have", "If I would"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-mixed-conditionals",
    explanation:
      "I Mixed Conditionals combinano tempi diversi: una condizione passata con effetto presente, o una condizione presente con effetto passato.",
    rules: [
      "Passato → presente: If + past perfect, would + base (If I had studied medicine, I would be a doctor now).",
      "Presente → passato: If + past simple, would have + participio (If I were braver, I would have asked).",
      "Si usano quando il tempo della causa e quello dell'effetto sono diversi.",
      "Segnali (now, today) aiutano a scegliere.",
    ],
    examples: [
      { en: "If I had saved money, I'd be rich now.", it: "Se avessi risparmiato, ora sarei ricco." },
      { en: "If she weren't so shy, she would have spoken.", it: "Se non fosse così timida, avrebbe parlato." },
      { en: "If he had slept, he wouldn't be tired now.", it: "Se avesse dormito, ora non sarebbe stanco." },
    ],
    mistakes: [
      { wrong: "If I had studied, I will be a doctor now.", right: "…I would be a doctor now.", why: "Effetto presente irreale → would + base." },
      { wrong: "If I would be richer, I would have bought it.", right: "If I were richer, I would have bought it.", why: "Condizione presente → past simple (were)." },
      { wrong: "If I had known, I would help you yesterday.", right: "If I had known, I would have helped you.", why: "Effetto passato → would have + participio." },
    ],
    miniTest: [
      { prompt: "Passato→presente: If I had saved, I ___ rich now.", options: ["would have been", "would be", "will be", "had been"], answer: 1 },
      { prompt: "Presente→passato: If I ___ braver, I would have asked.", options: ["am", "were", "had been", "would be"], answer: 1 },
      { prompt: "If he had slept, he ___ tired now.", options: ["wouldn't be", "wouldn't have been", "won't be", "isn't"], answer: 0 },
      { prompt: "Condizione presente irreale:", options: ["If I were", "If I would be", "If I am", "If I had been"], answer: 0 },
    ],
  },
  {
    unitId: "gr-b2-past-perfect-continuous",
    explanation:
      "Il Past Perfect Continuous indica un'azione in corso PRIMA di un altro momento passato, sottolineandone la durata. Forma: had been + -ing.",
    rules: [
      "Forma: had been + verbo-ing (I had been working).",
      "Durata prima di un punto passato: She was tired because she had been running.",
      "Spesso spiega la causa di una situazione passata.",
      "Verbi di stato → past perfect semplice.",
    ],
    examples: [
      { en: "He had been driving for hours when he stopped.", it: "Guidava da ore quando si è fermato." },
      { en: "They were wet because it had been raining.", it: "Erano bagnati perché aveva piovuto." },
      { en: "I had been waiting for an hour before she arrived.", it: "Aspettavo da un'ora prima che arrivasse." },
    ],
    mistakes: [
      { wrong: "She was tired because she was running for hours.", right: "…because she had been running for hours.", why: "Durata prima del punto passato → had been -ing." },
      { wrong: "I had been knowing him.", right: "I had known him.", why: "know è di stato." },
      { wrong: "He had been work all day.", right: "He had been working all day.", why: "Serve -ing." },
    ],
    miniTest: [
      { prompt: "She was out of breath — she ___.", options: ["ran", "was running", "had been running", "has run"], answer: 2 },
      { prompt: "I ___ waiting for ages when he came.", options: ["had been", "have been", "was", "had"], answer: 0 },
      { prompt: "They ___ playing before it rained.", options: ["had been", "have been", "were being", "had"], answer: 0 },
      { prompt: "Forma corretta:", options: ["had been working", "had been work", "have been working", "had working"], answer: 0 },
    ],
  },
  {
    unitId: "gr-b2-future-perfect-continuous",
    explanation:
      "Future Continuous (will be + -ing) per un'azione in corso in un momento futuro; Future Perfect (will have + participio) per un'azione completata entro un momento futuro.",
    rules: [
      "Future Continuous: This time tomorrow I'll be flying to Rome.",
      "Future Perfect: By 2030 they will have finished the bridge.",
      "Future Perfect Continuous: By June I'll have been working here for ten years.",
      "'by' + tempo con il Future Perfect (entro).",
    ],
    examples: [
      { en: "At 8 p.m. we'll be having dinner.", it: "Alle 20 staremo cenando." },
      { en: "By next week I'll have finished the report.", it: "Entro la prossima settimana avrò finito il report." },
      { en: "By July she'll have been studying for two years.", it: "A luglio studierà da due anni." },
    ],
    mistakes: [
      { wrong: "This time tomorrow I'll fly.", right: "…I'll be flying.", why: "Azione in corso nel futuro → future continuous." },
      { wrong: "By 2030 they will finish.", right: "By 2030 they will have finished.", why: "Completata entro un momento → future perfect." },
      { wrong: "I will have finish.", right: "I will have finished.", why: "will have + participio." },
    ],
    miniTest: [
      { prompt: "This time tomorrow I ___.", options: ["will fly", "will be flying", "fly", "will have flown"], answer: 1 },
      { prompt: "By Friday I ___ the book.", options: ["will finish", "will be finishing", "will have finished", "finish"], answer: 2 },
      { prompt: "At 10 they ___ football.", options: ["will play", "will be playing", "will have played", "play"], answer: 1 },
      { prompt: "By June I'll have ___ here for a year.", options: ["work", "worked", "working", "been work"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-reported-advanced",
    explanation:
      "Nel discorso indiretto le domande perdono do/does/did e tornano all'ordine affermativo; i comandi diventano tell/ask + oggetto + (not) to + base.",
    rules: [
      "Domande sì/no: ask + if/whether (He asked if I was ready).",
      "Domande wh-: ask + wh- + soggetto + verbo (She asked where I lived), niente do/did.",
      "Comandi: tell/ask + oggetto + (not) to + base.",
      "Cambiano tempi e pronomi come nelle affermazioni.",
    ],
    examples: [
      { en: "\"Are you ok?\" → She asked if I was ok.", it: "…mi ha chiesto se stavo bene." },
      { en: "\"Where do you live?\" → He asked where I lived.", it: "…dove abitavo." },
      { en: "\"Sit down.\" → She told me to sit down.", it: "…mi ha detto di sedermi." },
    ],
    mistakes: [
      { wrong: "She asked where did I live.", right: "She asked where I lived.", why: "Niente did nella indiretta." },
      { wrong: "He told me sit down.", right: "He told me to sit down.", why: "Comando: to + base." },
      { wrong: "She asked me if am I ready.", right: "She asked me if I was ready.", why: "Ordine affermativo + backshift." },
    ],
    miniTest: [
      { prompt: "He asked ___ I was tired.", options: ["that", "if", "did", "do"], answer: 1 },
      { prompt: "She asked where ___.", options: ["did I go", "I went", "went I", "do I go"], answer: 1 },
      { prompt: "Comando: He told me ___ wait.", options: ["-", "that", "to", "for"], answer: 2 },
      { prompt: "\"Don't move.\" → She told me ___ move.", options: ["to not", "not to", "don't", "to don't"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-passive-advanced",
    explanation:
      "Il passivo in tutti i tempi (present perfect, future, modali…) e con verbi che reggono due oggetti. Struttura: be (nel tempo) + participio.",
    rules: [
      "Present perfect passivo: has been done. Future: will be done. Modale: must be done.",
      "Verbi con due oggetti → la persona diventa soggetto (She was given a prize).",
      "-ing e infinito passivi: being watched; to be done.",
      "L'agente con by, spesso omesso.",
    ],
    examples: [
      { en: "The report has been finished.", it: "Il report è stato completato." },
      { en: "The work must be done today.", it: "Il lavoro dev'essere fatto oggi." },
      { en: "He was given a second chance.", it: "Gli è stata data una seconda possibilità." },
    ],
    mistakes: [
      { wrong: "The room is being clean now.", right: "The room is being cleaned now.", why: "Passivo progressivo: is being + participio." },
      { wrong: "It has been do.", right: "It has been done.", why: "Participio di do = done." },
      { wrong: "It will done tomorrow.", right: "It will be done tomorrow.", why: "Serve be." },
    ],
    miniTest: [
      { prompt: "The house ___ recently.", options: ["has painted", "has been painted", "is painting", "painted"], answer: 1 },
      { prompt: "This ___ by tomorrow.", options: ["will do", "will be done", "is done", "will been done"], answer: 1 },
      { prompt: "Modale: It must ___.", options: ["do", "be done", "been done", "to be done"], answer: 1 },
      { prompt: "Progressivo: The car is ___ washed.", options: ["being", "been", "be", "was"], answer: 0 },
    ],
  },
  {
    unitId: "gr-b2-relative-nondefining",
    explanation:
      "Le relative non-determinative aggiungono un'informazione extra (non essenziale), tra virgole. Non si usa 'that' e il pronome non si omette.",
    rules: [
      "Tra virgole: My brother, who lives in Rome, is a doctor.",
      "Non si usa that; solo who/which/whose/where.",
      "Il pronome non si può omettere.",
      "which può riferirsi a tutta la frase precedente (He was late, which annoyed me).",
    ],
    examples: [
      { en: "Paris, which is the capital, is beautiful.", it: "Parigi, che è la capitale, è bellissima." },
      { en: "My teacher, who is very kind, helped me.", it: "La mia insegnante, che è molto gentile, mi ha aiutato." },
      { en: "She passed, which surprised everyone.", it: "Ha superato, cosa che ha sorpreso tutti." },
    ],
    mistakes: [
      { wrong: "My car, that is red, is old.", right: "My car, which is red, is old.", why: "Nelle non-determinative niente that." },
      { wrong: "Anna who is my sister is here.", right: "Anna, who is my sister, is here.", why: "Informazione extra → virgole." },
      { wrong: "The book, I read, was good.", right: "The book (that) I read was good.", why: "Se è essenziale è determinativa (niente virgole)." },
    ],
    miniTest: [
      { prompt: "Rome, ___ is in Italy, is old.", options: ["that", "which", "who", "where"], answer: 1 },
      { prompt: "My dad, ___ is 60, still works.", options: ["which", "who", "whose", "that"], answer: 1 },
      { prompt: "Nelle non-determinative si usano…", options: ["that", "le virgole", "niente pronome", "il gerundio"], answer: 1 },
      { prompt: "He arrived late, ___ was odd.", options: ["that", "which", "who", "what"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-causative",
    explanation:
      "La forma causativa (have/get + oggetto + participio passato) dice che facciamo fare qualcosa a qualcun altro.",
    rules: [
      "have + oggetto + participio: I had my hair cut (me li sono fatti tagliare).",
      "get + oggetto + participio: più informale (I got my car repaired).",
      "Serve a dire che l'azione la fa un altro, non io.",
      "Anche per esperienze negative: She had her bag stolen.",
    ],
    examples: [
      { en: "I'm having the house painted.", it: "Mi sto facendo dipingere la casa." },
      { en: "He got his watch fixed.", it: "Si è fatto riparare l'orologio." },
      { en: "They had their car washed.", it: "Si sono fatti lavare la macchina." },
    ],
    mistakes: [
      { wrong: "I cut my hair (dal parrucchiere).", right: "I had my hair cut.", why: "Se lo fa un altro → causativo." },
      { wrong: "I had cut my hair.", right: "I had my hair cut.", why: "Ordine: have + oggetto + participio." },
      { wrong: "I got repair my car.", right: "I got my car repaired.", why: "get + oggetto + participio." },
    ],
    miniTest: [
      { prompt: "I had my hair ___.", options: ["cut", "cutted", "to cut", "cutting"], answer: 0 },
      { prompt: "She got her phone ___.", options: ["repair", "repaired", "to repair", "repairing"], answer: 1 },
      { prompt: "Ordine corretto:", options: ["I had cut my hair", "I had my hair cut", "I my hair had cut", "I cut had my hair"], answer: 1 },
      { prompt: "They ___ the roof fixed.", options: ["did", "made", "had", "let"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b2-be-supposed-to",
    explanation:
      "be supposed to esprime ciò che ci si aspetta, ciò che è previsto o l'opinione comune.",
    rules: [
      "be supposed to + base: You're supposed to wear a helmet (regola).",
      "Aspettativa non rispettata: The train was supposed to arrive at 6.",
      "Opinione comune: It's supposed to be a good film.",
      "Negativa: not supposed to = non dovresti / non è permesso.",
    ],
    examples: [
      { en: "You're supposed to be quiet here.", it: "Qui si dovrebbe stare in silenzio." },
      { en: "It was supposed to rain, but it didn't.", it: "Doveva piovere, ma non è successo." },
      { en: "You're not supposed to park here.", it: "Non dovresti parcheggiare qui." },
    ],
    mistakes: [
      { wrong: "You're supposed wear a tie.", right: "You're supposed to wear a tie.", why: "Serve to." },
      { wrong: "It's supposed be good.", right: "It's supposed to be good.", why: "supposed to + base." },
      { wrong: "I'm not suppose to.", right: "I'm not supposed to.", why: "Participio: supposed." },
    ],
    miniTest: [
      { prompt: "You're supposed ___ here at 9.", options: ["be", "to be", "being", "been"], answer: 1 },
      { prompt: "It ___ to snow today.", options: ["is supposed", "supposes", "is suppose", "supposed"], answer: 0 },
      { prompt: "You're ___ to smoke here.", options: ["not supposed", "supposed not", "don't supposed", "not suppose"], answer: 0 },
      { prompt: "The film is supposed ___ great.", options: ["be", "to be", "being", "that"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-its-time",
    explanation:
      "It's time (that) + soggetto + past simple esprime che qualcosa dovrebbe già succedere (ma non sta succedendo). Uso 'irreale' del passato.",
    rules: [
      "It's time + soggetto + PAST simple: It's time we left.",
      "Enfasi: It's high time / It's about time you started.",
      "Impersonale: It's time to + base (It's time to go).",
      "Anche se il senso è presente/futuro, si usa il past simple (were per tutti).",
    ],
    examples: [
      { en: "It's time you went to bed.", it: "È ora che tu vada a letto." },
      { en: "It's high time we made a decision.", it: "È proprio ora di decidere." },
      { en: "It's time to leave.", it: "È ora di andare." },
    ],
    mistakes: [
      { wrong: "It's time you go to bed.", right: "It's time you went to bed.", why: "It's time + soggetto → past simple." },
      { wrong: "It's time we will decide.", right: "It's time we decided.", why: "Uso irreale del passato." },
      { wrong: "It's time to going.", right: "It's time to go.", why: "It's time to + base." },
    ],
    miniTest: [
      { prompt: "It's time you ___ home.", options: ["go", "went", "will go", "going"], answer: 1 },
      { prompt: "It's high time we ___.", options: ["decide", "decided", "will decide", "deciding"], answer: 1 },
      { prompt: "Impersonale: It's time ___ leave.", options: ["to", "that", "for", "-"], answer: 0 },
      { prompt: "It's time she ___ the truth.", options: ["knows", "knew", "will know", "know"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-wish-if-only",
    explanation:
      "wish e if only esprimono desideri e rimpianti. La forma cambia se il rammarico è sul presente, sul passato o su un fastidio ricorrente.",
    rules: [
      "Presente: wish + past simple (I wish I had more time).",
      "Passato (rimpianto): wish + past perfect (I wish I had studied).",
      "Fastidio con would: I wish you would stop.",
      "were per tutte le persone: I wish I were taller.",
    ],
    examples: [
      { en: "I wish I knew the answer.", it: "Vorrei sapere la risposta." },
      { en: "I wish I hadn't said that.", it: "Vorrei non averlo detto." },
      { en: "If only they would listen!", it: "Se solo ascoltassero!" },
    ],
    mistakes: [
      { wrong: "I wish I have more money.", right: "I wish I had more money.", why: "Desiderio presente → past simple." },
      { wrong: "I wish I would study harder.", right: "I wish I had studied harder.", why: "Rimpianto passato → past perfect." },
      { wrong: "I wish I was taller.", right: "I wish I were taller.", why: "were per tutte le persone (formale)." },
    ],
    miniTest: [
      { prompt: "I wish I ___ how to swim.", options: ["know", "knew", "have known", "will know"], answer: 1 },
      { prompt: "Rimpianto: I wish I ___ harder.", options: ["study", "studied", "had studied", "would study"], answer: 2 },
      { prompt: "Fastidio: I wish he ___ stop.", options: ["will", "would", "did", "had"], answer: 1 },
      { prompt: "I wish I ___ there now.", options: ["am", "was", "were", "had been"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b2-modals-advanced",
    explanation:
      "I modali del passato (should have, must have, can't have, might have + participio) esprimono deduzioni, rimpianti e critiche su eventi passati.",
    rules: [
      "should have + participio = rimpianto/critica (You should have called).",
      "must have + participio = deduzione certa positiva (She must have left).",
      "can't have + participio = deduzione certa negativa (He can't have known).",
      "might/could have + participio = possibilità.",
    ],
    examples: [
      { en: "You should have told me.", it: "Avresti dovuto dirmelo." },
      { en: "She must have forgotten.", it: "Deve essersene dimenticata." },
      { en: "He can't have finished already.", it: "Non può aver già finito." },
    ],
    mistakes: [
      { wrong: "You should told me.", right: "You should have told me.", why: "Modale passato: have + participio." },
      { wrong: "She must had left.", right: "She must have left.", why: "must have + participio." },
      { wrong: "He can't had known.", right: "He can't have known.", why: "can't have + participio." },
    ],
    miniTest: [
      { prompt: "Rimpianto: You ___ studied.", options: ["should", "should have", "must have", "can't have"], answer: 1 },
      { prompt: "Deduzione sì: She ___ forgotten.", options: ["should have", "must have", "can't have", "might"], answer: 1 },
      { prompt: "Deduzione no: He ___ seen it.", options: ["must have", "can't have", "should have", "would"], answer: 1 },
      { prompt: "Forma corretta:", options: ["should told", "should have told", "should had told", "should have tell"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-gerund-infinitive-meaning",
    explanation:
      "Alcuni verbi cambiano significato a seconda che siano seguiti dal gerundio o dall'infinito: remember, forget, stop, try, regret…",
    rules: [
      "remember/forget + to (dovere futuro) vs + -ing (ricordo passato).",
      "stop + to (fermarsi PER fare) vs + -ing (smettere di).",
      "try + to (tentare) vs + -ing (provare come esperimento).",
      "regret + to (mi dispiace comunicare) vs + -ing (rimpiangere).",
    ],
    examples: [
      { en: "Remember to call her.", it: "Ricordati di chiamarla." },
      { en: "I remember meeting him.", it: "Ricordo di averlo incontrato." },
      { en: "He stopped smoking.", it: "Ha smesso di fumare." },
    ],
    mistakes: [
      { wrong: "I stopped to smoke (=ho smesso).", right: "I stopped smoking.", why: "Smettere di → stop + -ing." },
      { wrong: "Remember locking the door! (istruzione)", right: "Remember to lock the door!", why: "Dovere futuro → remember to." },
      { wrong: "I'll never forget to visit Rome (ricordo).", right: "I'll never forget visiting Rome.", why: "Ricordo di un'esperienza → -ing." },
    ],
    miniTest: [
      { prompt: "Ricordati di spegnere: Remember ___ off the lights.", options: ["turning", "to turn", "turn", "turned"], answer: 1 },
      { prompt: "Ha smesso di lavorare: He stopped ___.", options: ["to work", "working", "work", "worked"], answer: 1 },
      { prompt: "Ricordo di averla vista: I remember ___ her.", options: ["to see", "seeing", "see", "saw"], answer: 1 },
      { prompt: "Si è fermato per fumare: He stopped ___ a cigarette.", options: ["smoking", "to smoke", "smoke", "smoked"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-prep-ing",
    explanation:
      "Dopo una preposizione, un verbo va sempre in -ing. Alcune espressioni fisse lo richiedono (look forward to, be used to, insist on…).",
    rules: [
      "preposizione + verbo → -ing: after leaving, without asking, by working.",
      "Espressioni: look forward to + -ing, be/get used to + -ing, insist on + -ing.",
      "Attento a 'to': in look forward to / be used to è preposizione → -ing.",
      "there's no point in + -ing; it's worth + -ing.",
    ],
    examples: [
      { en: "I look forward to hearing from you.", it: "Non vedo l'ora di sentirti." },
      { en: "She left without saying goodbye.", it: "È andata via senza salutare." },
      { en: "It's worth trying.", it: "Vale la pena provare." },
    ],
    mistakes: [
      { wrong: "I look forward to hear from you.", right: "…to hearing from you.", why: "'to' qui è preposizione → -ing." },
      { wrong: "without to ask", right: "without asking", why: "Dopo preposizione → -ing." },
      { wrong: "I'm used to work here (abituato).", right: "I'm used to working here.", why: "be used to + -ing." },
    ],
    miniTest: [
      { prompt: "look forward to ___ you", options: ["see", "seeing", "to see", "saw"], answer: 1 },
      { prompt: "She left without ___.", options: ["speak", "to speak", "speaking", "spoke"], answer: 2 },
      { prompt: "I'm used to ___ early.", options: ["get up", "to get up", "getting up", "got up"], answer: 2 },
      { prompt: "It's worth ___.", options: ["try", "to try", "trying", "tried"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b2-adj-prep",
    explanation:
      "Aggettivo + to-infinito (it's easy to do) e aggettivo + preposizione + -ing (afraid of failing). Due schemi comuni a B2.",
    rules: [
      "aggettivo + to + base: It's difficult to explain; I'm happy to help.",
      "aggettivo + preposizione + -ing: afraid of flying, good at cooking.",
      "It's + aggettivo + of + persona + to (giudizio): It's kind of you to help.",
      "Non usare -ing dopo il to-infinito.",
    ],
    examples: [
      { en: "It's easy to make mistakes.", it: "È facile sbagliare." },
      { en: "She's afraid of speaking in public.", it: "Ha paura di parlare in pubblico." },
      { en: "It was nice of you to call.", it: "È stato gentile da parte tua chiamare." },
    ],
    mistakes: [
      { wrong: "It's easy making mistakes.", right: "It's easy to make mistakes.", why: "aggettivo + to + base." },
      { wrong: "afraid to flying", right: "afraid of flying", why: "aggettivo + preposizione + -ing." },
      { wrong: "It's kind you to help.", right: "It's kind of you to help.", why: "of + persona + to." },
    ],
    miniTest: [
      { prompt: "It's hard ___ him.", options: ["understanding", "to understand", "understand", "understood"], answer: 1 },
      { prompt: "afraid ___ dogs", options: ["to", "of", "for", "at"], answer: 1 },
      { prompt: "good at ___", options: ["draw", "to draw", "drawing", "drawn"], answer: 2 },
      { prompt: "It's nice ___ you to come.", options: ["for", "of", "to", "that"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-perception-verbs",
    explanation:
      "Con i verbi di percezione (see, hear, watch, feel), l'infinito senza to indica l'azione completa; -ing un'azione in corso.",
    rules: [
      "verbo + oggetto + base (azione intera): I saw him leave.",
      "verbo + oggetto + -ing (azione in corso): I saw him leaving.",
      "Non usare to: no «I saw him to leave».",
      "Vale per see, hear, watch, feel, notice, listen to.",
    ],
    examples: [
      { en: "I heard someone shout.", it: "Ho sentito qualcuno gridare." },
      { en: "I saw them playing football.", it: "Li ho visti giocare a calcio." },
      { en: "She felt the ground shake.", it: "Ha sentito la terra tremare." },
    ],
    mistakes: [
      { wrong: "I saw him to leave.", right: "I saw him leave.", why: "Percezione + oggetto + base (senza to)." },
      { wrong: "I heard she to sing.", right: "I heard her sing / singing.", why: "Oggetto (her) + base/-ing, senza to." },
      { wrong: "I watched him plays.", right: "I watched him play.", why: "Forma base senza -s." },
    ],
    miniTest: [
      { prompt: "I saw him ___ (azione intera).", options: ["to leave", "leave", "leaves", "left"], answer: 1 },
      { prompt: "I heard her ___ (in corso).", options: ["sing", "to sing", "singing", "sang"], answer: 2 },
      { prompt: "I felt the house ___.", options: ["to shake", "shake", "shakes", "shaken"], answer: 1 },
      { prompt: "Corretto:", options: ["I saw him to run", "I saw him run", "I saw he run", "I saw him runs"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-make-let-get",
    explanation:
      "Verbi di causa/permesso con costruzioni diverse: make/let + base senza to; allow/get + to.",
    rules: [
      "make + oggetto + base (costringere): They made me wait.",
      "let + oggetto + base (permettere): Let me help.",
      "allow + oggetto + to (permettere, formale): They allowed us to leave.",
      "get + oggetto + to (convincere): I got him to apologise.",
    ],
    examples: [
      { en: "She let me borrow her car.", it: "Mi ha lasciato prendere in prestito la macchina." },
      { en: "They made him apologise.", it: "L'hanno costretto a scusarsi." },
      { en: "I couldn't get her to change her mind.", it: "Non sono riuscito a farle cambiare idea." },
    ],
    mistakes: [
      { wrong: "She let me to go.", right: "She let me go.", why: "let + oggetto + base (senza to)." },
      { wrong: "They made me to wait.", right: "They made me wait.", why: "make + oggetto + base." },
      { wrong: "They allowed us leave.", right: "They allowed us to leave.", why: "allow + oggetto + to." },
    ],
    miniTest: [
      { prompt: "They made me ___.", options: ["to wait", "wait", "waiting", "waited"], answer: 1 },
      { prompt: "Let me ___.", options: ["to help", "help", "helping", "helped"], answer: 1 },
      { prompt: "They allowed us ___ in.", options: ["come", "to come", "coming", "came"], answer: 1 },
      { prompt: "I got him ___ sorry.", options: ["say", "to say", "saying", "said"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-correlatives",
    explanation:
      "Le congiunzioni correlative collegano elementi a coppie: both…and, either…or, neither…nor, not only…but also.",
    rules: [
      "both A and B; either A or B; neither A nor B.",
      "not only… but also… (non solo… ma anche).",
      "Il verbo con neither/either segue il soggetto più vicino.",
      "Gli elementi collegati devono essere paralleli (stessa forma).",
    ],
    examples: [
      { en: "She speaks both French and German.", it: "Parla sia francese sia tedesco." },
      { en: "You can have either tea or coffee.", it: "Puoi avere o tè o caffè." },
      { en: "He's neither rich nor famous.", it: "Non è né ricco né famoso." },
    ],
    mistakes: [
      { wrong: "both… or…", right: "both… and…", why: "both va con and." },
      { wrong: "neither… or…", right: "neither… nor…", why: "neither va con nor." },
      { wrong: "not only smart but he is kind.", right: "not only smart but also kind.", why: "Elementi paralleli." },
    ],
    miniTest: [
      { prompt: "both tea ___ coffee", options: ["or", "and", "nor", "but"], answer: 1 },
      { prompt: "either now ___ never", options: ["and", "or", "nor", "but"], answer: 1 },
      { prompt: "neither hot ___ cold", options: ["or", "and", "nor", "but"], answer: 2 },
      { prompt: "not only fast ___ also safe", options: ["and", "but", "or", "nor"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-comparative-progressive",
    explanation:
      "Due strutture comparative: 'the + comparativo…, the + comparativo…' (più… più…) e 'comparativo and comparativo' (sempre più…).",
    rules: [
      "the + comparativo, the + comparativo: The more you practise, the better you get.",
      "comparativo and comparativo: It's getting colder and colder.",
      "Con aggettivi lunghi: more and more expensive.",
      "Esprimono cambiamento parallelo o progressivo.",
    ],
    examples: [
      { en: "The harder you work, the luckier you get.", it: "Più lavori sodo, più sei fortunato." },
      { en: "Prices are getting higher and higher.", it: "I prezzi diventano sempre più alti." },
      { en: "The more, the better.", it: "Più ce n'è, meglio è." },
    ],
    mistakes: [
      { wrong: "More you practise, more you learn.", right: "The more you practise, the more you learn.", why: "Serve 'the' davanti a entrambi." },
      { wrong: "It's getting cold and cold.", right: "It's getting colder and colder.", why: "Comparativo ripetuto." },
      { wrong: "more and more big", right: "bigger and bigger", why: "Aggettivo corto → -er and -er." },
    ],
    miniTest: [
      { prompt: "___ you eat, ___ you gain.", options: ["More/more", "The more/the more", "More/the more", "The more/more"], answer: 1 },
      { prompt: "It's getting ___.", options: ["hot and hot", "hotter and hotter", "more hot", "hot and hotter"], answer: 1 },
      { prompt: "big →", options: ["more and more big", "bigger and bigger", "big and bigger", "the big the big"], answer: 1 },
      { prompt: "The more, ___.", options: ["the better", "better", "more better", "the more better"], answer: 0 },
    ],
  },
  {
    unitId: "gr-b2-used-be-get-used",
    explanation:
      "Tre strutture da distinguere: used to + base (abitudine passata); be used to + -ing (essere abituato); get used to + -ing (abituarsi).",
    rules: [
      "used to + base: I used to smoke (una volta, non più).",
      "be used to + -ing/nome: I'm used to getting up early.",
      "get used to + -ing/nome: I'm getting used to the noise.",
      "Dopo be/get used TO va -ing (to è preposizione).",
    ],
    examples: [
      { en: "I used to live in Spain.", it: "Una volta vivevo in Spagna." },
      { en: "She's used to working nights.", it: "È abituata a lavorare di notte." },
      { en: "He's getting used to his new job.", it: "Si sta abituando al nuovo lavoro." },
    ],
    mistakes: [
      { wrong: "I'm used to get up early.", right: "I'm used to getting up early.", why: "be used to + -ing." },
      { wrong: "I used to living there (abituato).", right: "I'm used to living there.", why: "essere abituato → be used to." },
      { wrong: "I'm getting used to work here.", right: "…to working here.", why: "get used to + -ing." },
    ],
    miniTest: [
      { prompt: "Abitudine passata: I ___ smoke.", options: ["used to", "am used to", "get used to", "use to"], answer: 0 },
      { prompt: "Sono abituato: I'm used to ___ early.", options: ["get up", "to get up", "getting up", "got up"], answer: 2 },
      { prompt: "Mi sto abituando: I'm ___ used to it.", options: ["-", "getting", "used", "being"], answer: 1 },
      { prompt: "She's used to ___ hard.", options: ["work", "to work", "working", "worked"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b2-would-rather-better",
    explanation:
      "would rather = 'preferirei'; had better = 'faresti meglio a' (consiglio forte). Entrambi + base senza to.",
    rules: [
      "would rather + base: I'd rather stay home.",
      "had better + base: You'd better hurry (consiglio/avvertimento).",
      "Negativa: would rather not; had better not.",
      "would rather + soggetto + past simple: I'd rather you left now.",
    ],
    examples: [
      { en: "I'd rather have tea.", it: "Preferirei un tè." },
      { en: "You'd better see a doctor.", it: "Faresti meglio a vedere un medico." },
      { en: "I'd rather you didn't smoke here.", it: "Preferirei che non fumassi qui." },
    ],
    mistakes: [
      { wrong: "I'd rather to go.", right: "I'd rather go.", why: "would rather + base senza to." },
      { wrong: "You'd better to hurry.", right: "You'd better hurry.", why: "had better + base senza to." },
      { wrong: "You had better not to be late.", right: "You'd better not be late.", why: "Negativa: better not + base." },
    ],
    miniTest: [
      { prompt: "I'd rather ___ home.", options: ["to stay", "stay", "staying", "stayed"], answer: 1 },
      { prompt: "You'd better ___.", options: ["to leave", "leave", "leaving", "left"], answer: 1 },
      { prompt: "Negativa: You'd better ___ late.", options: ["not to be", "not be", "don't be", "to not be"], answer: 1 },
      { prompt: "I'd rather you ___ now.", options: ["leave", "left", "to leave", "leaving"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-purpose-result-clauses",
    explanation:
      "Le finali esprimono lo scopo (so that, in order to, to); le consecutive il risultato (so… that, such… that).",
    rules: [
      "Finale: to / in order to / so as to + base.",
      "Finale con soggetto diverso: so that + frase.",
      "Consecutiva: so + aggettivo + that.",
      "Consecutiva: such + (a) + nome + that.",
    ],
    examples: [
      { en: "She studies hard so that she can pass.", it: "Studia sodo affinché possa passare." },
      { en: "It was so cold that the lake froze.", it: "Faceva così freddo che il lago si è ghiacciato." },
      { en: "It was such a mess that we cleaned for hours.", it: "Era un tale disastro che abbiamo pulito per ore." },
    ],
    mistakes: [
      { wrong: "It was so a good film.", right: "It was such a good film.", why: "such + a + nome; so + aggettivo." },
      { wrong: "It was so good film.", right: "It was such a good film.", why: "so va con l'aggettivo, such col nome." },
      { wrong: "I called for to ask.", right: "I called (in order) to ask.", why: "Scopo → (in order) to + base." },
    ],
    miniTest: [
      { prompt: "Scopo: I left early ___ catch the bus.", options: ["for", "to", "so", "that"], answer: 1 },
      { prompt: "It was ___ cold that we left.", options: ["such", "so", "very", "too"], answer: 1 },
      { prompt: "It was ___ a good film that…", options: ["so", "such", "very", "too"], answer: 1 },
      { prompt: "so that + …", options: ["base senza to", "una frase", "un nome", "-ing"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-concessive",
    explanation:
      "Le proposizioni concessive esprimono un contrasto/una concessione: although, even though, though, whereas, while, despite/in spite of.",
    rules: [
      "although / even though / though + frase.",
      "whereas / while introducono un contrasto tra due fatti.",
      "despite / in spite of + nome/-ing.",
      "however/nevertheless: avverbi, frase separata.",
    ],
    examples: [
      { en: "Although he's rich, he's unhappy.", it: "Anche se è ricco, è infelice." },
      { en: "She likes tea, whereas I prefer coffee.", it: "A lei piace il tè, mentre io preferisco il caffè." },
      { en: "Despite being tired, he kept going.", it: "Nonostante fosse stanco, ha continuato." },
    ],
    mistakes: [
      { wrong: "Despite he was tired…", right: "Despite being tired… / Although he was tired…", why: "despite + nome/-ing." },
      { wrong: "Although of the cost…", right: "Despite the cost… / Although it was costly…", why: "Struttura sbagliata." },
      { wrong: "Even though of the rain…", right: "Even though it rained…", why: "even though + frase." },
    ],
    miniTest: [
      { prompt: "___ it was hard, we finished.", options: ["Despite", "Although", "However", "In spite"], answer: 1 },
      { prompt: "___ being ill, she worked.", options: ["Although", "Despite", "Even though", "Whereas"], answer: 1 },
      { prompt: "I like dogs, ___ she likes cats.", options: ["although", "despite", "whereas", "however"], answer: 2 },
      { prompt: "even though + …", options: ["nome", "-ing", "una frase", "preposizione"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b2-inversion-intro",
    explanation:
      "Dopo alcune espressioni negative a inizio frase (never, rarely, hardly, not only…), si inverte soggetto e ausiliare, come in una domanda. Registro formale/enfatico.",
    rules: [
      "Never have I seen… (never + aux + soggetto).",
      "Rarely / Seldom / Hardly ever + inversione.",
      "Not only did he win, but he also…",
      "L'inversione usa l'ausiliare (do/does/did se non c'è altro).",
    ],
    examples: [
      { en: "Never have I been so happy.", it: "Mai sono stato così felice." },
      { en: "Rarely do we see such talent.", it: "Raramente vediamo un simile talento." },
      { en: "Not only did she sing, but she also danced.", it: "Non solo ha cantato, ma ha anche ballato." },
    ],
    mistakes: [
      { wrong: "Never I have seen it.", right: "Never have I seen it.", why: "Inversione: aux + soggetto." },
      { wrong: "Rarely we see this.", right: "Rarely do we see this.", why: "Serve l'ausiliare do." },
      { wrong: "Not only he won but…", right: "Not only did he win but…", why: "Inversione dopo not only." },
    ],
    miniTest: [
      { prompt: "Never ___ I seen this.", options: ["have", "I have", "did", "has"], answer: 0 },
      { prompt: "Rarely ___ we go out.", options: ["we do", "do", "did we", "are"], answer: 1 },
      { prompt: "Not only ___ he arrive late,", options: ["he did", "did", "was", "does he"], answer: 1 },
      { prompt: "Ordine corretto:", options: ["Seldom I see him", "Seldom do I see him", "Seldom see I him", "I seldom do see"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-adverb-order",
    explanation:
      "Quando ci sono più avverbi, l'ordine tipico è: MODO – LUOGO – TEMPO. Inoltre do/does/did + base danno enfasi al verbo.",
    rules: [
      "Ordine: manner, place, time (She sang beautifully at the concert last night).",
      "Gli avverbi di frequenza vanno prima del verbo principale.",
      "Enfasi: I do like it! / He did call.",
      "L'avverbio di modo non va tra verbo e oggetto.",
    ],
    examples: [
      { en: "He drove carefully to work this morning.", it: "Ha guidato con attenzione al lavoro stamattina." },
      { en: "I do want to help.", it: "Voglio davvero aiutare." },
      { en: "She sang beautifully last night.", it: "Ha cantato magnificamente ieri sera." },
    ],
    mistakes: [
      { wrong: "I speak well English.", right: "I speak English well.", why: "L'avverbio di modo non va tra verbo e oggetto." },
      { wrong: "He goes often to the gym.", right: "He often goes to the gym.", why: "Frequenza prima del verbo principale." },
      { wrong: "I like it! (enfasi)", right: "I do like it!", why: "Enfasi con do + base." },
    ],
    miniTest: [
      { prompt: "Ordine: She worked ___.", options: ["hard here today", "today here hard", "here today hard", "hard today here"], answer: 0 },
      { prompt: "Enfasi: I ___ love it.", options: ["am", "do", "very", "did"], answer: 1 },
      { prompt: "Frequenza: He ___ visits us.", options: ["visits often", "very", "often", "often not"], answer: 2 },
      { prompt: "Corretto:", options: ["I speak well English", "I speak English well", "I well speak English", "English I speak well"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b2-like-as",
    explanation:
      "like e as si confondono: like + nome (simile a); as + frase o ruolo (in qualità di). as if / as though introducono un paragone ipotetico.",
    rules: [
      "like + nome/pronome (similitudine): He runs like a machine.",
      "as + frase (come) e as + ruolo (I work as a teacher).",
      "as if / as though + frase (come se): It looks as if it will rain.",
      "Nel parlato 'like' sostituisce spesso 'as if', ma è informale.",
    ],
    examples: [
      { en: "She sings like a professional.", it: "Canta come una professionista." },
      { en: "As you know, we're closed.", it: "Come sai, siamo chiusi." },
      { en: "He talks as if he knew everything.", it: "Parla come se sapesse tutto." },
    ],
    mistakes: [
      { wrong: "Do like I say.", right: "Do as I say.", why: "Come + frase → as." },
      { wrong: "I work like a nurse (ruolo).", right: "I work as a nurse.", why: "Ruolo/funzione → as." },
      { wrong: "It looks like it will rains.", right: "It looks as if it will rain.", why: "Paragone ipotetico → as if + frase corretta." },
    ],
    miniTest: [
      { prompt: "He eats ___ a horse (nome).", options: ["as", "like", "as if", "so"], answer: 1 },
      { prompt: "___ I said, it's fine (frase).", options: ["Like", "As", "As if", "So"], answer: 1 },
      { prompt: "I work ___ a chef (ruolo).", options: ["like", "as", "as if", "than"], answer: 1 },
      { prompt: "She acts ___ she's the boss.", options: ["like", "as", "as if", "so"], answer: 2 },
    ],
  },
];
