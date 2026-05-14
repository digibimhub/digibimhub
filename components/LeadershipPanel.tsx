import { directors, seniorTrainer } from '@/lib/company-people'

type Props = {
  /** card: bordered panel; hero: navy band text; footer: compact lines */
  variant?: 'card' | 'hero' | 'footer'
  className?: string
}

export default function LeadershipPanel({ variant = 'card', className = '' }: Props) {
  const dirNames = directors.map((d) => d.name).join(' · ')

  if (variant === 'footer') {
    return (
      <div className={`mt-3 space-y-1 border-t border-gray-200 pt-3 text-sm text-gray-600 ${className}`}>
        <p>
          <span className="font-medium text-gray-900">Directors</span> — {dirNames}
        </p>
        <p>
          <span className="font-medium text-gray-900">{seniorTrainer.role}</span> — {seniorTrainer.name}
        </p>
      </div>
    )
  }

  if (variant === 'hero') {
    return (
      <div
        className={`mt-8 border-t border-white/15 pt-6 text-center text-sm leading-relaxed text-white/90 ${className}`}
      >
        <p>
          <span className="font-semibold text-gold">Directors</span> — {dirNames}
        </p>
        <p className="mt-1">
          <span className="font-semibold text-gold">{seniorTrainer.role}</span> — {seniorTrainer.name}
        </p>
      </div>
    )
  }

  return (
    <section
      className={`rounded-2xl border border-navy/10 bg-[#f7f8fb] p-6 text-navy ${className}`}
      aria-labelledby="leadership-heading"
    >
      <p id="leadership-heading" className="label-gold">
        Leadership & training
      </p>
      <ul className="mt-4 space-y-3 text-sm">
        {directors.map((d) => (
          <li key={d.name}>
            <span className="text-xs font-semibold uppercase tracking-wide text-navy/55">{d.role}</span>
            <p className="mt-0.5 text-base font-semibold">{d.name}</p>
          </li>
        ))}
        <li className="border-t border-navy/10 pt-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-navy/55">{seniorTrainer.role}</span>
          <p className="mt-0.5 text-base font-semibold">{seniorTrainer.name}</p>
        </li>
      </ul>
    </section>
  )
}
