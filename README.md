# JLPT Study

A web app for studying the JLPT (Japanese-Language Proficiency Test) across **kanji**, **vocabulary**, and **grammar**, with spaced repetition. Built as an offline-first PWA — install it to your phone's home screen or run it in any browser.

Levels **N5, N4, and N3** are populated (N2/N1 are stubbed for later).

## Features

- **Spaced repetition (SM-2)** — each item is scheduled by how well you recall it (Again / Hard / Medium / Easy).
- **Kanji & vocab flashcards** — multiple choice with scrambled options. Readings are hidden until you answer (you're tested on them), then shown. Cards mix directions: meaning→kanji, reading→kanji, word→meaning, etc.
- **Grammar fill-in-the-blank** — pick the form that fits the sentence. Distractors are drawn from a per-point pool and are designed to be *uniquely* wrong; after answering you get an explanation of why the answer is right and why each shown distractor is wrong, with furigana.
- **"I don't know"** option so you never have to guess randomly.
- **Home dashboard** — progress and what's due "today" across every level, with a per-level **On/Off** toggle to pause levels you're not focusing on.
- **Browse / learn** — read through kanji, vocab, and grammar points outside of quizzing.
- **Sample exam** — a mixed multiple-choice test across all three dimensions.
- **Offline & local** — all content and your progress live on-device (IndexedDB); no account, no server.

## Tech

- React + Vite + TypeScript
- Dexie (IndexedDB) for storage
- `vite-plugin-pwa` for offline/install support
- Designed to wrap to Android later via Capacitor with no rewrite

## Development

```bash
npm install
npm run dev        # local dev server
npm run build      # production build
npm run preview    # preview the production build
npm run typecheck  # type-check only
```

## Content

JLPT content lives in `src/data/n5.ts`, `n4.ts`, `n3.ts` and is seeded into IndexedDB on first run (`src/db/seed.ts`). It was generated and verified against reference sources; corrections are welcome via PR.
