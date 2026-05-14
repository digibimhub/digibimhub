export default function Stats() {
  const stats = [
    { label: 'Students Trained', value: '500+' },
    { label: 'Jobs Placed', value: '150+' },
    { label: 'Success Rate', value: '85%' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold text-brand-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
