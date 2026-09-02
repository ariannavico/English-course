import type { GrammarLesson } from "@/features/grammarLessons/types";

/** B1 grammar lessons. */
export const b1Lessons: GrammarLesson[] = [
  {
    unitId: "gr-b1-pp-vs-past",
    explanation:
      "Present Perfect per esperienze e azioni con effetto sul presente (tempo non specificato); Past Simple per azioni concluse in un momento definito. Il contrasto è la chiave a B1.",
    rules: [
      "Past Simple con tempo finito: yesterday, in 2010, last week, ago.",
      "Present Perfect con tempo aperto/collegato al presente: ever, never, just, already, yet, so far.",
      "Present Perfect per il risultato ora; Past Simple per il fatto storico.",
      "for/since + Present Perfect per situazioni ancora in corso.",
    ],
    examples: [
      { en: "I've been to London. (esperienza)", it: "Sono stato a Londra." },
      { en: "I went to London in 2019.", it: "Sono andato a Londra nel 2019." },
      { en: "She has just arrived.", it: "È appena arrivata." },
    ],
    mistakes: [
      { wrong: "I have seen it yesterday.", right: "I saw it yesterday.", why: "yesterday → Past Simple." },
      { wrong: "I lived here since 2015.", right: "I have lived here since 2015.", why: "since + azione ancora in corso → Present Perfect." },
      { wrong: "Did you ever eat sushi?", right: "Have you ever eaten sushi?", why: "Esperienza → Present Perfect." },
    ],
    miniTest: [
      { prompt: "I ___ him last night.", options: ["have seen", "saw", "have saw", "seen"], answer: 1 },
      { prompt: "She ___ here since May.", options: ["lives", "lived", "has lived", "living"], answer: 2 },
      { prompt: "___ you ever been abroad?", options: ["Did", "Have", "Do", "Were"], answer: 1 },
      { prompt: "We ___ in 2018.", options: ["have moved", "moved", "has moved", "move"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-pp-continuous",
    explanation:
      "Il Present Perfect Continuous sottolinea la DURATA o la continuità di un'azione iniziata nel passato e ancora in corso (o appena finita). Forma: have/has been + -ing.",
    rules: [
      "Forma: have/has + been + verbo-ing (I've been working).",
      "Uso: durata di un'azione in corso (I've been studying for two hours).",
      "Uso: azione appena finita con effetto visibile (You're wet — have you been running?).",
      "Verbi di stato (know, be) → Present Perfect semplice, non continuous.",
    ],
    examples: [
      { en: "I've been waiting for an hour.", it: "Aspetto da un'ora." },
      { en: "It's been raining all day.", it: "Ha piovuto tutto il giorno." },
      { en: "She's been learning Spanish.", it: "Sta imparando lo spagnolo (da un po')." },
    ],
    mistakes: [
      { wrong: "I've been knowing him for years.", right: "I've known him for years.", why: "know è di stato → Present Perfect semplice." },
      { wrong: "I am waiting since 3 o'clock.", right: "I've been waiting since 3 o'clock.", why: "Da un momento passato a ora → Present Perfect Continuous." },
      { wrong: "She has been work all day.", right: "She has been working all day.", why: "Serve -ing." },
    ],
    miniTest: [
      { prompt: "I've ___ waiting for ages.", options: ["been", "being", "be", "was"], answer: 0 },
      { prompt: "How long ___ you been studying?", options: ["did", "have", "are", "do"], answer: 1 },
      { prompt: "It ___ raining since noon.", options: ["has been", "is", "was", "have been"], answer: 0 },
      { prompt: "Stato: I've ___ him for years.", options: ["been knowing", "known", "knew", "knowing"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-past-perfect",
    explanation:
      "Il Past Perfect indica un'azione avvenuta PRIMA di un'altra azione passata. Forma: had + participio passato. È il 'passato del passato'.",
    rules: [
      "Forma: had + past participle (I had finished).",
      "Uso: azione anteriore a un'altra al Past Simple (When I arrived, they had already left).",
      "Spesso con already, just, never, before, by the time.",
      "Se l'ordine è già chiaro, basta il Past Simple.",
    ],
    examples: [
      { en: "The train had left when we got there.", it: "Il treno era partito quando siamo arrivati." },
      { en: "I had never seen snow before that trip.", it: "Non avevo mai visto la neve prima di quel viaggio." },
      { en: "She had finished by 6.", it: "Aveva finito per le 6." },
    ],
    mistakes: [
      { wrong: "When I arrived, they already left.", right: "…they had already left.", why: "Azione anteriore → Past Perfect." },
      { wrong: "I had went home.", right: "I had gone home.", why: "Participio di go = gone." },
      { wrong: "By the time we came, the film has started.", right: "…had started.", why: "Passato nel passato → had." },
    ],
    miniTest: [
      { prompt: "When we arrived, the show ___.", options: ["already started", "had already started", "has started", "was starting"], answer: 1 },
      { prompt: "I ___ never been there before.", options: ["have", "had", "was", "did"], answer: 1 },
      { prompt: "Participio di 'see' con had:", options: ["saw", "seen", "seed", "see"], answer: 1 },
      { prompt: "She ___ left by the time I called.", options: ["has", "had", "was", "did"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-used-to",
    explanation:
      "used to + forma base descrive abitudini o stati del passato che ora non sono più veri. would può sostituirlo per azioni ripetute, ma non per gli stati.",
    rules: [
      "used to + base: I used to smoke (ora non più).",
      "Negativa/interrogativa: didn't use to / Did you use to…? (senza -d).",
      "would + base per azioni ripetute passate (non per gli stati).",
      "Da non confondere con be/get used to (essere/abituarsi), che vogliono -ing.",
    ],
    examples: [
      { en: "I used to play tennis.", it: "Giocavo a tennis (una volta)." },
      { en: "She didn't use to like coffee.", it: "Non le piaceva il caffè." },
      { en: "We would spend hours talking.", it: "Passavamo ore a parlare." },
    ],
    mistakes: [
      { wrong: "I use to live there.", right: "I used to live there.", why: "Passato → used to." },
      { wrong: "Did you used to smoke?", right: "Did you use to smoke?", why: "Dopo did, use senza -d." },
      { wrong: "I would have long hair.", right: "I used to have long hair.", why: "would non si usa per gli stati." },
    ],
    miniTest: [
      { prompt: "I ___ live in Rome.", options: ["use to", "used to", "would", "am used to"], answer: 1 },
      { prompt: "___ you use to play football?", options: ["Did", "Do", "Were", "Have"], answer: 0 },
      { prompt: "She ___ like it.", options: ["didn't used to", "didn't use to", "don't use to", "wasn't use to"], answer: 1 },
      { prompt: "We ___ visit them every year.", options: ["would", "used", "use to", "are used to"], answer: 0 },
    ],
  },
  {
    unitId: "gr-b1-future-forms",
    explanation:
      "A B1 servono le forme di futuro insieme: will (previsioni, decisioni al momento, promesse), going to (intenzioni, previsioni con prove), present continuous (piani fissati), present simple (orari).",
    rules: [
      "will: decisione ora / previsione / promessa.",
      "going to: intenzione / previsione con prove presenti.",
      "present continuous: appuntamento fissato (I'm meeting Sara at 6).",
      "present simple: orario/tabella (The train leaves at 8).",
    ],
    examples: [
      { en: "I think it'll rain.", it: "Penso che pioverà." },
      { en: "We're going to move house.", it: "Ci trasferiremo." },
      { en: "I'm seeing the doctor tomorrow.", it: "Domani vedo il medico." },
    ],
    mistakes: [
      { wrong: "I will meet Sam tomorrow (fissato).", right: "I'm meeting Sam tomorrow.", why: "Piano fissato → present continuous." },
      { wrong: "Look at the clouds — it will rain.", right: "…it's going to rain.", why: "Previsione con prove → going to." },
      { wrong: "The film will start at 8.", right: "The film starts at 8.", why: "Orario → present simple." },
    ],
    miniTest: [
      { prompt: "Prova: Look! It ___ snow.", options: ["will", "is going to", "is snowing", "snows"], answer: 1 },
      { prompt: "Decisione ora: OK, I ___ do it.", options: ["am going to", "will", "am doing", "do"], answer: 1 },
      { prompt: "Piano: I ___ Sara tonight.", options: ["will see", "am seeing", "see", "am going see"], answer: 1 },
      { prompt: "Orario: the bus ___ at 9.", options: ["will leave", "leaves", "is leaving", "leave"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-narrative-tenses",
    explanation:
      "Per raccontare una storia si combinano Past Simple (eventi principali), Past Continuous (sfondo/azioni in corso) e Past Perfect (ciò che era già successo).",
    rules: [
      "Past Simple: la sequenza degli eventi.",
      "Past Continuous: lo sfondo / l'azione interrotta.",
      "Past Perfect: un'azione precedente.",
      "when + Past Simple; while/as + Past Continuous.",
    ],
    examples: [
      { en: "I was walking home when I saw her.", it: "Tornavo a casa quando l'ho vista." },
      { en: "She had left before I arrived.", it: "Era andata via prima che arrivassi." },
      { en: "The sun was shining and birds were singing.", it: "Il sole splendeva e gli uccelli cantavano." },
    ],
    mistakes: [
      { wrong: "While I walked, it started to rain.", right: "While I was walking, it started to rain.", why: "Sfondo lungo → Past Continuous." },
      { wrong: "When I got home, someone ate my dinner.", right: "…someone had eaten my dinner.", why: "Azione anteriore → Past Perfect." },
      { wrong: "I was seeing a film last night.", right: "I saw a film last night.", why: "Evento concluso → Past Simple." },
    ],
    miniTest: [
      { prompt: "I ___ TV when the phone rang.", options: ["watched", "was watching", "had watched", "watch"], answer: 1 },
      { prompt: "When we arrived, they ___.", options: ["left", "were leaving", "had left", "leave"], answer: 2 },
      { prompt: "As she ___, she thought about it.", options: ["drove", "was driving", "had driven", "drives"], answer: 1 },
      { prompt: "It ___ heavily all night.", options: ["rained", "was raining", "had rained", "rains"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-conditionals-012",
    explanation:
      "Zero conditional per verità generali; First per possibilità reali future; Second per situazioni improbabili o irreali del presente.",
    rules: [
      "Zero: If + present, present (If you heat ice, it melts).",
      "First: If + present, will + base (If it rains, we'll stay in).",
      "Second: If + past, would + base (If I had money, I'd travel).",
      "Nella if-clause niente will; nel Second 'were' per tutte le persone (formale).",
    ],
    examples: [
      { en: "If you press this, it turns off.", it: "Se premi questo, si spegne." },
      { en: "If I see her, I'll tell her.", it: "Se la vedo, glielo dico." },
      { en: "If I were rich, I'd help you.", it: "Se fossi ricco, ti aiuterei." },
    ],
    mistakes: [
      { wrong: "If it will rain, we'll stay.", right: "If it rains, we'll stay.", why: "Nella if-clause niente will." },
      { wrong: "If I would have time, I'd come.", right: "If I had time, I'd come.", why: "Second: if + past." },
      { wrong: "If I was you, I'd wait.", right: "If I were you, I'd wait.", why: "Second: were per tutte le persone (formale)." },
    ],
    miniTest: [
      { prompt: "First: If it ___, we'll cancel.", options: ["will rain", "rains", "rained", "would rain"], answer: 1 },
      { prompt: "Second: If I ___ you…", options: ["am", "was", "were", "will be"], answer: 2 },
      { prompt: "Zero: mix blue and yellow, you ___ green.", options: ["will get", "get", "got", "would get"], answer: 1 },
      { prompt: "Second: I ___ travel if I had money.", options: ["will", "would", "am", "do"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-reported-statements",
    explanation:
      "Il discorso indiretto riferisce ciò che qualcuno ha detto. I tempi 'arretrano' di solito (present→past), e cambiano pronomi e riferimenti di tempo/luogo.",
    rules: [
      "say/tell + (that): He said (that) he was tired.",
      "Backshift: present→past, will→would, can→could, am/is→was, must→had to.",
      "Cambiano pronomi (I→he/she) e tempi/luoghi (now→then, tomorrow→the next day).",
      "tell vuole la persona (tell me); say no (say to me).",
    ],
    examples: [
      { en: "\"I'm tired.\" → She said she was tired.", it: "…ha detto che era stanca." },
      { en: "\"I'll call you.\" → He said he would call me.", it: "…che mi avrebbe chiamato." },
      { en: "\"I can swim.\" → She said she could swim.", it: "…che sapeva nuotare." },
    ],
    mistakes: [
      { wrong: "He said me that…", right: "He told me that… / He said that…", why: "tell + persona; say senza persona." },
      { wrong: "She said she is tired.", right: "She said she was tired.", why: "Backshift: is → was." },
      { wrong: "He said he will come.", right: "He said he would come.", why: "will → would." },
    ],
    miniTest: [
      { prompt: "\"I'm busy.\" → She said she ___ busy.", options: ["is", "was", "were", "has been"], answer: 1 },
      { prompt: "He ___ me that he was late.", options: ["said", "told", "say", "says"], answer: 1 },
      { prompt: "\"I'll help.\" → He said he ___ help.", options: ["will", "would", "can", "shall"], answer: 1 },
      { prompt: "\"I can drive.\" → She said she ___ drive.", options: ["can", "could", "will", "may"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-passive",
    explanation:
      "Il passivo mette al centro l'azione o l'oggetto, non chi la compie. Forma: be (nel tempo giusto) + participio passato.",
    rules: [
      "Presente: is/are + participio. Passato: was/were + participio.",
      "L'agente si introduce con by, ma spesso si omette.",
      "Solo i verbi transitivi (con oggetto) si volgono al passivo.",
      "Attivo → passivo: l'oggetto diventa soggetto.",
    ],
    examples: [
      { en: "English is spoken here.", it: "Qui si parla inglese." },
      { en: "The letter was sent yesterday.", it: "La lettera è stata spedita ieri." },
      { en: "This bridge was built in 1900.", it: "Questo ponte fu costruito nel 1900." },
    ],
    mistakes: [
      { wrong: "The house is clean every day.", right: "The house is cleaned every day.", why: "Passivo: be + participio." },
      { wrong: "It was writed by Poe.", right: "It was written by Poe.", why: "Participio irregolare: written." },
      { wrong: "The car repaired yesterday.", right: "The car was repaired yesterday.", why: "Serve be." },
    ],
    miniTest: [
      { prompt: "This song ___ by millions.", options: ["hears", "is heard", "hearing", "heard"], answer: 1 },
      { prompt: "The bridge ___ in 1930.", options: ["built", "was built", "is build", "builds"], answer: 1 },
      { prompt: "Participio di 'write':", options: ["wrote", "written", "writed", "writen"], answer: 1 },
      { prompt: "Coffee ___ in Brazil.", options: ["grows", "is grown", "grew", "is growing"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-modals-deduction",
    explanation:
      "Per fare deduzioni sul presente: must (sono certo di sì), might/could/may (forse), can't (sono certo di no) + forma base.",
    rules: [
      "must + base = quasi certo (positivo).",
      "can't + base = quasi certo (negativo).",
      "might/may/could + base = possibilità.",
      "Per la deduzione niente mustn't (che è divieto): il 'certo di no' è can't.",
    ],
    examples: [
      { en: "He's not answering — he must be busy.", it: "Non risponde — dev'essere occupato." },
      { en: "That can't be right.", it: "Non può essere giusto." },
      { en: "She might know the answer.", it: "Forse sa la risposta." },
    ],
    mistakes: [
      { wrong: "She mustn't be home (deduzione).", right: "She can't be home.", why: "Certo di no → can't, non mustn't." },
      { wrong: "He must to be tired.", right: "He must be tired.", why: "Dopo must, base senza to." },
      { wrong: "It must is true.", right: "It must be true.", why: "Dopo il modale, forma base be." },
    ],
    miniTest: [
      { prompt: "Certo sì: He ___ be rich.", options: ["must", "can't", "mustn't", "should"], answer: 0 },
      { prompt: "Certo no: That ___ be true.", options: ["mustn't", "can't", "might", "must"], answer: 1 },
      { prompt: "Forse: She ___ be at work.", options: ["must", "can't", "might", "mustn't"], answer: 2 },
      { prompt: "He must ___ hungry.", options: ["to be", "is", "be", "being"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b1-have-to-must",
    explanation:
      "must e have to esprimono obbligo; mustn't (divieto) e needn't/don't have to (non necessario) hanno significati diversi da tenere distinti.",
    rules: [
      "must = obbligo sentito/personale; have to = obbligo esterno/regola.",
      "mustn't = divieto; don't have to / needn't = non è necessario.",
      "Al passato/futuro must non c'è: had to / will have to.",
      "Dopo must, base senza to; have to vuole to.",
    ],
    examples: [
      { en: "You must try this cake!", it: "Devi assolutamente provare questa torta!" },
      { en: "I have to wear a uniform at work.", it: "Al lavoro devo indossare la divisa." },
      { en: "You don't have to come if you're tired.", it: "Non sei obbligato a venire se sei stanco." },
    ],
    mistakes: [
      { wrong: "You mustn't come (=non necessario).", right: "You don't have to come.", why: "mustn't = divieto; non necessario = don't have to." },
      { wrong: "Yesterday I must work.", right: "Yesterday I had to work.", why: "Passato di must → had to." },
      { wrong: "I must to go.", right: "I must go.", why: "Dopo must, base senza to." },
    ],
    miniTest: [
      { prompt: "Divieto: You ___ park here.", options: ["don't have to", "mustn't", "needn't", "must"], answer: 1 },
      { prompt: "Non necessario: You ___ pay.", options: ["mustn't", "don't have to", "must", "can't"], answer: 1 },
      { prompt: "Passato: I ___ work late.", options: ["must", "had to", "have to", "musted"], answer: 1 },
      { prompt: "Regola esterna: I ___ wear a badge.", options: ["must", "have to", "mustn't", "need"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-gerund-infinitive",
    explanation:
      "Alcuni verbi sono seguiti dal gerundio (-ing), altri dall'infinito (to + base). Va imparato per gruppi; dopo le preposizioni si usa sempre -ing.",
    rules: [
      "+ -ing dopo: enjoy, avoid, finish, mind, suggest, keep, practise.",
      "+ to dopo: want, decide, hope, promise, offer, need, would like.",
      "Dopo le preposizioni sempre -ing (good at cooking).",
      "like/love/hate + -ing (in generale) o + to (con would): I'd love to come.",
    ],
    examples: [
      { en: "I enjoy cooking.", it: "Mi piace cucinare." },
      { en: "She decided to leave.", it: "Ha deciso di andarsene." },
      { en: "He's good at drawing.", it: "È bravo a disegnare." },
    ],
    mistakes: [
      { wrong: "I enjoy to read.", right: "I enjoy reading.", why: "enjoy + -ing." },
      { wrong: "I want going home.", right: "I want to go home.", why: "want + to." },
      { wrong: "interested in to learn", right: "interested in learning", why: "Dopo la preposizione → -ing." },
    ],
    miniTest: [
      { prompt: "I enjoy ___.", options: ["to swim", "swimming", "swim", "swam"], answer: 1 },
      { prompt: "She wants ___ home.", options: ["going", "to go", "go", "gone"], answer: 1 },
      { prompt: "He's good at ___.", options: ["to cook", "cooking", "cook", "cooked"], answer: 1 },
      { prompt: "We decided ___ early.", options: ["leaving", "to leave", "leave", "left"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-verb-object-to",
    explanation:
      "Molti verbi seguono lo schema verbo + oggetto + to-infinito: I want you to help, She told him to wait.",
    rules: [
      "Struttura: verb + object + to + base.",
      "Verbi comuni: want, ask, tell, expect, would like, advise, allow, teach, invite.",
      "make/let non usano to: make him go, let her stay.",
      "L'oggetto è un pronome oggetto (me, him, them…).",
    ],
    examples: [
      { en: "I want you to be happy.", it: "Voglio che tu sia felice." },
      { en: "She told me to wait.", it: "Mi ha detto di aspettare." },
      { en: "They allowed us to leave.", it: "Ci hanno permesso di andare." },
    ],
    mistakes: [
      { wrong: "I want that you come.", right: "I want you to come.", why: "Struttura: want + oggetto + to." },
      { wrong: "She made me to go.", right: "She made me go.", why: "make + oggetto + base (senza to)." },
      { wrong: "He told to me to wait.", right: "He told me to wait.", why: "tell + oggetto diretto (me), senza to." },
    ],
    miniTest: [
      { prompt: "I want ___ to help.", options: ["that you", "you", "you to be", "your"], answer: 1 },
      { prompt: "She told ___ wait.", options: ["me to", "to me to", "me", "that I"], answer: 0 },
      { prompt: "make: They made him ___.", options: ["to leave", "leave", "leaving", "left"], answer: 1 },
      { prompt: "I'd like you ___ come.", options: ["-", "that", "to", "for"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b1-relative-defining",
    explanation:
      "Le relative determinative danno un'informazione essenziale sul nome. Pronomi: who (persone), which (cose), that (entrambi), where (luoghi), whose (possesso).",
    rules: [
      "who/that per persone; which/that per cose; where per luoghi; whose per il possesso.",
      "Nessuna virgola nelle determinative (l'informazione è necessaria).",
      "Il pronome oggetto può omettersi: The book (that) I read.",
      "Non ripetere il soggetto: no «the man who he called».",
    ],
    examples: [
      { en: "The woman who called is my aunt.", it: "La donna che ha chiamato è mia zia." },
      { en: "The book that I bought is great.", it: "Il libro che ho comprato è ottimo." },
      { en: "That's the house where I grew up.", it: "Quella è la casa dove sono cresciuto." },
    ],
    mistakes: [
      { wrong: "The man which called…", right: "The man who/that called…", why: "Persone → who/that." },
      { wrong: "The book what I read…", right: "The book that I read…", why: "«what» non è pronome relativo." },
      { wrong: "The girl who she won…", right: "The girl who won…", why: "Non ripetere il soggetto." },
    ],
    miniTest: [
      { prompt: "The man ___ lives here…", options: ["which", "who", "whose", "where"], answer: 1 },
      { prompt: "The film ___ we saw…", options: ["who", "which", "whose", "what"], answer: 1 },
      { prompt: "The town ___ I was born…", options: ["which", "who", "where", "what"], answer: 2 },
      { prompt: "A friend ___ car broke down…", options: ["who", "which", "whose", "whom"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b1-subject-object-q",
    explanation:
      "Nelle domande su chi/cosa, se si chiede il SOGGETTO non serve l'ausiliare; se si chiede l'OGGETTO sì.",
    rules: [
      "Soggetto: Who called? What happened? (niente do/did).",
      "Oggetto: Who did you call? What did you see? (con do/did).",
      "Nel soggetto il verbo prende la 3ª persona: Who wants tea?",
      "Confronto: Who loves Anna? (soggetto) vs Who does Anna love? (oggetto).",
    ],
    examples: [
      { en: "Who broke the window?", it: "Chi ha rotto la finestra?" },
      { en: "Who did you invite?", it: "Chi hai invitato?" },
      { en: "What happened?", it: "Cos'è successo?" },
    ],
    mistakes: [
      { wrong: "Who did call you? (soggetto)", right: "Who called you?", why: "Domanda sul soggetto: niente did." },
      { wrong: "What did happen? (soggetto)", right: "What happened?", why: "Soggetto → niente did." },
      { wrong: "Who you saw? (oggetto)", right: "Who did you see?", why: "Oggetto → serve did." },
    ],
    miniTest: [
      { prompt: "Soggetto: ___ made this?", options: ["Who did", "Who", "Whom did", "What did"], answer: 1 },
      { prompt: "Oggetto: ___ you meet?", options: ["Who did", "Who", "Who does", "Whom"], answer: 0 },
      { prompt: "Soggetto: What ___?", options: ["did happen", "happened", "happens did", "was happen"], answer: 1 },
      { prompt: "Oggetto: Who ___ she call?", options: ["did", "does", "-", "was"], answer: 0 },
    ],
  },
  {
    unitId: "gr-b1-dependent-prep",
    explanation:
      "Molti verbi, aggettivi e nomi sono seguiti da una preposizione fissa da imparare a memoria (depend on, good at, interested in…).",
    rules: [
      "Verbo + prep: depend on, listen to, wait for, look at, belong to.",
      "Aggettivo + prep: good/bad at, interested in, afraid of, keen on, proud of.",
      "Dopo la preposizione, un verbo va in -ing (interested in learning).",
      "Alcune cambiano significato (think about vs think of).",
    ],
    examples: [
      { en: "It depends on the weather.", it: "Dipende dal tempo." },
      { en: "She's afraid of spiders.", it: "Ha paura dei ragni." },
      { en: "I'm not good at maths.", it: "Non sono bravo in matematica." },
    ],
    mistakes: [
      { wrong: "depend of", right: "depend on", why: "La preposizione fissa è on." },
      { wrong: "good in cooking", right: "good at cooking", why: "good + at." },
      { wrong: "interested in to learn", right: "interested in learning", why: "Dopo la prep → -ing." },
    ],
    miniTest: [
      { prompt: "It depends ___ you.", options: ["of", "on", "from", "to"], answer: 1 },
      { prompt: "She's afraid ___ dogs.", options: ["of", "from", "to", "for"], answer: 0 },
      { prompt: "I'm good ___ chess.", options: ["in", "on", "at", "for"], answer: 2 },
      { prompt: "interested ___ music", options: ["on", "in", "at", "for"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-connectors",
    explanation:
      "I connettivi legano le idee: contrasto (although, however, despite), aggiunta, causa. A B1 il punto è cosa regge cosa: although + frase, despite + nome.",
    rules: [
      "although / even though / though + FRASE (soggetto+verbo).",
      "despite / in spite of + NOME o -ing (non una frase).",
      "however = tuttavia (avverbio, frase separata).",
      "so = quindi (conseguenza); because = perché (causa).",
    ],
    examples: [
      { en: "Although it was late, we stayed.", it: "Anche se era tardi, siamo rimasti." },
      { en: "Despite the rain, we went out.", it: "Nonostante la pioggia, siamo usciti." },
      { en: "It was hard. However, we finished.", it: "Era difficile. Tuttavia, abbiamo finito." },
    ],
    mistakes: [
      { wrong: "Despite it was late…", right: "Although it was late…", why: "despite + nome; although + frase." },
      { wrong: "Although of the rain…", right: "Despite the rain…", why: "Struttura sbagliata." },
      { wrong: "…, however we tried.", right: "…; however, we tried.", why: "however è avverbio, non congiunzione." },
    ],
    miniTest: [
      { prompt: "___ it was raining, we went out.", options: ["Despite", "Although", "However", "Because of"], answer: 1 },
      { prompt: "___ the rain, we went out.", options: ["Although", "Despite", "However", "Because"], answer: 1 },
      { prompt: "It was late; ___, we continued.", options: ["although", "despite", "however", "because"], answer: 2 },
      { prompt: "I was tired, ___ I went to bed.", options: ["because", "so", "although", "despite"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-time-clauses",
    explanation:
      "Le proposizioni temporali (when, while, before, after, as soon as, until, since) situano gli eventi nel tempo. Col futuro, nella subordinata si usa il PRESENTE.",
    rules: [
      "when, while, before, after, as soon as, until, since introducono il tempo.",
      "Riferito al futuro, nella time-clause niente will: I'll call you when I arrive.",
      "while + azione lunga; when + azione/punto.",
      "until = fino a quando; since = da quando.",
    ],
    examples: [
      { en: "I'll wait until you come back.", it: "Aspetterò finché torni." },
      { en: "As soon as I finish, I'll text you.", it: "Appena finisco, ti scrivo." },
      { en: "Call me when you get home.", it: "Chiamami quando arrivi a casa." },
    ],
    mistakes: [
      { wrong: "I'll call you when I will arrive.", right: "…when I arrive.", why: "Time-clause al futuro → presente." },
      { wrong: "Wait until I will finish.", right: "Wait until I finish.", why: "Niente will nella time-clause." },
      { wrong: "As soon as I will know…", right: "As soon as I know…", why: "Presente nella subordinata." },
    ],
    miniTest: [
      { prompt: "I'll go home when it ___ dark.", options: ["will get", "gets", "got", "is getting"], answer: 1 },
      { prompt: "Wait ___ I come back.", options: ["since", "until", "while", "as"], answer: 1 },
      { prompt: "As soon as she ___, we'll start.", options: ["will arrive", "arrives", "arrived", "arrive"], answer: 1 },
      { prompt: "Call me ___ you land.", options: ["until", "since", "when", "despite"], answer: 2 },
    ],
  },
  {
    unitId: "gr-b1-cause-clauses",
    explanation:
      "Le proposizioni causali spiegano il perché: because, since, as. because è il più neutro; since/as introducono spesso una causa già nota, a inizio frase.",
    rules: [
      "because + frase (la causa).",
      "since / as + frase, spesso a inizio (causa nota).",
      "because of + NOME (non una frase).",
      "Non mettere 'so' insieme a because nella stessa relazione.",
    ],
    examples: [
      { en: "We left early because it was boring.", it: "Siamo andati via presto perché era noioso." },
      { en: "Since you're here, let's start.", it: "Dato che sei qui, cominciamo." },
      { en: "The match was cancelled because of the snow.", it: "La partita è stata annullata a causa della neve." },
    ],
    mistakes: [
      { wrong: "because of it was late", right: "because it was late", why: "because + frase; because of + nome." },
      { wrong: "Because I was tired, so I slept.", right: "Because I was tired, I slept.", why: "Non because e so insieme." },
      { wrong: "as of the traffic", right: "because of the traffic", why: "Espressione corretta: because of." },
    ],
    miniTest: [
      { prompt: "I stayed ___ I was ill.", options: ["because of", "because", "so", "despite"], answer: 1 },
      { prompt: "___ the fog, flights were delayed.", options: ["Because", "Because of", "Since", "As"], answer: 1 },
      { prompt: "___ you're ready, let's go.", options: ["Because of", "Since", "Despite", "So"], answer: 1 },
      { prompt: "We won ___ we trained hard.", options: ["because of", "because", "despite", "however"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-indirect-questions",
    explanation:
      "Le domande indirette sono più educate/formali. L'ordine torna quello della frase affermativa (soggetto + verbo) e si perdono do/does/did.",
    rules: [
      "Introdotte da: Could you tell me…, Do you know…, I wonder…",
      "Ordine affermativo (Do you know where the station is?).",
      "Niente do/does/did nella indiretta.",
      "Domande sì/no con if/whether.",
    ],
    examples: [
      { en: "Could you tell me where the toilet is?", it: "Mi sa dire dov'è il bagno?" },
      { en: "Do you know what time it is?", it: "Sai che ore sono?" },
      { en: "I wonder if she's coming.", it: "Mi chiedo se venga." },
    ],
    mistakes: [
      { wrong: "Do you know where is the bank?", right: "…where the bank is?", why: "Ordine affermativo nella indiretta." },
      { wrong: "Can you tell me what does he want?", right: "…what he wants?", why: "Niente does nella indiretta." },
      { wrong: "I wonder is it open.", right: "I wonder if it's open.", why: "Sì/no → if/whether." },
    ],
    miniTest: [
      { prompt: "Do you know where ___?", options: ["is the station", "the station is", "does the station", "is station"], answer: 1 },
      { prompt: "Tell me what ___.", options: ["does she want", "she wants", "wants she", "she want"], answer: 1 },
      { prompt: "I wonder ___ it's true.", options: ["that", "if", "is", "does"], answer: 1 },
      { prompt: "Could you tell me what time ___?", options: ["is it", "it is", "does it", "it does"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-so-neither",
    explanation:
      "Per esprimere accordo brevemente: So + ausiliare + soggetto (accordo positivo) e Neither/Nor + ausiliare + soggetto (accordo negativo), con inversione.",
    rules: [
      "Positivo: «I'm tired.» — «So am I.»",
      "Negativo: «I don't like it.» — «Neither/Nor do I.»",
      "L'ausiliare concorda con la frase: be→be, do→do, can→can.",
      "Attento all'inversione: So am I (non «So I am»).",
    ],
    examples: [
      { en: "\"I love pizza.\" — \"So do I.\"", it: "Anch'io." },
      { en: "\"I can't swim.\" — \"Neither can I.\"", it: "Neanch'io." },
      { en: "\"She's happy.\" — \"So is he.\"", it: "Anche lui." },
    ],
    mistakes: [
      { wrong: "So I am.", right: "So am I.", why: "Serve l'inversione." },
      { wrong: "\"I don't smoke.\" — \"So do I.\"", right: "\"Neither do I.\"", why: "Accordo negativo → neither/nor." },
      { wrong: "\"I can swim.\" — \"So do I.\"", right: "\"So can I.\"", why: "L'ausiliare deve concordare (can)." },
    ],
    miniTest: [
      { prompt: "\"I'm ready.\" — \"So ___ I.\"", options: ["do", "am", "is", "can"], answer: 1 },
      { prompt: "\"I don't smoke.\" — \"Neither ___ I.\"", options: ["am", "do", "don't", "can"], answer: 1 },
      { prompt: "\"She can drive.\" — \"So ___ he.\"", options: ["does", "can", "is", "do"], answer: 1 },
      { prompt: "Ordine corretto:", options: ["So I am", "So am I", "Am so I", "I am so"], answer: 1 },
    ],
  },
  {
    unitId: "gr-b1-quantifiers-all",
    explanation:
      "Quantificatori come all, most, none, each, every precisano 'tutto/la maggior parte/nessuno' e 'ciascuno/ogni', con regole d'uso specifiche.",
    rules: [
      "all/most/some/none + of + the/my/these; oppure senza of davanti a nomi generali (most people).",
      "every + nome singolare (every day); each + singolare, per elementi visti uno per uno.",
      "none of + plurale (None of them is/are).",
      "every ed each non prendono l'articolo.",
    ],
    examples: [
      { en: "Most of my friends live abroad.", it: "La maggior parte dei miei amici vive all'estero." },
      { en: "Every student has a laptop.", it: "Ogni studente ha un portatile." },
      { en: "None of them came.", it: "Nessuno di loro è venuto." },
    ],
    mistakes: [
      { wrong: "All the my friends", right: "All (of) my friends", why: "Non due determinanti insieme." },
      { wrong: "every days", right: "every day", why: "every + singolare." },
      { wrong: "Most of people", right: "Most people / Most of the people", why: "of vuole the/my/these." },
    ],
    miniTest: [
      { prompt: "___ student needs a pen.", options: ["All", "Every", "Most", "None"], answer: 1 },
      { prompt: "___ of the cake is gone.", options: ["Every", "Each", "Most", "Many"], answer: 2 },
      { prompt: "___ people like music.", options: ["Most of", "Most", "Every", "Each"], answer: 1 },
      { prompt: "___ of them helped.", options: ["Every", "Each", "None", "All the"], answer: 2 },
    ],
  },
];
