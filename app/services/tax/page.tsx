import Link from 'next/link'

export default function TaxServicesPage() {
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
        <h1 style={{ marginBottom: '24px' }}>Tax Preparation Services</h1>
        
        <div className="card" style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px' }}>Comprehensive Tax Solutions</h2>
          <p style={{ marginBottom: '16px' }}>
            Our tax preparation services are designed to make filing your taxes simple, 
            accurate, and stress-free. We handle everything from basic returns to complex 
            business filings.
          </p>
        </div>

        <h2 style={{ marginBottom: '24px' }}>Our Services Include:</h2>

        <div style={{ display: 'grid', gap: '24px', marginBottom: '32px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Individual Tax Returns</h3>
            <p>Federal and state income tax preparation with personalized service</p>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Business Tax Returns</h3>
            <p>Corporate, partnership, and self-employment tax filing</p>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Bank Products</h3>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li>Refund Transfer - Receive your refund faster</li>
              <li>Refund Advance - Get funds before your refund arrives (eligibility required)</li>
              <li>Multiple payout options: Direct deposit, check, or prepaid card</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '12px' }}>Savings Bonds & Refund Allocation</h3>
            <p>Allocate your refund to savings bonds or multiple accounts</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/app/intake" className="btn btn-primary" style={{ fontSize: '1.1rem', marginRight: '16px' }}>
            Start Your Return
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
