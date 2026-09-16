import { useEffect, useState } from "react";
import { Icon } from "@/components/ui";
import { useSpeech } from "@/hooks/useSpeech";
import { normalize } from "@/utils/normalization";
import styles from "./pronounce.module.css";

type Verdict = "ok" | "close" | "no";

/** Score a heard transcript against the target: exact/contained = ok, some word
 * overlap = close, otherwise no. Punctuation/case/accents are ignored. */
function judge(target: string, heard: string): Verdict {
  const t = normalize(target);
  const h = normalize(heard);
  if (!h) return "no";
  if (h === t || h.includes(t) || t.includes(h)) return "ok";
  const tw = new Set(t.split(" ").filter(Boolean));
  const overlap = h.split(" ").filter((w) => tw.has(w)).length;
  return overlap > 0 ? "close" : "no";
}

const VERDICT = {
  ok: { label: "Ottima pronuncia!", cls: "ok" },
  close: { label: "Ci sei quasi — riprova", cls: "close" },
  no: { label: "Non ci siamo — riprova", cls: "no" },
} as const;

/** Record the learner saying `target` and give instant feedback by comparing the
 * speech-recognition transcript. Hidden where recognition isn't supported. */
export function PronounceCheck({ target }: { target: string }) {
  const { canListen, listening, transcript, startListening, stopListening } = useSpeech();
  const [verdict, setVerdict] = useState<Verdict | null>(null);

  // Evaluate once recognition stops and we have something.
  useEffect(() => {
    if (!listening && transcript) setVerdict(judge(target, transcript));
  }, [listening, transcript, target]);

  if (!canListen) return null;

  function toggle() {
    if (listening) {
      stopListening();
    } else {
      setVerdict(null);
      startListening();
    }
  }

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={`${styles.mic} ${listening ? styles.recording : ""}`}
        onClick={toggle}
        aria-label={listening ? "Ferma" : "Prova a pronunciare"}
        title={listening ? "Ferma" : "Prova a pronunciare"}
      >
        <Icon name="mic" size={16} />
        {listening ? "Sto ascoltando…" : "Prova a dirlo"}
      </button>
      {(transcript || verdict) && (
        <div className={styles.result}>
          {transcript && <span className={styles.heard}>“{transcript}”</span>}
          {verdict && <span className={styles[VERDICT[verdict].cls]}>{VERDICT[verdict].label}</span>}
        </div>
      )}
    </div>
  );
}
