'use client'

import { useState } from 'react'
import Link from 'next/link'
import AdvanceDecisionDisplay from '@/components/bank-products/AdvanceDecisionDisplay'
import { AdvanceDecision, AdvanceStatus } from '@/types/bank-products'

export default function AdvancePage() {
  // Mock data - in real app, this would come from API
  const [hasApplied, setHasApplied] = useState(false)
  const [decision, setDecision] = useState<AdvanceDecision | null>(null)

  const handleApply = (amount: number) => {
    // Mock application - in real app, this would call API
    setHasApplied(true)
    
    // Simulate different outcomes for demo
    const outcomes: AdvanceDecision[] = [
      {
        status: 'approved',
        amount: amount,
        reasonCode: 'APPROVED',
        reasonMessage: 'Your application has been approved based on your expected refund amount and credit profile.',
        decidedAt: new Date().toISOString()
      },
      {
        status: 'pending',
        reasonCode: 'REVIEW_REQUIRED',
        reasonMessage: 'Your application requires additional review. This typically takes 1-2 business days.',
        decidedAt: new Date().toISOString()
      },
      {
        status: 'denied',
        reasonCode: 'CREDIT_CRITERIA',
        reasonMessage: 'Your application does not meet the current credit criteria. You will still receive your full refund through the IRS.',
        decidedAt: new Date().toISOString()
      }
    ]

    // For demo, randomly select an outcome (in real app, this comes from backend)
    const selectedOutcome = outcomes[0] // Always show approved for demo
    setDecision(selectedOutcome)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-navy">Refund Advance Application</h1>
        <Link 
          href="/app/bank-products"
          className="text-gold hover:underline"
        >
          ← Back to Bank Products
        </Link>
      </div>

      {!hasApplied ? (
        <>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-navy mb-4">Apply for a Refund Advance</h2>
            <p className="text-gray-700 mb-6">
              Get access to your refund money faster with a Refund Advance. If approved, 
              you can receive funds before the IRS processes your return.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
              <h3 className="font-semibold text-navy mb-2">How it works:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Select your desired advance amount</li>
                <li>Submit your application</li>
                <li>Receive a decision instantly or within 24 hours</li>
                <li>If approved, funds are deposited via your selected payout method</li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-navy">Select Advance Amount:</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[500, 1000, 2000, 3500].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleApply(amount)}
                    className="bg-white border-2 border-gold rounded-lg p-4 hover:bg-gold hover:text-navy transition"
                  >
                    <p className="text-2xl font-bold">${amount}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Approval is subject to credit criteria and expected refund amount. 
                Standard fees and terms apply. The advance will be repaid from your tax refund.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-navy mb-4">Requirements:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gold">✓</span>
                <span className="text-gray-700">Expected federal refund of at least $600</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">✓</span>
                <span className="text-gray-700">Valid government-issued ID</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">✓</span>
                <span className="text-gray-700">Active bank account or prepaid card</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">✓</span>
                <span className="text-gray-700">No outstanding tax debt or liens</span>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          {decision && <AdvanceDecisionDisplay decision={decision} />}
          
          <div className="flex justify-center">
            <button
              onClick={() => {
                setHasApplied(false)
                setDecision(null)
              }}
              className="text-gold hover:underline"
            >
              Apply for a different amount
            </button>
          </div>
        </>
      )}
    </div>
  )
}
