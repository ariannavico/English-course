import type { StorageService } from "./StorageService";

const NAMESPACE = "eb1.";
/** The guest (not-signed-in) profile. Existing local data migrates under this. */
export const GUEST_NAMESPACE = "local";
/** Keys kept global (device-level), never namespaced per user. */
const GLOBAL_KEYS = new Set(["theme"]);

/**
 * localStorage-backed StorageService, now PER-USER. Every key lives under a
 * profile namespace: `eb1.<profile>.<key>`. The guest profile ("local") holds
 * data before sign-in; signing in switches the namespace to the user's uid so
 * each learner has their own path on the device, while a signed-in session also
 * syncs to the cloud (see SyncService) with localStorage as the offline cache.
 *
 * Fails soft: a corrupt value or unavailable localStorage degrades to an
 * in-memory map rather than throwing across the app.
 */
export class LocalStorageService implements StorageService {
  private memoryFallback = new Map<string, string>();
  private usable: boolean;
  private ns: string = GUEST_NAMESPACE;
  /** Called after every set, so a signed-in session can push the change to the cloud. */
  onSet?: (key: string, value: unknown) => void;

  constructor() {
    this.usable = LocalStorageService.probe();
    this.migrateLegacy();
  }

  private static probe(): boolean {
    try {
      const k = "__eb1_probe__";
      window.localStorage.setItem(k, "1");
      window.localStorage.removeItem(k);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * One-time move of pre-namespacing keys (`eb1.<key>`) into the guest profile
   * (`eb1.local.<key>`), so nobody loses their existing progress. `eb1.theme`
   * stays global (the pre-React theme preload reads it directly). Idempotent:
   * namespaced keys (two segments) are never matched.
   */
  private migrateLegacy(): void {
    if (!this.usable) return;
    try {
      const legacy: string[] = [];
      for (let i = 0; i < window.localStorage.length; i++) {
        const raw = window.localStorage.key(i);
        // `eb1.progress` (one segment) is legacy; `eb1.local.progress` (two) is not.
        if (raw && /^eb1\.[^.]+$/.test(raw) && raw !== `${NAMESPACE}theme`) legacy.push(raw);
      }
      for (const raw of legacy) {
        const seg = raw.slice(NAMESPACE.length);
        const target = `${NAMESPACE}${GUEST_NAMESPACE}.${seg}`;
        if (window.localStorage.getItem(target) == null) {
          const val = window.localStorage.getItem(raw);
          if (val != null) window.localStorage.setItem(target, val);
        }
        window.localStorage.removeItem(raw);
      }
    } catch {
      /* migration is best-effort */
    }
  }

  /** Switch the active profile (uid on sign-in, "local" as guest). */
  setNamespace(ns: string): void {
    this.ns = ns || GUEST_NAMESPACE;
  }
  getNamespace(): string {
    return this.ns;
  }

  private full(key: string): string {
    if (GLOBAL_KEYS.has(key)) return NAMESPACE + key;
    return `${NAMESPACE}${this.ns}.${key}`;
  }

  get<T>(key: string): T | null {
    const raw = this.usable
      ? window.localStorage.getItem(this.full(key))
      : (this.memoryFallback.get(this.full(key)) ?? null);
    if (raw == null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    const raw = JSON.stringify(value);
    if (this.usable) {
      try {
        window.localStorage.setItem(this.full(key), raw);
      } catch {
        this.usable = false; // quota / disabled — fall through to memory
        this.memoryFallback.set(this.full(key), raw);
      }
    } else {
      this.memoryFallback.set(this.full(key), raw);
    }
    if (!GLOBAL_KEYS.has(key)) this.onSet?.(key, value);
  }

  remove(key: string): void {
    if (this.usable) window.localStorage.removeItem(this.full(key));
    this.memoryFallback.delete(this.full(key));
  }

  keys(): string[] {
    const prefix = `${NAMESPACE}${this.ns}.`;
    const result: string[] = [];
    if (this.usable) {
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(prefix)) result.push(k.slice(prefix.length));
      }
    } else {
      for (const k of this.memoryFallback.keys())
        if (k.startsWith(prefix)) result.push(k.slice(prefix.length));
    }
    return result;
  }

  clearAll(): void {
    for (const k of this.keys()) this.remove(k);
  }

  /** All keys+values for the current profile, parsed — used to seed/sync the cloud. */
  snapshot(): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    for (const k of this.keys()) {
      const v = this.get(k);
      if (v != null) out[k] = v;
    }
    return out;
  }

  /**
   * Bulk-write values into the current profile (used when pulling from the
   * cloud). Silent: does NOT fire `onSet`, so a pull doesn't echo every key
   * straight back up to the cloud.
   */
  hydrate(data: Record<string, unknown>): void {
    const hook = this.onSet;
    this.onSet = undefined;
    try {
      for (const [k, v] of Object.entries(data)) {
        if (v != null) this.set(k, v);
      }
    } finally {
      this.onSet = hook;
    }
  }
}

/** Shared singleton used throughout the app. Concrete type so the auth layer can switch profiles. */
export const storage = new LocalStorageService();
