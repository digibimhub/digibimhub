type Props = {
  className?: string
  title?: string
  /** dark: white + gold for navy backgrounds; light: default brand colors */
  theme?: 'light' | 'dark'
}

const fills = {
  light: { primary: '#192646', accent: '#e5b449' },
  dark: { primary: '#ffffff', accent: '#e5b449' },
} as const

/** Transparent vector mark — tight viewBox, no built-in padding. Size via className. */
export default function LogoMark({
  className = '',
  title = 'DigiBim Hub',
  theme = 'light',
}: Props) {
  const { primary, accent } = fills[theme]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="172 107 405 535"
      role="img"
      aria-label={title}
      className={`block h-full w-full ${className}`}
    >
      <path fill={primary} d="M416 107 417 402 333 444 332 236 273 264 272 190 416 107Z" />
      <path
        fill={primary}
        d="M172 507 374 588 574 508 577 508 577 532 372 642 173 533 172 507Z"
      />
      <path fill={primary} d="M317 257 316 549 172 492 172 319 317 257Z" />
      <path
        fill={accent}
        d="M574 348 577 348 576 493 378 572 332 554 333 460 574 348Z"
      />
      <path fill={accent} d="M432 238 575 308 577 332 433 393 432 238Z" />
      <path fill={accent} d="M543 118 577 119 577 153 542 153 543 118Z" />
      <path fill={accent} d="M502 158 536 158 536 192 502 192 502 158Z" />
      <path fill={accent} d="M465 198 497 199 496 233 462 232 462 200 465 198Z" />
      <path fill={accent} d="M539 194 559 195 558 215 539 214 539 194Z" />
    </svg>
  )
}
