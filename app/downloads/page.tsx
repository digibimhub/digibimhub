'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { bundleHeadline, productName } from '@/lib/software-solutions'
import { useState } from 'react'

type DownloadSuccess = {
  companyName: string
  productId: string
  downloadUrl: string
}

type DownloadError = {
  code: string
  message: string
}

const inputClass =
  'mt-1 w-full rounded-lg border border-navy/20 px-3 py-2.5 text-sm text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:bg-navy/5'

export default function DownloadsPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<DownloadSuccess | null>(null)
  const [error, setError] = useState<DownloadError | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = (await response.json()) as DownloadSuccess | DownloadError

      if (!response.ok) {
        setError(data as DownloadError)
        return
      }

      setSuccess(data as DownloadSuccess)
    } catch {
      setError({
        code: 'network_error',
        message: 'Could not reach the download service. Check your connection and try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-navy pb-8 pt-12 text-white sm:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,180,73,0.1),transparent_55%)]" />
        <div className="container-max relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Licensed software</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Downloads</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            For organizations with an active {productName} license. {bundleHeadline}.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">
            Enter your company email to download authorized Revit add-in installers. Access is limited to approved
            organization domains. Use Contact in the menu for licensing access.
          </p>
        </div>
      </section>

      <main className="section-padding bg-white">
        <div className="container-max max-w-xl">
          {!success ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-sm font-medium text-navy">
                  Work email
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    placeholder="you@yourcompany.com"
                    disabled={loading}
                    className={inputClass}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <p className="text-xs text-navy/60">
                  We use your email domain to verify download access. Personal email providers are not accepted.
                </p>
                <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60">
                  {loading ? 'Checking access…' : 'Continue to download'}
                </button>
              </form>

              {error ? (
                <div
                  className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900"
                  role="alert"
                >
                  <p className="font-semibold">
                    {error.code === 'not_authorized' ? 'Access not authorized' : 'Unable to proceed'}
                  </p>
                  <p className="mt-2">{error.message}</p>
                  {error.code === 'not_authorized' || error.code === 'free_mail' ? (
                    <p className="mt-4">
                      <Link href="/contact?intent=licensing" className="font-semibold text-gold hover:text-gold-muted">
                        Request licensing access
                      </Link>{' '}
                      for your organization.
                    </p>
                  ) : null}
                </div>
              ) : null}
            </>
          ) : (
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-sm text-green-950">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-800">Access granted</p>
              <p className="mt-3 text-base font-semibold text-navy">{success.companyName}</p>
              <p className="mt-4 text-navy/75">
                Your download is ready. Keep the link private — it is for authorized use only.
              </p>
              <a href={success.downloadUrl} className="btn-primary mt-6 inline-flex" download>
                Download installer
              </a>
              <button
                type="button"
                className="mt-4 block text-sm font-medium text-gold hover:text-gold-muted"
                onClick={() => {
                  setSuccess(null)
                  setError(null)
                }}
              >
                Use a different email
              </button>
            </div>
          )}

          <div className="mt-10 border-t border-navy/10 pt-8 text-sm text-navy/75">
            <p className="font-semibold text-navy">Need help?</p>
            <p className="mt-2">
              Email{' '}
              <a href="mailto:info@digibimhub.com" className="font-medium text-gold hover:text-gold-muted">
                info@digibimhub.com
              </a>{' '}
              or{' '}
              <Link href="/contact?intent=licensing" className="font-medium text-gold hover:text-gold-muted">
                request licensing access
              </Link>{' '}
              if your organization should have access.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
