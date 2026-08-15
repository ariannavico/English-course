import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A one-shot countdown timer. `start` begins from `seconds`; it ticks down to 0
 * and fires `onDone` once. Cleans up on unmount. Used by Fluency Mode to force
 * responses under time pressure (spec §19).
 */
export function useCountdown(onDone: () => void) {
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    clear();
    setRunning(false);
  }, [clear]);

  const start = useCallback(
    (seconds: number) => {
      clear();
      setRemaining(seconds);
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            clear();
            setRunning(false);
            doneRef.current();
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    },
    [clear],
  );

  useEffect(() => clear, [clear]);

  return { remaining, running, start, stop };
}
