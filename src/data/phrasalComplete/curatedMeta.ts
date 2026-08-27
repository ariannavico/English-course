import { takePhrasalVerbs, getPhrasalVerbs } from "@/data/phrasalVerbs/take";
import { essentialPhrasalVerbs } from "@/data/phrasalVerbs/essentials";
import { essentialPhrasalVerbs2 } from "@/data/phrasalVerbs/essentials2";
import { essentialPhrasalVerbs3 } from "@/data/phrasalVerbs/essentials3";
import { thematicPhrasalVerbs } from "@/data/phrasalVerbs/thematic";
import { thematicPhrasalVerbs2 } from "@/data/phrasalVerbs/thematic2";

/**
 * The small curated phrasal-verb set carries two things the raw A–Z list does
 * not: whether the verb is SEPARABLE (turn it off ✓) and a CEFR level. We lift
 * just those two fields, keyed by the exact phrase, so the A–Z reference can show
 * them for the ~85 phrasals we have curated — the rest simply show without a
 * separability/level badge. (This is why the standalone curated page could retire
 * without losing its one unique bit of information.)
 */
export interface CuratedMeta {
  separable?: boolean;
  cefr: string;
}

const curated = [
  ...takePhrasalVerbs,
  ...getPhrasalVerbs,
  ...essentialPhrasalVerbs,
  ...essentialPhrasalVerbs2,
  ...essentialPhrasalVerbs3,
  ...thematicPhrasalVerbs,
  ...thematicPhrasalVerbs2,
];

export const curatedMeta: Record<string, CuratedMeta> = Object.fromEntries(
  curated.map((pv) => [
    pv.phrase.toLowerCase(),
    { separable: pv.separable, cefr: pv.cefrLevel },
  ]),
);
