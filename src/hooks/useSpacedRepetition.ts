import { useCallback, useState } from "react";
import type { ReviewRating, ReviewableType, SpacedRepetitionItem } from "@/types";
import { spacedRepetitionService } from "@/services";

/** React wrapper over SpacedRepetitionService with a re-render trigger. */
export function useSpacedRepetition() {
  const [, setTick] = useState(0);
  const refresh = useCallback(() => setTick((t) => t + 1), []);

  const dueItems: SpacedRepetitionItem[] = spacedRepetitionService.getDueItems();
  const weakItems: SpacedRepetitionItem[] = spacedRepetitionService.getWeakItems();

  const recordReview = useCallback(
    (id: string, type: ReviewableType, rating: ReviewRating) => {
      const next = spacedRepetitionService.recordReview(id, type, rating);
      refresh();
      return next;
    },
    [refresh],
  );

  return { dueItems, weakItems, recordReview, refresh };
}
