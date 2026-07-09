// Generate listening audio files with Google Cloud Text-to-Speech.
//
//   GOOGLE_TTS_API_KEY=... node scripts/gen-audio.mjs [--force] [--level N5]
//   GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json node scripts/gen-audio.mjs
//
// One .m4a per listening item → public/audio/listening/<level>/<slug>.m4a.
// Idempotent: existing files are skipped unless --force.
//
// How each file is built:
//  - Every script line is synthesized separately so each speaker gets their own
//    Neural2 voice (male/female inferred from the speaker label).
//  - Kanji readings are pinned via SSML <sub alias="かな">漢字</sub> using the
//    content's furigana markup, so the engine can never misread a word.
//  - Lines are joined with 700 ms pauses (LINEAR16 PCM concatenation), then
//    encoded to AAC with macOS's afconvert (no ffmpeg needed).
import { execFileSync } from 'node:child_process'
import crypto from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

// Auth: either a plain API key, or a service-account JSON (exchanged for a
// short-lived OAuth access token via a signed JWT — no SDK needed).
const API_KEY = process.env.GOOGLE_TTS_API_KEY
const SA_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS
if (!API_KEY && !SA_PATH) {
  console.error(
    'Set GOOGLE_TTS_API_KEY or GOOGLE_APPLICATION_CREDENTIALS (service-account JSON path);\n' +
      'the project must have the Cloud Text-to-Speech API enabled.',
  )
  process.exit(1)
}

