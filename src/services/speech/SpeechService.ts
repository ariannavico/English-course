/**
 * Thin wrapper over the browser Web Speech API: text-to-speech for Listening and
 * speech recognition for Speaking (spec §19, §29). Everything degrades: if the
 * API is missing (Firefox recognition, private modes), callers fall back to text.
 * No backend, no network — consistent with the offline-first design.
 */

export type RecognitionHandle = { stop: () => void };

export class SpeechService {
  private synth: SpeechSynthesis | null =
    typeof window !== "undefined" ? window.speechSynthesis ?? null : null;

  canSpeak(): boolean {
    return this.synth !== null;
  }

  canListen(): boolean {
    return (
      typeof window !== "undefined" &&
      (window.SpeechRecognition != null || window.webkitSpeechRecognition != null)
    );
  }

  /** Speak text with a British English voice. Cancels anything already playing. */
  speak(text: string, opts: { rate?: number; onEnd?: () => void } = {}): void {
    if (!this.synth) {
      opts.onEnd?.();
      return;
    }
    this.synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    u.rate = opts.rate ?? 1;
    if (opts.onEnd) u.onend = () => opts.onEnd?.();
    // Prefer an English voice if the system offers one.
    const voice = this.synth.getVoices().find((v) => v.lang.startsWith("en"));
    if (voice) u.voice = voice;
    this.synth.speak(u);
  }

  stopSpeaking(): void {
    this.synth?.cancel();
  }

  /**
   * Start recognition. Calls `onResult` with the (interim/final) transcript and
   * `onEnd` when it stops. Returns a handle to stop early, or null if unsupported.
   */
  listen(handlers: {
    onResult: (transcript: string, isFinal: boolean) => void;
    onEnd?: () => void;
    onError?: (message: string) => void;
  }): RecognitionHandle | null {
    const Ctor = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!Ctor) return null;

    const rec = new Ctor();
    rec.lang = "en-GB";
    rec.interimResults = true;
    rec.continuous = true;
    rec.maxAlternatives = 1;

    rec.onresult = (e) => {
      let transcript = "";
      let isFinal = false;
      for (let i = 0; i < e.results.length; i++) {
        const r = e.results[i];
        transcript += r[0].transcript;
        if (r.isFinal) isFinal = true;
      }
      handlers.onResult(transcript.trim(), isFinal);
    };
    rec.onerror = () => handlers.onError?.("Speech recognition error");
    rec.onend = () => handlers.onEnd?.();

    try {
      rec.start();
    } catch {
      return null;
    }
    return { stop: () => rec.stop() };
  }
}

export const speechService = new SpeechService();
