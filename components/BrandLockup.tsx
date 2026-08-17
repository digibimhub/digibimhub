import LogoMark from '@/components/LogoMark'

type Props = {
  className?: string
  /** lockup: icon + title + tagline; mark: icon only on white panel */
  variant?: 'lockup' | 'mark'
  /** Kept for API compatibility */
  size?: 'nav' | 'footer'
}

const lockupStyle = {
  panel: 'gap-1.5 px-1.5 py-1 sm:max-w-none sm:gap-2 sm:px-2 sm:py-1.5',
  markPanel: 'p-1 sm:p-1.5',
  icon: 'h-8 w-8 shrink-0 sm:h-10 sm:w-10',
  title: 'text-[11px] sm:text-sm md:text-[15px]',
  tagline: 'text-[8px] sm:text-[9px] md:text-[10px]',
  taglineGap: 'gap-0.5 sm:gap-1',
}

function BrandTagline({ taglineClass, gapClass }: { taglineClass: string; gapClass: string }) {
  return (
    <div className={`flex w-full items-center ${gapClass}`}>
      <span
        className="h-[1.5px] min-w-[0.25rem] max-w-5 flex-1 bg-gold-muted sm:max-w-none"
        aria-hidden
      />
      <p
        className={`shrink-0 whitespace-nowrap font-serif font-bold leading-none tracking-[0.02em] text-gold-muted ${taglineClass}`}
      >
        Learn<span className="px-0.5 sm:px-1">•</span>Lead
        <span className="px-0.5 sm:px-1">•</span>Innovate
      </p>
      <span
        className="h-[1.5px] min-w-[0.25rem] max-w-5 flex-1 bg-gold-muted sm:max-w-none"
        aria-hidden
      />
    </div>
  )
}

/** Shared logo for header (mark) and footer (lockup) — white panel with brand colors. */
export default function BrandLockup({ className = '', variant = 'lockup' }: Props) {
  if (variant === 'mark') {
    return (
      <div
        className={`inline-flex items-center rounded-md bg-[#f9f9f9] shadow-sm ${lockupStyle.markPanel} ${className}`}
      >
        <div className={`flex items-center justify-center ${lockupStyle.icon}`}>
          <LogoMark />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`inline-flex min-w-0 max-w-[min(100%,14.5rem)] items-center rounded-md bg-[#f9f9f9] shadow-sm ${lockupStyle.panel} ${className}`}
    >
      <div className={`flex items-center justify-center ${lockupStyle.icon}`}>
        <LogoMark />
      </div>
      <div className="flex min-w-0 flex-col items-center justify-center gap-0.5 leading-none sm:gap-1">
        <p
          className={`whitespace-nowrap font-bold uppercase leading-none tracking-[0.06em] text-navy sm:tracking-[0.08em] ${lockupStyle.title}`}
        >
          Digibim Hub
        </p>
        <BrandTagline taglineClass={lockupStyle.tagline} gapClass={lockupStyle.taglineGap} />
      </div>
    </div>
  )
}
