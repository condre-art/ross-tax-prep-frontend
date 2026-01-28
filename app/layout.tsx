import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ross Tax & Bookkeeping',
  description: 'IRS e-file approved ERO tax software with bank product compatibility',
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
