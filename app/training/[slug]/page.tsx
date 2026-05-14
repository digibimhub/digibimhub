import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const courseData: Record<string, any> = {
  'junior-bim-modeler': {
    title: 'Junior BIM Modeler',
    color: 'bg-green-500',
    level: 'Level 1 • Fresher',
    duration: '4 months',
    price: '₹15,000',
    placement: '75%',
    salary: '6-8 LPA',
    whoShouldEnroll: [
      'Freshers with Diploma/Degree',
      'Career changers to BIM',
      'Building enthusiasts',
      'Want to learn from basics',
      'Interested in MEP systems',
    ],
    whatYouLearn: [
      'Revit fundamentals & UI',
      'Building modeling basics',
      'MEP components & systems',
      'Basic coordination',
      'Industry standards & practices',
    ],
    timeline: [
      {
        phase: 'Phase 1 (Months 1-2)',
        title: 'Foundations',
        items: ['Revit Basics', 'Interface & Tools', 'Basic Modeling'],
      },
      {
        phase: 'Phase 2 (Months 3)',
        title: 'Intermediate Skills',
        items: ['MEP Systems', 'Family Creation', 'Coordination Basics'],
      },
      {
        phase: 'Phase 3 (Months 4)',
        title: 'Advanced Concepts',
        items: ['Real Projects', 'Industry Practices', 'Documentation'],
      },
    ],
  },
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug] || courseData['junior-bim-modeler']

  return (
    <>
      <Navbar />
      <div className={`${course.color} text-white section-padding`}>
        <div className="container-max">
          <h1 className="heading-lg mb-4">{course.title}</h1>
          <p className="text-xl mb-6 opacity-90">{course.level}</p>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="opacity-75">Duration</p>
              <p className="font-semibold">{course.duration}</p>
            </div>
            <div>
              <p className="opacity-75">Price</p>
              <p className="font-semibold">{course.price}</p>
            </div>
            <div>
              <p className="opacity-75">Placement Rate</p>
              <p className="font-semibold">{course.placement}</p>
            </div>
            <div>
              <p className="opacity-75">Avg Salary</p>
              <p className="font-semibold">{course.salary}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="heading-sm mb-6">Who Should Enroll</h2>
              <ul className="space-y-3">
                {course.whoShouldEnroll?.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brand-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="heading-sm mb-6">What You'll Learn</h2>
              <ul className="space-y-3">
                {course.whatYouLearn?.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brand-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="heading-sm mb-8">Course Timeline</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {course.timeline?.map((phase: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">{phase.phase}</p>
                  <h3 className="font-bold mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item: string, i: number) => (
                      <li key={i} className="text-sm text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="heading-sm mb-8">Ready to Start?</h2>
          <button className="btn-primary">ENROLL NOW</button>
        </div>
      </div>

      <Footer />
    </>
  )
}
