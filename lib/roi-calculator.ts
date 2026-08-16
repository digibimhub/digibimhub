export type Currency = 'INR' | 'USD' | 'AED'

export type PresetKey = 'min' | 'avg' | 'max' | 'bare'

export type RateConfig = {
  min: number
  max: number
  step: number
  default: number
}

export type CurrencySettings = {
  licenseFee: number
  rate: RateConfig
  symbol: string
  locale: string
}

export const currencyConfig: Record<Currency, CurrencySettings> = {
  AED: {
    licenseFee: 20_000,
    rate: { min: 20, max: 150, step: 5, default: 50 },
    symbol: 'AED',
    locale: 'en-AE',
  },
  USD: {
    licenseFee: 5_000,
    rate: { min: 5, max: 40, step: 1, default: 14 },
    symbol: 'USD',
    locale: 'en-US',
  },
  INR: {
    licenseFee: 450_000,
    rate: { min: 400, max: 3300, step: 50, default: 1100 },
    symbol: '₹',
    locale: 'en-IN',
  },
}

export const presetLabels: Record<PresetKey, string> = {
  min: 'Min. savings',
  avg: 'Avg. savings',
  max: 'Max. savings',
  bare: 'Bare min.',
}

export const presets: Record<PresetKey, { hours: number; users: number }> = {
  min: { hours: 1, users: 50 },
  avg: { hours: 3, users: 50 },
  max: { hours: 6, users: 50 },
  bare: { hours: 0.23, users: 50 },
}

export const defaultPreset: PresetKey = 'avg'

export type RoiInputs = {
  currency: Currency
  rate: number
  hours: number
  users: number
}

export type RoiResult = {
  licenseFee: number
  weeklyHours: number
  annualHours: number
  annualSavings: number
  netSavings: number
  roiPercent: number
  paybackDays: number | null
  paybackBarPercent: number
  isPositiveRoi: boolean
}

export function calculateRoi(inputs: RoiInputs): RoiResult {
  const { rate, hours, users } = inputs
  const licenseFee = currencyConfig[inputs.currency].licenseFee

  const weeklyHours = hours * users
  const annualHours = weeklyHours * 52
  const annualSavings = rate * annualHours
  const netSavings = annualSavings - licenseFee
  const roiPercent = (netSavings / licenseFee) * 100

  let paybackDays: number | null = null
  let paybackBarPercent = 0

  if (annualSavings > 0) {
    paybackDays = Math.min(365, (licenseFee / annualSavings) * 365)
    paybackBarPercent = Math.max(2, Math.min(100, 100 - (paybackDays / 365) * 100))
  }

  return {
    licenseFee,
    weeklyHours,
    annualHours,
    annualSavings,
    netSavings,
    roiPercent,
    paybackDays,
    paybackBarPercent,
    isPositiveRoi: netSavings >= 0,
  }
}

export function formatNumber(value: number, locale: string): string {
  return Math.round(value).toLocaleString(locale)
}

export function formatMoney(value: number, currency: Currency): string {
  const { symbol, locale } = currencyConfig[currency]
  const formatted = formatNumber(value, locale)
  return currency === 'INR' ? `${symbol}${formatted}` : `${symbol} ${formatted}`
}

export function formatRate(value: number, currency: Currency): string {
  return formatMoney(value, currency)
}

export function formatHours(value: number): string {
  return `${value.toFixed(1)} hrs`
}

export function formatHoursSaved(value: number): string {
  return value.toFixed(2).replace(/\.00$/, '.0')
}

export function formatPercent(value: number): string {
  return `${formatNumber(value, 'en-US')}%`
}

export function formatPayback(paybackDays: number | null): string {
  if (paybackDays === null) return 'N/A'
  if (paybackDays >= 300) return '> 300 days'
  return `≈ ${Math.round(paybackDays)} days`
}

export function clampRate(rate: number, currency: Currency): number {
  const { min, max, step } = currencyConfig[currency].rate
  const stepped = Math.round(rate / step) * step
  return Math.min(max, Math.max(min, stepped))
}

export const hoursConfig = { min: 0.25, max: 8, step: 0.25 } as const
export const usersConfig = { min: 1, max: 200, step: 1 } as const

function clampToStep(value: number, min: number, max: number, step: number): number {
  const stepped = Math.round(value / step) * step
  return Math.min(max, Math.max(min, stepped))
}

export function clampHours(hours: number): number {
  return clampToStep(hours, hoursConfig.min, hoursConfig.max, hoursConfig.step)
}

export function clampUsers(users: number): number {
  return clampToStep(users, usersConfig.min, usersConfig.max, usersConfig.step)
}
