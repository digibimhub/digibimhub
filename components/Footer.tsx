import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">DigiB IMHub</h4>
            <p className="text-sm">BIM Training & Career Guidance</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/training" className="hover:text-white">Training</Link></li>
              <li><Link href="/software" className="hover:text-white">Software</Link></li>
              <li><Link href="/consultancy" className="hover:text-white">Consultancy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/portal/login" className="hover:text-white">Login</Link></li>
              <li><Link href="/portal/register" className="hover:text-white">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">WhatsApp: +91 85915 56811</p>
            <p className="text-sm">Email: domesticsoundlines@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2025 DigiB IMHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
