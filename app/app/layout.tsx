export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav
        style={{
          background: 'var(--navy)',
          color: 'white',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ color: 'white', margin: 0 }}>Ross Tax Prep</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="/app/dashboard" style={{ color: 'white' }}>
            Dashboard
          </a>
          <a href="/app/intake" style={{ color: 'white' }}>
            Intake
          </a>
          <a href="/app/documents" style={{ color: 'white' }}>
            Documents
          </a>
          <a href="/app/bank-products" style={{ color: 'white' }}>
            Bank Products
          </a>
          <a href="/app/refund-allocation" style={{ color: 'white' }}>
            Refund Allocation
          </a>
          <a href="/app/esign" style={{ color: 'white' }}>
            E-Sign
          </a>
          <a href="/app/status" style={{ color: 'white' }}>
            Status
          </a>
          <a href="/app/support" style={{ color: 'white' }}>
            Support
          </a>
        </div>
      </nav>
      <main style={{ padding: '24px' }}>{children}</main>
    </div>
  )
}
