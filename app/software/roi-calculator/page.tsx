import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RoiCalculatorExperience from '@/components/RoiCalculatorExperience'

export const metadata: Metadata = {
  title: 'ROI Calculator — DigiBim Hub',
  description: 'Estimate annual time savings and ROI for the Revit Add-In Suite enterprise license.',
}

export default function RoiCalculatorPage() {
  return (
    <>
      <Navbar />
      <RoiCalculatorExperience />

      <section className="band-cta-navy">
        <div className="container-max text-center">
          <h2 className="text-xl font-bold sm:text-2xl">Ready to discuss licensing?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75">
            Share your team size and workflows — we&apos;ll confirm scope, versions, and next steps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Contact us
            </Link>
            <Link href="/software" className="btn-secondary">
              View software
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
