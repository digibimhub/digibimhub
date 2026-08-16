import Link from 'next/link'

const items = [
  {
    href: '/training',
    title: 'Training',
    text: 'Six BIM courses from foundations through advanced — architecture, structure, MEP, coordination, and delivery.',
  },
  {
    href: '/software',
    title: 'Software solutions',
    text: 'Six Revit add-ons plus custom API development — sheets, QTO, coordination, families, audits, 4D, and integrations.',
  },
] as const

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="section-head mx-auto mb-10 max-w-2xl text-center">
          <p className="label-gold">Explore</p>
          <h2 className="heading-md mt-2">Two ways we work with you</h2>
          <p className="section-head-line" aria-hidden />
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:max-w-4xl md:mx-auto">
          {items.map(({ href, title, text }) => (
            <Link key={href} href={href} className="card-course-bti flex flex-col p-7">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">{text}</p>
              <span className="mt-6 text-sm font-semibold text-gold">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
