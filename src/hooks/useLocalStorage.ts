import { useCallback, useState } from "react";
import { storage } from "@/services";

/**
 * Generic persisted state hook backed by the StorageService abstraction (so it
 * moves to IndexedDB/backend for free later). Not used by the core progress
 * flow — that goes through ProgressService — but handy for UI-only prefs.
 */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => storage.get<T>(key) ?? initial);

  const set = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved =
          typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        storage.set(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, set] as const;
}
