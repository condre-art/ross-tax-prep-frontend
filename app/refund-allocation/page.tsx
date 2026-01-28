'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RefundAllocation, DepositSplit } from '@/lib/types/bank-products'
import { validateAllocationTotal, formatCurrency, generateId } from '@/lib/utils/validation'
import { logAuditEntry, AUDIT_ACTIONS } from '@/lib/utils/audit'
import SavingsBondsToggle from '@/components/bank-products/SavingsBondsToggle'
import DepositSplits from '@/components/bank-products/DepositSplits'

const MOCK_REFUND_AMOUNT = 5000

export default function RefundAllocationPage() {
  const router = useRouter()
  const [refundAmount] = useState(MOCK_REFUND_AMOUNT)
  const [savingsBondsEnabled, setSavingsBondsEnabled] = useState(false)
  const [savingsBondsAmount, setSavingsBondsAmount] = useState(0)
  const [splitDepositsEnabled, setSplitDepositsEnabled] = useState(false)
  const [depositSplits, setDepositSplits] = useState<DepositSplit[]>([])
  const [validationError, setValidationError] = useState<string>('')

  const handleSavingsBondsToggle = (enabled: boolean) => {
    setSavingsBondsEnabled(enabled)
    if (!enabled) {
      setSavingsBondsAmount(0)
    }
  }

  const handleSplitDepositsToggle = (enabled: boolean) => {
    setSplitDepositsEnabled(enabled)
    if (!enabled) {
      setDepositSplits([])
    } else if (depositSplits.length === 0) {
      // Add initial split
      setDepositSplits([{
        id: generateId(),
        routingNumber: '',
        accountNumber: '',
        accountType: 'CHECKING',
        amount: 0,
      }])
    }
  }

  const handleAddSplit = () => {
    setDepositSplits([...depositSplits, {
      id: generateId(),
      routingNumber: '',
      accountNumber: '',
      accountType: 'CHECKING',
      amount: 0,
    }])
  }

  const handleRemoveSplit = (id: string) => {
    setDepositSplits(depositSplits.filter(split => split.id !== id))
  }

  const handleSplitChange = (id: string, field: keyof DepositSplit, value: any) => {
    setDepositSplits(depositSplits.map(split =>
      split.id === id ? { ...split, [field]: value } : split
    ))
  }

  const validateAndSave = async () => {
    setValidationError('')

    // Calculate total allocation
    const amounts = [
      savingsBondsEnabled ? savingsBondsAmount : 0,
      ...depositSplits.map(split => split.amount),
    ].filter(amount => amount > 0)

    // Validate total
    const validation = validateAllocationTotal(refundAmount, amounts)
    if (!validation.valid) {
      setValidationError(validation.message || 'Invalid allocation')
      return
    }

    // Validate each split has required fields
    if (splitDepositsEnabled) {
      for (const split of depositSplits) {
        if (!split.routingNumber || !split.accountNumber || split.amount <= 0) {
          setValidationError('All splits must have routing number, account number, and amount')
          return
        }
      }
    }

    // Create allocation object
    const allocation: RefundAllocation = {
      totalRefund: refundAmount,
      savingsBonds: savingsBondsEnabled ? {
        amount: savingsBondsAmount,
        enabled: true,
      } : undefined,
      depositSplits,
    }

    // Log the action
    await logAuditEntry({
      action: AUDIT_ACTIONS.ALLOCATION_SAVED,
      userId: 'client-temp-id',
      details: allocation,
    })

    // In production, this would POST to API
    console.log('Saving allocation:', allocation)
    
    // Navigate to next step (e-sign or confirmation)
    alert('Allocation saved successfully! Next: E-Sign')
    router.push('/')
  }

  const remainingAmount = refundAmount - (savingsBondsAmount + depositSplits.reduce((sum, split) => sum + split.amount, 0))

  return (
    <div className="min-h-screen bg-off-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">
            Refund Allocation
          </h1>
          <p className="text-gray-600">
            You can allocate your refund to savings bonds and/or split across accounts.
          </p>
        </div>

        {/* Refund Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Refund Amount:</span>
            <span className="text-2xl font-bold text-navy">{formatCurrency(refundAmount)}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Remaining to Allocate:</span>
            <span className={`text-xl font-semibold ${remainingAmount < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {formatCurrency(remainingAmount)}
            </span>
          </div>
        </div>

        {/* Savings Bonds */}
        <SavingsBondsToggle
          enabled={savingsBondsEnabled}
          amount={savingsBondsAmount}
          onToggle={handleSavingsBondsToggle}
          onAmountChange={setSavingsBondsAmount}
        />

        {/* Deposit Splits */}
        <DepositSplits
          enabled={splitDepositsEnabled}
          splits={depositSplits}
          onToggle={handleSplitDepositsToggle}
          onAddSplit={handleAddSplit}
          onRemoveSplit={handleRemoveSplit}
          onSplitChange={handleSplitChange}
        />

        {/* Validation Error */}
        {validationError && (
          <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded mb-6">
            {validationError}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded hover:bg-navy hover:text-white transition"
          >
            Back
          </button>
          
          <button
            onClick={validateAndSave}
            className="px-6 py-3 bg-gold text-navy font-semibold rounded hover:bg-opacity-90 transition"
          >
            Save Allocation & Continue to E-Sign
          </button>
        </div>
      </div>
    </div>
  )
}
