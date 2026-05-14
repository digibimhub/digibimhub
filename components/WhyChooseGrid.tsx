import { whyChooseBimTraining } from '@/lib/training-meta'

export default function WhyChooseGrid() {
  return (
    <section className="section-padding bg-[#f0f2f7]">
      <div className="container-max">
        <div className="section-head mx-auto mb-12 max-w-3xl text-center">
          <p className="label-gold">Why DigiBim Hub</p>
          <h2 className="heading-md mt-2">Why choose our BIM training?</h2>
          <p className="section-head-line" aria-hidden />
          <p className="mt-4 text-sm leading-relaxed text-navy/75">
            Same principles we list on the training page — practical curriculum, flexible modes, and career support.
            Fees are not shown online; intake is confirmed in conversation.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseBimTraining.map((line) => (
            <li key={line} className="card-course-bti flex flex-col p-6 text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                ✓
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-navy">{line}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
