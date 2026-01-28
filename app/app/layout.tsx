import Link from 'next/link'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav style={{ 
        background: 'var(--navy)', 
        color: 'white',
        padding: '16px 24px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/app/dashboard" style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold' }}>
            Ross Tax Portal
          </Link>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link href="/app/dashboard" style={{ color: 'white' }}>Dashboard</Link>
            <Link href="/app/intake" style={{ color: 'white' }}>Intake</Link>
            <Link href="/app/documents" style={{ color: 'white' }}>Documents</Link>
            <Link href="/app/status" style={{ color: 'white' }}>Status</Link>
            <Link href="/app/support" style={{ color: 'white' }}>Support</Link>
            <Link href="/portal/login" style={{ color: 'var(--gold)' }}>Logout</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, background: 'var(--off-white)' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ 
        background: 'var(--navy)', 
        color: 'white', 
        padding: '20px', 
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 Ross Tax & Bookkeeping. All rights reserved.</p>
      </footer>
    </div>
  )
}