async function serviceAccountToken(saPath) {
  const sa = JSON.parse(fs.readFileSync(saPath, 'utf8'))
  const now = Math.floor(Date.now() / 1000)
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url')
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/cloud-platform',
    aud: sa.token_uri,
    iat: now,
    exp: now + 3600,
  })}`
  const signature = crypto.sign('RSA-SHA256', Buffer.from(unsigned), sa.private_key).toString('base64url')
  const res = await fetch(sa.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
  })
  if (!res.ok) throw new Error(`token exchange failed: ${(await res.text()).slice(0, 300)}`)
  return (await res.json()).access_token
}

const bearer = SA_PATH && !API_KEY ? await serviceAccountToken(SA_PATH) : null
const force = process.argv.includes('--force')
const onlyLevel = process.argv.includes('--level')
  ? process.argv[process.argv.indexOf('--level') + 1]?.toUpperCase()
  : null

const root = path.dirname(fileURLToPath(import.meta.url))
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1']
// Slightly slower speech at lower levels, like the real exam's pacing.
const RATE = { N5: 0.85, N4: 0.9, N3: 0.95, N2: 1, N1: 1 }
const FEMALE = ['ja-JP-Neural2-B', 'ja-JP-Wavenet-A']
const MALE = ['ja-JP-Neural2-C', 'ja-JP-Neural2-D']
const SAMPLE_RATE = 24000
const PAUSE_MS = 700

// ---- load listening data (TS modules) via esbuild --------------------------
const dataDir = path.join(root, '..', 'src', 'data')
const entry = LEVELS.map(
  (l, i) => `import { ${l}_LISTENING as L${i} } from '${path.join(dataDir, `listening-${l.toLowerCase()}.ts`)}'`,
).join('\n') + `\nexport default { ${LEVELS.map((l, i) => `${l}: L${i}`).join(', ')} }`
const entryFile = path.join(os.tmpdir(), 'jlpt-listening-entry.ts')
const bundleFile = path.join(os.tmpdir(), 'jlpt-listening-bundle.mjs')
fs.writeFileSync(entryFile, entry)
await build({
  entryPoints: [entryFile],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: bundleFile,
  absWorkingDir: root,
})
const ALL = (await import(bundleFile)).default

// ---- helpers ----------------------------------------------------------------
const RUBY = /([一-龯々〆ヶ〇]+)\[([^\]]+)\]/g
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// 漢字[かんじ] → <sub alias="かんじ">漢字</sub>; readings are authoritative.
function toSsml(text) {
  const body = esc(text).replace(RUBY, (_, kanji, kana) => `<sub alias="${kana}">${kanji}</sub>`)
  return `<speak>${body}</speak>`
}

// Voice per speaker: labels containing 男 get a male voice, 女 a female one;
// everyone else alternates so two unnamed speakers still sound distinct.
function assignVoices(script) {
  const bySpeaker = new Map()
  let females = 0
  let males = 0
  for (const { speaker } of script) {
    if (bySpeaker.has(speaker)) continue
    const label = speaker.replace(RUBY, '$1')
    if (label.includes('男')) bySpeaker.set(speaker, MALE[males++ % MALE.length])
    else if (label.includes('女')) bySpeaker.set(speaker, FEMALE[females++ % FEMALE.length])
    else {
      const pool = bySpeaker.size % 2 === 0 ? FEMALE : MALE
      bySpeaker.set(speaker, pool === FEMALE ? FEMALE[females++ % FEMALE.length] : MALE[males++ % MALE.length])
    }
  }
  return bySpeaker
}

async function synthesize(ssml, voice, rate) {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize${API_KEY ? `?key=${API_KEY}` : ''}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(bearer ? { Authorization: `Bearer ${bearer}` } : {}) },
    body: JSON.stringify({
      input: { ssml },
      voice: { languageCode: 'ja-JP', name: voice },
      audioConfig: { audioEncoding: 'LINEAR16', sampleRateHertz: SAMPLE_RATE, speakingRate: rate },
    }),
  })
  if (!res.ok) throw new Error(`TTS ${res.status}: ${(await res.text()).slice(0, 300)}`)
  return Buffer.from((await res.json()).audioContent, 'base64')
}

// Extract raw PCM from a WAV buffer by locating its "data" chunk.
function pcmOf(wav) {
  let off = 12
  while (off + 8 <= wav.length) {
    const id = wav.toString('ascii', off, off + 4)
    const size = wav.readUInt32LE(off + 4)
    if (id === 'data') return wav.subarray(off + 8, off + 8 + size)
    off += 8 + size + (size % 2)
  }
  throw new Error('no data chunk in WAV response')
}

function wavOf(pcm) {
  const h = Buffer.alloc(44)
  h.write('RIFF', 0)
  h.writeUInt32LE(36 + pcm.length, 4)
  h.write('WAVEfmt ', 8)
  h.writeUInt32LE(16, 16)
  h.writeUInt16LE(1, 20) // PCM
  h.writeUInt16LE(1, 22) // mono
  h.writeUInt32LE(SAMPLE_RATE, 24)
  h.writeUInt32LE(SAMPLE_RATE * 2, 28)
  h.writeUInt16LE(2, 32)
  h.writeUInt16LE(16, 34)
  h.write('data', 36)
  h.writeUInt32LE(pcm.length, 40)
  return Buffer.concat([h, pcm])
}

const silence = Buffer.alloc(Math.round((SAMPLE_RATE * PAUSE_MS) / 1000) * 2)

// ---- main -------------------------------------------------------------------
let made = 0
let skipped = 0
let chars = 0
for (const level of LEVELS) {
  if (onlyLevel && level !== onlyLevel) continue
  for (const item of ALL[level]) {
    const slug = item.id.split(':')[2]
    const outDir = path.join(root, '..', 'public', 'audio', 'listening', level.toLowerCase())
    const outFile = path.join(outDir, `${slug}.m4a`)
    if (!force && fs.existsSync(outFile)) {
      skipped++
      continue
    }
    fs.mkdirSync(outDir, { recursive: true })
    const voices = assignVoices(item.script)
    const parts = []
    for (const line of item.script) {
      const ssml = toSsml(line.text)
      chars += ssml.length
      parts.push(pcmOf(await synthesize(ssml, voices.get(line.speaker), RATE[level])))
    }
    const pcm = Buffer.concat(parts.flatMap((p, i) => (i ? [silence, p] : [p])))
    const tmpWav = path.join(os.tmpdir(), `jlpt-${level}-${slug}.wav`)
    fs.writeFileSync(tmpWav, wavOf(pcm))
    execFileSync('afconvert', ['-f', 'm4af', '-d', 'aac', '-b', '48000', tmpWav, outFile])
    fs.unlinkSync(tmpWav)
    const kb = Math.round(fs.statSync(outFile).size / 1024)
    console.log(`${item.id} → ${path.relative(process.cwd(), outFile)} (${kb} kB, ${voices.size} voice${voices.size > 1 ? 's' : ''})`)
    made++
  }
}
console.log(`\n${made} generated, ${skipped} already existed, ~${chars} chars billed.`)
