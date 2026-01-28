import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ marginBottom: '32px' }}>Client Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Return Status</h3>
          <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>
            Your 2025 tax return is in progress
          </p>
          <Link href="/app/status" className="btn btn-primary" style={{ fontSize: '0.95rem' }}>
            View Status
          </Link>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Documents</h3>
          <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>
            Upload W-2s, 1099s, and other tax documents
          </p>
          <Link href="/app/documents" className="btn btn-secondary" style={{ fontSize: '0.95rem' }}>
            Upload Documents
          </Link>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Bank Products</h3>
          <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>
            Choose how you want to receive your refund
          </p>
          <Link href="/app/bank-products" className="btn btn-secondary" style={{ fontSize: '0.95rem' }}>
            Select Options
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: '16px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/app/intake" className="btn btn-secondary">
            Update Intake Info
          </Link>
          <Link href="/app/return-summary" className="btn btn-secondary">
            View Return Summary
          </Link>
          <Link href="/app/esign" className="btn btn-secondary">
            E-Sign Documents
          </Link>
          <Link href="/app/support" className="btn btn-secondary">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
