export default function DocumentsPage() {
  return (
    <div>
      <h1>Documents</h1>
      <p>Manage client documents and forms.</p>
      <div style={{ marginTop: '24px', background: 'white', padding: '24px', borderRadius: '8px' }}>
        <h3>Recent Documents</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '12px', borderBottom: '1px solid #eee' }}>W-2 Form - John Doe</li>
          <li style={{ padding: '12px', borderBottom: '1px solid #eee' }}>1099-MISC - Jane Smith</li>
          <li style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Schedule C - Bob Johnson</li>
        </ul>
      </div>
    </div>
  )
}
