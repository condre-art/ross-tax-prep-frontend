export default function StatusPage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '900px' }}>
      <h1 style={{ marginBottom: '32px' }}>Return Status</h1>

      {/* Current Status */}
      <div className="card" style={{ marginBottom: '24px', background: '#e8f8e8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '3rem' }}>✓</div>
          <div>
            <h2 style={{ marginBottom: '8px', color: '#2d6a2d' }}>Return Filed & Accepted</h2>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Your 2025 tax return has been accepted by the IRS
            </p>
          </div>
        </div>
      </div>

      {/* Status Timeline */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '24px' }}>Processing Timeline</h2>
        
        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {/* Timeline Item 1 - Completed */}
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <div style={{ 
              position: 'absolute',
              left: '-40px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#2d6a2d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.8rem'
            }}>✓</div>
            <div style={{ 
              position: 'absolute',
              left: '-28px',
              top: '24px',
              bottom: '-32px',
              width: '2px',
              background: 'var(--border-gray)'
            }}></div>
            <h3 style={{ marginBottom: '4px' }}>Documents Submitted</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
              January 15, 2026 - All required documents received
            </p>
          </div>

          {/* Timeline Item 2 - Completed */}
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <div style={{ 
              position: 'absolute',
              left: '-40px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#2d6a2d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.8rem'
            }}>✓</div>
            <div style={{ 
              position: 'absolute',
              left: '-28px',
              top: '24px',
              bottom: '-32px',
              width: '2px',
              background: 'var(--border-gray)'
            }}></div>
            <h3 style={{ marginBottom: '4px' }}>Return Prepared</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
              January 20, 2026 - Tax return completed and reviewed
            </p>
          </div>

          {/* Timeline Item 3 - Completed */}
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <div style={{ 
              position: 'absolute',
              left: '-40px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#2d6a2d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.8rem'
            }}>✓</div>
            <div style={{ 
              position: 'absolute',
              left: '-28px',
              top: '24px',
              bottom: '-32px',
              width: '2px',
              background: 'var(--border-gray)'
            }}></div>
            <h3 style={{ marginBottom: '4px' }}>E-Signed & Filed</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
              January 22, 2026 - Return electronically filed with IRS
            </p>
          </div>

          {/* Timeline Item 4 - Current */}
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <div style={{ 
              position: 'absolute',
              left: '-40px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#2d6a2d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.8rem'
            }}>✓</div>
            <div style={{ 
              position: 'absolute',
              left: '-28px',
              top: '24px',
              bottom: '-32px',
              width: '2px',
              background: 'var(--border-gray)'
            }}></div>
            <h3 style={{ marginBottom: '4px', color: '#2d6a2d' }}>IRS Accepted</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
              January 23, 2026 - Return accepted by IRS for processing
            </p>
          </div>

          {/* Timeline Item 5 - Pending */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'absolute',
              left: '-40px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'var(--border-gray)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              fontSize: '0.8rem'
            }}>5</div>
            <h3 style={{ marginBottom: '4px', color: '#666' }}>Refund Issued</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
              Expected: February 6-13, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Refund Information */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Expected Refund</h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)', marginBottom: '8px' }}>
            $5,000
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
            Federal refund amount
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Delivery Method</h3>
          <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>
            Refund Transfer
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
            Direct deposit to checking account ending in 4567
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '12px' }}>Estimated Date</h3>
          <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>
            Feb 6-13, 2026
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
            Typical IRS processing time: 21 days
          </p>
        </div>
      </div>

      {/* IRS Tracking */}
      <div className="card" style={{ background: '#e8f4f8' }}>
        <h3 style={{ marginBottom: '16px' }}>Track with IRS</h3>
        <p style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
          You can also check your refund status directly with the IRS using their &quot;Where&apos;s My Refund?&quot; tool.
        </p>
        <button className="btn btn-primary">
          Check IRS Status
        </button>
      </div>
    </div>
  )
}
