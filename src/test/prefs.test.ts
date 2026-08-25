import { describe, expect, it } from "vitest";
import { showItalianL1 } from "@/utils/prefs";

type S = Parameters<typeof showItalianL1>[0];
const base: S = { showItalian: true, hideTranslations: false, b2Mode: false };

describe("showItalianL1 — progressive no-translation (§46)", () => {
  it("shows L1 by default", () => {
    expect(showItalianL1(base)).toBe(true);
  });

  it("hides L1 when Show Italian is off", () => {
    expect(showItalianL1({ ...base, showItalian: false })).toBe(false);
  });

  it("hides L1 in explicit no-translation mode", () => {
    expect(showItalianL1({ ...base, hideTranslations: true })).toBe(false);
  });

  it("hides L1 in B2 Mode (progressive removal)", () => {
    expect(showItalianL1({ ...base, b2Mode: true })).toBe(false);
  });
});
