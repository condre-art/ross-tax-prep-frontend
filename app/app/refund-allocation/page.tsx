'use client'

import { useState } from 'react'
import Link from 'next/link'

type AllocationEntry = {
  id: string
  type: 'bond' | 'deposit'
  amount: number
  routingNumber?: string
  accountNumber?: string
  accountType?: 'checking' | 'savings'
}

export default function RefundAllocationPage() {
  const [useAllocation, setUseAllocation] = useState(false)
  const [expectedRefund] = useState(5000) // In real app, this would come from tax calculation
  const [allocations, setAllocations] = useState<AllocationEntry[]>([])
  const [bondAmount, setBondAmount] = useState(0)

  const totalAllocated = allocations.reduce((sum, a) => sum + a.amount, 0) + bondAmount
  const remaining = expectedRefund - totalAllocated
  const isValid = Math.abs(remaining) < 0.01 // Account for floating point

  const addDepositAccount = () => {
    setAllocations([
      ...allocations,
      {
        id: Math.random().toString(36).substr(2, 9),
        type: 'deposit',
        amount: 0,
        routingNumber: '',
        accountNumber: '',
        accountType: 'checking'
      }
    ])
  }

  const removeAllocation = (id: string) => {
    setAllocations(allocations.filter(a => a.id !== id))
  }

  const updateAllocation = (id: string, field: string, value: any) => {
    setAllocations(allocations.map(a => 
      a.id === id ? { ...a, [field]: value } : a
    ))
  }

  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '1000px' }}>
      <h1 style={{ marginBottom: '32px' }}>Refund Allocation</h1>

      <div className="card" style={{ marginBottom: '24px', background: '#e8f4f8' }}>
        <h2 style={{ marginBottom: '16px' }}>Allocate Your Refund</h2>
        <p style={{ marginBottom: '16px' }}>
          You can allocate your federal tax refund to multiple destinations, including 
          U.S. Savings Bonds and up to three different bank accounts using IRS Form 8888.
        </p>
        <p style={{ fontSize: '0.95rem', color: '#666' }}>
          Expected Refund: <strong style={{ color: 'var(--navy)', fontSize: '1.2rem' }}>
            ${expectedRefund.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </strong>
        </p>
      </div>

      {/* Toggle Allocation */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input 
            type="checkbox"
            checked={useAllocation}
            onChange={(e) => setUseAllocation(e.target.checked)}
            style={{ marginRight: '12px', width: '20px', height: '20px' }}
          />
          <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>
            I want to allocate my refund to savings bonds or multiple accounts
          </span>
        </label>
      </div>

      {useAllocation && (
        <>
          {/* Savings Bonds Section */}
          <div className="card" style={{ marginBottom: '24px' }}>
            <h2 style={{ marginBottom: '16px' }}>U.S. Savings Bonds (Series I)</h2>
            <p style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
              Purchase U.S. Savings Bonds with part of your refund. Bonds are issued in your name 
              and mailed to you. Minimum purchase: $50, Maximum: $5,000.
            </p>

            <div className="form-group">
              <label className="form-label">Savings Bond Amount</label>
              <input 
                type="number" 
                className="form-input" 
                placeholder="$0.00"
                min="0"
                max="5000"
                step="50"
                value={bondAmount || ''}
                onChange={(e) => setBondAmount(parseFloat(e.target.value) || 0)}
              />
              <p style={{ fontSize: '0.85rem', marginTop: '4px', color: '#666' }}>
                Must be in multiples of $50 ($50, $100, $150, etc.)
              </p>
            </div>

            {bondAmount > 0 && (
              <div style={{ 
                marginTop: '16px', 
                padding: '12px', 
                background: '#e8f8e8',
                borderRadius: '6px',
                fontSize: '0.95rem'
              }}>
                <strong>Bond Details:</strong>
                <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
                  <li>Bond Amount: ${bondAmount.toLocaleString()}</li>
                  <li>Registration: In your name as shown on tax return</li>
                  <li>Delivery: Mailed to your address within 2-3 weeks</li>
                  <li>Interest Rate: Current Series I rate (variable)</li>
                </ul>
              </div>
            )}
          </div>

          {/* Deposit Accounts Section */}
          <div className="card" style={{ marginBottom: '24px' }}>
            <h2 style={{ marginBottom: '16px' }}>Deposit Accounts</h2>
            <p style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
              Split the remaining refund among up to 3 different bank accounts (checking or savings).
            </p>

            {allocations.length === 0 && (
              <p style={{ 
                padding: '24px', 
                textAlign: 'center', 
                background: 'var(--off-white)',
                borderRadius: '6px',
                color: '#666'
              }}>
                No deposit accounts added yet. Click &quot;Add Deposit Account&quot; below to get started.
              </p>
            )}

            {allocations.map((allocation, index) => (
              <div 
                key={allocation.id}
                style={{ 
                  marginBottom: '20px', 
                  padding: '20px', 
                  border: '2px solid var(--border-gray)',
                  borderRadius: '8px'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h3 style={{ margin: 0 }}>Account {index + 1}</h3>
                  <button
                    type="button"
                    onClick={() => removeAllocation(allocation.id)}
                    style={{ 
                      background: 'transparent',
                      border: 'none',
                      color: '#c62828',
                      cursor: 'pointer',
                      fontSize: '1.1rem'
                    }}
                  >
                    × Remove
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Deposit Amount</label>
                    <input 
                      type="number" 
                      className="form-input" 
                      placeholder="$0.00"
                      min="0"
                      value={allocation.amount || ''}
                      onChange={(e) => updateAllocation(allocation.id, 'amount', parseFloat(e.target.value) || 0)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Account Type</label>
                    <select 
                      className="form-select"
                      value={allocation.accountType}
                      onChange={(e) => updateAllocation(allocation.id, 'accountType', e.target.value)}
                    >
                      <option value="checking">Checking</option>
                      <option value="savings">Savings</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Routing Number</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="9-digit routing number"
                      value={allocation.routingNumber}
                      onChange={(e) => updateAllocation(allocation.id, 'routingNumber', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Account Number</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Account number"
                      value={allocation.accountNumber}
                      onChange={(e) => updateAllocation(allocation.id, 'accountNumber', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}

            {allocations.length < 3 && (
              <button
                type="button"
                onClick={addDepositAccount}
                className="btn btn-secondary"
                style={{ marginTop: '16px' }}
              >
                + Add Deposit Account
              </button>
            )}
          </div>

          {/* Allocation Summary */}
          <div className="card" style={{ 
            marginBottom: '24px',
            background: isValid ? '#e8f8e8' : '#fff8e1'
          }}>
            <h2 style={{ marginBottom: '16px' }}>Allocation Summary</h2>
            
            <div style={{ fontSize: '1rem', lineHeight: '2' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Expected Refund:</span>
                <strong>${expectedRefund.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Savings Bonds:</span>
                <span>${bondAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              {allocations.map((allocation, index) => (
                <div key={allocation.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Account {index + 1}:</span>
                  <span>${allocation.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
              ))}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '2px solid var(--border-gray)',
                marginTop: '8px'
              }}>
                <strong>Total Allocated:</strong>
                <strong>${totalAllocated.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                color: remaining < 0 ? '#c62828' : remaining > 0 ? '#b8860b' : '#2d6a2d'
              }}>
                <strong>Remaining:</strong>
                <strong>${remaining.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
              </div>
            </div>

            {!isValid && (
              <div style={{ 
                marginTop: '16px', 
                padding: '12px', 
                background: 'white',
                borderRadius: '6px',
                color: '#c62828',
                fontSize: '0.95rem'
              }}>
                <strong>⚠ Validation Error:</strong><br />
                {remaining < 0 && 'Total allocated exceeds expected refund. Please reduce allocation amounts.'}
                {remaining > 0 && 'You must allocate your entire refund. Please add the remaining amount to an account.'}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link 
              href="/app/dashboard" 
              className="btn btn-secondary"
              style={{ fontSize: '1.1rem', padding: '16px 32px' }}
            >
              Save Draft
            </Link>
            <button 
              className="btn btn-primary"
              disabled={!isValid}
              style={{ 
                fontSize: '1.1rem', 
                padding: '16px 32px',
                opacity: isValid ? 1 : 0.5,
                cursor: isValid ? 'pointer' : 'not-allowed'
              }}
            >
              Continue to E-Sign
            </button>
          </div>
        </>
      )}

      {!useAllocation && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
            If you don&apos;t need refund allocation, you can skip this step and proceed with a 
            standard refund delivery method.
          </p>
          <Link 
            href="/app/bank-products" 
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '16px 32px' }}
          >
            Choose Refund Delivery Method
          </Link>
        </div>
      )}
    </div>
  )
}
