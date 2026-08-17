'use client'

import { useMemo, useState } from 'react'
import {
  calculateRoi,
  clampHours,
  clampRate,
  clampUsers,
  currencyConfig,
  defaultPreset,
  formatHours,
  formatMoney,
  formatNumber,
  formatPayback,
  hoursConfig,
  presetLabels,
  presets,
  usersConfig,
  type Currency,
  type PresetKey,
} from '@/lib/roi-calculator'
import { revitAddons, productName } from '@/lib/software-solutions'

const currencies: Currency[] = ['INR', 'USD', 'AED']

type SliderFieldProps = {
  id: string
  label: string
  value: number
  min: number
  max: number
  step: number
  inputMode?: 'decimal' | 'numeric'
  note?: string
  clamp: (value: number) => number
  onChange: (value: number) => void
}

function SliderField({
  id,
  label,
  value,
  min,
  max,
  step,
  inputMode = 'numeric',
  note,
  clamp,
  onChange,
}: SliderFieldProps) {
  const [draft, setDraft] = useState<string | null>(null)
  const displayValue = draft ?? String(value)

  const commitValue = (raw: string) => {
    const parsed = parseFloat(raw)
    if (Number.isNaN(parsed)) {
      setDraft(null)
      return
    }

    setDraft(null)
    onChange(clamp(parsed))
  }

  return (
    <div>
      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <label htmlFor={id} className="min-w-0 flex-1 text-sm font-semibold leading-snug text-navy">
          {label}
        </label>
        <input
          id={id}
          type="number"
          inputMode={inputMode}
          min={min}
          max={max}
          step={step}
          value={displayValue}
          onChange={(e) => {
            setDraft(e.target.value)
            const parsed = parseFloat(e.target.value)
            if (!Number.isNaN(parsed)) onChange(parsed)
          }}
          onBlur={(e) => commitValue(e.target.value)}
          className="w-full shrink-0 rounded-md border border-navy/15 px-2.5 py-1 text-right text-sm font-bold tabular-nums text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold sm:w-28"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          setDraft(null)
          onChange(parseFloat(e.target.value))
        }}
        className="roi-range w-full"
        aria-labelledby={id}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
      <div className="mt-1 flex justify-between text-[10px] tabular-nums text-navy/40">
        <span>{min}</span>
        <span>{max}</span>
      </div>
      {note ? <p className="mt-2 text-xs leading-relaxed text-navy/60">{note}</p> : null}
    </div>
  )
}

type RoiCalculatorProps = {
  currency: Currency
  onCurrencyChange: (currency: Currency) => void
}

