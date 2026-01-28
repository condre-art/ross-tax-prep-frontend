'use client'

import { PayoutMethod, PayoutMethodInfo } from '@/types/bank-products'

interface PayoutMethodSelectorProps {
  selectedMethod?: PayoutMethod
  onMethodSelect: (method: PayoutMethod) => void
}

const PAYOUT_METHODS: PayoutMethodInfo[] = [
  {
    type: 'direct_deposit',
    label: 'Direct Deposit',
    description: 'Fast and secure deposit directly to your bank account',
    icon: '🏦'
  },
  {
    type: 'check',
    label: 'Paper Check',
    description: 'Traditional check mailed to your address',
    icon: '✉️'
  },
  {
    type: 'card',
    label: 'Prepaid Card',
    description: 'Receive funds on a prepaid debit card',
    icon: '💳'
  }
]

export default function PayoutMethodSelector({ selectedMethod, onMethodSelect }: PayoutMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-navy mb-4">Choose Your Payout Method</h2>
      <p className="text-gray-700 mb-6">
        Select how you would like to receive your tax refund.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {PAYOUT_METHODS.map((method) => (
          <button
            key={method.type}
            onClick={() => onMethodSelect(method.type)}
            className={`text-left bg-white rounded-lg shadow-md p-6 transition-all border-2 ${
              selectedMethod === method.type
                ? 'border-gold shadow-lg'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{method.icon}</span>
                <h3 className="text-lg font-semibold text-navy">{method.label}</h3>
              </div>
              {selectedMethod === method.type && (
                <span className="text-gold text-2xl">✓</span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{method.description}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
