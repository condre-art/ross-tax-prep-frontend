export default function SupportPage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '900px' }}>
      <h1 style={{ marginBottom: '32px' }}>Support & Help</h1>

      {/* Quick Contact */}
      <div className="card" style={{ marginBottom: '24px', background: '#e8f4f8' }}>
        <h2 style={{ marginBottom: '16px' }}>Need Help?</h2>
        <p style={{ marginBottom: '16px' }}>
          Our team is here to assist you with any questions about your tax return, 
          documents, or account.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '4px' }}>Phone</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>(555) 123-4567</p>
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '4px' }}>Email</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>support@rosstax.com</p>
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '4px' }}>Hours</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Mon-Fri 9am-6pm EST</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '24px' }}>Send Us a Message</h2>

        <div className="form-group">
          <label className="form-label">Subject</label>
          <select className="form-select" required>
            <option value="">Select a topic</option>
            <option value="return-status">Return Status Question</option>
            <option value="document">Document Upload Issue</option>
            <option value="bank-product">Bank Product Question</option>
            <option value="refund">Refund Question</option>
            <option value="amendment">Return Amendment</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea 
            className="form-input" 
            rows={6}
            placeholder="Please describe your question or issue..."
            required
            style={{ resize: 'vertical', fontFamily: 'inherit' }}
          ></textarea>
        </div>

        <div className="form-group">
          <label className="form-label">Preferred Contact Method</label>
          <select className="form-select">
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
          Send Message
        </button>
      </form>

      {/* FAQ Section */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>Frequently Asked Questions</h2>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>When will I receive my refund?</h3>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>
            Most refunds are issued within 21 days of IRS acceptance. If you selected a Refund 
            Transfer, funds are typically disbursed 24-48 hours after the IRS deposits your refund.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>Can I change my bank account information?</h3>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>
            Once your return has been filed with the IRS, bank account information cannot be changed. 
            Please contact us immediately if you need to make changes before filing.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>What is a Refund Transfer?</h3>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>
            A Refund Transfer allows you to pay your tax preparation fees from your refund. 
            Your refund is temporarily deposited into a bank account, fees are deducted, and 
            the remainder is sent to you. A $35 fee applies.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>How do I upload additional documents?</h3>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>
            Go to the Documents page in your portal and use the upload feature. Accepted file 
            types are PDF, JPG, PNG, DOC, and DOCX (max 10MB per file).
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>What if I need to amend my return?</h3>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>
            If you discover an error after filing, contact us immediately. We can help you file 
            an amended return (Form 1040-X) to correct the issue.
          </p>
        </div>
      </div>
    </div>
  )
}
