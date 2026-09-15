import type { ConnectorEntry, ConnectorFunction } from "@/features/connectors/types";

/** Compact entry builder. */
const e = (id: string, word: string, it: string, structure: string, example: string, note?: string): ConnectorEntry => ({
  id: `cx-${id}`,
  word,
  it,
  structure,
  example,
  note,
});

/**
 * The connector catalog content, keyed by the catalog Unit ids (con-*). Authored
 * for the B1+ writer: the notes focus on the mistakes an Italian learner actually
 * makes and the fine distinctions between near-synonyms.
 */
export const connectorFunctions: ConnectorFunction[] = [
  {
    unitId: "con-contrast",
    fn: "Contrast",
    intro: "Mettere due idee una contro l'altra. Attenzione a cosa unisce cosa: alcune sono congiunzioni, altre avverbi che vogliono una frase a sé.",
    connectors: [
      e("however", "however", "tuttavia", "Avverbio; frase separata (spesso dopo punto o punto e virgola).", "The plan was risky. However, it worked.", "Non è una congiunzione: NO «It was risky, however it worked»."),
      e("whereas", "whereas", "mentre (contrasto)", "Congiunzione; unisce due frasi in contrasto diretto.", "Tom is quiet, whereas his brother is loud.", "Contrappone due fatti; diverso da «while» temporale."),
      e("while-contrast", "while", "mentre", "Congiunzione; contrasto oppure tempo.", "While I agree in part, I still have doubts.", "Può essere temporale («mentre facevo…») o di contrasto."),
      e("on-the-other-hand", "on the other hand", "d'altra parte", "Espressione; introduce il lato opposto.", "It's cheap. On the other hand, it's slow.", "Spesso in coppia con «on the one hand»."),
      e("in-contrast", "in contrast", "al contrario, per contro", "Espressione a inizio frase.", "Sales fell in Italy. In contrast, they rose in Spain."),
      e("but", "but", "ma", "Congiunzione coordinante; unisce nella stessa frase.", "It's small but comfortable.", "Più informale di «however»."),
    ],
  },
  {
    unitId: "con-concession",
    fn: "Concession",
    intro: "Ammettere un fatto e poi opporvi qualcosa. Qui l'errore classico è confondere ciò che regge una frase (although) con ciò che regge un nome (despite).",
    connectors: [
      e("although", "although", "sebbene, anche se", "Congiunzione + frase (soggetto + verbo).", "Although it was late, we kept going.", "Seguito da una frase, NON da un nome: no «although the rain»."),
      e("even-though", "even though", "anche se (enfatico)", "Congiunzione + frase.", "Even though he trained hard, he lost.", "Più forte di «although»."),
      e("though", "though", "anche se / però", "Congiunzione; a fine frase come avverbio.", "It's expensive. I'll buy it, though.", "A fine frase = «però» (informale)."),
      e("despite", "despite", "nonostante", "Preposizione + nome o -ing (mai una frase).", "Despite the rain, we went out.", "NO «despite of». Per una frase: «despite the fact that»."),
      e("in-spite-of", "in spite of", "nonostante", "Preposizione + nome o -ing.", "In spite of his age, he runs every day.", "Sinonimo di «despite», ma questo vuole «of»."),
      e("nevertheless", "nevertheless", "ciononostante", "Avverbio; frase separata.", "The odds were low. Nevertheless, they tried.", "Formale."),
      e("even-if", "even if", "anche se (ipotetico)", "Congiunzione + frase (condizione).", "Even if it rains, we'll go.", "Ipotetico («anche nel caso»); «even though» è invece un fatto reale."),
    ],
  },
  {
    unitId: "con-cause",
    fn: "Cause",
    intro: "Dire il perché. La scelta chiave: + frase (because/since/as) oppure + nome (due to/owing to).",
    connectors: [
      e("because", "because", "perché", "Congiunzione + frase.", "We stopped because it was dark.", "Risponde a «why»; unisce due frasi."),
      e("since-cause", "since", "poiché, dato che", "Congiunzione + frase (causa già nota).", "Since you're here, let's start.", "Anche temporale («da quando»); qui = causa."),
      e("as-cause", "as", "siccome, poiché", "Congiunzione + frase.", "As it was raining, we stayed in.", "Causa; «as» ha anche altri usi (come/mentre)."),
      e("due-to", "due to", "a causa di", "Preposizione + nome.", "The delay was due to fog.", "Di solito dopo il verbo «be»; + nome, non frase."),
      e("owing-to", "owing to", "a causa di", "Preposizione + nome.", "Owing to strikes, trains were cancelled.", "Più formale di «due to»."),
      e("because-of", "because of", "a causa di", "Preposizione + nome (mai una frase).", "We stayed in because of the storm.", "+ nome: no «because of it was raining» (quello è «because»)."),
      e("thanks-to", "thanks to", "grazie a", "Preposizione + nome.", "Thanks to your help, we finished early.", "Causa con esito positivo."),
    ],
  },
  {
    unitId: "con-effect",
    fn: "Effect",
    intro: "Dire la conseguenza. Quasi tutti sono avverbi formali (frase a sé); «so» è la versione informale che unisce.",
    connectors: [
      e("therefore", "therefore", "perciò, quindi", "Avverbio; frase separata.", "He lied; therefore, he was fired.", "Formale; non è una congiunzione."),
      e("so-effect", "so", "così, quindi", "Congiunzione coordinante.", "It was late, so we left.", "Informale; unisce nella stessa frase."),
      e("as-a-result", "as a result", "di conseguenza", "Espressione a inizio frase.", "Costs rose. As a result, prices went up."),
      e("consequently", "consequently", "di conseguenza", "Avverbio; frase separata.", "He missed the deadline; consequently, he lost the contract.", "Formale."),
      e("thus", "thus", "così, in tal modo", "Avverbio; registro molto formale.", "Demand fell; thus, output was cut.", "Accademico/formale."),
      e("hence", "hence", "quindi, da qui", "Avverbio; molto formale, spesso + nome.", "The data were unreliable; hence the caution.", "Formale; può reggere direttamente un nome."),
      e("for-this-reason", "for this reason", "per questo motivo", "Espressione a inizio frase.", "The road is unsafe. For this reason, it was closed."),
    ],
  },
  {
    unitId: "con-addition",
    fn: "Addition",
    intro: "Aggiungere un'idea. Distingui gli avverbi formali (moreover, furthermore) dalle preposizioni (as well as).",
    connectors: [
      e("in-addition", "in addition", "inoltre", "Espressione a inizio frase.", "It's fast. In addition, it's cheap."),
      e("moreover", "moreover", "inoltre, per di più", "Avverbio formale; frase separata.", "The plan is costly. Moreover, it's risky.", "Formale."),
      e("furthermore", "furthermore", "inoltre, per giunta", "Avverbio formale; frase separata.", "It's slow. Furthermore, it's unreliable.", "Simile a «moreover»."),
      e("besides", "besides", "inoltre, del resto", "Avverbio; aggiunge un motivo, più informale.", "I'm tired. Besides, it's late.", "Spesso introduce l'argomento decisivo."),
      e("as-well-as", "as well as", "oltre a", "Preposizione + nome o -ing.", "She speaks French as well as English.", "+ nome/-ing, non una frase; diverso da «as well» a fine frase."),
      e("also", "also", "anche", "Avverbio; in mezzo alla frase.", "He also plays the piano.", "Posizione: dopo l'ausiliare / prima del verbo pieno."),
      e("whats-more", "what's more", "per di più", "Espressione a inizio frase (informale).", "It's cheap. What's more, it's easy to use."),
      e("not-only", "not only … but also", "non solo … ma anche", "Struttura correlativa; inversione se a inizio frase.", "Not only did he apologise, but he also paid.", "A inizio frase serve l'inversione: «Not only did he…»."),
    ],
  },
  {
    unitId: "con-sequence",
    fn: "Sequence",
    intro: "Ordinare i passaggi di un testo o di un processo.",
    connectors: [
      e("first", "first (of all)", "prima, per prima cosa", "Avverbio a inizio frase.", "First, preheat the oven."),
      e("then", "then", "poi", "Avverbio.", "Add the eggs, then stir."),
      e("after-that", "after that", "dopodiché", "Espressione a inizio frase.", "After that, we visited the museum."),
      e("subsequently", "subsequently", "successivamente", "Avverbio formale.", "He resigned; subsequently, he left the country.", "Formale."),
      e("meanwhile", "meanwhile", "nel frattempo", "Avverbio.", "I cooked; meanwhile, she set the table."),
      e("finally", "finally", "infine", "Avverbio a inizio frase.", "Finally, we reached the top.", "Diverso da «at the end» (= alla fine di un luogo/periodo)."),
    ],
  },
  {
    unitId: "con-condition",
    fn: "Condition",
    intro: "Porre una condizione. Errori tipici: il futuro nella subordinata e la doppia negazione con «unless».",
    connectors: [
      e("if", "if", "se", "Congiunzione + frase.", "If it rains, we'll stay in.", "Nella condizione presente, NON «will»: no «if it will rain»."),
      e("unless", "unless", "a meno che (non)", "Congiunzione (= if not).", "We'll go unless it rains.", "È già negativo: niente doppia negazione."),
      e("as-long-as", "as long as", "purché, fintanto che", "Congiunzione + frase.", "You can go as long as you're back by ten."),
      e("provided-that", "provided that", "a condizione che", "Congiunzione + frase (formale).", "I'll help, provided that you ask.", "Formale; «providing (that)» è informale."),
      e("in-case", "in case", "nel caso in cui", "Congiunzione + frase (precauzione).", "Take an umbrella in case it rains.", "Precauzione, diverso da «if»; niente «will» dopo."),
    ],
  },
  {
    unitId: "con-comparison",
    fn: "Comparison",
    intro: "Mostrare che due cose si somigliano.",
    connectors: [
      e("similarly", "similarly", "allo stesso modo", "Avverbio a inizio frase.", "Sales rose in Italy. Similarly, they grew in Spain."),
      e("likewise", "likewise", "allo stesso modo, ugualmente", "Avverbio.", "He apologised, and she did likewise."),
      e("in-the-same-way", "in the same way", "allo stesso modo", "Espressione.", "In the same way, plants need light to grow."),
      e("just-as", "just as", "proprio come", "Congiunzione + frase.", "Just as bees need flowers, flowers need bees."),
      e("compared-to", "compared to/with", "rispetto a", "Preposizione + nome.", "Compared to last year, sales are up."),
      e("in-comparison", "in comparison", "in confronto", "Espressione a inizio frase.", "The first plan was weak. In comparison, this one is solid."),
    ],
  },
  {
    unitId: "con-purpose",
    fn: "Purpose",
    intro: "Dire lo scopo. La distinzione chiave: + infinito (to / in order to / so as to) vs + frase (so that).",
    connectors: [
      e("to-purpose", "to (+ infinitive)", "per (fare)", "to + infinito.", "I called to apologise.", "Forma base dello scopo."),
      e("in-order-to", "in order to", "allo scopo di, per", "in order to + infinito (formale).", "She left early in order to catch the train.", "Più formale di «to»."),
      e("so-as-to", "so as to", "così da, per", "so as to + infinito.", "He tiptoed so as to not wake the baby.", "Negativo: «so as not to»."),
      e("so-that", "so that", "affinché, così che", "so that + frase (spesso con can/would).", "I'll write it down so that you remember.", "+ frase, non infinito; diverso da «so as to»."),
      e("for-purpose", "for (+ -ing / noun)", "per", "for + -ing (funzione) o + nome.", "This tool is for cutting metal.", "Lo scopo di un oggetto: «for + -ing», non «to»."),
      e("with-the-aim-of", "with the aim of", "con l'obiettivo di", "with the aim of + -ing (formale).", "They met with the aim of reaching a deal.", "Formale; + -ing."),
    ],
  },
  {
    unitId: "con-conclusion",
    fn: "Conclusion",
    intro: "Chiudere un testo tirando le fila.",
    connectors: [
      e("in-conclusion", "in conclusion", "in conclusione", "Espressione a inizio frase (finale).", "In conclusion, the project succeeded."),
      e("to-sum-up", "to sum up", "per riassumere", "Espressione a inizio frase.", "To sum up, three factors mattered."),
      e("overall", "overall", "nel complesso", "Avverbio a inizio frase.", "Overall, it was a good year."),
      e("all-in-all", "all in all", "tutto sommato", "Espressione.", "All in all, we were satisfied."),
      e("in-short", "in short", "in breve", "Espressione.", "In short, it works."),
      e("to-conclude", "to conclude", "per concludere", "Espressione a inizio frase (finale).", "To conclude, the benefits outweigh the costs."),
      e("in-summary", "in summary", "in sintesi", "Espressione a inizio frase.", "In summary, the trial was a success."),
    ],
  },
];

const byUnit = new Map(connectorFunctions.map((f) => [f.unitId, f]));

export function getConnectorFunction(unitId: string): ConnectorFunction | undefined {
  return byUnit.get(unitId);
}

const byEntryId = new Map<string, { entry: ConnectorEntry; fn: string }>();
for (const f of connectorFunctions) {
  for (const c of f.connectors) byEntryId.set(c.id, { entry: c, fn: f.fn });
}

/** Resolve a single connector (a ReviewItem of kind "connector") by its id. */
export function getConnectorEntry(id: string): { entry: ConnectorEntry; fn: string } | undefined {
  return byEntryId.get(id);
}
