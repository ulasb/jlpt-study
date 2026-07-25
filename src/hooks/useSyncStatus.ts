import { useSyncExternalStore } from 'react'
import { getSyncStatus, subscribeSync, type SyncStatus } from '../sync/sync'

// Live view of the Drive sync state (signed-in account, in-flight sync, errors).
export function useSyncStatus(): SyncStatus {
  return useSyncExternalStore(subscribeSync, getSyncStatus, getSyncStatus)
}
