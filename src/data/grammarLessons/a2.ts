import type { GrammarLesson } from "@/features/grammarLessons/types";

/** A2 grammar lessons. */
export const a2Lessons: GrammarLesson[] = [
  {
    unitId: "gr-a2-past-simple",
    explanation:
      "Il Past Simple racconta azioni concluse in un momento definito del passato. I verbi regolari finiscono in -ed; molti verbi comuni sono irregolari e vanno memorizzati.",
    rules: [
      "Regolari: +ed (worked); -e→-ed (liked); consonante+y→-ied (studied); raddoppio (stopped).",
      "Irregolari: forma propria (go→went, see→saw, have→had).",
      "Negativa/interrogativa con did + forma base: I didn't go; Did you see it?",
      "Con did il verbo torna alla base: no «Did you went?».",
    ],
    examples: [
      { en: "I visited Rome last year.", it: "Ho visitato Roma l'anno scorso." },
      { en: "She didn't call me.", it: "Non mi ha chiamato." },
      { en: "Did they win?", it: "Hanno vinto?" },
    ],
    mistakes: [
      { wrong: "I goed home.", right: "I went home.", why: "go è irregolare → went." },
      { wrong: "Did you saw it?", right: "Did you see it?", why: "Con did, forma base." },
      { wrong: "She no came.", right: "She didn't come.", why: "Negativa con didn't." },
    ],
    miniTest: [
      { prompt: "Yesterday I ___ tired.", options: ["am", "was", "were", "been"], answer: 1 },
      { prompt: "He ___ to Paris last week.", options: ["go", "goed", "went", "gone"], answer: 2 },
      { prompt: "___ you enjoy it?", options: ["Did", "Do", "Was", "Were"], answer: 0 },
      { prompt: "They ___ come (negativa).", options: ["didn't", "don't", "wasn't", "not"], answer: 0 },
    ],
  },
  {
    unitId: "gr-a2-past-continuous",
    explanation:
      "Il Past Continuous descrive un'azione in corso in un momento del passato, spesso interrotta da un'altra al Past Simple.",
    rules: [
      "Forma: was/were + -ing (I was reading, they were playing).",
      "Uso: azione in corso nel passato; lo sfondo di una scena.",
      "Spesso con Past Simple: I was cooking when he arrived.",
      "while + Past Continuous (azione lunga); when + Past Simple (azione breve).",
    ],
    examples: [
      { en: "At 8 p.m. I was studying.", it: "Alle 20 stavo studiando." },
      { en: "They were watching TV when I called.", it: "Guardavano la TV quando ho chiamato." },
      { en: "What were you doing?", it: "Cosa stavi facendo?" },
    ],
    mistakes: [
      { wrong: "I was study.", right: "I was studying.", why: "Serve la forma -ing." },
      { wrong: "While I cooked, he arrived.", right: "While I was cooking, he arrived.", why: "Azione lunga → past continuous." },
      { wrong: "They was playing.", right: "They were playing.", why: "they → were." },
    ],
    miniTest: [
      { prompt: "I ___ when you called.", options: ["slept", "was sleeping", "sleeping", "were sleeping"], answer: 1 },
      { prompt: "They ___ dinner at 8.", options: ["was having", "were having", "had having", "having"], answer: 1 },
      { prompt: "While she ___, the phone rang.", options: ["read", "was reading", "reads", "reading"], answer: 1 },
      { prompt: "What ___ you doing?", options: ["was", "were", "did", "are"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-present-perfect-intro",
    explanation:
      "Il Present Perfect collega passato e presente: esperienze, azioni recenti con effetto ora. Forma: have/has + participio passato. Non si usa con un tempo passato preciso.",
    rules: [
      "Forma: have/has + past participle (I have seen, she has gone).",
      "ever/never per esperienze: Have you ever been…? I've never tried…",
      "just (appena), already (già), yet (ancora, in neg./interr.).",
      "Con yesterday/in 2010 → Past Simple, non Present Perfect.",
    ],
    examples: [
      { en: "I've been to Japan.", it: "Sono stato in Giappone." },
      { en: "She has just left.", it: "È appena uscita." },
      { en: "Have you finished yet?", it: "Hai già finito?" },
    ],
    mistakes: [
      { wrong: "I have seen him yesterday.", right: "I saw him yesterday.", why: "Tempo preciso → Past Simple." },
      { wrong: "She has went.", right: "She has gone.", why: "Participio di go = gone." },
      { wrong: "Did you ever been there?", right: "Have you ever been there?", why: "Esperienza → present perfect." },
    ],
    miniTest: [
      { prompt: "I ___ never eaten sushi.", options: ["have", "has", "did", "am"], answer: 0 },
      { prompt: "She ___ just arrived.", options: ["have", "has", "is", "did"], answer: 1 },
      { prompt: "Participio di 'see':", options: ["saw", "seen", "seed", "see"], answer: 1 },
      { prompt: "Have you finished ___?", options: ["already", "yet", "just", "ever"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-going-to",
    explanation:
      "Be going to esprime intenzioni e previsioni basate su prove presenti. Forma: am/is/are going to + forma base.",
    rules: [
      "Forma: am/is/are going to + base (I'm going to travel).",
      "Intenzioni/piani: I'm going to study tonight.",
      "Previsioni con prove: Look at the clouds — it's going to rain.",
      "Negativa: I'm not going to…; interrogativa: Are you going to…?",
    ],
    examples: [
      { en: "We're going to buy a house.", it: "Compreremo una casa." },
      { en: "It's going to rain.", it: "Pioverà." },
      { en: "Are you going to call her?", it: "La chiamerai?" },
    ],
    mistakes: [
      { wrong: "I go to study.", right: "I'm going to study.", why: "Serve be + going to." },
      { wrong: "She's going to studies.", right: "She's going to study.", why: "Dopo going to, forma base." },
      { wrong: "It going to rain.", right: "It's going to rain.", why: "Serve l'ausiliare be." },
    ],
    miniTest: [
      { prompt: "I ___ going to travel.", options: ["am", "is", "are", "be"], answer: 0 },
      { prompt: "She's going to ___ a car.", options: ["buys", "buy", "buying", "bought"], answer: 1 },
      { prompt: "Look! It ___ to fall.", options: ["going", "is going", "goes", "go"], answer: 1 },
      { prompt: "___ you going to help?", options: ["Do", "Are", "Is", "Will"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-will",
    explanation:
      "Will per decisioni immediate, previsioni, promesse e offerte; shall (con I/we) per proposte. Forma: will + base, uguale per tutti.",
    rules: [
      "Forma: will + base: I will go / I'll go.",
      "Uso: decisione sul momento (I'll help), previsione (It will be sunny), promessa.",
      "Negativa: won't (will not).",
      "Shall solo con I/we per offerte/proposte: Shall I help?",
    ],
    examples: [
      { en: "I'll call you later.", it: "Ti chiamo dopo." },
      { en: "It will be cold tomorrow.", it: "Domani farà freddo." },
      { en: "Shall we go?", it: "Andiamo?" },
    ],
    mistakes: [
      { wrong: "I will to help.", right: "I will help.", why: "Dopo will, base senza to." },
      { wrong: "She will goes.", right: "She will go.", why: "Will è uguale per tutti." },
      { wrong: "I not will come.", right: "I won't come.", why: "Negativa: won't." },
    ],
    miniTest: [
      { prompt: "I think it ___ rain.", options: ["will", "going", "shall", "is"], answer: 0 },
      { prompt: "___ I open the window?", options: ["Will", "Shall", "Do", "Am"], answer: 1 },
      { prompt: "She ___ come (negativo).", options: ["willn't", "won't", "not will", "doesn't"], answer: 1 },
      { prompt: "He will ___ us.", options: ["helps", "to help", "help", "helping"], answer: 2 },
    ],
  },
  {
    unitId: "gr-a2-present-future",
    explanation:
      "Present Continuous per programmi già fissati con data; Present Simple per orari e tabelle ufficiali.",
    rules: [
      "Present Continuous = appuntamenti fissati: I'm meeting Sara tomorrow.",
      "Present Simple = orari/tabelle: The train leaves at 6.",
      "I riferimenti di tempo (tomorrow, at 6) chiariscono il futuro.",
      "Per un appuntamento fissato non usare will: «I'm seeing the dentist at 3».",
    ],
    examples: [
      { en: "We're flying to Rome on Friday.", it: "Voliamo a Roma venerdì." },
      { en: "The film starts at 8.", it: "Il film inizia alle 20." },
      { en: "I'm meeting him tonight.", it: "Lo incontro stasera." },
    ],
    mistakes: [
      { wrong: "The train is leaving at 6 every day.", right: "The train leaves at 6.", why: "Orario fisso → present simple." },
      { wrong: "I will meet Sara tomorrow (fissato).", right: "I'm meeting Sara tomorrow.", why: "Piano fissato → present continuous." },
      { wrong: "What you doing tonight?", right: "What are you doing tonight?", why: "Serve l'ausiliare." },
    ],
    miniTest: [
      { prompt: "The bus ___ at 9 (orario).", options: ["is leaving", "leaves", "will leave", "leave"], answer: 1 },
      { prompt: "I ___ Anna tomorrow (piano).", options: ["see", "am seeing", "will seeing", "sees"], answer: 1 },
      { prompt: "The shop ___ at 8 every day.", options: ["opens", "is opening", "open", "will open"], answer: 0 },
      { prompt: "We ___ dinner with them on Sat.", options: ["have", "are having", "will having", "having"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-comparatives",
    explanation:
      "I comparativi confrontano due cose; i superlativi indicano il massimo. La forma dipende dalla lunghezza dell'aggettivo.",
    rules: [
      "Corti: -er / -est (tall→taller→the tallest); consonante+y→-ier (happy→happier).",
      "Lunghi (2+ sillabe): more / the most (more expensive, the most beautiful).",
      "Irregolari: good→better→best; bad→worse→worst; far→further.",
      "Comparativo + than; superlativo + the.",
    ],
    examples: [
      { en: "This car is faster than mine.", it: "Questa macchina è più veloce della mia." },
      { en: "It's the most expensive one.", it: "È il più costoso." },
      { en: "She's better than me at chess.", it: "È più brava di me a scacchi." },
    ],
    mistakes: [
      { wrong: "more tall", right: "taller", why: "Aggettivo corto → -er." },
      { wrong: "the most big", right: "the biggest", why: "Corto → -est." },
      { wrong: "gooder", right: "better", why: "good è irregolare." },
    ],
    miniTest: [
      { prompt: "big →", options: ["more big", "bigger", "biger", "bigest"], answer: 1 },
      { prompt: "expensive →", options: ["expensiver", "more expensive", "most expensive", "expensivest"], answer: 1 },
      { prompt: "good → (comparativo)", options: ["gooder", "better", "best", "more good"], answer: 1 },
      { prompt: "the ___ mountain (high)", options: ["higher", "highest", "most high", "more high"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-adverbs-manner",
    explanation:
      "Gli avverbi di modo dicono COME si fa qualcosa; di solito si formano con -ly dall'aggettivo, con alcune eccezioni.",
    rules: [
      "Regola: aggettivo + -ly (quick→quickly); -y→-ily (happy→happily).",
      "Irregolari: good→well; fast→fast; hard→hard.",
      "L'avverbio descrive il verbo (sings well); l'aggettivo il nome (a good singer).",
      "Posizione tipica: dopo il verbo/oggetto (drives carefully).",
    ],
    examples: [
      { en: "She speaks English fluently.", it: "Parla inglese fluentemente." },
      { en: "He works hard.", it: "Lavora sodo." },
      { en: "They played well.", it: "Hanno giocato bene." },
    ],
    mistakes: [
      { wrong: "She sings good.", right: "She sings well.", why: "good è aggettivo; l'avverbio è well." },
      { wrong: "He drives fastly.", right: "He drives fast.", why: "fast è già avverbio." },
      { wrong: "speak fluent", right: "speak fluently", why: "Serve l'avverbio -ly." },
    ],
    miniTest: [
      { prompt: "careful →", options: ["carefuly", "carefully", "carefull", "carefuley"], answer: 1 },
      { prompt: "She sings ___.", options: ["good", "well", "goodly", "best"], answer: 1 },
      { prompt: "He runs ___.", options: ["fastly", "fast", "fastily", "faster"], answer: 1 },
      { prompt: "happy →", options: ["happyly", "happily", "happly", "happy"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-some-any",
    explanation:
      "some in affermative e offerte; any in negative e domande. I composti (something, anyone, nobody…) seguono la stessa logica.",
    rules: [
      "some: affermative e offerte/richieste (I have some money; Would you like some tea?).",
      "any: negative e domande (I don't have any; Is there any milk?).",
      "no + nome = not any (There's no bread).",
      "Composti: something/anything/nothing; someone/anyone/no one.",
    ],
    examples: [
      { en: "There are some apples.", it: "Ci sono delle mele." },
      { en: "I don't have any sugar.", it: "Non ho zucchero." },
      { en: "Is there anyone here?", it: "C'è qualcuno qui?" },
    ],
    mistakes: [
      { wrong: "I don't have some money.", right: "I don't have any money.", why: "Negativa → any." },
      { wrong: "There isn't no bread.", right: "There isn't any bread.", why: "No doppia negazione." },
      { wrong: "some informations", right: "some information", why: "information è incontabile." },
    ],
    miniTest: [
      { prompt: "I have ___ questions.", options: ["any", "some", "no any", "a"], answer: 1 },
      { prompt: "Is there ___ milk?", options: ["some", "any", "no", "a"], answer: 1 },
      { prompt: "There's ___ bread (=not any).", options: ["some", "any", "no", "not"], answer: 2 },
      { prompt: "I saw ___ in the garden (persona).", options: ["something", "someone", "anywhere", "nothing"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-quantifiers",
    explanation:
      "much/many/a lot of/a little/a few esprimono quantità; la scelta dipende da numerabile/incontabile e dal tipo di frase.",
    rules: [
      "much + incontabile (soprattutto neg./interr.); many + numerabile.",
      "a lot of / lots of: entrambi, soprattutto in affermative.",
      "a little + incontabile; a few + numerabile.",
      "little/few (senza a) = 'poco/pochi', con senso negativo.",
    ],
    examples: [
      { en: "How many people came?", it: "Quante persone sono venute?" },
      { en: "I don't have much time.", it: "Non ho molto tempo." },
      { en: "There are a few chairs.", it: "Ci sono alcune sedie." },
    ],
    mistakes: [
      { wrong: "much books", right: "many books", why: "Numerabile → many." },
      { wrong: "many money", right: "a lot of money", why: "Incontabile → much / a lot of." },
      { wrong: "a few water", right: "a little water", why: "Incontabile → a little." },
    ],
    miniTest: [
      { prompt: "How ___ time do we have?", options: ["many", "much", "few", "a lot"], answer: 1 },
      { prompt: "There are ___ apples.", options: ["much", "a little", "a few", "little of"], answer: 2 },
      { prompt: "I have ___ friends here.", options: ["much", "a lot of", "a little", "less"], answer: 1 },
      { prompt: "___ sugar, please (un po').", options: ["A few", "A little", "Many", "Few"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-modals-basic",
    explanation:
      "Modali di obbligo, consiglio e possibilità: must, have to, should, could. Uguali per tutti, seguiti dalla forma base.",
    rules: [
      "must = obbligo forte/personale; have to = obbligo esterno; mustn't = divieto; don't have to = non necessario.",
      "should = consiglio.",
      "could = possibilità / richiesta cortese.",
      "Dopo il modale, base senza to; have to invece vuole to.",
    ],
    examples: [
      { en: "You must wear a seatbelt.", it: "Devi mettere la cintura." },
      { en: "I have to work tomorrow.", it: "Domani devo lavorare." },
      { en: "You should see a doctor.", it: "Dovresti vedere un medico." },
    ],
    mistakes: [
      { wrong: "You must to go.", right: "You must go.", why: "Dopo must, base senza to." },
      { wrong: "mustn't = non necessario", right: "mustn't = divieto; don't have to = non necessario", why: "Significati diversi." },
      { wrong: "She musts study.", right: "She must study.", why: "I modali non prendono -s." },
    ],
    miniTest: [
      { prompt: "You ___ smoke here (divieto).", options: ["mustn't", "don't have to", "should", "could"], answer: 0 },
      { prompt: "I ___ work on Saturday (obbligo esterno).", options: ["must", "have to", "should", "could"], answer: 1 },
      { prompt: "You ___ see a doctor (consiglio).", options: ["must", "should", "have to", "could"], answer: 1 },
      { prompt: "He must ___ now.", options: ["to go", "goes", "go", "going"], answer: 2 },
    ],
  },
  {
    unitId: "gr-a2-be-able-to",
    explanation:
      "Be able to significa 'essere capace di' e sostituisce can nei tempi in cui can non esiste (futuro, present perfect…).",
    rules: [
      "Forma: be + able to + base (I am able to, I'll be able to).",
      "Al presente can è più comune; be able to è più formale.",
      "Passato riuscito: was/were able to (= managed to).",
      "Futuro: will be able to (non «will can»).",
    ],
    examples: [
      { en: "I'll be able to help tomorrow.", it: "Potrò aiutare domani." },
      { en: "She wasn't able to come.", it: "Non è riuscita a venire." },
      { en: "Have you been able to fix it?", it: "Sei riuscito a ripararlo?" },
    ],
    mistakes: [
      { wrong: "I will can help.", right: "I will be able to help.", why: "Non due modali insieme." },
      { wrong: "She can to swim.", right: "She can swim.", why: "Dopo can, base senza to." },
      { wrong: "be able swim", right: "be able to swim", why: "Serve to." },
    ],
    miniTest: [
      { prompt: "I will ___ help tomorrow.", options: ["can", "be able to", "could", "am able"], answer: 1 },
      { prompt: "She ___ finish it (ci è riuscita).", options: ["can", "could", "was able to", "is able"], answer: 2 },
      { prompt: "___ you been able to call?", options: ["Have", "Do", "Are", "Will"], answer: 0 },
      { prompt: "We won't ___ come.", options: ["can", "be able to", "could", "able"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-may-might",
    explanation:
      "May e might esprimono possibilità (forse); may indica anche permesso formale. Forma base dopo il modale.",
    rules: [
      "Possibilità: It may/might rain. Might = un po' meno probabile.",
      "Permesso formale: May I…?",
      "Base dopo may/might, niente to, niente -s.",
      "Negativa: may not / might not.",
    ],
    examples: [
      { en: "She might be late.", it: "Potrebbe essere in ritardo." },
      { en: "It may snow tonight.", it: "Forse nevicherà stanotte." },
      { en: "May I ask a question?", it: "Posso fare una domanda?" },
    ],
    mistakes: [
      { wrong: "It mays rain.", right: "It may rain.", why: "I modali non prendono -s." },
      { wrong: "He might to come.", right: "He might come.", why: "Base senza to." },
      { wrong: "Can I ask? (molto formale)", right: "May I ask?", why: "Permesso formale → may." },
    ],
    miniTest: [
      { prompt: "It ___ rain later (possibilità).", options: ["may", "must", "should", "can't"], answer: 0 },
      { prompt: "___ I use your phone? (formale)", options: ["Might", "May", "Should", "Do"], answer: 1 },
      { prompt: "She might ___ tired.", options: ["is", "be", "to be", "being"], answer: 1 },
      { prompt: "He ___ come (forse no).", options: ["may not", "mayn't", "not may", "don't may"], answer: 0 },
    ],
  },
  {
    unitId: "gr-a2-object-pronouns",
    explanation:
      "I pronomi oggetto (me, you, him, her, it, us, them) sostituiscono il complemento; vanno dopo il verbo o la preposizione.",
    rules: [
      "Soggetto/oggetto: I/me, he/him, she/her, we/us, they/them (you e it uguali).",
      "Dopo il verbo (I saw him) o la preposizione (with them).",
      "Dopo be, l'informale usa l'oggetto: It's me.",
      "Give me the book / Give it to me.",
    ],
    examples: [
      { en: "Can you help me?", it: "Puoi aiutarmi?" },
      { en: "I gave it to her.", it: "Gliel'ho dato." },
      { en: "This is for you.", it: "Questo è per te." },
    ],
    mistakes: [
      { wrong: "She saw I.", right: "She saw me.", why: "Oggetto → me." },
      { wrong: "Come with we.", right: "Come with us.", why: "Dopo preposizione → us." },
      { wrong: "Give the book me.", right: "Give me the book.", why: "Ordine degli oggetti." },
    ],
    miniTest: [
      { prompt: "Can you help ___?", options: ["I", "me", "my", "mine"], answer: 1 },
      { prompt: "I spoke to ___ (loro).", options: ["they", "them", "their", "theirs"], answer: 1 },
      { prompt: "This gift is for ___.", options: ["she", "her", "hers", "she's"], answer: 1 },
      { prompt: "Give ___ the keys.", options: ["I", "me", "my", "mine"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-prepositions",
    explanation:
      "Approfondimento: since/for/during/until per il tempo; beside/opposite/among per il luogo; into/out of/through per il moto.",
    rules: [
      "for + durata; since + inizio; until = fino a; during + periodo.",
      "Luogo: beside (accanto), opposite (di fronte), among (tra molti), above/below.",
      "Moto: into, out of, through, across, along, towards.",
      "for + periodo, since + momento preciso.",
    ],
    examples: [
      { en: "I've lived here since 2018.", it: "Vivo qui dal 2018." },
      { en: "We walked through the park.", it: "Abbiamo attraversato il parco." },
      { en: "The café is opposite the bank.", it: "Il bar è di fronte alla banca." },
    ],
    mistakes: [
      { wrong: "since two years", right: "for two years", why: "Durata → for." },
      { wrong: "for Monday (inizio)", right: "since Monday", why: "Punto di inizio → since." },
      { wrong: "go in the room (moto)", right: "go into the room", why: "Moto verso l'interno → into." },
    ],
    miniTest: [
      { prompt: "I've waited ___ an hour.", options: ["since", "for", "during", "until"], answer: 1 },
      { prompt: "She's been ill ___ Monday.", options: ["for", "since", "during", "by"], answer: 1 },
      { prompt: "He walked ___ the tunnel.", options: ["across", "through", "into", "along"], answer: 1 },
      { prompt: "The shop is ___ the station (di fronte).", options: ["beside", "opposite", "among", "below"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-conjunctions",
    explanation:
      "Le congiunzioni di base collegano parole e frasi: aggiunta (and), contrasto (but), scelta (or), causa (because), conseguenza (so).",
    rules: [
      "and, but, or uniscono elementi sullo stesso piano.",
      "because = causa; so = conseguenza.",
      "because + frase; because of + nome.",
      "Non usare because e so insieme nella stessa relazione.",
    ],
    examples: [
      { en: "I was tired, so I went to bed.", it: "Ero stanco, quindi sono andato a letto." },
      { en: "She stayed because it was raining.", it: "È rimasta perché pioveva." },
      { en: "Tea or coffee?", it: "Tè o caffè?" },
    ],
    mistakes: [
      { wrong: "Because it was late, so I left.", right: "It was late, so I left.", why: "Non because e so insieme." },
      { wrong: "because the rain", right: "because of the rain", why: "because + frase; because of + nome." },
      { wrong: "…, and but I don't.", right: "…, but I don't.", why: "Una sola congiunzione." },
    ],
    miniTest: [
      { prompt: "It was cold, ___ I wore a coat.", options: ["because", "so", "but", "or"], answer: 1 },
      { prompt: "I stayed ___ I was tired.", options: ["so", "because", "but", "and"], answer: 1 },
      { prompt: "___ the traffic, we were late.", options: ["Because", "Because of", "So", "But"], answer: 1 },
      { prompt: "Do you want tea ___ coffee?", options: ["and", "but", "or", "so"], answer: 2 },
    ],
  },
  {
    unitId: "gr-a2-question-tags",
    explanation:
      "Le question tag ('vero?', 'no?') chiedono conferma in fondo alla frase: affermativa → tag negativa, e viceversa.",
    rules: [
      "Affermativa + tag negativa; negativa + tag positiva.",
      "La tag ripete l'ausiliare (o be); se non c'è, usa do/does/did.",
      "Il pronome nella tag è soggetto (you, he, they…).",
      "I can swim, can't I? / She likes it, doesn't she?",
    ],
    examples: [
      { en: "It's cold today, isn't it?", it: "Fa freddo oggi, vero?" },
      { en: "You don't smoke, do you?", it: "Non fumi, vero?" },
      { en: "They live here, don't they?", it: "Vivono qui, no?" },
    ],
    mistakes: [
      { wrong: "You're tired, isn't it?", right: "You're tired, aren't you?", why: "La tag concorda col soggetto." },
      { wrong: "She likes it, doesn't it?", right: "She likes it, doesn't she?", why: "Pronome soggetto → she." },
      { wrong: "He can swim, can he?", right: "He can swim, can't he?", why: "Affermativa → tag negativa." },
    ],
    miniTest: [
      { prompt: "You're ready, ___?", options: ["are you", "aren't you", "don't you", "isn't it"], answer: 1 },
      { prompt: "He doesn't drive, ___?", options: ["does he", "doesn't he", "is he", "do he"], answer: 0 },
      { prompt: "They live here, ___?", options: ["do they", "don't they", "are they", "aren't they"], answer: 1 },
      { prompt: "She can cook, ___?", options: ["can she", "can't she", "does she", "couldn't she"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-as-as",
    explanation:
      "as … as esprime uguaglianza ('tanto … quanto'); not as … as la disuguaglianza.",
    rules: [
      "as + aggettivo/avverbio + as: as tall as, as fast as.",
      "Negativo: not as/so … as.",
      "as much/many … as per le quantità.",
      "Dopo as, il pronome informale è oggetto: as tall as me.",
    ],
    examples: [
      { en: "He's as tall as his father.", it: "È alto quanto suo padre." },
      { en: "It's not as cold as yesterday.", it: "Non fa freddo come ieri." },
      { en: "I have as many books as you.", it: "Ho tanti libri quanti te." },
    ],
    mistakes: [
      { wrong: "as taller as", right: "as tall as", why: "Tra as…as va l'aggettivo base." },
      { wrong: "as much books as", right: "as many books as", why: "Numerabile → many." },
      { wrong: "not so expensive than", right: "not as expensive as", why: "Uguaglianza con as…as." },
    ],
    miniTest: [
      { prompt: "She's ___ tall ___ me.", options: ["so/as", "as/as", "more/than", "as/than"], answer: 1 },
      { prompt: "It's not ___ hot ___ Spain.", options: ["as/as", "so/than", "more/as", "as/than"], answer: 0 },
      { prompt: "I have as ___ time as you.", options: ["many", "much", "more", "few"], answer: 1 },
      { prompt: "as fast ___ a car", options: ["than", "as", "that", "of"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-too-enough",
    explanation:
      "too = 'troppo' (eccesso, negativo); enough = 'abbastanza'. La posizione cambia con nomi e aggettivi.",
    rules: [
      "too + aggettivo/avverbio: too hot, too slowly.",
      "enough dopo l'aggettivo (good enough) ma prima del nome (enough money).",
      "too + adj + to; adj + enough + to.",
      "too ≠ very: too = eccessivo; very = molto (neutro).",
    ],
    examples: [
      { en: "It's too expensive.", it: "È troppo costoso." },
      { en: "She's old enough to drive.", it: "Ha l'età per guidare." },
      { en: "We don't have enough time.", it: "Non abbiamo abbastanza tempo." },
    ],
    mistakes: [
      { wrong: "enough good", right: "good enough", why: "enough va dopo l'aggettivo." },
      { wrong: "too much tired", right: "too tired", why: "too + aggettivo direttamente." },
      { wrong: "money enough", right: "enough money", why: "enough va prima del nome." },
    ],
    miniTest: [
      { prompt: "It's ___ hot to go out.", options: ["enough", "too", "very much", "so"], answer: 1 },
      { prompt: "She's not tall ___.", options: ["too", "enough", "so", "very"], answer: 1 },
      { prompt: "We have ___ chairs.", options: ["enough", "too", "much", "chairs enough"], answer: 0 },
      { prompt: "He's ___ young ___ drive.", options: ["too/to", "enough/to", "so/that", "too/for"], answer: 0 },
    ],
  },
  {
    unitId: "gr-a2-adjective-order",
    explanation:
      "Quando più aggettivi precedono un nome, seguono un ordine fisso: opinione → dimensione → età → forma → colore → origine → materiale → scopo.",
    rules: [
      "Ordine: opinion, size, age, shape, colour, origin, material, purpose + noun.",
      "Es.: a lovely big old round brown Italian wooden table.",
      "Nel parlato reale di solito non più di 2-3 aggettivi.",
      "L'opinione viene sempre prima dei fatti.",
    ],
    examples: [
      { en: "a beautiful old house", it: "una bella casa vecchia" },
      { en: "a small black leather bag", it: "una piccola borsa di pelle nera" },
      { en: "a nice red Italian car", it: "una bella macchina rossa italiana" },
    ],
    mistakes: [
      { wrong: "a red big car", right: "a big red car", why: "Dimensione prima del colore." },
      { wrong: "an Italian nice dish", right: "a nice Italian dish", why: "L'opinione viene prima." },
      { wrong: "a wooden round table", right: "a round wooden table", why: "Forma prima del materiale." },
    ],
    miniTest: [
      { prompt: "Ordine corretto:", options: ["a red big ball", "a big red ball", "big a red ball", "a ball big red"], answer: 1 },
      { prompt: "___ car", options: ["a nice new", "a new nice", "nice a new", "new a nice"], answer: 0 },
      { prompt: "a ___ table", options: ["wooden round", "round wooden", "round a wooden", "wooden a round"], answer: 1 },
      { prompt: "a ___ bag", options: ["leather small", "small leather", "small a leather", "a leather small"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-reflexive",
    explanation:
      "I riflessivi (myself, yourself…) si usano quando soggetto e oggetto coincidono; each other/one another per la reciprocità.",
    rules: [
      "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.",
      "Riflessivo: I cut myself. Enfatico: I did it myself.",
      "by + riflessivo = da solo: I live by myself.",
      "Reciproco: each other / one another.",
    ],
    examples: [
      { en: "She hurt herself.", it: "Si è fatta male." },
      { en: "We enjoyed ourselves.", it: "Ci siamo divertiti." },
      { en: "They help each other.", it: "Si aiutano a vicenda." },
    ],
    mistakes: [
      { wrong: "I enjoyed me.", right: "I enjoyed myself.", why: "Riflessivo → myself." },
      { wrong: "They love themselves (a vicenda).", right: "They love each other.", why: "Reciproco → each other." },
      { wrong: "by my own", right: "by myself / on my own", why: "Forma corretta." },
    ],
    miniTest: [
      { prompt: "He hurt ___.", options: ["him", "himself", "his", "he"], answer: 1 },
      { prompt: "We enjoyed ___.", options: ["us", "ourself", "ourselves", "ourselfs"], answer: 2 },
      { prompt: "They emailed ___ (a vicenda).", options: ["themselves", "each other", "them", "theirselves"], answer: 1 },
      { prompt: "I live by ___.", options: ["me", "my", "myself", "mine"], answer: 2 },
    ],
  },
  {
    unitId: "gr-a2-exclamatives",
    explanation:
      "What a…! e How…! esprimono sorpresa o forte emozione. What va con i nomi; How con aggettivi/avverbi da soli.",
    rules: [
      "What + (a/an) + (agg.) + nome!: What a beautiful day!",
      "How + aggettivo/avverbio!: How strange! How quickly he runs!",
      "Nome numerabile singolare → serve a/an: What a mess!",
      "Plurale/incontabile → What (senza a): What lovely flowers!",
    ],
    examples: [
      { en: "What a lovely surprise!", it: "Che bella sorpresa!" },
      { en: "How kind of you!", it: "Che gentile!" },
      { en: "What beautiful weather!", it: "Che bel tempo!" },
    ],
    mistakes: [
      { wrong: "How a nice day!", right: "What a nice day!", why: "Con il nome → What." },
      { wrong: "What tall you are!", right: "How tall you are!", why: "Con aggettivo solo → How." },
      { wrong: "What lovely a flower!", right: "What a lovely flower!", why: "Ordine: What + a + agg + nome." },
    ],
    miniTest: [
      { prompt: "___ a beautiful house!", options: ["How", "What", "Such", "So"], answer: 1 },
      { prompt: "___ interesting!", options: ["What", "What a", "How", "Such"], answer: 2 },
      { prompt: "___ good news!", options: ["What a", "What", "How", "How a"], answer: 1 },
      { prompt: "___ fast she runs!", options: ["What", "What a", "How", "So"], answer: 2 },
    ],
  },
  {
    unitId: "gr-a2-ing-ed-adjectives",
    explanation:
      "-ed descrive come ti senti (bored); -ing descrive ciò che causa il sentimento (boring).",
    rules: [
      "-ed = persona che prova l'emozione (I'm interested).",
      "-ing = cosa/persona che la provoca (The book is interesting).",
      "Coppie: bored/boring, tired/tiring, excited/exciting, confused/confusing.",
      "Una persona può essere -ing se causa il sentimento negli altri.",
    ],
    examples: [
      { en: "I'm bored.", it: "Sono annoiato." },
      { en: "The film was boring.", it: "Il film era noioso." },
      { en: "She's interested in art.", it: "È interessata all'arte." },
    ],
    mistakes: [
      { wrong: "I'm boring (=mi annoio).", right: "I'm bored.", why: "Come ti senti → -ed." },
      { wrong: "The lesson was interested.", right: "The lesson was interesting.", why: "Ciò che causa → -ing." },
      { wrong: "I'm exciting (=sono emozionato).", right: "I'm excited.", why: "Sentimento provato → -ed." },
    ],
    miniTest: [
      { prompt: "I'm ___ (mi annoio).", options: ["boring", "bored", "bore", "boredom"], answer: 1 },
      { prompt: "The trip was ___.", options: ["tired", "tiring", "tire", "tiredly"], answer: 1 },
      { prompt: "She's ___ in music.", options: ["interesting", "interested", "interest", "interests"], answer: 1 },
      { prompt: "That's ___ news (che emoziona).", options: ["excited", "exciting", "excite", "excitedly"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a2-perception-adj",
    explanation:
      "Dopo look, feel, seem, sound, smell, taste si usa un AGGETTIVO, non un avverbio.",
    rules: [
      "look/feel/seem/sound/smell/taste + aggettivo: It looks good.",
      "Non usare l'avverbio: «It looks good» (non «well»).",
      "look like + nome; look + aggettivo.",
      "feel bad (dispiaciuti) ≠ feel badly.",
    ],
    examples: [
      { en: "You look tired.", it: "Sembri stanco." },
      { en: "This soup tastes delicious.", it: "Questa zuppa è deliziosa." },
      { en: "It sounds interesting.", it: "Sembra interessante." },
    ],
    mistakes: [
      { wrong: "It looks well.", right: "It looks good.", why: "Dopo look → aggettivo." },
      { wrong: "She seems happily.", right: "She seems happy.", why: "Dopo seem → aggettivo." },
      { wrong: "You look like tired.", right: "You look tired.", why: "look + aggettivo (senza like)." },
    ],
    miniTest: [
      { prompt: "You look ___.", options: ["well", "good", "goodly", "best"], answer: 1 },
      { prompt: "It smells ___.", options: ["nicely", "nice", "well", "niceley"], answer: 1 },
      { prompt: "She seems ___.", options: ["happily", "happy", "happiness", "happyly"], answer: 1 },
      { prompt: "This ___ delicious.", options: ["taste", "tastes", "tasting", "tasty"], answer: 1 },
    ],
  },
];
