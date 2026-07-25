import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db/db'
import { scheduleSync } from '../sync/sync'
import type { AppSettings, JlptLevel } from '../types'

export function useSettings() {
  return useLiveQuery(() => db.settings.get('app'), [])
}

// Merge a partial update into the settings row, preserving the other fields.
// Every change stamps `prefsUpdatedAt`: Drive sync uses it to decide which
// device edited the preferences most recently (src/sync/snapshot.ts).
export async function updateSettings(patch: Partial<Omit<AppSettings, 'key'>>) {
  const existing = await db.settings.get('app')
  await db.settings.put({
    key: 'app',
    selectedLevel: existing?.selectedLevel ?? null,
    newPerDay: existing?.newPerDay ?? 10,
    seedVersion: existing?.seedVersion ?? 0,
    disabledLevels: existing?.disabledLevels ?? [],
    resetMarkers: existing?.resetMarkers,
    prefsUpdatedAt: Date.now(),
    ...patch,
  })
  scheduleSync()
}

export const setSelectedLevel = (level: JlptLevel | null) => updateSettings({ selectedLevel: level })

export const setNewPerDay = (n: number) => updateSettings({ newPerDay: n })

export async function toggleLevelEnabled(level: JlptLevel) {
  const existing = await db.settings.get('app')
  const disabled = new Set(existing?.disabledLevels ?? [])
  if (disabled.has(level)) disabled.delete(level)
  else disabled.add(level)
  await updateSettings({ disabledLevels: [...disabled] })
}
