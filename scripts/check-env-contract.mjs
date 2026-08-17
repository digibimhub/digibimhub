#!/usr/bin/env node
/**
 * Ensures every process.env.* used in app/ and lib/ is documented in .env.example.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const SCAN_DIRS = ['app', 'lib']
const IGNORED_VARS = new Set([
  'NODE_ENV',
  'CI',
  'VERCEL',
  'VERCEL_ENV',
  'VERCEL_URL',
  'VERCEL_GIT_COMMIT_SHA',
])

function readDocumentedEnvVars(examplePath) {
  const content = fs.readFileSync(examplePath, 'utf8')
  const documented = new Set()

  for (const line of content.split('\n')) {
    const uncommented = line.match(/^([A-Z][A-Z0-9_]*)=/)
    if (uncommented) {
      documented.add(uncommented[1])
      continue
    }

    const commented = line.match(/^#\s*([A-Z][A-Z0-9_]*)=/)
    if (commented) documented.add(commented[1])
  }

  return documented
}

function collectSourceFiles(dir) {
  const files = []

  function walk(relativeDir) {
    const absoluteDir = path.join(ROOT, relativeDir)
    if (!fs.existsSync(absoluteDir)) return

    for (const entry of fs.readdirSync(absoluteDir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue

      const relativePath = path.join(relativeDir, entry.name)
      if (entry.isDirectory()) {
        walk(relativePath)
        continue
      }

      if (/\.(ts|tsx|js|mjs)$/.test(entry.name)) {
        files.push(relativePath)
      }
    }
  }

  walk(dir)
  return files
}

function collectUsedEnvVars(files) {
  const used = new Set()
  const pattern = /process\.env\.([A-Z][A-Z0-9_]*)/g

  for (const file of files) {
    const content = fs.readFileSync(path.join(ROOT, file), 'utf8')
    for (const match of content.matchAll(pattern)) {
      used.add(match[1])
    }
  }

  return used
}

const examplePath = path.join(ROOT, '.env.example')
if (!fs.existsSync(examplePath)) {
  console.error('Missing .env.example')
  process.exit(1)
}

const documented = readDocumentedEnvVars(examplePath)
const sourceFiles = SCAN_DIRS.flatMap(collectSourceFiles)
const used = collectUsedEnvVars(sourceFiles)

const missing = [...used]
  .filter((name) => !IGNORED_VARS.has(name))
  .filter((name) => !documented.has(name))
  .sort()

if (missing.length > 0) {
  console.error('Environment contract check failed.')
  console.error('These variables are used in code but not documented in .env.example:')
  for (const name of missing) {
    console.error(`  - ${name}`)
  }
  process.exit(1)
}

console.log(`Env contract OK (${used.size} variable reference(s) checked).`)
