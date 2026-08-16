import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import StatsStrip from '@/components/StatsStrip'
import {
  customDevelopmentIdealFor,
  customDevelopmentIntro,
  customDevelopmentServices,
  revitAddons,
} from '@/lib/software-solutions'

const statItems = [
  { value: '6', label: 'Add-ons', sub: 'Automation & BIM tools' },
  { value: 'API', label: 'Custom dev', sub: 'Revit API & plugins' },
  { value: 'Revit', label: 'Platform', sub: 'Autodesk Revit' },
  { value: 'BOQ', label: 'Data', sub: 'Excel · ERP · cloud' },
] as const

export default function Software() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-navy pb-8 pt-12 text-white sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,180,73,0.1),transparent_55%)]" />
        <div className="container-max relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Products · BIM tools · Automation</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Autodesk Revit add-ons & custom development
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            Ready-to-adapt add-ons for sheets, quantities, coordination, families, model health, and 4D progress — plus
            full custom Revit API solutions for your standards and integrations. Scope, versions, and licensing are
            confirmed on enquiry; we do not quote fees on this site.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Discuss a product or build
            </Link>
            <Link href="/software/roi-calculator" className="btn-secondary">
              Estimate ROI
            </Link>
            <Link href="/downloads" className="btn-secondary">
              Downloads
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
            <p className="label-gold">Add-ons</p>
            <h2 className="heading-md mt-2">Automation solutions for Revit</h2>
            <p className="section-head-line" aria-hidden />
            <p className="mt-4 text-sm text-navy/75">
              Each card summarizes the add-on: what it does, key features, and benefits. We can tailor behavior to your
              office standards after a short discovery call.
            </p>
          </div>

          <ul className="grid gap-8 lg:grid-cols-2">
            {revitAddons.map((addon, index) => (
              <li key={addon.title} className="card-course-bti flex flex-col p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-navy/50">Add-on {index + 1}</span>
                <h2 className="mt-2 text-xl font-bold leading-snug text-navy">{addon.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/80">{addon.overview}</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gold">Features</h3>
                    <ul className="mt-3 space-y-2 text-sm text-navy/80">
                      {addon.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="font-bold text-gold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gold">Benefits</h3>
                    <ul className="mt-3 space-y-2 text-sm text-navy/80">
                      {addon.benefits.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-gold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <section className="section-padding bg-[#f0f2f7]">
        <div className="container-max">
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">Custom development services</p>
            <h2 className="heading-md mt-2">Custom Revit add-on development</h2>
            <p className="section-head-line" aria-hidden />
            <p className="mt-4 text-sm leading-relaxed text-navy/75">{customDevelopmentIntro}</p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="card-course-bti p-7">
              <h3 className="text-lg font-bold text-navy">Services include</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-navy/85">
                {customDevelopmentServices.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="font-bold text-gold">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-course-bti p-7">
              <h3 className="text-lg font-bold text-navy">Ideal for</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {customDevelopmentIdealFor.map((org) => (
                  <li
                    key={org}
                    className="rounded-xl border border-navy/10 bg-white px-3 py-2.5 text-center text-sm font-semibold text-navy"
                  >
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band-cta-navy">
        <div className="container-max text-center">
          <h2 className="text-xl font-bold sm:text-2xl">Need a demo or a custom build?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">
            Describe your workflow, sample models, and integrations — we&apos;ll propose an add-on or a development
            roadmap.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Contact us
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
