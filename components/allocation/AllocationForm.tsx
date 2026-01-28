'use client'

import { useState } from 'react'
import { AllocationItem } from '@/types/bank-products'

interface AllocationFormProps {
  totalRefund: number
  allocations: AllocationItem[]
  onAllocationsChange: (allocations: AllocationItem[]) => void
}

export default function AllocationForm({ totalRefund, allocations, onAllocationsChange }: AllocationFormProps) {
  const [newAllocationType, setNewAllocationType] = useState<'savings_bond' | 'direct_deposit' | 'check' | 'card'>('direct_deposit')

  const allocatedAmount = allocations.reduce((sum, item) => sum + item.amount, 0)
  const remainingAmount = totalRefund - allocatedAmount

  const addAllocation = () => {
    const newAllocation: AllocationItem = {
      id: `alloc-${Date.now()}`,
      type: newAllocationType,
      amount: 0,
      description: ''
    }
    onAllocationsChange([...allocations, newAllocation])
  }

  const updateAllocation = (id: string, updates: Partial<AllocationItem>) => {
    onAllocationsChange(
      allocations.map(alloc => 
        alloc.id === id ? { ...alloc, ...updates } : alloc
      )
    )
  }

  const removeAllocation = (id: string) => {
    onAllocationsChange(allocations.filter(alloc => alloc.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-600 mb-1">Total Refund</p>
            <p className="text-2xl font-bold text-navy">${totalRefund.toLocaleString()}</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-600 mb-1">Allocated</p>
            <p className="text-2xl font-bold text-gold">${allocatedAmount.toLocaleString()}</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-600 mb-1">Remaining</p>
            <p className="text-2xl font-bold text-green-600">${remainingAmount.toLocaleString()}</p>
          </div>
        </div>

        {remainingAmount < 0 && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <p className="text-red-800 text-sm">
              <strong>Warning:</strong> Your allocations exceed your total refund by ${Math.abs(remainingAmount).toLocaleString()}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {allocations.map((allocation, index) => (
          <div key={allocation.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-navy">
                Allocation #{index + 1} - {allocation.type.replace('_', ' ').toUpperCase()}
              </h3>
              <button
                onClick={() => removeAllocation(allocation.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={allocation.amount || ''}
                  onChange={(e) => updateAllocation(allocation.id, { amount: parseFloat(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (Optional)
                </label>
                <input
                  type="text"
                  value={allocation.description || ''}
                  onChange={(e) => updateAllocation(allocation.id, { description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold"
                  placeholder="e.g., Emergency fund"
                />
              </div>
            </div>

            {allocation.type === 'savings_bond' && (
              <div className="mt-4 p-4 bg-blue-50 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Savings Bonds:</strong> Purchase U.S. Series I or EE Savings Bonds. 
                  Bonds are issued in denominations of $50, $100, $200, $500, and $1,000.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-navy mb-4">Add New Allocation</h3>
        <div className="flex gap-4">
          <select
            value={newAllocationType}
            onChange={(e) => setNewAllocationType(e.target.value as any)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold"
          >
            <option value="direct_deposit">Direct Deposit</option>
            <option value="check">Paper Check</option>
            <option value="card">Prepaid Card</option>
            <option value="savings_bond">Savings Bond</option>
          </select>
          <button
            onClick={addAllocation}
            disabled={remainingAmount <= 0}
            className="bg-gold text-navy px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Allocation
          </button>
        </div>
      </div>
    </div>
  )
}
