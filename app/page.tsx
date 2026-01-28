import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header style={{ background: 'var(--navy)', padding: '24px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', margin: 0, fontSize: '2rem' }}>Ross Tax & Bookkeeping</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '60px 20px', textAlign: 'center', background: 'white' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Trusted Tax & Bookkeeping Services
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 32px', fontSize: '1.2rem' }}>
            Ross Tax & Bookkeeping provides accurate, confidential, and dependable
            tax preparation and bookkeeping services for individuals and small businesses.
            We simplify the process so you can file with confidence.
          </p>
          <Link href="/app/intake" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
            Start Your Tax Filing
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '60px 20px' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>
            Our Services
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px' 
          }}>
            <div className="card">
              <h3 style={{ marginBottom: '12px' }}>Individual Tax Preparation</h3>
              <p>
                Federal and state tax returns prepared accurately and on time, with
                personalized support every step of the way.
              </p>
              <Link href="/services/tax" style={{ color: 'var(--gold)', marginTop: '12px', display: 'inline-block' }}>
                Learn more →
              </Link>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: '12px' }}>Business Tax Services</h3>
              <p>
                Tax solutions for small businesses, self-employed professionals,
                and independent contractors.
              </p>
              <Link href="/services/tax" style={{ color: 'var(--gold)', marginTop: '12px', display: 'inline-block' }}>
                Learn more →
              </Link>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: '12px' }}>Bookkeeping</h3>
              <p>
                Monthly and quarterly bookkeeping to keep your finances organized,
                compliant, and stress-free.
              </p>
              <Link href="/services/bookkeeping" style={{ color: 'var(--gold)', marginTop: '12px', display: 'inline-block' }}>
                Learn more →
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/pricing" className="btn btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--navy)', color: 'white', padding: '32px 20px', textAlign: 'center' }}>
        <div className="container">
          <p>© 2026 Ross Tax & Bookkeeping. All rights reserved.</p>
          <div style={{ marginTop: '16px' }}>
            <Link href="/portal/login" style={{ color: 'var(--gold)', marginRight: '20px' }}>
              Client Login
            </Link>
            <Link href="/admin/clients" style={{ color: 'var(--gold)' }}>
              Staff Portal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
