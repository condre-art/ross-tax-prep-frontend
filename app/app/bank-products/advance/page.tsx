export default function BankProductAdvancePage() {
  return (
    <div>
      <h1>Refund Advance</h1>
      <p>Configure and approve refund advance products.</p>
      <div style={{ marginTop: '24px', background: 'white', padding: '24px', borderRadius: '8px' }}>
        <h3>Advance Options</h3>
        <div style={{ marginTop: '16px', display: 'grid', gap: '12px' }}>
          <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h4>$500 Advance</h4>
            <p>Available for refunds over $1,000</p>
          </div>
          <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h4>$1,000 Advance</h4>
            <p>Available for refunds over $2,000</p>
          </div>
          <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <h4>$2,000 Advance</h4>
            <p>Available for refunds over $4,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
