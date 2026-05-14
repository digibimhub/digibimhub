import Image from 'next/image'

type Props = {
  className?: string
  /** nav: compact header; footer: larger lockup */
  variant?: 'nav' | 'footer'
}

/** Logo at `public/logo.png` (horizontal lockup). Height is fixed; width follows aspect ratio. */
export default function BrandLogo({ className = '', variant = 'nav' }: Props) {
  const imgClass =
    variant === 'footer'
      ? 'h-14 w-auto max-w-[min(100vw-2rem,480px)] object-contain object-left sm:h-16 sm:max-w-[min(100vw-2rem,560px)]'
      : 'h-9 w-auto max-w-[min(100vw-6rem,320px)] object-contain object-left sm:h-10 sm:max-w-[min(100vw-8rem,380px)] md:h-11 md:max-w-[420px]'

  return (
    <Image
      src="/logo.png"
      alt="DigiBim Hub — Learn, Lead, Innovate"
      width={1600}
      height={727}
      className={`${imgClass} ${className}`}
      priority
      sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 360px"
    />
  )
}
