'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        setError('Invalid email or password')
        return
      }

      const data = await res.json()
      localStorage.setItem('token', data.token)
      router.push('/portal/dashboard')
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <div className="section-padding">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="heading-sm mb-6 text-center">Student Login</h1>

          {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label className="block font-semibold mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-600"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <button type="submit" className="w-full btn-primary">LOGIN</button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-600">
              Don't have account? <Link href="/portal/register" className="text-brand-600 font-semibold">Register</Link>
            </p>
            <p className="text-gray-600 text-sm">
              <Link href="#" className="text-brand-600">Forgot password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
