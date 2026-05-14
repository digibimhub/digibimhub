'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/portal/login')
      return
    }

    // Fetch user data
    fetch('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.json())
      .then(data => setUser(data))
      .catch(() => router.push('/portal/login'))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/')
  }

  if (!user) return <div className="section-padding text-center">Loading...</div>

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="flex justify-between items-center mb-8">
          <h1 className="heading-lg">Welcome, {user.name}!</h1>
          <button onClick={handleLogout} className="btn-secondary">LOGOUT</button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-bold text-xl mb-4">Enrolled Courses</h2>
            <p className="text-gray-600">No courses enrolled yet.</p>
            <Link href="/training" className="text-brand-600 font-semibold mt-4 block">Browse Courses →</Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-bold text-xl mb-4">Profile</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">Name:</span> {user.name}</p>
              <p><span className="font-semibold">Email:</span> {user.email}</p>
              <p><span className="font-semibold">Phone:</span> {user.phone}</p>
            </div>
            <button className="btn-secondary mt-4 text-sm">EDIT PROFILE</button>
          </div>
        </div>
      </div>
    </div>
  )
}
