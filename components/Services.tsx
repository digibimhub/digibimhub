export default function Services() {
  const services = [
    {
      icon: '📚',
      title: 'Training',
      description: '5 Specialized BIM Courses from Fresher to Manager',
    },
    {
      icon: '💻',
      title: 'Add-ons',
      description: 'Revit Tools & Extensions for Windows',
    },
    {
      icon: '🎯',
      title: 'Placement',
      description: 'Career Guidance & Job Placement Support',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="heading-sm mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
