export default function StatusPage() {
  return (
    <div>
      <h1>Client Status</h1>
      <p>Track the status of client tax returns.</p>
      <div style={{ marginTop: '24px', background: 'white', padding: '24px', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--navy)' }}>
              <th style={{ textAlign: 'left', padding: '12px' }}>Client</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '12px' }}>Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}>John Doe</td>
              <td style={{ padding: '12px' }}>Filed</td>
              <td style={{ padding: '12px' }}>Today</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '12px' }}>Jane Smith</td>
              <td style={{ padding: '12px' }}>In Progress</td>
              <td style={{ padding: '12px' }}>Yesterday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
