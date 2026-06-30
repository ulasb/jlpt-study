import type { Dimension, JlptLevel } from '../types'

// Lightweight per-level item counts so the Home dashboard can show totals and
// "new on deck" without loading the (large) content modules. The full content
// is loaded lazily per level — see src/db/seed.ts `ensureLevelSeeded`.
//
// Keep in sync with src/data/<level>.ts. (These are stable; if you regenerate
// content, update these numbers — they only affect the Home overview totals.)
export const LEVEL_COUNTS: Record<JlptLevel, Record<Dimension, number>> = {
  N5: { kanji: 104, vocab: 543, grammar: 94 },
  N4: { kanji: 201, vocab: 631, grammar: 181 },
  N3: { kanji: 332, vocab: 837, grammar: 166 },
  N2: { kanji: 0, vocab: 0, grammar: 0 },
  N1: { kanji: 0, vocab: 0, grammar: 0 },
}

export const POPULATED_LEVELS: JlptLevel[] = (['N5', 'N4', 'N3'] as JlptLevel[]).filter(
  (l) => LEVEL_COUNTS[l].kanji > 0,
)
