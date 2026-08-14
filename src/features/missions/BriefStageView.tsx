import { useState } from "react";
import type { BriefStage } from "./types";
import { Button, Icon } from "@/components/ui";
import { useSpeech } from "@/hooks/useSpeech";
import { useProgress } from "@/hooks/useProgress";
import styles from "./missions.module.css";

/** Reads the situation / a line of dialogue, with an optional "listen" (TTS) button. */
export function BriefStageView({ stage, onAdvance }: { stage: BriefStage; onAdvance: () => void }) {
  const { canSpeak, speak } = useSpeech();
  const { settings } = useProgress();
  const [showHint, setShowHint] = useState(false);

  return (
    <div className={styles.brief}>
      {stage.speaker && <span className={styles.speaker}>{stage.speaker}</span>}
      <p className={`${styles.briefText} ${stage.speaker ? styles.briefQuote : ""}`}>{stage.text}</p>

      <div className={styles.toolRow}>
        {stage.audio && canSpeak && (
          <Button size="sm" variant="ghost" onClick={() => speak(stage.text)}>
            <Icon name="repeat" size={16} /> Listen
          </Button>
        )}
        {stage.italianHint && (settings.showItalian || showHint) && (
          <span className={styles.hint}>🇮🇹 {stage.italianHint}</span>
        )}
        {stage.italianHint && !settings.showItalian && !showHint && (
          <Button size="sm" variant="ghost" onClick={() => setShowHint(true)}>
            Need a hint?
          </Button>
        )}
      </div>

      <div className={styles.toolRow}>
        <Button variant="primary" onClick={onAdvance}>
          Continue
        </Button>
      </div>
    </div>
  );
}
