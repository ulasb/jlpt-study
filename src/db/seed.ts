import { N3_GRAMMAR, N3_KANJI, N3_VOCAB } from '../data/n3'
import { N4_GRAMMAR, N4_KANJI, N4_VOCAB } from '../data/n4'
import { N5_GRAMMAR, N5_KANJI, N5_VOCAB } from '../data/n5'
import type { JlptLevel } from '../types'
import { db } from './db'

// Bump when seed content changes in a way that should overwrite existing rows.
const SEED_VERSION = 4

const SEED: { level: JlptLevel; kanji: typeof N5_KANJI; vocab: typeof N5_VOCAB; grammar: typeof N5_GRAMMAR }[] = [
  { level: 'N5', kanji: N5_KANJI, vocab: N5_VOCAB, grammar: N5_GRAMMAR },
  { level: 'N4', kanji: N4_KANJI, vocab: N4_VOCAB, grammar: N4_GRAMMAR },
  { level: 'N3', kanji: N3_KANJI, vocab: N3_VOCAB, grammar: N3_GRAMMAR },
]

export async function ensureSeeded(): Promise<void> {
  const settings = await db.settings.get('app')
  const stored = settings?.seedVersion ?? 0

  // Re-seed when content changed (version bump) OR — self-heal — when a level
  // that should have content is empty in the DB (e.g. it was added after this
  // browser last passed the version gate).
  let needSeed = stored < SEED_VERSION
  if (!needSeed) {
    for (const s of SEED) {
      if (s.kanji.length && (await db.kanji.where('level').equals(s.level).count()) === 0) {
        needSeed = true
        break
      }
    }
  }
  if (!needSeed) return

  await db.transaction('rw', db.kanji, db.vocab, db.grammar, db.settings, async () => {
    // bulkPut is idempotent on primary key, so re-seeding refreshes content
    // without touching the user's `reviews` rows.
    await db.kanji.bulkPut(SEED.flatMap((s) => s.kanji))
    await db.vocab.bulkPut(SEED.flatMap((s) => s.vocab))
    await db.grammar.bulkPut(SEED.flatMap((s) => s.grammar))

    const existing = await db.settings.get('app')
    await db.settings.put({
      key: 'app',
      selectedLevel: existing?.selectedLevel ?? null,
      newPerDay: existing?.newPerDay ?? 10,
      seedVersion: SEED_VERSION,
      disabledLevels: existing?.disabledLevels ?? [],
    })
  })
}
