import type { GrammarLesson } from "@/features/grammarLessons/types";

/** A1 grammar lessons (first authored batch). */
export const a1Lessons: GrammarLesson[] = [
  {
    unitId: "gr-a1-to-be",
    explanation:
      "Il verbo to be (essere) è il primo mattone dell'inglese: identità, età, stati d'animo, luogo. Al presente è irregolare — I am, you/we/they are, he/she/it is — e si contrae quasi sempre nel parlato.",
    rules: [
      "Affermativa: I am, you are, he/she/it is, we are, they are. Contratte: I'm, you're, he's, she's, it's, we're, they're.",
      "Negativa: aggiungi not → I'm not, he isn't (is not), they aren't (are not).",
      "Interrogativa: inverti soggetto e verbo → Are you…? Is she…? Am I…?",
      "Risposte brevi: Yes, I am. / No, I'm not. Nell'affermativa NON si contrae: no «Yes, I'm».",
    ],
    examples: [
      { en: "I am a student.", it: "Sono uno studente." },
      { en: "She is tired.", it: "È stanca." },
      { en: "Are you ready?", it: "Sei pronto?" },
      { en: "They aren't at home.", it: "Non sono a casa." },
    ],
    mistakes: [
      { wrong: "I have 20 years.", right: "I am 20 years old.", why: "Per l'età si usa be, non have." },
      { wrong: "Yes, I'm.", right: "Yes, I am.", why: "Nelle risposte brevi affermative non si contrae." },
      { wrong: "She is agree.", right: "She agrees.", why: "Agree è già un verbo: non serve be." },
    ],
    miniTest: [
      { prompt: "___ you a teacher?", options: ["Are", "Is", "Am", "Be"], answer: 0 },
      { prompt: "He ___ from Spain.", options: ["are", "is", "am", "be"], answer: 1 },
      { prompt: "They ___ ready (negativa).", options: ["isn't", "not are", "aren't", "don't"], answer: 2 },
      { prompt: "How old ___ you?", options: ["have", "are", "do", "is"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-present-simple",
    explanation:
      "Il Present Simple è il tempo di ogni giorno: abitudini, routine, fatti generali e cose sempre vere. Il punto delicato è la terza persona singolare (he/she/it), che aggiunge una -s.",
    rules: [
      "Forma base per I/you/we/they; alla 3ª singolare +s: I work → he works.",
      "Spelling: -o/-ss/-sh/-ch/-x → +es (go→goes, watch→watches); consonante+y → -ies (study→studies).",
      "Negativa e interrogativa con do/does + forma base: I don't work; Does she work?",
      "La -s va su UN solo elemento: no «he doesn't works».",
    ],
    examples: [
      { en: "I get up at seven.", it: "Mi alzo alle sette." },
      { en: "She works in a bank.", it: "Lavora in banca." },
      { en: "We don't eat meat.", it: "Non mangiamo carne." },
      { en: "Does he speak English?", it: "Parla inglese?" },
    ],
    mistakes: [
      { wrong: "He work in London.", right: "He works in London.", why: "3ª singolare vuole -s." },
      { wrong: "She doesn't works.", right: "She doesn't work.", why: "Con does il verbo torna alla forma base." },
      { wrong: "Do she like it?", right: "Does she like it?", why: "3ª singolare → does." },
    ],
    miniTest: [
      { prompt: "She ___ tennis every weekend.", options: ["play", "plays", "playes", "is play"], answer: 1 },
      { prompt: "___ they live here?", options: ["Do", "Does", "Are", "Is"], answer: 0 },
      { prompt: "He ___ coffee.", options: ["doesn't likes", "don't like", "doesn't like", "not like"], answer: 2 },
      { prompt: "study → he ___", options: ["studys", "studies", "study", "studyes"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-articles",
    explanation:
      "Gli articoli dicono se parliamo di qualcosa di generico (a/an) o di specifico e noto (the). L'inglese li usa spesso diversamente dall'italiano — e conta il suono, non la lettera.",
    rules: [
      "a davanti a suono consonantico (a book), an davanti a suono vocalico (an apple, an hour).",
      "the per qualcosa di specifico o già noto: the sun, the book you gave me.",
      "Niente articolo per plurali/incontabili generici: I like music (non «the music» in generale).",
      "Conta il suono: a university (suono /ju/), an MP (suono /em/).",
    ],
    examples: [
      { en: "I need a pen.", it: "Mi serve una penna." },
      { en: "She's an engineer.", it: "È un'ingegnere." },
      { en: "Close the door, please.", it: "Chiudi la porta, per favore." },
      { en: "Dogs are loyal.", it: "I cani sono leali." },
    ],
    mistakes: [
      { wrong: "I'm engineer.", right: "I'm an engineer.", why: "Le professioni al singolare vogliono a/an." },
      { wrong: "an university", right: "a university", why: "Il suono /ju/ è consonantico." },
      { wrong: "I love the nature.", right: "I love nature.", why: "I concetti generali vanno senza the." },
    ],
    miniTest: [
      { prompt: "She has ___ umbrella.", options: ["a", "an", "the", "—"], answer: 1 },
      { prompt: "The Earth goes around ___ Sun.", options: ["a", "an", "the", "—"], answer: 2 },
      { prompt: "He's ___ honest man.", options: ["a", "an", "the", "—"], answer: 1 },
      { prompt: "I don't like ___ coffee (in generale).", options: ["the", "a", "an", "—"], answer: 3 },
    ],
  },
  {
    unitId: "gr-a1-plurals",
    explanation:
      "Il plurale dei nomi di solito si forma con -s, ma ci sono regole di spelling e diversi plurali irregolari che vanno semplicemente memorizzati.",
    rules: [
      "Regola base: +s (cat→cats).",
      "-s/-ss/-sh/-ch/-x → +es (bus→buses, box→boxes); consonante+y → -ies (city→cities).",
      "-f/-fe spesso → -ves (knife→knives, leaf→leaves).",
      "Irregolari: man→men, woman→women, child→children, foot→feet, tooth→teeth, person→people, mouse→mice.",
    ],
    examples: [
      { en: "one box, two boxes", it: "una scatola, due scatole" },
      { en: "one city, three cities", it: "una città, tre città" },
      { en: "one child, two children", it: "un bambino, due bambini" },
      { en: "one person, many people", it: "una persona, molte persone" },
    ],
    mistakes: [
      { wrong: "two childs", right: "two children", why: "Plurale irregolare." },
      { wrong: "three womans", right: "three women", why: "man/woman → men/women." },
      { wrong: "citys", right: "cities", why: "consonante + y → -ies." },
    ],
    miniTest: [
      { prompt: "one leaf, two ___", options: ["leafs", "leaves", "leafes", "leave"], answer: 1 },
      { prompt: "one man, two ___", options: ["mans", "men", "mens", "man"], answer: 1 },
      { prompt: "one baby, two ___", options: ["babys", "babies", "babyes", "baby"], answer: 1 },
      { prompt: "one foot, two ___", options: ["foots", "feets", "feet", "foot"], answer: 2 },
    ],
  },
  {
    unitId: "gr-a1-can",
    explanation:
      "Can è un verbo modale: esprime abilità («so fare»), possibilità e permesso. È uguale per tutte le persone, non prende mai -s, ed è seguito dalla forma base senza to.",
    rules: [
      "Forma: can + forma base (can swim). Uguale per tutti: I/he/they can.",
      "Negativa: cannot / can't. Interrogativa: Can you…?",
      "Mai to dopo can: no «can to swim».",
      "Per l'abilità nel passato si usa could.",
    ],
    examples: [
      { en: "I can swim.", it: "So nuotare." },
      { en: "She can't drive.", it: "Non sa guidare." },
      { en: "Can you help me?", it: "Puoi aiutarmi?" },
      { en: "He can speak three languages.", it: "Sa parlare tre lingue." },
    ],
    mistakes: [
      { wrong: "He cans swim.", right: "He can swim.", why: "I modali non prendono -s." },
      { wrong: "I can to drive.", right: "I can drive.", why: "Dopo can, verbo base senza to." },
      { wrong: "She can plays piano.", right: "She can play piano.", why: "Dopo can, forma base." },
    ],
    miniTest: [
      { prompt: "He ___ speak French.", options: ["can", "cans", "can to", "is can"], answer: 0 },
      { prompt: "___ you swim?", options: ["Do", "Are", "Can", "Does"], answer: 2 },
      { prompt: "She ___ come today (negativo).", options: ["can't", "doesn't can", "not can", "cann't"], answer: 0 },
      { prompt: "I can ___ the guitar.", options: ["to play", "plays", "play", "playing"], answer: 2 },
    ],
  },
  {
    unitId: "gr-a1-basics",
    explanation:
      "Le basi pratiche di ogni giorno: leggere l'alfabeto (spelling), dire numeri, date e ora. Servono per prezzi, appuntamenti, email e presentazioni.",
    rules: [
      "Numeri: 13–19 finiscono in -teen (accento in fondo: thir-TEEN); 20, 30… in -ty (accento all'inizio: THIR-ty).",
      "Ora: half past six (6:30), a quarter to seven (6:45), ten past three (3:10).",
      "Date: si legge l'ordinale — the fifth of May / May the fifth. Anni: 1999 = nineteen ninety-nine.",
      "Spelling: si compita lettera per lettera; double L = 'due elle'.",
    ],
    examples: [
      { en: "What's your phone number?", it: "Qual è il tuo numero di telefono?" },
      { en: "It's a quarter past nine.", it: "Sono le nove e un quarto." },
      { en: "My birthday is on the third of June.", it: "Il mio compleanno è il tre giugno." },
      { en: "How do you spell it?", it: "Come si scrive?" },
    ],
    mistakes: [
      { wrong: "It's the five May.", right: "It's the fifth of May.", why: "Le date usano l'ordinale." },
      { wrong: "seven and thirty", right: "half past seven", why: "Le mezze ore: half past." },
      { wrong: "I'm nineteen", right: "I'm nineteen", why: "Attento a -teen vs -ty nella pronuncia e nello spelling." },
    ],
    miniTest: [
      { prompt: "6:45 = ", options: ["a quarter past six", "a quarter to seven", "half past six", "six forty"], answer: 1 },
      { prompt: "The number after nineteen is", options: ["twenty", "twelve", "ninety", "tenty"], answer: 0 },
      { prompt: "3 May →", options: ["the three May", "the third of May", "May three", "the threeth May"], answer: 1 },
      { prompt: "How do you ___ your name?", options: ["write", "spell", "say", "tell"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-have-got",
    explanation:
      "Have got esprime possesso, relazioni e caratteristiche (ho, possiedo). In inglese britannico è comune al presente; per le azioni (fare colazione) si usa invece have.",
    rules: [
      "Affermativa: I've got, he's got (has got). Negativa: haven't got / hasn't got. Interrogativa: Have you got…? Has he got…?",
      "Have got si usa solo al presente; in altri tempi si usa have (I had a car).",
      "Alternativa con do: Do you have…? / I don't have…",
      "Per le azioni si usa have, non have got: I have breakfast at 8.",
    ],
    examples: [
      { en: "I've got two sisters.", it: "Ho due sorelle." },
      { en: "Has she got a car?", it: "Ha una macchina?" },
      { en: "They haven't got any money.", it: "Non hanno soldi." },
      { en: "He's got brown eyes.", it: "Ha gli occhi castani." },
    ],
    mistakes: [
      { wrong: "I have got breakfast at 8.", right: "I have breakfast at 8.", why: "Per le azioni si usa have, non have got." },
      { wrong: "Do you have got a pen?", right: "Have you got a pen?", why: "Non si mischiano do e got." },
      { wrong: "She have got a dog.", right: "She's got a dog.", why: "3ª singolare → has got." },
    ],
    miniTest: [
      { prompt: "___ you got a bike?", options: ["Do", "Have", "Are", "Has"], answer: 1 },
      { prompt: "He ___ got two brothers.", options: ["have", "has", "is", "got"], answer: 1 },
      { prompt: "They ___ got a garden (negativa).", options: ["hasn't", "don't", "haven't", "not"], answer: 2 },
      { prompt: "I ___ lunch at one (azione).", options: ["'ve got", "have", "has got", "am"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-countability",
    explanation:
      "I nomi numerabili si contano (a book, two books); quelli non numerabili no (water, information): restano al singolare, non prendono a/an e si quantificano con 'a piece of', 'some', 'much'.",
    rules: [
      "Numerabili: singolare/plurale, con a/an e numeri (an apple, three apples).",
      "Non numerabili: solo singolare, niente a/an, verbo singolare (Water is…).",
      "Per quantificarli: a piece of advice, a glass of water, some bread.",
      "Incontabili: much / some / any; numerabili: many / some / any.",
    ],
    examples: [
      { en: "I'd like some water.", it: "Vorrei dell'acqua." },
      { en: "She gave me good advice.", it: "Mi ha dato un buon consiglio." },
      { en: "How much sugar do you want?", it: "Quanto zucchero vuoi?" },
      { en: "There are three chairs.", it: "Ci sono tre sedie." },
    ],
    mistakes: [
      { wrong: "an advice", right: "a piece of advice", why: "Advice è incontabile." },
      { wrong: "informations", right: "information", why: "Gli incontabili non hanno plurale." },
      { wrong: "How many money?", right: "How much money?", why: "Money è incontabile → much." },
    ],
    miniTest: [
      { prompt: "I need some ___.", options: ["informations", "information", "an information", "informationes"], answer: 1 },
      { prompt: "How ___ bread do we have?", options: ["many", "much", "a lot", "few"], answer: 1 },
      { prompt: "Water ___ important.", options: ["are", "is", "have", "were"], answer: 1 },
      { prompt: "a ___ of advice", options: ["glass", "piece", "slice", "cup"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-possessives",
    explanation:
      "Per il possesso: il genitivo sassone ('s) con le persone, e gli aggettivi/pronomi possessivi (my, mine…). Attento a its (possessivo) contro it's (it is).",
    rules: [
      "Genitivo sassone: 's al singolare (Anna's book); solo apostrofo ai plurali in -s (my parents' house).",
      "Aggettivi possessivi + nome: my, your, his, her, its, our, their.",
      "Pronomi possessivi (senza nome): mine, yours, his, hers, ours, theirs.",
      "its = possessivo; it's = it is.",
    ],
    examples: [
      { en: "This is Anna's phone.", it: "Questo è il telefono di Anna." },
      { en: "Is this your bag? — No, it's hers.", it: "È la tua borsa? — No, è la sua." },
      { en: "The dog wagged its tail.", it: "Il cane ha scodinzolato." },
      { en: "Our house is bigger than theirs.", it: "La nostra casa è più grande della loro." },
    ],
    mistakes: [
      { wrong: "the book of Anna", right: "Anna's book", why: "Con le persone si usa il genitivo sassone." },
      { wrong: "It's tail", right: "Its tail", why: "it's = it is; il possessivo è its." },
      { wrong: "a friend of me", right: "a friend of mine", why: "Dopo 'of' si usa il pronome possessivo." },
    ],
    miniTest: [
      { prompt: "This car is ___ (di lei).", options: ["her", "hers", "she's", "her's"], answer: 1 },
      { prompt: "That's ___ book (di Tom).", options: ["Toms", "Tom's", "Toms'", "of Tom"], answer: 1 },
      { prompt: "The cat licked ___ paw.", options: ["it's", "its", "his", "her"], answer: 1 },
      { prompt: "a colleague of ___", options: ["me", "my", "mine", "I"], answer: 2 },
    ],
  },
  {
    unitId: "gr-a1-demonstratives",
    explanation:
      "I dimostrativi indicano vicino (this/these) o lontano (that/those), al singolare o plurale. Possono stare da soli o davanti a un nome.",
    rules: [
      "Vicino: this (sing.), these (pl.). Lontano: that (sing.), those (pl.).",
      "Da soli (This is nice) o + nome (this book).",
      "Al telefono: This is… (presentarsi), Who's that? (chiedere).",
      "Plurale: these/those + nome plurale (these shoes, non 'this shoes').",
    ],
    examples: [
      { en: "This is my house.", it: "Questa è casa mia." },
      { en: "Those shoes are expensive.", it: "Quelle scarpe sono costose." },
      { en: "I like these.", it: "Mi piacciono questi." },
      { en: "Hello, this is Marco.", it: "Pronto, sono Marco." },
    ],
    mistakes: [
      { wrong: "this shoes", right: "these shoes", why: "Plurale → these/those." },
      { wrong: "I like that ones", right: "I like those", why: "Plurale lontano → those." },
      { wrong: "Who is this? (l'altro al telefono)", right: "Who's that?", why: "Al telefono l'altro è 'that'." },
    ],
    miniTest: [
      { prompt: "___ books here are mine.", options: ["This", "That", "These", "Those"], answer: 2 },
      { prompt: "Look at ___ birds over there.", options: ["this", "these", "that", "those"], answer: 3 },
      { prompt: "'Hello, ___ is Sara.'", options: ["that", "this", "these", "it"], answer: 1 },
      { prompt: "Singolare vicino: ___ apple.", options: ["this", "these", "that", "those"], answer: 0 },
    ],
  },
  {
    unitId: "gr-a1-there-is",
    explanation:
      "There is/are dice che qualcosa esiste o si trova in un luogo, e si accorda col nome che segue. Non confonderlo con it is (descrizione).",
    rules: [
      "There is + singolare/incontabile; There are + plurale.",
      "Contratta: There's. Negativa: There isn't / There aren't. Interrogativa: Is there…? Are there…?",
      "Con some/any: There are some chairs; Is there any bread?",
      "There is = esistenza; It is = descrizione (It is difficult).",
    ],
    examples: [
      { en: "There is a cat on the sofa.", it: "C'è un gatto sul divano." },
      { en: "There are many people here.", it: "C'è molta gente qui." },
      { en: "Is there a bank near here?", it: "C'è una banca qui vicino?" },
      { en: "There aren't any eggs.", it: "Non ci sono uova." },
    ],
    mistakes: [
      { wrong: "There is two chairs.", right: "There are two chairs.", why: "Plurale → there are." },
      { wrong: "It is a problem with the wifi.", right: "There is a problem with the wifi.", why: "Esistenza → there is." },
      { wrong: "There are a book.", right: "There is a book.", why: "Singolare → there is." },
    ],
    miniTest: [
      { prompt: "___ three rooms.", options: ["There is", "There are", "It is", "Have"], answer: 1 },
      { prompt: "___ any milk?", options: ["Is there", "Are there", "There is", "It is"], answer: 0 },
      { prompt: "___ a problem.", options: ["It has", "There is", "There are", "Is"], answer: 1 },
      { prompt: "___ any shops (negativa plurale).", options: ["there isn't", "there aren't", "it isn't", "aren't there"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-present-continuous",
    explanation:
      "Il Present Continuous descrive azioni in corso ora o situazioni temporanee. Forma: be + verbo-ing. I verbi di stato di solito non ci vanno.",
    rules: [
      "Forma: am/is/are + -ing (I'm working, she's reading).",
      "Spelling: make→making (togli e), run→running (raddoppia), lie→lying.",
      "Uso: azione adesso (Look! It's raining) o temporanea (I'm staying with a friend).",
      "Verbi di stato (know, like, want, believe): niente -ing.",
    ],
    examples: [
      { en: "She's cooking dinner.", it: "Sta cucinando la cena." },
      { en: "They're playing outside.", it: "Stanno giocando fuori." },
      { en: "What are you doing?", it: "Cosa stai facendo?" },
      { en: "I'm not working today.", it: "Oggi non sto lavorando." },
    ],
    mistakes: [
      { wrong: "I am knowing the answer.", right: "I know the answer.", why: "Know è di stato: niente -ing." },
      { wrong: "She is runing.", right: "She is running.", why: "Raddoppia la consonante." },
      { wrong: "He playing football.", right: "He is playing football.", why: "Serve l'ausiliare be." },
    ],
    miniTest: [
      { prompt: "Look! It ___.", options: ["rains", "is raining", "raining", "rain"], answer: 1 },
      { prompt: "make →", options: ["makeing", "makking", "making", "maks"], answer: 2 },
      { prompt: "Stato: I ___ this song.", options: ["am liking", "like", "liking", "likes"], answer: 1 },
      { prompt: "___ you working now?", options: ["Do", "Are", "Is", "Have"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-adv-frequency",
    explanation:
      "Gli avverbi di frequenza (always, usually, often, sometimes, never…) dicono quanto spesso. Il punto grammaticale è la loro POSIZIONE nella frase.",
    rules: [
      "Prima del verbo principale: I always drink coffee.",
      "Dopo il verbo be: She is often late.",
      "In mezzo con gli ausiliari: I have never been to Rome.",
      "Never è già negativo: non con don't (no 'I don't never').",
    ],
    examples: [
      { en: "He usually walks to work.", it: "Di solito va al lavoro a piedi." },
      { en: "They are always busy.", it: "Sono sempre occupati." },
      { en: "I have never eaten sushi.", it: "Non ho mai mangiato sushi." },
      { en: "We sometimes eat out.", it: "A volte mangiamo fuori." },
    ],
    mistakes: [
      { wrong: "I drink always coffee.", right: "I always drink coffee.", why: "Prima del verbo principale." },
      { wrong: "She always is late.", right: "She is always late.", why: "Dopo il verbo be." },
      { wrong: "I don't never smoke.", right: "I never smoke.", why: "Never è già negativo." },
    ],
    miniTest: [
      { prompt: "She ___ tea in the morning.", options: ["drinks usually", "usually drinks", "drinks", "usually"], answer: 1 },
      { prompt: "Con be: He ___ tired.", options: ["always is", "is always", "always", "is"], answer: 1 },
      { prompt: "Never: I ___ late.", options: ["am never", "never am", "don't never am", "am not never"], answer: 0 },
      { prompt: "Con ausiliare: I have ___ seen it.", options: ["never", "not never", "ever not", "don't"], answer: 0 },
    ],
  },
  {
    unitId: "gr-a1-ps-vs-pc",
    explanation:
      "Present Simple per abitudini e cose sempre vere; Present Continuous per azioni in corso ora o temporanee. Il contrasto tra i due è la chiave.",
    rules: [
      "Simple: routine, fatti, sempre (I work in a bank; Water boils at 100°C).",
      "Continuous: adesso, temporaneo (I'm working from home this week).",
      "Segnali Simple: every day, usually, on Mondays. Continuous: now, at the moment, Look!",
      "I verbi di stato (know, like, want) restano al Simple.",
    ],
    examples: [
      { en: "I usually cycle, but today I'm taking the bus.", it: "Di solito vado in bici, ma oggi prendo il bus." },
      { en: "She works in Milan.", it: "Lavora a Milano." },
      { en: "Be quiet — the baby is sleeping.", it: "Fai piano — il bambino sta dormendo." },
      { en: "Do you like it?", it: "Ti piace? (stato)" },
    ],
    mistakes: [
      { wrong: "I am going to the gym every day.", right: "I go to the gym every day.", why: "Abitudine → Simple." },
      { wrong: "Look! She dances.", right: "Look! She's dancing.", why: "Azione ora → Continuous." },
      { wrong: "I am wanting a coffee.", right: "I want a coffee.", why: "Want è di stato." },
    ],
    miniTest: [
      { prompt: "Every morning I ___ tea.", options: ["am drinking", "drink", "drinks", "drinking"], answer: 1 },
      { prompt: "Listen! Someone ___.", options: ["sings", "is singing", "sing", "sang"], answer: 1 },
      { prompt: "She ___ French (generale).", options: ["is knowing", "knows", "knowing", "know"], answer: 1 },
      { prompt: "At the moment I ___ a book.", options: ["read", "am reading", "reads", "reading"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-imperative",
    explanation:
      "L'imperativo dà ordini, istruzioni, consigli e inviti. Si usa la forma base del verbo, senza soggetto; il negativo con Don't.",
    rules: [
      "Affermativo: forma base (Sit down. Open the window.).",
      "Negativo: Don't + forma base (Don't touch that.).",
      "Per addolcire: please (Please wait here) o Let's per proposte (Let's go).",
      "Niente soggetto e niente to: no 'You sit down', no 'To sit down'.",
    ],
    examples: [
      { en: "Turn left at the lights.", it: "Gira a sinistra al semaforo." },
      { en: "Don't be late.", it: "Non fare tardi." },
      { en: "Please have a seat.", it: "Prego, si accomodi." },
      { en: "Let's start.", it: "Cominciamo." },
    ],
    mistakes: [
      { wrong: "Not touch that.", right: "Don't touch that.", why: "Il negativo vuole don't." },
      { wrong: "To sit down.", right: "Sit down.", why: "L'imperativo è la forma base senza to." },
      { wrong: "You open the door! (neutro)", right: "Open the door.", why: "L'imperativo non ha soggetto." },
    ],
    miniTest: [
      { prompt: "Negativo: ___ worry.", options: ["Not", "Don't", "No", "Doesn't"], answer: 1 },
      { prompt: "Proposta: ___ go out.", options: ["Let's", "Let us to", "We", "Do"], answer: 0 },
      { prompt: "Ordine: ___ down.", options: ["To sit", "Sit", "Sitting", "You sit"], answer: 1 },
      { prompt: "Gentile: ___ wait here.", options: ["Please", "You please", "Do please to", "Please to"], answer: 0 },
    ],
  },
  {
    unitId: "gr-a1-requests",
    explanation:
      "Formule per chiedere, offrire e invitare in modo educato con i modali can/could/would/shall.",
    rules: [
      "Richieste: Can/Could you…? (Could è più formale). Can/Could I…? per il permesso.",
      "Offerte: Shall I…? / Would you like…? (Would you like a coffee?).",
      "Inviti/proposte: Shall we…? / Would you like to…?",
      "Would you like ≠ Do you like: la prima è un'offerta, la seconda chiede i gusti.",
    ],
    examples: [
      { en: "Could you help me, please?", it: "Potresti aiutarmi, per favore?" },
      { en: "Would you like some tea?", it: "Vorresti del tè?" },
      { en: "Shall I open the window?", it: "Apro la finestra?" },
      { en: "Shall we go?", it: "Andiamo?" },
    ],
    mistakes: [
      { wrong: "Do you like a coffee? (offerta)", right: "Would you like a coffee?", why: "Per offrire → would you like." },
      { wrong: "Can you to help me?", right: "Can you help me?", why: "Dopo can, forma base senza to." },
      { wrong: "I open the window?", right: "Shall I open the window?", why: "Per offrirsi → Shall I." },
    ],
    miniTest: [
      { prompt: "Offerta: ___ you like a biscuit?", options: ["Do", "Would", "Are", "Can"], answer: 1 },
      { prompt: "Permesso: ___ I sit here?", options: ["Could", "Would", "Shall", "Do"], answer: 0 },
      { prompt: "Proposta: ___ we dance?", options: ["Will", "Shall", "Do", "Would"], answer: 1 },
      { prompt: "Richiesta cortese: ___ you pass the salt?", options: ["Could", "Do", "Are", "Shall"], answer: 0 },
    ],
  },
  {
    unitId: "gr-a1-prep-time",
    explanation:
      "Le preposizioni di tempo di base: in per periodi lunghi, on per giorni e date, at per orari e momenti precisi.",
    rules: [
      "at + ora/momento: at 7 o'clock, at night, at the weekend, at Christmas.",
      "on + giorni/date: on Monday, on 5th May, on my birthday.",
      "in + mesi/anni/stagioni/parti del giorno: in July, in 2020, in summer, in the morning.",
      "Niente preposizione con today, tomorrow, this/next/last.",
    ],
    examples: [
      { en: "The meeting is at 3 p.m.", it: "La riunione è alle 15." },
      { en: "I was born in 1990.", it: "Sono nato nel 1990." },
      { en: "See you on Friday.", it: "Ci vediamo venerdì." },
      { en: "We travel in the summer.", it: "Viaggiamo d'estate." },
    ],
    mistakes: [
      { wrong: "at Monday", right: "on Monday", why: "I giorni vogliono on." },
      { wrong: "in 7 o'clock", right: "at 7 o'clock", why: "Le ore vogliono at." },
      { wrong: "on July", right: "in July", why: "I mesi vogliono in." },
    ],
    miniTest: [
      { prompt: "___ Monday", options: ["in", "on", "at", "—"], answer: 1 },
      { prompt: "___ 8 o'clock", options: ["in", "on", "at", "—"], answer: 2 },
      { prompt: "___ December", options: ["in", "on", "at", "—"], answer: 0 },
      { prompt: "See you ___ tomorrow.", options: ["on", "in", "at", "—"], answer: 3 },
    ],
  },
  {
    unitId: "gr-a1-prep-place",
    explanation:
      "Dove si trova qualcosa: in (dentro), on (sopra a contatto), at (in un punto), più under, next to, between, behind…",
    rules: [
      "in (spazi/aree): in the box, in London. on (superfici): on the table. at (punti): at the bus stop.",
      "under (sotto), over/above (sopra), next to/beside (accanto), between (tra due), among (tra molti).",
      "behind (dietro), in front of (davanti), near (vicino), opposite (di fronte).",
      "at home / at work / at school (senza the).",
    ],
    examples: [
      { en: "The keys are on the table.", it: "Le chiavi sono sul tavolo." },
      { en: "She's at the station.", it: "È alla stazione." },
      { en: "The cat is under the bed.", it: "Il gatto è sotto il letto." },
      { en: "The bank is next to the café.", it: "La banca è accanto al bar." },
    ],
    mistakes: [
      { wrong: "in the bus stop", right: "at the bus stop", why: "Punto preciso → at." },
      { wrong: "on London", right: "in London", why: "Città/aree → in." },
      { wrong: "at the home", right: "at home", why: "at home senza the." },
    ],
    miniTest: [
      { prompt: "The book is ___ the shelf.", options: ["in", "on", "at", "under"], answer: 1 },
      { prompt: "I'm ___ home.", options: ["in", "on", "at", "to"], answer: 2 },
      { prompt: "The dog is ___ the table (sotto).", options: ["on", "over", "under", "in"], answer: 2 },
      { prompt: "___ the box (dentro)", options: ["on", "in", "at", "over"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-question-words",
    explanation:
      "Le parole interrogative (who, what, where, when, why, how…) aprono le domande aperte. Ordine tipico: parola + ausiliare + soggetto + verbo.",
    rules: [
      "who (chi), what (che cosa), where (dove), when (quando), why (perché), which (quale), whose (di chi).",
      "how + parola: how much (quanto, incont.), how many (quanti), how old, how long, how often.",
      "Struttura: Where do you live? What is she doing?",
      "Domande sul soggetto: niente ausiliare — Who called? (non 'Who did call?').",
    ],
    examples: [
      { en: "Where do you work?", it: "Dove lavori?" },
      { en: "How many brothers have you got?", it: "Quanti fratelli hai?" },
      { en: "Why are you late?", it: "Perché sei in ritardo?" },
      { en: "Whose car is this?", it: "Di chi è questa macchina?" },
    ],
    mistakes: [
      { wrong: "How much people?", right: "How many people?", why: "People è numerabile → how many." },
      { wrong: "Where you live?", right: "Where do you live?", why: "Serve l'ausiliare do." },
      { wrong: "Who did call you? (soggetto)", right: "Who called you?", why: "Domanda sul soggetto: niente did." },
    ],
    miniTest: [
      { prompt: "___ do you live?", options: ["What", "Where", "Who", "When"], answer: 1 },
      { prompt: "___ money have you got?", options: ["How many", "How much", "How", "What"], answer: 1 },
      { prompt: "___ is this bag? (di chi)", options: ["Who", "Whose", "Which", "Who's"], answer: 1 },
      { prompt: "Soggetto: ___ broke the window?", options: ["Who did", "Who", "Whom did", "What did"], answer: 1 },
    ],
  },
  {
    unitId: "gr-a1-short-answers",
    explanation:
      "Alle domande sì/no si risponde ripetendo l'ausiliare (o be/can), non l'intero verbo. Nell'affermativa non si contrae.",
    rules: [
      "Struttura: Yes/No + soggetto + ausiliare. Do you…? → Yes, I do. / No, I don't.",
      "Con be: Are you…? → Yes, I am. / No, I'm not.",
      "Con can/have got: Can you…? → Yes, I can. Have you got…? → Yes, I have.",
      "Affermativa non contratta: Yes, I am (non 'Yes, I'm').",
    ],
    examples: [
      { en: "Do you like tea? — Yes, I do.", it: "Ti piace il tè? — Sì." },
      { en: "Is she coming? — No, she isn't.", it: "Viene? — No." },
      { en: "Can they swim? — Yes, they can.", it: "Sanno nuotare? — Sì." },
      { en: "Have you got a car? — No, I haven't.", it: "Hai la macchina? — No." },
    ],
    mistakes: [
      { wrong: "Do you like it? — Yes, I like.", right: "Yes, I do.", why: "Si ripete l'ausiliare, non il verbo." },
      { wrong: "Are you ready? — Yes, I'm.", right: "Yes, I am.", why: "Affermativa non contratta." },
      { wrong: "Can you drive? — Yes, I do.", right: "Yes, I can.", why: "Si ripete lo stesso modale." },
    ],
    miniTest: [
      { prompt: "Do you smoke? — No, I ___.", options: ["don't", "doesn't", "am not", "not"], answer: 0 },
      { prompt: "Is he here? — Yes, he ___.", options: ["does", "is", "has", "can"], answer: 1 },
      { prompt: "Can you cook? — Yes, I ___.", options: ["do", "am", "can", "cook"], answer: 2 },
      { prompt: "Are you tired? — Yes, I ___.", options: ["'m", "am", "do", "are"], answer: 1 },
    ],
  },
];
