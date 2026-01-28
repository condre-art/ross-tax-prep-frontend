import Link from 'next/link'

export default function BookkeepingServicesPage() {
  return (
    <div>
      <header style={{ background: 'var(--navy)', padding: '24px' }}>
        <div className="container">
          <Link href="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Ross Tax & Bookkeeping
          </Link>
        </div>
      </header>

      <main className="container" style={{ padding: '60px 20px' }}>
        <h1 style={{ marginBottom: '24px' }}>Bookkeeping Services</h1>
        
        <div className="card" style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px' }}>Professional Bookkeeping Solutions</h2>
          <p>
            Keep your business finances organized and compliant with our comprehensive 
            bookkeeping services. We handle the details so you can focus on growing your business.
          </p>
        </div>

        <h2 style={{ marginBottom: '24px' }}>What We Offer:</h2>

        <div style={{ display: 'grid', gap: '24px', marginBottom: '32px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Monthly Reconciliation</h3>
            <p>Bank and credit card reconciliation to ensure accuracy</p>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Financial Reporting</h3>
            <p>Profit & loss statements, balance sheets, and cash flow reports</p>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Expense Tracking</h3>
            <p>Categorization and tracking of all business expenses</p>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Tax-Ready Records</h3>
            <p>Organized records that make tax time simple and stress-free</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/app/intake" className="btn btn-primary" style={{ fontSize: '1.1rem', marginRight: '16px' }}>
            Get Started
          </Link>
          <Link href="/pricing" className="btn btn-secondary" style={{ fontSize: '1.1rem' }}>
            View Pricing
          </Link>
        </div>
      </main>

      <footer style={{ background: 'var(--navy)', color: 'white', padding: '24px', textAlign: 'center', marginTop: '60px' }}>
        <p>© 2026 Ross Tax & Bookkeeping. All rights reserved.</p>
      </footer>
    </div>
  )
}
