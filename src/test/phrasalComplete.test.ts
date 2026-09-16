import { describe, expect, it } from "vitest";
import {
  phrasalFamilies,
  totalPhrasalPhrases,
  totalPhrasalSenses,
} from "@/data/phrasalComplete";
import { phrasalItalian } from "@/data/phrasalComplete/italian";

describe("complete phrasal-verb reference", () => {
  it("is a substantial, non-empty dataset", () => {
    expect(phrasalFamilies.length).toBeGreaterThan(500);
    expect(totalPhrasalPhrases).toBeGreaterThan(2000);
    expect(totalPhrasalSenses).toBeGreaterThanOrEqual(totalPhrasalPhrases);
  });

  it("families are sorted A→Z and each count matches its phrases", () => {
    const bases = phrasalFamilies.map((f) => f.base);
    expect([...bases].sort()).toEqual(bases);
    for (const f of phrasalFamilies) {
      expect(f.count, f.base).toBe(f.phrases.length);
    }
  });

  it("every phrase starts with its base verb and has non-empty senses", () => {
    for (const f of phrasalFamilies) {
      const seen = new Set<string>();
      for (const p of f.phrases) {
        expect(p.phrase.startsWith(f.base), `${p.phrase} not in family ${f.base}`).toBe(true);
        expect(seen.has(p.phrase), `duplicate phrase ${p.phrase}`).toBe(false);
        seen.add(p.phrase);
        expect(p.senses.length, p.phrase).toBeGreaterThan(0);
        for (const s of p.senses) {
          expect(s.meaning.trim().length, `${p.phrase}: empty meaning`).toBeGreaterThan(0);
          expect(s.example.trim().length, `${p.phrase}: empty example`).toBeGreaterThan(0);
        }
      }
    }
  });

  it("includes the big families a learner expects (take, get, put)", () => {
    const byBase = new Map(phrasalFamilies.map((f) => [f.base, f]));
    for (const base of ["take", "get", "put", "go", "come"]) {
      expect(byBase.get(base), `missing family: ${base}`).toBeDefined();
    }
    const take = byBase.get("take")!;
    const phrases = take.phrases.map((p) => p.phrase);
    expect(phrases).toContain("take off");
    expect(phrases).toContain("take up");
    expect(phrases).toContain("take in");
  });
});

describe("Italian common core", () => {
  it("every Italian key maps to a real phrase in the dataset", () => {
    const all = new Set(phrasalFamilies.flatMap((f) => f.phrases.map((p) => p.phrase)));
    for (const key of Object.keys(phrasalItalian)) {
      expect(all.has(key), `Italian key not in dataset: ${key}`).toBe(true);
      expect(phrasalItalian[key].trim().length, key).toBeGreaterThan(0);
    }
  });

  it("covers all common families — at least 600 phrasal verbs", () => {
    expect(Object.keys(phrasalItalian).length).toBeGreaterThanOrEqual(600);
  });

  it("covers every phrase in the dataset — the A–Z study set is fully translated", () => {
    const all = phrasalFamilies.flatMap((f) => f.phrases.map((p) => p.phrase));
    for (const phrase of all) {
      expect(phrasalItalian[phrase], `no Italian for ${phrase}`).toBeDefined();
    }
  });
});
