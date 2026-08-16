import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StatsStrip from '@/components/StatsStrip'
import { COURSES, getCourse } from '@/lib/courses'

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export default async function CoursePage({ params }: Props) {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  const statItems = [
    { value: String(course.topics.length), label: 'Topics', sub: 'In syllabus' },
    { value: String(course.level), label: 'Course', sub: `of ${COURSES.length}` },
    { value: course.focus, label: 'Level', sub: 'Suggested focus' },
    { value: '—', label: 'Stack', sub: course.stack },
  ] as const

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-navy pb-6 pt-10 text-white sm:pt-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,180,73,0.1),transparent_50%)]" />
        <div className="container-max relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{course.levelLabel}</p>
          <h1 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">{course.title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">{course.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Enquire / enroll
            </Link>
            <Link href="/training" className="btn-secondary">
              All courses
            </Link>
          </div>
        </div>
      </section>

      <StatsStrip items={statItems} />

      <main className="section-padding bg-white">
        <div className="container-max max-w-6xl space-y-10">
          <div className="section-head mx-auto mb-2 max-w-3xl text-center">
            <p className="label-gold">Course detail</p>
            <h2 className="heading-md mt-2">Curriculum overview</h2>
            <p className="section-head-line" aria-hidden />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="card-course-bti p-7">
              <h2 className="text-lg font-bold text-navy">Ideal for</h2>
              <p className="mt-4 text-sm leading-relaxed text-navy/85">{course.idealFor}</p>
            </section>
            <section className="card-course-bti p-7">
              <h2 className="text-lg font-bold text-navy">Course overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-navy/85">{course.overview}</p>
            </section>
          </div>

          <section className="card-course-bti p-7">
            <h2 className="text-lg font-bold text-navy">Topics covered</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {course.topics.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 rounded-xl border border-navy/10 bg-[#f7f8fb] px-4 py-3 text-sm leading-relaxed text-navy/85"
                >
                  <span className="font-bold text-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="card-course-bti p-7">
            <h2 className="text-lg font-bold text-navy">Outcomes</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {course.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 rounded-xl border border-navy/10 bg-[#f7f8fb] px-4 py-3 text-sm leading-relaxed text-navy/85"
                >
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="section-head mb-8 text-center">
              <p className="label-gold">Learning path</p>
              <h2 className="heading-md mt-2">Learning path overview</h2>
              <p className="section-head-line mx-auto" aria-hidden />
            </div>
            <ul className="grid gap-6 md:grid-cols-3">
              {course.timeline.map((phase, idx) => (
                <li key={phase.title} className="card-course-bti flex flex-col p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-base font-bold text-gold">
                    {idx + 1}
                  </span>
                  <p className="label-gold mt-5">{phase.phase}</p>
                  <h3 className="mt-1 text-lg font-bold text-navy">{phase.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-navy/75">
                    {phase.items.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="text-gold">–</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <div className="rounded-2xl border border-navy/10 bg-[#f0f2f7] p-6 text-center text-sm leading-relaxed text-navy/80">
            Fees are not published on this site —{' '}
            <Link href="/contact" className="font-semibold text-gold underline-offset-2 hover:underline">
              contact us
            </Link>{' '}
            to discuss intake.
          </div>

          <div className="flex flex-wrap justify-center gap-3 pb-4">
            <Link href="/contact" className="btn-primary">
              Enquire / enroll
            </Link>
            <a
              href="https://wa.me/919025271848"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-on-light"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>

      <section className="band-cta-navy">
        <div className="container-max">
          <h2 className="text-xl font-bold">Still not sure about the course?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">
            Tell us your background and goals — we&apos;ll help you pick the right course among the six tracks.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
