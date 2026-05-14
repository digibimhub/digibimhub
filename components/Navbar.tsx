'use client'

import Link from 'next/link'
import { useState } from 'react'
import BrandLogo from '@/components/BrandLogo'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = 'text-sm font-medium text-white/90 transition hover:text-gold'

  return (
    <nav className="sticky top-0 z-50 border-b border-gold/20 bg-navy shadow-card">
      <div className="container-max">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center text-white">
            <span className="sr-only">DigiBim Hub — home</span>
            <BrandLogo variant="nav" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/training" className={linkClass}>
              Training
            </Link>
            <Link href="/software" className={linkClass}>
              Software
            </Link>
            <Link href="/consultancy" className={linkClass}>
              Placement
            </Link>
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-gold md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileOpen ? (
          <div className="flex flex-col gap-3 border-t border-gold/15 py-4 md:hidden">
            <Link href="/training" className={linkClass} onClick={() => setMobileOpen(false)}>
              Training
            </Link>
            <Link href="/software" className={linkClass} onClick={() => setMobileOpen(false)}>
              Software
            </Link>
            <Link href="/consultancy" className={linkClass} onClick={() => setMobileOpen(false)}>
              Placement
            </Link>
            <Link href="/contact" className={linkClass} onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
