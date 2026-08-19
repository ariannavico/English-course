import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { storage } from "@/services";
import { authService, type AuthUser } from "@/services/auth/AuthService";
import { syncService } from "@/services/sync/SyncService";
import { mergeOnLogin } from "@/services/sync/mergeState";
import { GUEST_NAMESPACE } from "@/services/storage/LocalStorageService";

type AuthStatus = "loading" | "ready";

interface AuthContextValue {
  status: AuthStatus;
  user: AuthUser | null;
  /** Is a real backend configured (so sign-in is possible)? */
  available: boolean;
  /** Namespace key the app subtree is mounted under — changes on profile switch. */
  dataKey: string;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Owns the auth state and, crucially, the storage PROFILE. On every auth change
 * it points localStorage at the right profile (uid or guest), reconciles with
 * the cloud (pull + seed), wires write-through sync, and bumps `dataKey` so the
 * app subtree remounts and re-reads its data synchronously under the new
 * profile. Local-first: the app never blocks on the network.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const available = authService.available;
  const [status, setStatus] = useState<AuthStatus>(available ? "loading" : "ready");
  const [user, setUser] = useState<AuthUser | null>(null);
  const [dataKey, setDataKey] = useState<string>(GUEST_NAMESPACE);
  // Guard against overlapping profile switches (fast sign-in/out).
  const switchId = useRef(0);

  const applyUser = useCallback(async (next: AuthUser | null) => {
    const myId = ++switchId.current;
    storage.onSet = undefined; // pause cloud pushes during the switch

    if (!next) {
      storage.setNamespace(GUEST_NAMESPACE);
      if (myId === switchId.current) {
        setUser(null);
        setDataKey(GUEST_NAMESPACE);
        setStatus("ready");
      }
      return;
    }

    const uid = next.uid;
    // Capture guest data in case this is a brand-new account to seed.
    storage.setNamespace(GUEST_NAMESPACE);
    const guest = storage.snapshot();
    storage.setNamespace(uid);
    const localUid = storage.snapshot();

    const cloud = await syncService.pull(uid);
    if (myId !== switchId.current) return; // a newer switch superseded us

    if (cloud) {
      storage.hydrate(mergeOnLogin(localUid, cloud));
    } else if (Object.keys(localUid).length === 0 && Object.keys(guest).length > 0) {
      storage.hydrate(guest); // brand-new account on a device with guest data
    }
    // Push the reconciled state up (idempotent; seeds a new cloud doc).
    void syncService.pushAll(uid, storage.snapshot());

    storage.onSet = (key, value) => syncService.queue(uid, key, value);
    if (myId === switchId.current) {
      setUser(next);
      setDataKey(uid);
      setStatus("ready");
    }
  }, []);

  useEffect(() => {
    const unsub = authService.onChange((u) => void applyUser(u));
    return unsub;
  }, [applyUser]);

  const signIn = useCallback(async () => {
    try {
      await authService.signInWithGoogle();
    } catch {
      /* popup closed / cancelled — stay as we are */
    }
  }, []);

  const signOut = useCallback(async () => {
    await authService.signOut();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ status, user, available, dataKey, signIn, signOut }),
    [status, user, available, dataKey, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
