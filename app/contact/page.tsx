'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import {
  bundleHeadline,
  customDevelopmentServices,
  demoFocusOptions,
  formatLicenseFee,
  getAddonBySlug,
  getProductLabel,
  interestOptions,
  licensingSummary,
  productName,
  revitAddons,
} from '@/lib/software-solutions'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'

type ContactError = {
  code: string
  message: string
}

type SuccessState = {
  interest: string
  product?: string
}

const inputClass =
  'mt-1 w-full rounded-lg border border-navy/20 px-3 py-2.5 text-sm text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:bg-navy/5'

function heroCopy(interest: string) {
  switch (interest) {
    case 'demo':
      return {
        title: 'Request a demo',
        description:
          `See ${productName} in action. Tell us about your Revit versions, team size, and workflows — we will schedule a walkthrough of the add-ins relevant to you.`,
      }
    case 'licensing':
      return {
        title: 'Licensing enquiry',
        description:
          `One company-wide license includes all add-ins with unlimited users. Ask about pricing in your region and what is included in ${productName}.`,
      }
    case 'custom-dev':
      return {
        title: 'Custom development',
        description:
          'Tell us about the Revit workflow you want to automate — we build custom add-ins and integrations tailored to your team.',
      }
    case 'training':
      return {
        title: 'Training enquiry',
        description: 'Message us about BIM courses, team training, or certification paths for your organization.',
      }
    default:
      return {
        title: 'Contact us',
        description: 'Message us about BIM training, Revit add-ins, licensing, or custom development.',
      }
  }
}

