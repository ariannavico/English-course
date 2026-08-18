import type { SocialItem } from "@/features/social/types";

/**
 * Social English items (spec §27–28), three per function. Each is a real
 * conversational moment; the learner picks the natural move and sees why the
 * others fall flat. Distractors are usually grammatically fine but socially off
 * — too flat, too blunt, or a dead end.
 */
export const socialItems: SocialItem[] = [
  /* ---------------- reacting ---------------- */
  {
    id: "so-react-japan",
    fn: "reacting",
    emoji: "✈️",
    speaker: "A friend",
    context: "“I've just got back from three weeks travelling around Japan.”",
    prompt: "How do you react?",
    level: "B1+",
    principle: "A good reaction shows interest and opens the door for more — a flat acknowledgement kills it.",
    options: [
      { id: "wow", best: true, text: "“Oh wow, how was it? I've always wanted to go.”", feedback: "Perfect: genuine interest plus a question that invites them to say more." },
      { id: "ok", text: "“OK.”", feedback: "A conversation-killer. It's grammatically fine but signals you're not interested." },
      { id: "me", text: "“I went to Spain once.”", feedback: "Turning it straight to yourself skips reacting to their news — do that after you've shown interest." },
      { id: "expensive", text: "“That must have been expensive.”", feedback: "A bit negative as an opener; lead with interest before any practical comment." },
    ],
  },
  {
    id: "so-react-loss",
    fn: "reacting",
    emoji: "😔",
    speaker: "A colleague",
    context: "“I'm a bit down today — my grandmother passed away at the weekend.”",
    prompt: "What do you say?",
    level: "B1+",
    principle: "Bad news needs a sympathy formula first, not problem-solving or a bright side.",
    options: [
      { id: "sorry", best: true, text: "“Oh, I'm so sorry to hear that. That's really hard.”", feedback: "The natural, warm response — acknowledge the loss and their feelings." },
      { id: "nice", text: "“Oh, that's nice.”", feedback: "A classic mishearing/auto-pilot slip — the opposite of what's needed here." },
      { id: "old", text: "“Well, she was probably quite old.”", feedback: "Trying to rationalise a loss sounds cold. Offer sympathy, not logic." },
      { id: "busy", text: "“Anyway, did you finish the report?”", feedback: "Changing the subject dismisses what they just shared." },
    ],
  },
  {
    id: "so-react-goodnews",
    fn: "reacting",
    emoji: "🎉",
    speaker: "A friend",
    context: "“Guess what — I got the job I interviewed for!”",
    prompt: "How do you react?",
    level: "B1+",
    principle: "Match the other person's energy: good news deserves an enthusiastic reaction.",
    options: [
      { id: "congrats", best: true, text: "“That's fantastic — congratulations! You must be thrilled.”", feedback: "Enthusiastic and warm, and it invites them to share how they feel." },
      { id: "flat", text: "“Good for you.”", feedback: "Can sound sarcastic or flat depending on tone — risky for genuinely good news." },
      { id: "worry", text: "“Isn't that a long commute, though?”", feedback: "Raising a downside deflates their moment. Celebrate first." },
      { id: "ok", text: "“Right, OK.”", feedback: "Under-reacting to good news reads as indifference." },
    ],
  },

  /* ---------------- keeping it going ---------------- */
  {
    id: "so-keep-weekend",
    fn: "keeping-going",
    emoji: "☕",
    speaker: "A colleague",
    context: "“Morning! Did you have a good weekend?”",
    prompt: "Keep the small talk going.",
    level: "B1+",
    principle: "Answer, add a small detail, then bounce the question back — that's what keeps small talk alive.",
    options: [
      { id: "bounce", best: true, text: "“Yeah, really relaxing thanks — just caught up with friends. How about you?”", feedback: "Textbook small talk: a bit of detail and the question bounced back." },
      { id: "yes", text: "“Yes.”", feedback: "A dead end. One word forces the other person to do all the work." },
      { id: "long", text: "“Well, on Saturday I woke up at 7, then I had breakfast, then I…”", feedback: "Too much detail too soon — small talk wants a highlight, not a diary." },
      { id: "fine", text: "“Fine.”", feedback: "Flat and closed; add a detail and bounce it back to keep things flowing." },
    ],
  },
  {
    id: "so-keep-stranger",
    fn: "keeping-going",
    emoji: "🥂",
    context: "You're at a party where you barely know anyone, standing next to someone by the food.",
    prompt: "Start a bit of small talk.",
    level: "B2",
    principle: "Safe openers ask about the shared situation, not something too personal.",
    options: [
      { id: "howknow", best: true, text: "“So, how do you know Sam?”", feedback: "A perfect opener — light, relevant to the shared context, easy to answer." },
      { id: "salary", text: "“So, how much do you earn?”", feedback: "Far too personal for a first exchange in English-speaking small talk." },
      { id: "silence", text: "Say nothing and look at your phone.", feedback: "Understandable if you're shy, but it closes the door on any conversation." },
      { id: "weather", text: "“Bit cold for a party, isn't it?”", feedback: "Fine and safe, though a question about the shared situation invites more back." },
    ],
  },
  {
    id: "so-keep-followup",
    fn: "keeping-going",
    emoji: "💬",
    speaker: "Someone you've just met",
    context: "“I actually moved here from Brazil last year.”",
    prompt: "Keep the conversation going.",
    level: "B2",
    principle: "Show interest with a follow-up question rather than jumping to your own story.",
    options: [
      { id: "follow", best: true, text: "“Oh really? What brought you here — work, or something else?”", feedback: "A follow-up question shows you're listening and gives them room to open up." },
      { id: "me", text: "“Cool. Anyway, I was saying earlier…”", feedback: "Brushing past their news to return to yourself feels dismissive." },
      { id: "portuguese", text: "“So you speak Spanish then.”", feedback: "A confident wrong guess (Brazil = Portuguese) — and it corrects rather than connects." },
      { id: "nice", text: "“Nice.”", feedback: "A one-word reaction lets a promising thread die." },
    ],
  },

  /* ---------------- managing turns ---------------- */
  {
    id: "so-turn-interrupt",
    fn: "turn-taking",
    emoji: "🙋",
    context: "In a meeting, a colleague is mid-flow but you have a relevant point to add.",
    prompt: "How do you come in?",
    level: "B2",
    principle: "Interrupting politely means signalling it and softening it — not just barging in.",
    options: [
      { id: "jumpin", best: true, text: "“Sorry to jump in — can I just add something quickly?”", feedback: "The natural way to interrupt: flag it, apologise lightly, keep it brief." },
      { id: "stop", text: "“Stop. Listen to me now.”", feedback: "Blunt to the point of rude in English — it will land badly." },
      { id: "wait", text: "Wait silently until they finish 10 minutes later.", feedback: "You may never get the turn, and the point passes. Polite interruption is a skill." },
      { id: "actually", text: "“Actually, you're wrong about that.”", feedback: "Leads with contradiction — signal the interruption before challenging the content." },
    ],
  },
  {
    id: "so-turn-comeback",
    fn: "turn-taking",
    emoji: "🔁",
    context: "You were making a point when someone interrupted. The interruption is over and you want to finish.",
    prompt: "How do you return to your point?",
    level: "B2",
    principle: "A short signposting phrase reclaims the floor smoothly without seeming annoyed.",
    options: [
      { id: "asisaid", best: true, text: "“Anyway, as I was saying, I think we should test it first.”", feedback: "“Anyway, as I was saying…” is the standard, graceful way to reclaim your turn." },
      { id: "youinterrupted", text: "“You interrupted me, that was rude.”", feedback: "Calling it out makes it awkward; just signpost your way back in." },
      { id: "restart", text: "Start your whole point again from the beginning.", feedback: "Repeating everything tests everyone's patience — a short signpost is enough." },
      { id: "drop", text: "Give up and say nothing.", feedback: "Your point had value — reclaiming the turn politely is part of managing a conversation." },
    ],
  },
  {
    id: "so-turn-think",
    fn: "turn-taking",
    emoji: "🤔",
    speaker: "An interviewer",
    context: "“So, where do you see yourself in five years?”",
    prompt: "You need a moment to think. What do you do?",
    level: "B2",
    principle: "Buy thinking time out loud — silence feels longer to you than to them, but a filler keeps the floor.",
    options: [
      { id: "buy", best: true, text: "“That's a good question — let me think for a second.”", feedback: "A natural way to hold the floor while you gather your thoughts." },
      { id: "silence", text: "Go completely silent for ten seconds.", feedback: "Long silence reads as being stuck; a short filler phrase is much smoother." },
      { id: "um", text: "“Um… er… um… so… um…”", feedback: "Endless fillers signal panic. One clear thinking phrase works far better." },
      { id: "dunno", text: "“I don't know really.”", feedback: "Closes the question down instead of buying you time to answer it." },
    ],
  },

  /* ---------------- wrapping up ---------------- */
  {
    id: "so-wrap-leave",
    fn: "wrapping-up",
    emoji: "👋",
    context: "You've been chatting with someone at an event, but you need to move on.",
    prompt: "How do you end the conversation?",
    level: "B1+",
    principle: "Close warmly with a signal + a positive note — don't just vanish or stop abruptly.",
    options: [
      { id: "signal", best: true, text: "“Anyway, I'd better get going — it was really nice chatting with you.”", feedback: "A clear, warm close: a signal (“anyway, I'd better…”) plus a positive note." },
      { id: "bye", text: "“Bye.” and walk off mid-topic.", feedback: "Too abrupt — it can feel like you're escaping rather than closing." },
      { id: "nothing", text: "Just drift away without saying anything.", feedback: "Leaves the other person mid-sentence; a quick signal costs nothing and feels polite." },
      { id: "lie", text: "“Sorry, someone's calling me,” when no one is.", feedback: "You don't need an excuse — a genuine, friendly signal works better." },
    ],
  },
  {
    id: "so-wrap-phone",
    fn: "wrapping-up",
    emoji: "📞",
    context: "You're on the phone with a friend and it's time to hang up.",
    prompt: "How do you wrap up the call?",
    level: "B1+",
    principle: "English closes calls with a little routine: signal, warm line, goodbye.",
    options: [
      { id: "letyougo", best: true, text: "“Right, I'll let you go — great to catch up. Speak soon!”", feedback: "“I'll let you go” is the classic, friendly way to close a call." },
      { id: "hangup", text: "Just hang up once you've said what you needed.", feedback: "Ending without a closing line feels cold, even between friends." },
      { id: "endnow", text: "“This conversation is finished now.”", feedback: "Grammatically fine but oddly formal and cold for a friend." },
      { id: "keeptalking", text: "Keep finding new topics so it never ends.", feedback: "Not letting a call close can be just as awkward as ending it too abruptly." },
    ],
  },
  {
    id: "so-wrap-favour",
    fn: "wrapping-up",
    emoji: "🙏",
    context: "A colleague has just spent twenty minutes helping you fix a problem.",
    prompt: "How do you close it off?",
    level: "B1+",
    principle: "Round off help with warm, specific thanks — it maintains the relationship.",
    options: [
      { id: "thanks", best: true, text: "“Thanks so much for this — I really appreciate you taking the time.”", feedback: "Warm and specific: it names what they did and values their time." },
      { id: "ok", text: "“OK, done.” and turn back to your screen.", feedback: "Skipping the thanks after real help can seem to take them for granted." },
      { id: "owe", text: "“You owe me one now, ha.”", feedback: "Gets the direction of the favour backwards — they helped you." },
      { id: "sorry", text: "“Sorry for wasting your time.”", feedback: "Over-apologising undercuts the moment; genuine thanks lands better than an apology." },
    ],
  },
];
