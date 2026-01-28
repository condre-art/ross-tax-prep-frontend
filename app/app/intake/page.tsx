export default function IntakePage() {
  return (
    <div>
      <h1>Client Intake</h1>
      <p>Collect client information and documentation for tax preparation.</p>
      <div style={{ marginTop: '24px', background: 'white', padding: '24px', borderRadius: '8px' }}>
        <form>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Client Name
            </label>
            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Email
            </label>
            <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Tax Year
            </label>
            <select style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
          <button type="submit" style={{ padding: '12px 24px', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: '4px' }}>
            Start Intake
          </button>
        </form>
      </div>
    </div>
  )
}
