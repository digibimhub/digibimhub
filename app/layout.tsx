import type { Metadata } from 'next'
import './globals.css'
import { productName } from '@/lib/software-solutions'

export const metadata: Metadata = {
  title: 'DigiBim Hub — BIM training & Revit software',
  description: `BIM training programs and ${productName} — Revit add-in tooling for enterprise teams.`,
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
