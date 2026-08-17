import type { Metadata } from 'next'
import { productName } from '@/lib/software-solutions'

export const metadata: Metadata = {
  title: 'Downloads | DigiBim Hub',
  description: `Download authorized ${productName} Revit add-in installers with your company email.`,
}

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return children
}
