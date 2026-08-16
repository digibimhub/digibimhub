export type DownloadProduct = {
  id: string
  link: string
  domains: string[]
}

export type DownloadRegistry = {
  products: DownloadProduct[]
}

const FREE_MAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.in',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
  'proton.me',
  'protonmail.com',
  'aol.com',
  'mail.com',
  'zoho.com',
  'yandex.com',
  'rediffmail.com',
])

const MULTI_PART_TLDS = ['co.in', 'co.uk', 'com.au', 'co.nz', 'com.br', 'co.za', 'com.sg']

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

let cachedRegistry: DownloadRegistry | null = null

function parseRegistry(): DownloadRegistry {
  if (cachedRegistry) return cachedRegistry

  const raw = process.env.DOWNLOAD_REGISTRY
  if (!raw?.trim()) {
    throw new Error('DOWNLOAD_REGISTRY environment variable is not set')
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    throw new Error('DOWNLOAD_REGISTRY must be valid JSON')
  }

  if (!parsed || typeof parsed !== 'object' || !Array.isArray((parsed as DownloadRegistry).products)) {
    throw new Error('DOWNLOAD_REGISTRY must contain a products array')
  }

  const registry = parsed as DownloadRegistry
  for (const product of registry.products) {
    if (!product.id || !product.link || !Array.isArray(product.domains)) {
      throw new Error('Each product must include id, link, and domains')
    }
  }

  cachedRegistry = registry
  return registry
}

export function getDownloadRegistry(): DownloadRegistry {
  return parseRegistry()
}

export function parseEmail(email: string): { local: string; domain: string } | null {
  const normalized = email.trim().toLowerCase()
  if (!EMAIL_REGEX.test(normalized)) return null

  const [local, domain] = normalized.split('@')
  if (!local || !domain) return null

  return { local, domain }
}

export function isFreeMailDomain(domain: string): boolean {
  return FREE_MAIL_DOMAINS.has(domain.toLowerCase())
}

export function getProductForDomain(domain: string): DownloadProduct | null {
  const registry = parseRegistry()
  const normalized = domain.toLowerCase()

  return registry.products.find((product) =>
    product.domains.some((allowed) => allowed.toLowerCase() === normalized),
  ) ?? null
}

export function extractCompanyName(domain: string): string {
  const normalized = domain.toLowerCase()

  for (const tld of MULTI_PART_TLDS) {
    if (normalized.endsWith(`.${tld}`)) {
      const withoutTld = normalized.slice(0, -(tld.length + 1))
      const slug = withoutTld.split('.').pop() ?? withoutTld
      return formatCompanySlug(slug)
    }
  }

  const parts = normalized.split('.')
  if (parts.length >= 2) {
    return formatCompanySlug(parts[parts.length - 2])
  }

  return formatCompanySlug(normalized)
}

function formatCompanySlug(slug: string): string {
  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
