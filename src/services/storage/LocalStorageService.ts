import type { StorageService } from "./StorageService";

const NAMESPACE = "eb1.";

/**
 * localStorage-backed StorageService. All keys are namespaced with "eb1." so we
 * never collide with other apps and can `clearAll()` safely. Fails soft: a
 * corrupt value or an unavailable localStorage (private mode, quota) degrades
 * to an in-memory map rather than throwing across the app.
 */
export class LocalStorageService implements StorageService {
  private memoryFallback = new Map<string, string>();
  private usable: boolean;

  constructor() {
    this.usable = LocalStorageService.probe();
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

  private full(key: string): string {
    return NAMESPACE + key;
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
        return;
      } catch {
        this.usable = false; // quota / disabled — fall through to memory
      }
    }
    this.memoryFallback.set(this.full(key), raw);
  }

  remove(key: string): void {
    if (this.usable) window.localStorage.removeItem(this.full(key));
    this.memoryFallback.delete(this.full(key));
  }

  keys(): string[] {
    const result: string[] = [];
    if (this.usable) {
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(NAMESPACE)) result.push(k.slice(NAMESPACE.length));
      }
    } else {
      for (const k of this.memoryFallback.keys())
        result.push(k.slice(NAMESPACE.length));
    }
    return result;
  }

  clearAll(): void {
    for (const k of this.keys()) this.remove(k);
  }
}

/** Shared singleton used throughout the app. */
export const storage: StorageService = new LocalStorageService();
