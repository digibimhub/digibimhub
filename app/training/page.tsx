import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const courses = [
  {
    level: 1,
    title: 'Junior BIM Modeler',
    color: 'bg-green-500',
    duration: '4 months',
    price: '₹15,000',
    requirement: 'Diploma/Degree',
    slug: 'junior-bim-modeler',
  },
  {
    level: 2,
    title: 'BIM Modeler – MEP',
    color: 'bg-blue-500',
    duration: '5 months',
    price: '₹25,000',
    requirement: '2-3 years experience',
    slug: 'bim-modeler',
  },
  {
    level: 3,
    title: 'BIM Coordinator – MEP',
    color: 'bg-purple-500',
    duration: '6 months',
    price: '₹35,000',
    requirement: '3-6 years experience',
    slug: 'bim-coordinator',
  },
  {
    level: 4,
    title: 'Senior BIM Modeler – MEP',
    color: 'bg-red-500',
    duration: '6 months',
    price: '₹40,000',
    requirement: '2-5 Gulf project years',
    slug: 'senior-bim-modeler',
  },
  {
    level: 5,
    title: 'BIM Manager – MEP',
    color: 'bg-red-900',
    duration: '8 months',
    price: '₹50,000',
    requirement: '10-15 years experience',
    slug: 'bim-manager',
  },
]

export default function Training() {
  return (
    <>
      <Navbar />
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Our BIM Training Programs</h1>
            <p className="text-xl text-gray-600">Choose your level and start learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course) => (
              <Link key={course.slug} href={`/training/${course.slug}`}>
                <div className={`${course.color} p-6 rounded-lg text-white cursor-pointer hover:shadow-lg transition-shadow`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                      Level {course.level}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm opacity-90">⏱️ {course.duration}</p>
                    <p className="text-sm opacity-90">💰 {course.price}</p>
                    <p className="text-xs opacity-80">📌 {course.requirement}</p>
                  </div>
                  <button className="w-full bg-white text-gray-900 font-semibold py-2 rounded hover:bg-gray-100">
                    VIEW COURSE →
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/training/quiz" className="btn-primary">
              TAKE SKILL QUIZ
            </Link>
            <button className="btn-secondary">
              COMPARE COURSES
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
