'use client'

interface PayoutMethodFormProps {
  onSubmit: (method: 'direct' | 'check' | 'card', details: any) => void
}

export default function PayoutMethodForm({ onSubmit }: PayoutMethodFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
      <h3>Payout Method</h3>
      <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Select Payout Method
          </label>
          <select style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <option value="direct">Direct Deposit</option>
            <option value="check">Paper Check</option>
            <option value="card">Prepaid Card</option>
          </select>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Routing Number
          </label>
          <input
            type="text"
            placeholder="9 digits"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Account Number
          </label>
          <input
            type="text"
            placeholder="Account number"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '12px 24px',
            background: 'var(--navy)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Save Payout Method
        </button>
      </form>
    </div>
  )
}
