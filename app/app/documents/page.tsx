export default function DocumentsPage() {
  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '900px' }}>
      <h1 style={{ marginBottom: '32px' }}>Tax Documents</h1>

      <div className="card" style={{ marginBottom: '32px' }}>
        <h2 style={{ marginBottom: '16px' }}>Upload Your Documents</h2>
        <p style={{ marginBottom: '24px' }}>
          Please upload all relevant tax documents including W-2s, 1099s, mortgage statements, 
          and any other documentation for the current tax year.
        </p>

        <div style={{ 
          border: '2px dashed var(--border-gray)', 
          borderRadius: '8px', 
          padding: '40px', 
          textAlign: 'center',
          background: 'var(--off-white)'
        }}>
          <p style={{ marginBottom: '16px', fontSize: '1.1rem' }}>
            Drag and drop files here, or click to browse
          </p>
          <input 
            type="file" 
            multiple 
            style={{ display: 'none' }} 
            id="file-upload"
          />
          <label htmlFor="file-upload" className="btn btn-primary" style={{ cursor: 'pointer' }}>
            Choose Files
          </label>
          <p style={{ marginTop: '12px', fontSize: '0.9rem', color: '#666' }}>
            Accepted formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB per file)
          </p>
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: '16px' }}>Uploaded Documents</h2>
        <div style={{ fontSize: '0.95rem' }}>
          <div style={{ 
            padding: '12px', 
            borderBottom: '1px solid var(--border-gray)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>W2_2025.pdf</strong>
              <span style={{ marginLeft: '12px', color: '#666' }}>Uploaded 3 days ago</span>
            </div>
            <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              View
            </button>
          </div>
          <div style={{ 
            padding: '12px', 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>1099_INT.pdf</strong>
              <span style={{ marginLeft: '12px', color: '#666' }}>Uploaded 3 days ago</span>
            </div>
            <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
