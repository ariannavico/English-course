import type { User } from "firebase/auth";
import { getFirebase, isFirebaseConfigured } from "../firebase/config";

/** The app's view of a signed-in user (a small, stable shape). */
export interface AuthUser {
  uid: string;
  name: string | null;
  email: string | null;
  photoURL: string | null;
}

export type AuthListener = (user: AuthUser | null) => void;

function toAuthUser(u: User): AuthUser {
  return { uid: u.uid, name: u.displayName, email: u.email, photoURL: u.photoURL };
}

/**
 * Authentication facade. Wraps Firebase Auth (Google sign-in), loaded lazily.
 * When Firebase is unconfigured every method is a safe no-op and the user is
 * always "guest" (null), so the app runs local-only without a backend and never
 * downloads the SDK.
 */
export class AuthService {
  get available(): boolean {
    return isFirebaseConfigured();
  }

  /** Subscribe to auth changes. Emits once with the current state. Returns an unsubscribe fn. */
  onChange(listener: AuthListener): () => void {
    if (!isFirebaseConfigured()) {
      const t = setTimeout(() => listener(null), 0); // emit guest on next tick
      return () => clearTimeout(t);
    }
    let cancelled = false;
    let unsub: () => void = () => {};
    void (async () => {
      const fb = await getFirebase();
      if (!fb || cancelled) return;
      const { onAuthStateChanged, getRedirectResult } = await import("firebase/auth");
      // Finalise a pending redirect sign-in (also drives onAuthStateChanged).
      getRedirectResult(fb.auth).catch(() => {});
      unsub = onAuthStateChanged(fb.auth, (u) => listener(u ? toAuthUser(u) : null));
    })();
    return () => {
      cancelled = true;
      unsub();
    };
  }

  async signInWithGoogle(): Promise<AuthUser | null> {
    const fb = await getFirebase();
    if (!fb) return null;
    // Full-page redirect rather than a popup: avoids desktop Chrome's COOP
    // blocking the popup's window.close, and needs no extra OAuth redirect URI
    // (the firebaseapp.com handler is authorised by default). Sign-in completes
    // when the page returns — onAuthStateChanged / getRedirectResult pick it up.
    const { GoogleAuthProvider, signInWithRedirect } = await import("firebase/auth");
    await signInWithRedirect(fb.auth, new GoogleAuthProvider());
    return null;
  }

  async signOut(): Promise<void> {
    const fb = await getFirebase();
    if (!fb) return;
    const { signOut } = await import("firebase/auth");
    await signOut(fb.auth);
  }
}

export const authService = new AuthService();
