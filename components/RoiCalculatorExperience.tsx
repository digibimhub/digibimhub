'use client'

import { useState } from 'react'
import RoiCalculator, { LicenseStrip } from '@/components/RoiCalculator'
import type { Currency } from '@/lib/roi-calculator'

export default function RoiCalculatorExperience() {
  const [currency, setCurrency] = useState<Currency>('AED')

  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-10 pt-12 text-white sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,180,73,0.1),transparent_55%)]" />
        <div className="container-max relative max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            BIM Soft Solutions · Revit Add-In Suite
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">ROI Calculator</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            Estimate annual time savings, cost savings, and return on investment from deploying the company-wide
            enterprise license across your BIM team.
          </p>
          <LicenseStrip currency={currency} />
        </div>
      </section>

      <div className="section-padding bg-white">
        <div className="container-max max-w-5xl">
          <RoiCalculator currency={currency} onCurrencyChange={setCurrency} />

          <p className="mt-8 text-center text-xs text-navy/50">
            Internal estimate only — not a guarantee of savings or ROI.
          </p>
        </div>
      </div>
    </>
  )
}
