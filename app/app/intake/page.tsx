export default function IntakePage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '32px' }}>Client Intake Form</h1>

      <form className="card">
        <h2 style={{ marginBottom: '24px' }}>Personal Information</h2>

        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-input" placeholder="John Doe" required />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-input" placeholder="john.doe@example.com" required />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-input" placeholder="(555) 123-4567" required />
        </div>

        <div className="form-group">
          <label className="form-label">Social Security Number</label>
          <input type="text" className="form-input" placeholder="XXX-XX-XXXX" required />
        </div>

        <h2 style={{ marginTop: '32px', marginBottom: '24px' }}>Address</h2>

        <div className="form-group">
          <label className="form-label">Street Address</label>
          <input type="text" className="form-input" placeholder="123 Main St" required />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px' }}>
          <div className="form-group">
            <label className="form-label">City</label>
            <input type="text" className="form-input" placeholder="City" required />
          </div>

          <div className="form-group">
            <label className="form-label">State</label>
            <input type="text" className="form-input" placeholder="ST" required />
          </div>

          <div className="form-group">
            <label className="form-label">ZIP Code</label>
            <input type="text" className="form-input" placeholder="12345" required />
          </div>
        </div>

        <h2 style={{ marginTop: '32px', marginBottom: '24px' }}>Tax Year Information</h2>

        <div className="form-group">
          <label className="form-label">Filing Status</label>
          <select className="form-select" required>
            <option value="">Select filing status</option>
            <option value="single">Single</option>
            <option value="married-joint">Married Filing Jointly</option>
            <option value="married-separate">Married Filing Separately</option>
            <option value="head">Head of Household</option>
            <option value="widow">Qualifying Widow(er)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Number of Dependents</label>
          <input type="number" className="form-input" placeholder="0" min="0" />
        </div>

        <div className="form-group">
          <label className="form-label">Service Needed</label>
          <select className="form-select" required>
            <option value="">Select service</option>
            <option value="individual">Individual Tax Preparation</option>
            <option value="business">Business Tax Services</option>
            <option value="bookkeeping">Bookkeeping</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '24px', width: '100%' }}>
          Submit Intake Form
        </button>
      </form>
    </div>
  )
}
