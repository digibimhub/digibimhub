import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Downloads | DigiBim Hub',
  description: 'Download authorized DigiBim Revit add-in installers with your company email.',
}

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return children
}
