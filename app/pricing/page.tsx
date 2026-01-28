import Link from 'next/link'

export default function PricingPage() {
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
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Pricing</h1>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Individual Tax Prep */}
          <div className="card">
            <h3 style={{ marginBottom: '16px' }}>Individual Tax Prep</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gold)', marginBottom: '16px' }}>
              Starting at $150
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '20px' }}>
              <li>Federal tax return</li>
              <li>State tax return (add $50)</li>
              <li>Direct deposit or check</li>
              <li>E-file included</li>
            </ul>
            <h4 style={{ marginBottom: '12px' }}>Add-ons:</h4>
            <ul style={{ paddingLeft: '20px', fontSize: '0.95rem' }}>
              <li>Refund Transfer: $35</li>
              <li>Refund Advance: Eligibility required</li>
              <li>Savings Bonds allocation: Free</li>
            </ul>
          </div>

          {/* Business Tax Prep */}
          <div className="card">
            <h3 style={{ marginBottom: '16px' }}>Business Tax Prep</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gold)', marginBottom: '16px' }}>
              Starting at $350
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '20px' }}>
              <li>Schedule C (Sole proprietor)</li>
              <li>Corporate returns</li>
              <li>Partnership returns</li>
              <li>E-file included</li>
            </ul>
          </div>

          {/* Bookkeeping */}
          <div className="card">
            <h3 style={{ marginBottom: '16px' }}>Bookkeeping Services</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gold)', marginBottom: '16px' }}>
              Starting at $250/mo
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '20px' }}>
              <li>Monthly reconciliation</li>
              <li>Financial reports</li>
              <li>Expense tracking</li>
              <li>Tax-ready records</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/app/intake" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
            Get Started Today
          </Link>
        </div>
      </main>

      <footer style={{ background: 'var(--navy)', color: 'white', padding: '24px', textAlign: 'center', marginTop: '60px' }}>
        <p>© 2026 Ross Tax & Bookkeeping. All rights reserved.</p>
      </footer>
    </div>
  )
}
