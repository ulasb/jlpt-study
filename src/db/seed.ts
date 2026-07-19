import type { Grammar, JlptLevel, Kanji, Listening, Reading, Vocab } from '../types'
import { db } from './db'

// Bump when seeded content changes; existing content is cleared so it re-seeds.
const SEED_VERSION = 10

// Each level's content lives in its own module, loaded lazily (dynamic import)
// so the startup bundle stays small — only the level you open is parsed.
// Reading passages and listening scripts live in separate per-level modules.
type LevelData = {
  kanji: Kanji[]
  vocab: Vocab[]
  grammar: Grammar[]
  reading: Reading[]
  listening: Listening[]
}
const LOADERS: Partial<Record<JlptLevel, () => Promise<LevelData>>> = {
  N5: async () => {
    const [m, r, l] = await Promise.all([
      import('../data/n5'), import('../data/reading-n5'), import('../data/listening-n5'),
    ])
    return { kanji: m.N5_KANJI, vocab: m.N5_VOCAB, grammar: m.N5_GRAMMAR, reading: r.N5_READING, listening: l.N5_LISTENING }
  },
  N4: async () => {
    const [m, r, l] = await Promise.all([
      import('../data/n4'), import('../data/reading-n4'), import('../data/listening-n4'),
    ])
    return { kanji: m.N4_KANJI, vocab: m.N4_VOCAB, grammar: m.N4_GRAMMAR, reading: r.N4_READING, listening: l.N4_LISTENING }
  },
  N3: async () => {
    const [m, r, l] = await Promise.all([
      import('../data/n3'), import('../data/reading-n3'), import('../data/listening-n3'),
    ])
    return { kanji: m.N3_KANJI, vocab: m.N3_VOCAB, grammar: m.N3_GRAMMAR, reading: r.N3_READING, listening: l.N3_LISTENING }
  },
  N2: async () => {
    const [m, r, l] = await Promise.all([
      import('../data/n2'), import('../data/reading-n2'), import('../data/listening-n2'),
    ])
    return { kanji: m.N2_KANJI, vocab: m.N2_VOCAB, grammar: m.N2_GRAMMAR, reading: r.N2_READING, listening: l.N2_LISTENING }
  },
  N1: async () => {
    const [m, r, l] = await Promise.all([
      import('../data/n1'), import('../data/reading-n1'), import('../data/listening-n1'),
    ])
    return { kanji: m.N1_KANJI, vocab: m.N1_VOCAB, grammar: m.N1_GRAMMAR, reading: r.N1_READING, listening: l.N1_LISTENING }
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
    await db.transaction(
      'rw',
      [db.kanji, db.vocab, db.grammar, db.reading, db.listening, db.settings],
      async () => {
        await db.kanji.clear()
        await db.vocab.clear()
        await db.grammar.clear()
        await db.reading.clear()
        await db.listening.clear()
        await db.settings.update('app', { seedVersion: SEED_VERSION })
      },
    )
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
    await db.transaction('rw', [db.kanji, db.vocab, db.grammar, db.reading, db.listening], async () => {
      await db.kanji.bulkPut(data.kanji)
      await db.vocab.bulkPut(data.vocab)
      await db.grammar.bulkPut(data.grammar)
      await db.reading.bulkPut(data.reading)
      await db.listening.bulkPut(data.listening)
    })
  }
  seeded.add(level)
}
