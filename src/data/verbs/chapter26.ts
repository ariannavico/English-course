import type { Verb } from "@/types";

/** Chapter 26 — Plans, Problems & Technology. Tier-2 thematic cards. */

export const plan: Verb = {
  id: "plan", infinitive: "plan", thirdPerson: "plans", past: "planned",
  pastParticiple: "planned", ingForm: "planning", pronunciation: { ipa: "/plæn/", note: "doubles the n: planned" },
  tier: 2, cefrLevel: "A2+", topics: ["plans-tech"],
  meanings: [{ id: "plan-intend", englishExplanation: "To decide and organise what you are going to do.", italianMeaning: "pianificare, avere in programma", context: "plan TO do; plan a trip/event. Also a noun (a plan).", examples: ["We're planning to move house.", "Have you planned the trip?"] }],
  collocations: [
    { id: "plan-to", phrase: "plan to (do)", meaning: "avere in programma di", example: "I plan to study abroad.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "plan-ex-1", english: "What are you planning to do this weekend?", italian: "Cosa hai in programma di fare questo weekend?", difficulty: "A2+", highlightedWords: ["planning to"] }],
  commonMistakes: [{ id: "plan-mistake-ing", incorrect: "We plan going to Spain.", correct: "We plan to go to Spain.", explanation: "plan TO + infinitive.", category: "verb" }],
  exercises: ["ex-plan-1"],
};

export const book: Verb = {
  id: "book", infinitive: "book", thirdPerson: "books", past: "booked",
  pastParticiple: "booked", ingForm: "booking", pronunciation: { ipa: "/bʊk/" },
  tier: 2, cefrLevel: "A2+", topics: ["plans-tech", "travel"],
  meanings: [{ id: "book-reserve", englishExplanation: "To arrange to have something (a table, room, ticket) in advance.", italianMeaning: "prenotare", context: "book a table/flight/hotel. Same as 'reserve', more common in everyday BrE.", examples: ["I booked a table for two.", "Have you booked your flight?"] }],
  collocations: [
    { id: "book-table", phrase: "book a table / room", meaning: "prenotare un tavolo / una stanza", example: "Let's book a table for Friday.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "book-ex-1", english: "We booked the hotel online.", italian: "Abbiamo prenotato l'hotel online.", difficulty: "A2+", highlightedWords: ["booked"] }],
  exercises: ["ex-book-1"],
};

export const cancel: Verb = {
  id: "cancel", infinitive: "cancel", thirdPerson: "cancels", past: "cancelled",
  pastParticiple: "cancelled", ingForm: "cancelling", pronunciation: { ipa: "/ˈkænsl/", note: "BrE doubles the l" },
  tier: 2, cefrLevel: "B1", topics: ["plans-tech"],
  meanings: [{ id: "cancel-stop", englishExplanation: "To decide that a planned event will not happen.", italianMeaning: "annullare, disdire", context: "cancel a booking/meeting/order.", examples: ["They cancelled the concert.", "I need to cancel my appointment."] }],
  collocations: [
    { id: "cancel-booking", phrase: "cancel a booking", meaning: "disdire una prenotazione", example: "Can I cancel my booking?", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "cancel-ex-1", english: "The flight was cancelled because of the storm.", italian: "Il volo è stato annullato a causa della tempesta.", difficulty: "B1", highlightedWords: ["cancelled"] }],
  exercises: ["ex-cancel-1"],
};

export const solve: Verb = {
  id: "solve", infinitive: "solve", thirdPerson: "solves", past: "solved",
  pastParticiple: "solved", ingForm: "solving", pronunciation: { ipa: "/sɒlv/" },
  tier: 2, cefrLevel: "B1", topics: ["plans-tech"],
  meanings: [{ id: "solve-fix", englishExplanation: "To find an answer to a problem.", italianMeaning: "risolvere", context: "solve a problem/puzzle. (For a machine, use 'fix'.)", examples: ["We need to solve this problem.", "She solved the puzzle quickly."] }],
  collocations: [
    { id: "solve-problem", phrase: "solve a problem", meaning: "risolvere un problema", example: "Let's solve this together.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "solve-ex-1", english: "Talking about it often helps solve the problem.", italian: "Parlarne spesso aiuta a risolvere il problema.", difficulty: "B1", highlightedWords: ["solve"] }],
  exercises: ["ex-solve-1"],
};

export const download: Verb = {
  id: "download", infinitive: "download", thirdPerson: "downloads", past: "downloaded",
  pastParticiple: "downloaded", ingForm: "downloading", pronunciation: { ipa: "/ˌdaʊnˈləʊd/" },
  tier: 2, cefrLevel: "A2+", topics: ["technology", "plans-tech"],
  meanings: [{ id: "download-get", englishExplanation: "To copy a file or app from the internet to your device.", italianMeaning: "scaricare", context: "download an app/file. Opposite: upload.", examples: ["I downloaded the app.", "You can download the file here."] }],
  collocations: [
    { id: "download-app", phrase: "download an app", meaning: "scaricare un'app", example: "Download the app to book tickets.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "download-ex-1", english: "It only takes a minute to download.", italian: "Ci vuole solo un minuto per scaricarlo.", difficulty: "A2+", highlightedWords: ["download"] }],
  exercises: ["ex-download-1"],
};

export const update: Verb = {
  id: "update", infinitive: "update", thirdPerson: "updates", past: "updated",
  pastParticiple: "updated", ingForm: "updating", pronunciation: { ipa: "/ʌpˈdeɪt/" },
  tier: 2, cefrLevel: "B1", topics: ["technology", "plans-tech"],
  meanings: [{ id: "update-refresh", englishExplanation: "To make something more modern or add the latest information.", italianMeaning: "aggiornare", context: "update an app/your details. Also a noun (an update).", examples: ["Please update the app.", "I updated my contact details."] }],
  collocations: [
    { id: "update-app", phrase: "update an app / your details", meaning: "aggiornare un'app / i dati", example: "You should update your software.", frequency: "high" },
  ],
  phrasalVerbs: [], verbPatterns: [],
  examples: [{ id: "update-ex-1", english: "Have you updated the app to the latest version?", italian: "Hai aggiornato l'app all'ultima versione?", difficulty: "B1", highlightedWords: ["updated"] }],
  exercises: ["ex-update-1"],
};

export const chapter26Verbs: Verb[] = [plan, book, cancel, solve, download, update];
