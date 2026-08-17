import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import StatsStrip from '@/components/StatsStrip'
import type { Metadata } from 'next'
import {
  bundleHeadline,
  futureDevelopments,
  productName,
  revitAddons,
  suiteHighlights,
  suiteTagline,
  supportedRevitVersions,
} from '@/lib/software-solutions'

export const metadata: Metadata = {
  title: `${productName} | DigiBim Hub`,
  description:
    `One company-wide license — unlimited users, all seven Revit add-ins in ${productName}. Protection, data, coordination, and MEP for Revit R2022–R2026.`,
}

const statItems = [
  { value: String(revitAddons.length), label: 'Add-ins', sub: 'All included' },
  { value: '∞', label: 'Users', sub: 'Unlimited per company' },
  { value: '1', label: 'License', sub: productName },
  { value: 'Revit', label: 'Platform', sub: supportedRevitVersions },
] as const

export default function Software() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-navy pb-8 pt-12 text-white sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,180,73,0.1),transparent_55%)]" />
        <div className="container-max relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            DigiBim Hub · {productName}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {revitAddons.length} Revit add-ins — {suiteTagline.toLowerCase()}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            {bundleHeadline}. Revit {supportedRevitVersions} supported · free upgrade to R2027.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact?intent=demo" className="btn-primary">
              Request a demo
            </Link>
            <a
              href="https://wa.me/919025271848"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <StatsStrip items={statItems} />

      <main className="section-padding bg-white">
        <div className="container-max">
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">Revit add-ins</p>
            <h2 className="heading-md mt-2">{productName}</h2>
            <p className="section-head-line" aria-hidden />
            <p className="mt-4 text-sm text-navy/75">{bundleHeadline}</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 text-xs font-medium text-navy/70">
              {suiteHighlights.map((item) => (
                <li key={item} className="rounded-full border border-navy/15 bg-[#f0f2f7] px-3 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid gap-8 lg:grid-cols-2">
            {revitAddons.map((addon, index) => (
              <li key={addon.slug} className="card-course-bti flex flex-col p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-navy/50">Add-in {index + 1}</span>
                <h2 className="mt-2 text-xl font-bold leading-snug text-navy">{addon.title}</h2>
                <p className="mt-1 text-sm font-medium text-gold">{addon.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm text-navy/80">
                  {addon.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="font-bold text-gold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm text-navy/75">
            All add-ins are included in one {productName} license.{' '}
            <Link href="/contact?intent=demo" className="font-semibold text-gold hover:text-gold-muted">
              Request a demo →
            </Link>
          </p>
        </div>
      </main>

      <section className="section-padding bg-[#f0f2f7]">
        <div className="container-max">
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">Roadmap</p>
            <h2 className="heading-md mt-2">Future developments</h2>
            <p className="section-head-line" aria-hidden />
          </div>
          <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {futureDevelopments.map((item) => (
              <li key={item} className="card flex gap-3 p-4 text-sm text-navy/85">
                <span className="font-bold text-gold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-cta-navy">
        <div className="container-max text-center">
          <h2 className="text-xl font-bold sm:text-2xl">See {productName} in action</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">
            Book a walkthrough of the full product — protection, QTO, linking, Excel, and MEP coordination.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact?intent=demo" className="btn-primary">
              Request a demo
            </Link>
            <Link href="/contact?intent=licensing" className="btn-secondary">
              Licensing enquiry
            </Link>
            <a
              href="https://wa.me/919025271848"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
