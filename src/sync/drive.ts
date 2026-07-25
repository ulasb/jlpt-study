// Minimal Google Drive REST client for a single JSON file kept in the
// `appDataFolder` — a hidden, per-app folder in the user's Drive that no other
// app (and no file browser) can see. We only ever touch this one file.

const FILES = 'https://www.googleapis.com/drive/v3/files'
const UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files'

export const SNAPSHOT_FILE_NAME = 'jlpt-study-progress.json'

// Thrown when the *token* is the problem, so signing in again is a real fix.
export class DriveAuthError extends Error {}

// Thrown when the Google Cloud project is misconfigured (Drive API not enabled,
// for example). Re-authorizing can never fix this, so the UI must not offer it
// — it needs a change in the Cloud Console instead.
export class DriveConfigError extends Error {}

interface GoogleError {
  error?: {
    code?: number
    message?: string
    status?: string
    errors?: { reason?: string; message?: string }[]
  }
}

async function readError(res: Response): Promise<{ message: string; reason: string; status: string }> {
  let body: GoogleError = {}
  try {
    body = (await res.json()) as GoogleError
  } catch {
    /* non-JSON error page */
  }
  return {
    message: body.error?.message ?? '',
    reason: body.error?.errors?.[0]?.reason ?? '',
    status: body.error?.status ?? '',
  }
}

async function driveFetch(url: string, token: string, init?: RequestInit): Promise<Response> {
  let res: Response
  try {
    res = await fetch(url, {
      ...init,
      headers: { ...init?.headers, Authorization: `Bearer ${token}` },
    })
  } catch {
    throw new Error("Couldn't reach Google Drive. Check your connection.")
  }
  if (res.ok) return res

  const { message, reason, status } = await readError(res)

  // An expired or revoked token — reconnecting genuinely helps.
  if (res.status === 401) {
    throw new DriveAuthError('Your Google sign-in expired. Reconnect to resume syncing.')
  }

  if (res.status === 403) {
    // The API isn't turned on for the project. Signing in again is useless;
    // pass Google's own message through, since it names the project and links
    // straight to the page that fixes it.
    if (reason === 'accessNotConfigured' || status === 'SERVICE_DISABLED') {
      throw new DriveConfigError(
        message || "The Google Drive API isn't enabled for this app's Google Cloud project.",
      )
    }
    // The grant exists but lacks the Drive scope — re-consenting does fix this.
    if (reason === 'insufficientPermissions' || reason === 'insufficientFilePermissions') {
      throw new DriveAuthError('Drive permission was not granted. Reconnect and allow Drive access.')
    }
    if (reason === 'rateLimitExceeded' || reason === 'userRateLimitExceeded') {
      throw new Error('Google Drive is rate-limiting this app. Try syncing again shortly.')
    }
    throw new DriveConfigError(message || 'Google Drive refused the request (403).')
  }

  throw new Error(message ? `Google Drive: ${message}` : `Google Drive request failed (${res.status}).`)
}

// Locate our snapshot file. Returns null the first time a user ever syncs.
export async function findSnapshotFile(token: string): Promise<string | null> {
  const params = new URLSearchParams({
    spaces: 'appDataFolder',
    q: `name = '${SNAPSHOT_FILE_NAME}' and trashed = false`,
    fields: 'files(id)',
    pageSize: '1',
  })
  const res = await driveFetch(`${FILES}?${params}`, token)
  const body = (await res.json()) as { files?: { id: string }[] }
  return body.files?.[0]?.id ?? null
}

export async function downloadSnapshot(token: string, fileId: string): Promise<unknown> {
  const res = await driveFetch(`${FILES}/${fileId}?alt=media`, token)
  return await res.json()
}

// Create the file on first sync (multipart: metadata + content in one request),
// or overwrite its contents afterwards. Returns the file id to reuse.
export async function uploadSnapshot(
  token: string,
  fileId: string | null,
  snapshot: unknown,
): Promise<string> {
  const content = JSON.stringify(snapshot)

  if (fileId) {
    await driveFetch(`${UPLOAD}/${fileId}?uploadType=media`, token, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: content,
    })
    return fileId
  }

  const boundary = 'jlptstudy-boundary-8f2c1d'
  const metadata = { name: SNAPSHOT_FILE_NAME, parents: ['appDataFolder'] }
  const body =
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n` +
    `${JSON.stringify(metadata)}\r\n` +
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n` +
    `${content}\r\n` +
    `--${boundary}--`

  const res = await driveFetch(`${UPLOAD}?uploadType=multipart&fields=id`, token, {
    method: 'POST',
    headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
    body,
  })
  const created = (await res.json()) as { id: string }
  return created.id
}

// Remove the synced copy from Drive (used by "Delete cloud copy").
export async function deleteSnapshotFile(token: string, fileId: string): Promise<void> {
  await driveFetch(`${FILES}/${fileId}`, token, { method: 'DELETE' })
}
