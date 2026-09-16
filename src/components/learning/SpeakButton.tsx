import { Icon } from "@/components/ui";
import { speechService } from "@/services";
import styles from "./speakButton.module.css";

/** A small 🔊 button that reads `text` aloud (British English TTS). Renders
 * nothing when the browser has no speech synthesis. */
export function SpeakButton({
  text,
  size = 16,
  className,
}: {
  text: string;
  size?: number;
  className?: string;
}) {
  if (!speechService.canSpeak()) return null;
  return (
    <button
      type="button"
      className={`${styles.btn} ${className ?? ""}`}
      aria-label={`Ascolta: ${text}`}
      title="Ascolta la pronuncia"
      onClick={(e) => {
        e.stopPropagation();
        speechService.speak(text);
      }}
    >
      <Icon name="volume" size={size} />
    </button>
  );
}
