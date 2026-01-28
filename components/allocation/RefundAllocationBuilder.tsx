'use client'

import { useState } from 'react'

interface AllocationItem {
  id: string
  label: string
  amount: number
  type: 'fee' | 'advance' | 'payout'
}

interface RefundAllocationBuilderProps {
  totalRefund: number
  onAllocate: (allocations: AllocationItem[]) => void
}

export default function RefundAllocationBuilder({
  totalRefund,
  onAllocate,
}: RefundAllocationBuilderProps) {
  const [allocations, setAllocations] = useState<AllocationItem[]>([
    { id: '1', label: 'Preparation Fee', amount: 0, type: 'fee' },
    { id: '2', label: 'Bank Fee', amount: 0, type: 'fee' },
    { id: '3', label: 'Advance Repayment', amount: 0, type: 'advance' },
  ])

  const totalAllocated = allocations.reduce((sum, item) => sum + item.amount, 0)
  const remainingAmount = totalRefund - totalAllocated

  const updateAllocation = (id: string, amount: number) => {
    setAllocations(
      allocations.map((item) =>
        item.id === id ? { ...item, amount: Math.max(0, amount) } : item
      )
    )
  }

  return (
    <div style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
      <h3>Refund Allocation Builder</h3>
      <div
        style={{
          marginTop: '16px',
          padding: '16px',
          background: '#f0f8ff',
          borderRadius: '4px',
        }}
      >
        <p style={{ fontSize: '14px', color: '#666' }}>Total Refund</p>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--navy)' }}>
          ${totalRefund.toLocaleString()}
        </p>
      </div>

      <div style={{ marginTop: '24px' }}>
        {allocations.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{item.label}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>$</span>
              <input
                type="number"
                value={item.amount}
                onChange={(e) =>
                  updateAllocation(item.id, parseFloat(e.target.value) || 0)
                }
                style={{
                  width: '120px',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          background: remainingAmount >= 0 ? '#e8f5e9' : '#ffebee',
          borderRadius: '4px',
        }}
      >
        <p style={{ fontSize: '14px', color: '#666' }}>Client Payout</p>
        <p
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: remainingAmount >= 0 ? '#2e7d32' : '#c62828',
          }}
        >
          ${remainingAmount.toLocaleString()}
        </p>
      </div>

      <button
        onClick={() => onAllocate(allocations)}
        disabled={remainingAmount < 0}
        style={{
          marginTop: '16px',
          width: '100%',
          padding: '12px',
          background: remainingAmount >= 0 ? 'var(--navy)' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: remainingAmount >= 0 ? 'pointer' : 'not-allowed',
        }}
      >
        Confirm Allocation
      </button>
    </div>
  )
}
