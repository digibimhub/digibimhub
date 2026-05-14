import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Consultancy() {
  return (
    <>
      <Navbar />
      <div className="bg-brand-600 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="heading-lg mb-4">Career Guidance & Job Placement</h1>
          <p className="text-xl opacity-90">Complete support from training to employment</p>
        </div>
      </div>

      <div className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {['Career Path Guidance', 'Portfolio Review', 'Interview Prep', 'Job Placements', 'Salary Negotiation', 'Mentor Support'].map((service, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg">
                  <p className="font-semibold text-gray-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-600 text-white p-12 rounded-lg text-center mb-12">
            <h2 className="heading-md mb-8">Our Success</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold mb-2">150+</p>
                <p className="opacity-90">Students Placed</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">85%</p>
                <p className="opacity-90">Placement Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">12 LPA</p>
                <p className="opacity-90">Avg Salary</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="heading-md mb-8">How It Works</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {['Enroll in Course', 'Complete Training', 'Career Coaching', 'Job Offers', 'Get Placed'].map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg">
                  <p className="font-bold text-brand-600 mb-2">{idx + 1}</p>
                  <p className="text-gray-900">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="heading-md mb-8">Ready to Start Your Journey?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">EXPLORE TRAINING</button>
            <button className="btn-secondary">GET CAREER ADVICE</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
