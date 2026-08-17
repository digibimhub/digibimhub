import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import Footer from '@/components/Footer'
import { productName } from '@/lib/software-solutions'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseGrid />
      <section className="band-cta-navy">
        <div className="container-max">
          <h2 className="text-2xl font-bold sm:text-3xl">Have a question? Get in touch</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
            Share your experience and target role — we&apos;ll suggest a training track and next steps. Software licensing
            and pricing are on the {productName} and ROI Calculator pages.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
