const DEFAULT_ITEMS = [
  { value: '6', label: 'Courses', sub: 'Foundation → Advanced' },
  { value: 'AEC', label: 'Disciplines', sub: 'Arch · Struct · MEP' },
  { value: 'Live', label: 'Practice', sub: 'Hands-on projects' },
  { value: '360°', label: 'Support', sub: 'Career guidance' },
] as const

type Item = { value: string; label: string; sub: string }

export default function StatsStrip({ items = DEFAULT_ITEMS }: { items?: readonly Item[] }) {
  return (
    <div className="border-y border-navy/10 bg-white shadow-inner">
      <div className="container-max">
        <ul className="grid grid-cols-2 gap-px divide-x divide-y divide-navy/10 bg-navy/10 md:grid-cols-4 md:divide-y-0">
          {items.map((s) => (
            <li
              key={s.label}
              className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center md:py-10"
            >
              <span className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{s.value}</span>
              <span className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold">{s.label}</span>
              <span className="mt-1 max-w-[12rem] text-xs leading-snug text-navy/65">{s.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
