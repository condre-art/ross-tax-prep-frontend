export default function ESignPage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '900px' }}>
      <h1 style={{ marginBottom: '32px' }}>E-Sign Your Tax Documents</h1>

      <div className="card" style={{ marginBottom: '24px', background: '#e8f4f8' }}>
        <h2 style={{ marginBottom: '16px' }}>Ready to File</h2>
        <p>
          Please review the documents below and provide your electronic signature to authorize 
          the filing of your tax return. By signing, you confirm that all information is accurate 
          and complete to the best of your knowledge.
        </p>
      </div>

      {/* Documents to Sign */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>Documents Requiring Signature</h2>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ 
            padding: '16px', 
            border: '1px solid var(--border-gray)',
            borderRadius: '6px',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ marginBottom: '4px' }}>Form 1040 - U.S. Individual Income Tax Return</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Federal tax return for 2025</p>
              </div>
              <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Review
              </button>
            </div>
          </div>

          <div style={{ 
            padding: '16px', 
            border: '1px solid var(--border-gray)',
            borderRadius: '6px',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ marginBottom: '4px' }}>Form 8879 - IRS e-file Signature Authorization</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Authorization to e-file</p>
              </div>
              <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Review
              </button>
            </div>
          </div>

          <div style={{ 
            padding: '16px', 
            border: '1px solid var(--border-gray)',
            borderRadius: '6px',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ marginBottom: '4px' }}>Bank Product Agreement</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Refund Transfer terms and conditions</p>
              </div>
              <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* E-Signature Section */}
      <form className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '24px' }}>Electronic Signature</h2>

        <div className="form-group">
          <label className="form-label">Full Name (as shown on tax return)</label>
          <input type="text" className="form-input" placeholder="John Doe" required />
        </div>

        <div className="form-group">
          <label className="form-label">Self-Select PIN (5 digits)</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="12345"
            maxLength={5}
            pattern="[0-9]{5}"
            required 
          />
          <p style={{ fontSize: '0.85rem', marginTop: '4px', color: '#666' }}>
            This 5-digit PIN will serve as your electronic signature for IRS e-file
          </p>
        </div>

        <div className="form-group">
          <label className="form-label">Date of Birth (for verification)</label>
          <input type="date" className="form-input" required />
        </div>

        <div style={{ 
          marginTop: '24px', 
          padding: '16px', 
          background: '#fffbf0',
          borderRadius: '6px',
          fontSize: '0.9rem'
        }}>
          <h3 style={{ marginBottom: '12px', fontSize: '1rem' }}>Declaration</h3>
          <label style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px', cursor: 'pointer' }}>
            <input type="checkbox" required style={{ marginRight: '12px', marginTop: '4px', minWidth: '18px' }} />
            <span>
              Under penalties of perjury, I declare that I have examined this return and 
              accompanying schedules and statements, and to the best of my knowledge and belief, 
              they are true, correct, and complete.
            </span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px', cursor: 'pointer' }}>
            <input type="checkbox" required style={{ marginRight: '12px', marginTop: '4px', minWidth: '18px' }} />
            <span>
              I authorize my tax preparer to electronically file my tax return and to receive 
              my refund information from the IRS.
            </span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
            <input type="checkbox" required style={{ marginRight: '12px', marginTop: '4px', minWidth: '18px' }} />
            <span>
              I agree to the Bank Product Agreement terms and authorize the deduction of fees 
              from my refund (if applicable).
            </span>
          </label>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
          <button type="button" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            Save for Later
          </button>
          <button type="submit" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            Sign & Submit
          </button>
        </div>
      </form>

      <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
        <p>
          By clicking &quot;Sign & Submit&quot;, you are electronically signing your tax documents. 
          This signature has the same legal effect as a handwritten signature.
        </p>
      </div>
    </div>
  )
}
