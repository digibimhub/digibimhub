#!/usr/bin/env node
/**
 * Lightweight secret scan for CI — no third-party license required.
 * Scans PR diffs or tracked source files for common credential patterns.
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const SCAN_PATHS = ['app', 'components', 'lib', 'scripts', '.github']
const ALLOWLIST = [
  're_ci_dummy_not_a_real_key',
  're_xxxxxxxx',
  're_ci_dummy',
]

const RULES = [
  { name: 'Resend API key', pattern: /re_[a-zA-Z0-9]{20,}/g },
  { name: 'GitHub personal access token', pattern: /ghp_[a-zA-Z0-9]{20,}/g },
  { name: 'GitHub fine-grained token', pattern: /github_pat_[a-zA-Z0-9_]{20,}/g },
  { name: 'AWS access key ID', pattern: /AKIA[0-9A-Z]{16}/g },
  { name: 'Private key block', pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g },
]

function run(command) {
  return execSync(command, { encoding: 'utf8', cwd: ROOT }).trim()
}

function listTrackedEnvFiles() {
  return run("git ls-files '.env' '.env.local' '.env.*.local'")
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function isScannableFile(relativePath) {
  if (!relativePath) return false
  if (relativePath.endsWith('.png') || relativePath.endsWith('.jpg') || relativePath.endsWith('.ico')) {
    return false
  }
  return /\.(ts|tsx|js|mjs|jsx|json|yml|yaml|md|env|example|css|html)$/.test(relativePath)
}

function readPushScanContent() {
  const files = run('git ls-files')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .filter(isScannableFile)
    .filter((file) => SCAN_PATHS.some((prefix) => file === prefix || file.startsWith(`${prefix}/`)))

  return files.map((file) => fs.readFileSync(path.join(ROOT, file), 'utf8')).join('\n')
}

function readPullRequestScanContent() {
  const base = process.env.PR_BASE_SHA
  const head = process.env.PR_HEAD_SHA
  if (!base || !head) {
    throw new Error('PR_BASE_SHA and PR_HEAD_SHA are required for pull_request scans.')
  }
  return run(`git diff ${base}...${head}`)
}

function findMatches(content) {
  const findings = []

  for (const rule of RULES) {
    rule.pattern.lastIndex = 0
    for (const match of content.matchAll(rule.pattern)) {
      const value = match[0]
      if (ALLOWLIST.some((allowed) => value.includes(allowed))) continue
      findings.push({ rule: rule.name, value })
    }
  }

  return findings
}

const trackedEnvFiles = listTrackedEnvFiles()
if (trackedEnvFiles.length > 0) {
  console.error('Tracked env files must not be committed:')
  for (const file of trackedEnvFiles) console.error(`  - ${file}`)
  process.exit(1)
}

const content =
  process.env.GITHUB_EVENT_NAME === 'pull_request' ? readPullRequestScanContent() : readPushScanContent()

const findings = findMatches(content)
if (findings.length > 0) {
  console.error('Potential secrets detected:')
  for (const finding of findings) {
    console.error(`  - ${finding.rule}: ${finding.value.slice(0, 12)}…`)
  }
  process.exit(1)
}

console.log('Secret scan OK.')
