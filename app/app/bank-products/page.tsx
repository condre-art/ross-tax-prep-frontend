export default function BankProductsPage() {
  return (
    <div>
      <h1>Bank Products</h1>
      <p>Manage bank product offerings and advance options.</p>
      <div style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
          <h3>Refund Advance</h3>
          <p>Offer instant refund advances to qualifying clients.</p>
          <a href="/app/bank-products/advance" style={{ color: 'var(--navy)', fontWeight: 'bold' }}>
            View Options →
          </a>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
          <h3>Refund Transfer</h3>
          <p>Facilitate fee deductions from client refunds.</p>
        </div>
      </div>
    </div>
  )
}
