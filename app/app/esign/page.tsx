export default function ESignPage() {
  return (
    <div>
      <h1>E-Signature</h1>
      <p>Manage electronic signature requests and documents.</p>
      <div style={{ marginTop: '24px', background: 'white', padding: '24px', borderRadius: '8px' }}>
        <h3>Pending Signatures</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Form 8879 - John Doe</li>
          <li style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Engagement Letter - Jane Smith</li>
        </ul>
      </div>
    </div>
  )
}
