import type { LexItem } from "@/features/lexis/types";

/** Vocabulary content, keyed to the voc-* catalog Units. One unit authored here
 * to prove the shared lexical engine works across sections; more to follow. */
const v = (unitId: string, word: string, it: string, example: string, pos = "noun"): LexItem => ({
  id: `lx-voc-${word.replace(/[^a-z]+/gi, "-").toLowerCase()}`,
  unitId,
  word,
  it,
  pos,
  example,
});

export const vocabularyItems: LexItem[] = [
  // Family (A1)
  v("voc-family", "mother", "madre", "My mother works as a nurse."),
  v("voc-family", "father", "padre", "His father is retired now."),
  v("voc-family", "sister", "sorella", "I have one older sister."),
  v("voc-family", "brother", "fratello", "Her brother lives abroad."),
  v("voc-family", "grandmother", "nonna", "My grandmother tells great stories."),
  v("voc-family", "grandfather", "nonno", "His grandfather was a fisherman."),
  v("voc-family", "cousin", "cugino/a", "We visited our cousins in Spain."),
  v("voc-family", "aunt", "zia", "My aunt is coming for dinner."),
  v("voc-family", "uncle", "zio", "His uncle taught him to fish."),
  v("voc-family", "nephew", "nipote (m)", "She babysits her nephew on Sundays."),
  v("voc-family", "niece", "nipote (f)", "My niece just started school."),

  // Food (A1)
  v("voc-food", "bread", "pane", "I bought fresh bread this morning."),
  v("voc-food", "cheese", "formaggio", "She loves Italian cheese."),
  v("voc-food", "meat", "carne", "He doesn't eat meat."),
  v("voc-food", "vegetable", "verdura", "Eat more vegetables."),
  v("voc-food", "fruit", "frutta", "There's fresh fruit in the bowl."),
  v("voc-food", "rice", "riso", "We had rice with the curry."),
  v("voc-food", "egg", "uovo", "I'll have two eggs for breakfast."),
  v("voc-food", "milk", "latte", "Add a little milk to the sauce."),
  v("voc-food", "sugar", "zucchero", "No sugar in my coffee, thanks."),
  v("voc-food", "meal", "pasto", "Dinner is my favourite meal."),

  // Travel (A2)
  v("voc-travel", "flight", "volo", "Our flight was delayed."),
  v("voc-travel", "luggage", "bagaglio", "Don't leave your luggage unattended."),
  v("voc-travel", "passport", "passaporto", "Keep your passport safe."),
  v("voc-travel", "ticket", "biglietto", "I booked the tickets online."),
  v("voc-travel", "journey", "viaggio (tragitto)", "It's a long journey by train."),
  v("voc-travel", "delay", "ritardo", "There was a two-hour delay."),
  v("voc-travel", "departure", "partenza", "Check the departure time."),
  v("voc-travel", "arrival", "arrivo", "Arrivals are on the ground floor."),
  v("voc-travel", "booking", "prenotazione", "I made a booking for two nights."),
  v("voc-travel", "destination", "destinazione", "Rome was our final destination."),

  // Work (B1)
  v("voc-work", "salary", "stipendio", "She earns a good salary."),
  v("voc-work", "colleague", "collega", "My colleagues are very friendly."),
  v("voc-work", "deadline", "scadenza", "We missed the deadline."),
  v("voc-work", "meeting", "riunione", "The meeting starts at nine."),
  v("voc-work", "promotion", "promozione", "He got a promotion last month."),
  v("voc-work", "interview", "colloquio", "I have a job interview tomorrow."),
  v("voc-work", "staff", "personale", "The staff are on strike."),
  v("voc-work", "shift", "turno", "I work the night shift."),
  v("voc-work", "task", "compito", "I have several tasks to finish."),
  v("voc-work", "workload", "carico di lavoro", "My workload has doubled."),

  // Technology (B1)
  v("voc-technology", "device", "dispositivo", "Save the file on your device."),
  v("voc-technology", "screen", "schermo", "Try to stare less at the screen."),
  v("voc-technology", "password", "password", "Choose a strong password."),
  v("voc-technology", "software", "software", "We updated the software."),
  v("voc-technology", "data", "dati", "The app collects your data."),
  v("voc-technology", "network", "rete", "The network is down again."),
  v("voc-technology", "update", "aggiornamento", "Install the latest update."),
  v("voc-technology", "charger", "caricabatterie", "I forgot my charger."),
  v("voc-technology", "browser", "browser", "Open it in a different browser."),
  v("voc-technology", "download", "scaricamento", "The download is almost done.", "noun"),
];
