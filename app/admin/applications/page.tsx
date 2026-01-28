'use client'

import { useState } from 'react'

type Application = {
  id: number
  clientName: string
  productType: 'RT' | 'Advance'
  status: 'Pending' | 'Approved' | 'Denied'
  amount: number
  submittedDate: string
}

export default function AdminApplicationsPage() {
  const [applications] = useState<Application[]>([
    { id: 1, clientName: 'John Doe', productType: 'Advance', status: 'Approved', amount: 1500, submittedDate: '2026-01-22' },
    { id: 2, clientName: 'Jane Smith', productType: 'RT', status: 'Approved', amount: 35, submittedDate: '2026-01-25' },
    { id: 3, clientName: 'Bob Johnson', productType: 'Advance', status: 'Pending', amount: 2000, submittedDate: '2026-01-27' },
    { id: 4, clientName: 'Alice Williams', productType: 'Advance', status: 'Denied', amount: 500, submittedDate: '2026-01-26' },
    { id: 5, clientName: 'Charlie Brown', productType: 'RT', status: 'Approved', amount: 35, submittedDate: '2026-01-23' },
  ])

  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [productFilter, setProductFilter] = useState<string>('all')

  const filteredApplications = applications.filter(app => {
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter
    const matchesProduct = productFilter === 'all' || app.productType === productFilter
    return matchesStatus && matchesProduct
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return '#f57c00'
      case 'Approved': return '#388e3c'
      case 'Denied': return '#d32f2f'
      default: return '#666'
    }
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ marginBottom: '32px' }}>Bank Product Applications</h1>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '8px' }}>Total Applications</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--navy)', margin: 0 }}>
            {applications.length}
          </p>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '8px' }}>Pending Review</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f57c00', margin: 0 }}>
            {applications.filter(a => a.status === 'Pending').length}
          </p>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '8px' }}>Approved</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#388e3c', margin: 0 }}>
            {applications.filter(a => a.status === 'Approved').length}
          </p>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '8px' }}>Denied</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d32f2f', margin: 0 }}>
            {applications.filter(a => a.status === 'Denied').length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Filter by Product</label>
            <select 
              className="form-select"
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
            >
              <option value="all">All Products</option>
              <option value="RT">Refund Transfer</option>
              <option value="Advance">Refund Advance</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Filter by Status</label>
            <select 
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Denied">Denied</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>
          Applications ({filteredApplications.length})
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-gray)', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px' }}>Client Name</th>
                <th style={{ padding: '12px 8px' }}>Product Type</th>
                <th style={{ padding: '12px 8px' }}>Amount</th>
                <th style={{ padding: '12px 8px' }}>Status</th>
                <th style={{ padding: '12px 8px' }}>Submitted Date</th>
                <th style={{ padding: '12px 8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map(app => (
                <tr key={app.id} style={{ borderBottom: '1px solid var(--border-gray)' }}>
                  <td style={{ padding: '16px 8px', fontWeight: 600 }}>{app.clientName}</td>
                  <td style={{ padding: '16px 8px' }}>
                    {app.productType === 'RT' ? 'Refund Transfer' : 'Refund Advance'}
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    ${app.amount.toLocaleString()}
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '12px',
                      background: `${getStatusColor(app.status)}20`,
                      color: getStatusColor(app.status),
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {app.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 8px', color: '#666' }}>
                    {new Date(app.submittedDate).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredApplications.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
            No applications found matching your filters.
          </div>
        )}
      </div>
    </div>
  )
}
