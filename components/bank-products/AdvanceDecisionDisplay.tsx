'use client'

import { AdvanceDecision, AdvanceStatus } from '@/types/bank-products'

interface AdvanceDecisionDisplayProps {
  decision: AdvanceDecision
}

const STATUS_CONFIG: Record<AdvanceStatus, { label: string; color: string; icon: string }> = {
  approved: {
    label: 'Approved',
    color: 'text-green-600',
    icon: '✓'
  },
  pending: {
    label: 'Pending Review',
    color: 'text-yellow-600',
    icon: '⏳'
  },
  denied: {
    label: 'Denied',
    color: 'text-red-600',
    icon: '✗'
  }
}

export default function AdvanceDecisionDisplay({ decision }: AdvanceDecisionDisplayProps) {
  const config = STATUS_CONFIG[decision.status]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-navy mb-4">Refund Advance Decision</h2>
      
      <div className="flex items-center gap-3 mb-4">
        <span className={`text-4xl ${config.color}`}>{config.icon}</span>
        <div>
          <h3 className={`text-xl font-semibold ${config.color}`}>{config.label}</h3>
          {decision.amount && decision.status === 'approved' && (
            <p className="text-2xl font-bold text-navy mt-1">
              ${decision.amount.toLocaleString()}
            </p>
          )}
        </div>
      </div>

      {decision.reasonCode && (
        <div className="bg-gray-50 rounded-md p-4 mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-1">Reason Code:</p>
          <p className="text-gray-900">{decision.reasonCode}</p>
        </div>
      )}

      {decision.reasonMessage && (
        <div className="bg-gray-50 rounded-md p-4 mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-1">Details:</p>
          <p className="text-gray-900">{decision.reasonMessage}</p>
        </div>
      )}

      {decision.decidedAt && (
        <p className="text-sm text-gray-600">
          Decision made on: {new Date(decision.decidedAt).toLocaleDateString()}
        </p>
      )}

      {decision.status === 'approved' && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-800">
            <strong>Congratulations!</strong> Your refund advance has been approved. 
            Funds will be available according to your selected payout method.
          </p>
        </div>
      )}

      {decision.status === 'pending' && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            Your application is being reviewed. You will be notified once a decision has been made.
          </p>
        </div>
      )}

      {decision.status === 'denied' && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">
            Your refund advance application was not approved at this time. 
            You will still receive your full refund through the IRS.
          </p>
        </div>
      )}
    </div>
  )
}
