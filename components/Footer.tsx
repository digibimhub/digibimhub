import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'

const footerLinks = [
  { href: '/training', label: 'Training' },
  { href: '/software', label: 'Software' },
  { href: '/software/roi-calculator', label: 'ROI Calculator' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/contact', label: 'Contact' },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-max py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="max-w-md">
            <Link href="/" className="inline-block shrink-0">
              <span className="sr-only">DigiBim Hub — home</span>
              <BrandLogo variant="footer" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              BIM training and Revit add-ons.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-900">Quick links</h2>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-gray-600">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-brand-600">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="max-w-xs sm:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-900">Contact</h2>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-medium text-gray-900">DIGIBIM HUB PRIVATE LIMITED</p>
              <p className="mt-2 leading-relaxed">
                10B/3, Gandhi Nagar 10th Street, Tiruvannamalai, Tamil Nadu 606601, India
              </p>
              <p className="mt-3">
                <a href="mailto:info@digibimhub.com" className="hover:text-brand-600">
                  info@digibimhub.com
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+919025271848" className="hover:text-brand-600">
                  +91 90252 71848
                </a>{' '}
                (phone & WhatsApp)
              </p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} DigiBim Hub</p>
      </div>
    </footer>
  )
}
