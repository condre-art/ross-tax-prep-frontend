'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AdvanceDecision, AdvanceDecisionStatus } from '@/lib/types/bank-products'
import { formatCurrency } from '@/lib/utils/validation'
import { logAuditEntry, AUDIT_ACTIONS } from '@/lib/utils/audit'

// Mock decision - in production this would come from API
const MOCK_DECISION: AdvanceDecision = {
  status: 'APPROVED',
  amount: 1500,
  terms: 'Terms and conditions apply. APR 35.99%. Fees may apply.',
  providerId: 'SBTPG',
  decisionDate: new Date().toISOString(),
}

export default function AdvancePage() {
  const router = useRouter()
  const [decision, setDecision] = useState<AdvanceDecision | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchDecision = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setDecision(MOCK_DECISION)
      setLoading(false)
      
      await logAuditEntry({
        action: AUDIT_ACTIONS.ADVANCE_DECISION_VIEWED,
        userId: 'client-temp-id',
        details: { status: MOCK_DECISION.status },
      })
    }
    
    fetchDecision()
  }, [])

  const handleAcceptOffer = async () => {
    await logAuditEntry({
      action: AUDIT_ACTIONS.ADVANCE_OFFER_ACCEPTED,
      userId: 'client-temp-id',
      details: { amount: decision?.amount },
    })
    
    router.push('/app/refund-allocation')
  }

  const handleContinueWithRT = () => {
    router.push('/refund-allocation')
  }

  const handleCheckStatus = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
          <p className="text-gray-600">Checking your eligibility...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-off-white py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">
            Refund Advance Decision
          </h1>
          <p className="text-gray-600">
            Your eligibility is determined by the provider. Results may be instant or pending.
          </p>
        </div>

        {decision && (
          <div className="bg-white rounded-lg shadow-md p-8">
            {decision.status === 'APPROVED' && (
              <ApprovedState
                amount={decision.amount!}
                terms={decision.terms}
                onAccept={handleAcceptOffer}
              />
            )}
            
            {decision.status === 'PENDING' && (
              <PendingState
                reasons={decision.reasons}
                onCheckStatus={handleCheckStatus}
              />
            )}
            
            {decision.status === 'DENIED' && (
              <DeniedState
                reasons={decision.reasons}
                onContinue={handleContinueWithRT}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function ApprovedState({
  amount,
  terms,
  onAccept,
}: {
  amount: number
  terms?: string
  onAccept: () => void
}) {
  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-navy mb-2">You&apos;re approved!</h2>
        <p className="text-xl text-gray-700">
          Approved amount: <span className="font-bold text-green-600">{formatCurrency(amount)}</span>
        </p>
      </div>
      
      {terms && (
        <div className="bg-gray-50 p-4 rounded mb-6">
          <p className="text-sm text-gray-600">{terms}</p>
        </div>
      )}
      
      <button
        onClick={onAccept}
        className="w-full py-3 bg-gold text-navy font-semibold rounded hover:bg-opacity-90 transition"
      >
        Accept Offer
      </button>
    </div>
  )
}

function PendingState({
  reasons,
  onCheckStatus,
}: {
  reasons?: string[]
  onCheckStatus: () => void
}) {
  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">⏳</div>
        <h2 className="text-2xl font-bold text-navy mb-2">Decision pending</h2>
        <p className="text-gray-600">
          We&apos;re waiting for a provider response.
        </p>
      </div>
      
      {reasons && reasons.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-navy mb-2">Reasons:</h3>
          <ul className="list-disc list-inside space-y-1">
            {reasons.map((reason, index) => (
              <li key={index} className="text-gray-600">{reason}</li>
            ))}
          </ul>
        </div>
      )}
      
      <button
        onClick={onCheckStatus}
        className="w-full py-3 bg-navy text-white font-semibold rounded hover:bg-opacity-90 transition"
      >
        Check Status
      </button>
    </div>
  )
}

function DeniedState({
  reasons,
  onContinue,
}: {
  reasons?: string[]
  onContinue: () => void
}) {
  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">ℹ️</div>
        <h2 className="text-2xl font-bold text-navy mb-2">Not approved at this time</h2>
        <p className="text-gray-600">
          You can still continue with Refund Transfer (RT) or Off-Bank.
        </p>
      </div>
      
      {reasons && reasons.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-navy mb-2">Reasons:</h3>
          <ul className="list-disc list-inside space-y-1">
            {reasons.map((reason, index) => (
              <li key={index} className="text-gray-600">{reason}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="space-y-3">
        <button
          onClick={onContinue}
          className="w-full py-3 bg-gold text-navy font-semibold rounded hover:bg-opacity-90 transition"
        >
          Continue with RT
        </button>
        
        <button
          onClick={() => window.history.back()}
          className="w-full py-3 border-2 border-navy text-navy font-semibold rounded hover:bg-navy hover:text-white transition"
        >
          Choose Another Option
        </button>
      </div>
    </div>
  )
}
