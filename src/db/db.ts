import Dexie, { type EntityTable } from 'dexie'
import type { AppSettings, Grammar, Kanji, ReviewState, Vocab } from '../types'

// Local-only, offline storage via IndexedDB.
// Content tables (kanji/vocab/grammar) are seeded from bundled data and are
// effectively read-only at runtime. `reviews` and `settings` hold user state.
// NOTE: the IndexedDB database name stays 'jlptdroid' (the app's original name)
// on purpose — renaming it would orphan existing users' saved study progress.
export const db = new Dexie('jlptdroid') as Dexie & {
  kanji: EntityTable<Kanji, 'id'>
  vocab: EntityTable<Vocab, 'id'>
  grammar: EntityTable<Grammar, 'id'>
  reviews: EntityTable<ReviewState, 'itemId'>
  settings: EntityTable<AppSettings, 'key'>
}

db.version(1).stores({
  kanji: 'id, level, character',
  vocab: 'id, level, word',
  grammar: 'id, level, title',
  reviews: 'itemId, [level+dimension], dueAt, dimension, level',
  settings: 'key',
})
