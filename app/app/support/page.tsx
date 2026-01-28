export default function SupportPage() {
  return (
    <div>
      <h1>Support</h1>
      <p>Get help and access resources.</p>
      <div style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
          <h3>Contact Support</h3>
          <p>Email: support@rosstaxprep.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
          <h3>Documentation</h3>
          <ul>
            <li>User Guide</li>
            <li>Tax Forms Reference</li>
            <li>Video Tutorials</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
