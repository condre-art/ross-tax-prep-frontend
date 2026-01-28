'use client'

import { useState } from 'react'
import Link from 'next/link'

type DecisionStatus = 'pending' | 'approved' | 'denied' | null

export default function RefundAdvancePage() {
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)
  const [decisionStatus, setDecisionStatus] = useState<DecisionStatus>(null)
  const [approvedAmount, setApprovedAmount] = useState(1500)

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault()
    setApplicationSubmitted(true)
    
    // Simulate underwriting decision (in real app, this would be an API call)
    setTimeout(() => {
      // Random decision for demo purposes
      const random = Math.random()
      if (random > 0.7) {
        setDecisionStatus('denied')
      } else if (random > 0.3) {
        setDecisionStatus('approved')
        setApprovedAmount(Math.floor(Math.random() * 3751) + 250) // $250-$4000
      } else {
        setDecisionStatus('pending')
      }
    }, 2000)
  }

  // Initial eligibility check UI
  if (!applicationSubmitted) {
    return (
      <div className="container" style={{ padding: '40px 20px', maxWidth: '900px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link href="/app/bank-products" style={{ color: 'var(--navy)' }}>
            ← Back to Bank Products
          </Link>
        </div>

        <h1 style={{ marginBottom: '32px' }}>Refund Advance Application</h1>

        <div className="card" style={{ marginBottom: '24px', background: '#e8f4f8' }}>
          <h2 style={{ marginBottom: '16px' }}>What is a Refund Advance?</h2>
          <p style={{ marginBottom: '12px' }}>
            A Refund Advance is a no-interest loan that gives you access to your expected tax 
            refund before the IRS processes your return. This allows you to receive funds faster 
            while waiting for your official refund.
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '12px' }}>
            <li>Advance amounts from $250 to $4,000</li>
            <li>No interest charges</li>
            <li>Funds typically available within 24 hours of approval</li>
            <li>Advance is repaid automatically when your refund is received</li>
          </ul>
          <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)' }}>
            Subject to eligibility requirements and underwriting approval.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ marginBottom: '16px' }}>Eligibility Requirements</h2>
          <ul style={{ paddingLeft: '24px' }}>
            <li>Expected federal refund of at least $500</li>
            <li>Valid government-issued photo ID</li>
            <li>No outstanding federal or state tax debt</li>
            <li>No bankruptcy filing in the past 12 months</li>
            <li>Meet income and credit requirements</li>
          </ul>
        </div>

        <form onSubmit={handleSubmitApplication} className="card">
          <h2 style={{ marginBottom: '24px' }}>Application Information</h2>

          <div className="form-group">
            <label className="form-label">Full Legal Name</label>
            <input type="text" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Social Security Number</label>
            <input type="text" className="form-input" placeholder="XXX-XX-XXXX" required />
          </div>

          <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Expected Federal Refund Amount</label>
            <input type="number" className="form-input" placeholder="$0.00" min="500" required />
          </div>

          <div className="form-group">
            <label className="form-label">Annual Income</label>
            <input type="number" className="form-input" placeholder="$0.00" required />
          </div>

          <div className="form-group">
            <label className="form-label">Bank Account for Disbursement</label>
            <input type="text" className="form-input" placeholder="Account number" required />
          </div>

          <div className="form-group">
            <label className="form-label">Routing Number</label>
            <input type="text" className="form-input" placeholder="9-digit routing number" required />
          </div>

          <div style={{ 
            marginTop: '24px', 
            padding: '16px', 
            background: '#fffbf0',
            borderRadius: '6px',
            fontSize: '0.9rem'
          }}>
            <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>Consent & Authorization</h3>
            <label style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px', cursor: 'pointer' }}>
              <input type="checkbox" required style={{ marginRight: '12px', marginTop: '4px' }} />
              <span>
                I authorize the lender to obtain my credit report and verify my identity, 
                income, and other information provided in this application.
              </span>
            </label>
            <label style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px', cursor: 'pointer' }}>
              <input type="checkbox" required style={{ marginRight: '12px', marginTop: '4px' }} />
              <span>
                I understand that the advance amount will be repaid from my federal tax refund 
                when it is received by the partner bank.
              </span>
            </label>
            <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="checkbox" required style={{ marginRight: '12px', marginTop: '4px' }} />
              <span>
                I have read and agree to the Refund Advance Agreement and disclosures.
              </span>
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '24px', fontSize: '1.1rem', padding: '16px' }}
          >
            Submit Application
          </button>
        </form>
      </div>
    )
  }

  // Loading state
  if (applicationSubmitted && !decisionStatus) {
    return (
      <div className="container" style={{ padding: '40px 20px', maxWidth: '700px', textAlign: 'center' }}>
        <div className="card">
          <div style={{ padding: '40px' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              border: '4px solid var(--border-gray)',
              borderTop: '4px solid var(--navy)',
              borderRadius: '50%',
              margin: '0 auto 24px',
              animation: 'spin 1s linear infinite'
            }}></div>
            <h2 style={{ marginBottom: '16px' }}>Processing Your Application</h2>
            <p>Please wait while we review your application. This may take a few moments...</p>
          </div>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // Approved status
  if (decisionStatus === 'approved') {
    return (
      <div className="container" style={{ padding: '40px 20px', maxWidth: '700px' }}>
        <div className="card" style={{ background: '#e8f8e8', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✓</div>
          <h1 style={{ color: '#2d6a2d', marginBottom: '16px' }}>Congratulations! You&apos;re Approved</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
            Your Refund Advance has been approved for:
          </p>
          <div style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: 'var(--navy)',
            marginBottom: '32px'
          }}>
            ${approvedAmount.toLocaleString()}
          </div>

          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '8px',
            textAlign: 'left',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginBottom: '16px' }}>Next Steps:</h3>
            <ol style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
              <li>Review and accept the loan terms below</li>
              <li>Provide final verification documents if needed</li>
              <li>Funds will be deposited within 24 hours</li>
              <li>Continue with your tax return to complete filing</li>
            </ol>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '20px', 
            borderRadius: '8px',
            textAlign: 'left',
            marginBottom: '24px',
            fontSize: '0.95rem'
          }}>
            <h3 style={{ marginBottom: '12px' }}>Loan Terms:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div><strong>Advance Amount:</strong></div>
              <div>${approvedAmount.toLocaleString()}</div>
              <div><strong>Interest Rate:</strong></div>
              <div>0% APR</div>
              <div><strong>Repayment:</strong></div>
              <div>Auto-deducted from refund</div>
              <div><strong>Disbursement:</strong></div>
              <div>24 hours after acceptance</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
              Accept Terms
            </button>
            <Link href="/app/bank-products" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
              Decline
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Pending status
  if (decisionStatus === 'pending') {
    return (
      <div className="container" style={{ padding: '40px 20px', maxWidth: '700px' }}>
        <div className="card" style={{ background: '#fff8e1', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>⏳</div>
          <h1 style={{ color: '#b8860b', marginBottom: '16px' }}>Application Under Review</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
            Your Refund Advance application requires additional review.
          </p>

          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '8px',
            textAlign: 'left',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginBottom: '16px' }}>What This Means:</h3>
            <p style={{ marginBottom: '12px' }}>
              We need a bit more time to review your application. This is a normal part of our 
              underwriting process and doesn&apos;t mean your application has been denied.
            </p>
            <h3 style={{ marginTop: '20px', marginBottom: '12px' }}>Next Steps:</h3>
            <ul style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
              <li>We&apos;ll contact you within 24-48 hours with a decision</li>
              <li>You may be asked to provide additional documentation</li>
              <li>Continue with your tax return preparation</li>
              <li>You can still select a Refund Transfer or Off-Bank product</li>
            </ul>
          </div>

          <Link href="/app/bank-products" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            Return to Bank Products
          </Link>
        </div>
      </div>
    )
  }

  // Denied status
  if (decisionStatus === 'denied') {
    return (
      <div className="container" style={{ padding: '40px 20px', maxWidth: '700px' }}>
        <div className="card" style={{ background: '#fdecea', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✕</div>
          <h1 style={{ color: '#c62828', marginBottom: '16px' }}>Application Not Approved</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
            Unfortunately, we&apos;re unable to approve your Refund Advance application at this time.
          </p>

          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '8px',
            textAlign: 'left',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginBottom: '16px' }}>Adverse Action Notice</h3>
            <p style={{ marginBottom: '12px', fontSize: '0.95rem' }}>
              Under the Equal Credit Opportunity Act, you have the right to know why your 
              application was not approved. Common reasons include:
            </p>
            <ul style={{ paddingLeft: '24px', lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li>Expected refund amount below minimum threshold</li>
              <li>Credit history concerns</li>
              <li>Outstanding tax liabilities</li>
              <li>Insufficient income verification</li>
            </ul>
            <p style={{ marginTop: '16px', fontSize: '0.9rem', color: '#666' }}>
              A detailed adverse action letter will be mailed to you within 30 days with specific 
              reasons for the decision.
            </p>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '8px',
            textAlign: 'left',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginBottom: '16px' }}>Other Options Available</h3>
            <p style={{ marginBottom: '16px' }}>
              You can still receive your refund through one of these options:
            </p>
            <ul style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
              <li><strong>Refund Transfer (RT):</strong> Pay tax prep fees from your refund ($35 fee)</li>
              <li><strong>Direct Deposit:</strong> Free, direct deposit to your bank account</li>
              <li><strong>Paper Check:</strong> Free, mailed to your address</li>
            </ul>
          </div>

          <Link href="/app/bank-products" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            Choose Another Option
          </Link>
        </div>
      </div>
    )
  }

  return null
}
