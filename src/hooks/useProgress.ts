import { useProgressContext } from "@/app/providers/ProgressProvider";

/** Thin re-export so components import from `@/hooks` rather than a provider path. */
export function useProgress() {
  return useProgressContext();
}
