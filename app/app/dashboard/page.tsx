export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the staff dashboard. Manage clients and workflow from here.</p>
      <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3>Active Clients</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)' }}>24</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3>Pending Returns</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)' }}>12</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3>Completed</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)' }}>156</p>
        </div>
      </div>
    </div>
  )
}
