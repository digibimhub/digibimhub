import Link from 'next/link'
import BrandLockup from '@/components/BrandLockup'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/20 bg-navy text-white">
      <div className="container-max flex flex-col items-center gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-6">
        <Link href="/" className="flex justify-center sm:justify-start min-w-0 flex-1 transition hover:opacity-90">
          <span className="sr-only">DigiBim Hub — home</span>
          <BrandLockup size="footer" />
        </Link>

        <div className="flex shrink-0 flex-col items-center gap-1.5 text-center text-xs leading-relaxed text-white/65 sm:items-end sm:text-right">
          <p>
            © {year} DigiBim Hub. All rights reserved.
          </p>
          <p>
            <a href="mailto:info@digibimhub.com" className="text-white/80 transition hover:text-gold">
              info@digibimhub.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
