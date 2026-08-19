/**
 * Conflict policy for local-first sync (kept deliberately simple and pure so it
 * can be reasoned about and tested). On sign-in the CLOUD wins for any key it
 * has, while keys that exist only locally (e.g. offline progress made just
 * before signing in) are preserved and will be pushed up. This is last-writer-
 * by-login, not per-field timestamps — good enough for a single learner across
 * their own devices, and never silently deletes data.
 */
export type State = Record<string, unknown>;

export function mergeOnLogin(local: State, cloud: State): State {
  return { ...local, ...cloud };
}

/** Keys present locally but not in the cloud — what a first sign-in should seed upward. */
export function keysToSeed(local: State, cloud: State): string[] {
  return Object.keys(local).filter((k) => !(k in cloud));
}
