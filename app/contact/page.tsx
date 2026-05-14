'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadershipPanel from '@/components/LeadershipPanel'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thanks — we'll get back to you shortly.")
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <Navbar />
      <main className="section-padding bg-white">
        <div className="container-max max-w-xl">
          <h1 className="heading-lg mb-2">Contact us</h1>
          <p className="mb-8 text-gray-600 text-sm">Message us about training, software, or placement support.</p>

          <LeadershipPanel variant="card" className="mb-8" />

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-gray-900">
              Name
              <input
                type="text"
                required
                value={formData.name}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label className="block text-sm font-medium text-gray-900">
              Email
              <input
                type="email"
                required
                value={formData.email}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <label className="block text-sm font-medium text-gray-900">
              Phone
              <input
                type="tel"
                value={formData.phone}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </label>
            <label className="block text-sm font-medium text-gray-900">
              Message
              <textarea
                rows={4}
                value={formData.message}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </label>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send
            </button>
          </form>

          <div className="mt-10 border-t border-gray-200 pt-8 text-sm text-gray-600">
            <p className="font-semibold text-gray-900">DIGIBIM HUB PRIVATE LIMITED</p>
            <address className="mt-3 not-italic leading-relaxed">
              10B/3, Gandhi Nagar 10th Street
              <br />
              Tiruvannamalai, Tamil Nadu 606601
              <br />
              India
            </address>
            <p className="mt-4">
              <a href="mailto:info@digibimhub.com" className="text-brand-600 hover:underline">
                info@digibimhub.com
              </a>
            </p>
            <p className="mt-2">
              Phone & WhatsApp:{' '}
              <a href="tel:+919025271848" className="text-brand-600 hover:underline">
                +91 90252 71848
              </a>
              {' · '}
              <a
                href="https://wa.me/919025271848"
                className="text-brand-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp chat
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
