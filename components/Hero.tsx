import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white section-padding">
      <div className="container-max text-center">
        <h1 className="heading-lg mb-4">Master BIM. Build Your Career.</h1>
        <p className="text-xl mb-8 text-brand-100">From Fresher to Manager Level</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/training" className="btn-primary bg-white text-brand-600 hover:bg-brand-50">
            EXPLORE COURSES
          </Link>
          <Link href="/training/quiz" className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-brand-600">
            TAKE QUIZ
          </Link>
        </div>
      </div>
    </section>
  )
}
