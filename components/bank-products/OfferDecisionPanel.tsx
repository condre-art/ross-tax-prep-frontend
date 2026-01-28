interface Offer {
  id: string
  clientName: string
  product: string
  amount: number
  status: 'pending' | 'approved' | 'declined'
}

interface OfferDecisionPanelProps {
  offers: Offer[]
  onApprove: (offerId: string) => void
  onDecline: (offerId: string) => void
}

export default function OfferDecisionPanel({
  offers,
  onApprove,
  onDecline,
}: OfferDecisionPanelProps) {
  return (
    <div style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
      <h3>Pending Offers</h3>
      <div style={{ marginTop: '16px' }}>
        {offers.filter(o => o.status === 'pending').map((offer) => (
          <div
            key={offer.id}
            style={{
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              marginBottom: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4>{offer.clientName}</h4>
                <p style={{ color: '#666' }}>
                  {offer.product} - ${offer.amount.toLocaleString()}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => onApprove(offer.id)}
                  style={{
                    padding: '8px 16px',
                    background: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                >
                  Approve
                </button>
                <button
                  onClick={() => onDecline(offer.id)}
                  style={{
                    padding: '8px 16px',
                    background: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        ))}
        {offers.filter(o => o.status === 'pending').length === 0 && (
          <p style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
            No pending offers
          </p>
        )}
      </div>
    </div>
  )
}
