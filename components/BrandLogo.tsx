import Image from 'next/image'

type Props = {
  className?: string
  /** nav: compact header; footer: larger lockup */
  variant?: 'nav' | 'footer'
}

/** Logo at `public/logo.png` (square or wide). Height is fixed; width follows aspect ratio. */
export default function BrandLogo({ className = '', variant = 'nav' }: Props) {
  const imgClass =
    variant === 'footer'
      ? 'h-14 w-auto max-w-[360px] object-contain object-left sm:h-16 sm:max-w-[420px]'
      : 'h-9 w-auto max-w-[260px] object-contain object-left sm:h-10 sm:max-w-[300px] md:h-11 md:max-w-[320px]'

  return (
    <Image
      src="/logo.png"
      alt="DigiBim Hub — Learn, Lead, Innovate"
      width={750}
      height={750}
      className={`${imgClass} ${className}`}
      priority
      sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 360px"
    />
  )
}
