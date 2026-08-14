# English B1 — Verb Trainer

A personal, offline-first learning app (React + Vite + TypeScript) for going from
**A2 to a solid B1**, with a relentless focus on **verbs**: which verb, which
tense, which form, which construction.

It is a real learning application, not a PDF turned into HTML. The guiding idea:

> **Situation → meaning → verb → tense → form → construction.**

## Status

This repository is the **Phase 2 vertical slice** described in the project brief:
a fully working end-to-end path (architecture + one complete Tier‑1 verb card +
two chapters + all exercise types + progress + spaced repetition + error log)
plus navigation scaffolding for the full 30‑chapter syllabus. Chapters marked
_"Soon"_ are placeholders that unlock by adding data only — see below.

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build       # typecheck (tsc -b) + production build
npm run preview     # preview the production build
npm run test        # run the Vitest suite (logic + data validation)
npm run typecheck   # type-check without emitting
```

Requires Node 18+.

## Architecture at a glance

Strict separation: **UI → logic → didactic data → persistence**. Content never
lives inside components (see the brief, §4 and §53).

```
src/
  app/            App, routes, providers (ProgressProvider, ThemeSync)
  components/
    ui/           Design-system primitives (Button, Card, Tabs, Modal, Icon…)
    layout/       AppShell, Sidebar, Header (+ global search), MobileNavigation
    learning/     VerbCard, PhrasalVerbCard, CollocationList, ExampleSentence…
    exercises/    ExerciseRenderer (dispatcher) + one component per type
    feedback/     AnswerFeedback, Explanation, ScoreDisplay
    progress/     ProgressOverview, SkillProgress, Streak, ReviewDue
  pages/          One component per route
  data/           ALL didactic content (verbs, phrasal verbs, vocab, exercises,
                  grammar, chapters) + the registry in data/index.ts
  types/          Domain models (Verb, Exercise, Chapter, UserProgress…)
  services/       StorageService (abstract) + LocalStorageService,
                  ProgressService, SpacedRepetitionService, ExerciseService,
                  SearchService, and the composition root (services/index.ts)
  hooks/          useProgress, useTheme, useSearch, useSpacedRepetition…
  utils/          Pure helpers: scoring, normalization, shuffle, dates
  styles/         globals.css + variables.css (light/dark tokens)
  test/           Vitest: scoring, grading, spaced repetition, data validation
```

### Data flow

1. **Data** (`src/data/**`) is assembled once into lookup maps by
   `src/data/index.ts` (`getVerb`, `getExercise`, `getChapter`, …).
2. **Services** (`src/services/**`) hold all logic. They depend on the abstract
   `StorageService`, never on `localStorage` directly.
3. **Providers/hooks** expose service state to React. `ProgressProvider` owns the
   `UserProgress` document; components read it via `useProgress()`.
4. **Components** render data and report results back up — the
   `ExerciseRenderer` maps an exercise's `data.kind` to the right input UI.

### Persistence

`StorageService` is an interface. The current implementation is
`LocalStorageService` (namespaced `eb1.` keys, fails soft to an in-memory map in
private mode). To move to IndexedDB or a backend later, implement the interface
and swap the one line in `src/services/index.ts` — no call sites change.

### Spaced repetition

`SpacedRepetitionService` uses a simple, performance-based scheduler. The item
shape (`ease`, `interval`, `repetitions`, `lapses`) is **SM‑2 compatible**, so
the algorithm can be replaced with SM‑2/FSRS later without migrating stored data.
Review ratings are `again | hard | good | easy` (brief §28).

### Exercise selection (daily practice)

`ExerciseService.buildDailySession` prioritises, in order (brief §31):
repeatedly-wrong → overdue reviews → recently learned → studied long ago → new.
Items are shuffled within a priority bucket for variety.

## How to extend the content

The whole point of the data-first design: **content changes never require
touching components or services.**

### Add a verb

1. Create `src/data/verbs/<verb>.ts` exporting a `Verb` object (copy
   `src/data/verbs/take.ts` for a full Tier‑1 example, or `neighbours.ts` for a
   condensed Tier‑2 one).
2. Register it in `src/data/index.ts` (add to the `verbs` array).
3. `npm run test` — the data-validation suite checks IDs and references.

It now appears in the Verb Explorer, global search, and any chapter that lists
its id.

### Add an exercise

1. Add an `Exercise` (with a discriminated `data.kind`) to a file under
   `src/data/exercises/` and include it in the `exercises` array in
   `data/index.ts`.
2. Reference its id from a verb's `exercises` or a chapter's `exerciseIds`.

No renderer changes needed unless you introduce a brand-new exercise *type* — in
that case add a `case` to `ExerciseRenderer.tsx` and a grader branch in
`ExerciseService.grade`.

### Add a chapter

1. Create `src/data/chapters/chapterNN.ts` (a `Chapter` with `sections`).
2. Register it in `data/index.ts` and flip its `courseMap` entry `status` to
   `"available"` in `src/data/chapters/courseMap.ts`.

The `ChapterPage` builds itself dynamically from the chapter's `sections`.

### Edit content

Everything editable lives under `src/data/**`. Text shown to the learner
(meanings, examples, explanations) is data, not JSX.

## Accessibility & UX

Semantic HTML, keyboard-navigable, visible focus rings, `aria-label`s, a skip
link, and correctness never signalled by colour alone (icon + text always).
Light / dark / system themes are persisted. Responsive: desktop sidebar, mobile
bottom navigation.

## What is intentionally NOT here (yet)

No Redux, backend, auth, remote DB, or AI APIs (brief §52). The architecture is
designed to add audio, PWA, cloud sync, accounts, or an AI tutor later without
rewriting the core.

`currentCEFRProgress` is an **internal indicator, not a CEFR certification.**
Speaking is never auto-scored.
