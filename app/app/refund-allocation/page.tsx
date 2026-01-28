'use client'

import { useState } from 'react'
import AllocationForm from '@/components/allocation/AllocationForm'
import { AllocationItem } from '@/types/bank-products'

export default function RefundAllocationPage() {
  // Mock data - in real app, this would come from API
  const [totalRefund] = useState(5000)
  const [allocations, setAllocations] = useState<AllocationItem[]>([
    {
      id: 'default-1',
      type: 'direct_deposit',
      amount: 5000,
      description: 'Main checking account'
    }
  ])

  const handleSave = () => {
    console.log('Saving allocations:', allocations)
    alert('Refund allocation saved! (This would connect to your API)')
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-navy mb-2">Refund Allocation</h1>
        <p className="text-gray-700">
          Split your tax refund between multiple accounts or purchase U.S. Savings Bonds
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-navy mb-2">How Refund Allocation Works</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span>Split your refund between up to 3 different accounts or destinations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span>Purchase U.S. Savings Bonds (Series I or EE) directly from your refund</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span>Combine direct deposit, checks, prepaid cards, and savings bonds</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span>All allocations must total exactly your refund amount</span>
          </li>
        </ul>
      </div>

      <AllocationForm
        totalRefund={totalRefund}
        allocations={allocations}
        onAllocationsChange={setAllocations}
      />

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-navy mb-4">U.S. Savings Bonds Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Series I Bonds</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Earn interest based on inflation rate</li>
              <li>• Fixed rate + inflation rate (adjusted twice yearly)</li>
              <li>• Tax-deferred until redemption</li>
              <li>• Minimum holding period: 1 year</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Series EE Bonds</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Fixed interest rate</li>
              <li>• Guaranteed to double in value after 20 years</li>
              <li>• Tax-deferred until redemption</li>
              <li>• Minimum holding period: 1 year</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={handleSave}
          className="bg-navy text-white px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition"
        >
          Save Allocation
        </button>
      </div>
    </div>
  )
}
