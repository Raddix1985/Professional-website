import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Christopher Owens | Cloud & Infrastructure Engineer',
  description: 'Portfolio of Christopher Owens, a Cloud & Infrastructure Engineer and DevOps Specialist focusing on resilient event-driven architectures, global edge deployments, and automation.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
