import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RoiCalculatorExperience from '@/components/RoiCalculatorExperience'
import { productName } from '@/lib/software-solutions'

export const metadata: Metadata = {
  title: 'ROI Calculator — DigiBim Hub',
  description: `Estimate annual time savings and ROI for the ${productName} enterprise license.`,
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
            <Link href="/contact?intent=licensing" className="btn-primary">
              Licensing enquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
