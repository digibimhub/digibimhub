import Link from 'next/link'
import StatsStrip from '@/components/StatsStrip'

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-6 pt-12 text-white sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,180,73,0.12),transparent_50%)]" />
        <div className="container-max relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">BIM training</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Acquire high-demand BIM skills
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/85 sm:text-lg">
            Six courses covering foundations, architectural, structural, and MEP modeling, plus coordination and advanced
            BIM — alongside Revit add-ons. Structured like a professional course catalogue.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-gold/95">
            If not now, then when — book a conversation and we&apos;ll map the right track.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/training" className="btn-primary">
              View BIM courses
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
      <StatsStrip />
    </>
  )
}
