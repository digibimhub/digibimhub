import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DigiB IMHub - BIM Training & Consultancy',
  description: 'Master BIM. Build Your Career. Training, Revit Add-ons, and Job Placement Support.',
  keywords: 'BIM, Revit, Training, MEP, Career Guidance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
