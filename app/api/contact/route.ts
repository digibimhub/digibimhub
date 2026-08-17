import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  demoFocusOptions,
  getProductLabel,
  interestOptions,
  productName,
  revitAddons,
  type InterestValue,
} from '@/lib/software-solutions'

type ContactRequestBody = {
  name?: string
  email?: string
  phone?: string
  company?: string
  interest?: string
  product?: string
  message?: string
  website?: string
}

const DEFAULT_CONTACT_EMAIL = 'info@digibimhub.com'

function formatFromAddress(email: string): string {
  if (email.includes('<')) return email
  return `DigiBim Hub <${email}>`
}
const validInterests = new Set(interestOptions.map((o) => o.value))
const validFocusOptions = new Set(demoFocusOptions.map((o) => o.value))

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function interestLabel(value: string): string {
  return interestOptions.find((o) => o.value === value)?.label ?? value
}

function buildSubject(interest: InterestValue, product?: string): string {
  if (interest === 'demo') {
    const label = product ? getProductLabel(product) : productName
    return `[DigiBim] Demo request — ${label}`
  }
  if (interest === 'licensing') {
    return `[DigiBim] Licensing enquiry — ${productName} (all ${revitAddons.length} add-ins)`
  }
  return `[DigiBim] ${interestLabel(interest)}`
}

function buildEmailHtml(fields: {
  name: string
  email: string
  phone: string
  company: string
  interest: InterestValue
  product?: string
  message: string
}): string {
  const rows: [string, string][] = [
    ['Name', fields.name],
    ['Email', fields.email],
    ['Phone', fields.phone || '—'],
    ['Company', fields.company || '—'],
    ['Interest', interestLabel(fields.interest)],
    ...(fields.interest === 'demo' && fields.product
      ? [['Focus area', getProductLabel(fields.product)] as [string, string]]
      : []),
    ...(fields.interest === 'licensing'
      ? [['License', `${productName} (all ${revitAddons.length} add-ins)`] as [string, string]]
      : []),
    ['Message', fields.message || '—'],
    ['Submitted', new Date().toISOString()],
  ]

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600;color:#192646;vertical-align:top">${label}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;color:#475a7a">${String(value).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('')

  return `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;color:#192646"><h2 style="color:#192646">New contact form submission</h2><table style="border-collapse:collapse;width:100%;max-width:600px">${tableRows}</table></body></html>`
}

export async function POST(request: Request) {
  let body: ContactRequestBody

  try {
    body = (await request.json()) as ContactRequestBody
  } catch {
    return NextResponse.json({ code: 'invalid_request', message: 'Invalid request body.' }, { status: 400 })
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const phone = body.phone?.trim() ?? ''
  const company = body.company?.trim() ?? ''
  const interest = body.interest?.trim() ?? 'general'
  const product = body.product?.trim()
  const message = body.message?.trim() ?? ''

  if (!name) {
    return NextResponse.json({ code: 'invalid_name', message: 'Name is required.' }, { status: 400 })
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ code: 'invalid_email', message: 'Enter a valid email address.' }, { status: 400 })
  }

  if (!validInterests.has(interest as InterestValue)) {
    return NextResponse.json({ code: 'invalid_interest', message: 'Invalid interest selection.' }, { status: 400 })
  }

  const typedInterest = interest as InterestValue

  if (typedInterest === 'demo' && product && !validFocusOptions.has(product)) {
    return NextResponse.json({ code: 'invalid_product', message: 'Invalid focus area selection.' }, { status: 400 })
  }

  if (typedInterest === 'demo' && !message) {
    return NextResponse.json({
      code: 'message_required',
      message: 'Please tell us about your Revit versions, team size, and workflows.',
    }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL ?? DEFAULT_CONTACT_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_CONTACT_EMAIL

  if (!apiKey) {
    console.error('[contact] missing RESEND_API_KEY')
    const devMessage =
      process.env.NODE_ENV === 'development'
        ? 'RESEND_API_KEY is not set'
        : 'Contact service is not configured. Please try again later or email info@digibimhub.com directly.'
    return NextResponse.json({ code: 'server_error', message: devMessage }, { status: 503 })
  }

  const resend = new Resend(apiKey)
  const emailProduct = typedInterest === 'demo' ? product : undefined
  const subject = buildSubject(typedInterest, emailProduct)
  const html = buildEmailHtml({
    name,
    email,
    phone,
    company,
    interest: typedInterest,
    product: emailProduct,
    message,
  })

  try {
    const { error } = await resend.emails.send({
      from: formatFromAddress(fromEmail),
      to: toEmail,
      replyTo: email,
      subject,
      html,
    })

    if (error) {
      console.error('[contact] resend error', error)
      return NextResponse.json(
        { code: 'send_failed', message: 'Could not send your message. Please try again or email us directly.' },
        { status: 502 },
      )
    }

    console.info('[contact]', {
      interest: typedInterest,
      product: emailProduct ?? null,
      email,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] unexpected error', error)
    return NextResponse.json(
      { code: 'server_error', message: 'Could not send your message. Please try again later.' },
      { status: 500 },
    )
  }
}
