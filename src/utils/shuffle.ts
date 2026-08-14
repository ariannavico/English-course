/** Fisher–Yates shuffle. Returns a new array; does not mutate the input. */
export function shuffle<T>(input: readonly T[]): T[] {
  const arr = input.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Pick up to `n` distinct random items. */
export function sample<T>(input: readonly T[], n: number): T[] {
  return shuffle(input).slice(0, Math.max(0, n));
}
