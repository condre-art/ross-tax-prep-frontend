import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ross Tax Prep',
  description:
    'IRS e-file approved ERO tax software; bank product compatible; ETIN, EFIN and PTIN tracking with a secure client portal.',
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
