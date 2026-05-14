'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-brand-600">
            DigiB IMHub
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/training" className="text-gray-700 hover:text-brand-600">Training</Link>
            <Link href="/software" className="text-gray-700 hover:text-brand-600">Software</Link>
            <Link href="/consultancy" className="text-gray-700 hover:text-brand-600">Consultancy</Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-600">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/training" className="text-gray-700 hover:text-brand-600">Training</Link>
            <Link href="/software" className="text-gray-700 hover:text-brand-600">Software</Link>
            <Link href="/consultancy" className="text-gray-700 hover:text-brand-600">Consultancy</Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-600">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
