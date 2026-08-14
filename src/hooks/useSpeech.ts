import { useCallback, useEffect, useRef, useState } from "react";
import { speechService, type RecognitionHandle } from "@/services/speech/SpeechService";

/**
 * React wrapper over SpeechService. Exposes capability flags, `speak` for TTS,
 * and a listen loop that streams the transcript into `transcript`. Cleans up any
 * active recognition/utterance on unmount.
 */
export function useSpeech() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const handleRef = useRef<RecognitionHandle | null>(null);

  const canSpeak = speechService.canSpeak();
  const canListen = speechService.canListen();

  const speak = useCallback((text: string, rate?: number) => {
    speechService.speak(text, { rate });
  }, []);

  const stopListening = useCallback(() => {
    handleRef.current?.stop();
    handleRef.current = null;
    setListening(false);
  }, []);

  const startListening = useCallback(() => {
    setTranscript("");
    const handle = speechService.listen({
      onResult: (t) => setTranscript(t),
      onEnd: () => {
        handleRef.current = null;
        setListening(false);
      },
      onError: () => {
        handleRef.current = null;
        setListening(false);
      },
    });
    handleRef.current = handle;
    setListening(handle !== null);
  }, []);

  useEffect(() => {
    return () => {
      handleRef.current?.stop();
      speechService.stopSpeaking();
    };
  }, []);

  return { canSpeak, canListen, speak, listening, transcript, startListening, stopListening };
}
