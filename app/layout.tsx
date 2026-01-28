import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ross CloudBase Pro Web',
  description: 'Client portal for Ross Tax and Bookkeeping',
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
