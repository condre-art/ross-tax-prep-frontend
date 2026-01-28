export default function ReturnSummaryPage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '1000px' }}>
      <h1 style={{ marginBottom: '32px' }}>2025 Tax Return Summary</h1>

      {/* Return Overview */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '24px' }}>Return Overview</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '4px' }}>Filing Status</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Single</p>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '4px' }}>Total Income</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>$65,000</p>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '4px' }}>Adjusted Gross Income</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>$62,500</p>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '4px' }}>Tax Liability</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>$8,250</p>
          </div>
        </div>
      </div>

      {/* Refund Information */}
      <div className="card" style={{ marginBottom: '24px', background: '#e8f8e8' }}>
        <h2 style={{ marginBottom: '16px', color: '#2d6a2d' }}>Estimated Refund</h2>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--navy)', marginBottom: '16px' }}>
          $5,000
        </div>
        <p style={{ fontSize: '0.95rem', color: '#666' }}>
          Federal refund based on current information. State refund calculated separately.
        </p>
      </div>

      {/* Income Sources */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>Income Sources</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-gray)' }}>
              <th style={{ textAlign: 'left', padding: '12px 0' }}>Source</th>
              <th style={{ textAlign: 'right', padding: '12px 0' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border-gray)' }}>
              <td style={{ padding: '12px 0' }}>W-2 Wages</td>
              <td style={{ textAlign: 'right', padding: '12px 0' }}>$60,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-gray)' }}>
              <td style={{ padding: '12px 0' }}>Interest Income</td>
              <td style={{ textAlign: 'right', padding: '12px 0' }}>$500</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border-gray)' }}>
              <td style={{ padding: '12px 0' }}>Dividend Income</td>
              <td style={{ textAlign: 'right', padding: '12px 0' }}>$4,500</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 0', fontWeight: 600 }}>Total Income</td>
              <td style={{ textAlign: 'right', padding: '12px 0', fontWeight: 600 }}>$65,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Deductions & Credits */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '16px' }}>Deductions</h3>
          <div style={{ fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Standard Deduction</span>
              <span>$14,600</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid var(--border-gray)' }}>
              <strong>Total Deductions</strong>
              <strong>$14,600</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '16px' }}>Tax Credits</h3>
          <div style={{ fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Child Tax Credit</span>
              <span>$0</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Education Credits</span>
              <span>$0</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid var(--border-gray)' }}>
              <strong>Total Credits</strong>
              <strong>$0</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Calculation */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>Tax Calculation</h2>
        <div style={{ fontSize: '1rem', lineHeight: '2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Taxable Income</span>
            <span>$47,900</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Federal Income Tax</span>
            <span>$8,250</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Tax Withheld from W-2</span>
            <span>$13,250</span>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '2px solid var(--border-gray)',
            marginTop: '8px',
            fontWeight: 600,
            fontSize: '1.2rem'
          }}>
            <span>Federal Refund</span>
            <span style={{ color: '#2d6a2d' }}>$5,000</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '16px', fontSize: '0.95rem', color: '#666' }}>
          This summary is based on the information you&apos;ve provided. Final amounts may vary 
          after professional review.
        </p>
        <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
          Download PDF Summary
        </button>
      </div>
    </div>
  )
}
