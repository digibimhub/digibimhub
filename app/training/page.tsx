import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { courseSummaries } from '@/lib/courses'
import StatsStrip from '@/components/StatsStrip'
import LeadershipPanel from '@/components/LeadershipPanel'
import {
  careerOpportunities,
  softwareCovered,
  trainingModes,
  whyChooseBimTraining,
} from '@/lib/training-meta'

export default function Training() {
  const courses = courseSummaries()

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-navy pb-8 pt-12 text-white sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,180,73,0.1),transparent_55%)]" />
        <div className="container-max relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Programs & skills to master</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">BIM training courses</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            Six courses from BIM foundations through advanced specialization — architecture, structure, MEP, coordination,
            and project delivery. Intake, batch format, and commercial terms are confirmed when you speak with us; fees
            are not quoted on this site.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Apply / enquire
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

      <StatsStrip />

      <main className="section-padding bg-white">
        <div className="container-max">
          <LeadershipPanel variant="card" className="mx-auto mb-10 max-w-2xl" />
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">Courses</p>
            <h2 className="heading-md mt-2">Choose your BIM course</h2>
            <p className="section-head-line" aria-hidden />
            <p className="mt-4 text-sm text-navy/75">
              Each card links to a full overview: who it is for, course summary, topics covered, outcomes, and a phased
              learning path.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <li key={course.slug} className="h-full">
                <Link href={`/training/${course.slug}`} className="card-course-bti flex h-full flex-col p-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy/50">Course {course.level}</span>
                  <h2 className="mt-2 text-lg font-bold leading-snug text-navy">{course.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/72">{course.tagline}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-navy/10 pt-4 text-xs text-navy/65">
                    <li className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>{course.duration}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>Topics, outcomes & learning path inside</span>
                    </li>
                  </ul>
                  <span className="mt-5 text-sm font-semibold text-gold">View course details →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <section className="section-padding bg-[#f0f2f7]">
        <div className="container-max">
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">Why us</p>
            <h2 className="heading-md mt-2">Why choose our BIM training?</h2>
            <p className="section-head-line" aria-hidden />
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseBimTraining.map((line) => (
              <li key={line} className="card-course-bti flex gap-3 p-5 text-left">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                  ✓
                </span>
                <p className="text-sm font-medium leading-relaxed text-navy/85">{line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">Software</p>
            <h2 className="heading-md mt-2">Software covered</h2>
            <p className="section-head-line" aria-hidden />
          </div>
          <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {softwareCovered.map((name) => (
              <li
                key={name}
                className="rounded-xl border border-navy/10 bg-[#f7f8fb] px-4 py-3 text-center text-sm font-semibold text-navy"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[#f0f2f7]">
        <div className="container-max">
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">Modes</p>
            <h2 className="heading-md mt-2">Training modes</h2>
            <p className="section-head-line" aria-hidden />
          </div>
          <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainingModes.map((mode) => (
              <li key={mode} className="card-course-bti p-6 text-center text-sm font-semibold text-navy">
                {mode}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="section-head mx-auto mb-10 max-w-3xl text-center">
            <p className="label-gold">Careers</p>
            <h2 className="heading-md mt-2">Career opportunities after BIM training</h2>
            <p className="section-head-line" aria-hidden />
          </div>
          <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 md:grid-cols-4">
            {careerOpportunities.map((role) => (
              <li
                key={role}
                className="rounded-xl border border-navy/10 bg-[#f7f8fb] px-4 py-3 text-center text-sm font-semibold text-navy"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-intro">
        <div className="container-max mx-auto max-w-3xl text-center text-sm leading-relaxed text-navy/80">
          <p className="font-semibold text-navy">Overview of our BIM courses</p>
          <p className="mt-3">
            Our catalogue moves from core BIM literacy into discipline-specific modeling (architectural, structural, and
            MEP), then into coordination and project management, and finally advanced BIM and specialization — so you
            can grow from first steps to leadership-oriented skills.
          </p>
        </div>
      </section>

      <section className="band-cta-navy">
        <div className="container-max">
          <h2 className="text-xl font-bold sm:text-2xl">Flexible intake — talk to a counsellor</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">
            Share your education, software exposure, and career goals — we&apos;ll suggest a course order and batch
            format. Fees are confirmed in conversation, not on the website.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get in touch
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
