import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import StatsStrip from '@/components/StatsStrip'
import LeadershipPanel from '@/components/LeadershipPanel'
import {
  placementIntro,
  placementRoles,
  placementSupportSections,
  whyStudentsChooseUs,
} from '@/lib/placement-meta'

const statItems = [
  { value: '6', label: 'Support areas', sub: 'Resume → leadership' },
  { value: '9+', label: 'Role targets', sub: 'Common BIM titles' },
  { value: '360°', label: 'Guidance', sub: 'Beginner to advanced' },
  { value: 'Live', label: 'Exposure', sub: 'Project-style practice' },
] as const

export default function Consultancy() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-navy pb-8 pt-12 text-white sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,180,73,0.1),transparent_55%)]" />
        <div className="container-max relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Career assistance</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Placement support & career assistance
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">{placementIntro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to placement team
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
          <LeadershipPanel variant="hero" />
        </div>
      </section>

      <StatsStrip items={statItems} />

      <main className="section-padding bg-white">
        <div className="container-max">
          <LeadershipPanel variant="card" className="mx-auto mb-10 max-w-2xl" />
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">What we offer</p>
            <h2 className="heading-md mt-2">Our placement support includes</h2>
            <p className="section-head-line" aria-hidden />
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placementSupportSections.map((section) => (
              <li key={section.title} className="card-course-bti flex flex-col p-7">
                <h3 className="text-lg font-bold text-navy">{section.title}</h3>
                <ul className="mt-4 flex-1 space-y-2.5 text-sm leading-relaxed text-navy/80">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="font-bold text-gold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <section className="mt-16">
            <div className="section-head mx-auto mb-8 max-w-3xl text-center">
              <p className="label-gold">Career paths</p>
              <h2 className="heading-md mt-2">Roles our students can apply for</h2>
              <p className="section-head-line" aria-hidden />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {placementRoles.map((role) => (
                <li
                  key={role}
                  className="rounded-xl border border-navy/10 bg-[#f7f8fb] px-4 py-3 text-center text-sm font-semibold text-navy"
                >
                  {role}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16">
            <div className="section-head mx-auto mb-8 max-w-3xl text-center">
              <p className="label-gold">Why us</p>
              <h2 className="heading-md mt-2">Why students choose us</h2>
              <p className="section-head-line" aria-hidden />
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyStudentsChooseUs.map((line) => (
                <li key={line} className="card-course-bti flex gap-3 p-6 text-left">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                    ✓
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-navy/85">{line}</p>
                </li>
              ))}
            </ul>
          </section>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-navy/10 bg-[#f0f2f7] p-6 text-center text-sm leading-relaxed text-navy/80">
            Placement support is coaching, preparation, and referrals where appropriate — not a guaranteed job offer.
            Outcomes depend on your profile, market conditions, and how you use the guidance provided.
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/training" className="btn-secondary-on-light">
              View training courses
            </Link>
            <Link href="/contact" className="btn-primary">
              Enquire about placement
            </Link>
          </div>
        </div>
      </main>

      <section className="band-cta-navy">
        <div className="container-max text-center">
          <h2 className="text-xl font-bold sm:text-2xl">Ready to plan your BIM career?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">
            Share your background and target roles — we&apos;ll suggest next steps alongside the right training track.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
