import { getFirebase, isFirebaseConfigured } from "../firebase/config";
import type { State } from "./mergeState";

const PUSH_DEBOUNCE_MS = 800;

/**
 * Cloud sync for a signed-in profile, using the lazily-loaded Firestore SDK. One
 * document per user (`users/<uid>`) holds all app state, keyed exactly like
 * localStorage. Writes are debounced and best-effort: localStorage is always the
 * synchronous source of truth, so an offline or failed push never blocks the app
 * — it reconciles on the next sign-in (pull) or the next successful write. No-op
 * when Firebase is unconfigured.
 */
export class SyncService {
  private pending: State = {};
  private timer: ReturnType<typeof setTimeout> | null = null;
  private uid: string | null = null;

  /** Read the user's cloud state, or null if there's no document yet / no backend. */
  async pull(uid: string): Promise<State | null> {
    const fb = await getFirebase();
    if (!fb) return null;
    try {
      const { doc, getDoc } = await import("firebase/firestore");
      const snap = await getDoc(doc(fb.db, "users", uid));
      return snap.exists() ? (snap.data() as State) : null;
    } catch {
      return null; // offline or permission issue — fall back to local
    }
  }

  /** Overwrite/merge the whole state up to the cloud (used to seed a new account). */
  async pushAll(uid: string, state: State): Promise<void> {
    const fb = await getFirebase();
    if (!fb) return;
    try {
      const { doc, setDoc } = await import("firebase/firestore");
      await setDoc(doc(fb.db, "users", uid), state, { merge: true });
    } catch {
      /* best-effort */
    }
  }

  /** Queue a single key for a debounced cloud write. */
  queue(uid: string, key: string, value: unknown): void {
    if (!isFirebaseConfigured()) return;
    this.uid = uid;
    this.pending[key] = value;
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => void this.flush(), PUSH_DEBOUNCE_MS);
  }

  private async flush(): Promise<void> {
    const fb = await getFirebase();
    if (!fb || !this.uid) return;
    const batch = this.pending;
    this.pending = {};
    this.timer = null;
    if (Object.keys(batch).length === 0) return;
    try {
      const { doc, setDoc } = await import("firebase/firestore");
      await setDoc(doc(fb.db, "users", this.uid), batch, { merge: true });
    } catch {
      // Push failed (offline): fold the batch back in so it retries on the next write.
      this.pending = { ...batch, ...this.pending };
    }
  }
}

export const syncService = new SyncService();
