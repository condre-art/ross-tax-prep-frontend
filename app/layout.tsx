import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ross Tax Prep',
  description: 'Professional tax preparation and bookkeeping services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
