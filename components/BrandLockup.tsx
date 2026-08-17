import BrandLogo from '@/components/BrandLogo'

type Props = {
  className?: string
  /** nav: compact header; footer: slightly larger */
  size?: 'nav' | 'footer'
}

function BrandTagline({ compact }: { compact: boolean }) {
  return (
    <div
      className={`flex w-full items-center gap-0.5 sm:gap-1.5 ${
        compact ? 'mt-0.5 sm:mt-1.5' : 'mt-1 sm:mt-1.5'
      }`}
    >
      <span
        className={`h-px flex-1 bg-gold ${compact ? 'min-w-[0.2rem] max-w-4 sm:max-w-none' : 'min-w-[0.35rem]'}`}
        aria-hidden
      />
      <p
        className={`shrink-0 whitespace-nowrap font-serif leading-none text-gold ${
          compact
            ? 'text-[8px] sm:text-[10px] md:text-[11px]'
            : 'text-[9px] sm:text-[10px] md:text-[11px]'
        }`}
      >
        Learn<span className="px-0.5 sm:px-1">•</span>Lead<span className="px-0.5 sm:px-1">•</span>Innovate
      </p>
      <span
        className={`h-px flex-1 bg-gold ${compact ? 'min-w-[0.2rem] max-w-4 sm:max-w-none' : 'min-w-[0.35rem]'}`}
        aria-hidden
      />
    </div>
  )
}

export default function BrandLockup({ className = '', size = 'nav' }: Props) {
  const isNav = size === 'nav'

  return (
    <div
      className={`inline-flex min-w-0 max-w-[min(100%,14.5rem)] items-center gap-1.5 rounded-md bg-[#f9f9f9] px-1.5 py-1 shadow-sm sm:max-w-none sm:gap-2.5 sm:px-2.5 sm:py-2 ${className}`}
    >
      <BrandLogo
        variant="nav"
        className={
          isNav
            ? 'h-8 w-8 shrink-0 self-center sm:h-10 sm:w-10'
            : 'h-10 w-10 shrink-0 self-center sm:h-11 sm:w-11'
        }
      />
      <div className="flex min-w-0 flex-col items-center justify-center text-center">
        <p
          className={`whitespace-nowrap font-bold uppercase leading-none tracking-[0.06em] text-navy sm:tracking-[0.08em] ${
            isNav
              ? 'text-[11px] sm:text-sm md:text-[15px]'
              : 'text-sm sm:text-base md:text-lg'
          }`}
        >
          Digibim Hub
        </p>
        <BrandTagline compact={isNav} />
      </div>
    </div>
  )
}
