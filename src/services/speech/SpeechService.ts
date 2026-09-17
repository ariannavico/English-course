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

  /** Kept so the utterance isn't garbage-collected mid-speech (a Chrome bug that
   * otherwise cuts playback short or stops it starting at all). */
  private current: SpeechSynthesisUtterance | null = null;

  constructor() {
    // Voices load lazily in some browsers; prime the list so the first click can
    // pick an English voice instead of falling back silently.
    if (this.synth) {
      this.synth.getVoices();
      this.synth.addEventListener?.("voiceschanged", () => this.synth?.getVoices());
    }
  }

  canSpeak(): boolean {
    return this.synth !== null;
  }

  canListen(): boolean {
    return (
      typeof window !== "undefined" &&
      (window.SpeechRecognition != null || window.webkitSpeechRecognition != null)
    );
  }

  /** Speak text with a British English voice. Interrupts anything already playing. */
  speak(text: string, opts: { rate?: number; onEnd?: () => void } = {}): void {
    const synth = this.synth;
    if (!synth) {
      opts.onEnd?.();
      return;
    }
    // Chrome can leave synthesis paused after inactivity — make sure it's running.
    try {
      synth.resume();
    } catch {
      /* not all engines implement resume */
    }
    // Only cancel when something is actually playing: calling cancel() right
    // before speak() on an idle engine can swallow the new utterance (Chrome bug).
    if (synth.speaking || synth.pending) synth.cancel();

    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    u.rate = opts.rate ?? 1;
    const voices = synth.getVoices();
    const voice =
      voices.find((v) => v.lang === "en-GB") ?? voices.find((v) => v.lang.startsWith("en"));
    if (voice) u.voice = voice;
    const done = () => {
      this.current = null;
      opts.onEnd?.();
    };
    u.onend = done;
    u.onerror = done;
    if (this.current) this.current.onend = null; // detach the previous utterance
    this.current = u; // retain against garbage collection until it finishes
    synth.speak(u);
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
