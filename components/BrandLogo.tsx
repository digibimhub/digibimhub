import Image from 'next/image'

type Props = {
  className?: string
  /** nav: plain square mark; footer: full horizontal lockup */
  variant?: 'nav' | 'footer'
}

/**
 * - Navbar: `public/logo-mark.png` (plain / icon mark).
 * - Footer: `public/logo.png` (full horizontal wordmark + tagline).
 */
export default function BrandLogo({ className = '', variant = 'nav' }: Props) {
  if (variant === 'footer') {
    return (
      <Image
        src="/logo.png"
        alt="DigiBim Hub — Learn, Lead, Innovate"
        width={1600}
        height={727}
        className={`h-28 w-auto max-w-full object-contain object-left sm:h-32 md:h-36 lg:h-40 xl:h-44 xl:max-w-[min(100%,960px)] ${className}`}
        priority
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 640px, (max-width: 1280px) 760px, 840px"
      />
    )
  }

  return (
    <Image
      src="/logo-mark.png"
      alt="DigiBim Hub"
      width={750}
      height={750}
      className={`h-11 w-11 object-contain sm:h-12 sm:w-12 md:h-[3.25rem] md:w-[3.25rem] ${className}`}
      priority
      sizes="52px"
    />
  )
}
