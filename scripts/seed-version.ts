/**
 * Seeds the versionTracking entry to a specific version.
 * Usage: bun run scripts/seed-version.ts <environment> <version>
 * Example: bun run scripts/seed-version.ts staging 12
 */
import { readFileSync } from 'fs'

const envText = readFileSync('.env', 'utf-8')
const env: Record<string, string> = {}
for (const line of envText.split('\n')) {
  const [key, ...rest] = line.split('=')
  if (key?.trim() && rest.length) env[key.trim()] = rest.join('=').trim()
}

const spaceId = env.CONTENTFUL_SPACE_ID
const accessToken = env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
const environmentId = Bun.argv[2] || 'master'
const seedVersion = parseInt(Bun.argv[3] || '0', 10)

if (!spaceId || !accessToken) {
  console.error('Missing CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN in .env')
  process.exit(1)
}

const baseUrl = `https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}`
const headers: Record<string, string> = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/vnd.contentful.management.v1+json'
}

// 1. Ensure content type exists
let res = await fetch(`${baseUrl}/content_types/versionTracking`, { headers })
if (!res.ok) {
  console.log('Creating versionTracking content type...')
  res = await fetch(`${baseUrl}/content_types/versionTracking`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      name: 'Version Tracking',
      description: 'Tracks the last applied migration version',
      displayField: 'version',
      fields: [
        { id: 'version', name: 'Version', type: 'Integer', required: true }
      ]
    })
  })
  const ct = await res.json()
  await fetch(`${baseUrl}/content_types/versionTracking/published`, {
    method: 'PUT',
    headers: { ...headers, 'X-Contentful-Version': ct.sys.version.toString() }
  })
  console.log('  ✓ content type created')
}

// 2. Get locale
const localesRes = await fetch(`${baseUrl}/locales`, { headers })
const localesData = await localesRes.json()
const locale = localesData.items.find((l: any) => l.default)?.code || 'es'

// 3. Check existing entry
const entriesRes = await fetch(
  `${baseUrl}/entries?content_type=versionTracking&limit=1`,
  { headers }
)
const entriesData = await entriesRes.json()

if (entriesData.items.length > 0) {
  const entry = entriesData.items[0]
  const updateRes = await fetch(`${baseUrl}/entries/${entry.sys.id}`, {
    method: 'PUT',
    headers: { ...headers, 'X-Contentful-Version': entry.sys.version.toString() },
    body: JSON.stringify({ fields: { version: { [locale]: seedVersion } } })
  })
  const updated = await updateRes.json()
  await fetch(`${baseUrl}/entries/${entry.sys.id}/published`, {
    method: 'PUT',
    headers: { ...headers, 'X-Contentful-Version': updated.sys.version.toString() }
  })
  console.log(`✓ Updated version to ${seedVersion} (env: ${environmentId})`)
} else {
  const createRes = await fetch(`${baseUrl}/entries`, {
    method: 'POST',
    headers: { ...headers, 'X-Contentful-Content-Type': 'versionTracking' },
    body: JSON.stringify({ fields: { version: { [locale]: seedVersion } } })
  })
  const entry = await createRes.json()
  await fetch(`${baseUrl}/entries/${entry.sys.id}/published`, {
    method: 'PUT',
    headers: { ...headers, 'X-Contentful-Version': entry.sys.version.toString() }
  })
  console.log(`✓ Created version entry at ${seedVersion} (env: ${environmentId})`)
}
