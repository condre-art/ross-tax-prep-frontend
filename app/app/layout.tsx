import Link from 'next/link'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/app/dashboard" className="text-2xl font-bold">
              Ross Tax & Bookkeeping
            </Link>
            <nav className="flex gap-6">
              <Link href="/app/dashboard" className="hover:text-gold transition">Dashboard</Link>
              <Link href="/app/bank-products" className="hover:text-gold transition">Bank Products</Link>
              <Link href="/app/refund-allocation" className="hover:text-gold transition">Refund Allocation</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-navy text-white text-center py-4">
        <p className="text-sm">© 2026 Ross Tax & Bookkeeping. All rights reserved.</p>
      </footer>
    </div>
  )
}
