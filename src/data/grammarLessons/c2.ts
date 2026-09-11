import type { GrammarLesson } from "@/features/grammarLessons/types";

/** C2 grammar lessons. */
export const c2Lessons: GrammarLesson[] = [
  {
    unitId: "gr-c2-idiomatic-emphatic",
    explanation:
      "Strutture idiomatiche ed enfatiche dell'inglese avanzato: fronting (anteposizione), emphatic do, cleft, what-clauses e costruzioni idiomatiche per dare risalto.",
    rules: [
      "Fronting per enfasi: Amazing, that concert was; Down came the rain.",
      "Emphatic do: I DO understand; He did call.",
      "The thing is… / What happened was… per introdurre.",
      "Idiomi enfatici: not in the least, by no means, far from it.",
    ],
    examples: [
      { en: "Never in my life have I seen such a thing.", it: "Mai in vita mia ho visto una cosa simile." },
      { en: "It's not that I don't care; it's that I can't help.", it: "Non è che non m'importi; è che non posso aiutare." },
      { en: "What I can't stand is rudeness.", it: "Ciò che non sopporto è la maleducazione." },
    ],
    mistakes: [
      { wrong: "I do understanding.", right: "I do understand.", why: "emphatic do + base." },
      { wrong: "By no means it is easy.", right: "By no means is it easy.", why: "Espressione negativa iniziale → inversione." },
      { wrong: "The thing is that is late.", right: "The thing is (that) it's late.", why: "Serve il soggetto." },
    ],
    miniTest: [
      { prompt: "Enfasi: I ___ care.", options: ["do", "am", "very", "does"], answer: 0 },
      { prompt: "By no means ___ it simple.", options: ["it is", "is", "was it not", "does"], answer: 1 },
      { prompt: "Fronting corretto:", options: ["That was amazing", "Amazing, that was", "Was amazing that", "That amazing was"], answer: 1 },
      { prompt: "___ I need is quiet.", options: ["That", "What", "It", "Which"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c2-register",
    explanation:
      "Il registro: scegliere formale vs informale e le convenzioni della scrittura accademica (impersonalità, hedging, nominalizzazione, lessico latinizzato).",
    rules: [
      "Formale: passivo, nominalizzazioni, verbi latinizzati (obtain vs get).",
      "Informale: phrasal verbs, contrazioni, question tags, frasi brevi.",
      "Hedging accademico: it may be argued that, tends to, appears to.",
      "Nello scritto formale evita contrazioni e 'you' generico.",
    ],
    examples: [
      { en: "The data suggest that…", it: "I dati suggeriscono che… (formale)" },
      { en: "I reckon it's fine.", it: "Secondo me va bene. (informale)" },
      { en: "It could be argued that costs outweigh benefits.", it: "Si potrebbe sostenere che i costi superino i benefici." },
    ],
    mistakes: [
      { wrong: "This essay will show you loads of stuff.", right: "This essay demonstrates several points.", why: "Registro accademico." },
      { wrong: "The results prove definitely that…", right: "The results suggest that…", why: "Hedging: evita affermazioni assolute." },
      { wrong: "Kids don't like it (accademico).", right: "Children tend to dislike it.", why: "Lessico e cautela formali." },
    ],
    miniTest: [
      { prompt: "Più formale di 'get':", options: ["obtain", "grab", "pick up", "nab"], answer: 0 },
      { prompt: "Hedging accademico:", options: ["proves", "tends to", "definitely", "for sure"], answer: 1 },
      { prompt: "Informale:", options: ["furthermore", "reckon", "obtain", "therefore"], answer: 1 },
      { prompt: "Nello scritto formale evita:", options: ["il passivo", "le contrazioni", "le nominalizzazioni", "i verbi latini"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c2-collocations-idioms",
    explanation:
      "Collocazioni native (parole che vanno insieme) e idiomi: usarle correttamente è ciò che rende l'inglese naturale a livello C2.",
    rules: [
      "Verbo+nome: make a decision, do research, take a risk, pay attention.",
      "Aggettivo+nome: heavy rain, strong coffee, deep sleep.",
      "Idiomi a forma fissa: once in a blue moon, cost an arm and a leg.",
      "Gli idiomi non si traducono parola per parola e non si alterano.",
    ],
    examples: [
      { en: "make a decision", it: "prendere una decisione" },
      { en: "It's raining cats and dogs.", it: "Piove a catinelle." },
      { en: "That car cost an arm and a leg.", it: "Quella macchina è costata un occhio della testa." },
    ],
    mistakes: [
      { wrong: "do a decision", right: "make a decision", why: "Collocazione: make a decision." },
      { wrong: "strong rain", right: "heavy rain", why: "Collocazione: heavy rain." },
      { wrong: "cost a leg and an arm", right: "cost an arm and a leg", why: "Gli idiomi hanno forma fissa." },
    ],
    miniTest: [
      { prompt: "___ a decision", options: ["do", "make", "take", "have"], answer: 1 },
      { prompt: "___ rain (forte)", options: ["strong", "big", "heavy", "hard"], answer: 2 },
      { prompt: "___ research", options: ["make", "do", "take", "have"], answer: 1 },
      { prompt: "pay ___", options: ["attention", "care", "mind", "notice"], answer: 0 },
    ],
  },
  {
    unitId: "gr-c2-nominalisation",
    explanation:
      "La nominalizzazione trasforma verbi/aggettivi in nomi (decide → decision) per uno stile più denso, formale e impersonale, tipico dell'accademico.",
    rules: [
      "Verbo → nome: analyse → analysis; fail → failure; grow → growth.",
      "Aggettivo → nome: able → ability; wide → width.",
      "Rende la frase più impersonale/compatta.",
      "Troppa nominalizzazione appesantisce: usarla con misura.",
    ],
    examples: [
      { en: "The introduction of the law reduced crime.", it: "L'introduzione della legge ha ridotto il crimine." },
      { en: "Her refusal surprised us.", it: "Il suo rifiuto ci ha sorpresi." },
      { en: "The analysis of the data took weeks.", it: "L'analisi dei dati ha richiesto settimane." },
    ],
    mistakes: [
      { wrong: "The fail of the plan.", right: "The failure of the plan.", why: "Nome corretto: failure." },
      { wrong: "The analyse showed…", right: "The analysis showed…", why: "Nome: analysis." },
      { wrong: "The grow of the economy.", right: "The growth of the economy.", why: "Nome: growth." },
    ],
    miniTest: [
      { prompt: "decide →", options: ["decidance", "decision", "deciding", "decide"], answer: 1 },
      { prompt: "fail →", options: ["failness", "failure", "failment", "fail"], answer: 1 },
      { prompt: "grow →", options: ["growment", "growth", "growness", "growing"], answer: 1 },
      { prompt: "analyse →", options: ["analysation", "analysis", "analyse", "analysing"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c2-syntactic-disambiguation",
    explanation:
      "In frasi complesse, punteggiatura, ordine e struttura evitano ambiguità: modificatori mal posizionati, attaccamento delle relative, negazioni e la posizione di 'only'.",
    rules: [
      "Misplaced modifiers: 'She drove for almost six hours' ≠ 'She almost drove for six hours'.",
      "Le relative attaccano al nome più vicino: chiarisci o riscrivi.",
      "Evita pronomi ambigui: ripeti il nome se serve.",
      "La posizione di 'only' cambia il significato.",
    ],
    examples: [
      { en: "I only borrowed it. (non l'ho comprato)", it: "L'ho solo preso in prestito." },
      { en: "Only I borrowed it. (nessun altro)", it: "Solo io l'ho preso in prestito." },
      { en: "Running late, I missed the bus.", it: "Essendo in ritardo, ho perso il bus." },
    ],
    mistakes: [
      { wrong: "I saw the man with the telescope (ambiguo).", right: "Using a telescope, I saw the man.", why: "Chiarire chi ha il telescopio." },
      { wrong: "She almost failed all the exams (ambiguo).", right: "She failed almost all the exams.", why: "Posizione di 'almost'." },
      { wrong: "Walking home, the keys fell (dangling).", right: "Walking home, I dropped the keys.", why: "Soggetto della participial." },
    ],
    miniTest: [
      { prompt: "'L'ho solo preso in prestito':", options: ["Only I borrowed it", "I only borrowed it", "I borrowed only it", "It only I borrowed"], answer: 1 },
      { prompt: "'Solo io':", options: ["Only I saw it", "I only saw it", "I saw it only", "Saw only I it"], answer: 0 },
      { prompt: "Modificatore corretto:", options: ["She drove for almost six hours", "She almost drove six hours", "Almost she drove six hours", "She drove almost for six hours"], answer: 0 },
      { prompt: "Dangling participle da evitare:", options: ["Walking home, I fell", "Walking home, the bag fell", "Home walking, I fell", "I fell walking home"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c2-pragmatics",
    explanation:
      "Le sfumature pragmatiche: cortesia, implicito, atti linguistici indiretti e come l'intonazione cambia il significato nel parlato.",
    rules: [
      "Richieste indirette per cortesia: 'I don't suppose you could…?' è più soft di 'Can you…?'.",
      "Understatement britannico: 'not bad' = ottimo; 'a bit of a problem' = grosso problema.",
      "Implicature: 'It's cold in here' può voler dire 'chiudi la finestra'.",
      "L'intonazione/lo stress cambiano il focus e l'atteggiamento.",
    ],
    examples: [
      { en: "You couldn't lend me a hand, could you?", it: "Non è che mi daresti una mano?" },
      { en: "That's not exactly cheap.", it: "Non è proprio economico (= è caro)." },
      { en: "I'm afraid I have to disagree.", it: "Temo di dover dissentire." },
    ],
    mistakes: [
      { wrong: "Give me your pen. (a un estraneo)", right: "Could you possibly lend me a pen?", why: "Cortesia: richiesta indiretta." },
      { wrong: "'Not bad' = mediocre (frainteso).", right: "'Not bad' spesso = molto buono.", why: "Understatement." },
      { wrong: "Interpretare tutto alla lettera.", right: "Cogliere l'implicito dal contesto.", why: "Implicature." },
    ],
    miniTest: [
      { prompt: "Richiesta più cortese:", options: ["Give me a hand.", "Could you give me a hand?", "Hand, now.", "You must help."], answer: 1 },
      { prompt: "'Not bad' di solito significa:", options: ["mediocre", "molto buono", "pessimo", "strano"], answer: 1 },
      { prompt: "'It's a bit warm' (understatement) =", options: ["fresco", "fa molto caldo", "piove", "gelido"], answer: 1 },
      { prompt: "Richiesta indiretta =", options: ["ordine diretto", "forma cortese implicita", "insulto", "domanda retorica"], answer: 1 },
    ],
  },
  {
    unitId: "gr-c2-integrated-review",
    explanation:
      "Revisione integrata: a C2 il punto non è una singola regola ma combinare precisione, naturalezza e stile in ogni tempo e struttura, adattandosi al contesto.",
    rules: [
      "Precisione: la grammatica giusta in ogni tempo/struttura, senza errori residui.",
      "Naturalezza: collocazioni, phrasal verbs e idiomi al posto giusto.",
      "Stile e registro: coerenza tra scopo, pubblico e tono.",
      "Coesione: connettivi, riferimenti e nominalizzazioni per un testo scorrevole.",
    ],
    examples: [
      { en: "Had I known, I would have acted differently.", it: "Se avessi saputo, avrei agito diversamente." },
      { en: "What matters is not what you say but how you say it.", it: "Ciò che conta non è cosa dici ma come lo dici." },
      { en: "Despite having reservations, she agreed.", it: "Nonostante avesse riserve, ha acconsentito." },
    ],
    mistakes: [
      { wrong: "If I would have known…", right: "Had I known… / If I had known…", why: "Precisione: forma condizionale corretta." },
      { wrong: "It's not about what you say but is about how.", right: "…but how you say it.", why: "Parallelismo e coesione." },
      { wrong: "Despite she had doubts…", right: "Despite having doubts…", why: "despite + -ing." },
    ],
    miniTest: [
      { prompt: "Inversione (3° cond.):", options: ["If I would have known", "Had I known", "Have I known", "Had I know"], answer: 1 },
      { prompt: "Parallelismo corretto:", options: ["not what but how you say", "not what you say but how you say it", "what not but how", "not the what but how"], answer: 1 },
      { prompt: "despite +", options: ["frase", "-ing/nome", "to + base", "that only"], answer: 1 },
      { prompt: "A C2 conta soprattutto:", options: ["una sola regola", "precisione + naturalezza + stile", "solo il lessico", "solo la pronuncia"], answer: 1 },
    ],
  },
];
