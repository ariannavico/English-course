/**
 * Answer-normalisation helpers. Learner input is messy: trailing spaces,
 * smart quotes, double spaces, casing, final punctuation. We normalise both
 * the input and the accepted answers before comparing.
 */

/** Collapse whitespace, lowercase, strip most punctuation and smart quotes. */
export function normalize(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[‘’]/g, "'") // smart single quotes
    .replace(/[“”]/g, '"') // smart double quotes
    .replace(/[.,!?;:]+$/g, "") // trailing sentence punctuation
    .replace(/\s+/g, " ");
}

/**
 * Does `input` match any accepted answer? When `caseSensitive`, only
 * whitespace is normalised (casing and punctuation are preserved).
 */
export function matchesAnswer(
  input: string,
  accepted: readonly string[],
  caseSensitive = false,
): boolean {
  const prep = (s: string) =>
    caseSensitive ? s.trim().replace(/\s+/g, " ") : normalize(s);
  const needle = prep(input);
  return accepted.some((a) => prep(a) === needle);
}

/** Loose containment check used for self-check hints (key elements present). */
export function containsElement(input: string, element: string): boolean {
  return normalize(input).includes(normalize(element));
}