export default function RoiCalculator({ currency, onCurrencyChange }: RoiCalculatorProps) {
  const config = currencyConfig[currency]
  const initialPreset = presets[defaultPreset]

  const [rate, setRate] = useState(config.rate.default)
  const [hours, setHours] = useState(initialPreset.hours)
  const [users, setUsers] = useState(initialPreset.users)
  const [activePreset, setActivePreset] = useState<PresetKey | null>(defaultPreset)

  const result = useMemo(
    () => calculateRoi({ currency, rate: clampRate(rate, currency), hours: clampHours(hours), users: clampUsers(users) }),
    [currency, rate, hours, users],
  )

  const handleCurrencyChange = (next: Currency) => {
    onCurrencyChange(next)
    setRate(currencyConfig[next].rate.default)
  }

  const handleManualChange = () => setActivePreset(null)

  const applyPreset = (key: PresetKey) => {
    const preset = presets[key]
    setHours(preset.hours)
    setUsers(preset.users)
    setActivePreset(key)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="card-course-bti space-y-6 p-7">
        <div>
          <p className="label-gold">Inputs</p>
          <h2 className="mt-1 text-lg font-bold text-navy">Team &amp; savings assumptions</h2>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-navy">Currency</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Currency">
            {currencies.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={currency === c}
                onClick={() => handleCurrencyChange(c)}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                  currency === c
                    ? 'border-navy bg-navy text-white'
                    : 'border-navy/15 bg-white text-navy/70 hover:border-navy/40 hover:text-navy'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <SliderField
          id="roi-rate"
          label="Average hourly rate"
          value={clampRate(rate, currency)}
          min={config.rate.min}
          max={config.rate.max}
          step={config.rate.step}
          clamp={(v) => clampRate(v, currency)}
          onChange={(v) => {
            handleManualChange()
            setRate(v)
          }}
        />

        <SliderField
          id="roi-hours"
          label="Hours saved (weekly, per user)"
          value={clampHours(hours)}
          min={hoursConfig.min}
          max={hoursConfig.max}
          step={hoursConfig.step}
          inputMode="decimal"
          note="Bare-min case ≈ 0.23 hrs/wk (1 hr/month) · Max observed case = 6 hrs/wk"
          clamp={clampHours}
          onChange={(v) => {
            handleManualChange()
            setHours(v)
          }}
        />

        <SliderField
          id="roi-users"
          label="Number of users"
          value={clampUsers(users)}
          min={usersConfig.min}
          max={usersConfig.max}
          step={usersConfig.step}
          clamp={clampUsers}
          onChange={(v) => {
            handleManualChange()
            setUsers(v)
          }}
        />

        <div className="border-t border-dashed border-navy/10 pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy/50">Scenario presets</p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(presets) as PresetKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => applyPreset(key)}
                className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition ${
                  activePreset === key
                    ? 'border-navy bg-navy text-white'
                    : 'border-navy/15 bg-[#f8f9fb] text-navy/60 hover:border-navy/40 hover:text-navy'
                }`}
              >
                {presetLabels[key]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card-navy flex flex-col p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold/80">Return on investment</p>
          <h2 className="mt-1 text-lg font-bold text-white">Estimated outcomes</h2>
        </div>

        <div className="my-6 border-b border-dashed border-white/15 pb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50">ROI</p>
          <p className="mt-2 whitespace-nowrap text-5xl font-bold leading-none tabular-nums text-gold">
            {formatNumber(result.roiPercent, 'en-US')}
            <span className="text-2xl">%</span>
          </p>
          <p className="mt-3 text-xs text-white/60">
            {result.isPositiveRoi
              ? `Net return per ${currency} spent on license`
              : 'Investment not yet recovered at these inputs'}
          </p>
        </div>

        <dl className="space-y-0 text-sm">
          {[
            { label: 'Weekly hours saved (all users)', value: formatHours(result.weeklyHours), positive: false },
            { label: 'Annual hours saved (all users)', value: `${formatNumber(result.annualHours, 'en-US')} hrs`, positive: false },
            { label: 'Annual cost savings', value: formatMoney(result.annualSavings, currency), positive: false },
            { label: 'License fee', value: `− ${formatMoney(result.licenseFee, currency)}`, positive: false, negative: true },
            { label: 'Net savings', value: formatMoney(result.netSavings, currency), positive: result.isPositiveRoi },
            { label: 'Payback period', value: formatPayback(result.paybackDays), positive: false },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 border-b border-white/10 py-3 last:border-0"
            >
              <dt className="min-w-0 leading-snug text-white/65">{row.label}</dt>
              <dd
                className={`whitespace-nowrap text-right text-sm font-bold tabular-nums ${
                  row.positive ? 'text-emerald-300' : row.negative ? 'text-red-300' : 'text-white'
                }`}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <div className="mb-2 flex justify-between gap-3 text-[10px] font-semibold uppercase tracking-wide text-white/50">
            <span className="min-w-0">Payback within year 1</span>
            <span className="shrink-0 whitespace-nowrap tabular-nums">{Math.round(result.paybackBarPercent)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold-muted to-gold transition-all duration-300"
              style={{ width: `${result.paybackBarPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function LicenseStrip({ currency }: { currency: Currency }) {
  const fee = currencyConfig[currency].licenseFee

  return (
    <div className="mt-8 grid overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4 sm:items-stretch">
      <div className="border-b border-white/10 px-5 py-4 lg:border-b-0 lg:border-r">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">License type</p>
        <p className="mt-1 text-balance text-sm font-bold leading-snug text-white">
          Enterprise · <span className="text-gold">Unlimited users</span>
        </p>
      </div>
      <div className="border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Product</p>
        <p className="mt-1 text-balance text-sm font-bold leading-snug text-white">
          <span className="text-gold">{productName}</span>
          <span className="text-white/80"> · all {revitAddons.length} add-ins</span>
        </p>
      </div>
      <div className="border-b border-white/10 px-5 py-4 lg:border-b-0 lg:border-r">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Annual fee</p>
        <p className="mt-1 text-sm font-bold leading-snug tabular-nums text-white">
          <span className="whitespace-nowrap text-gold">{formatMoney(fee, currency)}</span> / yr
        </p>
      </div>
      <div className="px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Version coverage</p>
        <p className="mt-1 text-balance text-sm font-bold leading-snug text-white">
          R2022–R2026 · <span className="text-gold">free R2027 upgrade</span>
        </p>
      </div>
    </div>
  )
}
