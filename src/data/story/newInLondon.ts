import type { Story } from "@/features/story/types";

/**
 * "New in London" — a four-episode story. Each episode recycles earlier language
 * in a new situation: present tenses for routines, past/present perfect for
 * narrating, requesting, small talk, and travel/home/work vocabulary.
 */
export const newInLondon: Story = {
  id: "story-london",
  emoji: "🇬🇧",
  title: "New in London",
  premise:
    "You've just moved to London for a new job. Over your first few days you'll find your way around, meet your flatmate, start work, and handle a problem — all in English.",
  level: "B1+",
  episodes: [
    {
      id: "london-ep1",
      number: 1,
      title: "Arrival",
      emoji: "🛬",
      summary: "You land at Heathrow and have to get to your new flat.",
      focus: ["requesting", "travel vocabulary", "present simple"],
      estimatedMinutes: 8,
      beats: [
        {
          kind: "brief",
          id: "ep1-b1",
          label: "The situation",
          text: "The plane lands. You collect your suitcase, step out into the arrivals hall at Heathrow, and realise you have no idea how to get to your area — Camden. Your phone battery is almost dead.",
          italianHint: "Sei appena atterrato/a a Londra e devi arrivare a Camden.",
          audio: true,
        },
        {
          kind: "produce",
          id: "ep1-b2",
          label: "Ask for help",
          prompt: "Stop a member of staff and ask, politely, how to get to Camden by public transport.",
          targetSkills: ["requesting", "travel vocabulary"],
          suggestedChunks: ["Excuse me, could you tell me...", "What's the best way to...", "Is it far?"],
          keyElements: ["Camden", "get", "how"],
          modelAnswer:
            "Excuse me, sorry to bother you — could you tell me the best way to get to Camden from here? Is it far by public transport?",
          allowSpeech: true,
        },
        {
          kind: "brief",
          id: "ep1-b3",
          label: "The answer",
          speaker: "Airport staff",
          text: "“Camden? Easiest thing is the Piccadilly line to King's Cross, then change to the Northern line. About an hour. The Underground's just down those stairs.”",
          audio: true,
        },
        {
          kind: "choice",
          id: "ep1-b4",
          label: "Decide",
          prompt: "It's been a long flight and your phone is dying. What do you do?",
          options: [
            { id: "tube", text: "Take the Underground as suggested", feedback: "Cheap and reliable. You'd say: “Great, thanks — I'll take the tube.”" },
            { id: "taxi", text: "Get a taxi to save energy", feedback: "Comfortable but pricey from Heathrow. “I think I'll just grab a taxi” is natural." },
            { id: "charge", text: "Find somewhere to charge your phone first", feedback: "Sensible — “Is there anywhere I can charge my phone?” buys you time." },
          ],
          followUpWhy: "Say why, in one sentence.",
        },
        {
          kind: "produce",
          id: "ep1-b5",
          label: "Arrive",
          prompt: "You finally reach the flat. Your new flatmate opens the door. Introduce yourself and say something friendly.",
          targetSkills: ["small talk", "introductions"],
          suggestedChunks: ["Hi, I'm...", "It's great to finally...", "Sorry, I'm a bit..."],
          keyElements: ["hi", "I'm"],
          modelAnswer:
            "Hi, you must be Sam — I'm Alex, the new flatmate. It's great to finally meet you! Sorry, I'm a bit tired after the flight, but I'm really happy to be here.",
          naturalnessNotes: ["“You must be Sam” is a warm, natural way to greet someone you've only messaged."],
          allowSpeech: true,
        },
      ],
    },
    {
      id: "london-ep2",
      number: 2,
      title: "Settling in",
      emoji: "🛒",
      summary: "You explore the neighbourhood and do your first food shop.",
      focus: ["asking for directions", "present continuous", "shopping vocabulary"],
      estimatedMinutes: 8,
      beats: [
        {
          kind: "brief",
          id: "ep2-b1",
          label: "The next morning",
          text: "You wake up early — jet lag. The fridge is empty. You decide to go out, learn the area, and buy some food for the week.",
          audio: true,
        },
        {
          kind: "produce",
          id: "ep2-b2",
          label: "Ask a local",
          prompt: "Ask a neighbour where the nearest supermarket is and whether it's open now.",
          targetSkills: ["asking for directions", "requesting"],
          suggestedChunks: ["Do you know where...?", "Is there a ... nearby?", "What time does it...?"],
          keyElements: ["supermarket", "where", "open"],
          modelAnswer:
            "Morning! Sorry to bother you — do you know if there's a supermarket nearby, and whether it's open yet?",
          allowSpeech: true,
        },
        {
          kind: "brief",
          id: "ep2-b3",
          label: "At the till",
          speaker: "Cashier",
          text: "You fill your basket and get to the till. The cashier scans everything and says: “That's £24.60. Do you have a Nectar card? … No worries. Card or cash?”",
          audio: true,
        },
        {
          kind: "produce",
          id: "ep2-b4",
          label: "Handle a small problem",
          prompt:
            "Your card is declined — probably because it's foreign. Explain the situation to the cashier and ask what you can do.",
          italianContext: "La carta viene rifiutata: spiega e chiedi una soluzione.",
          targetSkills: ["explaining", "problem-solving", "being polite"],
          suggestedChunks: ["I'm so sorry, it seems...", "It might be because...", "Is there any way I can...?"],
          keyElements: ["card", "sorry", "another"],
          modelAnswer:
            "Oh, I'm so sorry — it seems my card's been declined. It might be because it's a foreign card. Let me try another one… or is there a cash machine nearby?",
          allowSpeech: true,
        },
      ],
    },
    {
      id: "london-ep3",
      number: 3,
      title: "First day at work",
      emoji: "💼",
      summary: "You introduce yourself to the team and get invited for coffee.",
      focus: ["describing experience", "present perfect", "small talk"],
      estimatedMinutes: 10,
      beats: [
        {
          kind: "brief",
          id: "ep3-b1",
          label: "Monday morning",
          speaker: "Your manager",
          text: "Your manager gathers the team. “Everyone, this is our new colleague. Would you like to say a few words about yourself and what you've done before?”",
          audio: true,
        },
        {
          kind: "produce",
          id: "ep3-b2",
          label: "Introduce yourself to the team",
          prompt: "Give a short, friendly introduction: your name, your background, and what you're looking forward to.",
          targetSkills: ["describing experience", "present perfect continuous"],
          suggestedChunks: ["I've been working in...", "Before this, I...", "I'm really looking forward to..."],
          keyElements: ["name", "worked", "looking forward"],
          modelAnswer:
            "Hi everyone, I'm Alex. I've been working in logistics for about four years, mostly back home, and before this I studied business. I'm really looking forward to getting to know you all and settling into London.",
          allowSpeech: true,
        },
        {
          kind: "choice",
          id: "ep3-b3",
          label: "A friendly offer",
          prompt: "A colleague leans over: “We usually grab a coffee at eleven — want to join?” What do you say?",
          options: [
            { id: "yes", text: "Happily accept", feedback: "“I'd love to, thanks!” — enthusiastic and natural." },
            { id: "busy", text: "Say you're keen but need to finish something first", feedback: "“I'd really like to — can I catch you in ten minutes?” shows interest and responsibility." },
            { id: "shy", text: "Politely decline this time", feedback: "Fine, but soften it: “Maybe tomorrow? I want to get settled first.”" },
          ],
          followUpWhy: "Why? One sentence.",
        },
        {
          kind: "produce",
          id: "ep3-b4",
          label: "Small talk over coffee",
          prompt:
            "Over coffee, your colleague asks: “So how are you finding London so far?” Reply and keep the conversation going — ask them something back.",
          targetSkills: ["small talk", "expressing opinions", "asking questions"],
          suggestedChunks: ["To be honest...", "It's a bit... but...", "How about you — have you always...?"],
          keyElements: ["London", "how about you"],
          modelAnswer:
            "To be honest, it's a bit overwhelming, but I love it — there's so much going on. The tube still confuses me! How about you, have you always lived here?",
          naturalnessNotes: ["Bouncing a question back (“How about you?”) is what keeps small talk alive."],
          allowSpeech: true,
        },
      ],
    },
    {
      id: "london-ep4",
      number: 4,
      title: "Locked out",
      emoji: "🔑",
      summary: "Something goes wrong on your way home — and you have to sort it out.",
      focus: ["narrating past events", "past simple vs present perfect", "problem-solving"],
      estimatedMinutes: 10,
      beats: [
        {
          kind: "brief",
          id: "ep4-b1",
          label: "That evening",
          text: "You get home, reach into your bag for your keys… and they're not there. You must have left them at the office, or dropped them on the tube. It's raining, and your flatmate isn't answering.",
          italianHint: "Sei chiuso/a fuori casa: niente chiavi, piove, il coinquilino non risponde.",
          audio: true,
        },
        {
          kind: "choice",
          id: "ep4-b2",
          label: "What now?",
          prompt: "You're locked out in the rain. What do you do first?",
          options: [
            { id: "call", text: "Keep calling your flatmate", feedback: "Reasonable. You'd leave a message: “Hi, it's me — I'm locked out, could you call me back?”" },
            { id: "office", text: "Go back to the office for the keys", feedback: "If it's still open — “I think I left my keys at work, I'd better go back.”" },
            { id: "cafe", text: "Wait in a café nearby", feedback: "Sensible while it rains: “I'll wait somewhere dry and try again.”" },
          ],
          followUpWhy: "Explain your choice in one sentence.",
        },
        {
          kind: "brief",
          id: "ep4-b3",
          label: "A bit of luck",
          speaker: "Flatmate (text)",
          text: "Your phone buzzes. It's your flatmate: “So sorry, I was at the gym! I'm five minutes away — wait by the door, I'll let you in. What happened?!”",
          audio: true,
        },
        {
          kind: "produce",
          id: "ep4-b4",
          label: "Tell the story",
          prompt:
            "Your flatmate arrives. Tell them the whole story of what happened this evening — how you realised, what you tried, and how you felt.",
          targetSkills: ["narrating past events", "past simple vs present perfect"],
          suggestedChunks: ["So basically...", "At first I thought...", "In the end...", "I've never felt so..."],
          keyElements: ["keys", "realised", "rain"],
          modelAnswer:
            "So basically, I got home, went to open the door, and realised I didn't have my keys! At first I thought I'd dropped them, then I remembered I probably left them at the office. I tried calling you about ten times — and it was pouring with rain. Honestly, I've never felt so like a proper Londoner.",
          naturalnessNotes: ["“So basically…” signals you're about to tell a story — very natural in speech."],
          allowSpeech: true,
        },
      ],
    },
  ],
};
