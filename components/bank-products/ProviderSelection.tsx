'use client'

import { BankProvider, ProviderInfo } from '@/types/bank-products'

interface ProviderSelectionProps {
  selectedProvider?: BankProvider
  onProviderSelect: (provider: BankProvider) => void
}

const PROVIDERS: ProviderInfo[] = [
  {
    id: 'SBTPG',
    name: 'Santa Barbara Tax Products Group',
    description: 'Industry-leading tax refund solutions with competitive pricing',
    features: [
      'Fast refund processing',
      'Competitive fees',
      'Trusted by millions',
      'Excellent customer service'
    ]
  },
  {
    id: 'EPS',
    name: 'EPS Financial',
    description: 'Comprehensive financial services for tax professionals',
    features: [
      'Full-service platform',
      'Advanced security',
      'Multiple disbursement options',
      'Real-time processing'
    ]
  },
  {
    id: 'Refund Advantage',
    name: 'Refund Advantage',
    description: 'Innovative refund transfer and advance solutions',
    features: [
      'Quick approval process',
      'Flexible options',
      'Transparent pricing',
      'Dedicated support team'
    ]
  }
]

export default function ProviderSelection({ selectedProvider, onProviderSelect }: ProviderSelectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-navy mb-4">Select Your Refund Transfer Provider</h2>
      <p className="text-gray-700 mb-6">
        Choose the provider that will handle your tax refund transfer. All providers are IRS-approved and secure.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {PROVIDERS.map((provider) => (
          <button
            key={provider.id}
            onClick={() => onProviderSelect(provider.id)}
            className={`text-left bg-white rounded-lg shadow-md p-6 transition-all border-2 ${
              selectedProvider === provider.id
                ? 'border-gold shadow-lg'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-navy">{provider.name}</h3>
              {selectedProvider === provider.id && (
                <span className="text-gold text-2xl">✓</span>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-4">{provider.description}</p>
            <ul className="space-y-2">
              {provider.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start">
                  <span className="text-gold mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </div>
  )
}
