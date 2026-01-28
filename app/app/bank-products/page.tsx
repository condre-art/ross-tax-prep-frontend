'use client'

import { useState } from 'react'
import Link from 'next/link'

type ProductType = 'off-bank' | 'bank-product' | null
type RefundMethod = 'direct-deposit' | 'check' | 'debit-card' | null
type BankProductType = 'rt' | 'advance-rt' | null

export default function BankProductsPage() {
  const [productType, setProductType] = useState<ProductType>(null)
  const [refundMethod, setRefundMethod] = useState<RefundMethod>(null)
  const [bankProductType, setBankProductType] = useState<BankProductType>(null)
  const [disclosuresAccepted, setDisclosuresAccepted] = useState(false)

  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '900px' }}>
      <h1 style={{ marginBottom: '32px' }}>Bank Products & Refund Options</h1>

      {/* Step 1: Product Selection */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>Step 1: Choose Your Product</h2>
        <p style={{ marginBottom: '24px' }}>
          Select how you&apos;d like to receive your refund:
        </p>

        <div style={{ display: 'grid', gap: '16px' }}>
          <label style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            padding: '16px', 
            border: `2px solid ${productType === 'off-bank' ? 'var(--navy)' : 'var(--border-gray)'}`,
            borderRadius: '6px',
            cursor: 'pointer',
            background: productType === 'off-bank' ? '#f0f4f8' : 'white'
          }}>
            <input 
              type="radio" 
              name="product-type"
              value="off-bank"
              checked={productType === 'off-bank'}
              onChange={(e) => setProductType(e.target.value as ProductType)}
              style={{ marginRight: '12px', marginTop: '4px' }}
            />
            <div>
              <strong style={{ display: 'block', marginBottom: '8px' }}>Off-Bank Product (No Bank Product)</strong>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>
                Receive your refund directly via direct deposit, paper check, or prepaid debit card. 
                No additional fees.
              </p>
            </div>
          </label>

          <label style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            padding: '16px', 
            border: `2px solid ${productType === 'bank-product' ? 'var(--navy)' : 'var(--border-gray)'}`,
            borderRadius: '6px',
            cursor: 'pointer',
            background: productType === 'bank-product' ? '#f0f4f8' : 'white'
          }}>
            <input 
              type="radio" 
              name="product-type"
              value="bank-product"
              checked={productType === 'bank-product'}
              onChange={(e) => setProductType(e.target.value as ProductType)}
              style={{ marginRight: '12px', marginTop: '4px' }}
            />
            <div>
              <strong style={{ display: 'block', marginBottom: '8px' }}>Bank Product</strong>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>
                Choose Refund Transfer (RT) or Refund Advance for faster access to your funds. 
                Fees apply and are deducted from your refund.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Step 2: Off-Bank Options */}
      {productType === 'off-bank' && (
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '16px' }}>Step 2: Refund Delivery Method</h2>
          <p style={{ marginBottom: '24px' }}>
            Choose how you want to receive your refund:
          </p>

          <div style={{ display: 'grid', gap: '16px' }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              padding: '16px', 
              border: `2px solid ${refundMethod === 'direct-deposit' ? 'var(--navy)' : 'var(--border-gray)'}`,
              borderRadius: '6px',
              cursor: 'pointer',
              background: refundMethod === 'direct-deposit' ? '#f0f4f8' : 'white'
            }}>
              <input 
                type="radio" 
                name="refund-method"
                value="direct-deposit"
                checked={refundMethod === 'direct-deposit'}
                onChange={(e) => setRefundMethod(e.target.value as RefundMethod)}
                style={{ marginRight: '12px', marginTop: '4px' }}
              />
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'block', marginBottom: '8px' }}>Direct Deposit</strong>
                <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}>
                  Fastest and most secure option. Funds deposited directly to your bank account.
                </p>
                {refundMethod === 'direct-deposit' && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-gray)' }}>
                    <div className="form-group">
                      <label className="form-label">Routing Number</label>
                      <input type="text" className="form-input" placeholder="9-digit routing number" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Account Number</label>
                      <input type="text" className="form-input" placeholder="Your account number" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Account Type</label>
                      <select className="form-select">
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </label>

            <label style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              padding: '16px', 
              border: `2px solid ${refundMethod === 'check' ? 'var(--navy)' : 'var(--border-gray)'}`,
              borderRadius: '6px',
              cursor: 'pointer',
              background: refundMethod === 'check' ? '#f0f4f8' : 'white'
            }}>
              <input 
                type="radio" 
                name="refund-method"
                value="check"
                checked={refundMethod === 'check'}
                onChange={(e) => setRefundMethod(e.target.value as RefundMethod)}
                style={{ marginRight: '12px', marginTop: '4px' }}
              />
              <div>
                <strong style={{ display: 'block', marginBottom: '8px' }}>Paper Check</strong>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>
                  Check mailed to your address. May take 2-4 weeks to receive.
                </p>
              </div>
            </label>

            <label style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              padding: '16px', 
              border: `2px solid ${refundMethod === 'debit-card' ? 'var(--navy)' : 'var(--border-gray)'}`,
              borderRadius: '6px',
              cursor: 'pointer',
              background: refundMethod === 'debit-card' ? '#f0f4f8' : 'white'
            }}>
              <input 
                type="radio" 
                name="refund-method"
                value="debit-card"
                checked={refundMethod === 'debit-card'}
                onChange={(e) => setRefundMethod(e.target.value as RefundMethod)}
                style={{ marginRight: '12px', marginTop: '4px' }}
              />
              <div>
                <strong style={{ display: 'block', marginBottom: '8px' }}>Prepaid Debit Card</strong>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>
                  Receive funds on a prepaid card. Card fees may apply.
                </p>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* Step 2: Bank Product Options */}
      {productType === 'bank-product' && (
        <>
          <div className="card" style={{ marginBottom: '24px' }}>
            <h2 style={{ marginBottom: '16px' }}>Step 2: Select Bank Product</h2>
            <p style={{ marginBottom: '24px' }}>
              Choose the bank product that works best for you:
            </p>

            <div style={{ display: 'grid', gap: '16px' }}>
              <label style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                padding: '16px', 
                border: `2px solid ${bankProductType === 'rt' ? 'var(--navy)' : 'var(--border-gray)'}`,
                borderRadius: '6px',
                cursor: 'pointer',
                background: bankProductType === 'rt' ? '#f0f4f8' : 'white'
              }}>
                <input 
                  type="radio" 
                  name="bank-product"
                  value="rt"
                  checked={bankProductType === 'rt'}
                  onChange={(e) => setBankProductType(e.target.value as BankProductType)}
                  style={{ marginRight: '12px', marginTop: '4px' }}
                />
                <div>
                  <strong style={{ display: 'block', marginBottom: '8px' }}>Refund Transfer (RT)</strong>
                  <p style={{ fontSize: '0.95rem', margin: 0, marginBottom: '8px' }}>
                    Your refund is routed through our partner bank. Tax preparation fees are 
                    deducted from your refund, and you receive the remainder.
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                    Fee: $35 (deducted from refund)
                  </p>
                </div>
              </label>

              <label style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                padding: '16px', 
                border: `2px solid ${bankProductType === 'advance-rt' ? 'var(--navy)' : 'var(--border-gray)'}`,
                borderRadius: '6px',
                cursor: 'pointer',
                background: bankProductType === 'advance-rt' ? '#f0f4f8' : 'white'
              }}>
                <input 
                  type="radio" 
                  name="bank-product"
                  value="advance-rt"
                  checked={bankProductType === 'advance-rt'}
                  onChange={(e) => setBankProductType(e.target.value as BankProductType)}
                  style={{ marginRight: '12px', marginTop: '4px' }}
                />
                <div>
                  <strong style={{ display: 'block', marginBottom: '8px' }}>Refund Advance + RT</strong>
                  <p style={{ fontSize: '0.95rem', margin: 0, marginBottom: '8px' }}>
                    Get an advance on your expected refund before it&apos;s processed. Subject to 
                    eligibility and underwriting approval.
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>
                    Advance amounts: $250 - $4,000 (based on eligibility)
                  </p>
                  <Link 
                    href="/app/bank-products/advance" 
                    style={{ 
                      display: 'inline-block',
                      marginTop: '8px',
                      color: 'var(--gold)',
                      fontSize: '0.95rem'
                    }}
                  >
                    Learn more about Refund Advance →
                  </Link>
                </div>
              </label>
            </div>
          </div>

          {/* Disclosures */}
          <div className="card" style={{ marginBottom: '24px', background: '#fffbf0' }}>
            <h3 style={{ marginBottom: '16px' }}>Important Disclosures</h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
              <p style={{ marginBottom: '12px' }}>
                <strong>Refund Transfer Disclosure:</strong> The Refund Transfer is a bank product 
                offered by our partner bank. By selecting this option, you authorize us to direct 
                the IRS to deposit your refund into a temporary account at the partner bank. The bank 
                will deduct applicable fees and disburse the remaining funds to you via your selected 
                payout method.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Fees:</strong> A fee of $35 will be charged for the Refund Transfer service. 
                This fee will be deducted from your refund before disbursement. Additional fees may 
                apply for certain payout methods.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Timing:</strong> Refunds are typically disbursed within 24-48 hours after 
                the IRS deposits funds into the temporary account. The IRS refund timing may vary 
                and is not guaranteed.
              </p>
            </div>

            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input 
                type="checkbox"
                checked={disclosuresAccepted}
                onChange={(e) => setDisclosuresAccepted(e.target.checked)}
                style={{ marginRight: '12px' }}
              />
              <span style={{ fontSize: '0.95rem' }}>
                I have read and agree to the above disclosures
              </span>
            </label>
          </div>
        </>
      )}

      {/* Continue Button */}
      {((productType === 'off-bank' && refundMethod) || 
        (productType === 'bank-product' && bankProductType && disclosuresAccepted)) && (
        <div style={{ textAlign: 'center' }}>
          <Link 
            href="/app/esign" 
            className="btn btn-primary" 
            style={{ fontSize: '1.1rem', padding: '16px 32px' }}
          >
            Continue to E-Sign
          </Link>
        </div>
      )}

      {bankProductType === 'advance-rt' && (
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Link 
            href="/app/bank-products/advance" 
            className="btn btn-secondary"
            style={{ fontSize: '1.1rem', padding: '16px 32px' }}
          >
            Apply for Refund Advance
          </Link>
        </div>
      )}
    </div>
  )
}
