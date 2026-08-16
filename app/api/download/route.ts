import { NextResponse } from 'next/server'
import {
  extractCompanyName,
  getProductForDomain,
  isFreeMailDomain,
  parseEmail,
} from '@/lib/download-registry'

type DownloadRequestBody = {
  email?: string
}

export async function POST(request: Request) {
  let body: DownloadRequestBody

  try {
    body = (await request.json()) as DownloadRequestBody
  } catch {
    return NextResponse.json({ code: 'invalid_request', message: 'Invalid request body.' }, { status: 400 })
  }

  const email = body.email?.trim()
  if (!email) {
    return NextResponse.json({ code: 'invalid_email', message: 'Email is required.' }, { status: 400 })
  }

  const parsed = parseEmail(email)
  if (!parsed) {
    return NextResponse.json({ code: 'invalid_email', message: 'Enter a valid email address.' }, { status: 400 })
  }

  if (isFreeMailDomain(parsed.domain)) {
    return NextResponse.json(
      {
        code: 'free_mail',
        message: 'Use your company email address to download licensed software.',
      },
      { status: 403 },
    )
  }

  let product
  try {
    product = getProductForDomain(parsed.domain)
  } catch (error) {
    console.error('[download] configuration error', error)
    const detail = error instanceof Error ? error.message : 'Unknown configuration error'
    const message =
      process.env.NODE_ENV === 'development'
        ? detail
        : 'Download service is not configured. Please try again later.'
    return NextResponse.json({ code: 'server_error', message }, { status: 500 })
  }

  if (!product) {
    return NextResponse.json(
      {
        code: 'not_authorized',
        message: 'Your email domain is not authorized for downloads. Contact us to request access.',
      },
      { status: 403 },
    )
  }

  const companyName = extractCompanyName(parsed.domain)

  console.info('[download]', {
    email: parsed.local + '@' + parsed.domain,
    domain: parsed.domain,
    companyName,
    productId: product.id,
    timestamp: new Date().toISOString(),
  })

  return NextResponse.json({
    companyName,
    productId: product.id,
    downloadUrl: product.link,
  })
}
