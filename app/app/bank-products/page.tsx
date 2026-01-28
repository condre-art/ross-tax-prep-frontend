'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProviderSelection from '@/components/bank-products/ProviderSelection'
import PayoutMethodSelector from '@/components/bank-products/PayoutMethodSelector'
import { BankProvider, PayoutMethod } from '@/types/bank-products'

export default function BankProductsPage() {
  const [selectedProvider, setSelectedProvider] = useState<BankProvider>()
  const [selectedPayoutMethod, setSelectedPayoutMethod] = useState<PayoutMethod>()
  const [refundTransmitter, setRefundTransmitter] = useState(true)

  const handleSubmit = () => {
    console.log({
      provider: selectedProvider,
      payoutMethod: selectedPayoutMethod,
      refundTransmitter
    })
    alert('Bank product preferences saved! (This would connect to your API)')
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-navy">Bank Products</h1>
        <Link 
          href="/app/bank-products/advance"
          className="bg-gold text-navy px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition"
        >
          Apply for Refund Advance
        </Link>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-navy mb-2">What are Bank Products?</h3>
        <p className="text-gray-700 text-sm">
          Bank products allow you to receive your tax refund faster through a Refund Transfer (RT) 
          and optionally apply for a Refund Advance. These services are provided by IRS-approved 
          third-party financial institutions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={refundTransmitter}
            onChange={(e) => setRefundTransmitter(e.target.checked)}
            className="w-5 h-5 text-gold"
          />
          <span className="text-gray-900">
            <strong>Use Refund Transfer (RT)</strong> - Processing fees will be deducted from your refund
          </span>
        </label>
        <p className="text-sm text-gray-600 mt-2 ml-8">
          Recommended for faster processing and the ability to apply for a refund advance.
        </p>
      </div>

      {refundTransmitter && (
        <>
          <ProviderSelection 
            selectedProvider={selectedProvider}
            onProviderSelect={setSelectedProvider}
          />

          {selectedProvider && (
            <PayoutMethodSelector
              selectedMethod={selectedPayoutMethod}
              onMethodSelect={setSelectedPayoutMethod}
            />
          )}

          {selectedProvider && selectedPayoutMethod && (
            <div className="flex justify-end gap-4">
              <button
                onClick={handleSubmit}
                className="bg-navy text-white px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition"
              >
                Save Preferences
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
