import { readdirSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'
import { runMigration } from 'contentful-migration'

const envFile = Bun.file('.env')
const envText = await envFile.text()
const env: Record<string, string> = {}
for (const line of envText.split('\n')) {
  const [key, ...rest] = line.split('=')
  if (key?.trim() && rest.length) env[key.trim()] = rest.join('=').trim()
}

const spaceId = env.CONTENTFUL_SPACE_ID
const accessToken = env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
const environmentId = Bun.argv[2] || 'staging'

if (!spaceId || !accessToken) {
  console.error(
    'Missing CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN in .env'
  )
  process.exit(1)
}

const baseUrl = `https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}`
const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/vnd.contentful.management.v1+json'
}

// --- Version tracking helpers ---

async function cfFetch(path: string, options?: RequestInit & { headers?: Record<string, string> }) {
  const mergedHeaders = { ...headers, ...options?.headers }
  const res = await fetch(`${baseUrl}${path}`, { ...options, headers: mergedHeaders })
  return res
}

async function ensureVersionTracking(): Promise<void> {
  const res = await cfFetch('/content_types/versionTracking')
  if (res.ok) return

  console.log('Creating versionTracking content type...')
  const createRes = await cfFetch('/content_types/versionTracking', {
    method: 'PUT',
    body: JSON.stringify({
      name: 'Version Tracking',
      description: 'Tracks the last applied migration version',
      displayField: 'version',
      fields: [
        {
          id: 'version',
          name: 'Version',
          type: 'Integer',
          required: true
        }
      ]
    })
  })
  if (!createRes.ok) {
    throw new Error(
      `Failed to create versionTracking: ${await createRes.text()}`
    )
  }

  const ct = await createRes.json()
  await cfFetch(
    `/content_types/versionTracking/published`,
    {
      method: 'PUT',
      headers: {
        ...headers,
        'X-Contentful-Version': ct.sys.version.toString()
      }
    }
  )
  console.log('  ✓ versionTracking content type created and published\n')
}

async function getDefaultLocale(): Promise<string> {
  const res = await cfFetch('/locales')
  const data = await res.json()
  const defaultLocale = data.items.find((l: any) => l.default)
  return defaultLocale?.code || 'es'
}

async function getCurrentVersion(
  locale: string
): Promise<{ version: number; entryId: string | null; entryVersion: number }> {
  const res = await cfFetch(
    '/entries?content_type=versionTracking&limit=1'
  )
  const data = await res.json()

  if (data.items.length === 0) {
    return { version: 0, entryId: null, entryVersion: 0 }
  }

  const entry = data.items[0]
  return {
    version: entry.fields.version?.[locale] || 0,
    entryId: entry.sys.id,
    entryVersion: entry.sys.version
  }
}

async function updateVersion(
  locale: string,
  newVersion: number,
  entryId: string | null,
  entryVersion: number
): Promise<{ entryId: string; entryVersion: number }> {
  const body = JSON.stringify({
    fields: { version: { [locale]: newVersion } }
  })

  if (!entryId) {
    // Create new entry
    const res = await cfFetch('/entries', {
      method: 'POST',
      headers: { ...headers, 'X-Contentful-Content-Type': 'versionTracking' },
      body
    })
    const entry = await res.json()
    // Publish
    await cfFetch(`/entries/${entry.sys.id}/published`, {
      method: 'PUT',
      headers: {
        ...headers,
        'X-Contentful-Version': entry.sys.version.toString()
      }
    })
    return { entryId: entry.sys.id, entryVersion: entry.sys.version + 1 }
  }

  // Update existing entry
  const res = await cfFetch(`/entries/${entryId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'X-Contentful-Version': entryVersion.toString()
    },
    body
  })
  const entry = await res.json()
  // Publish
  await cfFetch(`/entries/${entryId}/published`, {
    method: 'PUT',
    headers: {
      ...headers,
      'X-Contentful-Version': entry.sys.version.toString()
    }
  })
  return { entryId, entryVersion: entry.sys.version + 1 }
}

function getVersionFromFile(filename: string): number {
  const match = filename.match(/^(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

// --- Main ---

const seedIndex = Bun.argv.indexOf('--seed')
const seedVersion = seedIndex !== -1 ? parseInt(Bun.argv[seedIndex + 1], 10) : null

await ensureVersionTracking()
const locale = await getDefaultLocale()
let { version: currentVersion, entryId, entryVersion } =
  await getCurrentVersion(locale)

// Seed mode: set version manually and exit
if (seedVersion !== null) {
  if (isNaN(seedVersion)) {
    console.error('Invalid seed version. Usage: bun run migrate-cf <env> --seed <version>')
    process.exit(1)
  }
  await updateVersion(locale, seedVersion, entryId, entryVersion)
  console.log(`✓ Version set to ${seedVersion} (env: ${environmentId})`)
  process.exit(0)
}

// Migration mode: run pending migrations
const migrationsDir = join(import.meta.dir, '..', 'migrations-cf')
const allFiles = readdirSync(migrationsDir)
  .filter((f) => f.endsWith('.ts') && /^\d+/.test(f))
  .sort()

const pendingFiles = allFiles.filter(
  (f) => getVersionFromFile(f) > currentVersion
)

if (pendingFiles.length === 0) {
  console.log(
    `No pending migrations. Current version: ${currentVersion} (env: ${environmentId})`
  )
  process.exit(0)
}

console.log(
  `Current version: ${currentVersion}. Running ${pendingFiles.length} pending migration(s) against env "${environmentId}"...\n`
)

for (const file of pendingFiles) {
  const fileVersion = getVersionFromFile(file)
  const filePath = join(migrationsDir, file)
  console.log(`▸ ${file}`)
  try {
    const mod = await import(filePath)
    await runMigration({
      migrationFunction: mod.default,
      spaceId,
      accessToken,
      environmentId,
      yes: true
    })

    const result = await updateVersion(locale, fileVersion, entryId, entryVersion)
    entryId = result.entryId
    entryVersion = result.entryVersion

    console.log(`  ✓ done (version → ${fileVersion})\n`)
  } catch (e) {
    console.error(`  ✗ failed: ${file}`)
    console.error(e)
    process.exit(1)
  }
}

console.log('All migrations completed.\n')

console.log('Regenerating TypeScript types...')
execSync('bun run generate-types-cf', { stdio: 'inherit' })
console.log('✓ Types updated.')
