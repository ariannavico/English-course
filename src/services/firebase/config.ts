import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";

/**
 * Firebase is OPTIONAL and LAZY. Config comes from Vite env vars
 * (VITE_FIREBASE_*). When they're absent the whole cloud layer stays dormant and
 * the app runs exactly as before (guest profile, localStorage, fully offline).
 * When present, the Firebase SDK is dynamically imported on first use, so the
 * ~600 KB it weighs is NEVER downloaded by users who aren't signing in. Add the
 * config + enable Google sign-in in the Firebase console to switch it on — see
 * .env.example.
 */
const env = import.meta.env as Record<string, string | undefined>;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

/** Enough config present to actually talk to Firebase? (Synchronous — no SDK import.) */
export function isFirebaseConfigured(): boolean {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
}

export interface FirebaseHandles {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
}

let handlesPromise: Promise<FirebaseHandles | null> | null = null;

/** Dynamically import + initialise Firebase once. Resolves null when unconfigured. */
export function getFirebase(): Promise<FirebaseHandles | null> {
  if (!isFirebaseConfigured()) return Promise.resolve(null);
  if (!handlesPromise) {
    handlesPromise = (async () => {
      const [{ initializeApp }, { getAuth }, { getFirestore }] = await Promise.all([
        import("firebase/app"),
        import("firebase/auth"),
        import("firebase/firestore"),
      ]);
      const app = initializeApp(firebaseConfig as Record<string, string>);
      return { app, auth: getAuth(app), db: getFirestore(app) };
    })();
  }
  return handlesPromise;
}