function SidebarPanel({ interest, product }: { interest: string; product: string }) {
  const addon = product !== 'full-suite' ? getAddonBySlug(product) : undefined
  const { AED, USD, INR } = licensingSummary.fees

  return (
    <div className="flex flex-col gap-5 lg:sticky lg:top-24">
      {interest === 'demo' ? (
        <div className="rounded-xl border border-gold/30 bg-gold/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">Demo request</p>
          {addon ? (
            <>
              <p className="mt-2 text-lg font-bold text-navy">{addon.title}</p>
              <p className="mt-1 text-sm font-medium text-gold">{addon.tagline}</p>
            </>
          ) : (
            <>
              <p className="mt-2 text-lg font-bold text-navy">{productName}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/80">
                Walkthrough of all {revitAddons.length} add-ins — protection, data, coordination, and MEP workflows.
              </p>
            </>
          )}
        </div>
      ) : null}

      {interest === 'custom-dev' ? (
        <div className="rounded-xl border border-navy/10 bg-[#f0f2f7] p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">What we build</p>
          <ul className="mt-3 space-y-2 text-sm text-navy/80">
            {customDevelopmentServices.slice(0, 5).map((s) => (
              <li key={s} className="flex gap-2">
                <span className="font-bold text-gold">✓</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="rounded-xl border border-navy/10 bg-[#f0f2f7] p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold">Enterprise license</p>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-navy">{bundleHeadline}</p>
        <p className="mt-2 text-sm leading-relaxed text-navy/80">{licensingSummary.model}</p>
        <ul className="mt-4 space-y-2.5 text-sm text-navy/85">
          <li className="flex items-baseline justify-between gap-4 border-b border-navy/10 pb-2">
            <span>United Arab Emirates</span>
            <span className="shrink-0 text-right font-semibold text-navy">{formatLicenseFee(AED, 'AED')} / yr</span>
          </li>
          <li className="flex items-baseline justify-between gap-4 border-b border-navy/10 pb-2">
            <span>United States</span>
            <span className="shrink-0 text-right font-semibold text-navy">{formatLicenseFee(USD, 'USD')} / yr</span>
          </li>
          <li className="flex items-baseline justify-between gap-4">
            <span>India</span>
            <span className="shrink-0 text-right font-semibold text-navy">{formatLicenseFee(INR, 'INR')} / yr</span>
          </li>
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-navy/60">
          All {revitAddons.length} add-ins · {licensingSummary.revitVersions} · unlimited users per company
        </p>
        <p className="mt-2 text-xs text-navy/60">{licensingSummary.perUserCostNote}</p>
      </div>

      {interest === 'demo' ? (
        <div className="rounded-xl border border-navy/10 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">What happens next</p>
          <ol className="mt-3 space-y-3 text-sm text-navy/80">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-navy">
                1
              </span>
              <span>We review your message and Revit setup</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-navy">
                2
              </span>
              <span>We schedule a live walkthrough at a time that suits you</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-navy">
                3
              </span>
              <span>We focus the demo on the add-ins most relevant to your workflow</span>
            </li>
          </ol>
        </div>
      ) : null}

      <div className="rounded-xl border border-navy/10 bg-white p-5 text-sm text-navy/75">
        <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">Contact</p>
        <p className="mt-3 font-semibold text-navy">DIGIBIM HUB PRIVATE LIMITED</p>
        <address className="mt-2 not-italic leading-relaxed">
          10B/3, Gandhi Nagar 10th Street
          <br />
          Tiruvannamalai, Tamil Nadu 606601
          <br />
          India
        </address>
        <p className="mt-4">
          <a href="mailto:info@digibimhub.com" className="font-medium text-gold hover:text-gold-muted">
            info@digibimhub.com
          </a>
        </p>
        <p className="mt-2">
          <a href="tel:+919025271848" className="font-medium text-gold hover:text-gold-muted">
            +91 90252 71848
          </a>
          {' · '}
          <a
            href="https://wa.me/919025271848"
            className="font-medium text-gold hover:text-gold-muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  )
}

function ContactForm() {
  const searchParams = useSearchParams()
  const defaultIntent = searchParams.get('intent') ?? 'general'
  const defaultProduct = searchParams.get('product') ?? 'full-suite'

  const validIntent = interestOptions.some((o) => o.value === defaultIntent) ? defaultIntent : 'general'
  const validProduct = demoFocusOptions.some((o) => o.value === defaultProduct) ? defaultProduct : 'full-suite'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: validIntent,
    product: validProduct,
    message: '',
    website: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ContactError | null>(null)
  const [success, setSuccess] = useState<SuccessState | null>(null)

  const showDemoFocus = formData.interest === 'demo'
  const isDemo = formData.interest === 'demo'
  const hero = heroCopy(formData.interest)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = (await response.json()) as { ok?: boolean; code?: string; message?: string }

      if (!response.ok) {
        setError({ code: data.code ?? 'error', message: data.message ?? 'Could not send your message.' })
        return
      }

      setSuccess({ interest: formData.interest, product: showDemoFocus ? formData.product : undefined })
    } catch {
      setError({
        code: 'network_error',
        message: 'Could not reach the contact service. Check your connection and try again.',
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get in touch</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">{hero.description}</p>
        </div>
      </section>

      <main className="section-padding bg-white">
        <div className="container-max max-w-6xl">
          {success ? (
            <div className="mx-auto max-w-2xl rounded-xl border border-green-200 bg-green-50 p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-800">Message sent</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">
                {success.interest === 'demo' ? 'Demo request received' : 'Thanks for reaching out'}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy/80">
                {success.interest === 'licensing' ? (
                  <>
                    We received your licensing enquiry for {productName}. We will get back to you
                    shortly with next steps.
                  </>
                ) : success.interest === 'demo' && success.product ? (
                  <>
                    We received your demo request for{' '}
                    <strong>{getProductLabel(success.product)}</strong>. We will get back to you shortly to schedule
                    next steps.
                  </>
                ) : (
                  <>We will get back to you shortly.</>
                )}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="https://wa.me/919025271848" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-3 lg:order-1">
                <div className="card-course-bti p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm font-medium text-navy">
                        Name
                        <input
                          type="text"
                          required
                          disabled={loading}
                          value={formData.name}
                          className={inputClass}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </label>

                      <label className="block text-sm font-medium text-navy">
                        Email
                        <input
                          type="email"
                          required
                          disabled={loading}
                          value={formData.email}
                          className={inputClass}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm font-medium text-navy">
                        Phone
                        <input
                          type="tel"
                          disabled={loading}
                          value={formData.phone}
                          className={inputClass}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </label>

                      <label className="block text-sm font-medium text-navy">
                        Company / Organization
                        <input
                          type="text"
                          disabled={loading}
                          value={formData.company}
                          className={inputClass}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm font-medium text-navy">
                        I am interested in
                        <select
                          disabled={loading}
                          value={formData.interest}
                          className={inputClass}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        >
                          {interestOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </label>

                      {showDemoFocus ? (
                        <label className="block text-sm font-medium text-navy">
                          Focus area (optional)
                          <select
                            disabled={loading}
                            value={formData.product}
                            className={inputClass}
                            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          >
                            {demoFocusOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </label>
                      ) : (
                        <div className="hidden sm:block" aria-hidden />
                      )}
                    </div>

                    <label className="block text-sm font-medium text-navy">
                      Message{isDemo ? ' (required for demo requests)' : ''}
                      <textarea
                        rows={5}
                        disabled={loading}
                        required={isDemo}
                        value={formData.message}
                        placeholder="Tell us about your Revit versions, team size, and workflows."
                        className={inputClass}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </label>

                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden
                      className="pointer-events-none absolute h-0 w-0 opacity-0"
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />

                    {error ? (
                      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900" role="alert">
                        <p className="font-semibold">Unable to send</p>
                        <p className="mt-1">{error.message}</p>
                        {error.code === 'server_error' ? (
                          <p className="mt-3">
                            You can also email{' '}
                            <a href="mailto:info@digibimhub.com" className="font-semibold underline">
                              info@digibimhub.com
                            </a>{' '}
                            directly.
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60">
                      {loading ? 'Sending…' : isDemo ? 'Request demo' : 'Send message'}
                    </button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-2 lg:order-2">
                <SidebarPanel interest={formData.interest} product={formData.product} />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function Contact() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  )
}
