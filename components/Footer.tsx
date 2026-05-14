import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-max py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-block shrink-0">
              <span className="sr-only">DigiBim Hub — home</span>
              <BrandLogo variant="footer" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              BIM training, Revit add-ons, and career support.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <Link href="/training" className="hover:text-brand-600">Training</Link>
            <Link href="/software" className="hover:text-brand-600">Software</Link>
            <Link href="/consultancy" className="hover:text-brand-600">Placement</Link>
            <Link href="/contact" className="hover:text-brand-600">Contact</Link>
          </nav>
          <div className="max-w-xs text-sm text-gray-600">
            <p className="font-medium text-gray-900">DIGIBIM HUB PRIVATE LIMITED</p>
            <p className="mt-2 leading-relaxed">
              10B/3, Gandhi Nagar 10th Street, Tiruvannamalai, Tamil Nadu 606601, India
            </p>
            <p className="mt-2">
              <a href="mailto:info@digibimhub.com" className="hover:text-brand-600">
                info@digibimhub.com
              </a>
            </p>
            <p className="mt-1">
              <a href="tel:+919025271848" className="hover:text-brand-600">
                +91 90252 71848
              </a>{' '}
              (phone & WhatsApp)
            </p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} DigiBim Hub</p>
      </div>
    </footer>
  )
}
