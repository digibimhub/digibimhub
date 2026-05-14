'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message. We\'ll contact you soon!')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <Navbar />
      <div className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Get in Touch</h1>
            <p className="text-gray-600">We'd love to hear from you. Send us a message!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button type="submit" className="w-full btn-primary">SEND MESSAGE</button>
          </form>

          <div className="mt-12 pt-12 border-t grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600">+91 85915 56811</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">domesticsoundlines@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
