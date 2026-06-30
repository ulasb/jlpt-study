import type { Grammar, JlptLevel, Kanji, Vocab } from '../types'
import { db } from './db'

// Bump when seeded content changes; existing content is cleared so it re-seeds.
const SEED_VERSION = 5

// Each level's content lives in its own module, loaded lazily (dynamic import)
// so the startup bundle stays small — only the level you open is parsed.
type LevelData = { kanji: Kanji[]; vocab: Vocab[]; grammar: Grammar[] }
const LOADERS: Partial<Record<JlptLevel, () => Promise<LevelData>>> = {
  N5: async () => {
    const m = await import('../data/n5')
    return { kanji: m.N5_KANJI, vocab: m.N5_VOCAB, grammar: m.N5_GRAMMAR }
  },
  N4: async () => {
    const m = await import('../data/n4')
    return { kanji: m.N4_KANJI, vocab: m.N4_VOCAB, grammar: m.N4_GRAMMAR }
  },
  N3: async () => {
    const m = await import('../data/n3')
    return { kanji: m.N3_KANJI, vocab: m.N3_VOCAB, grammar: m.N3_GRAMMAR }
  },
}

const seeded = new Set<JlptLevel>()

// Ensure the settings row exists and, on a content version bump, clear the
// content tables so they re-seed lazily (user review history is preserved).
export async function ensureSettings(): Promise<void> {
  const s = await db.settings.get('app')
  if (!s) {
    await db.settings.put({
      key: 'app',
      selectedLevel: null,
      newPerDay: 10,
      disabledLevels: [],
      seedVersion: SEED_VERSION,
    })
    return
  }
  if (s.seedVersion < SEED_VERSION) {
    await db.transaction('rw', db.kanji, db.vocab, db.grammar, db.settings, async () => {
      await db.kanji.clear()
      await db.vocab.clear()
      await db.grammar.clear()
      await db.settings.update('app', { seedVersion: SEED_VERSION })
    })
    seeded.clear()
  }
}

// Load + seed a single level's content into IndexedDB if not already present.
// Idempotent and cheap once seeded (in-memory guard + a count check).
export async function ensureLevelSeeded(level: JlptLevel): Promise<void> {
  if (seeded.has(level)) return
  const loader = LOADERS[level]
  if (!loader) {
    seeded.add(level)
    return
  }
  const have = await db.kanji.where('level').equals(level).count()
  if (have === 0) {
    const data = await loader()
    await db.transaction('rw', db.kanji, db.vocab, db.grammar, async () => {
      await db.kanji.bulkPut(data.kanji)
      await db.vocab.bulkPut(data.vocab)
      await db.grammar.bulkPut(data.grammar)
    })
  }
  seeded.add(level)
}
